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
              Open to interesting projects.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="mailto:razi.contact3@gmail.com"
                className="text-sm text-text-primary underline underline-offset-4 decoration-text-muted hover:decoration-text-primary transition-colors"
              >
                razi.contact3@gmail.com
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
                href="https://www.behance.net/abdelhakrazi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors duration-200"
                aria-label="Behance"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.443 5.35c.639 0 1.23.05 1.77.198.541.099.984.297 1.377.544.394.247.689.594.886 1.039.197.445.296.99.296 1.583 0 .693-.148 1.286-.493 1.731-.296.445-.788.84-1.378 1.138.837.248 1.476.693 1.869 1.286.394.594.591 1.336.591 2.177 0 .693-.148 1.286-.394 1.781-.246.495-.64.94-1.082 1.237-.443.297-.985.544-1.574.693-.59.148-1.18.198-1.771.198H0V5.35h7.443zm-.394 5.54c.541 0 .984-.148 1.328-.395.344-.247.492-.693.492-1.237 0-.297-.05-.594-.148-.792-.099-.198-.247-.395-.443-.494-.197-.099-.394-.198-.64-.247-.247-.05-.493-.05-.788-.05H3.05v3.215h4zm.197 5.787c.296 0 .59-.05.836-.099.247-.05.493-.198.69-.346.196-.149.344-.347.492-.594.099-.248.197-.545.197-.891 0-.693-.197-1.188-.59-1.534-.394-.297-.886-.446-1.526-.446H3.05v3.91h4.196zM16.872 19.5c-.59.594-1.477.891-2.608.891-.74 0-1.377-.148-1.918-.445-.541-.297-.984-.644-1.328-1.089-.344-.445-.59-.94-.738-1.484-.148-.544-.197-1.089-.197-1.633h9.557c0-.643-.05-1.237-.148-1.831-.099-.594-.296-1.138-.59-1.633-.296-.494-.739-.94-1.28-1.286-.54-.346-1.23-.544-2.065-.544-.788 0-1.476.148-2.066.494-.59.346-1.082.742-1.476 1.237-.394.494-.69 1.039-.886 1.633-.196.594-.295 1.188-.295 1.831 0 .693.099 1.336.295 1.93.197.594.493 1.138.886 1.583.394.445.886.84 1.476 1.088.59.248 1.279.396 2.066.396.985 0 1.82-.248 2.509-.693.69-.445 1.18-1.138 1.427-2.078h-2.41c-.099.445-.394.79-.71 1.034zm-4.59-5.886c.098-.297.246-.544.443-.792.197-.247.443-.445.739-.594.295-.148.64-.247 1.033-.247.394 0 .739.099 1.033.247.296.148.542.347.739.594.197.248.344.495.443.792.099.297.148.594.148.891h-4.68c.05-.297.05-.594.1-.891zm2.016-6.714h-4.14V5.35h4.14V6.9z" />
                </svg>
              </a>
              <a
                href="mailto:razi.contact3@gmail.com"
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

