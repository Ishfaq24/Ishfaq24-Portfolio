import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface RecruiterModalProps {
  open: boolean;
  onClose: () => void;
  initialTab?: "brief" | "resume";
}

export function RecruiterModal({
  open,
  onClose,
  initialTab = "brief",
}: RecruiterModalProps) {
  const [tab, setTab] = useState<"brief" | "resume">(initialTab);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (open) {
      setTab(initialTab);
    }
  }, [open, initialTab]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("ishfaqnazir24@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard", {
      description: "ishfaqnazir24@gmail.com",
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-2xl"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-base font-semibold tracking-tight">
                    Recruiter Executive Brief — Ishfaq Ahmad Bhat
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    30-second verification snapshot & official resume
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex rounded-full border border-border bg-secondary/50 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setTab("brief")}
                    className={`rounded-full px-3 py-1 font-medium transition-colors cursor-pointer ${
                      tab === "brief"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Executive Summary
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("resume")}
                    className={`rounded-full px-3 py-1 font-medium transition-colors cursor-pointer ${
                      tab === "resume"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Resume PDF
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {tab === "brief" ? (
                <div className="space-y-6">
                  {/* Top status bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      </span>
                      <div>
                        <div className="text-sm font-medium">
                          Available for Full-Time, Internships & High-Impact AI Contracts
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Target Roles: AI/ML Engineer · Generative AI Engineer · Full-Stack / Backend Engineer
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      Kashmir, India (Open to Remote / Relocation)
                    </div>
                  </div>

                  {/* 4 Key Pillars for HR */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-border bg-background/50 p-4">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <div className="mt-2 font-mono text-2xl font-semibold">
                        9.2 CGPA
                      </div>
                      <div className="text-xs font-medium text-foreground">
                        B.Tech CSE (2022–2026)
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground">
                        GCET Kashmir · Top Academic Distinction
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-4">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <div className="mt-2 font-mono text-2xl font-semibold">
                        2 Roles
                      </div>
                      <div className="text-xs font-medium text-foreground">
                        Production Engineering
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground">
                        NexGen Developers & Vipthra Technologies
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-4">
                      <Trophy className="h-5 w-5 text-primary" />
                      <div className="mt-2 font-mono text-2xl font-semibold">
                        4× Winner
                      </div>
                      <div className="text-xs font-medium text-foreground">
                        National & Regional Hackathons
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground">
                        GCET 2025, AI Buildathon 2026, MLH, Frontend Frenzy
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/50 p-4">
                      <Award className="h-5 w-5 text-primary" />
                      <div className="mt-2 font-mono text-2xl font-semibold">
                        NVIDIA DLI
                      </div>
                      <div className="text-xs font-medium text-foreground">
                        Certified Deep Learning
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground">
                        + Founder of HackHub24 (100+ devs mentored)
                      </div>
                    </div>
                  </div>

                  {/* Why Hire Ishfaq */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-background/40 p-5">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                        Core AI & Engineering Capabilities
                      </h3>
                      <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            <strong className="text-foreground">Multimodal Agentic Pipelines:</strong> Built{" "}
                            <em>Prompt2Render</em> (Gemini storyboarding + closed-loop pixel layout critic + Kokoro TTS + Whisper forced alignment).
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            <strong className="text-foreground">Explainable ML & FastAPI Inference:</strong> Built{" "}
                            <em>Loan Risk AI</em> with calibrated Scikit-Learn models, SHAP feature attribution, and &lt;40ms scoring latency.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            <strong className="text-foreground">Real-Time Computer Vision:</strong> Engineered{" "}
                            <em>AirCanvas Vision</em> using 21-point MediaPipe hand tracking and WebSocket synchronization.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            <strong className="text-foreground">Full-Stack Production Readiness:</strong> React 19, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, MongoDB, Docker.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl border border-border bg-background/40 p-5">
                      <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                          Direct Contact & Verification Links
                        </h3>
                        <div className="mt-3 space-y-2.5 text-xs">
                          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2">
                            <span className="flex items-center gap-2 text-foreground">
                              <Mail className="h-3.5 w-3.5 text-primary" />
                              ishfaqnazir24@gmail.com
                            </span>
                            <button
                              type="button"
                              onClick={copyEmail}
                              className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 font-mono text-[10px] text-primary hover:bg-primary/20 cursor-pointer"
                            >
                              {copiedEmail ? (
                                <>
                                  <Check className="h-3 w-3" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3 w-3" /> Copy
                                </>
                              )}
                            </button>
                          </div>

                          <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2">
                            <span className="flex items-center gap-2 text-foreground">
                              <Phone className="h-3.5 w-3.5 text-primary" />
                              +91 8493929303
                            </span>
                            <a
                              href="tel:+918493929303"
                              className="font-mono text-[10px] text-muted-foreground hover:text-primary"
                            >
                              Call →
                            </a>
                          </div>

                          <div className="grid grid-cols-2 gap-2 pt-1">
                            <a
                              href="https://github.com/Ishfaq24"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-foreground transition-colors hover:border-primary/50"
                            >
                              <Github className="h-3.5 w-3.5 text-primary" />
                              GitHub (47+ Repos)
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
                            </a>
                            <a
                              href="https://linkedin.com/in/ishfaq24"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-foreground transition-colors hover:border-primary/50"
                            >
                              <Linkedin className="h-3.5 w-3.5 text-primary" />
                              LinkedIn Profile
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-border">
                        <button
                          type="button"
                          onClick={() => setTab("resume")}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/80 cursor-pointer"
                        >
                          <FileText className="h-3.5 w-3.5 text-primary" />
                          Preview Resume Inside Page
                        </button>
                        <a
                          href="/Ishfaq_Ahmad_Bhat.pdf"
                          download="Ishfaq_Ahmad_Bhat_Resume.pdf"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">
                      Viewing official resume (`Ishfaq_Ahmad_Bhat.pdf`)
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href="/Ishfaq_Ahmad_Bhat.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-foreground hover:bg-secondary"
                      >
                        Open in new tab <ExternalLink className="h-3 w-3" />
                      </a>
                      <a
                        href="/Ishfaq_Ahmad_Bhat.pdf"
                        download="Ishfaq_Ahmad_Bhat_Resume.pdf"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                      >
                        <Download className="h-3.5 w-3.5" /> Download PDF
                      </a>
                    </div>
                  </div>
                  <div className="h-[62vh] w-full overflow-hidden rounded-2xl border border-border bg-background">
                    <iframe
                      src="/Ishfaq_Ahmad_Bhat.pdf"
                      title="Ishfaq Ahmad Bhat Resume"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
