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

export type ProjectCategory = "WEB" | "FULL-STACK" | "AI / ML" | "AUTOMATION" | "AI AGENTS" | "BACKEND" | "UI / FRONTEND" | "EXPERIMENTS";
export type ProjectType = "PROJECT" | "SYSTEM" | "EXPERIMENT" | "CLONE" | "REDESIGN" | "AI SYSTEM" | "AUTOMATION";

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
    tagline: 'Web Design Agency',
    desc: 'Modern web design agency project with service pages, responsive layouts, strong visual branding, and client-focused conversion sections.',
    category: ['UI / FRONTEND', 'WEB'],
    type: 'PROJECT',
    year: '2023',
    status: 'Completed',
    link: 'https://vertex-studio-main.netlify.app/',
    github: 'https://github.com/chirag-x/portfolio',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    featured: true,
    img: '/images/vertex-studio.png',
    story: {
      built: 'A polished agency website with service sections, project presentation, responsive design, and deployment-ready structure.',
      learned: 'How to shape a client-facing website around clarity, visual trust, mobile polish, and fast visitor decisions.',
      broke: 'Image-heavy sections and motion polish needed careful layout tuning so the site stayed smooth on mobile.'
    },
    caseStudy: {
      metrics: ['Agency website', 'Responsive UI', 'Service pages', 'Netlify deployment'],
      architecture: [
        { label: 'Frontend', detail: 'Semantic HTML, structured CSS, responsive sections, and interactive JavaScript enhancements.' },
        { label: 'UX Flow', detail: 'Service, process, pricing, portfolio, and contact sections guide visitors toward a quote request.' },
        { label: 'Deployment', detail: 'Static production deployment on Netlify with project assets optimized for a live demo.' }
      ],
      challenges: [
        'Making the design feel like a real client-facing agency rather than a student clone.',
        'Keeping the hero, service cards, and portfolio sections readable across mobile and desktop.',
        'Balancing animation polish with page speed and stable layout.'
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
