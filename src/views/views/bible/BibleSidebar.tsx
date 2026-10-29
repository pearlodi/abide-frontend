"use client";

import ThemeCard from "@/src/components/shared/themes/Card";
import { ChevronRight, Heart, Sparkles } from "lucide-react";
export type SavedVerse = {
  key: string;
  book: string;
  chapter: number;
  verse: number;
};

const BibleSidebar = ({
  savedVerses,
  onSelectVerse,
}: {
  savedVerses: SavedVerse[];
  onSelectVerse: (verse: SavedVerse) => void;
}) => {
  return (
    <aside className="sticky top-4 grid gap-4 lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1">
      {" "}
      <div>
        <img src={"/avatars/2s/2sread.png"} className="w-60" />
        <ThemeCard
          border={true}
          shadow="normal"
          color="lavender"
          className="relative min-h-58.75 overflow-hidden "
        >
          <div className="absolute -right-3 -top-2.5 flex size-25 rotate-[8deg] items-center justify-center rounded-[30px] bg-white/30 text-5xl opacity-80">
            📖
          </div>
          <Sparkles size={20} className="relative z-2 text-(--coral)" />
          <strong className="relative z-2 mt-4.75 block max-w-37.5 font-heading text-[19px] font-bold">
            One verse at a time.
          </strong>
          <p className="relative z-2 mt-1 text-[10px] text-(--ink-soft)">
            You’re doing beautifully ✨
          </p>
        </ThemeCard>
      </div>
      <ThemeCard shadow="normal">
        <span className="text-[7px] font-black tracking-[0.12em] text-(--coral)">
          YOUR READING PLAN
        </span>
        <strong className="mb-3 mt-1.75 block text-xs">
          30 Days Through Psalms
        </strong>
        <div className="h-2 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--navy)_9%,transparent)]">
          <i className="block h-full w-[40%] rounded-full bg-(--coral)" />
        </div>
        <small className="mt-2 block text-[8px] text-(--ink-soft)">
          12 of 30 days • Keep showing up.
        </small>
      </ThemeCard>
      <ThemeCard>
        <div className="mb-2.5 flex items-center gap-2">
          <Heart size={18} className="text-(--coral)" />
          <strong className="text-xs">Saved verses</strong>
        </div>

        {savedVerses.length ? (
          savedVerses.map((verse) => (
            <button
              key={verse.key}
              className="mt-1.75 flex min-h-9.25 w-full cursor-pointer items-center justify-between rounded-[10px] border-0 bg-[var(--cream)] px-2.5 text-left text-[9px] font-extrabold"
              onClick={() => onSelectVerse(verse)}
              type="button"
            >
              <span>
                {verse.book} {verse.chapter}:{verse.verse}
              </span>
              <ChevronRight size={15} />
            </button>
          ))
        ) : (
          <p className="text-[9px] leading-relaxed text-[var(--ink-soft)]">
            Your saved verses will live here.
          </p>
        )}
      </ThemeCard>
    </aside>
  );
};

export default BibleSidebar;
