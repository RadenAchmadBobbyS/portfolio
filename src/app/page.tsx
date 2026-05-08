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
            className="font-black text-2xl tracking-tighter bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            R.A.B.S
          </motion.span>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
            {["About", "Stack", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-foreground transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-foreground transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="hidden md:flex rounded-full bg-foreground hover:bg-foreground/90 font-bold px-6"
              asChild
            >
              <a href="/resume.pdf" download>
                RESUME
              </a>
            </Button>
          </div>
        </motion.div>
      </nav>

      <MobileBottomNav />

      <KineticHero />

      <AnimatedAbout />

      <TechStack3DEnhanced />

      <InteractiveProjects />

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-border/30 glass-morphism p-8 md:p-12 text-center space-y-5"
          >
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-foreground/70">Open For Collaboration</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Saya terbuka untuk project apa pun</h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
              Dari landing page, dashboard, company profile, hingga pengembangan fitur baru pada produk existing,
              saya siap bantu dari tahap ide sampai production.
            </p>
            <Button asChild className="rounded-full px-7 font-bold">
              <a href="mailto:bobbysyakir18@gmail.com">Diskusikan Project</a>
            </Button>
          </motion.div>
        </div>
      </section>

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
              <p className="text-sm font-mono text-foreground uppercase tracking-widest">Ready to start a project?</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text text-transparent animate-gradient">
                  Let{"'"}s Create Together
                </span>
              </h2>
              <motion.a
                href="mailto:hello@developer.dev"
                className="inline-block text-2xl md:text-4xl font-medium hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                bobbysyakir18@gmail.com
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center">
            <Button variant="link" size="sm" className="gap-2 text-foreground" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bobbysyakir18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </Button>
            <Button variant="link" size="sm" className="gap-2 text-foreground" asChild>
              <a
                href="https://www.linkedin.com/in/bobby-syakir-80a957150/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="link" size="sm" className="gap-2 text-foreground" asChild>
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
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
