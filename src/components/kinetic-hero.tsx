"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MailQuestion } from "lucide-react"
import { useRef } from "react"
import HeroCharacter from "./hero-character"

export default function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  return (
    <div
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden mt-20 px-2 sm:px-4 md:px-8"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      />

      <motion.div className="relative z-10 space-y-8 mt-10 sm:space-y-10 md:space-y-12 max-w-7xl mx-auto px-2 sm:px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div className="px-5 py-2.5 text-nowrap text-xs rounded-full glass-morphism text-primary font-mono inline-flex items-center gap-2 border border-primary/30">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
            Full Stack Developer {"/"} Software Engineer
          </div>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tight sm:tracking-tighter leading-[1.1] sm:leading-[0.9] text-balance break-words"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi!
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient italic"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I{"'"}m Bobby{' '}
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] tracking-normal from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Lets Build Impactful 
              <p className="text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold font-mono">Products{','}Together</p>
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-4"
        >
          I{"'"}m a Full Stack Developer dedicated to building immersive web experiences that push the boundaries of design
          and technology.
        </motion.p>

        {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="link" size="sm" className="gap-2 z-10" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bobbysyakir18@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full z-10 glass bg-transparent border border-border p-2 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <MailQuestion className="w-4 h-4" /> Email
              </a>
            </Button>
            <div className="flex gap-2 z-10 flex-wrap">
              <a
                href="https://github.com/RadenAchmadBobbyS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full glass bg-transparent border border-border p-2 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bobby-syakir-80a957150/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full glass bg-transparent border border-border p-2 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-5 flex justify-center w-full max-w-full"
        >
          <HeroCharacter />
        </motion.div>
      </motion.div>

    </div>
  )
}