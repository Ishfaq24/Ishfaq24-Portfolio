import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    n: "01",
    name: "AlgoArena",
    tag: "AI-Powered EdTech Platform",
    blurb:
      "An intelligent learning platform that combines coding practice, AI-powered tutoring, adaptive assessments, and automated educational video generation to deliver a personalized learning experience for students preparing for academics, placements, and competitive exams.",
    metrics: [
      { k: "AI", v: "personalized tutor" },
      { k: "Video", v: "auto-generated lessons" },
      { k: "Mocks", v: "adaptive assessments" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "OpenAI",
      "LangChain",
      "Tailwind CSS",
    ],
    github: "https://github.com/Ishfaq24/AlgoArena",
    demo: "#",
  },
  {
    n: "02",
    name: "EyeAmHere",
    tag: "AI · Computer Vision",
    blurb:
      "An AI-powered attendance management system using facial recognition and computer vision for automated attendance tracking.",
    metrics: [
      { k: "AI", v: "face recognition" },
      { k: "Auto", v: "attendance" },
      { k: "CV", v: "real-time detection" },
    ],
    stack: ["Python", "OpenCV", "TensorFlow", "Flask"],
    github: "https://github.com/Ishfaq24/EyeAmHere",
    demo: "#",
  },

  {
    n: "03",
    name: "ShareStore",
    tag: "Full Stack · Resource Sharing",
    blurb:
      "A secure file-sharing platform with Cloudinary storage, user authentication, file permissions, and Discord automation for content distribution.",
    metrics: [
      { k: "Cloud", v: "Cloudinary storage" },
      { k: "Secure", v: "access control" },
      { k: "Discord", v: "automation" },
    ],
    stack: [
      "Django",
      "Python",
      "Bootstrap",
      "Cloudinary",
      "Discord API",
    ],
    github: "https://github.com/Ishfaq24/ShareStore",
    demo: "https://sharest.onrender.com",
  },

  {
    n: "04",
    name: "DevVerse",
    tag: "Community · Social Platform",
    blurb:
      "A social platform for developers to connect, share projects, discuss technologies, and collaborate with fellow programmers.",
    metrics: [
      { k: "Posts", v: "community feed" },
      { k: "Profiles", v: "developer showcase" },
      { k: "Connect", v: "networking" },
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/Ishfaq24/DevVerse",
    demo: "#",
  },

  {
    n: "05",
    name: "O-Management",
    tag: "Enterprise · Management System",
    blurb:
      "An office management solution for employee management, task tracking, workflow automation, and organizational analytics.",
    metrics: [
      { k: "Tasks", v: "workflow tracking" },
      { k: "Teams", v: "employee management" },
      { k: "Data", v: "analytics dashboard" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ishfaq24/O-Management",
    demo: "#",
  },
];

export function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="03 — Featured Projects"
        title={
          <>
            Building products with{" "}
            <span className="text-primary">
              AI, Backend & Full Stack Development.
            </span>
          </>
        }
        description="A collection of projects focused on solving real-world problems through scalable backend systems, modern web technologies, and artificial intelligence."
      />

      <div className="space-y-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/50 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-center">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-primary">{p.n}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:hidden">
                  {p.tag}
                </span>
              </div>

              <div>
                <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
                  {p.tag}
                </div>

                <h3 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  {p.name}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  {p.metrics.map((m) => (
                    <div key={m.k} className="flex items-baseline gap-2">
                      <span className="font-mono text-lg text-foreground">
                        {m.k}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {m.v}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={p.demo}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>

                <a
                  href={p.github}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}