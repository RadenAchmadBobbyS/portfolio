"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Cylinder, MeshDistortMaterial } from "@react-three/drei"
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

function FloatingCylinders() {
  return (
    <>
      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.3}>
        <Cylinder args={[0.3, 0.3, 1, 8]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Cylinder>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.8}>
        <Cylinder args={[0.2, 0.2, 0.6, 6]} position={[2, -1, -2]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0}
            metalness={0.9}
          />
        </Cylinder>
      </Float>

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3b82f6" />
    </>
  )
}

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/bobby-syakir-80a957150/",
    color: "#0077B5",
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/RadenAchmadBobbyS",
    color: "#333333",
    description: "View my code",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:bobbysyakir18@gmail.com",
    color: "#EA4335",
    description: "Send me a message",
  },
]

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      {/* Fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent pointer-events-none" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-15 dark:opacity-25">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <FloatingCylinders />
        </Canvas>
      </div>

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
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Get In Touch</h3>

              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="flex items-center space-x-4 p-6 neumorphic-card dark:neumorphic-card-dark rounded-xl group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="p-4 rounded-xl relative overflow-hidden"
                    style={{ backgroundColor: `${social.color}20` }}
                    whileHover={{
                      backgroundColor: social.color,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <social.icon
                      size={28}
                      className="group-hover:text-white transition-colors relative z-10"
                      style={{ color: social.color }}
                    />
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{social.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{social.description}</p>
                  </div>

                  <motion.div
                    className="flex space-x-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: social.color }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.a>
              ))}

              <motion.div
                className="space-y-4 p-6 neumorphic-inset dark:neumorphic-inset-dark rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                    <MapPin size={24} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Bekasi Selatan, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                    <Phone size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+62 (896) 717-96434</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="h-[500px] neumorphic-inset dark:neumorphic-inset-dark rounded-2xl overflow-hidden flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Mail size={48} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Ready to collaborate?</h3>
                <p className="text-gray-600 dark:text-gray-400">Let's create something amazing together</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
