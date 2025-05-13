"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Star, Moon, Rocket, Code, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active link based on scroll position
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop - 100
        const sectionHeight = sectionElement.offsetHeight
        const sectionId = sectionElement.getAttribute("id") || ""

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "Home", href: "#home", icon: <Rocket size={14} className="inline-block" /> },
    { name: "About", href: "#about", icon: <Moon size={14} className="inline-block" /> },
    { name: "Skills", href: "#skills", icon: <Star size={14} className="inline-block" /> },
    { name: "Projects", href: "#projects", icon: <Code size={14} className="inline-block" /> },
  ]

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/30 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent"
      }`}
    >
      {/* Glass effect overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-indigo-950/10 via-black/10 to-indigo-950/10 opacity-0 transition-opacity duration-500 ${scrolled ? "opacity-100" : ""}`}
      ></div>

      <div className="container mx-auto px-4 py-4 relative">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-blue-700  to-indigo-500 rounded-full opacity-75 group-hover:opacity-100 blur-[2px] group-hover:blur-[3px] transition-all duration-300"></div>
              <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
                Raden
              </span>
              <span className="text-white">Achmad</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative flex items-center bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href.substring(1))}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    activeLink === link.href.substring(1) ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeLink === link.href.substring(1) && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-indigo-500/20 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.icon}
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="#contact"
              className="ml-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-900 to-blue-600 rounded-full text-white hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 flex items-center gap-1.5"
            >
              <Send size={14} />
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-indigo-500/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-indigo-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-indigo-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md rounded-b-xl overflow-hidden z-50"
            >
              <div className="flex flex-col space-y-1 p-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeLink === link.href.substring(1)
                          ? "bg-gradient-to-r from-indigo-900/30 via-indigo-900/40 to-blue-900/30 text-white"
                          : "text-gray-400 hover:text-white hover:bg-indigo-900/10"
                      }`}
                      onClick={() => {
                        setActiveLink(link.href.substring(1))
                        setIsMenuOpen(false)
                      }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-900/30 via-blue-900/40 to-indigo-900/30 flex items-center justify-center">
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`stars-small transition-opacity duration-1000 ${scrolled ? "opacity-40" : "opacity-0"}`}></div>
        <div className={`stars-medium transition-opacity duration-1000 ${scrolled ? "opacity-40" : "opacity-0"}`}></div>
        <div className={`stars-large transition-opacity duration-1000 ${scrolled ? "opacity-40" : "opacity-0"}`}></div>
      </div>

      <style jsx>{`
        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
          background-image: 
            radial-gradient(1px 1px at 25px 5px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));
        }
        
        .stars-medium {
          background-image: 
            radial-gradient(1px 1px at 75px 125px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1px 1px at 100px 75px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 199px 100px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 20px 50px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 100px 5px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 5px 5px, white, rgba(255, 255, 255, 0));
          animation: stars-move-medium 150s linear infinite;
        }
        
        .stars-large {
          background-image: 
            radial-gradient(1px 1px at 10px 10px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1px 1px at 150px 150px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 60px 170px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 175px 180px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 195px 95px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 95px 145px, white, rgba(255, 255, 255, 0));
          animation: stars-move-large 200s linear infinite;
        }
        
        @keyframes stars-move-medium {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
        
        @keyframes stars-move-large {
          from { transform: translateY(0px); }
          to { transform: translateY(-1000px); }
        }
      `}</style>
    </header>
  )
}
