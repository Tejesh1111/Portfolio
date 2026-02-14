"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react"
import Image from "next/image"

const roles = [
  "Java Full Stack Developer",
  "Backend Engineer",
  "Microservices Architect",
  "DSA Enthusiast",
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        40
      )
    } else {
      timeout = setTimeout(
        () =>
          setDisplayText((prev) => currentRole.slice(0, prev.length + 1)),
        80
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:flex-row md:text-left">
        {/* Profile photo */}
        <div className="shrink-0">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-primary/30 md:h-52 md:w-52">
            <Image
              src="/tejeshimage.jpeg"
              alt="Gadde Tejesh"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary">
            Hi, my name is
          </p>
          <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Gadde Tejesh
          </h1>
          <div className="mb-6 flex h-10 items-center justify-center md:justify-start">
            <span className="font-mono text-lg text-muted-foreground md:text-xl">
              {displayText}
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary">
                &nbsp;
              </span>
            </span>
          </div>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0">
            I build scalable backend systems and full-stack applications using
            Java, Spring Boot, and modern development practices. Currently
            pursuing B.Tech in Computer Science at IIITV-ICD.
          </p>

          {/* CTA buttons */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
            </a>
            <a
              href="/view?doc=resume"
              className="flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 md:justify-start">
            <a
              href="https://github.com/Tejesh1111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejesh-gadde-40ab31318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/Mr_Tejesh99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LeetCode"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="mailto:gaddetejesh@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
