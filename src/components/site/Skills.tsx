import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "AI & Machine Learning",
    items: ["Python", "PyTorch", "TensorFlow", "Transformers", "LangChain", "RAG", "Vector DBs", "LLM Fine-Tuning", "NLP", "Computer Vision"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Auth", "WebSockets"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "AWS"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="02 — Toolkit"
        title={<>The stack behind the <span className="text-primary">work</span>.</>}
        description="A pragmatic toolbox curated for shipping real systems — from model layer to UI."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium tracking-wide">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
