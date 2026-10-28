"use client";

import AuthButton from "@/src/components/shared/button/AuthButton";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export type AppTheme = "boy" | "girl" | "monochrome" | "hotpink" | "purple";

const themes: { id: AppTheme; label: string; colors: string[] }[] = [
  { id: "boy", label: "Grounded", colors: ["#183B4B", "#A9D8E6"] },
  { id: "girl", label: "Blush", colors: ["#593D58", "#F7C9D8"] },
  { id: "monochrome", label: "Monochrome", colors: ["#222222", "#E5E5E5"] },
  { id: "hotpink", label: "Hot Pink", colors: ["#E62985", "#FFC1DF"] },
  { id: "purple", label: "Royal Purple", colors: ["#5935A5", "#D8C5FF"] },
];

interface ThemeStepProps {
  theme: AppTheme;
  displayName: string;
  onThemeChange: (theme: AppTheme) => void;
  onComplete: (firstAction: "home" | "memory") => void;
}

export default function ThemeStep({
  theme,
  displayName,
  onThemeChange,
  onComplete,
}: ThemeStepProps) {
  return (
    <div>
      <span className="text-xs font-bold tracking-widest text-[#C56B4E]">
        CHOOSE YOUR VIBE
      </span>

      <h1 className="mt-4 font-heading text-4xl font-bold">
        Make Abide feel like yours.
      </h1>

      <p className="mt-3 leading-7 text-[#6F675E]">
        Every theme is available to everyone. Pick what feels right today.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {themes.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={theme === item.id}
            onClick={() => onThemeChange(item.id)}
            className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 p-4 transition ${
              theme === item.id
                ? "border-[#C56B4E] bg-[#EEE0CF]"
                : "border-[#D7CFC1]"
            }`}
          >
            <span className="flex h-12 w-full overflow-hidden rounded-xl">
              {item.colors.map((color) => (
                <span
                  key={color}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </span>
            <strong className="text-sm">{item.label}</strong>
            {theme === item.id && (
              <Check
                className="absolute right-3 top-3 text-[#C56B4E]"
                size={16}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-[#EEE0CF] p-5">
        <strong>Ready, {displayName}?</strong>
        <p className="mt-1 text-sm text-[#6F675E]">
          Start with one small, achievable step.
        </p>

        <AuthButton
          onClick={() => onComplete("home")}
          className="mt-5 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#1C1B1A] font-bold text-white transition hover:-translate-y-0.5"
        >
          Read today's verse
        </AuthButton>

        <div className="mt-3 text-center flex justify-center items-center shadow-raised min-h-12 w-full rounded-2xl bg-[#F6F0E5] font-bold text-[#1C1B1A] transition hover:bg-[#EAD2C2]">
          <Link
            href={"/home"}
            // onClick={() => onComplete("memory")}
          >
            Try a memory verse
          </Link>
        </div>
      </div>
    </div>
  );
}
