"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/lib/constants";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-medium text-text-muted mb-8">
            Projects
          </h2>
        </AnimatedSection>

        <div className="space-y-1">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.03}>
              <ProjectRow project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const hasLink = project.github || project.website || project.articleSlug;
  const href = project.articleSlug
    ? `/articles/${project.articleSlug}`
    : project.github || project.website || "#";
  const isExternal = !project.articleSlug && (project.github || project.website);

  const content = (
    <div className="group flex items-start justify-between gap-4 py-4 border-b border-border hover:border-text-muted/30 transition-colors duration-200">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.confidential && (
            <span className="text-[10px] text-text-muted font-mono uppercase">
              NDA
            </span>
          )}
        </div>
        <p className="text-sm text-text-muted mt-1">{project.problem}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {hasLink && (
        <ArrowUpRight
          size={16}
          className="text-text-muted group-hover:text-text-primary transition-colors mt-1 shrink-0"
        />
      )}
    </div>
  );

  if (!hasLink) return content;

  if (project.articleSlug) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
