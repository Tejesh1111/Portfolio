export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="01" title="About Me" />

        <div className="max-w-3xl">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            {
              "I'm a passionate Java Full Stack Developer currently pursuing my B.Tech in Computer Science at IIITV-ICD (Indian Institute of Information Technology, Vadodara - International Campus, Diu). With a strong foundation in backend development, I specialize in building scalable microservices and full-stack applications."
            }
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            {
              "My experience spans from designing complex distributed systems with Spring Boot to building full-stack e-commerce platforms with React. I completed my Web Developer Internship at IIT Kharagpur and have a deep interest in system design, data structures, and building production-grade software."
            }
          </p>
          <p className="leading-relaxed text-muted-foreground">
            {
              "When I'm not coding, you'll find me solving DSA problems on LeetCode (300+ problems solved), exploring machine learning with Python, or diving into new technologies in the software development ecosystem."
            }
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-sm text-primary">Languages:</span>
            <div className="flex gap-2">
              {["English", "Telugu", "Hindi"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-lg text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
