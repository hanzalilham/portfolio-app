"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="border-t border-border pt-12">
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Want to work together or just say hello? Reach out.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="mailto:abdelhak.razi@outlook.com"
                className="text-sm text-text-primary underline underline-offset-4 decoration-text-muted hover:decoration-text-primary transition-colors"
              >
                abdelhak.razi@outlook.com
              </a>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://github.com/AbdelhakRazi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/abdelhak-razi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:abdelhak.razi@outlook.com"
                className="text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
