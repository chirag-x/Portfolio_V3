import { readFileSync, writeFileSync } from 'fs';

let code = readFileSync('src/app/layout.tsx', 'utf8');

// Update LinkedIn in jsonLd
code = code.replace(/https:\/\/www\.linkedin\.com\/in\/chirag-sharma\//g, 'https://www.linkedin.com/in/chirag-sharma-aa1132329/');

// Add LeetCode to jsonLd
code = code.replace(/"https:\/\/www\.linkedin\.com\/in\/chirag-sharma-aa1132329\/"\s*\]/, '"https://www.linkedin.com/in/chirag-sharma-aa1132329/",\n    "https://leetcode.com/u/TheChirag__X/"\n  ]');

writeFileSync('src/app/layout.tsx', code);
