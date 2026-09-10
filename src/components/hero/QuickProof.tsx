"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function QuickProof() {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-1"
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3 * 0.1, duration: 0.4 }}
            className="flex flex-col items-center md:items-start text-center md:text-left gap-1"
          >
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              MERN
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Core Stack
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
