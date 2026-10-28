
"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type AppTheme =
  | "boy"
  | "girl"
  | "monochrome"
  | "hotpink"
  | "purple";

type ThemeContextType = {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
};

const themes: AppTheme[] = [
  "boy",
  "girl",
  "monochrome",
  "hotpink",
  "purple",
];

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<AppTheme>("boy");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = document.documentElement.dataset.theme;

    if (savedTheme && themes.includes(savedTheme as AppTheme)) {
      setTheme(savedTheme as AppTheme);
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("abide-theme", theme);
  }, [theme, loaded]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-h-screen">{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
