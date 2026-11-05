import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Code2,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Moon,
  Search,
  Sparkles,
  Sun,
  Terminal,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/hooks/useTheme";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  onOpenRecruiterModal: (tab: "brief" | "resume") => void;
}

const AI_PRESETS = [
  {
    q: "Why should we hire Ishfaq as an AI Engineer?",
    a: "Ishfaq combines strong theoretical foundations (9.2 CGPA in B.Tech CSE at GCET Kashmir, NVIDIA Deep Learning Certified) with real-world production engineering across two software engineering roles (NexGen Developers & Vipthra Technologies). Unlike candidates who only build wrapper demos, he architects complex multimodal pipelines like Prompt2Render (integrating Gemini, closed-loop pixel geometry critics, Kokoro neural TTS, and Whisper forced alignment) and explainable ML microservices with SHAP and FastAPI.",
  },
  {
    q: "How does Prompt2Render work under the hood?",
    a: "Prompt2Render is an end-to-end agentic pipeline that compiles narrated, code-animated explainer videos with frame accuracy:\n1. Voice & Alignment: Synthesizes speech via local Kokoro neural TTS and performs word-level forced alignment using Whisper ASR.\n2. Storyboarding: Orchestrates Gemini against a constrained scene-kit / Manim drawing API.\n3. Closed-Loop Layout Critic: Audits rendered PNG frames for pixel-geometry overlaps and off-frame text clipping, automatically self-correcting before encoding.\n4. Assembly: Frame-exact FFmpeg muxing plus automated 9:16 vertical social clip extraction.",
  },
  {
    q: "What is Ishfaq's production backend & full-stack experience?",
    a: "Ishfaq has worked as a Software Engineer at NexGen Developers and Vipthra Technologies, where he engineered high-throughput RESTful APIs using Node.js, Express, and FastAPI, implemented JWT authentication & RBAC, optimized PostgreSQL and MongoDB queries for sub-100ms latency, and integrated ML inference endpoints with comprehensive unit test coverage.",
  },
  {
    q: "Tell me about his hackathon wins & leadership.",
    a: "Ishfaq is a 4× Hackathon Winner: 1st Place at GCET Kashmir Hackathon 2025, Winner of AI Buildathon 2026 (GDC Anantnag), Winner of Frontend Frenzy 2024, and Winner of MLH High School Hackathon 2023. He also founded HackHub24, mentoring 100+ student developers across 12+ workshops and guiding 30+ first-time open-source pull requests.",
  },
];

function generateCustomAIResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("prompt2render") || q.includes("video") || q.includes("manim")) {
    return AI_PRESETS[1].a;
  }
  if (q.includes("hire") || q.includes("why") || q.includes("strength") || q.includes("best")) {
    return AI_PRESETS[0].a;
  }
  if (q.includes("experience") || q.includes("intern") || q.includes("work") || q.includes("company") || q.includes("nexgen") || q.includes("vipthra")) {
    return AI_PRESETS[2].a;
  }
  if (q.includes("hackathon") || q.includes("award") || q.includes("hackhub") || q.includes("community") || q.includes("cgpa") || q.includes("education")) {
    return AI_PRESETS[3].a;
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("phone")) {
    return "You can reach Ishfaq directly at ishfaqnazir24@gmail.com or +91 8493929303. His GitHub is github.com/Ishfaq24 and LinkedIn is linkedin.com/in/ishfaq24. He responds within 24 hours.";
  }
  if (q.includes("stack") || q.includes("skill") || q.includes("tech") || q.includes("language")) {
    return "Ishfaq's core stack spans Python, PyTorch, TensorFlow, Scikit-Learn, OpenCV, MediaPipe, SHAP (XAI), Gemini/OpenAI APIs, LangChain, RAG, Whisper, FastAPI, Node.js, React 19, Next.js, TypeScript, PostgreSQL, MongoDB, Redis, and Docker.";
  }
  return "Ishfaq Ahmad Bhat is an AI/ML & Full-Stack Engineer (9.2 CGPA, B.Tech CSE) experienced in building multimodal agentic systems (Prompt2Render), explainable ML microservices (Loan Risk AI), real-time computer vision apps (AirCanvas), and RAG platforms (AlgoArena & MindVault). Use the quick actions below to preview his resume or reach out directly!";
}

