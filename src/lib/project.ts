export interface Project {
  projectName: string
  techStack: string
  description: string
  imageUrl: string
  link?: string
}

export const projects: Project[] = [
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
