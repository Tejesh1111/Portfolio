import { SectionHeading } from "./about-section"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java (Primary)", "Python", "C", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "JDBC",
      "Microservices",
      "REST APIs",
      "React",
      "Multithreading",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions CI/CD",
      "Postman",
      "VS Code",
      "Eclipse",
      "Google Cloud Platform",
      "Kaggle Notebook",
      "Linux",
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "System Design",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="05" title="Skills & Technologies" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 text-xs text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
