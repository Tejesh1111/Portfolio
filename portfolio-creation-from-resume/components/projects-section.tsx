import { SectionHeading } from "./about-section"
import { Github, Server, ShoppingCart, Leaf } from "lucide-react"

const projects = [
  {
    title: "Cloud-native Microservices SaaS",
    subtitle: "Java",
    icon: Server,
    description:
      "Built a cloud-native, microservices-based SaaS website for team task management using Java 17, Spring Boot, Spring Cloud and Spring Gateway, designing Auth, User, Core, Billing and Notification services with scalable API-driven architecture.",
    highlights: [
      "JWT and OAuth2 authentication with role-based access control and Spring Security",
      "Transactional schemas in MySQL with JPA and Hibernate for data persistence",
      "Inter-service communication with centralized gateway policies and token management",
      "High-availability configuration with health checks, centralized logging, and a live production demo",
    ],
    tools: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "Hibernate",
      "MySQL",
      "JPA",
    ],
    github: "https://github.com/Tejesh1111",
  },
  {
    title: "Marketplace Management System",
    subtitle: "Spring Boot",
    icon: ShoppingCart,
    description:
      "Built a full-stack E-commerce web platform using Spring Boot, React, JavaScript and MySQL, implementing buyer and seller workflows with scalable REST APIs and modular service-oriented backend architecture.",
    highlights: [
      "Seller onboarding, product catalog management, and secure checkout flows",
      "Role-based access control with session and token-based authentication for security",
      "Advanced search and filtering, seller analytics dashboard with real-time order and inventory insights",
      "Automated builds with GitHub Actions CI for high availability and low-latency performance",
    ],
    tools: [
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "REST APIs",
      "GitHub Actions",
    ],
    github: "https://github.com/Tejesh1111",
  },
  {
    title: "Plant Leaf Disease Detection",
    subtitle: "Machine Learning / Deep Learning",
    icon: Leaf,
    description:
      "Developed a model to classify and detect plant leaf diseases using ML and DL techniques. Implemented image preprocessing and trained CNN-based models for accurate predictions.",
    highlights: [
      "Image preprocessing and CNN-based model training for accurate disease classification",
      "Built a dataset pipeline for training and evaluation of plant disease detection",
      "Leveraged TensorFlow and Scikit-learn for model development and optimization",
    ],
    tools: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "CNN",
      "Image Processing",
    ],
    github: "https://github.com/Tejesh1111",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="03" title="Projects" />

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  const Icon = project.icon
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-primary">
              {project.subtitle}
            </span>
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
          aria-label={`View ${project.title} on GitHub`}
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mb-4 flex flex-col gap-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
