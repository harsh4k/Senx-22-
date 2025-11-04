"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useState } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
      { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
      { name: "FastAPI", level: 70, color: "from-teal-400 to-teal-600" },
      { name: "MongoDB", level: 65, color: "from-green-500 to-green-700" },
      { name: "PostgreSQL", level: 60, color: "from-blue-600 to-blue-800" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", level: 80, color: "from-orange-500 to-orange-700" },
      { name: "PyTorch", level: 75, color: "from-red-500 to-red-700" },
      { name: "OpenCV", level: 70, color: "from-purple-500 to-purple-700" },
      { name: "Scikit-learn", level: 85, color: "from-yellow-500 to-yellow-700" },
      { name: "NLP", level: 75, color: "from-indigo-500 to-indigo-700" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, color: "from-red-400 to-red-600" },
      { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
      { name: "AWS", level: 60, color: "from-orange-400 to-orange-600" },
      { name: "Linux", level: 80, color: "from-gray-500 to-gray-700" },
      { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
    ],
  },
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies with a focus on AI-driven solutions and full-stack development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-500 animate-in slide-in-from-bottom-4"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-orbitron font-bold text-primary mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-orbitron text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-xs font-orbitron border-primary/30 group-hover:border-primary transition-colors duration-200"
                      >
                        {skill.level}%
                      </Badge>
                    </div>

                    <div className="relative h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                          animationDelay: `${skillIndex * 100}ms`,
                        }}
                      ></div>

                      {/* Glow effect */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                          animationDelay: `${skillIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-orbitron font-semibold text-muted-foreground mb-6">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Figma", "Photoshop", "Blender", "Unity", "Firebase", "Vercel", "Netlify", "Postman"].map(
              (skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="font-orbitron hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110 cursor-pointer animate-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
