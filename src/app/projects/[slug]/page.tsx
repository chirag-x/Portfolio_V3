import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-6">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {project.desc}
          </p>
          
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
              >
                <Github className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        </header>

        {project.img && (
          <div className="rounded-2xl border border-border bg-muted/50 overflow-hidden mb-16 shadow-sm aspect-video flex items-center justify-center relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />
             {/* Text placeholder for premium feel instead of broken image links if assets are missing */}
             <div className="z-20 text-center font-mono text-muted-foreground">
               [ System Visualization: {project.title} ]
             </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-12">
            {project.story && (
              <section className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Overview</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.story.built}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Engineering Challenges</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.story.broke}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What I Learned</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.story.learned}</p>
                </div>
              </section>
            )}

            {project.caseStudy && (
              <section className="space-y-8 mt-12 border-t border-border pt-12">
                <h3 className="text-2xl font-bold mb-6">Architecture & System Design</h3>
                <div className="space-y-6">
                  {project.caseStudy.architecture.map((step, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-xl border border-border bg-card">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{step.label}</h4>
                        <p className="text-muted-foreground">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h4 className="font-bold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.caseStudy && (
              <div className="p-6 rounded-xl border border-border bg-card">
                <h4 className="font-bold mb-4">Key Metrics</h4>
                <ul className="space-y-3">
                  {project.caseStudy.metrics.map(metric => (
                    <li key={metric} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
