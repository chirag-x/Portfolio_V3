const fs = require('fs');

function addSizes(file, regex, replaceWith) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(regex, replaceWith);
  fs.writeFileSync(file, content);
}

addSizes('src/app/about/page.tsx', 
  /fill\s*\n\s*className=/g, 
  'fill\n              sizes="(max-width: 768px) 100vw, 50vw"\n              className=');

addSizes('src/app/lab/page.tsx', 
  /fill className=/g, 
  'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=');

addSizes('src/app/work/[slug]/page.tsx', 
  /fill className=/g, 
  'fill sizes="100vw" className=');

addSizes('src/app/work/WorkClient.tsx', 
  /fill className=/g, 
  'fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className=');

addSizes('src/components/hero/Hero.tsx', 
  /fill\n\s*className=/g, 
  'fill\n                  sizes="(max-width: 768px) 100vw, 50vw"\n                  className=');

addSizes('src/components/projects/FeaturedWork.tsx', 
  /fill\s*\n\s*className=/g, 
  'fill \n                      sizes="(max-width: 768px) 100vw, 50vw"\n                      className=');

addSizes('src/components/projects/ProjectGrid.tsx', 
  /fill\s*\n\s*className=/g, 
  'fill \n                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"\n                      className=');

addSizes('src/components/story/OmnixStory.tsx', 
  /fill className=/g, 
  'fill sizes="(max-width: 768px) 100vw, 50vw" className=');

addSizes('src/components/story/VertexStory.tsx', 
  /fill className=/g, 
  'fill sizes="100vw" className=');
