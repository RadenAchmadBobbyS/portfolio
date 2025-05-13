"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const techStack = [
  {
    name: "React",
    icon: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "https://netmaxims.com/images/next-js-two.png",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png",
    category: "language",
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    category: "language",
  },
  {
    name: "Node.js",
    icon: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    category: "backend",
  },
  {
    name: "Express",
    icon: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/512/mongodb.png",
    category: "database",
  },
  {
    name: "PostgreSQL",
    icon: "https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png",
    category: "database",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    category: "frontend",
  },
  {
    name: "Three.js",
    icon: "https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_1016x1024.png",
    category: "frontend",
  },
  {
    name: "Docker",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    category: "devops",
  },
  {
    name: "AWS",
    icon: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png",
    category: "devops",
  },
  {
    name: "Git",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175219.png",
    category: "tool",
  },
  {
    name: "Figma",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    category: "design",
  },
  {
    name: "Python",
    icon: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png",
    category: "language",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-graphql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944912.png?f=webp",
    category: "backend",
  },
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate visible skills based on current index
  const getVisibleSkills = () => {
    const result = []
    for (let i = 0; i < 7; i++) {
      const index = (currentIndex + i) % techStack.length
      result.push({ ...techStack[index], originalIndex: index })
    }
    return result
  }

  const visibleTechStack = getVisibleSkills()

  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    document.body.style.cursor = "grabbing"
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      document.body.style.cursor = "default"

      // If dragged far enough, change the current index
      if (Math.abs(offsetX) > 50) {
        const direction = offsetX > 0 ? -1 : 1
        const newIndex = (currentIndex + direction + techStack.length) % techStack.length
        setCurrentIndex(newIndex)
      }

      // Reset offset
      setOffsetX(0)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - startX
    setOffsetX(deltaX)
  }

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const deltaX = e.touches[0].clientX - startX
    setOffsetX(deltaX)
  }

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false)

      // If dragged far enough, change the current index
      if (Math.abs(offsetX) > 50) {
        const direction = offsetX > 0 ? -1 : 1
        const newIndex = (currentIndex + direction + techStack.length) % techStack.length
        setCurrentIndex(newIndex)
      }

      // Reset offset
      setOffsetX(0)
    }
  }

  // Navigate with buttons
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techStack.length) % techStack.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length)
  }

  // Add mouse leave event to stop dragging if mouse leaves the container
  useEffect(() => {
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false)
        document.body.style.cursor = "default"
        setOffsetX(0)
      }
    }

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        document.body.style.cursor = "default"

        // If dragged far enough, change the current index
        if (Math.abs(offsetX) > 50) {
          const direction = offsetX > 0 ? -1 : 1
          const newIndex = (currentIndex + direction + techStack.length) % techStack.length
          setCurrentIndex(newIndex)
        }

        // Reset offset
        setOffsetX(0)
      }
    }

    document.addEventListener("mouseup", handleGlobalMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDragging, offsetX, currentIndex])

  return (
    <section className="py-20 flex items-center justify-center min-h-[50vh]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            The technologies, tools, and languages I use to bring ideas to life
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full text-gray-200"
            aria-label="Previous skill"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-gray-800/80 hover:bg-gray-700 p-2 rounded-full text-gray-200"
            aria-label="Next skill"
          >
            <ChevronRight size={20} />
          </button>

          {/* Overlapping cards container */}
          <div
            ref={containerRef}
            className={`relative flex justify-center items-center h-40 mx-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              perspective: "1000px",
            }}
          >
            {visibleTechStack.map((tech, index) => {
              // Calculate position based on index and drag offset
              const centerOffset = index - 3
              const xOffset = centerOffset * 50 + (isDragging ? offsetX / (Math.abs(centerOffset) + 1) : 0)

              return (
                <motion.div
                  key={`${tech.name}-${tech.originalIndex}`}
                  className="absolute"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: xOffset,
                    zIndex: activeIndex === index ? 10 : 7 - Math.abs(centerOffset),
                    rotateY: `${centerOffset * 5}deg`,
                    scale: activeIndex === index ? 1.1 : 1,
                  }}
                  transition={{
                    duration: isDragging ? 0.1 : 0.3,
                    type: isDragging ? "tween" : "spring",
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                  onHoverStart={() => !isDragging && setActiveIndex(index)}
                  onHoverEnd={() => !isDragging && setActiveIndex(null)}
                >
                  <div
                    className={`relative bg-gray-800 rounded-lg p-2 border-2 transition-all duration-300 ${
                      activeIndex === index ? "border-blue-400" : "border-gray-700"
                    }`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>

                    {/* Popup text on hover */}
                    {activeIndex === index && !isDragging && (
                      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-md shadow-lg z-20 whitespace-nowrap">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-900"></div>
                        <p className="text-sm font-medium">{tech.name}</p>
                        <p className="text-xs text-gray-400">{tech.category}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 gap-1">
            {Array.from({ length: Math.min(7, techStack.length) }).map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 3 ? "bg-blue-400" : "bg-gray-600"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
