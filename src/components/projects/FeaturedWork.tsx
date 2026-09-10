"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal, BarChart } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  const vertex = projects.find(p => p.slug === "vertex-studio");
  const omnix = projects.find(p => p.slug === "omnix");

  if (!vertex || !omnix) return null;

  return (
    <section className="py-32 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Featured Work</h3>
          <p className="text-xl text-muted-foreground">
            I build digital products, businesses and intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* VERTEX STUDIO */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl bg-muted group"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              {vertex.img && (
                <Image src={vertex.img} alt={vertex.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <BarChart className="w-4 h-4" /> Real Business / Agency
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{vertex.title}</h3>
              <p className="text-xl text-foreground font-medium">{vertex.tagline}</p>
              <p className="text-muted-foreground leading-relaxed">{vertex.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {vertex.category.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="pt-8">
                <Link 
                  href={`/work/${vertex.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-colors group"
                >
                  View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* OMNIX */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Terminal className="w-4 h-4" /> Advanced AI System
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{omnix.title}</h3>
              <p className="text-xl text-foreground font-medium">{omnix.tagline}</p>
              <p className="text-muted-foreground leading-relaxed">{omnix.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {omnix.category.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-card border border-border rounded-full text-xs font-bold">
                    {cat}
                  </span>
                ))}
              </div>

              <div className="pt-8">
                <Link 
                  href={`/work/${omnix.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-colors group"
                >
                  View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl bg-muted group"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              {omnix.img && (
                <Image src={omnix.img} alt={omnix.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              )}
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 text-center"
        >
          <Link 
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border border-border font-bold rounded-full hover:bg-muted hover:border-primary/50 transition-all shadow-sm"
          >
            Explore all {projects.length} projects <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
