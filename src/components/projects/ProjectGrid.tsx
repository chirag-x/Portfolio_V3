"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  const selectedProjects = projects.filter(p => !p.flagship);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Practical applications built across the stack.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-border/80"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="px-2 py-1 rounded text-[10px] font-semibold tracking-wider uppercase bg-muted text-muted-foreground">
                    {project.category}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">{project.tagline}</p>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.slice(0, 4).map(tech => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
