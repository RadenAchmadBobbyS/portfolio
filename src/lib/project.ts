export interface Project {
  projectName: string
  techStack: string
  description: string
  imageUrl: string
  link?: string
}

export const projects: Project[] = [
  {
    projectName: 'Astra Toyota 3D Showcase Platform',
    techStack: 'Three.js • Next.js • TypeScript • Backend API • Responsive UI • i18n • TTS Audio',
    description:
      'A responsive 3D product showcase for Astra Toyota featuring dynamic model data from the backend, interactive 2-wheel and 4-wheel vehicle views, multilingual content in three languages, and text-to-speech audio playback for detailed part descriptions.',
    imageUrl: '/images/3d.png',
  },
  {
    projectName: 'Ragdalion Design System & Component Library',
    techStack: 'Next.js • TypeScript • CLI • Design System • Documentation • Reusable Components',
    description:
      'A scalable design system and component library for Ragdalion, equipped with a CLI for installation and setup, alongside a polished documentation site with examples, usage guides, and code snippets similar to shadcn.',
    imageUrl: '/images/library.png',
  },
  {
    projectName: 'Fleet Management Dashboard',
    techStack: 'React • TypeScript • Fleet Management • Analytics • AI Predictive • Responsive Web App',
    description:
      'A modern fleet management dashboard with AI-powered predictive insights, designed to support operational planning, monitoring, and decision-making across transportation and asset-intensive environments.',
    imageUrl: '/images/fleet.png',
  },
  {
    projectName: 'Maintenance Product Dashboard',
    techStack: 'React • TypeScript • Maintenance Management • Analytics • AI Predictive • Responsive Web App',
    description:
      'A maintenance-focused product dashboard built to track service workflows, operational performance, and predictive maintenance signals in a single responsive interface.',
    imageUrl: '/images/maintenance.png',
  },
  {
    projectName: 'AI All-in-One Solution Platform',
    techStack: 'AI Integration • OCR • CCTV Analytics • Three.js • Map Overview • Interactive UI',
    description:
      'An all-in-one AI platform that integrates OCR, CCTV intelligence, interactive 3D machine visualization, and an overview map experience to centralize operational data in a single interface.',
    imageUrl: '/images/ai all in one.png',
  },
  {
    projectName: 'MyBooks Library App',
    techStack: 'React • TypeScript • Node.js • PostgreSQL • Sequelize • Socket.IO • Redis • Zustand',
    description:
      'Developed the frontend of a live quiz application with real-time rooms, questions, timers, scores, and leaderboards. Integrated Socket.IO for synchronized gameplay and dynamic ranking updates.',
    imageUrl: '/images/Mybooks-project-1.png',
  },
  {
    projectName: 'E-Commerce Platform,Hermes Store',
    techStack: 'React • TypeScript • Tailwind CSS • PostgreSQL',
    description:
      'Implemented payment gateways, cloud services, real-time notifications, cron jobs, and designed major frontend features for scalable user experiences.',    
    imageUrl: '/images/hermes-6.png',
  },
  {
    projectName: 'Halal Certification Digitalization LPPOM MUI',
    techStack: 'React • TypeScript • Node.js • PostgreSQL • Sequelize • Socket.IO • Redis • Zustand',
    description:
      'Frontend engineer for a large-scale halal certification system. Built and integrated core modules (ticketing, scheduling, transactions, complaints, overtime), developed reusable components, implemented route guards and role-based access, designed key UI features, integrated real-time chat and notifications, and created internal API documentation portals.',
    imageUrl: '/images/app-logo.png',
  },
  {
    projectName: 'BeliBesar B2B Commerce Platform',
    techStack: 'React • TypeScript • Node.js • MongoDB • GraphQL • Socket.IO • Redux • Jest • Midtrans • AWS • Cloudinary',
    description:
      'Full-stack developer for multiple e-commerce platforms, including Belibesar, a group-buying marketplace. Implemented payment gateways, cloud services, real-time notifications, cron jobs, and designed major frontend features for scalable user experiences.',
    imageUrl: '/images/6.png',
  },
  {
    projectName: 'Urbanize Crowdsourced Urban Problem Solver',
    techStack: 'React • TypeScript • Node.js • PostgreSQL • Sequelize • Socket.IO • Redis • Zustand',
    description:
      'Full-stack developer building a community platform for reporting and voting on urban issues. Designed system architecture, routing, middleware, real-time interactions, and responsive, user-friendly interfaces. (Ongoing project).',
    imageUrl: '/images/urban-3.webp',
  },
  {
    projectName: 'Real-Time Quiz Platform',
    techStack: 'React • TypeScript • Node.js • PostgreSQL • Sequelize • Socket.IO • Redis • Zustand',
    description:
      'Developed the frontend of a live quiz application with real-time rooms, questions, timers, scores, and leaderboards. Integrated Socket.IO for synchronized gameplay and dynamic ranking updates.',    
    imageUrl: '/images/quizez-4.png',
  },
  {
    projectName: 'Sedot Wc - On-Demand Septic Service',
    techStack: 'Next.js • TypeScript • Node.js • Tailwind CSS',
    description:
      'A full-stack developer for an on-demand septic tank service platform. Built responsive UI components, integrated third-party services, and optimized performance for seamless user experiences.',    
    imageUrl: '/images/image copy.png',
  },
  {
    projectName: 'Recomend Food App - Foodie Finder',
    techStack: 'PHP • Laravel • MySQL • Bootstrap',
    description:
      ' A web application that recommends food options based on user preferences and location. Developed backend logic, database schemas, and user-friendly interfaces to enhance the dining experience.',    
    imageUrl: '/images/recomendasi.png',
  },
  {
    projectName: 'My Portfolio Website',
    techStack: 'Next.js • TypeScript • Tailwind CSS • Framer Motion • Three.js',
    description:
      'A personal portfolio website showcasing my projects, skills, and experience. Implemented interactive UI elements, smooth animations, and 3D graphics to create an engaging user experience.',    
    imageUrl: '/images/image.png',
  },
];
