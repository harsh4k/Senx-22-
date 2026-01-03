"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { UniversityBadge } from "@/components/university-badge"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingScreen } from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "EDITH",
    description: "Custom-built AI assistant system inspired by futuristic cinematic assistants like JARVIS.",
    longDescription:
      "EDITH.AI is my custom-built AI assistant system that merges functionality with personality. Activated by voice with 'Wake up' and featuring both terminal interface and modern GUI dashboard, it handles file operations, opens applications, manages documents, and provides conversational AI with contextual memory. Built with Python, TailwindCSS, Tkinter, SpeechRecognition, and Pyttsx3, powered by Ollama models. The green-and-white aesthetic reflects a vision of technology as companion rather than tool. Future roadmap includes web integration, mobile version, plugin support, and deeper ecosystem integration. Tagline: 'Wake up, EDITH.'",
    technologies: ["Python", "TailwindCSS", "Tkinter", "SpeechRecognition", "Pyttsx3", "Ollama"],
    status: "completed" as const,
    gradient: "from-green-500 to-white",
    demoUrl: "/projects/edith",
    githubUrl: "https://github.com/yourusername/edith-ai",
  },
  {
    title: "Fishes AI",
    description: "Computer vision system for marine life identification and classification.",
    longDescription:
      "Fishes AI is an experimental assistant system I'm building with Ollama and Python. It's designed to be lightweight yet powerful, handling free-form conversations, file operations, and student-focused utilities. Think of it as a smart companion for learning and productivity, built to explore how AI can simplify everyday tasks while staying fun and approachable.",
    technologies: ["Python", "OpenCV", "PyTorch", "CNN", "Flask"],
    status: "completed" as const,
    gradient: "from-cyan-500 to-blue-600",
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/fishes-ai",
  },
  {
    title: "Rex AI",
    description: "Intelligent recommendation engine for personalized content discovery.",
    longDescription:
      "Rex AI is all about power and speed. Built as a fast, responsive AI system, it focuses on delivering sharp results with minimal friction. Where EDITH is cinematic and Fishes is playful, Rex is direct — a no-nonsense AI engine optimized for efficiency, automation, and decision-making. It's the backbone type of AI: strong, reliable, and fast.",
    technologies: ["Python", "Scikit-learn", "MongoDB", "Redis", "Next.js"],
    status: "in-progress" as const,
    gradient: "from-green-500 to-teal-600",
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/rex-ai",
  },
]

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background text-foreground scroll-smooth">
        {/* Header with Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300">
          <div className="font-orbitron text-lg sm:text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300 cursor-pointer">
            SENX[22]
          </div>
          <Navigation />
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <main className="pt-16 sm:pt-20">
          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] border border-primary/10 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] border border-accent/20 animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>

              {/* Reduced floating elements on mobile */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse hidden sm:block"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 400}ms`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto relative z-10 px-4">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center shadow-2xl shadow-primary/25 transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/40 animate-in zoom-in-50 duration-1000 overflow-hidden">
                  <img
                    src="/images/ava.png"
                    alt="Harshit Chauhan Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div
                  className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full border-2 border-primary/30 animate-spin"
                  style={{ animationDuration: "8s" }}
                ></div>
                <div
                  className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto rounded-full border border-accent/20 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="absolute -inset-2 sm:-inset-4 w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full border border-primary/10 animate-pulse"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-primary px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/5 transition-all duration-500 animate-pulse hover:animate-none cursor-pointer group">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite] group-hover:animate-[shimmer_0.5s_ease-in-out_infinite] [&:not(:hover)]:text-primary">
                      Harshit Chauhan
                    </span>
                  </h1>
                </div>
                <div className="relative">
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-orbitron animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                    LIVE PLAY CODE
                  </p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                </div>
              </div>

              <UniversityBadge />

              <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-700 pb-24">
                <Button
                  size="lg"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="font-orbitron text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/25 relative overflow-hidden group"
                >
                  <span className="relative z-10 text-white dark:text-black">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </div>

              <div
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300 z-20"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                role="button"
                tabIndex={0}
                aria-label="Scroll to about section"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-foreground hover:text-primary transition-colors duration-200" />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 600}ms`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-primary animate-in slide-in-from-bottom-4 duration-700">
                  About Me
                </h2>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-in slide-in-from-bottom-4 duration-700 delay-200"></div>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-400 px-4">
                  Computer Engineering Student • AI Enthusiast • Problem Solver
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                {/* Personal Info & Story */}
                <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left-4 duration-700 delay-600">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                      <h3 className="text-lg sm:text-xl font-orbitron font-semibold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
                        My Journey
                      </h3>
                      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        <p>
                          I'm Harshit, a computer engineering student who values clarity and straightforward thinking. I
                          like working with structure, clean ideas, and practical solutions that actually make sense.
                          For me, learning is about steady growth, not shortcuts.
                        </p>
                        <p>
                          My passion lies in creating AI systems that feel natural and intuitive. From voice-activated
                          assistants to computer vision applications, I'm fascinated by the intersection of human needs
                          and technological possibilities.
                        </p>
                        <p>
                          Outside academics, I enjoy astronomy, gaming, and exploring new perspectives through
                          conversations. I'm curious by nature but grounded in discipline, always moving forward step by
                          step. At the core, I keep things simple and real.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="p-3 sm:p-4 rounded-lg border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-white">🌌</span>
                          </div>
                          <h4 className="font-orbitron font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">
                            Astronomy
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Exploring the cosmos and understanding our place in the universe
                        </p>
                      </div>

                      <div className="p-3 sm:p-4 rounded-lg border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-white">🎮</span>
                          </div>
                          <h4 className="font-orbitron font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">
                            Gaming
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Strategy games and immersive storytelling experiences
                        </p>
                      </div>

                      <div className="p-3 sm:p-4 rounded-lg border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-white">💬</span>
                          </div>
                          <h4 className="font-orbitron font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">
                            Conversations
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Deep discussions about technology, philosophy, and life
                        </p>
                      </div>

                      <div className="p-3 sm:p-4 rounded-lg border border-border/50 bg-background/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-xs font-bold text-white">📚</span>
                          </div>
                          <h4 className="font-orbitron font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">
                            Learning
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Continuous growth through structured, disciplined study
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills & Stats */}
                <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-right-4 duration-700 delay-800">
                  {/* Core Values */}
                  <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl font-orbitron font-semibold text-primary mb-4 sm:mb-6">
                      Core Values
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary animate-pulse"></div>
                        </div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-sm mb-1">Clarity & Structure</h4>
                          <p className="text-xs text-muted-foreground">Clean thinking leads to elegant solutions</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <div
                            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-accent animate-pulse"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-sm mb-1">Steady Growth</h4>
                          <p className="text-xs text-muted-foreground">Progress through discipline, not shortcuts</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <div
                            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-primary animate-pulse"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-sm mb-1">Practical Innovation</h4>
                          <p className="text-xs text-muted-foreground">Technology that serves real human needs</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Focus */}
                  <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl font-orbitron font-semibold text-primary mb-4 sm:mb-6">
                      Current Focus
                    </h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-orbitron">AI & Machine Learning</span>
                          <span className="text-xs text-muted-foreground">90%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-in slide-in-from-left duration-1000 delay-1000"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-orbitron">Full-Stack Development</span>
                          <span className="text-xs text-muted-foreground">85%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-in slide-in-from-left duration-1000 delay-1200"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-orbitron">Computer Vision</span>
                          <span className="text-xs text-muted-foreground">80%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-in slide-in-from-left duration-1000 delay-1400"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-orbitron">System Architecture</span>
                          <span className="text-xs text-muted-foreground">75%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-in slide-in-from-left duration-1000 delay-1600"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fun Facts */}
                  <div className="p-4 sm:p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                    <h3 className="text-lg sm:text-xl font-orbitron font-semibold text-primary mb-4 sm:mb-6">
                      Fun Facts
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                      <div className="p-3 sm:p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors duration-300">
                        <div className="text-xl sm:text-2xl font-orbitron font-bold text-primary mb-1">3+</div>
                        <div className="text-xs text-muted-foreground">AI Projects</div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors duration-300">
                        <div className="text-xl sm:text-2xl font-orbitron font-bold text-primary mb-1">∞</div>
                        <div className="text-xs text-muted-foreground">Coffee Cups</div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors duration-300">
                        <div className="text-xl sm:text-2xl font-orbitron font-bold text-primary mb-1">24/7</div>
                        <div className="text-xs text-muted-foreground">Learning Mode</div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg bg-muted/20 hover:bg-primary/10 transition-colors duration-300">
                        <div className="text-xl sm:text-2xl font-orbitron font-bold text-primary mb-1">🚀</div>
                        <div className="text-xs text-muted-foreground">Future Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy Quote */}
              <div className="mt-12 sm:mt-16 text-center animate-in slide-in-from-bottom-4 duration-700 delay-1800">
                <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-lg border border-border/50 bg-background/30 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse"></div>
                  <div className="relative z-10">
                    <blockquote className="text-base sm:text-lg md:text-xl font-orbitron text-primary mb-3 sm:mb-4 italic">
                      "Technology should amplify human potential, not replace human connection."
                    </blockquote>
                    <p className="text-sm text-muted-foreground">— My approach to AI development</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-primary">
                  Featured Projects
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                  Innovative solutions at the intersection of AI, web development, and cybersecurity
                </p>
                <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className="animate-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 sm:mt-12">
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-orbitron bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 text-sm sm:text-base px-6 sm:px-8"
                  >
                    View All Projects
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <div id="skills">
            <SkillsSection />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <ContactSection />
          </div>
        </main>

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Footer */}
        <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center space-y-3 sm:space-y-4">
            <div className="font-orbitron text-base sm:text-lg font-bold text-primary">SENX[22]</div>
            <p className="text-xs sm:text-sm text-muted-foreground font-orbitron px-4">
              © 2025 SENX[22] Portfolio • Mumbai, India • Built with Next.js, Tailwind CSS, and lots of ☕
            </p>
            <div className="flex justify-center gap-2 sm:gap-4">
              <Button variant="ghost" size="sm" className="font-orbitron hover:text-primary text-xs sm:text-sm">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="font-orbitron hover:text-primary text-xs sm:text-sm">
                Terms of Service
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
