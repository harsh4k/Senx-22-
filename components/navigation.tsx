"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "#home", type: "section" },
  { name: "About", href: "#about", type: "section" },
  { name: "Projects", href: "/projects", type: "page" },
  { name: "Skills", href: "#skills", type: "section" },
  { name: "Contact", href: "#contact", type: "section" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      const sections = navItems.filter((item) => item.type === "section").map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleNavigation = (item: (typeof navItems)[0]) => {
    if (item.type === "section") {
      if (pathname !== "/") {
        window.location.href = `/${item.href}`
        return
      }
      const element = document.getElementById(item.href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.type === "page") {
      return pathname === item.href
    }
    return activeSection === item.href.slice(1) && pathname === "/"
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <div key={item.name}>
            {item.type === "page" ? (
              <Link
                href={item.href}
                className={`font-orbitron text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                  isActive(item) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {isActive(item) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-in slide-in-from-left-4 duration-300"></div>
                )}
              </Link>
            ) : (
              <button
                onClick={() => handleNavigation(item)}
                className={`font-orbitron text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                  isActive(item) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {isActive(item) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-in slide-in-from-left-4 duration-300"></div>
                )}
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 md:hidden animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.type === "page" ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-orbitron text-left py-2 transition-all duration-300 hover:text-primary block ${
                      isActive(item) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`font-orbitron text-left py-2 transition-all duration-300 hover:text-primary w-full ${
                      isActive(item) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
