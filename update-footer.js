const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

// 1. Add Import
code = code.replace('import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaDiscord as Discord } from "react-icons/fa";', 
'import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaDiscord as Discord } from "react-icons/fa";\nimport SpotifyWidget from "./SpotifyWidget";');

// 2. Add aria-labels
code = code.replace(/<a href={profile\.socials\.githubUrl}.*?<\/a>/gs, '<a href={profile.socials.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="GitHub Profile">\n              <Github className="w-5 h-5" />\n            </a>');
code = code.replace(/<a href={profile\.socials\.linkedin}.*?<\/a>/gs, '<a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="LinkedIn Profile">\n              <Linkedin className="w-5 h-5" />\n            </a>');
code = code.replace(/<a href={profile\.socials\.instagram}.*?<\/a>/gs, '<a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Instagram Profile">\n              <Instagram className="w-5 h-5" />\n            </a>');
code = code.replace(/<a href={profile\.socials\.discord}.*?<\/a>/gs, '<a href={profile.socials.discord} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Discord Profile">\n              <Discord className="w-5 h-5" />\n            </a>');
code = code.replace(/<a href={`mailto:\$\{profile\.email\}`}.*?<\/a>/gs, '<a href={`mailto:${profile.email}`} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors" aria-label="Email Me">\n              <Mail className="w-5 h-5" />\n            </a>');

// 3. Add SpotifyWidget under the tagline
code = code.replace(/{profile\.tagline}\n            <\/p>\n          <\/div>/, '{profile.tagline}\n            </p>\n            <div className="mt-6">\n              <SpotifyWidget />\n            </div>\n          </div>');

fs.writeFileSync('src/components/layout/Footer.tsx', code);
