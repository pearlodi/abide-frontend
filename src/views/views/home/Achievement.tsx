
"use client";

import { Flame } from "lucide-react";
import type { AppTheme } from "@/app/theme-provider";
import ThemeCard from "@/src/components/shared/themes/Card";
import ThemeHeading from "@/src/components/shared/themes/Heading";
import ThemeText from "@/src/components/shared/themes/Text";
import Container from "@/src/components/shared/Container";

type AchievementStripProps = {
  theme: AppTheme;
};

export default function AchievementStrip({ theme }: AchievementStripProps) {
  return (
    <Container className="w-full pt-8 pb-20">
      <ThemeCard
        color="yellow"
        textColor="navy"
        shadow="normal"
        padding="none"
        data-theme={theme}
        className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-[18px] rounded-[27px] border-[3px] border-white/65 p-[19px_25px] md:grid-cols-[auto_minmax(0,1fr)_auto]"
      >
        <div className="relative flex size-[62px] shrink-0 items-center justify-center rounded-[18px] bg-coral text-white shadow-[inset_0_-6px_0_rgba(119,45,35,0.15),0_7px_0_rgba(143,92,39,0.18)]">
          <Flame size={28} />

          <span className="absolute -right-1 -bottom-[3px] flex size-[21px] items-center justify-center rounded-full bg-navy text-[8px] font-black text-white">
            7
          </span>
        </div>

        <div className="min-w-0">
          <ThemeText
            variant="small"
            color="coral"
            className="text-[8px] font-black tracking-[0.12em]"
          >
            WEEKLY WIN
          </ThemeText>

          <ThemeHeading
            level={5}
            className="my-[3px] font-heading text-[18px] font-bold"
          >
            Okayyy, look at you growing!
          </ThemeHeading>

          <ThemeText
            variant="small"
            color="navy"
            className="text-[9px] leading-normal opacity-75"
          >
            Seven days of showing up. That is something to celebrate.
          </ThemeText>
        </div>

        <div className="col-span-2 flex gap-[6px] md:col-span-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <i
              className={`flex size-[29px] shrink-0 items-center justify-center rounded-full not-italic text-[7px] ${
                index < 6
                  ? "bg-navy font-black text-white"
                  : "bg-white/45 text-navy"
              }`}
              key={`${day}-${index}`}
            >
              {index < 6 ? "✓" : day}
            </i>
          ))}
        </div>
      </ThemeCard>
    </Container>
  );
}
