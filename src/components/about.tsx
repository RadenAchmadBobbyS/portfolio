"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-blue-900/20 backdrop-blur-sm transform rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/30 transform -rotate-6"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/10">
                <Image
                  src="/bobby.png"
                  alt="Developer Portrait"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
          <div className="flex flex-col items-center text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-indigo-500">
              About Me
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              My Journey & Expertise
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-400 to-blue-700 my-6"></div>
            <p className="max-w-[800px] text-gray-300 md:text-xl leading-relaxed">
              I am a full stack developer. Experienced in building web applications from both the frontend and backend, 
              I am familiar with technologies such as React, Next.js, Node.js, and Express. In addition, I am also
              familiar with the use of databases such as MongoDB and PostgreSQL.
            </p>
            <p className="max-w-[800px] text-gray-300 md:text-xl mt-4 leading-relaxed">
            My main focus is to create responsive, efficient and user-friendly digital solutions. 
            I believe that good web development is not just about code, but also about understanding user needs 
            and creating a delightful experience for them.
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
