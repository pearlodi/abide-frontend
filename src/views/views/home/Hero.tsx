
"use client";

import { useTheme } from "@/app/theme-provider";
import ThemeCard from "@/src/components/shared/themes/Card";
import ThemeHeading from "@/src/components/shared/themes/Heading";
import ThemeText from "@/src/components/shared/themes/Text";
import { Flame, Sparkles } from "lucide-react";
import Image from "next/image";
import { useOnboardingDraft } from "../../auth/signup/use-onboarding-draft";
import Container from "@/src/components/shared/Container";
import { mockHomeData } from "@/data/home";

const Hero = () => {
  const { theme } = useTheme();
  const girlTheme = theme === "girl";
  const { value: draft } = useOnboardingDraft();

  const { greeting, stats, avatarMood } = mockHomeData;

  return (
    <Container className="relative grid min-h-[410px] grid-cols-1 overflow-hidden bg-navy pt-8 text-white lg:grid-cols-2">
      <div className="relative z-10 max-w-[580px] self-center pb-20">
        <ThemeText
          color="yellow"
          className="text-[10px] font-extrabold tracking-[0.14em]"
        >
          {greeting.formattedDate}
        </ThemeText>

        <ThemeHeading
          level={1}
          color="white"
          className="mt-4 mb-5 text-5xl leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Hey {draft.displayName || greeting.firstName},
          <br />
          <strong className="font-semibold text-blue">
            {stats.currentStreak
              ? greeting.headline
              : "welcome back—no pressure."}
          </strong>
        </ThemeHeading>

        <ThemeText
          color="white"
          className="max-w-[480px] text-sm leading-relaxed opacity-75 sm:text-base"
        >
          {girlTheme
            ? "Your quiet time, your pace. Let’s make a little room for grace today."
            : greeting.description}
        </ThemeText>

        <div className="mt-6 flex flex-wrap gap-3">
          <ThemeCard
            color="shell"
            textColor="navy"
            shadow="theme"
            className="flex min-w-[135px] items-center gap-3 border border-blue/30 px-3 py-3"
          >
            <Flame
              size={20}
              className="shrink-0 text-coral"
              aria-hidden="true"
            />
            <div>
              <ThemeText className="block text-xs leading-none font-bold">
                {stats.currentStreak} days
              </ThemeText>
              <ThemeText className="mt-1 block text-[10px] leading-tight opacity-70">
                Current streak
              </ThemeText>
            </div>
          </ThemeCard>

          <ThemeCard
            color="shell"
            textColor="navy"
            shadow="theme"
            className="flex min-w-[135px] items-center gap-3 border border-blue/30 px-3 py-3"
          >
            <Sparkles
              size={20}
              className="shrink-0 text-yellow"
              aria-hidden="true"
            />
            <div>
              <ThemeText className="block text-xs leading-none font-bold">
                {stats.monthlyXp} XP
              </ThemeText>
              <ThemeText className="mt-1 block text-[10px] leading-tight opacity-70">
                This month
              </ThemeText>
            </div>
          </ThemeCard>
        </div>
      </div>

      <div className="relative mx-auto h-[320px] w-full max-w-[400px] self-end sm:h-[360px]">
        <div className="absolute top-3 left-1/2 h-[270px] w-[270px] -translate-x-1/2 rounded-full bg-shell sm:h-[320px] sm:w-[320px]" />

        <div className="absolute left-0 z-20 flex -rotate-6 animate-bounce items-center gap-2 rounded-2xl bg-yellow px-3 py-3 text-[9px] font-black tracking-wide text-navy shadow-[0_7px_0_#a7873e,0_12px_20px_rgba(6,26,34,0.3)] sm:left-1">
          <Sparkles size={16} aria-hidden="true" />
          {girlTheme ? "GRACE LOOKS GOOD ON YOU!" : "BRO, LOOK AT YOU GO!"}
        </div>

        <div className="absolute top-7 left-1/2 z-10 h-[270px] w-[270px] -translate-x-1/2 overflow-hidden rounded-full sm:h-[320px] sm:w-[320px]">
          <Image
            src={`/${draft.avatarId}s.jpg`}
            alt={`${draft.displayName || greeting.firstName}'s avatar`}
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>

        <div className="absolute right-0 bottom-10 z-20 rotate-9 scale-75 sm:right-[-5px] sm:scale-90">
          {/* Add your existing MiniBible component here */}
        </div>
      </div>

      <div className="absolute bottom-[-90px] left-[-5%] h-[120px] w-[110%] rounded-[50%_50%_0_0] bg-shell" />
    </Container>
  );
};

export default Hero;
