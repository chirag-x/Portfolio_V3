"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhatIBuild() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const webOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0.3]);
  const webScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [0.8, 1, 0.9]);
  
  const aiOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.3]);
  const aiScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 0.9]);
  
  const autoOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
  const autoScale = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.8, 1, 1]);

  return (
    <section ref={containerRef} className="py-48 min-h-[150vh] relative">
      <div className="sticky top-1/2 -translate-y-1/2 w-full text-center px-4">
        <h2 className="text-xl md:text-2xl text-muted-foreground font-mono tracking-widest uppercase mb-12">
          Core Focus
        </h2>
        
        <div className="relative h-[200px] flex items-center justify-center">
          <motion.div 
            style={{ opacity: webOpacity, scale: webScale }}
            className="absolute text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
          >
            WEB
          </motion.div>
          
          <motion.div 
            style={{ opacity: aiOpacity, scale: aiScale }}
            className="absolute text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-500"
          >
            AI
          </motion.div>
          
          <motion.div 
            style={{ opacity: autoOpacity, scale: autoScale }}
            className="absolute text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground"
          >
            AUTOMATION
          </motion.div>
        </div>

        {/* Final visual connection of all three at the end of the scroll */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
            y: useTransform(scrollYProgress, [0.8, 1], [20, 0])
          }}
          className="mt-8 flex justify-center items-center gap-4 text-sm font-mono text-muted-foreground"
        >
          <span>WEB</span>
          <span className="w-12 h-px bg-border"></span>
          <span className="text-primary">AI</span>
          <span className="w-12 h-px bg-border"></span>
          <span>AUTOMATION</span>
        </motion.div>
      </div>
    </section>
  );
}
