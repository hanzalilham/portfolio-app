"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1080px] mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-text-secondary text-lg leading-relaxed">
              Started in telecom. Two years writing C++ for 5G infrastructure
              that runs at Bouygues, Jio, and Verizon. Now at Amadeus working on
              the build toolchain the whole engineering org depends on. Outside
              of work I build things end-to-end: a wearable that transcribes
              voice into structured notes, distributed ML systems, mobile apps.
              I ship, then write about what I learned.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
