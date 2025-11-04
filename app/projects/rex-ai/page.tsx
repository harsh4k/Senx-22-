"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Zap, Database, Cpu, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RexAIDetailsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-orbitron">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent">
              Rex AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">"Power, Speed, Precision"</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="font-orbitron bg-transparent">
                <Github className="w-5 h-5 mr-2" />
                View Code
              </Button>
              <Button size="lg" className="font-orbitron !text-white dark:!text-black">
                <ExternalLink className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {/* Overview */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">What is Rex AI?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Rex AI is all about power and speed. Built as a fast, responsive AI system, it focuses on delivering
                sharp results with minimal friction. Where EDITH is cinematic and Fishes is playful, Rex is direct — a
                no-nonsense AI engine optimized for efficiency, automation, and decision-making.
              </p>
              <p className="text-lg leading-relaxed">
                It's the backbone type of AI: strong, reliable, and fast. Rex AI serves as an intelligent recommendation
                engine for personalized content discovery, leveraging advanced machine learning algorithms to understand
                user preferences and deliver precisely what they need, when they need it.
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Zap className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Lightning Speed</h3>
                  <p>
                    Optimized algorithms and efficient data structures ensure sub-second response times for even complex
                    recommendation queries and decision-making processes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Database className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Smart Data Processing</h3>
                  <p>
                    Advanced data mining and pattern recognition capabilities that learn from user behavior to
                    continuously improve recommendation accuracy.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Cpu className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Automated Decision Making</h3>
                  <p>
                    Intelligent automation that handles complex decision trees and workflow optimization without human
                    intervention, streamlining processes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Target className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Precision Targeting</h3>
                  <p>
                    Highly accurate content matching and personalization algorithms that deliver exactly what users need
                    based on their preferences and behavior patterns.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Design Philosophy</h2>
              <p className="text-lg leading-relaxed mb-4">
                Rex AI embodies the principle of "form follows function." Every aspect of the system is designed for
                maximum efficiency and minimal overhead. The green-to-teal gradient reflects growth and reliability,
                while the clean interface ensures users can focus on results rather than navigation.
              </p>
              <p className="text-lg leading-relaxed">
                The philosophy is simple: deliver powerful AI capabilities without the complexity. Rex AI is built for
                users who need results fast and don't want to wade through unnecessary features or complicated
                interfaces.
              </p>
            </div>

            {/* Technical Stack */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-lg leading-relaxed mb-6">
                Rex AI is built on a robust, scalable architecture designed for high-performance computing:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">Scikit-learn & Python</span>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">MongoDB & Redis</span>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">Next.js Frontend</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                The system leverages distributed computing principles and advanced caching strategies to maintain peak
                performance even under heavy load, making it suitable for enterprise-level applications.
              </p>
            </div>

            {/* Current Status */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Development Status</h2>
              <div className="p-6 border border-amber-500/20 bg-amber-500/5 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="font-orbitron font-semibold text-amber-500">In Progress</span>
                </div>
                <p className="text-lg leading-relaxed">
                  Rex AI is currently in active development, with core recommendation algorithms implemented and
                  undergoing optimization. The system architecture is complete, and I'm focusing on performance tuning
                  and advanced feature implementation.
                </p>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Core recommendation engine - <strong>Completed</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Database optimization and caching - <strong>Completed</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Advanced ML algorithms - <strong>In Progress</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Frontend dashboard - <strong>Planned</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Future Roadmap */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Future Roadmap</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Real-time learning and adaptation capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Multi-modal recommendation support (text, images, audio)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>API integration for third-party applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Advanced analytics and performance monitoring dashboard</span>
                </li>
              </ul>
            </div>

            {/* Personal Motivation */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Why I Built Rex AI</h2>
              <p className="text-lg leading-relaxed mb-4">
                Rex AI represents my exploration into the backbone systems that power modern digital experiences. While
                my other projects focus on user interaction and accessibility, Rex AI dives deep into the engine room of
                AI - the algorithms and architectures that make intelligent systems possible.
              </p>
              <p className="text-lg leading-relaxed">
                This project challenges me to think about scalability, performance, and efficiency at a fundamental
                level. It's about building the kind of robust, reliable AI infrastructure that can serve as the
                foundation for larger, more complex systems in the future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
