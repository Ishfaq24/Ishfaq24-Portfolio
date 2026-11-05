import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const timeline = [
  {
    period: "March 2026 — Present",
    role: "Software Engineer",
    org: "NexGen Developers",
    points: [
      "Engineered scalable RESTful APIs with Node.js and FastAPI powering high-traffic web applications",
      "Collaborated with frontend teams to integrate real-time data exchange, state management, and backend logic",
      "Integrated machine learning pipelines and third-party APIs with structured validation and error handling",
      "Wrote comprehensive unit and integration tests to ensure code reliability, security, and maintainability",
    ],
  },
  {
    period: "May 2026 — Present",
    role: "Software Engineer",
    org: "Vipthra Technologies",
    points: [
      "Architected high-throughput backend services and REST APIs handling concurrent requests with low latency",
      "Implemented secure JWT authentication, session handling, and role-based access control (RBAC)",
      "Optimized PostgreSQL and MongoDB queries, indexing strategies, and caching layers for sub-100ms response times",
      "Collaborated with cross-functional engineering teams to ship production-ready enterprise features",
    ],
  },
  {
    period: "2024 — Present",
    role: "Founder & Community Lead",
    org: "HackHub24",
    points: [
      "Founded and grew an active developer community of 100+ engineering students across Jammu & Kashmir",
      "Organized 12+ hands-on technical workshops covering Generative AI, system architecture, and open-source contribution",
      "Spearheaded the Open Source Awareness initiative, mentoring students to successfully merge 30+ production PRs",
      "Mentored community members into multiple hackathon victories and software engineering internships",
    ],
  },
  {
    period: "December 2022 — December 2026",
    role: "B.Tech, Computer Science & Engineering (CGPA: 9.2)",
    org: "GCET Kashmir (Government College of Engineering & Technology)",
    points: [
      "Top academic standing with a 9.2 CGPA specializing in Artificial Intelligence, System Architecture, and Algorithms",
      "Active competitive coder and project lead across multiple hackathon victories (GCET 2025, MLH, Front-End Frenzy)",
      "160+ day continuous engineering and open-source coding streak",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="04 — Experience"
        title={<>Building <span className="text-primary">in public</span> and shipping in production.</>}
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-4" />
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-10 md:pl-14"
            >
              <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background md:left-2.5" />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.period}
              </div>
              <h3 className="mt-1 text-xl font-medium">
                {t.role} <span className="text-muted-foreground">· {t.org}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
