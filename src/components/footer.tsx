"use client"

import { motion } from "framer-motion"
import { Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-gradient-to-t from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                John Doe
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Full Stack Developer passionate about creating beautiful and functional digital experiences.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Projects", "Experience", "Contact"].map((link, index) => (
                  <motion.button
                    key={link}
                    className="block mx-auto text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase())
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Let's Connect</h4>
              <div className="space-y-2">
                <motion.p className="text-gray-600 dark:text-gray-400" whileHover={{ scale: 1.05 }}>
                  hello@johndoe.dev
                </motion.p>
                <motion.p className="text-gray-600 dark:text-gray-400" whileHover={{ scale: 1.05 }}>
                  San Francisco, CA
                </motion.p>
                <motion.p className="text-gray-600 dark:text-gray-400" whileHover={{ scale: 1.05 }}>
                  +1 (555) 123-4567
                </motion.p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  color: ["#ef4444", "#ff6b6b", "#ef4444"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Heart size={20} fill="currentColor" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Code size={20} />
              </motion.div>
              <span>and lots of</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Coffee size={20} />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-gray-500 dark:text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              © {currentYear} John Doe. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
