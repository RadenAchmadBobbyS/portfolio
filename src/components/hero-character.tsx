"use client"

import { motion } from "framer-motion"
import { Monitor, Code2, Cpu, Terminal } from "lucide-react"

export default function HeroCharacter() {
  return (
    <>
      <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative z-10 glass-morphism p-12 rounded-[3rem] border-primary/20 flex items-center justify-center"
      >
        <div className="grid grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-6 bg-primary/10 rounded-2xl">
            <Monitor className="w-16 h-16 text-primary" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="p-6 bg-primary/10 rounded-2xl">
            <Terminal className="w-16 h-16 text-primary" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-6 bg-primary/10 rounded-2xl">
            <Code2 className="w-16 h-16 text-primary" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="p-6 bg-primary/10 rounded-2xl">
            <Cpu className="w-16 h-16 text-primary" />
          </motion.div>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0 -m-8 pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 glass-morphism rounded-full flex items-center justify-center border-primary/30">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 w-[60%] h-12 bg-primary/10 blur-2xl rounded-[100%] scale-x-150 opacity-50" />
      </>
  )
}
