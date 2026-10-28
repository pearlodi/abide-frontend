
"use client";

import {
  BookOpen,
  NotebookPen,
  Users,
  Sparkles,
  UserRound,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import type { AppTheme } from "@/app/theme-provider";
import ThemeCard from "@/src/components/shared/themes/Card";
import ThemeHeading from "@/src/components/shared/themes/Heading";
import ThemeText from "@/src/components/shared/themes/Text";
import Container from "@/src/components/shared/Container";

type AppDestination =
  | "Bible"
  | "Study"
  | "Notes"
  | "Fellowship"
  | "You";

type HomePortalProps = {
  theme: AppTheme;
};

const destinations = [
  {
    destination: "Bible",
    title: "Continue from Psalm 46",
    copy: "Return to your last-read place.",
    icon: BookOpen,
  },
  {
    destination: "Study",
    title: "Study at your pace",
    copy: "Memory Verse, Devotional, and Bible Reading.",
    icon: GraduationCap,
  },
  {
    destination: "Notes",
    title: "Open your reflections",
    copy: "Saved notes, folders, and recent thoughts.",
    icon: NotebookPen,
  },
  {
    destination: "Fellowship",
    title: "Gather with others",
    copy: "Discover, listen, or prepare to host.",
    icon: Users,
  },
  {
    destination: "AI Bible Chat",
    title: "Ask about Scripture",
    copy: "Explore a passage with sample guidance.",
    icon: Sparkles,
  },
  {
    destination: "You",
    title: "Your space",
    copy: "Progress, preferences, plans, and settings.",
    icon: UserRound,
  },
] as const;

const  HomePortal = ({ theme }: HomePortalProps) => {
  const navigate = (destination: string) => {
    window.dispatchEvent(
      new CustomEvent("abide:navigate", { detail: destination }),
    );
  };

  return (
   <Container>
     <ThemeCard
      color="white"
      textColor="navy"
      shadow="none"
      padding="none"
      data-theme={theme}
      className="col-span-full rounded-[27px] border-[3px] border-white p-[25px] shadow-[var(--shadow)]"
    >
      <header>
        <span className="text-[9px] font-black tracking-[0.12em] text-abide-ink-soft">
          YOUR ABIDE
        </span>

        <ThemeHeading
          level={2}
          color="navy"
          className="my-[7px] font-heading text-[29px] leading-tight"
        >
          Where would you like to go?
        </ThemeHeading>

        <ThemeText
          color="ink-soft"
          className="text-[9px] leading-normal"
        >
          Pick up a passage, reflect, gather, or simply see how your
          rhythm is growing.
        </ThemeText>
      </header>

      <div className="mt-5 grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map(({ destination, title, copy, icon: Icon }) => (
          <button
            key={destination}
            type="button"
            onClick={() => navigate(destination)}
            className="grid min-h-[112px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-[17px] border-2 border-transparent bg-[var(--cream)] p-[15px] text-left text-[var(--navy)] transition-transform hover:-translate-y-0.5 hover:border-[var(--navy)] focus-visible:-translate-y-0.5 focus-visible:border-[var(--navy)] focus-visible:outline-none"
          >
            <span className="flex size-11 items-center justify-center rounded-[13px] bg-[var(--lavender)]">
              <Icon size={21} />
            </span>

            <div className="min-w-0">
              <span className="block text-[7px] font-black uppercase text-[var(--coral)]">
                {destination}
              </span>

              <strong className="my-[3px] block font-heading text-[15px]">
                {title}
              </strong>

              <p className="m-0 text-[7px] leading-[1.45] text-[var(--ink-soft)]">
                {copy}
              </p>
            </div>

            <ArrowRight size={17} />
          </button>
        ))}
      </div>
    </ThemeCard>
   </Container>
  );
}

export default HomePortal