import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const article = getArticleBySlug(slug);
    return {
      title: `${article.title} — Razi Abdelhak`,
      description: article.description,
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = getArticleBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 px-6">
      <article className="max-w-2xl mx-auto">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>

        <header className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {article.title}
          </h1>
          <p className="text-text-secondary text-base mb-4">
            {article.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-text-muted font-mono mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {article.readingTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </header>

        <div className="prose-custom">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </div>
  );
}
