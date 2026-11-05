import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "AI & Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "OpenCV",
      "MediaPipe",
      "SHAP (XAI)",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Generative AI & LLMs",
    items: [
      "Gemini API",
      "OpenAI API",
      "LangChain",
      "RAG Systems",
      "Agent Pipelines",
      "Whisper ASR",
      "Kokoro TTS",
      "Vector DBs",
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSockets",
      "Microservices",
      "JWT Auth",
    ],
  },
  {
    title: "Frontend Engineering",
    items: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5 Canvas",
    ],
  },
  {
    title: "Databases & Storage",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Supabase",
      "Cloudinary",
    ],
  },
  {
    title: "DevOps & Tooling",
    items: [
      "Docker",
      "Git & GitHub",
      "FFmpeg",
      "Manim",
      "Linux / Bash",
      "Postman",
      "Vercel",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="02 — Toolkit"
        title={<>The stack behind the <span className="text-primary">systems</span>.</>}
        description="A specialized toolkit curated for architecting intelligent systems — from foundational ML models and LLM agents to robust cloud infrastructure and reactive frontends."
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
