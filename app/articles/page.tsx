import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Writing — Razi Abdelhak",
  description: "Deep-dives into distributed systems, C++ infrastructure, AI pipelines, and engineering decisions.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <h1 className="text-2xl font-bold text-text-primary mb-2">Writing</h1>
        <p className="text-text-muted text-sm mb-12">
          Architecture decisions, lessons learned, and technical deep-dives.
        </p>

        {articles.length === 0 ? (
          <p className="text-text-muted text-sm">Articles coming soon.</p>
        ) : (
          <div className="space-y-1">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block group"
              >
                <div className="py-4 border-b border-border hover:border-text-muted/30 transition-colors">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-2 font-mono">
                    <time>{article.date}</time>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readingTime}
                    </span>
                  </div>
                  <h2 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors mb-1">
                    {article.title}
                  </h2>
                  <p className="text-sm text-text-muted mb-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
