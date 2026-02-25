"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1080px] mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-text-secondary text-lg leading-relaxed">
              Two years building 5G infrastructure at Ericsson — gRPC, protobuf,
              unix sockets, modular monolith architecture in C++. Now at
              Amadeus, where I modernize CI/CD infrastructure on Azure,
              integrate messaging pipelines, and drive GenAI adoption across
              engineering workflows. Outside of work, I architect distributed AI
              systems, build real-time streaming pipelines, and ship mobile
              platforms end-to-end.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
