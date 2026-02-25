"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-medium text-text-muted mb-8">
            Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 0.05}>
              <div className="border-b border-border pb-10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-base font-medium text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-text-secondary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-text-muted font-mono shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
