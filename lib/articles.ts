import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs
    .readdirSync(articlesDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    readingTime: stats.text,
    tags: data.tags || [],
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs();
  return slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      const { content, ...meta } = article;
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
