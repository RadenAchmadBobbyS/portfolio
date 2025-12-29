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
];
