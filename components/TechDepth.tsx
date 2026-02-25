"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { techDomains } from "@/lib/constants";

export function TechDepth() {
  return (
    <section id="stack" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-sm font-medium text-text-muted mb-8">
            What I work with
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
          {techDomains.map((domain, i) => (
            <AnimatedSection key={domain.domain} delay={i * 0.03}>
              <div>
                <h3 className="text-sm font-medium text-text-primary mb-1">
                  {domain.domain}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
