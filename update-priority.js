const fs = require('fs');
let code = fs.readFileSync('src/components/projects/FeaturedWork.tsx', 'utf8');
code = code.replace(/className="object-cover transition-transform duration-700 group-hover:scale-105" \n                    \/>/, 'className="object-cover transition-transform duration-700 group-hover:scale-105" \n                      priority={i < 2}\n                    />');
fs.writeFileSync('src/components/projects/FeaturedWork.tsx', code);
