"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Stars } from "@react-three/drei"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Star, Users, Code } from "lucide-react"

function DetailedSphere({
  position,
  color,
  size = 1,
}: { position: [number, number, number]; color: string; size?: number }) {
  return (
    <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.8}>
      <group position={position}>
        {/* Main detailed sphere with crystal-like appearance */}
        <Sphere args={[size, 128, 128]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.25}
            speed={1.2}
            roughness={0.02}
            metalness={0.95}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.98}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
        {/* Inner plasma core */}
        <Sphere args={[size * 0.65, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
            emissive={color}
            emissiveIntensity={0.8}
            transparent
            opacity={0.75}
          />
        </Sphere>
        {/* Energy field wireframe */}
        <Sphere args={[size * 1.25, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.6}
            speed={2.8}
            roughness={0.8}
            metalness={0.2}
            emissive={color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.35}
            wireframe
          />
        </Sphere>
        {/* Inner crystalline structure */}
        <Sphere args={[size * 0.45, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.7}
            speed={3.5}
            roughness={0.1}
            metalness={0.9}
            emissive={color}
            emissiveIntensity={0.9}
            transparent
            opacity={0.6}
          />
        </Sphere>
        {/* Outer aura */}
        <Sphere args={[size * 1.4, 16, 16]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.8}
            speed={4}
            roughness={1}
            metalness={0}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.2}
            wireframe
          />
        </Sphere>
      </group>
    </Float>
  )
}

function Background3D() {
  return (
    <>
      <Stars radius={150} depth={80} count={4000} factor={4} saturation={0} fade speed={0.2} />
      <ambientLight intensity={0.6} />
      <pointLight position={[15, 15, 15]} intensity={2.5} color="#3b82f6" />
      <pointLight position={[-15, -15, -15]} intensity={2} color="#8b5cf6" />
      <pointLight position={[0, 15, -15]} intensity={1.5} color="#10b981" />
      <pointLight position={[10, -10, 10]} intensity={1.2} color="#f59e0b" />

      {/* 3 ENHANCED BEAUTIFUL SPHERES */}
      <DetailedSphere position={[-4, 2, -3]} color="#3b82f6" size={0.8} />
      <DetailedSphere position={[3, -2, -4]} color="#8b5cf6" size={0.7} />
      <DetailedSphere position={[0, 3, -5]} color="#10b981" size={0.6} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
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
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 opacity-40 sm:opacity-45 md:opacity-50 dark:opacity-55 dark:sm:opacity-60 dark:md:opacity-65">
        <Canvas camera={{ position: [0, 0, 7], fov: 70 }}>
          <Background3D />
        </Canvas>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 pl-0 lg:pl-8 mt-16 sm:mt-20 lg:mt-0 order-2 lg:order-1"
          >
            <motion.h1
              className="text-3xl sm:text-4xl text-nowrap md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-gray-100 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Hi, I&apos;m
              <motion.span
                className="gradient-text block sm:inline text-nowrap"
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
              className="h-12 sm:h-16 flex items-center"
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-600 dark:text-gray-300">
                {texts[currentText]}
              </h2>
            </motion.div>
            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Crafting digital experiences with modern technologies and creative solutions. Passionate about building
              beautiful, functional, and user-centered applications.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="px-6 sm:px-8 py-3 neumorphic-button dark:neumorphic-button-dark text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
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
                className="px-6 sm:px-8 py-3 neumorphic-pressed dark:neumorphic-pressed-dark text-blue-600 dark:text-blue-400 font-semibold rounded-xl text-sm sm:text-base"
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

          {/* Professional image section with full rounded background */}
          <motion.div
            className="relative flex justify-end lg:justify-end order-1 lg:order-2 mt-10 sm:mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main container */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] perspective-1000"
                whileHover={{
                  rotateY: 6,
                  rotateX: 3,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                
                <motion.div
                  className="absolute inset-0 w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[390px] bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 rounded-full shadow-2xl"
                  style={{
                    transform: "translateZ(-15px)",
                  }}
                  animate={{
                    rotateZ: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Main profile image - head sticks out */}
                <motion.div
                  className="relative w-full h-full overflow-visible rounded-full"
                  style={{
                    transform: "translateZ(20px)",
                  }}
                >
                  <Image
                    src="/bobby.png?height=420&width=420"
                    alt="Profile"
                    width={420}
                    height={420}
                    className="w-full h-full object-cover object-top transition-transform duration-700 rounded-full"
                    style={{
                      transform: "translateZ(10px) translateY(-24px)",
                    }}
                  />
                </motion.div>

                {/* Closer floating UI elements */}
                <motion.div
                  className="absolute -top-1 mt-7 right-9 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700"
                  style={{ transform: "translateZ(35px)" }}
                  animate={{
                    y: [0, -5, 0],
                    rotateZ: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">5.0</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-20 -right-6 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700"
                  style={{ transform: "translateZ(40px)" }}
                  animate={{
                    x: [0, -3, 0],
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.5,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">100+</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-16 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700"
                  style={{ transform: "translateZ(32px)" }}
                  animate={{
                    x: [0, 5, 0],
                    rotateZ: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 2,
                  }}
                >
                  <Code className="w-5 h-5 text-purple-500" />
                </motion.div>

                {/* Profile avatars cluster - closer */}
                <motion.div
                  className="absolute top-6 left-1 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg border border-gray-200 dark:border-gray-700"
                  style={{ transform: "translateZ(38px)" }}
                  animate={{
                    y: [0, -3, 0],
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.8,
                  }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ${
                          i === 1
                            ? "bg-blue-500"
                            : i === 2
                              ? "bg-green-500"
                              : i === 3
                                ? "bg-purple-500"
                                : "bg-orange-500"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Closer floating accents */}
                <motion.div
                  className="absolute top-12 right-4 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"
                  style={{ transform: "translateZ(45px)" }}
                  animate={{
                    y: [0, -6, 0],
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                />
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
