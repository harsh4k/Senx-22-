"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Eye, MessageSquare, FileText, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FishesAIDetailsPage() {
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
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Fishes AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              "Smart companion for learning and productivity"
            </p>
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
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">What is Fishes AI?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Fishes AI is an experimental assistant system I'm building with Ollama and Python. It's designed to be
                lightweight yet powerful, handling free-form conversations, file operations, and student-focused
                utilities. Think of it as a smart companion for learning and productivity.
              </p>
              <p className="text-lg leading-relaxed">
                Built to explore how AI can simplify everyday tasks while staying fun and approachable, Fishes AI
                represents my journey into creating more accessible and intuitive AI interactions for educational and
                productivity purposes.
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
                  <Eye className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Computer Vision</h3>
                  <p>
                    Advanced image recognition and analysis capabilities for marine life identification and
                    classification using state-of-the-art CNN models.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <MessageSquare className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Natural Conversations</h3>
                  <p>
                    Free-form conversational AI that understands context and provides helpful responses for learning and
                    productivity tasks.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <FileText className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">File Operations</h3>
                  <p>
                    Intelligent file management and document processing capabilities to streamline workflow and organize
                    digital resources efficiently.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 border border-border rounded-lg bg-card"
                >
                  <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-orbitron text-xl font-semibold mb-3">Student Utilities</h3>
                  <p>
                    Specialized tools and features designed specifically for students, including study aids, research
                    assistance, and academic productivity enhancements.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Design Philosophy</h2>
              <p className="text-lg leading-relaxed mb-4">
                Fishes AI embraces a playful yet professional approach to AI interaction. The cyan-to-blue gradient
                aesthetic reflects the aquatic theme while maintaining a modern, approachable interface that doesn't
                intimidate users new to AI technology.
              </p>
              <p className="text-lg leading-relaxed">
                The focus is on making AI accessible and fun, removing barriers between users and powerful computational
                capabilities while maintaining the sophistication needed for serious productivity work.
              </p>
            </div>

            {/* Technical Stack */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-lg leading-relaxed mb-6">
                Fishes AI leverages cutting-edge computer vision and natural language processing technologies:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">OpenCV & PyTorch</span>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">Convolutional Neural Networks</span>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card text-center">
                  <span className="font-orbitron font-semibold">Flask Web Framework</span>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                The system combines traditional computer vision techniques with modern deep learning approaches,
                creating a robust platform for both image analysis and conversational AI capabilities.
              </p>
            </div>

            {/* Future Roadmap */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Future Roadmap</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Enhanced marine species database with detailed behavioral information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Real-time video analysis for live marine life identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Integration with educational platforms and marine biology curricula</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Mobile application for field research and citizen science projects</span>
                </li>
              </ul>
            </div>

            {/* Personal Motivation */}
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">Why I Built Fishes AI</h2>
              <p className="text-lg leading-relaxed mb-4">
                Fishes AI emerged from my fascination with marine biology and the potential of AI to make specialized
                knowledge more accessible. As a student myself, I recognized the need for AI tools that could bridge the
                gap between complex academic concepts and practical understanding.
              </p>
              <p className="text-lg leading-relaxed">
                This project allowed me to explore computer vision techniques while creating something genuinely useful
                for education and research. It represents my belief that AI should be approachable, educational, and fun
                to use, rather than intimidating or overly complex.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
