// "use client";

// import {
//   Bookmark,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   Copy,
//   Heart,
//   Highlighter,
//   Sparkles,
//   StickyNote,
// } from "lucide-react";
// import ThemeButton from "@/src/components/shared/themes/Button";
// import ThemeHeading from "@/src/components/shared/themes/Heading";
// import ThemeText from "@/src/components/shared/themes/Text";

// type VerseEntry = [string, string];

// export default function BibleReader({
//   book,
//   chapter,
//   verses,
//   chapters,
//   loading,
//   loadError,
//   selectedVerse,
//   highlighted,
//   savedVerses,
//   bookmarked,
//   fontSize,
//   copiedVerse,
//   noteOpen,
//   notes,
//   aiVerse,
//   onRetry,
//   onChapterChange,
//   onToggleBookmark,
//   onFontSizeChange,
//   onSelectVerse,
//   onToggleHighlight,
//   onCopyVerse,
//   onToggleSaved,
//   onToggleNote,
//   onNoteChange,
//   onToggleAi,
// }: {
//   book: string;
//   chapter: number;
//   verses: VerseEntry[];
//   chapters: number[];
//   loading: boolean;
//   loadError: boolean;
//   selectedVerse: number | null;
//   highlighted: string[];
//   savedVerses: string[];
//   bookmarked: boolean;
//   fontSize: number;
//   copiedVerse: string | null;
//   noteOpen: boolean;
//   notes: Record<string, string>;
//   aiVerse: number | null;
//   onRetry: () => void;
//   onChapterChange: (chapter: number) => void;
//   onToggleBookmark: () => void;
//   onFontSizeChange: (size: number) => void;
//   onSelectVerse: (verse: number) => void;
//   onToggleHighlight: (verse: number) => void;
//   onCopyVerse: (verse: number, text: string) => void;
//   onToggleSaved: (verse: number) => void;
//   onToggleNote: () => void;
//   onNoteChange: (key: string, value: string) => void;
//   onToggleAi: (verse: number) => void;
// }) {
//   const verseKey = (verse: number) => `${book}:${chapter}:${verse}`;

//   return (
//     <article className="min-w-0">
//       <div className="mb-[13px] mx-2 flex items-center justify-between gap-4 max-[500px]:mx-1">
//         <div className="flex items-center gap-2.5">
//           <span className="h-1.5 w-[130px] overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--navy)_10%,transparent)]">
//             <i className="block h-full w-[68%] rounded-full bg-[var(--coral)]" />
//           </span>
//           <small className="text-[9px] font-bold text-[var(--ink-soft)]">
//             {book} {chapter} • {Math.max(1, Math.ceil(verses.length / 6))} min
//             read
//           </small>
//         </div>

//         <div className="flex items-center gap-1 rounded-xl border border-white/75 bg-[color-mix(in_srgb,var(--white)_72%,transparent)] p-1">
//           <button
//             disabled={fontSize === 0}
//             onClick={() => onFontSizeChange(Math.max(0, fontSize - 1))}
//             className="h-[29px] min-w-[31px] cursor-pointer rounded-lg border-0 bg-[var(--white)] text-[10px] font-black shadow-[0_2px_0_rgba(45,75,88,0.11)] disabled:cursor-not-allowed disabled:opacity-35"
//             type="button"
//           >
//             A
//           </button>
//           <span className="px-1.5 text-[8px] font-bold text-[var(--ink-soft)] max-[500px]:hidden">
//             Text size
//           </span>
//           <button
//             disabled={fontSize === 2}
//             onClick={() => onFontSizeChange(Math.min(2, fontSize + 1))}
//             className="h-[29px] min-w-[31px] cursor-pointer rounded-lg border-0 bg-[var(--white)] text-xs font-black shadow-[0_2px_0_rgba(45,75,88,0.11)] disabled:cursor-not-allowed disabled:opacity-35"
//             type="button"
//           >
//             A+
//           </button>
//         </div>
//       </div>

