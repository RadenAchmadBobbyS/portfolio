"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei"

function FloatingElements() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-2, 1, 0]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0}
            metalness={0.8}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Sphere args={[0.3, 24, 24]} position={[2, -1, -1]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <Sphere args={[0.2, 16, 16]} position={[0, 2, -2]}>
          <MeshDistortMaterial color="#ef4444" attach="material" distort={0.5} speed={4} roughness={0} metalness={1} />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <FloatingElements />
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
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="neumorphic-card dark:neumorphic-card-dark p-8 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -3 }}
            >
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                <p>
                  I'm Bobby Syakir, a Full Stack Web Developer with a strong background in JavaScript technologies such as React, Next.js, Node.js, and Express. I enjoy turning ideas into responsive and scalable web applications. My experience also includes working with PostgreSQL and MongoDB for robust data management. I strive to write clean, efficient, and maintainable code.
                </p>
                <p>
                  Over the past few years, I've built various projects — from real-time quiz games and e-commerce platforms to productivity tools and community-based apps. I love combining frontend and backend logic to create seamless user experiences. Problem-solving and innovation are at the heart of my workflow. I'm always exploring new tools and best practices to improve my craft.
                </p>
                <p>
                  Outside of coding, I enjoy learning about UI/UX design, experimenting with AI tools, and working on creative tech ideas. I believe great products come from empathy, collaboration, and continuous learning. I'm open to freelance opportunities, team collaborations, or full-time roles. Let's connect and build something impactful together.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { number: "5+", label: "Years Experience", color: "#3b82f6" },
                { number: "50+", label: "Projects Completed", color: "#8b5cf6" },
                { number: "20+", label: "Happy Clients", color: "#ef4444" },
                { number: "100%", label: "Satisfaction Rate", color: "#10b981" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="neumorphic-card dark:neumorphic-card-dark p-6 rounded-xl group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -3 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="text-4xl font-bold"
                      style={{ color: stat.color }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
                    <motion.div
                      className="w-3 h-3 rounded-full ml-auto"
                      style={{ backgroundColor: stat.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.1,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
