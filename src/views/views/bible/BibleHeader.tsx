
"use client";

import { Bookmark, Heart, Search, X } from "lucide-react";
import ThemeButton from "@/src/components/shared/themes/Button";

const BibleHeader = ({
  bookmarked,
  searchOpen,
  onToggleSearch,
  onToggleBookmark,
}: {
  bookmarked: boolean;
  searchOpen: boolean;
  onToggleSearch: () => void;
  onToggleBookmark: () => void;
}) => {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-white/40 bg-shell px-7 py-4 max-[700px]:px-3.5">
      <div className="flex items-center gap-2">
        {/* <span className="flex size-10 items-center justify-center rounded-2xl bg-(--navy) text-white shadow-[0_4px_0_var(--navy-deep)]">
          <Bookmark size={20} />
        </span> */}
        {/* <span className="font-heading text-xl font-bold tracking-tight">
          Abide
        </span> */}
        <div/>
      </div>

      <div className="flex items-center gap-2">
        <ThemeButton
          variant="ghost"
          color="navy"
          size="sm"
          className="rounded-xl"
          onClick={onToggleSearch}
          aria-label="Search Bible passages"
        >
          {searchOpen ? <X size={19} /> : <Search size={19} />}
        </ThemeButton>

        <ThemeButton
          variant="ghost"
          color="navy"
          size="sm"
          className={`rounded-xl ${bookmarked ? "bg-peach" : ""}`}
          onClick={onToggleBookmark}
          aria-label="Bookmark current chapter"
        >
          {bookmarked ? <Heart size={19} /> : <Bookmark size={19} />}
        </ThemeButton>
      </div>
    </header>
  );
};

export default BibleHeader;
