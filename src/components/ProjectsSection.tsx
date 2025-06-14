"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Octahedron, MeshDistortMaterial } from "@react-three/drei"
import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "./ThemeProvider"

function FloatingShapes() {
  return (
    <>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
        <Octahedron args={[0.4]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Octahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.8}>
        <Octahedron args={[0.2]} position={[2, -1, -2]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0}
            metalness={0.9}
          />
        </Octahedron>
      </Float>

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3b82f6" />
    </>
  )
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/hermes-2.png?height=400&width=600",
    color: "#3b82f6",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    gallery: [
      "/hermes-6.png?height=400&width=600",
      "/hermes-4.png?height=400&width=600",
      "/hermes-3.png?height=400&width=600",
    ],
    features: [
      "User authentication and authorization",
      "Shopping cart and checkout system",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Real-time order tracking",
    ],
    challenges: "Implementing real-time inventory updates and handling concurrent user sessions.",
    outcome: "Increased client sales by 40% and improved user engagement by 60%.",
  },
  {
    id: 2,
    title: "Task Management App",
    image: "/Mybooks-project-1.png?height=300&width=400",
    color: "#8b5cf6",
    description: "Collaborative task management with real-time updates",
    tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
    gallery: [
      "/Mybooks-project-2.png?height=400&width=600",
      "/Mybooks-project-3.png?height=400&width=600",
      "/Mybooks-project-4.png?height=400&width=600",
    ],
    features: [
      "Real-time collaboration",
      "Drag and drop task management",
      "Team chat integration",
      "Progress tracking and analytics",
      "Mobile responsive design",
    ],
    challenges: "Ensuring real-time synchronization across multiple users without conflicts.",
    outcome: "Adopted by 15+ teams, improving productivity by 35%.",
  },
  {
    id: 3,
    title: "AI Chat Application",
    image: "/quizez-4.png?height=300&width=400",
    color: "#ef4444",
    description: "Intelligent chatbot with natural language processing",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    github: "#",
    live: "#",
    gallery: [
      "/quizez-1.png?height=400&width=600",
      "/quizez-2.png?height=400&width=600",
      "/quizez-6.png?height=400&width=600",
    ],
    features: [
      "Natural language understanding",
      "Context-aware responses",
      "Multi-language support",
      "Voice input/output",
      "Custom training capabilities",
    ],
    challenges: "Training the model to understand context and provide relevant responses.",
    outcome: "Reduced customer support tickets by 50% and improved response time by 80%.",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    image: "/0.png?height=300&width=400",
    color: "#10b981",
    description: "Analytics dashboard for social media management",
    tech: ["Vue.js", "D3.js", "Express", "MySQL"],
    github: "#",
    live: "#",
    gallery: [
      "/1.png?height=400&width=600",
      "/2.png?height=400&width=600",
      "/9.png?height=400&width=600",
    ],
    features: [
      "Multi-platform integration",
      "Real-time analytics",
      "Custom reporting",
      "Automated posting",
      "Team collaboration",
    ],
    challenges: "Integrating multiple social media APIs with different rate limits.",
    outcome: "Helped clients increase engagement by 75% and save 10 hours per week.",
  },
  {
    id: 5,
    title: "Crypto Trading Bot",
    image: "/urban-2.png?height=300&width=400",
    color: "#f59e0b",
    description: "Automated cryptocurrency trading system",
    tech: ["Python", "TensorFlow", "Redis", "WebSocket"],
    github: "#",
    live: "#",
    gallery: [
      "/urban-1.png?height=400&width=600",
      "/urban-3.png?height=400&width=600",
      "/urban-4.png?height=400&width=600",
    ],
    features: [
      "Machine learning algorithms",
      "Real-time market analysis",
      "Risk management system",
      "Portfolio optimization",
      "Backtesting capabilities",
    ],
    challenges: "Handling high-frequency data and ensuring low-latency execution.",
    outcome: "Achieved 23% annual return with 15% lower volatility than market average.",
  }
]

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverPos, setHoverPos] = useState<{x: number, y: number} | null>(null);
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

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)
    }
  }

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-15 dark:opacity-25">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <FloatingShapes />
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
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4 drop-shadow-md dark:drop-shadow-lg">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </motion.div>

          {/* Bento Grid Layout - Semua Project 1 Cell, Full Image */}
          <div
            ref={gridRef}
            className="relative grid grid-cols-3 md:grid-cols-3 grid-rows-2 md:grid-rows-2 gap-2 rounded-2xl border border-gray-300 dark:border-gray-700 overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl h-[700px]"
            style={{
              background: `radial-gradient(circle 220px at ${mousePosition.x}px ${mousePosition.y}px, var(--primary-glow, rgba(59,130,246,0.18)), transparent 80%)`,
              boxShadow: theme === 'dark' ? '0 4px 32px #10151b, 0 1.5px 8px #2d3748' : undefined,
            }}
          >
            {/* Glowing Mouse Glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle 220px at ${mousePosition.x}px ${mousePosition.y}px, var(--primary-glow, rgba(59,130,246,0.18)), transparent 80%)`,
                zIndex: 2,
              }}
            />
            {/* --- GRADIENT BENTO GRID LINES (ANTAR CELL & PINGGIR) --- */}
            {/* Outer border */}
            {/* Top */}
            <div className="absolute left-0 top-0 w-full h-[3px] z-20 pointer-events-none">
              <div
                className={`w-full h-full rounded-t-xl transition-all duration-300`}
                style={
                  (hoverIndex !== null && hoverIndex < 3 && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at ${hoverPos.x}px 0, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to right, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            {/* Bottom */}
            <div className="absolute left-0 bottom-0 w-full h-[3px] z-20 pointer-events-none">
              <div
                className={`w-full h-full rounded-b-xl transition-all duration-300`}
                style={
                  (hoverIndex !== null && hoverIndex >= 3 && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at ${hoverPos.x}px 3px, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to right, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            {/* Left */}
            <div className="absolute left-0 top-0 h-full w-[3px] z-20 pointer-events-none">
              <div
                className={`h-full w-full rounded-l-xl transition-all duration-300`}
                style={
                  (hoverIndex !== null && hoverIndex % 3 === 0 && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at 0 ${hoverPos.y}px, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to bottom, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            {/* Right */}
            <div className="absolute right-0 top-0 h-full w-[3px] z-20 pointer-events-none">
              <div
                className={`h-full w-full rounded-r-xl transition-all duration-300`}
                style={
                  (hoverIndex !== null && hoverIndex % 3 === 2 && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at 3px ${hoverPos.y}px, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to bottom, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            {/* Vertikal lines (antara kolom) */}
            <div className="absolute top-0 left-1/3 w-[3px] h-full z-10 pointer-events-none" style={{transform: 'translateX(-1.5px)'}}>
              <div
                className={`w-full h-full rounded transition-all duration-300`}
                style={
                  (hoverIndex !== null && (hoverIndex % 3 === 1 || hoverIndex % 3 === 2) && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at 0 ${hoverPos.y}px, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to bottom, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            <div className="absolute top-0 left-2/3 w-[3px] h-full z-10 pointer-events-none" style={{transform: 'translateX(-1.5px)'}}>
              <div
                className={`w-full h-full rounded transition-all duration-300`}
                style={
                  (hoverIndex !== null && hoverIndex % 3 === 2 && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at 0 ${hoverPos.y}px, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to bottom, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            {/* Horizontal lines (antara baris) */}
            <div className="absolute left-0 top-1/2 h-[3px] w-full z-10 pointer-events-none" style={{transform: 'translateY(-1.5px)'}}>
              <div
                className={`h-full w-full rounded transition-all duration-300`}
                style={
                  (hoverIndex !== null && hoverIndex >= 3 && hoverPos)
                    ? {
                        background: `radial-gradient(circle 40px at ${hoverPos.x}px 0, var(--primary, #3b82f6) 0%, var(--accent, #a21caf) 100%, var(--bento-dark, #23272f) 100%)`,
                        transition: 'background 0.3s',
                      }
                    : {
                        background: 'linear-gradient(to right, var(--bento-dark, #23272f), var(--bento-dark, #23272f) 100%)',
                        transition: 'background 0.3s',
                      }
                }
              ></div>
            </div>
            {/* --- END GRID LINES --- */}
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800 w-full h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
                onMouseEnter={e => {
                  setHoverIndex(idx);
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  setHoverPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                }}
                onMouseMove={e => {
                  if (hoverIndex === idx) {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    setHoverPos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    });
                  }
                }}
                onMouseLeave={() => {
                  setHoverIndex(null);
                  setHoverPos(null);
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 24px 6px ${project.color}55, 0 0 48px 12px ${project.color}33`,
                    border: `3px solid ${project.color}`,
                  }}
                />
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    style={{background: 'var(--bento-light, #fff)'}}
                  />
                  <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={24} />
                    </motion.div>
                  </motion.div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h3 className="font-bold text-white text-base md:text-lg lg:text-xl drop-shadow-md" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.7)" }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <div className="relative mb-4">
                    <Image
                      src={selectedProject.gallery[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      width={800}
                      height={400}
                      className="w-full h-64 md:h-96 object-cover rounded-lg"
                    />

                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {selectedProject.gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProject.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative overflow-hidden rounded-lg ${
                            index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                          }`}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            width={200}
                            height={150}
                            className="w-full h-20 object-cover hover:scale-110 transition-transform"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Description</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.description}</p>

                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedProject.color }} />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Challenges</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.challenges}</p>

                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Outcome</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.outcome}</p>

                    <div className="flex space-x-4">
                      <a
                        href={selectedProject.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={selectedProject.live}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
