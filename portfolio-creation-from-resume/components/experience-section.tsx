import { SectionHeading } from "./about-section"
import { MapPin, ExternalLink, FileCheck } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="02" title="Experience" />

        <div className="relative border-l-2 border-border pl-8">
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />

          <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
            <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Web Developer Intern (On Site)
                </h3>
                <a
                  href="https://www.iitkgp.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary transition-opacity hover:opacity-80"
                >
                  IIT Kharagpur
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm text-primary">
                  May 2025 - July 2025
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  Kharagpur, West Bengal
                </div>
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-3">
              <ExperienceBullet>
                Built a React front-end to render license plate overlays on
                video frames using coordinates from backend-generated CSV data.
              </ExperienceBullet>
              <ExperienceBullet>
                Designed a dynamic dropdown UI with Material UI to position
                overlays (top-left, bottom-right, default above plate) with
                responsive layout control.
              </ExperienceBullet>
              <ExperienceBullet>
                Synced bounding boxes and number plate rendering with video
                timestamps for frame-accurate, real-time playback.
              </ExperienceBullet>
              <ExperienceBullet>
                Integrated front-end and backend flows to handle normalized
                coordinates and toggle overlay visibility seamlessly.
              </ExperienceBullet>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="/view?doc=nptel-internship"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-opacity hover:opacity-80"
              >
                <FileCheck className="h-3 w-3" />
                NPTEL Certificate
              </a>
              <a
                href="/view?doc=professor-certificate"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-opacity hover:opacity-80"
              >
                <FileCheck className="h-3 w-3" />
                Professor Certificate
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Material UI", "JavaScript", "CSV Processing", "Video Rendering"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      {children}
    </li>
  )
}
