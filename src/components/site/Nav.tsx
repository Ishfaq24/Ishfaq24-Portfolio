import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Command, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

interface NavProps {
  onOpenCommandPalette?: () => void;
  onOpenRecruiterModal?: (tab: "brief" | "resume") => void;
}

export function Nav({ onOpenCommandPalette, onOpenRecruiterModal }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextTheme = toggleTheme();
    toast.success(
      nextTheme === "light"
        ? "Switched to Light theme ☀️"
        : "Switched to Dark theme 🌙",
      {
        description: `Theme is now set to ${nextTheme}. Click "Hire me" anytime to toggle.`,
        duration: 2500,
      }
    );
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 flex flex-col items-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-border/60 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-background/85 shadow-lg shadow-black/10"
            : "bg-background/45"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 pl-2 font-mono text-sm font-medium tracking-tight"
        >
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground text-[11px] font-bold">
            IB
          </span>
          <span className="hidden sm:inline">ishfaq24.dev</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenRecruiterModal?.("brief")}
            className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary sm:inline-flex cursor-pointer"
          >
            <Briefcase className="h-3.5 w-3.5 text-primary" />
            <span>HR Brief</span>
          </button>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open AI Command Palette"
            title="Ask AI or run quick actions (Ctrl+K)"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground cursor-pointer"
          >
            <Command className="h-3.5 w-3.5 text-primary" />
            <span className="hidden sm:inline">AI</span>
            <kbd className="hidden rounded bg-background/80 px-1 py-0.2 text-[10px] md:inline">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={handleHireMe}
            aria-label={`Toggle theme (currently ${theme})`}
            title={`Click to switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-(--shadow-glow) transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] cursor-pointer"
          >
            <span>Hire me</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
              {theme === "light" ? (
                <Moon className="h-3 w-3" />
              ) : (
                <Sun className="h-3 w-3" />
              )}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mt-2 w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-border/50 bg-background/40 px-3 py-2 text-sm font-medium text-foreground hover:border-primary/40"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex gap-2 pt-3 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenRecruiterModal?.("brief");
                }}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary/15 px-3 py-2 text-xs font-medium text-primary cursor-pointer"
              >
                <Briefcase className="h-3.5 w-3.5" />
                30s HR Executive Brief
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenRecruiterModal?.("resume");
                }}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary px-3 py-2 text-xs font-medium text-foreground cursor-pointer"
              >
                Preview Resume PDF
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
