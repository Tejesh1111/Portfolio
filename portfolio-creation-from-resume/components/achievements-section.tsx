import { SectionHeading } from "./about-section"
import { Code, Award, Briefcase, ExternalLink } from "lucide-react"

const achievements = [
  {
    icon: Code,
    title: "300+ DSA Problems Solved",
    description:
      "Active problem solver on LeetCode, consistently practicing data structures and algorithms.",
    link: "https://leetcode.com/u/Mr_Tejesh99/",
    linkText: "View LeetCode Profile",
    isExternal: true,
  },
  {
    icon: Award,
    title: "NPTEL Elite + Silver - Java Programming",
    description:
      "Elite + Silver Certification in Programming in Java issued by SWAYAM NPTEL, a national-level achievement.",
    link: "/view?doc=nptel-java",
    linkText: "View Certificate",
    isExternal: false,
  },
  {
    icon: Briefcase,
    title: "IIT Kharagpur Internship Certificate",
    description:
      "Completed Web Developer Internship (On Site) at IIT Kharagpur, certified by professor and NPTEL.",
    link: null,
    linkText: null,
    isExternal: false,
    subLinks: [
      {
        label: "NPTEL Certificate",
        href: "/view?doc=nptel-internship",
      },
      {
        label: "Professor Certificate",
        href: "/view?doc=professor-certificate",
      },
    ],
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="06" title="Achievements & Certifications" />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target={achievement.isExternal ? "_blank" : undefined}
                      rel={
                        achievement.isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-opacity hover:opacity-80"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {achievement.linkText}
                    </a>
                  )}
                  {achievement.subLinks && (
                    <div className="flex flex-col gap-1.5">
                      {achievement.subLinks.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-opacity hover:opacity-80"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
