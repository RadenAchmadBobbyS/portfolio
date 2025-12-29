"use client"

import { motion } from "framer-motion"

const TECH_LOGOS = [
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Three.js", url: "https://cdn.simpleicons.org/threedotjs/000000" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Framer Motion", url: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "Prisma", url: "https://cdn.simpleicons.org/prisma/2D3748" },
  { name: "Express.js", url: "https://cdn.simpleicons.org/express/000000" },
  { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Redux", url: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "Jest", url: "https://cdn.simpleicons.org/jest/C21325" },
  { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
  { name: "HTML5", url: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Sequelize", url: "https://cdn.simpleicons.org/sequelize" },
  { name: "Sass", url: "https://cdn.simpleicons.org/sass/CC6699" },
  { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/E10098" },
  { name: "Jira", url: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "Material UI", url: "https://cdn.simpleicons.org/gitlab" },
  { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/FFCA28" },
]

export default function TechStackIcons() {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {TECH_LOGOS.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.1,
            translateY: -5,
            boxShadow: "0 10px 20px -5px rgba(0,0,0,0.1)",
          }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center glass-morphism rounded-xl p-3 cursor-pointer group"
          title={tech.name}
        >
          <img
            src={tech.url || "/placeholder.svg"}
            alt={tech.name}
            className="w-full h-full object-contain transition-all"
          />
        </motion.div>
      ))}
    </div>
  )
}
