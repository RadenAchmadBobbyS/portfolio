"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Torus, MeshDistortMaterial } from "@react-three/drei"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Building } from "lucide-react"

function FloatingTorus() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.5}>
        <Torus args={[0.6, 0.2, 16, 32]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Torus>
      </Float>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Torus args={[0.4, 0.15, 12, 24]} position={[2, -1, -2]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0}
            metalness={0.9}
          />
        </Torus>
      </Float>

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3b82f6" />
    </>
  )
}

const experiences = [
  {
    id: 1,
    year: "2015-2025",
    title: "IT Support Intern",
    company: "Badan Pemeriksa Keuangan RI.",
    location: "Jakarta, Indonesia",
    description:
      "As an IT Support Intern, I was responsible for assisting the IT team in maintaining and troubleshooting hardware, software, and network systems",
    achievements: [
      "Hands-on experience with Windows, networking, and troubleshooting",
      "Improved communication skills through direct user support",
      "Familiarity with IT asset management and helpdesk systems",
    ],
    color: "#3b82f6",
    technologies: [],
  },
  {
    id: 2,
    year: "2017-2017",
    title: "Administrative Staff",
    company: "Bangun Persada Vocational High School",
    location: "Bekasi Selatan",
    description:
      "As a School Administrative Staff, I was responsible for managing student records, handling official documentation, and supporting the school’s day-to-day administrative activities.",
    achievements: [
      "Strong document handling and organizational skills",
      "Professional communication and service-oriented mindset",
      "Proficiency in administrative tools (Microsoft Office, etc.)",
    ],
    color: "#8b5cf6",
    technologies: [],
  },
  {
    id: 3,
    year: "2020-2024",
    title: "Video Editor",
    company: "Getol Mancing Youtube Channel",
    location: "Indonesia",
    description:
      "As a Video Editor, I am responsible for cutting, arranging, and enhancing video content to make it engaging, informative, and aligned with the client’s or brand’s objectives",
    achievements: [
      "Strong visual storytelling and editing sense",
      "Adjust video pacing, color tone, and rhythm to match brand tone",
      "Proficiency in professional editing software",
    ],
    color: "#ef4444",
    technologies: ["Adobe Premiere", "Filmora", "Canva"],
  },
  {
    id: 4,
    year: "2025-Present",
    title: "Full Stack Developer",
    company: "Hacktiv8 Indonesia",
    location: "Remote",
    description:
      "Currently working as a developer, build modern web applications, join as student.",
    achievements: [
      "Full-cycle web development (frontend + backend)",
      "Strong understanding of API communication and data flow",
      "Clean code practices and scalable architecture",
    ],
    color: "#f59e0b",
    technologies: ["React", "Next.js", "React Native", "MongoDB", "PostgreSQL", "Express", "Node.js"],
  },
]

export default function ExperienceSection() {
  const [currentExperience, setCurrentExperience] = useState(0)

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const currentExp = experiences[currentExperience]

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-15 dark:opacity-25">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <FloatingTorus />
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
          className="max-w-6xl mx-auto"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey through the years</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExperience}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="neumorphic-card dark:neumorphic-card-dark p-8 rounded-2xl"
              >
                <motion.div
                  className="inline-flex items-center space-x-2 neumorphic-button dark:neumorphic-button-dark px-4 py-2 rounded-xl mb-6"
                  style={{ color: currentExp.color }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar size={16} />
                  <span className="font-semibold">{currentExp.year}</span>
                </motion.div>

                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">{currentExp.title}</h3>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-6 text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Building size={18} />
                    <span className="font-medium">{currentExp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} />
                    <span>{currentExp.location}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {currentExp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {currentExp.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: currentExp.color + "20",
                            color: currentExp.color,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {currentExp.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: currentExp.color }}
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.3,
                            }}
                          />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <motion.button
                className="neumorphic-button dark:neumorphic-button-dark p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={prevExperience}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="flex space-x-3">
                {experiences.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentExperience ? "scale-125" : "scale-100"
                    }`}
                    style={{
                      backgroundColor: index === currentExperience ? experiences[index].color : "#d1d5db",
                    }}
                    onClick={() => setCurrentExperience(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                className="neumorphic-button dark:neumorphic-button-dark p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={nextExperience}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
