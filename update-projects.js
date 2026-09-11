import { readFileSync, writeFileSync } from 'fs';
let code = readFileSync('src/data/projects.ts', 'utf8');

// Replace specific project entries with augmented versions
code = code.replace(/slug: 'smart-campus',([\s\S]*?)img: '\/images\/smart-campus\.png'/g, `slug: 'smart-campus',$1img: '/images/smart-campus.png',
    role: 'Full-Stack Developer',
    caseStudy: {
      problem: 'Managing and monitoring campus WiFi networks efficiently requires real-time dashboards and robust backend tracking.',
      approach: 'Built a full-stack academic project integrating a Node/Express backend with MongoDB, and a React frontend for live data visualization.',
      metrics: ['Real-time dashboard', 'Network monitoring', 'Database integration', 'Responsive UI']
    }`);

code = code.replace(/slug: 'royal-fitness',([\s\S]*?)img: '\/images\/royal-fitness\.png'/g, `slug: 'royal-fitness',$1img: '/images/royal-fitness.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'A local gym needed a digital presence to showcase memberships, classes, and facilities to attract new members.',
      approach: 'Designed and developed a modern, responsive landing page with engaging UI elements and clear calls to action.',
      metrics: ['Membership showcase', 'Class schedules', 'Responsive design', 'Modern UI']
    }`);

code = code.replace(/slug: 'macro-meals',([\s\S]*?)img: '\/images\/macro-meals\.png'/g, `slug: 'macro-meals',$1img: '/images/macro-meals.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'Health-conscious consumers need a fast, intuitive way to browse and order macro-calculated meals online.',
      approach: 'Created a clean, conversion-focused user interface using React and Tailwind CSS for optimal performance and aesthetics.',
      metrics: ['Food menu UI', 'Macro-nutrient display', 'Responsive layout', 'Fast load times']
    }`);

code = code.replace(/slug: 'catering-project',([\s\S]*?)img: '\/images\/catering\.png'/g, `slug: 'catering-project',$1img: '/images/catering.png',
    role: 'Web Developer',
    caseStudy: {
      problem: 'A catering service required an online platform to display their menus, previous events, and allow clients to book services.',
      approach: 'Built a structured, accessible website using HTML, CSS, and JavaScript to handle booking forms and media galleries.',
      metrics: ['Event galleries', 'Booking forms', 'Menu presentation', 'Interactive UI']
    }`);

code = code.replace(/slug: 'tutedude',([\s\S]*?)img: '\/images\/tutedude\.png'/g, `slug: 'tutedude',$1img: '/images/tutedude.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'The original Tute Dude platform lacked a modern, engaging user experience for students.',
      approach: 'Executed a complete redesign of the platform interface, focusing on improved navigation, layout consistency, and user flow.',
      metrics: ['UI Redesign', 'Improved navigation', 'Responsive layout', 'User flow optimization']
    }`);

code = code.replace(/slug: 'netflix-clone',([\s\S]*?)img: '\/images\/netflix\.png'/g, `slug: 'netflix-clone',$1img: '/images/netflix.png',
    role: 'Frontend Developer',
    caseStudy: {
      problem: 'Learning to handle dynamic content rendering and complex state management in a large-scale media application.',
      approach: 'Developed a visually accurate Netflix clone using React, implementing horizontal scrolling lists and dynamic media loading.',
      metrics: ['Dynamic content rendering', 'Media galleries', 'Complex UI state', 'Responsive design']
    }`);

code = code.replace(/slug: 'hotel-booking',([\s\S]*?)img: '\/images\/hotel\.png'/g, `slug: 'hotel-booking',$1img: '/images/hotel.png',
    role: 'Backend Developer',
    caseStudy: {
      problem: 'A hotel booking system requires robust server-side logic to handle reservations, availability, and user data safely.',
      approach: 'Engineered a RESTful API backend using Node.js, Express, and MongoDB to manage the core booking logic and data persistence.',
      metrics: ['REST API design', 'Database schema', 'Booking logic', 'Server-side validation']
    }`);

writeFileSync('src/data/projects.ts', code);
