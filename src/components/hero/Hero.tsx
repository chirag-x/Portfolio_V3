"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Download } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {profile.availability}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">intelligent software</span> at the intersection of Web, AI & Automation.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8 py-2"
            >
              View my work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2"
            >
              Let's connect
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-primary h-11 px-4 py-2"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
          </motion.div>
        </div>

        {/* Hero Visual - Abstract System Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block h-[500px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />
          <div className="absolute inset-0 border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm overflow-hidden flex flex-col justify-center items-center p-8">
            <div className="w-full max-w-sm space-y-4 font-mono text-sm">
              <div className="p-3 rounded border border-border bg-background shadow-sm flex items-center justify-between">
                <span className="text-muted-foreground">USER INTENT</span>
                <span className="text-primary font-bold">input</span>
              </div>
              <div className="flex justify-center text-muted-foreground/50">↓</div>
              <div className="p-3 rounded border border-primary/20 bg-primary/5 shadow-sm flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <span className="font-semibold text-foreground">AI REASONING</span>
                <span className="text-primary text-xs animate-pulse">processing</span>
              </div>
              <div className="flex justify-center text-muted-foreground/50">↓</div>
              <div className="p-3 rounded border border-border bg-background shadow-sm flex items-center justify-between">
                <span className="text-muted-foreground">TOOL EXECUTION</span>
                <span className="text-primary font-bold">action</span>
              </div>
              <div className="flex justify-center text-muted-foreground/50">↓</div>
              <div className="p-3 rounded border border-border bg-background shadow-sm flex items-center justify-between">
                <span className="text-muted-foreground">SYSTEM RESULT</span>
                <span className="text-primary font-bold">success</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-border"></div>
              <div className="w-2 h-2 rounded-full bg-border"></div>
              <div className="w-2 h-2 rounded-full bg-border"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
