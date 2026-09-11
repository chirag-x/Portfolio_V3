const fs = require('fs');
let code = fs.readFileSync('src/app/terminal/page.tsx', 'utf8');

if (!code.includes('useSoundEffects')) {
  code = code.replace('import { projects } from "@/data/projects";', 'import { projects } from "@/data/projects";\nimport { useSoundEffects } from "@/hooks/useSoundEffects";');
  code = code.replace('const router = useRouter();', 'const router = useRouter();\n  const { playTyping, playClick } = useSoundEffects();');
  code = code.replace('onChange={e => setInput(e.target.value)}', 'onChange={e => { playTyping(); setInput(e.target.value); }}');
  code = code.replace('if (e.key === "Enter") {', 'if (e.key === "Enter") {\n      playClick();');
  fs.writeFileSync('src/app/terminal/page.tsx', code);
}
