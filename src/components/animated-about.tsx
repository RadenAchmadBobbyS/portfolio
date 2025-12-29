"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AnimatedAbout() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  const words =
    "Experienced Software Engineer with 1+ year of experience in designing and developing fullstack web applications. Proficient in modern JavaScript technologies and experienced in building scalable, maintainable systems. Strong collaborator in cross-functional teams, with a passion for continuous learning, problem-solving, and delivering impactful digital solutions".split(
      " ",
    )

  return (
    <section ref={containerRef} id="about" className="relative mt-20 px-6 max-w-7xl mx-auto">
      {/* Decorative line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.div style={{ opacity, scale }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Title */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <div className="text-sm font-mono text-primary uppercase tracking-widest">{"//"} About Me</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experiences</span>
            </h2>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { value: "100%", label: "Passion" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Description with word-by-word reveal */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl leading-relaxed text-foreground/90"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.03,
                }}
                className="inline-block mr-[0.4em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
