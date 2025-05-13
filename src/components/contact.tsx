"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, Copy, CheckCircle, Instagram } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-indigo-400" />,
      title: "Email",
      value: "bobbysyakir18@gmail.com",
      action: "Copy Email",
      href: "mailto:bobbysyakir18@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-indigo-400" />,
      title: "Location",
      value: "Bekasi, Indonesia",
      action: "View on Map",
      href: "https://maps.google.com/?q=Bekasi,Indonesia",
    },
    {
      icon: <Phone className="h-6 w-6 text-indigo-400" />,
      title: "Phone",
      value: "+62 896-7179-6434",
      action: "Copy Number",
      href: "tel:+6289671796434",
    },
  ]

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com/RadenAchmadBobbyS", color: "from-indigo-500 to-blue-500" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/bobby-syakir-80a957150/", color: "from-blue-500 to-indigo-500" },
    { icon: <Instagram className="h-6 w-6" />, label: "Instagram", href: "https://www.instagram.com/radenabobby/", color: "from-indigo-400 to-blue-600" },
  ]

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]"></div>

        {/* Animated stars */}
        <div className="stars-small opacity-30"></div>
        <div className="stars-medium opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm font-medium text-indigo-400">
            Let&apos;s Connect
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>

          <div className="relative h-1 w-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-[2px] opacity-70"></div>
          </div>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I&apos;m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="h-6 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 rounded-full"></div>
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start p-4 rounded-xl bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300 border border-transparent hover:border-indigo-500/20">
                      <div className="bg-indigo-500/20 p-3 rounded-lg mr-4 group-hover:bg-indigo-500/30 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-indigo-400 mb-1">{item.title}</h4>
                        <p className="text-gray-300 mb-3">{item.value}</p>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-indigo-500/30 text-indigo-400 hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/50"
                            onClick={() => copyToClipboard(item.value, item.title)}
                          >
                            {copied === item.title ? (
                              <>
                                <CheckCircle className="mr-1 h-3.5 w-3.5" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="mr-1 h-3.5 w-3.5" />
                                {item.action}
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="h-6 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 rounded-full"></div>
                Follow Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="group flex flex-col items-center justify-center p-6 rounded-xl bg-indigo-500/5 hover:bg-indigo-500/10 transition-all duration-300 border border-transparent hover:border-indigo-500/20"
                    aria-label={social.label}
                  >
                    <div className="relative mb-3">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-100 blur-[10px] transition-opacity duration-300`}
                      ></div>
                      <div className="relative bg-indigo-500/20 p-4 rounded-full group-hover:bg-indigo-500/30 transition-colors duration-300">
                        {social.icon}
                      </div>
                    </div>
                    <span className="text-indigo-400 font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="h-6 w-1 bg-gradient-to-b from-indigo-400 to-blue-500 rounded-full"></div>
                Send Me a Message
              </h3>

              <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-40 blur-[10px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mail className="h-16 w-16 text-indigo-400" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3">Ready to Start a Project?</h4>
                <p className="text-gray-300 mb-8 max-w-md">
                  I&apos;m excited to hear about your ideas! Whether you have a specific project in mind or just want to
                  explore possibilities, I&apos;m here to help bring your vision to life.
                </p>

                <div className="space-y-4 w-full max-w-md">
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 h-12 text-base"
                    asChild
                  >
                    <a href="mailto:bobbysyakir18@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Me Directly
                    </a>
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-700"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-black px-2 text-gray-500">or connect via</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="border-indigo-500/30 text-indigo-400 hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/50"
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          {social.icon}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated stars effect */}
      <style jsx>{`
        .stars-small, .stars-medium {
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
        
        @keyframes stars-move-medium {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </section>
  )
}
