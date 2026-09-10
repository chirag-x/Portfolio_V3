"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Code2 } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import Link from "next/link";
import { profile } from "@/data/profile";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Typography Content */}
        <motion.div style={{ y: y1, opacity }} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.05] uppercase">
              Chirag <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-500/80">Sharma</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground mt-6 uppercase tracking-widest border-l-2 border-primary pl-4">
              Full Stack Gen AI Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
              I build web products, AI systems, and automation tools that actually <span className="font-semibold text-foreground">solve problems</span>.
            </p>
            
            <div className="text-sm font-mono text-muted-foreground space-y-1">
              <p>B.Tech IT Student · RJIT, Gwalior</p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-green-500">Open to internships & freelance builds</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link
              href="#work"
              data-cursor="view"
              className="group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 h-12 px-8 py-2 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore my work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none border border-border bg-background shadow-sm hover:bg-muted h-12 px-8 py-2"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 pt-8 text-muted-foreground"
          >
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Code2 className="w-5 h-5" /></a>
          </motion.div>
        </motion.div>

        {/* Right Portrait Component */}
        <motion.div 
          style={{ y: y2 }}
          className="relative h-[600px] w-full flex items-center justify-center lg:justify-end hidden md:flex"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[400px] h-[550px]"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl rounded-[3rem]"></div>
            
            {/* The Image Container with Masking */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-border/50 bg-muted/20 backdrop-blur-sm shadow-2xl group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              
              <Image 
                src="/images/hero.png" 
                alt="Chirag Sharma"
                fill
                className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                priority
              />
              
              {/* Subtle grain overlay */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-20" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
            </div>

            {/* Floating Technical Labels */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="absolute top-16 -left-12 px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-lg shadow-xl text-xs font-mono font-bold tracking-wider z-30"
            >
              <span className="text-primary mr-2">{"<"}</span>FULL STACK<span className="text-primary ml-2">{"/>"}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
              className="absolute bottom-32 -right-8 px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-lg shadow-xl text-xs font-mono font-bold tracking-wider z-30 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              AI / ML
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
              className="absolute bottom-12 left-12 px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-lg shadow-xl text-xs font-mono font-bold tracking-wider z-30 text-muted-foreground"
            >
              AUTOMATION
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
