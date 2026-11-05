import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const THEME_CHANGE_EVENT = "theme-change";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return "dark";
}

let currentTheme: Theme = getInitialTheme();

function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  }
  try {
    localStorage.setItem("theme", theme);
  } catch {}
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(currentTheme);

  useEffect(() => {
    const onThemeChange = (e: Event) => {
      const detail = (e as CustomEvent<Theme>).detail;
      setThemeState(detail);
    };

    window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
    // Ensure initial DOM state matches
    applyTheme(currentTheme);

    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
    };
  }, []);

  const toggleTheme = (): Theme => {
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    currentTheme = nextTheme;
    applyTheme(nextTheme);
    setThemeState(nextTheme);
    window.dispatchEvent(
      new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: nextTheme })
    );
    return nextTheme;
  };

  return { theme, toggleTheme };
}