//       <div className="rounded-[30px] border-[3px] border-white/85 bg-[var(--white)] px-[clamp(24px,6vw,76px)] pt-[45px] pb-[30px] shadow-[0_18px_40px_rgba(45,75,88,0.15),0_4px_0_rgba(45,75,88,0.05)] max-[500px]:px-5 max-[500px]:pt-7">
//         <header className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-[30px] max-[500px]:pb-5">
//           <div>
//             <span className="text-[9px] font-black tracking-[0.14em] text-[var(--coral)]">
//               BOOK OF {book.toUpperCase()}
//             </span>
//             <ThemeHeading
//               level={2}
//               className="!mt-2.5 !mb-1 !font-heading !text-[clamp(38px,5vw,56px)] !leading-none !tracking-[-0.04em]"
//             >
//               {book} {chapter}
//             </ThemeHeading>
//             <ThemeText variant="muted" className="!text-[11px]">
//               {book === "Psalms" && chapter === 23
//                 ? "The Lord Is My Shepherd"
//                 : "Read, reflect, and rest in the Word"}
//             </ThemeText>
//           </div>

//           <button
//             className={`flex min-h-10 shrink-0 cursor-pointer items-center gap-[7px] rounded-[13px] border-0 px-3 text-[9px] font-extrabold shadow-[0_4px_0_rgba(45,75,88,0.11)] transition ${
//               bookmarked ? "bg-[var(--peach)]" : "bg-[var(--cream)]"
//             }`}
//             onClick={onToggleBookmark}
//             type="button"
//           >
//             {bookmarked ? <Heart size={20} /> : <Bookmark size={20} />}
//             <span>{bookmarked ? "Saved" : "Bookmark"}</span>
//           </button>
//         </header>

//         {loading ? (
//           <div className="mx-auto my-9 max-w-[760px]">
//             <ThemeText variant="muted">Opening your Bible...</ThemeText>
//           </div>
//         ) : loadError ? (
//           <div className="mx-auto my-9 max-w-[760px]">
//             <ThemeText variant="muted">
//               We couldn't load this book. Please try again.
//             </ThemeText>
//             <ThemeButton className="mt-3" onClick={onRetry}>
//               Try again
//             </ThemeButton>
//           </div>
//         ) : (
//           <div className="mx-auto my-[35px] mb-[27px] max-w-[760px]">
//             {verses.map(([verseNumber, verseText]) => {
//               const number = Number(verseNumber);
//               const key = verseKey(number);
//               const selected = selectedVerse === number;

//               return (
//                 <div className="relative" key={number}>
//                   <button
//                     aria-pressed={selected}
//                     className={`mb-[13px] block w-full cursor-pointer rounded-[10px] border-0 bg-transparent px-2 py-1 text-left font-serif tracking-[0.005em] leading-[1.82] text-[var(--navy)] transition hover:bg-[color-mix(in_srgb,var(--lavender)_13%,transparent)] ${
//                       fontSize === 0
//                         ? "text-[17px]"
//                         : fontSize === 2
//                           ? "text-[23px]"
//                           : "text-xl"
//                     } ${
//                       selected
//                         ? "bg-[color-mix(in_srgb,var(--lavender)_26%,transparent)] shadow-[inset_4px_0_0_var(--coral)]"
//                         : ""
//                     } ${
//                       highlighted.includes(key)
//                         ? "bg-[color-mix(in_srgb,var(--yellow)_42%,transparent)]"
//                         : ""
//                     }`}
//                     onClick={() => onSelectVerse(number)}
//                     type="button"
//                   >
//                     <sup className="mr-2 font-sans text-[0.48em] font-black text-[var(--coral)]">
//                       {number}
//                     </sup>
//                     {verseText}
//                   </button>

//                   {selected && (
//                     <div className="relative z-[4] -mt-[3px] mb-5 ml-2 mr-2 flex w-fit max-w-full flex-wrap items-center gap-[3px] rounded-[14px] border-2 border-white/10 bg-[var(--navy)] p-[5px] text-white shadow-[0_8px_0_var(--navy-deep),0_15px_28px_rgba(45,75,88,0.25)] before:absolute before:-top-[14px] before:left-[22px] before:border-[7px] before:border-transparent before:border-b-[var(--navy)] before:content-[''] max-[500px]:w-full">
//                       <button
//                         className={`flex min-h-[34px] cursor-pointer items-center gap-[5px] rounded-[9px] border-0 px-2 text-[8px] font-extrabold hover:bg-white/10 ${highlighted.includes(key) ? "bg-white/15" : "bg-transparent"}`}
//                         onClick={() => onToggleHighlight(number)}
//                         type="button"
//                       >
//                         <Highlighter size={16} />
//                         <span>Highlight</span>
//                       </button>

