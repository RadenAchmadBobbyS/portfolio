"use client"

import { motion } from "framer-motion"
import { User, Code2, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { name: "About", icon: User, href: "#about" },
  { name: "Stack", icon: Code2, href: "#stack" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
]

export default function MobileBottomNav() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <div className="glass-morphism rounded-full px-6 py-4 border-border/50 shadow-2xl">
        <div className="flex items-center gap-3">
          {NAV_ITEMS.map((item) => (
            <motion.a key={item.name} href={item.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 hover:text-primary transition-colors relative group"
              >
                <item.icon className="w-5 h-5" />
                <span className="sr-only">{item.name}</span>

                {/* Tooltip on hover */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-mono">
                  {item.name}
                </span>
              </Button>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
