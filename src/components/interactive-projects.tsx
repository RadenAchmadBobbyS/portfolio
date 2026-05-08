"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ExternalLink, X } from "lucide-react"
import { useState, useRef, type MouseEvent } from "react"
import { projects } from "@/lib/project"
import Image from 'next/image';

export default function InteractiveProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <section id="projects" className="mt-15 px-6 max-w-7xl mx-auto space-y-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-foreground" />
            <span className="text-sm font-mono text-foreground uppercase tracking-widest">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Selected Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Recent work and experimental builds that push the boundaries of web development.
          </p>
        </motion.div>

        {/* Bento-style project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} onImageClick={setSelectedImage} />
          ))}
        </div>
      </section>

      {/* Image Modal - FIXED VERSION */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            style={{ cursor: 'zoom-out' }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20 z-[10000]"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>
            
            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project preview"
                width={800}
                height={600}
                className="w-full h-full max-w-[95vw] max-h-[95vh] object-contain rounded-xl shadow-2xl"
                style={{ cursor: 'default' }}
              />
            </motion.div>

            {/* Click instruction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono"
            >
              Click anywhere to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface ProjectCardProps {
  project: {
    projectName: string
    description: string
    techStack: string
    imageUrl?: string
  }
  index: number
  onImageClick: (url: string) => void
}

function ProjectCard({ project, index, onImageClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Magnetic cursor effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

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

  const handleImageClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (project.imageUrl) {
      onImageClick(project.imageUrl)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative ${index === 0 || index === 3 ? "md:col-span-2 lg:row-span-2" : ""}`}
    >
      <Card
        className={`relative overflow-hidden border-0 glass-morphism transition-all duration-500 ${
          index === 0 || index === 3 ? "h-[500px] md:h-[600px]" : "h-[400px]"
        }`}
      >
        {/* Image with parallax effect - CLICKABLE */}
        <motion.div
          className="absolute inset-0 cursor-zoom-in"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
          onClick={handleImageClick}
        >
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.projectName}
            width={600}
            height={400}
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
          
          {/* Zoom indicator on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center pointer-events-none"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Hover overlay with glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-foreground/20 via-transparent to-foreground/20 opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 pointer-events-none">
          <motion.div
            style={{
              transform: isHovered ? "translateZ(50px)" : "translateZ(0px)",
              transformStyle: "preserve-3d",
            }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Tech stack badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="px-3 py-1 rounded-full border border-foreground/30 text-xs font-mono backdrop-blur-xl">
                {project.techStack}
              </div>
            </motion.div>

            {/* Project title */}
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-2xl md:text-3xl font-bold group-hover:text-foreground transition-colors">
                {project.projectName}
              </h3>
              <motion.div
                animate={{
                  rotate: isHovered ? 45 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                className="flex-shrink-0 w-10 h-10 rounded-full glass-morphism flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 text-foreground" />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0.7,
                height: isHovered ? "auto" : "auto",
              }}
              transition={{ duration: 0.3 }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none"
            >
              {project.description}
            </motion.p>

            {/* Hover indicator line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : "0%" }}
              className="h-[1px] bg-gradient-to-r from-foreground via-foreground to-transparent"
            />
          </motion.div>
        </div>

        {/* Corner foreground */}
        <motion.div className="absolute top-0 right-0 w-32 h-32 opacity-0 pointer-events-none" animate={{ opacity: isHovered ? 0.3 : 0 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-foreground to-transparent blur-2xl" />
        </motion.div>
      </Card>
    </motion.div>
  )
}