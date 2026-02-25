"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
}

export function Writing({ articles }: { articles: Article[] }) {
  return (
    <section id="writing" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-medium text-text-muted">Writing</h2>
            <Link
              href="/articles"
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              All posts
            </Link>
          </div>
        </AnimatedSection>

        <div className="space-y-1">
          {articles.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.03}>
              <Link href={`/articles/${article.slug}`}>
                <div className="group flex items-start justify-between gap-4 py-4 border-b border-border hover:border-text-muted/30 transition-colors duration-200">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 mt-1">
                    <span className="text-xs text-text-muted font-mono hidden sm:block">
                      {article.readingTime}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-text-muted group-hover:text-text-primary transition-colors"
                    />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
