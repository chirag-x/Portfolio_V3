import { readFileSync, writeFileSync } from 'fs';
let code = readFileSync('src/app/layout.tsx', 'utf8');

// Replace URLs
code = code.replace(/https:\/\/chirag-webpage\.netlify\.app/g, 'https://chirag-portfolio-v3.netlify.app');

// Update keywords to incorporate all the ones the user specified
const oldKeywords = /keywords: \[\s*[\s\S]*?\],/g;
const newKeywords = `keywords: [
    "Chirag Sharma", "Chirag Sharma Portfolio", "Chirag Sharma Gwalior", "Chirag Sharma RJIT", 
    "Chirag Sharma Full Stack Developer", "Chirag Sharma Gen AI Developer", "Chirag Sharma MERN Developer", 
    "Full Stack Gen AI Developer", "Generative AI Developer Portfolio", "MERN Stack Developer Portfolio", 
    "React Developer India", "Node.js Developer India", "MongoDB Developer India", "Express.js Developer India", 
    "Python Developer Portfolio", "AI Powered Web Developer", "AI Chatbot Developer", "DeepSeek API Integration", 
    "OpenRouter AI Integration", "Voice AI Assistant Website", "AI Integrated Portfolio Website", 
    "Smart Campus WiFi Monitoring System", "Mobile Attendance System Project", "Full Stack Developer in Gwalior", 
    "Web Developer in Gwalior", "Gen AI Developer in India", "Indian Full Stack Developer", 
    "Indian Gen AI Developer", "Full Stack Developer Internship Portfolio", "Gen AI Developer Internship Candidate", 
    "BTech IT Student Portfolio", "RJIT IT Student Developer", "Final Year IT Student Portfolio", 
    "MERN Stack Internship Portfolio", "AI Projects Portfolio", "Modern Web Development Portfolio", 
    "Frontend Backend Developer Portfolio", "Full Stack Dashboard Project", "AI Integrated Web Applications", 
    "React Node Mongo Developer", "Portfolio Website with AI Assistant", "Vertex Studio Gwalior", "Web Agency Gwalior"
  ],`;
code = code.replace(oldKeywords, newKeywords);

// Inject other tags for GEO
const oldVerification = /verification: {\s*google: [^\n]+\s*},/g;
const newVerification = `verification: {
    google: "google-site-verification=fDmtOxIxWhLUqu4r_PYUZTa4C7fW2NHRNihINJgb-_Q",
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Gwalior",
    "geo.position": "26.2183;78.1828",
    "ICBM": "26.2183, 78.1828"
  },`;
code = code.replace(oldVerification, newVerification);

writeFileSync('src/app/layout.tsx', code);
