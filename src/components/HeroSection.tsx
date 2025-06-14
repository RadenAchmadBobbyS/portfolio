"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Stars } from "@react-three/drei"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

function AnimatedSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={3}
          roughness={0}
          metalness={0.20}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
}

function Background3D() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 10, -10]} intensity={0.3} color="#ef4444" />

      <AnimatedSphere position={[-4, 2, -2]} color="#3b82f6" />
      <AnimatedSphere position={[4, -2, -3]} color="#8b5cf6" />
      <AnimatedSphere position={[0, 3, -4]} color="#ef4444" />
      <AnimatedSphere position={[-2, -3, -2]} color="#f59e0b" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

const texts = ["Full Stack Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"]

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Background3D />
        </Canvas>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 pl-0 lg:pl-8 mt-16 sm:mt-20 lg:mt-0"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 text-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Hi, I'm
              <motion.span
                className="gradient-text text-nowrap"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {" "}Raden Achmad
              </motion.span>
            </motion.h1>
            <motion.div
              className="h-16 flex items-center"
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">
                {texts[currentText]}
              </h2>
            </motion.div>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Crafting digital experiences with modern technologies and creative solutions. Passionate about building
              beautiful, functional, and user-centered applications.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="px-8 py-3 neumorphic-button dark:neumorphic-button-dark text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("projects")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-3 neumorphic-pressed dark:neumorphic-pressed-dark text-blue-600 dark:text-blue-400 font-semibold rounded-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Bulatan ungu glowing di luar image */}
            <motion.div
              className="absolute -top-8 -right-8 w-44 h-44 z-10"
              style={{ pointerEvents: 'none' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
            >
            </motion.div>
            <div className="relative">
              {/* 3D Container with perspective */}
              <motion.div
                className="relative w-80 h-80 perspective-1000"
                whileHover={{ rotateY: 15, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Back layer - shadow/depth */}
                <motion.div
                  className="absolute inset-0 w-80 h-80 rounded-full shadow-2xl bg-gradient-to-br from-blue-500/20 to-transparent blur-xl"
                  style={{ transform: "translateZ(-50px)" }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                {/* Front layer - main image dengan efek 3D */}
                <motion.div
                  className="relative w-80 h-80 neumorphic-card dark:neumorphic-card-dark overflow-hidden shadow-2xl"
                  style={{
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    clipPath: "ellipse(50% 60% at 50% 40%)",
                    transform: "translateZ(0px)",
                    boxShadow: "0 12px 40px 0 rgba(80,60,180,0.18), 0 1.5px 8px #2d3748"
                  }}
                >
                  <Image
                    src="/bobby.png?height=320&width=320"
                    alt="Profile"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-top"
                    style={{ transform: "translateZ(10px)" }}
                  />
                  {/* 3D overlay effects */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"
                    style={{ transform: "translateZ(15px)" }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </motion.div>
                {/* Floating 3D particles */}
                
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
