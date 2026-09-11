const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

code = code.replace(/{profile\.tagline}\s*<\/p>\s*<\/div>/, '{profile.tagline}\n            </p>\n            <div className="mt-6">\n              <SpotifyWidget />\n            </div>\n          </div>');

fs.writeFileSync('src/components/layout/Footer.tsx', code);
