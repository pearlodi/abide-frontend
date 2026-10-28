
"use client";

import { useState } from "react";
import { BookOpen, Check, ChevronRight, Play } from "lucide-react";
import type { AppTheme } from "@/app/theme-provider";
import ThemeButton from "@/src/components/shared/themes/Button";
import ThemeCard from "@/src/components/shared/themes/Card";
import ThemeHeading from "@/src/components/shared/themes/Heading";
import ThemeText from "@/src/components/shared/themes/Text";
import Container from "@/src/components/shared/Container";

export default function DevotionalAndReading({
  theme,
}: {
  theme: AppTheme;
}) {
  const [complete, setComplete] = useState(false);
  const girlTheme = theme === "girl";

  return (
    <Container className="mx-auto -mt-8 grid w-full  grid-cols-1 gap-5  pb-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
      <ThemeCard
        color="peach"
        textColor="navy-deep"
        shadow="none"
        padding="none"
        className={`relative grid min-h-[390px] grid-cols-1 overflow-hidden rounded-[27px] border-[3px] border-white/65 shadow-abide sm:grid-cols-[minmax(0,58%)_minmax(0,42%)] ${
          complete
            ? "bg-[var(--home-feature-complete)]"
            : "bg-[var(--home-feature-bg)]"
        }`}
      >
        <div className="relative z-[2] px-6 py-8 sm:py-[31px] sm:pl-8 sm:pr-[10px]">
          <div className="flex items-center gap-[9px]">
            <span className="text-[9px] font-black tracking-[0.12em]">
              {girlTheme ? "TODAY’S OPEN HEAVENS" : "DAILY DEVOTIONAL"}
            </span>
            <span className="rounded-full bg-[var(--home-feature-pill)] px-2 py-[5px] text-[8px]">
              5 min
            </span>
          </div>

          {complete ? (
            <>
              <div className="mt-[18px] flex size-12 items-center justify-center rounded-full bg-[var(--white)] shadow-[0_6px_0_rgba(24,59,75,0.12)]">
                <Check size={26} />
              </div>
              <ThemeHeading
                level={2}
                color="navy"
                className="mt-[13px] mb-[10px] text-[39px] leading-[0.98] tracking-[-0.035em]"
              >
                You showed up today.
                <br />
                That counts.
              </ThemeHeading>
              <ThemeText
                color="navy"
                className="max-w-[360px] text-xs leading-[1.55]"
              >
                Take that peace with you. You can come back to this truth any
                time.
              </ThemeText>
              <ThemeButton
                color="shell"
                textColor="navy"
                shadow="normal"
                size="sm"
                onClick={() => setComplete(false)}
                className="mt-[18px] min-h-[44px] px-4 text-[11px]"
              >
                Read it again
              </ThemeButton>
            </>
          ) : (
            <>
              <ThemeHeading
                level={2}
                color="navy-deep"
                className="mt-[25px] mb-[13px] text-[clamp(38px,4vw,52px)] leading-[0.98] tracking-[-0.035em]"
              >
                {girlTheme ? "Grace for right" : "Peace for the"}
                <br />
                {girlTheme ? "now." : "in-between."}
              </ThemeHeading>
              <ThemeText
                color="navy"
                className="max-w-[360px] text-xs leading-[1.55]"
              >
                You do not need every answer to trust the One who sees the whole
                story.
              </ThemeText>
              <div className="my-[17px] flex items-center gap-[7px] text-[10px] font-extrabold">
                <BookOpen size={17} />
                Psalm 46
              </div>
              <ThemeButton
                color="navy"
                textColor="white"
                shadow="theme"
                size="sm"
                onClick={() => setComplete(true)}
                className="min-h-[44px] px-4 text-[11px]"
              >
                <Play size={17} />
                Start today’s devotional
              </ThemeButton>
            </>
          )}
        </div>

        <div className="relative min-h-[140px] overflow-hidden rounded-[45%_0_0_45%] bg-[var(--home-feature-scene)]">
          <span className="absolute top-[35px] right-[22px] z-[4] text-[22px] text-white">
            ✦
          </span>
          <span className="absolute bottom-[30px] left-5 z-[4] text-[31px] text-white">
            ✦
          </span>
        </div>
      </ThemeCard>

      <ThemeCard
        color="white"
        textColor="navy"
        shadow="none"
        padding="none"
        className="rounded-[27px] z-100 border-[3px] border-white/65 bg-abide-surface p-[23px] shadow-abide"
      >
        <div className="flex items-center">
          <span className="mr-[11px] flex size-[42px] shrink-0 items-center justify-center rounded-[13px] bg-abide-blue shadow-[inset_0_-4px_0_rgba(24,59,75,0.1)]">
            <BookOpen size={20} />
          </span>
          <div className="flex-1">
            <ThemeHeading
              level={3}
              color="navy"
              className="text-[13px] font-bold"
            >
              Bible journey
            </ThemeHeading>
            <ThemeText
              color="ink-soft"
              className="mt-0.5 text-[9px] leading-normal"
            >
              30 Days Through Psalms
            </ThemeText>
          </div>
          <button
            type="button"
            aria-label="Open Bible journey"
            className="cursor-pointer border-0 bg-transparent"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-[23px] grid grid-cols-1 items-center gap-[21px] sm:grid-cols-[125px_minmax(0,1fr)]">
          <div className="relative flex size-[118px] flex-col items-center justify-center rounded-full bg-[conic-gradient(var(--coral)_0_40%,#e6ecea_40%)]">
            <div className="absolute size-[82px] rounded-full bg-[var(--white)] shadow-[inset_0_3px_9px_rgba(24,59,75,0.08)]" />
            <span className="relative z-[2] font-heading text-2xl font-bold">
              40%
            </span>
            <span className="relative z-[2] text-[7px] text-[var(--ink-soft)]">
              complete
            </span>
          </div>

          <div>
            <span className="block text-[8px] font-black tracking-[0.1em] text-[var(--coral)]">
              DAY 12
            </span>
            <ThemeHeading
              level={3}
              color="navy"
              className="my-[3px] text-xl font-bold"
            >
              Psalm 46–48
            </ThemeHeading>
            <ThemeText
              color="ink-soft"
              className="text-[9px] leading-normal"
            >
              Peace when life feels loud
            </ThemeText>
            <ThemeButton
              color="shell"
              textColor="navy"
              shadow="normal"
              size="sm"
              className="mt-[13px] min-h-9 px-3 text-[9px]"
            >
              <Play size={15} />
              Keep reading
            </ThemeButton>
          </div>
        </div>
      </ThemeCard>
    </Container>
  );
}
