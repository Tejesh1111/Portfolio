"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""))

    const handleActiveSection = () => {
      // If scrolled to very bottom, always activate last section (contact)
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50

      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      // Otherwise find the section closest to the top of the viewport
      const offset = window.innerHeight * 0.3
      let current = ""

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= offset) {
          current = id
        }
      }

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleActiveSection, { passive: true })
    handleActiveSection()

    return () => {
      window.removeEventListener("scroll", handleActiveSection)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-primary"
        >
          {"<GT />"}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "")
            const isActive = activeSection === sectionId

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-md px-3 py-1.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-foreground/10 text-foreground font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          <li className="ml-3">
            <a
              href="/view?doc=resume"
              className="rounded-md border border-primary px-4 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col items-center gap-2 py-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-6 py-2 text-base transition-all duration-200 ${
                      isActive
                        ? "bg-foreground/10 text-foreground font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="mt-2">
              <a
                href="/view?doc=resume"
                className="rounded-md border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
