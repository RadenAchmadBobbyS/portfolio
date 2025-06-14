"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  useEffect(() => {
    if (!mounted) return

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [mounted, handleMouseMove, handleMouseLeave, handleMouseDown, handleMouseUp])

  if (!mounted) return null

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? (isClicking ? 0.8 : 1) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
          scale: isVisible ? (isClicking ? 1.5 : 1) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="w-10 h-10 border border-white/50 rounded-full" />
      </motion.div>

      {isVisible && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-30 w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: mousePosition.x - 2,
                top: mousePosition.y - 2,
              }}
              animate={{
                x: (Math.random() - 0.5) * 20,
                y: (Math.random() - 0.5) * 20,
                opacity: [0.8, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </>
  )
}
