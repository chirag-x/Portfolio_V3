export type ArchitectureStep = {
  label: string;
  detail: string;
};

export type CaseStudy = {
  metrics: string[];
  architecture: ArchitectureStep[];
  challenges: string[];
};

export type ProjectStory = {
  built: string;
  learned: string;
  broke: string;
};

export type ProjectCategory = "WEB" | "FULL-STACK" | "AI / ML" | "AUTOMATION" | "AI AGENTS" | "BACKEND" | "UI / FRONTEND" | "EXPERIMENTS" | "BUSINESS" | "AGENCY";
export type ProjectType = "PROJECT" | "SYSTEM" | "EXPERIMENT" | "CLONE" | "REDESIGN" | "AI SYSTEM" | "AUTOMATION" | "BUSINESS";

export type Project = {
  title: string;
  slug: string;
  tagline: string;
  desc: string;
  category: ProjectCategory[];
  type: ProjectType;
  year: string;
  status: "Completed" | "In Development" | "Archived";
  stack: string[];
  link?: string;
  github?: string;
  img?: string;
  flagship?: boolean;
  featured?: boolean;
  story?: ProjectStory;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: 'omnix',
    title: 'OMNIX',
    tagline: 'Autonomous AI Desktop Agent',
    desc: 'Multimodal AI desktop agent that can understand natural-language goals, perceive a Windows screen, plan tasks, control apps, automate browsers, use memory, and recover during execution.',
    category: ['AI AGENTS', 'AI / ML', 'AUTOMATION'],
    type: 'SYSTEM',
    year: '2024',
    status: 'In Development',
    link: 'https://github.com/chirag-x',
    github: 'https://github.com/chirag-x',
    stack: ['Python', 'PyQt6', 'Ultralytics YOLO', 'Playwright', 'PyAutoGUI', 'Sentence Transformers', 'Edge TTS', 'LLM APIs'],
    featured: true,
    flagship: true,
    img: '/images/omnix-preview.svg',
    story: {
      built: 'A modular Windows desktop agent with reasoning, vision, memory, task planning, browser automation, voice input, and desktop control.',
      learned: 'How to design AI systems that combine reasoning, perception, memory, planning, and real-world tool execution instead of treating an LLM as a chat-only API.',
      broke: 'Dynamic desktop environments are unpredictable — OMNIX uses observe, understand, plan, act, verify, and recover loops to make execution more reliable.'
    },
    caseStudy: {
      metrics: ['Autonomous agent', 'Computer vision', 'Semantic memory', 'Browser automation', 'Voice pipeline'],
      architecture: [
        { label: 'Input + Context', detail: 'Natural-language and voice commands are combined with screen state, system context, memory, and user intent.' },
        { label: 'AI Brain + Task Planner', detail: 'LLM reasoning converts high-level goals into structured multi-step plans with skill selection and recovery paths.' },
        { label: 'Agent Controller', detail: 'Coordinates planning, observation, execution, verification, and recovery across skills, vision, and automation.' },
        { label: 'Skills / Vision / Automation', detail: 'PyQt6, Ultralytics YOLO, Playwright, PyAutoGUI, Sentence Transformers, LLM APIs, and Edge TTS work together to operate the desktop.' }
      ],
      challenges: [
        'Separating reasoning from execution so new capabilities can be added as independent skills instead of hard-coded commands.',
        'Making the agent understand a dynamic Windows environment through screen perception and UI-element detection.',
        'Designing a dependable Observe + Understand + Plan + Act + Verify + Recover loop for real computer-based tasks.'
      ]
    }
  },
  {
    slug: 'smart-campus',
    title: 'Smart Campus WiFi System',
    tagline: 'Real-world campus monitoring system',
    desc: 'Full-stack academic project with live dashboards for monitoring campus WiFi networks.',
    category: ['FULL-STACK', 'WEB'],
    type: 'PROJECT',
    year: '2023',
    status: 'Completed',
    link: 'https://github.com/chirag-x/Smart--campus',
    github: 'https://github.com/chirag-x/Smart--campus',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    featured: true,
    img: '/images/smart-campus.png'
  },
  {
    slug: 'vertex-studio',
    title: 'Vertex Studio',
    tagline: 'Digital Growth Studio',
    desc: 'An agency/business I operate, focused on building websites, digital experiences and growth systems for real businesses. Vertex Studio provides end-to-end digital services including web development, marketing, and SEO.',
    category: ['BUSINESS', 'AGENCY', 'WEB', 'FULL-STACK'],
    type: 'BUSINESS',
    year: '2023',
    status: 'Completed',
    link: 'https://vertex-studio-official.netlify.app/',
    github: 'https://github.com/chirag-x/portfolio',
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Figma'],
    featured: true,
    flagship: true,
    img: '/images/vertex-studio.png',
    story: {
      built: 'Vertex Studio is a real digital growth agency I operate. I built the business infrastructure, client-facing portfolio, pricing calculator, and lead generation funnels from scratch to serve real-world clients.',
      learned: 'How to transition from purely writing code to operating a digital business. This project taught me product thinking, client conversion, and how to sell technical services (like SEO, maintenance, and web redesigns) to non-technical business owners.',
      broke: 'Initially, the offering was too broad. I had to refine the business system (Discovery → Design → Development → Testing → Launch) and focus on specific deliverables like Landing Pages, QR Menus, and Local SEO to streamline operations.'
    },
    caseStudy: {
      metrics: [
        'Website Design & Redesign',
        'Landing Pages & Funnels',
        'QR Digital Menus',
        'Digital Marketing & Local SEO',
        'Google Business Profile Optimization',
        'Social Media Creatives',
        'Ecommerce & Maintenance'
      ],
      architecture: [
        { label: 'Discovery', detail: 'Understanding the client business, target audience, and digital goals.' },
        { label: 'Design', detail: 'Creating conversion-focused wireframes, visual branding, and UI prototypes in Figma.' },
        { label: 'Development', detail: 'Engineering fast, responsive, and accessible web experiences using modern stacks.' },
        { label: 'Testing', detail: 'Rigorous QA for performance (90+ speed target), mobile responsiveness, and SEO indexing.' },
        { label: 'Launch', detail: 'Deploying the system and initiating digital marketing/growth campaigns.' }
      ],
      challenges: [
        'Translating complex technical features into clear business value for potential clients.',
        'Building a scalable agency process that can handle 20+ projects without sacrificing quality.',
        'Integrating lead generation tools (WhatsApp CTA, Calendly, Cost Calculator) seamlessly into the user flow.'
      ]
    }
  },
  {
    slug: 'tutedude',
    title: 'Tute Dude Redesign',
    tagline: 'Platform Redesign',
    desc: 'Full-stack redesign of Tute Dude with improved navigation, layout, and user experience.',
    category: ['UI / FRONTEND', 'WEB'],
    type: 'REDESIGN',
    year: '2023',
    status: 'Completed',
    link: 'https://tute-dude-clone-chirag.netlify.app/',
    github: 'https://github.com/chirag-x/portfolio',
    stack: ['HTML', 'CSS', 'JavaScript'],
    featured: true,
    img: '/images/tutedude.png'
  },
  {
    slug: 'netflix-clone',
    title: 'Netflix Clone',
    tagline: 'Streaming UI',
    desc: 'React-based streaming UI with dynamic content rendering and responsive layout.',
    category: ['UI / FRONTEND', 'WEB'],
    type: 'CLONE',
    year: '2023',
    status: 'Completed',
    link: 'https://projectchirag-50.netlify.app/',
    github: 'https://github.com/chirag-x/portfolio',
    stack: ['React', 'CSS', 'JavaScript'],
    img: '/images/netflix.png'
  },
  {
    slug: 'hotel-booking',
    title: 'Hotel Booking System',
    tagline: 'API Backend',
    desc: 'Node.js + Express backend with booking logic and structured API design.',
    category: ['BACKEND', 'WEB'],
    type: 'PROJECT',
    year: '2023',
    status: 'Completed',
    link: 'https://hotel-project-chirag.netlify.app/',
    github: 'https://github.com/chirag-x/portfolio',
    stack: ['Node.js', 'Express', 'JavaScript', 'MongoDB'],
    img: '/images/hotel.png'
  }
];
