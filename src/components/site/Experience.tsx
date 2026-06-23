import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const timeline = [
  {
    period: "May 2026 — Present",
    role: "Backend Developer",
    org: "Vipthra Technologies",
    points: [
      "Designed and developed scalable RESTful APIs using Node.js and Express.js",
      "Built backend services handling high traffic and concurrent requests",
      "Implemented JWT auth and role-based access control across services",
      "Optimized database queries and app performance for faster response times",
      "Collaborated with frontend teams to ship seamless API integrations",
      "Worked with MongoDB and cloud services for data management and deployment",
    ],
  },
  {
    period: "2025 — Present",
    role: "Backend Developer",
    org: "NexGen Developers",
    points: [
      "Developed and maintained RESTful APIs powering web applications",
      "Designed scalable backend architectures for growing user bases",
      "Built secure authentication, authorization and session management",
      "Integrated third-party services, databases and external APIs",
      "Improved reliability through error handling, validation and perf tuning",
      "Participated in code reviews and engineering best practices",
    ],
  },
  {
    period: "2024 — Now",
    role: "Founder & Community Lead",
    org: "HackHub24",
    points: [
      "Built a developer community of 100+ engineering students",
      "Organized 12+ workshops on AI, system design and open source",
      "Launched the OSS Awareness Program — 30+ first PRs merged",
      "Mentored students into hackathon wins and internships",
    ],
  },
  {
    period: "Ongoing",
    role: "B.Tech, Computer Science Engineering",
    org: "Engineering College",
    points: [
      "Focus areas: AI, systems design, compilers, network security",
      "160+ day continuous coding streak",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="04 — Experience"
        title={<>Building <span className="text-primary">in public</span> since day one.</>}
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
