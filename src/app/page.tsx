"use client"

import { useEffect } from "react"
import Sidebar from "@/components/Sidebar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TechStackSection from "@/components/TechStackSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import ThemeProvider from "@/components/ThemeProvider"
import Footer from "@/components/Footer"

export default function Portfolio() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth"
    }
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 relative overflow-x-hidden transition-colors duration-500">
        <Sidebar />

        <main className="ml-0 md:ml-20 transition-all duration-300">
          <section id="hero">
            <HeroSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <section id="tech">
            <TechStackSection />
          </section>

          <section id="experience">
            <ExperienceSection />
          </section>

          <section id="projects">
            <ProjectsSection />
          </section>

          <section id="contact">
            <ContactSection />
          </section>

          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}
