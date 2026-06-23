import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const achievements = [
  {
    title: "Founder & Community Lead",
    organization: "HackHub24",
    description:
      "Built and managed a developer community focused on programming, open source, AI, and career growth. Organized workshops, mentoring sessions, and technical discussions for students.",
  },
  {
    title: "Backend Developer",
    organization: "Vipthra Technologies",
    description:
      "Developing scalable backend services, REST APIs, authentication systems, and database solutions while contributing to production-ready applications.",
  },
  {
    title: "Backend Developer",
    organization: "NexGen Developers",
    description:
      "Worked on backend architecture, API development, database design, and performance optimization for web applications.",
  },
  {
    title: "Open Source Advocate",
    organization: "HackHub24",
    description:
      "Conducted Git and GitHub awareness sessions to help students begin their open-source journey and contribute to real-world projects.",
  },
  {
    title: "AI & Machine Learning Enthusiast",
    organization: "Personal Projects",
    description:
      "Built projects involving computer vision, machine learning, educational technology, and AI-powered learning systems.",
  },
  {
    title: "Full Stack Developer",
    organization: "Personal Projects",
    description:
      "Designed and developed multiple full-stack applications including AlgoArena, DevVerse, ShareStore, EyeAmHere, and O-Management.",
  },
];

export function Testimonials() {
  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow="07 — Experience & Impact"
        title={
          <>
            Building, learning, and creating
            <span className="text-primary"> real impact.</span>
          </>
        }
        description="A snapshot of my professional experience, community contributions, and technical journey."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            <div className="text-lg font-semibold">
              {item.title}
            </div>

            <div className="mt-1 text-sm text-primary font-medium">
              {item.organization}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}