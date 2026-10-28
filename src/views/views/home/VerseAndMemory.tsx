"use client";

import { useState } from "react";
import {
  Bookmark,
  Check,
  Copy,
  Heart,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import type { AppTheme } from "@/app/theme-provider";
import ThemeButton from "@/src/components/shared/themes/Button";
import ThemeCard from "@/src/components/shared/themes/Card";
import ThemeHeading from "@/src/components/shared/themes/Heading";
import ThemeText from "@/src/components/shared/themes/Text";
import Container from "@/src/components/shared/Container";

type VerseAndMemoryProps = {
  theme: AppTheme;
};

export default function VerseAndMemory({ theme }: VerseAndMemoryProps) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const copyVerse = async () => {
    try {
      await navigator.clipboard.writeText(
        "Let all that you do be done in love. — 1 Corinthians 16:14"
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Container className="flex flex-col mt-8 gap-5 md:flex-row">
      <ThemeCard
        color="navy-deep"
        textColor="white"
        shadow="theme"
        padding="none"
        data-theme={theme}
        className="relative min-h-[390px] min-w-0 flex-[2] overflow-hidden rounded-[27px] border-[3px] border-white/65 p-[25px]"
      >
        <div className="pointer-events-none absolute -right-[90px] -bottom-[100px] size-[270px] rounded-full border-[28px] border-white/[0.04]" />

        <header className="relative z-[2] flex items-start justify-between">
          <div>
            <ThemeText
              variant="small"
              color="yellow"
              className="font-black tracking-[0.1em]"
            >
              VERSE OF THE DAY
            </ThemeText>
            <ThemeText variant="small" color="ink-soft" className="mt-1">
              A truth to carry
            </ThemeText>
          </div>

          <div className="flex gap-[7px]">
            <ThemeButton
              variant="ghost"
              color="shell"
              textColor="white"
              shadow="none"
              size="sm"
              onClick={copyVerse}
              aria-label="Copy verse"
              className="size-[35px] rounded-xl p-0"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </ThemeButton>

            <ThemeButton
              variant="ghost"
              color="shell"
              textColor="white"
              shadow="none"
              size="sm"
              onClick={() => setSaved(!saved)}
              aria-label={saved ? "Remove saved verse" : "Save verse"}
              aria-pressed={saved}
              className={`size-[35px] rounded-xl p-0 ${
                saved ? "bg-coral" : ""
              }`}
            >
              {saved ? <Heart size={17} /> : <Bookmark size={17} />}
            </ThemeButton>
          </div>
        </header>

        <blockquote className="relative z-[1] my-[65px] font-heading text-[clamp(28px,3vw,39px)] leading-[1.17] tracking-[-0.025em]">
          “Let all that you do be done in{" "}
          <strong className="text-peach">love.</strong>”
        </blockquote>

        <footer className="relative  z-[2] flex items-center justify-between text-[10px] font-extrabold">
          <span>1 Corinthians 16:14</span>
          <Sparkles size={19} className="text-yellow" />
        </footer>

        {copied && (
          <div className="absolute right-5 bottom-[18px] z-[4] rounded-[9px] bg-shell px-[9px] py-[7px] text-[8px] text-navy">
            Copied to clipboard
          </div>
        )}
      </ThemeCard>

      <ThemeCard
        color="white"
        textColor="navy"
        shadow="theme"
        padding="none"
        data-theme={theme}
        className="min-w-0 flex-1 rounded-[27px] border-[3px] border-white/65 p-[23px]"
      >
        <div className="flex items-center">
          <span className="mr-[11px]  animate-pulse  flex size-[42px] shrink-0 items-center justify-center rounded-[13px] bg-yellow shadow-[inset_0_-4px_0_rgba(24,59,75,0.1)]">
            <Sparkles size={20} />
          </span>

          <div className="flex-1">
            <ThemeHeading level={6} className="text-[13px]">
              Memory verse
            </ThemeHeading>
            <ThemeText variant="small" color="ink-soft" className="mt-0.5">
              3 of 5 parts mastered
            </ThemeText>
          </div>

          <span className="rounded-[99px] bg-shell px-2 py-[6px] text-[8px] font-black text-purple">
            +20 XP
          </span>
        </div>

        <ThemeText
          variant="body"
          className="mt-[23px] font-heading text-[19px]"
        >
          “Be still, and know that I am God.”
        </ThemeText>

        <ThemeText variant="small" color="ink-soft">
          Psalm 46:10
        </ThemeText>

        <button
          type="button"
          onClick={() => setRevealed(!revealed)}
          className="mt-[17px] flex w-full cursor-pointer items-center gap-[5px] rounded-[13px] border-0 bg-shell p-2 text-left"
        >
          <span
            className={`rounded-[7px] px-[6px] py-[7px] text-[7px] font-extrabold ${
              revealed ? "bg-mint text-navy" : "bg-raised text-ink-soft"
            }`}
          >
            {revealed ? "Be still" : "•• •••••"}
          </span>

          <span className="rounded-[7px] bg-mint px-[6px] py-[7px] text-[7px] font-extrabold text-navy">
            and know
          </span>

          <span className="rounded-[7px] bg-raised px-[6px] py-[7px] text-[7px] font-extrabold text-ink-soft">
            •••• • ••
          </span>

          <ChevronRight size={16} className="ml-auto shrink-0" />
        </button>
      </ThemeCard>
    </Container>
  );
}
