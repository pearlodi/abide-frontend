
"use client";

import { ChevronRight, Search } from "lucide-react";
import ThemeText from "@/src/components/shared/themes/Text";

export type BibleSearchResult = {
  chapter: number;
  verse: number;
  text: string;
};

const BibleSearch = ({
  open,
  query,
  book,
  results,
  onQueryChange,
  onClose,
  onSelectResult,
}: {
  open: boolean;
  query: string;
  book: string;
  results: BibleSearchResult[];
  onQueryChange: (query: string) => void;
  onClose: () => void;
  onSelectResult: (result: BibleSearchResult) => void;
}) => {
  if (!open) return null;

  return (
    <>
      <label className="flex w-full max-w-105 items-center gap-2.5 rounded-[17px] border-2 border-white bg-(--white) px-3.5 shadow-[0_6px_0_rgba(45,75,88,0.08),0_12px_25px_rgba(45,75,88,0.12)] max-[700px]:max-w-none">
        <Search size={18} />
        <input
          autoFocus
          placeholder="Search a passage or keyword"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent py-3.75 text-sm text-(--navy) outline-none placeholder:text-(--ink-soft)"
        />
        <button
          className="cursor-pointer rounded-[11px] bg-lavender px-3 py-2 text-[9px] font-extrabold"
          onClick={onClose}
          type="button"
        >
          Close
        </button>
      </label>

      {query.trim() && (
        <section className="mt-4 rounded-3xl border-2 border-white/80 bg-(--white) p-5 shadow-[0_18px_40px_rgba(45,75,88,0.15),0_4px_0_rgba(45,75,88,0.05)]">
          <div className="mb-3 flex items-center gap-2">
            <Search size={18} className="text-(--coral)" />
            <strong className="text-sm">Results in {book}</strong>
          </div>

          {results.length ? (
            <div className="grid gap-2">
              {results.map((result) => (
                <button
                  key={`${result.chapter}:${result.verse}`}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-(--cream) p-3 text-left text-sm transition hover:bg-lavender"
                  onClick={() => onSelectResult(result)}
                  type="button"
                >
                  <span>
                    <strong>
                      {book} {result.chapter}:{result.verse}
                    </strong>
                    {" — "}
                    {result.text}
                  </span>
                  <ChevronRight size={16} className="shrink-0" />
                </button>
              ))}
            </div>
          ) : (
            <ThemeText variant="muted">
              No matching verses found in this book.
            </ThemeText>
          )}
        </section>
      )}
    </>
  );
};

export default BibleSearch;
