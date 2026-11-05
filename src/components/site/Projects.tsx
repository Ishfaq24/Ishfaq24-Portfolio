import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Cpu, Github, Layers } from "lucide-react";
import { useState } from "react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    n: "01",
    name: "Prompt2Render",
    tag: "Generative AI · Multimodal Agentic Pipeline",
    blurb:
      "An end-to-end multimodal agent pipeline compiling narrated, code-animated technical explainer videos with frame accuracy. Orchestrates Gemini to storyboard against a vector drawing engine (scenekit / Manim), featuring an autonomous closed-loop layout critic that parses rendered pixel geometry to eliminate spatial collisions, paired with Kokoro neural TTS, Whisper forced alignment, and automated 9:16 social clipping.",
    metrics: [
      { k: "Critic", v: "pixel-geometry spatial audit" },
      { k: "Audio", v: "Whisper forced alignment" },
      { k: "Pipeline", v: "Gemini + Manim + FFmpeg" },
    ],
    stack: [
      "Python",
      "Gemini API",
      "Manim",
      "Whisper ASR",
      "Kokoro TTS",
      "FFmpeg",
      "Pytest",
    ],
    pipeline: [
      "script.md",
      "Kokoro Neural TTS",
      "Whisper Word-Align",
      "Gemini Storyboard",
      "Pixel-Geometry Critic",
      "Manim + FFmpeg Mux",
    ],
    architectureNote:
      "Rather than allowing an LLM to write arbitrary, error-prone animation code, Prompt2Render constrains storyboarding to a deterministic scene-kit API and runs an automated pixel-geometry critic on rendered frames—detecting bounding-box collisions and off-screen text to trigger self-correction before final FFmpeg encoding.",
    github: "https://github.com/Ishfaq24",
    demo: "https://github.com/Ishfaq24",
  },
  {
    n: "02",
    name: "AlgoArena",
    tag: "AI EdTech · Intelligent Learning System",
    blurb:
      "An intelligent algorithmic learning and interview preparation platform featuring AI-powered tutoring, real-time code evaluation, adaptive problem difficulty, and automated concept breakdowns. Built to guide developers from foundational data structures to competitive engineering placements.",
    metrics: [
      { k: "AI Tutor", v: "context-aware code guidance" },
      { k: "Execution", v: "sandboxed multi-language runner" },
      { k: "Adaptive", v: "dynamic difficulty engine" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "LangChain",
      "PostgreSQL",
      "Docker",
    ],
    pipeline: [
      "Arena Code Editor",
      "FastAPI Gateway",
      "Sandboxed Runner",
      "AST & Test Harness",
      "LangChain RAG Tutor",
      "Skill Rating Engine",
    ],
    architectureNote:
      "Executes user code submissions inside isolated sandboxes while feeding abstract syntax tree (AST) context and failing test cases into a LangChain RAG pipeline—delivering Socratic debugging hints without spoiling full solutions.",
    github: "https://github.com/Ishfaq24/AlgoArena",
    demo: "https://github.com/Ishfaq24/AlgoArena",
  },
  {
    n: "03",
    name: "Loan Risk AI",
    tag: "Machine Learning · Explainable AI (XAI)",
    blurb:
      "An end-to-end financial risk assessment platform predicting loan approvals with calibrated confidence scores, risk tiers, and transparent feature attribution via SHAP values. Features a real-time FastAPI inference microservice with automated data validation pipelines and an interactive underwriting dashboard.",
    metrics: [
      { k: "XAI", v: "SHAP feature attribution" },
      { k: "Latency", v: "<40ms FastAPI inference" },
      { k: "Pipeline", v: "automated risk scoring" },
    ],
    stack: [
      "Python",
      "Scikit-Learn",
      "FastAPI",
      "SHAP",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    pipeline: [
      "Applicant Payload",
      "Pydantic Schema Gate",
      "Feature Pipeline",
      "Calibrated ML Model",
      "SHAP TreeExplainer",
      "Risk Tier Dashboard",
    ],
    architectureNote:
      "Solves the black-box ML problem in credit underwriting by computing real-time local SHAP (SHapley Additive exPlanations) values in under 40ms per request, surfacing exact positive and negative risk drivers alongside calibrated probabilities.",
    github: "https://github.com/Ishfaq24/loan-approval-system",
    demo: "https://loan-approval-system-pink.vercel.app",
  },
  {
    n: "04",
    name: "AirCanvas Vision",
    tag: "Computer Vision · Real-Time HCI",
    blurb:
      "An AI-powered touchless virtual whiteboard powered by real-time hand gesture recognition for in-air writing and gesture-controlled drawing. Leverages MediaPipe 21-landmark tracking and OpenCV with WebSocket synchronization, enabling low-latency multi-user collaborative canvas interactions without specialized hardware.",
    metrics: [
      { k: "CV Tracking", v: "21-point MediaPipe landmarks" },
      { k: "Latency", v: "<25ms canvas rendering" },
      { k: "Sync", v: "multi-client WebSockets" },
    ],
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "React",
      "Node.js",
      "WebSockets",
      "HTML5 Canvas",
    ],
    pipeline: [
      "30 FPS Camera Feed",
      "OpenCV Frame Prep",
      "MediaPipe 21-Keypoint",
      "EMA Jitter Filter",
      "Gesture State Machine",
      "WebSocket Room Sync",
    ],
    architectureNote:
      "Applies exponential moving average (EMA) coordinate smoothing over MediaPipe's 21 3D hand landmarks to eliminate camera jitter, using Euclidean finger-distance thresholds to switch deterministically between draw, hover, and erase states.",
    github: "https://github.com/Ishfaq24/Virtual-Writing-Board",
    demo: "https://github.com/Ishfaq24/Virtual-Writing-Board",
  },
  {
    n: "05",
    name: "MindVault",
    tag: "AI Knowledge Base · Semantic Search & RAG",
    blurb:
      "An intelligent second-brain workspace and knowledge retrieval engine. Empowers developers to organize, connect, and interact with notes, technical documents, and code snippets through dense vector embeddings, hybrid semantic search, and LLM-driven grounded question answering.",
    metrics: [
      { k: "Vector Search", v: "hybrid dense retrieval" },
      { k: "RAG Engine", v: "grounded contextual Q&A" },
      { k: "Sync", v: "real-time type-safe state" },
    ],
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Vector DB",
      "Gemini API",
      "Tailwind CSS",
    ],
    pipeline: [
      "Document Ingestion",
      "Semantic Chunking",
      "Vector Embeddings",
      "Hybrid Search Index",
      "Context Window Assembly",
      "Grounded LLM Synthesis",
    ],
    architectureNote:
      "Combines dense semantic embeddings with lexical keyword matching so both exact code symbols and conceptual natural-language queries retrieve high-relevance chunks with zero hallucinated citations.",
    github: "https://github.com/Ishfaq24/MindVault",
    demo: "https://mindvaultfrontend.vercel.app",
  },
];

