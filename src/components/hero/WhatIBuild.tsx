"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatIBuild() {
  const words = ["WEB", "AI", "AUTOMATION"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="py-32 border-y border-border/50 bg-muted/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Core Focus
        </h2>
        
        <div className="flex flex-col items-center justify-center min-h-[150px]">
          <div className="flex items-center gap-4 md:gap-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            <span>I BUILD</span>
            <div className="relative w-[200px] md:w-[300px] lg:w-[400px] h-[1.2em] flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="absolute left-0 text-primary uppercase"
                  style={{ transformOrigin: "50% 50%" }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex justify-center items-center gap-4 text-xs md:text-sm font-mono text-muted-foreground"
          >
            <span className={index === 0 ? "text-foreground font-bold" : ""}>WEB</span>
            <span className="w-8 md:w-12 h-px bg-border"></span>
            <span className={index === 1 ? "text-primary font-bold" : ""}>AI</span>
            <span className="w-8 md:w-12 h-px bg-border"></span>
            <span className={index === 2 ? "text-foreground font-bold" : ""}>AUTOMATION</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
