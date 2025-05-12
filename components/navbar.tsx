"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Linkedin, Github, Phone, Download } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold">JL</div>
        <nav className="flex items-center gap-2">

          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn Profile">
            <a href="https://www.linkedin.com/in/jlrosasb/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub Profile">
            <a href="https://github.com/bazaescribe" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="Download Resume">
            <a href="/José Luis Roas Baza - Product.pdf" download>
              <Download className="h-4 w-4" />
            </a>
          </Button>

          <Button size="icon" asChild aria-label="Book a call">
            <a href="https://calendly.com/jlrosasb/30min" target="_blank">
              <Phone className="h-4 w-4" />
            </a>
          </Button>

          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button> */}
        </nav>
      </div>
    </header>
  )
}