//                       <button
//                         className="flex min-h-[34px] cursor-pointer items-center gap-[5px] rounded-[9px] border-0 bg-transparent px-2 text-[8px] font-extrabold hover:bg-white/10"
//                         onClick={() => onCopyVerse(number, verseText)}
//                         type="button"
//                       >
//                         {copiedVerse === key ? (
//                           <Check size={16} />
//                         ) : (
//                           <Copy size={16} />
//                         )}
//                         <span>{copiedVerse === key ? "Copied" : "Copy"}</span>
//                       </button>

//                       <button
//                         className={`flex min-h-[34px] cursor-pointer items-center gap-[5px] rounded-[9px] border-0 px-2 text-[8px] font-extrabold hover:bg-white/10 ${savedVerses.includes(key) ? "bg-white/15" : "bg-transparent"}`}
//                         onClick={() => onToggleSaved(number)}
//                         type="button"
//                       >
//                         <Heart size={16} />
//                         <span>{savedVerses.includes(key) ? "Saved" : "Save"}</span>
//                       </button>

//                       <button
//                         className="flex min-h-[34px] cursor-pointer items-center gap-[5px] rounded-[9px] border-0 bg-transparent px-2 text-[8px] font-extrabold hover:bg-white/10"
//                         onClick={onToggleNote}
//                         type="button"
//                       >
//                         <StickyNote size={16} />
//                         <span>Note</span>
//                       </button>

//                       <button
//                         className="flex min-h-[34px] cursor-pointer items-center gap-[5px] rounded-[9px] border-0 bg-[var(--lavender)] px-2 text-[8px] font-extrabold text-[var(--navy)]"
//                         onClick={() => onToggleAi(number)}
//                         type="button"
//                       >
//                         <Sparkles size={16} />
//                         <span>Ask AI</span>
//                       </button>
//                     </div>
//                   )}

//                   {selected && noteOpen && (
//                     <label className="mb-5 ml-2 mr-2 block rounded-[13px] bg-[var(--cream)] p-[11px]">
//                       <span className="mb-1.5 block text-[8px] font-extrabold">
//                         Your note on verse {number}
//                       </span>
//                       <input
//                         autoFocus
//                         placeholder="What is God showing you here?"
//                         value={notes[key] ?? ""}
//                         onChange={(event) =>
//                           onNoteChange(key, event.target.value)
//                         }
//                         className="w-full border-0 border-b border-[var(--line)] bg-transparent py-2 text-sm text-[var(--navy)] outline-none placeholder:text-[var(--ink-soft)]"
//                       />
//                     </label>
//                   )}

//                   {selected && aiVerse === number && (
//                     <div className="mb-5 ml-2 mr-2 flex items-start gap-2.5 rounded-[14px] bg-[color-mix(in_srgb,var(--lavender)_38%,var(--white))] p-[13px]">
//                       <Sparkles
//                         size={18}
//                         className="shrink-0 text-[var(--coral)]"
//                       />
//                       <p className="m-0 text-[10px] leading-[1.55]">
//                         Take a moment to reflect on this verse. What does it
//                         reveal about God, and how might you apply its message
//                         in your life?
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         <footer className="grid grid-cols-[1fr_auto_1fr] items-center border-t border-[var(--line)] pt-[25px]">
//           <button
//             disabled={loading || !chapters.includes(chapter - 1)}
//             onClick={() => onChapterChange(chapter - 1)}
//             className="flex cursor-pointer items-center gap-[9px] border-0 bg-transparent text-left disabled:cursor-not-allowed disabled:opacity-40"
//             type="button"
//           >
//             <ChevronLeft size={18} />
//             <span className="text-[11px] font-extrabold">
//               <small className="mb-0.5 block text-[7px] tracking-[0.1em] text-[var(--ink-soft)]">
//                 PREVIOUS
//               </small>
//               {chapters.includes(chapter - 1)
//                 ? `${book} ${chapter - 1}`
//                 : "First chapter"}
//             </span>
//           </button>