export function Projects() {
  const [expandedArch, setExpandedArch] = useState<string | null>("01");

  const toggleArch = (n: string) => {
    setExpandedArch((prev) => (prev === n ? null : n));
  };

  return (
    <Section id="work">
      <SectionHeader
        eyebrow="03 — Featured Projects"
        title={
          <>
            Engineering products with{" "}
            <span className="text-primary">
              Generative AI, ML & Scalable Systems.
            </span>
          </>
        }
        description="A showcase of end-to-end multimodal agent pipelines, explainable machine learning systems, computer vision applications, and intelligent cloud platforms. Click 'Architecture X-Ray' on any project to inspect its system pipeline."
      />

      <div className="space-y-5">
        {projects.map((p, i) => {
          const isExpanded = expandedArch === p.n;
          return (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/50 md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-start">
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

                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {p.name}
                    </h3>
                    {p.n === "01" && (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                        Flagship Pipeline
                      </span>
                    )}
                  </div>

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

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}

                    <button
                      type="button"
                      onClick={() => toggleArch(p.n)}
                      className={`ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] transition-all cursor-pointer ${
                        isExpanded
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                      }`}
                    >
                      <Layers className="h-3 w-3" />
                      {isExpanded ? "Hide Architecture" : "Architecture X-Ray"}
                    </button>
                  </div>

                  {/* Interactive System Architecture X-Ray */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 rounded-xl border border-primary/30 bg-background/60 p-4">
                          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                            <Cpu className="h-3.5 w-3.5" />
                            System Pipeline & Engineering Architecture
                          </div>

                          <div className="mt-3 flex flex-wrap items-center gap-1.5">
                            {p.pipeline.map((step, idx) => (
                              <div key={step} className="flex items-center gap-1.5">
                                <span className="rounded-lg border border-border bg-card px-2.5 py-1.5 font-mono text-[11px] font-medium text-foreground shadow-2xs">
                                  <span className="mr-1.5 text-primary">
                                    {idx + 1}.
                                  </span>
                                  {step}
                                </span>
                                {idx < p.pipeline.length - 1 && (
                                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/70" />
                                )}
                              </div>
                            ))}
                          </div>

                          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                            <strong className="text-foreground">
                              Engineering Decision:
                            </strong>{" "}
                            {p.architectureNote}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-3">
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View live demo for ${p.name}`}
                      title="Open Live Project / Demo"
                      className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`View GitHub repository for ${p.name}`}
                    title="View Source on GitHub"
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
