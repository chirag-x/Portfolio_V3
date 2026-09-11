"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function WhatIBuild() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Calculate Opacity for each line based on scroll progress
  // Web (0-0.25)
  // AI (0.25-0.5)
  // Automation (0.5-0.75)
  // Intelligent Systems (0.75-1.0)
  
  const webOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.3, 1, 0.3]);
  const aiOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0.3, 1, 0.3]);
  const automationOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0.3, 1, 0.3]);
  const systemsOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.3, 1, 1]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-16">
          The Intersection
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.1]">
          <motion.div style={{ opacity: webOpacity }} className="transition-opacity duration-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Interfaces</span>
          </motion.div>
          
          <motion.div style={{ opacity: aiOpacity }} className="transition-opacity duration-300">
            <span className="text-primary">+ AI Reasoning</span>
          </motion.div>

          <motion.div style={{ opacity: automationOpacity }} className="transition-opacity duration-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">+ Automation</span>
          </motion.div>

          <div className="py-4">
            <motion.div 
              style={{ opacity: systemsOpacity }}
              className="h-px w-24 bg-border mx-auto mb-8"
            />
          </div>

          <motion.div style={{ opacity: systemsOpacity }} className="transition-opacity duration-300">
            Intelligent Systems
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: systemsOpacity }}
          className="mt-24 flex flex-col items-center justify-center gap-4 text-muted-foreground"
        >
          <p className="font-mono text-sm uppercase tracking-widest">Example: OMNIX</p>
          <ArrowDown className="w-6 h-6 animate-bounce text-primary" />
        </motion.div>
      </div>
      
      {/* Background structural lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2 pointer-events-none opacity-20"></div>
    </section>
  );
}
