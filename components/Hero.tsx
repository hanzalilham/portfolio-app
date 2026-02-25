"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-6">
            Razi Abdelhak
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4">
            Software Engineer at{" "}
            <span className="text-text-primary">Amadeus</span>. Previously at{" "}
            <span className="text-text-primary">Ericsson</span>.
          </p>

          <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-xl">
            I build backend systems, CI/CD infrastructure, and distributed
            pipelines. C++, Go, Python, Docker, Kubernetes, Azure. I write about
            the engineering decisions behind what I ship.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/AbdelhakRazi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abdelhak-razi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abdelhak.razi@outlook.com"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
