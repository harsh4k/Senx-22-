"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const techStack = [
  { name: "HTML", color: "text-orange-500", bg: "from-orange-500/20 to-orange-600/20" },
  { name: "C", color: "text-blue-500", bg: "from-blue-500/20 to-blue-600/20" },
  { name: "Tailwind", color: "text-cyan-500", bg: "from-cyan-500/20 to-cyan-600/20" },
  { name: "React", color: "text-blue-400", bg: "from-blue-400/20 to-blue-500/20" },
  { name: "Next.js", color: "text-foreground", bg: "from-foreground/20 to-foreground/30" },
  { name: "Python", color: "text-yellow-500", bg: "from-yellow-500/20 to-yellow-600/20" },
  { name: "Java", color: "text-red-500", bg: "from-red-500/20 to-red-600/20" },
]

export function UniversityBadge() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative inline-block animate-in slide-in-from-bottom-4 duration-1000 delay-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="NMIMS Badge with Technologies"
    >
      {/* Main Badge */}
      <Badge
        variant="outline"
        className="text-lg px-8 py-4 font-orbitron border-primary/50 hover:border-primary transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-primary/25 hover:scale-105 bg-background/50 backdrop-blur-sm relative overflow-hidden"
        role="button"
        tabIndex={0}
        aria-expanded={isHovered}
        aria-describedby="tech-stack"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsHovered(!isHovered)
          }
        }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          NMIMS '27
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      </Badge>

      {/* Tech Stack Reveal */}
      <div
        id="tech-stack"
        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-6 transition-all duration-700 pointer-events-none ${
          isHovered ? "opacity-100 scale-100 pointer-events-auto translate-y-0" : "opacity-0 scale-95 translate-y-2"
        }`}
        role="tooltip"
        aria-hidden={!isHovered}
      >
        <div className="relative">
          {/* Arrow pointing up */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-card border-l border-t border-border rotate-45"></div>

          {/* Tech Stack Container - Fixed padding and scroll area */}
          <div className="flex gap-4 p-6 md:p-8 bg-card/95 border border-border rounded-xl shadow-2xl backdrop-blur-md min-w-max max-h-96 overflow-y-auto scrollbar-hide">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 hover:scale-125 transition-all duration-300 cursor-pointer group/tech flex-shrink-0 w-20 md:w-24"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  opacity: isHovered ? 1 : 0,
                  transition: `all 0.5s ease ${index * 50}ms`,
                }}
                role="listitem"
                tabIndex={isHovered ? 0 : -1}
              >
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${tech.bg} rounded-xl flex items-center justify-center ${tech.color} font-orbitron text-xs md:text-sm font-bold shadow-lg group-hover/tech:shadow-xl group-hover/tech:shadow-primary/25 transition-all duration-300 border border-border/50 group-hover/tech:border-primary/50 relative overflow-hidden flex-shrink-0`}
                  title={tech.name}
                  aria-label={tech.name}
                >
                  <span className="relative z-10">{tech.name.slice(0, 2)}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-xs font-orbitron text-muted-foreground group-hover/tech:text-foreground transition-colors duration-200 whitespace-nowrap text-center">
                  {tech.name}
                </span>

                {/* Skill level indicator */}
                <div
                  className="flex gap-1"
                  role="progressbar"
                  aria-valuenow={Math.floor(Math.random() * 40) + 60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${tech.name} proficiency`}
                >
                  {[...Array(Math.floor(Math.random() * 3) + 3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        i < 3 ? "bg-primary" : "bg-muted-foreground/30"
                      } group-hover/tech:bg-accent`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-xl blur-xl -z-10 opacity-50"></div>
        </div>
      </div>

      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 80}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: "2s",
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}
