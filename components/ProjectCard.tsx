"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Lock,
  ArrowRight,
  ChevronDown,
  Globe,
  Play,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const isFeatured = className?.includes("md:col-span-2");
  const num = String(index + 1).padStart(2, "0");

  return (
    <AnimatedSection delay={index * 0.08}>
      <div
        className={`group relative border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 cursor-pointer bg-surface ${className ?? ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="p-5 md:p-6">
          {/* Media area */}
          <div className="mb-5 rounded-xl overflow-hidden border border-border">
            {project.image && !imageFailed ? (
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isFeatured ? "h-52 md:h-64" : "h-40 md:h-48"}`}
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div
                className={`w-full bg-gradient-to-br from-border/50 via-surface to-background flex items-end p-4 ${isFeatured ? "h-52 md:h-64" : "h-40 md:h-48"}`}
              >
                <span className="font-display text-5xl md:text-6xl font-bold text-border/60 leading-none">
                  {num}
                </span>
              </div>
            )}
          </div>

          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-accent text-xs font-mono">{num}</span>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                  {project.category}
                </span>
                {project.confidential && (
                  <span className="inline-flex items-center gap-1 text-[10px] text-text-muted">
                    <Lock size={10} />
                    NDA
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted font-mono mt-0.5">
                {project.subtitle}
              </p>
            </div>
            <ChevronDown
              size={14}
              className={`text-text-muted transition-transform duration-300 mt-2 shrink-0 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Problem */}
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {project.problem}
          </p>

          {/* Key highlights */}
          <ul className="space-y-1.5 mb-4">
            {project.highlights.slice(0, 3).map((h) => (
              <li
                key={h}
                className="text-xs text-text-muted leading-relaxed flex items-start gap-2"
              >
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech + links */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge>+{project.tech.length - 4}</Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent transition-colors border border-border rounded-md px-2.5 py-1 hover:border-accent/40"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Visit website"
                >
                  <Globe size={12} />
                  Site
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent transition-colors border border-border rounded-md px-2.5 py-1 hover:border-accent/40"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Watch video"
                >
                  <Play size={12} />
                  Video
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-text-muted hover:text-accent transition-colors border border-border rounded-md px-2.5 py-1 hover:border-accent/40"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="View on GitHub"
                >
                  <ExternalLink size={12} />
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Expandable detail */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-border">
                  {project.highlights.length > 3 && (
                    <ul className="space-y-1 mb-4">
                      {project.highlights.slice(3).map((h) => (
                        <li
                          key={h}
                          className="text-xs text-text-muted leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {project.architecture}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  {project.articleSlug && (
                    <Link
                      href={`/articles/${project.articleSlug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dim transition-colors group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read the full article
                      <ArrowRight
                        size={13}
                        className="group-hover/link:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
