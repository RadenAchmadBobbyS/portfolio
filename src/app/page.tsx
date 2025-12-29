'use client';
import Image from 'next/image';
import TechStackIcons from '@/components/tech-stack-icons';
import ErrorBackground from '@/components/error-background';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroCharacter from '@/components/hero-character';
import { projects } from '@/lib/project';

export default function PortfolioPage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const getTranslateValue = () => {
    if (itemsToShow === 1) {
      return projectIndex * 100
    } else {
      return projectIndex * 50
    }
  }
  return (
    <main className="relative min-h-screen">
      <ErrorBackground />
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass-morphism rounded-full px-6 py-3">
          <span className="font-bold text-xl tracking-tighter">
            RADEN ACHMAD B. SYAKIR
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#tech" className="hover:text-primary transition-colors">
              Stack
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button size="sm" className="rounded-full">
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-30 mx-auto flex flex-col items-center text-center">
        <div className="space-y-8 max-w-4xl mx-auto px-3 sm:px-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
            {'#'} Full Stack Web Developer
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight sm:leading-[1.05]">
            Hi!
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight sm:leading-[1.05] -mt-7">
            I{"'"}m Bobby{' '}
            <p className="md:text-6xl sm:text-5xl text-2xl  text-nowrap">Lets Build Impactful</p>
            <p className="font-extrabold font-mono">Products{','}Together</p>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with a love for clean code,
            teamwork, and creative problem solving. I help companies turn ideas
            into reliable, scalable, and beautiful digital solutions. Ready to
            bring energy and expertise to your next project or team!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full gap-2">
              View Projects <ExternalLink className="w-4 h-4" />
            </Button>
            <div className="flex gap-2 z-10">
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
        </div>

        <div className="mt-10 w-full flex justify-center">
          <HeroCharacter />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-5 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            <span className='font-extrabold'>Experienced Software Engineer</span> with 1+ year of experience in
            designing and developing fullstack web applications. Proficient in
            modern JavaScript technologies and experienced in building scalable,
            maintainable systems. Strong collaborator in cross-functional teams,
            with a passion for continuous learning, problem-solving, and
            delivering impactful digital solutions
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="mt-15 px-6 max-w-7xl mx-auto border-t border-border/20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-mono text-primary font-bold opacity-80 uppercase tracking-widest mb-1">
              // Core Tech Stack
            </h3>
            <h2 className="text-3xl font-bold mb-4">
              Mastering the modern web tools.
            </h2>
            <p className="text-muted-foreground text-nowrap">
              A collection of technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="lg:col-span-2">
            <TechStackIcons />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Selected Projects</h2>
            <p className="text-muted-foreground">Recent work and experimental builds.</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full glass bg-transparent"
              onClick={() => setProjectIndex((prev) => Math.max(0, prev - 1))}
              disabled={projectIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full glass bg-transparent"
              onClick={() => setProjectIndex((prev) => Math.min(projects.length - itemsToShow, prev + 1))}
              disabled={projectIndex >= projects.length - itemsToShow}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${getTranslateValue()}% - ${projectIndex * (itemsToShow === 2 ? 0.75 : 0)}rem))`,
            }}
          >
            {projects.map((project, i) => (
              <Card
                key={i}
                className="shrink-0 w-full md:w-[calc(50%-0.75rem)] group relative overflow-hidden glass-morphism border-0 h-112 md:h-125"
              >
                <div className="absolute inset-0">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.projectName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 space-y-3 md:space-y-4 w-full text-left">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold">{project.projectName}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm font-mono">{project.techStack}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full glass shrink-0">
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </Button>
                  </div>
                  <p className="text-xs md:text-sm line-clamp-2 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm md:text-2xl sm:text-xl font-mono text-muted-foreground">
              Ready to start a project?
            </p>
            <h2 className="text-xl md:text-4xl sm:text-2xl font-bold">
              rabsyakirjs@students.hacktiv8.ac.id
            </h2>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rabsyakirjs@students.hacktiv8.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/bobby-syakir-80a957150/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://github.com/RadenAchmadBobbyS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
