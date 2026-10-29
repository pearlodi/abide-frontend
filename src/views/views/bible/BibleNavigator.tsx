"use client";

import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import ThemeButton from "@/src/components/shared/themes/Button";
import ThemeCard from "@/src/components/shared/themes/Card";

type Testament = "old" | "new";

const BibleNavigator = ({
  testament,
  books,
  book,
  chapter,
  chapters,
  loading,
  bookmarked,
  onTestamentChange,
  onBookChange,
  onChapterChange,
}: {
  testament: Testament;
  books: string[];
  book: string;
  chapter: number;
  chapters: number[];
  loading: boolean;
  bookmarked: boolean;
  onTestamentChange: (testament: Testament) => void;
  onBookChange: (book: string) => void;
  onChapterChange: (chapter: number) => void;
}) => {
  return (
    <ThemeCard
      aria-label="Bible navigation"
      shadow="normal"
      className="mt-7.75 mb-6 grid grid-cols-[auto_minmax(155px,0.7fr)_auto_minmax(150px,0.8fr)] items-center gap-3 rounded-[23px]  p-2.75  max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
    >
      <div className="flex rounded-[14px] bg-[color-mix(in_srgb,var(--lavender)_28%,transparent)] p-1">
        {(["old", "new"] as const).map((item) => (
          <button
            key={item}
            aria-pressed={testament === item}
            className={`min-h-9 cursor-pointer rounded-[10px] border-0 px-3 text-[9px] font-extrabold transition ${
              testament === item
                ? "bg-(--white) text-(--navy) shadow-[0_3px_0_rgba(45,75,88,0.13)]"
                : "bg-transparent text-(--ink-soft)"
            }`}
            onClick={() => onTestamentChange(item)}
            type="button"
          >
            {item === "old" ? "Old Testament" : "New Testament"}
          </button>
        ))}
      </div>

      <label className="flex flex-col rounded-[13px] bg-(--white) px-3 py-1.75 shadow-[inset_0_-3px_0_rgba(45,75,88,0.08)]">
        <span className="text-[7px] font-extrabold tracking-[0.08em] text-(--ink-soft)">
          BOOK
        </span>
        <select
          value={book}
          onChange={(event) => onBookChange(event.target.value)}
          className="cursor-pointer appearance-none bg-transparent pt-0.5 pr-5 text-xs font-extrabold text-(--navy) outline-none"
        >
          {books.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <div className="flex items-center gap-1.75">
        <ThemeButton
          variant="ghost"
          color="navy"
          size="sm"
          className="h-9.75! w-9.75! rounded-xl! p-0! shadow-[0_5px_0_color-mix(in_srgb,var(--navy)_13%,transparent)]"
          disabled={loading || !chapters.includes(chapter - 1)}
          onClick={() => onChapterChange(chapter - 1)}
          aria-label="Previous chapter"
        >
          <ChevronLeft size={18} />
        </ThemeButton>

        <label className="flex min-w-23 flex-col rounded-[13px] bg-(--white) px-3 py-1.75 shadow-[inset_0_-3px_0_rgba(45,75,88,0.08)]">
          <span className="text-[7px] font-extrabold tracking-[0.08em] text-(--ink-soft)">
            CHAPTER
          </span>
          <select
            value={chapter}
            disabled={loading || !chapters.length}
            onChange={(event) => onChapterChange(Number(event.target.value))}
            className="cursor-pointer appearance-none bg-transparent pt-0.5 text-xs font-extrabold text-(--navy) outline-none"
          >
            {chapters.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <ThemeButton
          variant="ghost"
          color="navy"
          size="sm"
          className="h-9.75! w-9.75! rounded-xl! p-0! shadow-[0_5px_0_color-mix(in_srgb,var(--navy)_13%,transparent)]"
          disabled={loading || !chapters.includes(chapter + 1)}
          onClick={() => onChapterChange(chapter + 1)}
          aria-label="Next chapter"
        >
          <ChevronRight size={18} />
        </ThemeButton>
      </div>

      <ThemeCard
        color="navy"
        textColor="white"
        shadow="theme"
        padding="sm"
        className="flex min-h-12.5 items-center gap-2.5 rounded-[14px] px-3.25 py-2"
      >
        <Bookmark size={18} />
        <span className="block">
          <small className="block text-[7px] font-extrabold tracking-widest text-white/70">
            NOW READING
          </small>
          <strong className="mt-0.5 block text-xs">
            {book} {chapter}
          </strong>
        </span>
        {bookmarked && (
          <span className="ml-auto text-[8px] font-bold text-white/70">
            Saved
          </span>
        )}
      </ThemeCard>
    </ThemeCard>
  );
};

export default BibleNavigator;
