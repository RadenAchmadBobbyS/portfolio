"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Box, MeshDistortMaterial } from "@react-three/drei"
import { useState, useEffect, useRef, useCallback } from "react"

function FloatingCubes() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Box args={[0.5, 0.5, 0.5]} position={[-3, 2, -2]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Box>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Box args={[0.3, 0.3, 0.3]} position={[3, -1, -1]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0}
            metalness={0.9}
          />
        </Box>
      </Float>

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
    </>
  )
}

const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB", description: "Frontend Library", level: 95 },
  { name: "Next.js", icon: "▲", color: "#000000", description: "React Framework", level: 90 },
  { name: "TypeScript", icon: "TS", color: "#3178C6", description: "Type Safety", level: 88 },
  { name: "Node.js", icon: "🟢", color: "#339933", description: "Backend Runtime", level: 85 },
  { name: "Python", icon: "🐍", color: "#3776AB", description: "Programming Language", level: 80 },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", description: "Database", level: 82 },
  { name: "Docker", icon: "🐳", color: "#2496ED", description: "Containerization", level: 75 },
  { name: "AWS", icon: "☁️", color: "#FF9900", description: "Cloud Platform", level: 78 },
  { name: "GraphQL", icon: "◇", color: "#E10098", description: "Query Language", level: 70 },
  { name: "MongoDB", icon: "🍃", color: "#47A248", description: "NoSQL Database", level: 85 },
  { name: "Redis", icon: "🔴", color: "#DC382D", description: "In-Memory Store", level: 72 },
  { name: "Kubernetes", icon: "⚙️", color: "#326CE5", description: "Orchestration", level: 68 },
]

export default function TechStackSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (gridRef.current) {
      const rect = gridRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const gridElement = gridRef.current
    if (gridElement) {
      gridElement.addEventListener("mousemove", handleMouseMove)
      return () => gridElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mounted, handleMouseMove])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-15 dark:opacity-25">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <FloatingCubes />
        </Canvas>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Enhanced Bento Grid with Thicker Colorful Glowing Borders */}
          <div
            ref={gridRef}
            className="relative grid grid-cols-2 rounded-md md:grid-cols-3 lg:grid-cols-4 dark:border-gray-400 overflow-hidden bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm"
            style={{
              background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent)`,
            }}
          >
            {/* Enhanced Colorful Glowing Grid Lines */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
        radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(59, 130, 246, 1) 0%, 
          rgba(139, 92, 246, 0.9) 25%, 
          rgba(239, 68, 68, 0.8) 45%,
          rgba(245, 158, 11, 0.7) 65%,
          rgba(16, 185, 129, 0.6) 80%,
          transparent 100%
        )
      `,
                maskImage: `
        repeating-linear-gradient(to right, 
          transparent 0, 
          transparent calc(25% - 2px), 
          black calc(25% - 2px), 
          black calc(25% + 2px)
        ),
        repeating-linear-gradient(to bottom, 
          transparent 0, 
          transparent calc(${100 / Math.ceil(techStack.length / 4)}% - 2px), 
          black calc(${100 / Math.ceil(techStack.length / 4)}% - 2px), 
          black calc(${100 / Math.ceil(techStack.length / 4)}% + 2px)
        ),
        linear-gradient(to right, black 4px, transparent 4px, transparent calc(100% - 4px), black calc(100% - 4px)),
        linear-gradient(to bottom, black 4px, transparent 4px, transparent calc(100% - 4px), black calc(100% - 4px))
      `,
                maskComposite: "add",
              }}
            />

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Enhanced Glowing border on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `
            inset 0 0 40px ${tech.color}80, 
            0 0 30px ${tech.color}60,
            0 0 60px ${tech.color}40
          `,
                    border: `3px solid ${tech.color}`,
                  }}
                />

                <motion.div
                  className="relative bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 h-32 flex flex-col items-center justify-center text-center group-hover:bg-gray-100/90 dark:group-hover:bg-gray-700/90 transition-all duration-200"
                  whileHover={{ scale: 1.045 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <motion.div
                    className="text-3xl mb-2"
                    animate={hoveredTech === tech.name ? { scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>

                  <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1 text-sm">{tech.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{tech.description}</p>

                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                    <motion.div
                      className="h-1 rounded-full"
                      style={{ backgroundColor: tech.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {hoveredTech === tech.name && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{ backgroundColor: tech.color }}
                          initial={{ x: 0, y: 0, opacity: 0 }}
                          animate={{
                            x: (Math.random() - 0.5) * 100,
                            y: (Math.random() - 0.5) * 100,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
