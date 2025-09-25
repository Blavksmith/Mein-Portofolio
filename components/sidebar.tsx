"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Tech", href: "#tech", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.slice(1))
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
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50">
      <div className="flex flex-col h-full p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-sidebar-foreground">My Portfolio</h2>
        </div>

        <ul className="space-y-2 flex-1">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1)

            return (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-sidebar-primary-foreground rounded-full" />}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
