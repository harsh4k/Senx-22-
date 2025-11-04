"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { ProjectCard } from "@/components/project-card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Filter, Search } from "lucide-react"
import { useState } from "react"
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
    githubUrl: "#",
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
    githubUrl: "#",
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
  },
  {
    title: "ENESCOPE",
    description: "Energy monitoring and optimization platform for sustainable smart homes.",
    longDescription:
      "ENESCOPE is an innovative IoT platform designed for real-time energy monitoring and optimization. It provides smart analytics, predictive insights, and automated controls for sustainable home management. Built with Node.js, Next.js, and MongoDB, it integrates IoT sensors for real-time data collection, offers visual dashboards for energy consumption patterns, and enables users to optimize their energy usage while reducing carbon footprint.",
    technologies: ["Next.js", "Node.js", "MongoDB", "IoT", "React", "TailwindCSS"],
    status: "in-progress" as const,
    gradient: "from-yellow-500 to-orange-600",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NeuroFlow",
    description: "Neural network visualization and training platform for machine learning.",
    longDescription:
      "NeuroFlow is an interactive platform for building, visualizing, and training neural networks. It provides an intuitive interface for designing complex architectures, real-time visualization of training processes, and comprehensive analytics. Perfect for both beginners learning ML concepts and researchers prototyping advanced models. Features drag-and-drop layer building, live training metrics, and export capabilities.",
    technologies: ["TensorFlow", "Python", "React", "D3.js", "FastAPI"],
    status: "completed" as const,
    gradient: "from-purple-500 to-pink-600",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Sentinel",
    description: "Real-time cybersecurity threat detection and response system.",
    longDescription:
      "Sentinel is a sophisticated threat detection system that uses machine learning to identify and respond to security anomalies in real-time. It monitors network traffic, analyzes patterns, and provides automated incident response recommendations. Built with Python, Kafka, and Elasticsearch, it helps organizations stay ahead of evolving cybersecurity threats with minimal latency.",
    technologies: ["Python", "Kafka", "Elasticsearch", "Machine Learning", "AWS"],
    status: "in-progress" as const,
    gradient: "from-red-500 to-rose-600",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DataHarvest",
    description: "Intelligent data pipeline and ETL orchestration system.",
    longDescription:
      "DataHarvest is a powerful ETL platform designed for seamless data integration across multiple sources. It features workflow automation, data transformation, quality assurance, and real-time monitoring. Built with Python, Airflow, and PostgreSQL, it enables data teams to build robust, scalable data pipelines with minimal code while maintaining data integrity and quality standards.",
    technologies: ["Python", "Airflow", "PostgreSQL", "Pandas", "Docker"],
    status: "completed" as const,
    gradient: "from-blue-500 to-indigo-600",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const statusFilters = ["all", "completed", "in-progress", "concept"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-background/80 backdrop-blur-sm border-b border-border/50 transition-all duration-300">
        <Link
          href="/"
          className="font-orbitron text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          SEN[22]
        </Link>
        <Navigation />
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm" className="font-orbitron hover:text-primary">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center mb-16 space-y-6">
              <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-primary animate-in slide-in-from-bottom-4 duration-700">
                My Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-200">
                A comprehensive showcase of my work in AI, web development, and innovative technology solutions. Each
                project represents a journey of learning, experimentation, and pushing the boundaries of what's
                possible.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-in slide-in-from-bottom-4 duration-700 delay-400"></div>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 animate-in slide-in-from-bottom-4 duration-700 delay-600">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-orbitron text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 bg-background border border-border rounded-lg font-orbitron text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                >
                  {statusFilters.map((status) => (
                    <option key={status} value={status}>
                      {status === "all" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Projects Carousel */}
            <div
              className="flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
              role="region"
              aria-label="Projects carousel"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 w-full md:w-96 animate-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                  role="group"
                  aria-label={`Project ${index + 1} of ${filteredProjects.length}`}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-muted-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  )
}