export function CommandPalette({
  open,
  onClose,
  onOpenRecruiterModal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeAnswer, setActiveAnswer] = useState<{ q: string; a: string } | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (!activeAnswer) {
      setDisplayedText("");
      return;
    }
    let idx = 0;
    const full = activeAnswer.a;
    setDisplayedText("");
    const timer = setInterval(() => {
      idx += 4;
      setDisplayedText(full.slice(0, idx));
      if (idx >= full.length) clearInterval(timer);
    }, 12);
    return () => clearInterval(timer);
  }, [activeAnswer]);

  const handleAsk = (qText: string, aText?: string) => {
    const answer = aText ?? generateCustomAIResponse(qText);
    setActiveAnswer({ q: qText, a: answer });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    handleAsk(query.trim());
  };

  const jumpTo = (hash: string) => {
    onClose();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ishfaqnazir24@gmail.com");
    toast.success("Email copied to clipboard", {
      description: "ishfaqnazir24@gmail.com",
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl"
          >
            {/* Search / Ask Input */}
            <form
              onSubmit={handleFormSubmit}
              className="flex items-center gap-3 border-b border-border px-4 py-3.5"
            >
              <Search className="h-4 w-4 shrink-0 text-primary" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask AI about Ishfaq (e.g. 'Why hire Ishfaq?', 'Prompt2Render') or search commands..."
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {query.trim() && (
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-primary px-2.5 py-1 font-mono text-[11px] font-medium text-primary-foreground cursor-pointer"
                >
                  Ask AI ↵
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground hover:bg-secondary cursor-pointer"
              >
                ESC
              </button>
            </form>

            <div className="max-h-[70vh] overflow-y-auto p-4 space-y-5">
              {/* Active AI Response Box */}
              {activeAnswer && (
                <div className="rounded-xl border border-primary/40 bg-primary/5 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
                      <Bot className="h-3.5 w-3.5" /> Portfolio AI Assistant
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveAnswer(null)}
                      className="text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="mt-1.5 text-xs font-semibold text-foreground">
                    “{activeAnswer.q}”
                  </div>
                  <p className="mt-2 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
                    {displayedText}
                  </p>
                </div>
              )}

              {/* AI Prompts for Recruiters */}
              <div>
                <div className="mb-2 flex items-center gap-1.5 px-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                  <Sparkles className="h-3 w-3" /> Ask Portfolio AI (Instant Recruiter Q&A)
                </div>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  {AI_PRESETS.map((item) => (
                    <button
                      key={item.q}
                      type="button"
                      onClick={() => handleAsk(item.q, item.a)}
                      className="flex items-center justify-between gap-2 rounded-xl border border-border/70 bg-background/40 px-3 py-2.5 text-left text-xs text-foreground transition-all hover:border-primary/50 hover:bg-secondary/60 cursor-pointer"
                    >
                      <span className="line-clamp-1">{item.q}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Recruiter Fast Actions */}
              <div>
                <div className="mb-2 px-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Recruiter Quick Actions
                </div>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenRecruiterModal("brief");
                    }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs hover:bg-secondary cursor-pointer"
                  >
                    <Briefcase className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">
                        Open 30s Recruiter Executive Brief
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        CGPA, roles, hackathons & role readiness
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenRecruiterModal("resume");
                    }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs hover:bg-secondary cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">
                        Preview Official Resume PDF
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        View in-browser or download PDF
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs hover:bg-secondary cursor-pointer"
                  >
                    <Copy className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">
                        Copy Email Address
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        ishfaqnazir24@gmail.com
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const next = toggleTheme();
                      toast.success(
                        next === "light"
                          ? "Switched to Light theme ☀️"
                          : "Switched to Dark theme 🌙"
                      );
                    }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs hover:bg-secondary cursor-pointer"
                  >
                    {theme === "light" ? (
                      <Moon className="h-4 w-4 text-primary" />
                    ) : (
                      <Sun className="h-4 w-4 text-primary" />
                    )}
                    <div>
                      <div className="font-medium text-foreground">
                        Toggle {theme === "light" ? "Dark" : "Light"} Theme
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        Switch between dark and crisp white canvas
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Navigation & Socials */}
              <div className="grid gap-4 sm:grid-cols-2 pt-1 border-t border-border">
                <div>
                  <div className="mb-1.5 px-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Jump to Section
                  </div>
                  <div className="space-y-1">
                    {[
                      { label: "01 — About & Facts", hash: "#about", icon: User },
                      { label: "02 — Technical Toolkit", hash: "#skills", icon: Terminal },
                      { label: "03 — Featured AI Projects", hash: "#work", icon: Code2 },
                      { label: "04 — Engineering Experience", hash: "#experience", icon: Briefcase },
                      { label: "08 — Direct Contact", hash: "#contact", icon: Mail },
                    ].map((nav) => (
                      <button
                        key={nav.hash}
                        type="button"
                        onClick={() => jumpTo(nav.hash)}
                        className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground cursor-pointer"
                      >
                        <nav.icon className="h-3.5 w-3.5 text-primary" />
                        {nav.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-1.5 px-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    External Profiles & Links
                  </div>
                  <div className="space-y-1">
                    <a
                      href="https://github.com/Ishfaq24"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="h-3.5 w-3.5 text-primary" /> GitHub (@Ishfaq24)
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://linkedin.com/in/ishfaq24"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Linkedin className="h-3.5 w-3.5 text-primary" /> LinkedIn (/in/ishfaq24)
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="/Ishfaq_Ahmad_Bhat.pdf"
                      download="Ishfaq_Ahmad_Bhat_Resume.pdf"
                      className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="h-3.5 w-3.5 text-primary" /> Download Resume PDF
                      </span>
                      <span className="font-mono text-[10px] text-primary">PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
