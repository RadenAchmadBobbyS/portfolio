"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  gallery: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Hermes E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, cart functionality, and payment integration.",
      image: "/hermes-2.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "https://demo.example.com",
      gallery: [
        "/hermes-6.png",       
        "/hermes-3.png",       
        "/hermes-4.png",
      ],
    },
    {
      id: 2,
      title: "Backpain Quizezz App",
      description:
        "A collaborative Quiz application with real-time updates. Built with React, Express, and Socket.io for real-time user.",
      image: "/quizez-4.png",
      tags: ["React", "Express", "Socket.io", "PostgreSQL", "Gemini AI"],
      gallery: [
        "/quizez-1.png",
        "/quizez-2.png",
        "/quizez-6.png",
      ],
    },
    {
      id: 3,
      title: "Books Library with Gemini AI",
      description:
        "Books Library with Gemini AI is a modern web-based library application that allows users to explore. The app integrates Gemini AI as a virtual assistant through a chatbot feature, offering a more personalized and efficient user experience.",
      image: "/Mybooks-project-1.png",
      tags: ["Express", "Sequelize", "Node.js", "REST API", "Gemini AI", "Midtrans", "React"],
      liveUrl: "https://boilerplate.example.com",
      gallery: [
        "/Mybooks-project-2.png",
        "/Mybooks-project-3.png",
        "/Mybooks-project-4.png",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20  text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-indigo-400">Project</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onImageClick={(image) => setEnlargedImage(image)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {enlargedImage && <EnlargedImageModal image={enlargedImage} onClose={() => setEnlargedImage(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden cursor-pointer group">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-medium">View Details</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  )
}

function ProjectModal({
  project,
  onClose,
  onImageClick,
}: {
  project: Project
  onClose: () => void
  onImageClick: (image: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900/90 backdrop-blur-md p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="overflow-hidden cursor-pointer" onClick={() => onImageClick(project.image)}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full aspect-video hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-2 text-indigo-400">Description</h4>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <h4 className="text-lg font-medium mb-2 text-indigo-400">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <Button
                variant="outline"
                className="border-indigo-500/30 text-gray-300 hover:text-white hover:indigo-purple-500 flex items-center gap-2"
                asChild
              >
              </Button>
              {project.liveUrl && (
                <Button
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white flex items-center gap-2"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <h4 className="text-lg font-medium mb-4 text-indigo-400">Gallery</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden aspect-video cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} screenshot ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function EnlargedImageModal({ image, onClose }: { image: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4  backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-[90vw] max-h-[90vh]"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-2 right-2 text-white z-10"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        <Image
          src={image || "/placeholder.svg"}
          alt="Enlarged view"
          width={1200}
          height={800}
          className="max-h-[90vh] w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  )
}
