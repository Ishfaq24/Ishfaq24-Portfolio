import { Bot } from "lucide-react";
import { useEffect, useState } from "react";
import { About } from "@/components/site/About";
import { Achievements } from "@/components/site/Achivements";
import { CommandPalette } from "@/components/site/CommandPalette";
import { Contact } from "@/components/site/Contact";
import { Experience } from "@/components/site/Experience";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Projects } from "@/components/site/Projects";
import { RecruiterModal } from "@/components/site/RecruiterModal";
import { Skills } from "@/components/site/Skills";
import { Testimonials } from "@/components/site/Testimonials";
import { Writing } from "@/components/site/Writing";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/useTheme";

export function App() {
  const { theme } = useTheme();
  const [cmdOpen, setCmdOpen] = useState(false);
  const [recruiterModal, setRecruiterModal] = useState<{
    open: boolean;
    tab: "brief" | "resume";
  }>({ open: false, tab: "brief" });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      } else if (e.key === "Escape" && cmdOpen) {
        setCmdOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [cmdOpen]);

  const openRecruiterModal = (tab: "brief" | "resume" = "brief") => {
    setRecruiterModal({ open: true, tab });
  };

  return (
    <>
      <main className="relative min-h-screen overflow-x-clip bg-background text-foreground transition-colors duration-300">
        <Nav
          onOpenCommandPalette={() => setCmdOpen(true)}
          onOpenRecruiterModal={openRecruiterModal}
        />
        <Hero
          onOpenRecruiterModal={openRecruiterModal}
          onOpenCommandPalette={() => setCmdOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Writing />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />

        {/* Floating Quick AI Assistant Pill */}
        <button
          type="button"
          onClick={() => setCmdOpen(true)}
          aria-label="Open Portfolio AI Assistant"
          className="fixed bottom-5 left-5 z-30 flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-3.5 py-2 text-xs font-medium text-foreground shadow-lg backdrop-blur-xl transition-all hover:scale-[1.03] hover:border-primary cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <Bot className="h-3.5 w-3.5 text-primary" />
          <span>Ask AI about Ishfaq</span>
          <kbd className="hidden rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
            ⌘K
          </kbd>
        </button>
      </main>

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        onOpenRecruiterModal={openRecruiterModal}
      />

      <RecruiterModal
        open={recruiterModal.open}
        onClose={() => setRecruiterModal((prev) => ({ ...prev, open: false }))}
        initialTab={recruiterModal.tab}
      />

      <Toaster richColors position="bottom-right" theme={theme} />
    </>
  );
}
