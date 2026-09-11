const fs = require('fs');
let code = fs.readFileSync('src/components/hero/Hero.tsx', 'utf8');

if (!code.includes('ParticleNetwork')) {
  code = code.replace('import { motion } from "framer-motion";', 'import { motion } from "framer-motion";\nimport ParticleNetwork from "@/components/canvas/ParticleNetwork";');
  code = code.replace('<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">', '<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">\n      <ParticleNetwork />');
  fs.writeFileSync('src/components/hero/Hero.tsx', code);
}
