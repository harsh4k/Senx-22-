"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import { useState, useRef } from "react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  status: "completed" | "in-progress" | "concept"
  gradient: string
}

export function ProjectCard({
  title,
  description,
  longDescription,
  technologies,
  demoUrl,
  githubUrl,
  status,
  gradient,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const statusColors = {
    completed: "bg-green-500/20 text-green-400 border-green-500/30",
    "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    concept: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  }

  const getProjectSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
  }

  const projectSlug = getProjectSlug(title)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsHovered(!isHovered)
    }
  }

  return (
    <Card
      ref={cardRef}
      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer focus-within:ring-2 focus-within:ring-primary/50 animate-fade-in-scale h-full snap-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="article"
      aria-label={`${title} project card`}
      aria-describedby={`${projectSlug}-description`}
    >
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      ></div>

      <div
        className="absolute inset-0 rounded-lg border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          borderImage: "linear-gradient(90deg, var(--primary), var(--accent)) 1",
        }}
      ></div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-orbitron font-bold text-primary group-hover:text-accent transition-colors duration-400 animate-fade-in-scale">
              {title}
            </h3>
            <Badge
              variant="outline"
              className={`text-xs font-orbitron ${statusColors[status]}`}
              role="status"
              aria-label={`Project status: ${status.replace("-", " ")}`}
            >
              {status.replace("-", " ")}
            </Badge>
          </div>

          <div
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-orbitron font-bold text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-rotate-in cursor-pointer"
            aria-hidden="true"
          >
            {title.slice(0, 2)}
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 space-y-4">
          <p className="text-muted-foreground leading-relaxed transition-all duration-300">{description}</p>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
            aria-live="polite"
            aria-hidden={!isHovered}
          >
            <p
              id={`${projectSlug}-description`}
              className="text-sm text-muted-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4 animate-slide-in-left"
            >
              {longDescription}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-4 mb-6">
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
            {technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-orbitron bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-md animate-slide-in-up"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationDuration: "0.6s",
                }}
                role="listitem"
                aria-label={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div
          className={`flex gap-3 transition-all duration-500 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
          }`}
          role="toolbar"
          aria-label="Project actions"
        >
          {demoUrl && (
            <Link href={demoUrl}>
              <Button
                size="sm"
                className="font-orbitron bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-lg !text-white dark:!text-black animate-slide-in-up"
                aria-label={`View demo for ${title}`}
              >
                <Play className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </Link>
          )}
          {githubUrl && githubUrl !== "#" && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="font-orbitron bg-transparent hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-lg text-foreground dark:text-foreground animate-slide-in-up"
                style={{ animationDelay: "50ms" }}
                aria-label={`View source code for ${title} on GitHub`}
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            </Link>
          )}
          <Link href={`/projects/${projectSlug}`}>
            <Button
              variant="ghost"
              size="sm"
              className="font-orbitron hover:bg-muted/50 transition-all duration-300 hover:scale-110 hover:shadow-lg text-foreground dark:text-foreground animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
              aria-label={`View detailed information about ${title}`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Details
            </Button>
          </Link>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse"></div>

        {/* Border glow */}
        <div
          className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "xor" }}
        ></div>
      </div>
    </Card>
  )
}
