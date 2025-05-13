"use client"

import { useEffect, useRef } from "react"
import styles from "./night-background.module.css"

interface Meteor {
  x: number
  y: number
  size: number
  speed: number
  tail: number
  opacity: number
  active: boolean
  timeToLive: number
}

interface Planet {
  x: number
  y: number
  radius: number
  color: string
  rings: boolean
  angle: number
  speed: number
}

export default function SpaceBackground() {
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

    // Stars
    const stars: { x: number; y: number; radius: number; opacity: number; twinkle: number }[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.01,
      })
    }


    // Planets
    const planets: Planet[] = [
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        radius: Math.min(canvas.width, canvas.height) * 0.05,
        color: "#a67c52",
        rings: true,
        angle: 0,
        speed: 0.0002,
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        radius: Math.min(canvas.width, canvas.height) * 0.03,
        color: "#6b93d6",
        rings: false,
        angle: 0,
        speed: 0.0003,
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.8,
        radius: Math.min(canvas.width, canvas.height) * 0.02,
        color: "#d9a566",
        rings: false,
        angle: 0,
        speed: 0.0004,
      },
    ]

    // Meteors
    const meteors: Meteor[] = []
    const maxMeteors = 10

    const createMeteor = () => {
      if (meteors.length < maxMeteors && Math.random() < 0.002) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: 0,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1.5 + 0.5,
          tail: Math.random() * 70 + 70,
          opacity: Math.random() * 0.8 + 0.2,
          active: true,
          timeToLive: Math.random() * 1000 + 500,
        })
      }
    }

    // Animation
    let animationFrameId: number

    const animate = (time: number) => {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a0a1a")
      gradient.addColorStop(1, "#1a1a2e")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        star.opacity += Math.sin(time * 0.001 + star.twinkle * 100) * 0.01
        star.opacity = Math.max(0.2, Math.min(0.9, star.opacity))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      // Draw planets
      planets.forEach((planet) => {
        // Update planet rotation
        planet.angle += planet.speed

        // Draw planet
        ctx.beginPath()
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2)
        ctx.fillStyle = planet.color
        ctx.fill()

        // Draw planet details (simple shading)
        ctx.beginPath()
        ctx.arc(planet.x - planet.radius * 0.2, planet.y - planet.radius * 0.2, planet.radius * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, 0.1)`
        ctx.fill()

        // Draw rings if the planet has them
        if (planet.rings) {
          ctx.beginPath()
          ctx.ellipse(planet.x, planet.y, planet.radius * 1.8, planet.radius * 0.5, planet.angle, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`
          ctx.lineWidth = 3
          ctx.stroke()
        }

        // Slowly move planets
        planet.x -= planet.speed * 10
        if (planet.x + planet.radius < 0) {
          planet.x = canvas.width + planet.radius
        }
      })

      // Handle meteors
      createMeteor()
      meteors.forEach((meteor) => {
        if (meteor.active) {
          const angle = Math.PI / 4
          const tailX = meteor.x - Math.cos(angle) * meteor.tail
          const tailY = meteor.y - Math.sin(angle) * meteor.tail

          const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY)
          gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`)
          gradient.addColorStop(0.3, `rgba(255, 200, 150, ${meteor.opacity * 0.6})`)
          gradient.addColorStop(1, `rgba(255, 100, 0, 0)`)

          ctx.beginPath()
          ctx.moveTo(meteor.x, meteor.y)
          ctx.lineTo(tailX, tailY)
          ctx.strokeStyle = gradient
          ctx.lineWidth = meteor.size
          ctx.lineCap = "round"
          ctx.stroke()

          ctx.save()
          ctx.shadowColor = `rgba(255, 255, 255, ${meteor.opacity})`
          ctx.shadowBlur = 20
          ctx.beginPath()
          ctx.arc(meteor.x, meteor.y, meteor.size * 0.7, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`
          ctx.fill()
          ctx.restore()

          meteor.x += meteor.speed
          meteor.y += meteor.speed
          meteor.timeToLive--

          if (meteor.x > canvas.width || meteor.y > canvas.height || meteor.timeToLive <= 0) {
            meteor.x = Math.random() * canvas.width
            meteor.y = 0
            meteor.speed = Math.random() * 1.5 + 0.5
            meteor.tail = Math.random() * 100 + 70
            meteor.timeToLive = Math.random() * 1000 + 500
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.background} aria-hidden="true" />
}
