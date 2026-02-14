import { SectionHeading } from "./about-section"
import { GraduationCap, Calendar, MapPin, BookOpen, School } from "lucide-react"

const coursework = [
  "Data Structures",
  "Algorithms Analysis",
  "OOPS",
  "Operating Systems",
  "Computer Networks",
  "Database Management",
  "Software Engineering",
  "Computer Architecture",
]

const educationTimeline = [
  {
    institution: "IIITV-ICD",
    degree: "B.Tech in Computer Science",
    score: "CGPA: 6.80",
    period: "Sep 2023 - May 2027",
    location: "Diu, India",
    icon: GraduationCap,
    current: true,
  },
  {
    institution: "SASI Junior College",
    degree: "Intermediate (11th & 12th)",
    score: "97.5%",
    period: "2021 - 2023",
    location: "Velivennu, AP, India",
    icon: School,
    current: false,
  },
  {
    institution: "Vidya Vikas Educational Institution",
    degree: "SSC (10th Class)",
    score: "95%",
    period: "2016 - 2021",
    location: "Jangareddygudem, AP, India",
    icon: School,
    current: false,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="04" title="Education" />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Education timeline */}
          <div className="lg:col-span-3">
            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-5 top-6 bottom-6 w-px bg-border" />

              {educationTimeline.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        edu.current
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border border-border text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 rounded-lg border p-5 transition-colors hover:border-primary/30 ${
                        edu.current ? "border-primary/20 bg-primary/5" : "border-border bg-card"
                      }`}
                    >
                      <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {edu.institution}
                        </h3>
                        {edu.current && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mb-2 font-mono text-sm text-primary">
                        {edu.degree}
                      </p>
                      <p className="mb-3 text-sm font-semibold text-foreground">
                        {edu.score}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-primary" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-primary" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Coursework card */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Relevant Coursework
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
