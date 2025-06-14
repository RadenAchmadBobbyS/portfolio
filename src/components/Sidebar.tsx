"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Briefcase, FolderOpen, Mail, Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { useTheme } from "./ThemeProvider"

const menuItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "tech", icon: Code, label: "Tech" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  const checkMobile = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [mounted, checkMobile])

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return

    const sections = menuItems.map((item) => item.id)
    const scrollPosition = window.scrollY + 100

    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const { offsetTop, offsetHeight } = element
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted, handleScroll])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      if (isMobile) {
        setIsOpen(false)
      }
    },
    [isMobile],
  )

  if (!mounted) return null

  if (isMobile) {
    return (
      <>
        <motion.button
          className="fixed top-4 left-4 z-50 p-3 neumorphic-button dark:neumorphic-button-dark "
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.nav
                className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 z-40 neumorphic-inset dark:neumorphic-inset-dark p-6 transition-colors duration-500"
                initial={{ x: -256 }}
                animate={{ x: 0 }}
                exit={{ x: -256 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="mt-16 space-y-4">
                  <motion.button
                    className="w-full p-3 neumorphic-button dark:neumorphic-button-dark rounded-xl mb-6 flex items-center justify-center"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.5 }}>
                      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.div>
                  </motion.button>

                  {menuItems.map((item) => (
                    <motion.button
                      key={item.id}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${
                        activeSection === item.id
                          ? "neumorphic-pressed dark:neumorphic-pressed-dark text-blue-600 dark:text-blue-400"
                          : "neumorphic-button dark:neumorphic-button-dark hover:text-blue-500"
                      }`}
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <motion.nav
      className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 neumorphic-inset dark:neumorphic-inset-dark z-30 flex flex-col items-center py-8 transition-colors duration-500"
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.button
        className="p-3 neumorphic-button dark:neumorphic-button-dark rounded-xl mb-8"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      <div className="space-y-6 flex-1">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.button
              className={`p-3 rounded-xl transition-all relative ${
                activeSection === item.id
                  ? "neumorphic-pressed dark:neumorphic-pressed-dark text-blue-600 dark:text-blue-400"
                  : "neumorphic-button dark:neumorphic-button-dark hover:text-blue-500"
              }`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={activeSection === item.id ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <item.icon size={24} />
              </motion.div>
            </motion.button>

            <motion.div
              className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {item.label}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}