//           <div className="flex size-[42px] items-center justify-center rounded-xl bg-[var(--lavender)] font-heading font-bold shadow-[inset_0_-4px_0_rgba(45,75,88,0.11)]">
//             {chapter}
//           </div>

//           <button
//             disabled={loading || !chapters.includes(chapter + 1)}
//             onClick={() => onChapterChange(chapter + 1)}
//             className="flex cursor-pointer items-center justify-self-end gap-[9px] border-0 bg-transparent text-right disabled:cursor-not-allowed disabled:opacity-40"
//             type="button"
//           >
//             <span className="text-[11px] font-extrabold">
//               <small className="mb-0.5 block text-[7px] tracking-[0.1em] text-[var(--ink-soft)]">
//                 NEXT
//               </small>
//               {chapters.includes(chapter + 1)
//                 ? `${book} ${chapter + 1}`
//                 : "Last chapter"}
//             </span>
//             <ChevronRight size={18} />
//           </button>
//         </footer>
//       </div>
//     </article>
//   );
// }


"use client";

import {
  Bookmark,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Heart,
  Highlighter,
  Sparkles,
  StickyNote,
} from "lucide-react";
import ThemeCard from "@/src/components/shared/themes/Card";
import ThemeButton from "@/src/components/shared/themes/Button";
import ThemeHeading from "@/src/components/shared/themes/Heading";
import ThemeText from "@/src/components/shared/themes/Text";

type VerseEntry = [string, string];

