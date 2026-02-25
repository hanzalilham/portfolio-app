"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/lib/constants";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-medium text-text-muted mb-8">Projects</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const href = project.website
    ? project.website
    : project.github
    ? project.github
    : project.articleSlug
    ? `/articles/${project.articleSlug}`
    : null;

  const isExternal = !!(project.website || project.github);

  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const inner = (
    <div className="group border border-border rounded-xl p-5 hover:border-text-muted/40 transition-colors duration-200 cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap mb-0.5">
            <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.stars !== undefined && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-500/90">
                <Star size={10} className="fill-amber-500/90 stroke-amber-500/90" />
                {project.stars}
              </span>
            )}
          </div>
        </div>
        {href && (
          <ArrowUpRight
            size={15}
            className="text-text-muted group-hover:text-text-primary transition-colors shrink-0 mt-0.5"
          />
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-text-muted bg-surface border border-border rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (!href) return inner;

  if (isExternal) {
    return (
      <a href={href} {...linkProps}>
        {inner}
      </a>
    );
  }

  return <Link href={href}>{inner}</Link>;
}
