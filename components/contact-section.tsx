"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-gray-400",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
      description: "Let's connect professionally",
    },
    {
      name: "harshitsinhchauhan250@gmail.com",
      icon: Mail,
      url: "https://mail.google.com",
      color: "hover:text-red-400",
      description: "Send me a message",
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-500 animate-in slide-in-from-left-4">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-6 flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-orbitron font-medium text-foreground">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-orbitron bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-orbitron font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="Your name"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-orbitron bg-background/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-orbitron font-medium text-foreground">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-orbitron bg-background/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-orbitron bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-in slide-in-from-right-4">
            {/* Contact Info */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-500">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-orbitron text-sm">harshitsinhchauhan250@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-orbitron text-sm">+91 8454963092</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-orbitron text-sm">Mumbai, India</span>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-500">
              <h3 className="text-2xl font-orbitron font-bold text-primary mb-6">Connect With Me</h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 hover:scale-105 group animate-in slide-in-from-right-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon
                        className={`h-5 w-5 text-muted-foreground ${social.color} transition-colors duration-200`}
                      />
                    </div>
                    <div>
                      <h4 className="font-orbitron font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-orbitron text-sm text-foreground">Available for new projects</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 ml-6">
                Currently accepting freelance and collaboration opportunities
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