const BibleReader = ({
  book,
  chapter,
  verses,
  chapters,
  loading,
  loadError,
  selectedVerse,
  highlighted,
  savedVerses,
  bookmarked,
  fontSize,
  copiedVerse,
  noteOpen,
  notes,
  aiVerse,
  onRetry,
  onChapterChange,
  onToggleBookmark,
  onFontSizeChange,
  onSelectVerse,
  onToggleHighlight,
  onCopyVerse,
  onToggleSaved,
  onToggleNote,
  onNoteChange,
  onToggleAi,
}: {
  book: string;
  chapter: number;
  verses: VerseEntry[];
  chapters: number[];
  loading: boolean;
  loadError: boolean;
  selectedVerse: number | null;
  highlighted: string[];
  savedVerses: string[];
  bookmarked: boolean;
  fontSize: number;
  copiedVerse: string | null;
  noteOpen: boolean;
  notes: Record<string, string>;
  aiVerse: number | null;
  onRetry: () => void;
  onChapterChange: (chapter: number) => void;
  onToggleBookmark: () => void;
  onFontSizeChange: (size: number) => void;
  onSelectVerse: (verse: number) => void;
  onToggleHighlight: (verse: number) => void;
  onCopyVerse: (verse: number, text: string) => void;
  onToggleSaved: (verse: number) => void;
  onToggleNote: () => void;
  onNoteChange: (key: string, value: string) => void;
  onToggleAi: (verse: number) => void;
}) => {
  const verseKey = (verse: number) => `${book}:${chapter}:${verse}`;

  return (
    <article className="min-w-0">
      <div className="mx-2 mb-3 flex items-center justify-between gap-4 sm:mx-1">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-32 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--navy)_10%,transparent)]">
            <i className="block h-full w-[68%] rounded-full bg-(--coral)" />
          </span>
          <small className="text-[9px] font-bold text-(--ink-soft)">
            {book} {chapter} • {Math.max(1, Math.ceil(verses.length / 6))} min
            read
          </small>
        </div>

        <div className="flex items-center gap-1 rounded-xl border border-white/75 bg-[color-mix(in_srgb,var(--white)_72%,transparent)] p-1">
          <ThemeButton
            disabled={fontSize === 0}
            color="white"
            onClick={() => onFontSizeChange(Math.max(0, fontSize - 1))}
            className="h-7 min-w-8 rounded-lg text-xs shadow-sm disabled:cursor-not-allowed disabled:opacity-35"
            size="sm"
          >
            A
          </ThemeButton>
          <span className="px-1.5 text-[8px] font-bold text-(--ink-soft) sm:hidden">
            Text size
          </span>
          <ThemeButton
          color="white"
            disabled={fontSize === 2}
            onClick={() => onFontSizeChange(Math.min(2, fontSize + 1))}
            className="h-7 min-w-8 rounded-lg text-xs shadow-sm disabled:cursor-not-allowed disabled:opacity-35"
            size="sm"
          >
            A+
          </ThemeButton>
        </div>
      </div>

      <ThemeCard
        border={true}
        shadow="normal"
        padding="none"
        className="rounded-3xl px-6 pt-8 pb-6 md:px-12 md:pt-10 lg:px-16 lg:pt-12"
      >
        <header className="flex items-start justify-between gap-4 border-b border-border pb-6 md:pb-8">
          <div className="min-w-0">
            <span className="text-[9px] font-black tracking-[0.14em] text-(--coral)">
              BOOK OF {book.toUpperCase()}
            </span>
            <ThemeHeading
              level={2}
              className="mt-2.5! mb-1! font-heading! text-4xl! leading-none! tracking-tight! md:text-5xl!"
            >
              {book} {chapter}
            </ThemeHeading>
            <ThemeText variant="muted" className="text-[11px]!">
              {book === "Psalms" && chapter === 23
                ? "The Lord Is My Shepherd"
                : "Read, reflect, and rest in the Word"}
            </ThemeText>
          </div>

          <ThemeButton
            variant="solid"
            color={bookmarked ? "peach" : "cream"}
            onClick={onToggleBookmark}
            className="flex min-h-10 shrink-0 items-center gap-2 rounded-xl px-3 text-[9px] font-extrabold"
          >
            {bookmarked ? <Heart size={20} /> : <Bookmark size={20} />}
            <span>{bookmarked ? "Saved" : "Bookmark"}</span>
          </ThemeButton>
        </header>

        {loading ? (
          <div className="mx-auto my-9 max-w-3xl">
            <ThemeText variant="muted">Opening your Bible...</ThemeText>
          </div>
        ) : loadError ? (
          <div className="mx-auto my-9 max-w-3xl">
            <ThemeText variant="muted">
              We couldn't load this book. Please try again.
            </ThemeText>
            <ThemeButton className="mt-3" onClick={onRetry}>
              Try again
            </ThemeButton>
          </div>
        ) : (
          <div className="mx-auto my-8 mb-7 max-w-3xl">
            {verses.map(([verseNumber, verseText]) => {
              const number = Number(verseNumber);
              const key = verseKey(number);
              const selected = selectedVerse === number;

              return (
                <div className="relative" key={number}>
                  <button
                    aria-pressed={selected}
                    className={`mb-3 block w-fit cursor-pointer rounded-lg border-0 bg-transparent px-2 py-1 text-left font-serif leading-relaxed tracking-[0.005em] text-(--navy) transition hover:bg-[color-mix(in_srgb,var(--lavender)_13%,transparent)] ${
                      fontSize === 0
                        ? "text-[17px]"
                        : fontSize === 2
                          ? "text-[23px]"
                          : "text-xl"
                    } ${
                      selected
                        ? "bg-[color-mix(in_srgb,var(--lavender)_26%,transparent)] shadow-[inset_4px_0_0_var(--coral)]"
                        : ""
                    } ${
                      highlighted.includes(key)
                        ? "bg-[color-mix(in_srgb,var(--yellow)_42%,transparent)]"
                        : ""
                    }`}
                    onClick={() => onSelectVerse(number)}
                    type="button"
                  >
                    <sup className="mr-2 font-sans text-[0.48em] font-black text-(--coral)">
                      {number}
                    </sup>
                    {verseText}
                  </button>

                  {selected && (
                    <div className="relative z-10 -mt-1 mb-5 mx-2 flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border-2 border-white/10 bg-(--navy) p-1 text-white shadow-lg before:absolute before:-top-3.5 before:left-6 before:border-[7px] before:border-transparent before:border-b-(--navy) before:content-[''] sm:w-full">
                      <ThemeButton
                      
                        shadow="none"
                        color="navy"
                        onClick={() => onToggleHighlight(number)}
                        className={`flex min-h-9 items-center gap-1 px-2 text-[8px] text-white hover:bg-white/10 ${highlighted.includes(key) ? "bg-white/15" : ""}`}
                      >
                        <Highlighter size={16} />
                        <span>Highlight</span>
                      </ThemeButton>

                      <ThemeButton
                        shadow="none"
                        color="navy"
                        onClick={() => onCopyVerse(number, verseText)}
                        className="flex min-h-9 items-center gap-1 px-2 text-[8px] text-white hover:bg-white/10"
                      >
                        {copiedVerse === key ? <Check size={16} /> : <Copy size={16} />}
                        <span>{copiedVerse === key ? "Copied" : "Copy"}</span>
                      </ThemeButton>

                      <ThemeButton
                        shadow="none"
                        color="navy"
                        onClick={() => onToggleSaved(number)}
                        className={`flex min-h-9 items-center gap-1 px-2 text-[8px] text-white hover:bg-white/10 ${savedVerses.includes(key) ? "bg-white/15" : ""}`}
                      >
                        <Heart size={16} />
                        <span>{savedVerses.includes(key) ? "Saved" : "Save"}</span>
                      </ThemeButton>

                      <ThemeButton
                        shadow="none"
                        color="navy"
                        onClick={onToggleNote}
                        className="flex min-h-9 items-center gap-1 px-2 text-[8px] text-white hover:bg-white/10"
                      >
                        <StickyNote size={16} />
                        <span>Note</span>
                      </ThemeButton>

                      <ThemeButton
                        onClick={() => onToggleAi(number)}
                        className="flex min-h-9 items-center gap-1 rounded-lg bg-lavender px-2 text-[8px] text-(--navy)"
                      >
                        <Sparkles size={16} />
                        <span>Ask AI</span>
                      </ThemeButton>
                    </div>
                  )}

                  {selected && noteOpen && (
                    <label className="mx-2 mb-5 block rounded-xl bg-(--cream) p-3">
                      <span className="mb-1.5 block text-[8px] font-extrabold">
                        Your note on verse {number}
                      </span>
                      <input
                        autoFocus
                        placeholder="What is God showing you here?"
                        value={notes[key] ?? ""}
                        onChange={(event) => onNoteChange(key, event.target.value)}
                        className="w-full border-0 border-b border-border bg-transparent py-2 text-sm text-(--navy) outline-none placeholder:text-(--ink-soft)"
                      />
                    </label>
                  )}

                  {selected && aiVerse === number && (
                    <div className="mx-2 mb-5 flex items-start gap-2.5 rounded-xl bg-[color-mix(in_srgb,var(--lavender)_38%,var(--white))] p-3">
                      <Sparkles size={18} className="shrink-0 text-(--coral)" />
                      <p className="m-0 text-[10px] leading-relaxed">
                        Take a moment to reflect on this verse. What does it
                        reveal about God, and how might you apply its message
                        in your life?
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <footer className="grid grid-cols-[1fr_auto_1fr] items-center border-t border-border pt-6">
          <button
            disabled={loading || !chapters.includes(chapter - 1)}
            onClick={() => onChapterChange(chapter - 1)}
            className="flex cursor-pointer items-center gap-2 border-0 bg-transparent text-left disabled:cursor-not-allowed disabled:opacity-40"
            type="button"
          >
            <ChevronLeft size={18} />
            <span className="text-[11px] font-extrabold">
              <small className="mb-0.5 block text-[7px] tracking-widest text-(--ink-soft)">
                PREVIOUS
              </small>
              {chapters.includes(chapter - 1)
                ? `${book} ${chapter - 1}`
                : "First chapter"}
            </span>
          </button>

          <div className="flex size-10 items-center justify-center rounded-xl bg-lavender font-heading font-bold shadow-[inset_0_-4px_0_rgba(45,75,88,0.11)]">
            {chapter}
          </div>

          <button
            disabled={loading || !chapters.includes(chapter + 1)}
            onClick={() => onChapterChange(chapter + 1)}
            className="flex cursor-pointer items-center justify-self-end gap-2 border-0 bg-transparent text-right disabled:cursor-not-allowed disabled:opacity-40"
            type="button"
          >
            <span className="text-[11px] font-extrabold">
              <small className="mb-0.5 block text-[7px] tracking-widest text-(--ink-soft)">
                NEXT
              </small>
              {chapters.includes(chapter + 1)
                ? `${book} ${chapter + 1}`
                : "Last chapter"}
            </span>
            <ChevronRight size={18} />
          </button>
        </footer>
      </ThemeCard>
    </article>
  );
};

export default BibleReader;
