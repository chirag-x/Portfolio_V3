"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Engineering Capabilities</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Technologies I use to build scalable web applications and intelligent systems.
            </p>
            
            <div className="space-y-8">
              {profile.skills.map((skillGroup, index) => (
                <motion.div 
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-sm font-medium border border-border/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education & Progress</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Academic background and current learning focus.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {profile.education.map((edu, index) => (
                <motion.div 
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-card shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-foreground">{edu.degree}</div>
                      <time className="font-mono text-xs text-muted-foreground">{edu.period}</time>
                    </div>
                    <div className="text-sm font-medium text-primary mb-2">{edu.school}</div>
                    <div className="text-sm text-muted-foreground">{edu.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
