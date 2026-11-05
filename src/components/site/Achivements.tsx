import { motion } from "framer-motion";
import { Trophy, Award, Medal, GraduationCap } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const achievements = [
  {
    icon: Trophy,
    year: "2025",
    title: "Hackathon Winner",
    organization: "GCET Kashmir Hackathon 2025",
    description:
      "Led the team to 1st place in the university-wide hackathon, architecting and pitching an innovative AI-driven technology solution.",
  },
  {
    icon: Trophy,
    year: "2026",
    title: "AI Buildathon Winner",
    organization: "GDC Anantnag",
    description:
      "Won 1st place in the AI Buildathon by designing and implementing an AI-powered platform addressing real-world community challenges.",
  },
  {
    icon: Trophy,
    year: "2024",
    title: "Frontend Frenzy Winner",
    organization: "Frontend Frenzy Hackathon",
    description:
      "Engineered an interactive, high-performance web application under strict time constraints, securing the top winning position.",
  },
  {
    icon: Trophy,
    year: "2023",
    title: "High School Hackathon Winner",
    organization: "Major League Hacking (MLH)",
    description:
      "Secured 1st place in a competitive hackathon by collaborating to build an impactful creative software application.",
  },
  {
    icon: Award,
    year: "NVIDIA DLI",
    title: "Fundamentals of Deep Learning",
    organization: "NVIDIA Deep Learning Institute",
    description:
      "Completed professional certification covering neural network architectures, computer vision models, transfer learning, and deep learning workflows.",
  },
  {
    icon: Award,
    year: "EduPi School",
    title: "Certified MERN Stack Developer",
    organization: "EduPi School of Technology",
    description:
      "Completed rigorous full-stack training mastering MongoDB, Express.js, React, Node.js, and scalable cloud service architectures.",
  },
  {
    icon: GraduationCap,
    year: "Academic Honors",
    title: "9.2 CGPA Academic Distinction",
    organization: "GCET Kashmir (B.Tech CSE)",
    description:
      "Maintained top academic standing across Computer Science & Engineering coursework, algorithms, system architecture, and artificial intelligence.",
  },
  {
    icon: Medal,
    year: "Community Leadership",
    title: "Founder & Community Lead",
    organization: "HackHub24",
    description:
      "Established and expanded a developer community of 100+ student engineers, organizing 12+ technical workshops and mentoring 30+ open-source contributions.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow="06 — Achievements & Recognition"
        title={
          <>
            Milestones from my{" "}
            <span className="text-primary">
              learning, building, and leadership journey
            </span>
            .
          </>
        }
        description="Hackathons, competitive victories, technical certifications, and leadership milestones shaping my growth as an AI engineer."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-primary font-mono">
                    {item.year}
                  </div>

                  <h3 className="mt-1 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-primary/80 font-medium">
                    {item.organization}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
