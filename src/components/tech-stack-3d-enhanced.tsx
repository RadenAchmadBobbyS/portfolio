"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef, type MouseEvent } from "react"
import Image from 'next/image';

const TECH_STACK = [
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB", color: "61DAFB" },
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "FFFFFF" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6", color: "3178C6" },
  { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "06B6D4" },
  { name: "Three.js", url: "https://cdn.simpleicons.org/threedotjs/FFFFFF", color: "FFFFFF" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933", color: "339933" },
  { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/4169E1", color: "4169E1" },
  { name: "Framer Motion", url: "https://cdn.simpleicons.org/framer/0055FF", color: "0055FF" },
  { name: "Prisma", url: "https://cdn.simpleicons.org/prisma/2D3748", color: "2D3748" },
]

export default function TechStack3DEnhanced() {
  return (
    <section id="tech" className="relative mt-5 px-4 sm:px-6 max-w-7xl mx-auto border-t border-border/20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
        {/* Left: Title section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 space-y-6 text-center lg:text-left"
        >
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-mono text-primary uppercase tracking-widest">{"//"} Core Tech Stack</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Mastering the{" "}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">modern web</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A collection of technologies I use to bring ideas to life with precision and creativity.
          </p>

          {/* Animated counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-baseline gap-2 justify-center lg:justify-start"
          >
            <span className="text-4xl sm:text-5xl font-bold text-primary">{TECH_STACK.length}+</span>
            <span className="text-xs sm:text-sm text-muted-foreground font-mono">Technologies</span>
          </motion.div>
        </motion.div>

        {/* Right: 3D floating tech cards */}
        <div className="lg:col-span-2 w-full">
          <div className="relative h-[350px] sm:h-[500px] w-full flex items-center justify-center">
            <div className="relative w-[350px] sm:w-full h-full">
              {TECH_STACK.map((tech, i) => (
                <FloatingTechCard key={tech.name} tech={tech} index={i} total={TECH_STACK.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FloatingTechCardProps {
  tech: { name: string; url: string; color: string }
  index: number
  total: number
}

function FloatingTechCard({ tech, index, total }: FloatingTechCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Calculate position in a spiral/circular pattern
  const angle = (index / total) * Math.PI * 2
  const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 110 : 180
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  // Mouse tracking for tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const normalizedX = (e.clientX - centerX) / (rect.width / 2)
    const normalizedY = (e.clientY - centerY) / (rect.height / 2)

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="absolute left-1/2 top-1/2 cursor-pointer"
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        x,
        y,
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.3,
        z: 50,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 glass-morphism rounded-2xl p-2 sm:p-4 flex items-center justify-center group"
        style={{
          boxShadow: isHovered ? `0 20px 60px -10px #${tech.color}40` : "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3 + index * 0.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, #${tech.color}20, transparent 70%)`,
            filter: "blur(10px)",
          }}
        />

        {/* Icon */}
        <Image
          src={tech.url || "/placeholder.svg"}
          alt={tech.name}
          className="w-full h-full object-contain relative z-10"
        />

      </motion.div>
    </motion.div>
  )
}
