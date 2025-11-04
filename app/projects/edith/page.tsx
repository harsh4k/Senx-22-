"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Mic, Brain, Settings, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EdithDetailsPage() {
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
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent">
              EDITH.AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">"Wake up, EDITH."</p>
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
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">What is EDITH.AI?</h2>
              <p className="text-lg leading-relaxed mb-6">
                EDITH.AI is my custom-built AI assistant system designed to be the ultimate personal companion for
                productivity and system management. Inspired by JARVIS from the Marvel universe, EDITH represents my
                vision of what a truly intelligent, voice-activated assistant should be.
              </p>
              <p className="text-lg leading-relaxed">
                Unlike generic AI assistants, EDITH is tailored specifically to my workflow and preferences, offering a
                level of personalization and control that commercial alternatives simply can't match.
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
                  <Mic className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Voice Recognition</h3>
                  <p>
                    Advanced speech-to-text processing with custom wake word detection. Simply say "Wake up, EDITH" to
                    activate the assistant.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Brain className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Contextual Memory</h3>
                  <p>
                    Maintains conversation context and learns from interactions to provide increasingly personalized
                    responses.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Settings className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">System Control</h3>
                  <p>
                    Direct integration with system functions, file management, and application control for seamless
                    workflow automation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Zap className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Real-time Processing</h3>
                  <p>
                    Lightning-fast response times with optimized processing pipelines for immediate feedback and action
                    execution.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Design Philosophy</h2>
              <p className="text-lg leading-relaxed mb-4">
                EDITH.AI embodies a clean, futuristic aesthetic with a distinctive green-and-white color scheme that
                pays homage to classic sci-fi interfaces. The design prioritizes simplicity and functionality, ensuring
                that the technology never gets in the way of productivity.
              </p>
              <p className="text-lg leading-relaxed">
                Every interaction is designed to feel natural and intuitive, bridging the gap between human
                communication and machine efficiency.
              </p>
            </div>

            {/* Technical Stack */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-lg leading-relaxed mb-6">
                Built entirely in Python, EDITH.AI leverages a carefully curated stack of libraries and frameworks:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">Speech Recognition</span>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">Natural Language Processing</span>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">System Integration APIs</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                The modular architecture allows for easy expansion and customization, making EDITH.AI a truly personal
                AI companion that grows with your needs.
              </p>
            </div>

            {/* Future Roadmap */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Future Roadmap</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Enhanced machine learning capabilities for predictive assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Integration with IoT devices for smart home control</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Multi-language support and localization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Advanced emotion recognition and response adaptation</span>
                </li>
              </ul>
            </div>

            {/* Personal Motivation */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Why I Built EDITH</h2>
              <p className="text-lg leading-relaxed mb-4">
                EDITH.AI represents more than just a technical project—it's my exploration into the future of
                human-computer interaction. Growing up fascinated by the seamless AI assistants in science fiction, I
                wanted to create something that could bridge the gap between imagination and reality.
              </p>
              <p className="text-lg leading-relaxed">
                This project challenged me to dive deep into machine learning, natural language processing, and system
                integration, ultimately resulting in a tool that genuinely enhances my daily productivity and serves as
                a foundation for future AI innovations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
