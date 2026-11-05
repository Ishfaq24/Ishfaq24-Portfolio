import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import profile from "@/assets/profile-DBU5HXfo.png";

interface HeroProps {
  onOpenRecruiterModal?: (tab: "brief" | "resume") => void;
  onOpenCommandPalette?: () => void;
}

export function Hero({
  onOpenRecruiterModal,
  onOpenCommandPalette,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hero-radial"
      />
      <div aria-hidden className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex flex-wrap items-center justify-center gap-2"
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for AI & Full-Stack Engineering Roles · 2026
          </div>

          <button
            type="button"
            onClick={() => onOpenRecruiterModal?.("brief")}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary/20 cursor-pointer"
          >
            <Briefcase className="h-3 w-3" />
            HR / Recruiter 30s Brief →
          </button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance md:text-7xl"
        >
          <span className="text-primary">Ishfaq Ahmad Bhat</span>.
          <br />
          <span className="text-muted-foreground">
            builds AI products people{" "}
          </span>
          <span className="text-foreground">actually use.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          AI/ML Engineer, Full Stack Developer & Open Source Contributor. I
          architect end-to-end multimodal agent pipelines, explainable ML
          models, and high-performance platforms that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-(--shadow-glow) transition-transform hover:scale-[1.03]"
          >
            View projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => onOpenRecruiterModal?.("resume")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary cursor-pointer"
          >
            <Download className="h-4 w-4 text-primary" />
            Resume
          </button>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/20 cursor-pointer"
          >
            <Bot className="h-4 w-4 text-primary" />
            Ask Portfolio AI
            <kbd className="hidden rounded border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
              Ctrl K
            </kbd>
          </button>

          <a
            href="https://github.com/ishfaq24"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/ishfaq24"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="glow-ring relative overflow-hidden rounded-3xl border border-border bg-card/60 p-4 backdrop-blur md:p-6">
            <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-center">
              <div className="relative mx-auto w-full max-w-[260px] aspect-[353/547] overflow-hidden rounded-2xl bg-[#161b22] border border-border/50">
                <img
                  src={profile}
                  alt="Ishfaq Ahmad Bhat — AI Engineer and Full Stack Developer"
                  width={353}
                  height={547}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-4 px-2 md:px-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
                    /now · current focus
                  </div>
                  <span className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    GCET Kashmir · B.Tech CSE
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-balance">
                  Architecting multimodal generative AI pipelines (
                  <span className="text-foreground font-medium">
                    Prompt2Render
                  </span>
                  ) and intelligent learning systems (
                  <span className="text-foreground font-medium">AlgoArena</span>
                  ). Mentoring 100+ developers through{" "}
                  <span className="text-primary">HackHub24</span>. Day{" "}
                  <span className="font-mono">160+</span> of a continuous
                  engineering streak.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                  {[
                    { k: "15+", v: "Projects shipped" },
                    { k: "9.2", v: "CGPA @ GCET" },
                    { k: "4×", v: "Hackathon wins" },
                    { k: "160+", v: "Day streak" },
                  ].map((s) => (
                    <div
                      key={s.v}
                      className="rounded-xl border border-border bg-background/40 p-3"
                    >
                      <div className="font-mono text-2xl font-semibold text-foreground">
                        {s.k}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
