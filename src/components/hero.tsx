"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: { x: number; y: number; size: number; speed: number }[] = []
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 5000)

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.05 + 0.01,
      })
    }

    // Animation
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()

        // Move stars
        star.y += star.speed

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background for stars */}

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Orbital ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-indigo-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-indigo-500/5 rounded-full"></div>

        {/* Glowing orb */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-2 inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-indigo-400">Available for new projects</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider text-indigo-500 mb-2">Hi, I&apos;m</span>
          </motion.h1>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="relative text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Raden Achmad Bobby
              <br className="hidden sm:block" />
            </h2>
          </motion.div>

          <motion.p
            className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed mt-6 mx-auto text-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Let&apos;s create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >

          </motion.div>

          {/* Tech stack indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "JavaScript"].map((tech, index) => (
              <div key={tech} className="flex items-center gap-1 text-xs text-gray-400">
                <Star className="h-3 w-3 text-indigo-500" />
                {tech}
                {index < 4 && <span className="text-gray-600 ml-3">•</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-indigo-500/20 z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-indigo-500/20 z-10 pointer-events-none"></div>
    </section>
  )
}
