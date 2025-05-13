"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const experiences = [
  {
    title: "Freelance web developer",
    company: "Techdev",
    period: "2022 - Present",
    description:
      "As a freelance web developer, I designed and developed landing pages for various clients, focusing on creating clean, responsive, and visually appealing profiles. I worked closely with clients to understand their brand identity and goals, ensuring the landing page effectively communicated their message and captured leads. I handled everything from the initial design phase to development, utilizing HTML, CSS, JavaScript, and frameworks like React to ensure optimal performance across all devices.",
    skills: ["React", "HTML", "CSS", "Javascript"],
  },
  {
    title: "video editor",
    company: "Getol Mancing Channel",
    period: "2020 - 2023",
    description:
      "As a YouTube video editor, I&apos;ve worked on editing various types of content, including vlogs, tutorials, and reviews. My responsibilities included cutting raw footage, enhancing video quality with transitions, effects, and music, and ensuring the final product aligns with the channel's tone and branding. I also focused on optimizing video length and pacing to engage viewers effectively and improve audience retention",
    skills: ["Adobe Premiere", "Editing", "Canva", "Filmora"],
  },
  {
    title: "Staff Administration",
    company: "Bangun Persada Vocational High School",
    period: "2017 - 2017",
    description:
      "An admin staff is responsible for managing and overseeing the daily administrative tasks within an organization. This role typically includes handling correspondence, maintaining records, organizing schedules, managing databases, assisting with operational tasks, and ensuring smooth communication between different departments. Admin staff play a crucial role in supporting the efficiency and effectiveness of an organization&apos;s operations..",
    skills: ["Exel", "Word"],
  },
  {
    title: "IT Support",
    company: "Badan Pemeriksa Keuangan RI",
    period: "2015 - 2015",
    description:
      "An IT Support Intern assists with troubleshooting technical issues, maintaining systems, and providing support to users to ensure smooth operation of IT services.",
    skills: ["Exel", "Word"],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Space background elements */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            My Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-700 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-500 to-indigo-600 transform md:translate-x-px"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "left-0 md:right-0 md:translate-x-1/2" : "left-0 md:left-0 md:-translate-x-1/2"
                } w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transform md:translate-y-1.5 z-10`}
              >
                <div className="absolute inset-0.5 rounded-full bg-black"></div>
              </div>

              {/* Content card */}
              <div className="ml-8 md:ml-0 p-6 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
                <div className="mb-1 text-purple-300 font-medium">{exp.period}</div>
                <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
                <div className="text-blue-300 mb-3">{exp.company}</div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
