"use client"
import ErrorBackground from "@/components/error-background"
import KineticHero from "@/components/kinetic-hero"
import AnimatedAbout from "@/components/animated-about"
import TechStack3DEnhanced from "@/components/tech-stack-3d-enhanced"
import InteractiveProjects from "@/components/interactive-projects"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail} from "lucide-react"
import { motion } from "framer-motion"
import MobileBottomNav from "@/components/mobile-bottom-nav"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ErrorBackground />

      <nav className="fixed top-0 z-50 w-full px-6 py-8">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex justify-between items-center glass-morphism rounded-full px-8 py-5 border-border/50 shadow-2xl"
        >
          <motion.span
            className="font-black text-2xl tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            BOBBY.DEV
          </motion.span>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
            {["About", "Stack", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button size="sm" className="hidden md:flex rounded-full bg-primary hover:bg-primary/90 font-bold px-6">
              RESUME
            </Button>
          </div>
        </motion.div>
      </nav>

      <MobileBottomNav />

      <KineticHero />

      <AnimatedAbout />

      <TechStack3DEnhanced />

      <InteractiveProjects />

      <footer id="contact" className="relative py-10 mt-10 border-t border-border/20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-mono text-primary uppercase tracking-widest">Ready to start a project?</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Let{"'"}s Create Together
                </span>
              </h2>
              <motion.a
                href="mailto:hello@developer.dev"
                className="inline-block text-2xl md:text-4xl font-medium hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                bobbysyakir18@gmail.com
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center">
            <Button variant="link" size="sm" className="gap-2" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bobbysyakir18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </Button>
            <Button variant="link" size="sm" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/bobby-syakir-80a957150/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="link" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com/RadenAchmadBobbyS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </Button>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-12 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono"
          >
            <span>© 2025 BOBBY.DEV. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
