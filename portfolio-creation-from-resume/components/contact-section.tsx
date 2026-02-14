"use client"

import { useState } from "react"
import { SectionHeading } from "./about-section"
import { Mail, Phone, Linkedin, Github, Send, Loader2, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormState("sent")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setFormState("idle"), 4000)
      } else {
        setFormState("error")
        setTimeout(() => setFormState("idle"), 3000)
      }
    } catch {
      setFormState("error")
      setTimeout(() => setFormState("idle"), 3000)
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="07" title="Get In Touch" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              {
                "I'm currently looking for new opportunities and my inbox is always open. Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out!"
              }
            </p>

            <div className="flex flex-col gap-4">
              <ContactLink
                icon={Mail}
                label="gaddetejesh@gmail.com"
                href="mailto:gaddetejesh@gmail.com"
              />
              <ContactLink
                icon={Phone}
                label="+91 9182477656"
                href="tel:+919182477656"
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn Profile"
                href="https://www.linkedin.com/in/tejesh-gadde-40ab31318"
              />
              <ContactLink
                icon={Github}
                label="GitHub Profile"
                href="https://github.com/Tejesh1111"
              />
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-md border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={formState === "sending" || formState === "sent"}
              className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {formState === "sending" && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              )}
              {formState === "sent" && (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Message Sent!
                </>
              )}
              {formState === "idle" && (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
              {formState === "error" && "Failed. Try again."}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      <Icon className="h-4 w-4 text-primary" />
      {label}
    </a>
  )
}
