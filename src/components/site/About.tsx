import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Code2, Brain, Users, GitBranch, Rocket, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Engineering",
    body: "LLM fine-tuning, RAG systems, multi-agent workflows, vector search and evaluation pipelines.",
  },
  {
    icon: Code2,
    title: "Full Stack",
    body: "Production MERN, Next.js and FastAPI services with Postgres, Mongo, Redis and Docker.",
  },
  {
    icon: Users,
    title: "Community",
    body: "Founded HackHub24 — workshops, OSS programs and mentorship for 100+ student engineers.",
  },
];

const facts = [
  { icon: Rocket, label: "15+ projects shipped end-to-end" },
  { icon: Users, label: "100+ developers mentored via HackHub24" },
  { icon: GitBranch, label: "Active open-source contributor" },
  { icon: Sparkles, label: "160+ day coding streak" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="01 — About"
        title={<>An engineer who treats <span className="text-primary">products</span> like products.</>}
        description="Computer Science Engineering student building at the intersection of AI and full-stack — focused on shipping, not just prototyping."
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
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-3 rounded-2xl border border-border bg-card/40 p-6 md:grid-cols-2">
        {facts.map((f) => (
          <div key={f.label} className="flex items-center gap-3 text-sm">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary">
              <f.icon className="h-4 w-4" />
            </div>
            <span className="text-muted-foreground">{f.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
