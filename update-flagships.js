const fs = require('fs');
let code = fs.readFileSync('src/data/projects.ts', 'utf8');

code = code.replace(/slug: 'omnix',([\s\S]*?)img: '\/images\/omnix\.png',/g, `slug: 'omnix',$1img: '/images/omnix.png',
    role: 'Creator & Lead Engineer',`);

code = code.replace(/slug: 'vertex-studio',([\s\S]*?)img: '\/images\/vertex\.png',/g, `slug: 'vertex-studio',$1img: '/images/vertex.png',
    role: 'Founder & Technical Director',`);

fs.writeFileSync('src/data/projects.ts', code);
