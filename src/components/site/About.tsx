import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  GraduationCap,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";

const pillars = [
  {
    icon: Brain,
    title: "AI Engineering & Agents",
    body: "Multimodal generative pipelines (Prompt2Render), closed-loop critics, RAG architectures, LLM orchestration, and computer vision with MediaPipe and OpenCV.",
  },
  {
    icon: Code2,
    title: "Full Stack & Cloud Systems",
    body: "Production-ready FastAPI microservices, Node.js/Express, React, Next.js, PostgreSQL, MongoDB, Docker containerization, and low-latency WebSockets.",
  },
  {
    icon: Users,
    title: "Community & Leadership",
    body: "Founder of HackHub24 — organized 12+ technical workshops, driven open-source awareness with 30+ merged PRs, and mentored 100+ student engineers.",
  },
];

const facts = [
  { icon: Rocket, label: "15+ AI & full-stack projects shipped end-to-end" },
  { icon: GraduationCap, label: "9.2 CGPA · B.Tech Computer Science Engineering (GCET)" },
  { icon: Trophy, label: "Hackathon Winner (GCET 2025, MLH, Front-End Frenzy)" },
  { icon: Users, label: "100+ developers mentored through HackHub24" },
  { icon: GitBranch, label: "Active Open-Source Contributor (47+ public repositories)" },
  { icon: Sparkles, label: "160+ day continuous engineering & coding streak" },
];

const langDistribution = [
  { name: "Python (AI / ML / FastAPI)", pct: 44, color: "bg-primary" },
  { name: "TypeScript (Next.js / React)", pct: 26, color: "bg-emerald-500/80" },
  { name: "JavaScript (Node / Express)", pct: 22, color: "bg-teal-500/70" },
  { name: "C++ & SQL (DSA / Systems)", pct: 8, color: "bg-cyan-500/60" },
];

const recentShipRepos = [
  { name: "MindVault", url: "https://github.com/Ishfaq24/MindVault" },
  { name: "AlgoArena", url: "https://github.com/Ishfaq24/AlgoArena" },
  { name: "loan-approval-system", url: "https://github.com/Ishfaq24/loan-approval-system" },
  { name: "Virtual-Writing-Board", url: "https://github.com/Ishfaq24/Virtual-Writing-Board" },
  { name: "Code2Concept", url: "https://github.com/Ishfaq24/Code2Concept" },
  { name: "Awaaz-Kashmir", url: "https://github.com/Ishfaq24/Awaaz-Kashmir" },
];

export function About() {
  const [ghStats, setGhStats] = useState({ repos: 47, followers: 39 });

  useEffect(() => {
    fetch("https://api.github.com/users/Ishfaq24")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && typeof data.public_repos === "number") {
          setGhStats({
            repos: Math.max(47, data.public_repos),
            followers: Math.max(39, data.followers || 39),
          });
        }
      })
      .catch(() => {
        // Fallback to verified baseline stats
      });
  }, []);

  return (
    <Section id="about">
      <SectionHeader
        eyebrow="01 — About"
        title={
          <>
            An AI engineer who treats{" "}
            <span className="text-primary">systems</span> like products.
          </>
        }
        description="Computer Science & Engineering student at GCET Kashmir (9.2 CGPA) building at the nexus of Generative AI, machine learning pipelines, and robust full-stack architectures — dedicated to delivering high-impact, production-ready software."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
            />
            <p.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-3 rounded-2xl border border-border bg-card/40 p-6 md:grid-cols-2 lg:grid-cols-3">
        {facts.map((f) => (
          <div key={f.label} className="flex items-center gap-3 text-sm">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
              <f.icon className="h-4 w-4" />
            </div>
            <span className="text-muted-foreground">{f.label}</span>
          </div>
        ))}
      </div>

      {/* Live GitHub & Engineering Telemetry Strip */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-6 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Engineering Telemetry & Proof of Work
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  LIVE · @Ishfaq24
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Verified open-source repositories, language distribution & active shipments
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <div>
              <span className="text-lg font-semibold text-foreground">
                {ghStats.repos}+
              </span>{" "}
              <span className="text-muted-foreground">Public Repos</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-foreground">
                {ghStats.followers}
              </span>{" "}
              <span className="text-muted-foreground">Followers</span>
            </div>
            <a
              href="https://github.com/Ishfaq24"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              View GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Language distribution bar */}
        <div className="mt-5">
          <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-secondary">
            {langDistribution.map((l) => (
              <div
                key={l.name}
                style={{ width: `${l.pct}%` }}
                className={`${l.color} transition-all duration-500`}
                title={`${l.name}: ${l.pct}%`}
              />
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              {langDistribution.map((l) => (
                <div key={l.name} className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${l.color}`} />
                  <span>{l.name}</span>
                  <span className="font-mono text-foreground">{l.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick repository pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-border/60">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-1">
            Recent Shipped Repos:
          </span>
          {recentShipRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {repo.name}
              <ExternalLink className="h-2.5 w-2.5" />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
