
"use client";

import { useState } from "react";
import { useTheme } from "@/app/theme-provider";

const themes = [
  {
    id: "girl",
    name: "Girl",
    description: "Soft & dreamy",
    gradient: "from-[#f1b8b5] via-[#cbb9df] to-[#f7ebe5]",
  },
  {
    id: "boy",
    name: "Boy",
    description: "Fresh & calm",
    gradient: "from-[#78b6bd] via-[#a9d8e6] to-[#d9edf0]",
  },
  {
    id: "monochrome",
    name: "Monochrome",
    description: "Clean & classic",
    gradient: "from-[#777777] via-[#d8d8d8] to-[#f3f3f3]",
  },
  {
    id: "hotpink",
    name: "Hot Pink",
    description: "Bold & playful",
    gradient: "from-[#ff1493] via-[#f1b5db] to-[#ffe6f4]",
  },
  {
    id: "purple",
    name: "Purple",
    description: "Peaceful & magical",
    gradient: "from-[#6d28d9] via-[#c7b6ee] to-[#eee7fb]",
  },
] as const;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const selectedTheme = themes.find((item) => item.id === theme) ?? themes[1];

  return (
    <div className="relative w-64">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 rounded-2xl border border-border bg-surface p-3 text-left shadow-theme transition hover:-translate-y-0.5"
      >
        <div
          className={`h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br ${selectedTheme.gradient}`}
        />

        <div className="min-w-0 flex-1">
          <p className="text-xs text-text-muted">Current theme</p>
          <p className="font-semibold text-text-dark">
            {selectedTheme.name}
          </p>
        </div>

        <span
          className={`text-text-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-2xl border border-border bg-surface p-2 shadow-raised">
          {themes.map((option) => {
            const selected = theme === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setTheme(option.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition ${
                  selected
                    ? "bg-bg-light"
                    : "hover:bg-bg-light"
                }`}
              >
                <div
                  className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${option.gradient}`}
                />

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-text-dark">
                    {option.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {option.description}
                  </p>
                </div>

                {selected && (
                  <span className="font-bold text-text-dark">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
