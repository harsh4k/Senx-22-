"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-orbitron font-bold text-white animate-pulse">
            REX
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-primary/30 animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-orbitron font-bold text-primary">Loading Portfolio</h2>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-muted/50 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-sm text-muted-foreground font-orbitron">{Math.round(progress)}% Complete</p>
        </div>
      </div>
    </div>
  )
}
