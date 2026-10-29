
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTheme } from "@/app/theme-provider";
import BibleHeader from "./BibleHeader";
import BibleSearch, { type BibleSearchResult } from "./BibleSearch";
import BibleNavigator from "./BibleNavigator";
import BibleReader from "./BibleReader";
import BibleSidebar, { type SavedVerse } from "./BibleSidebar";
import ChapterNotice from "./ChapterNotice";

// Keep your existing AppDestination import from your project.

type Testament = "old" | "new";
type BibleData = Record<string, Record<string, string>>;

const oldTestament = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings",
  "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
  "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes",
  "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
  "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah",
  "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai",
  "Zechariah", "Malachi",
];

const newTestament = [
  "Matthew", "Mark", "Luke", "John", "Acts", "Romans",
  "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
  "Philippians", "Colossians", "1 Thessalonians",
  "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus",
  "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
  "1 John", "2 John", "3 John", "Jude", "Revelation",
];

const BiblePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const requestedBook = searchParams.get("book");
  const initialBook =
    [...oldTestament, ...newTestament].find(
      (item) => item === requestedBook,
    ) ?? "Psalms";

  const requestedChapter = Number(searchParams.get("chapter"));
  const initialChapter =
    Number.isInteger(requestedChapter) && requestedChapter > 0
      ? requestedChapter
      : initialBook === "Psalms"
        ? 23
        : 1;

  const [testament, setTestament] = useState<Testament>(
    newTestament.includes(initialBook) ? "new" : "old",
  );
  const [book, setBook] = useState(initialBook);
  const [chapter, setChapter] = useState(initialChapter);
  const [data, setData] = useState<BibleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [reload, setReload] = useState(0);

  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [highlighted, setHighlighted] = useState<string[]>([]);
  const [savedVerses, setSavedVerses] = useState<string[]>([]);
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null);
  const [noteOpen, setNoteOpen] = useState(false);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [aiVerse, setAiVerse] = useState<number | null>(null);
  const [chapterNotice, setChapterNotice] = useState("");

  const { theme } = useTheme();
  const books = testament === "old" ? oldTestament : newTestament;

  const chapters = useMemo(
    () => (data ? Object.keys(data).map(Number) : []),
    [data],
  );

  const verses = data?.[String(chapter)] ?? {};
  const verseEntries = Object.entries(verses);
  const passageKey = `${book}:${chapter}`;

  const verseKey = (verse: number) => `${book}:${chapter}:${verse}`;

  useEffect(() => {
    let cancelled = false;

    async function loadBook() {
      setLoading(true);
      setLoadError(false);
      setData(null);

      try {
        const response = await fetch(
          `/bible/kjv/${encodeURIComponent(book)}.json`,
        );

        if (!response.ok) throw new Error("Unable to load this book.");

        const result = (await response.json()) as BibleData;

        if (!cancelled) {
          setData(result);
          setChapter((current) => (result[String(current)] ? current : 1));
          setNoteOpen(false);
          setAiVerse(null);
        }
      } catch {
        if (!cancelled) setLoadError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadBook();

    return () => {
      cancelled = true;
    };
  }, [book, reload]);

  useEffect(() => {
    if (loading || !data || !chapters.includes(chapter)) return;

    const params = new URLSearchParams(searchParams.toString());

    if (
      params.get("book") === book &&
      params.get("chapter") === String(chapter)
    ) {
      return;
    }

    params.set("book", book);
    params.set("chapter", String(chapter));

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [book, chapter, loading, data, chapters, router, searchParams]);

  const showChapter = (nextChapter: number) => {
    if (!chapters.includes(nextChapter)) return;

    setChapter(nextChapter);
    setSelectedVerse(null);
    setNoteOpen(false);
    setAiVerse(null);
    setChapterNotice(`${book} ${nextChapter}`);

    window.setTimeout(() => setChapterNotice(""), 1800);
  };

  const changeTestament = (next: Testament) => {
    setTestament(next);
    setBook(next === "old" ? "Psalms" : "Matthew");
    setChapter(next === "old" ? 23 : 1);
    setSelectedVerse(null);
    setNoteOpen(false);
    setAiVerse(null);
  };

  const changeBook = (nextBook: string) => {
    setBook(nextBook);
    setChapter(1);
    setSelectedVerse(null);
    setNoteOpen(false);
    setAiVerse(null);
  };

  const toggleHighlight = (verse: number) => {
    const key = verseKey(verse);

    setHighlighted((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  };

  const toggleSaved = (verse: number) => {
    const key = verseKey(verse);

    setSavedVerses((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  };

  const toggleBookmark = () => {
    setBookmarked((current) =>
      current.includes(passageKey)
        ? current.filter((item) => item !== passageKey)
        : [...current, passageKey],
    );
  };

  const copyVerse = async (verse: number, text: string) => {
    const key = verseKey(verse);

    try {
      await navigator.clipboard.writeText(
        `${text} — ${book} ${chapter}:${verse}`,
      );
      setCopiedVerse(key);
      window.setTimeout(() => setCopiedVerse(null), 1200);
    } catch {
      setCopiedVerse(null);
    }
  };

  const searchResults = useMemo<BibleSearchResult[]>(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query || !data) return [];

    return Object.entries(data)
      .flatMap(([chapterNumber, chapterVerses]) =>
        Object.entries(chapterVerses)
          .filter(([, text]) => text.toLowerCase().includes(query))
          .map(([verseNumber, text]) => ({
            chapter: Number(chapterNumber),
            verse: Number(verseNumber),
            text,
          })),
      )
      .slice(0, 10);
  }, [data, searchQuery]);

  const selectSearchResult = (result: BibleSearchResult) => {
    setChapter(result.chapter);
    setSelectedVerse(result.verse);
    setSearchOpen(false);
    setSearchQuery("");
    setNoteOpen(false);
    setAiVerse(null);
  };

  const savedVerseDetails: SavedVerse[] = savedVerses.map((key) => {
    const [savedBook, savedChapter, savedVerse] = key.split(":");

    return {
      key,
      book: savedBook,
      chapter: Number(savedChapter),
      verse: Number(savedVerse),
    };
  });

  const selectSavedVerse = (saved: SavedVerse) => {
    const nextTestament: Testament = newTestament.includes(saved.book)
      ? "new"
      : "old";

    setTestament(nextTestament);
    setBook(saved.book);
    setChapter(saved.chapter);
    setSelectedVerse(saved.verse);
    setNoteOpen(false);
    setAiVerse(null);
  };

  const selectVerse = (verse: number) => {
    setSelectedVerse((current) => (current === verse ? null : verse));
    setNoteOpen(false);
    setAiVerse(null);
  };

  return (
    <main
      className={`theme--${theme} min-h-screen bg-[var(--shell)] pb-[130px] font-sans text-[var(--navy)]`}
    >
      <BibleHeader
        bookmarked={bookmarked.includes(passageKey)}
        searchOpen={searchOpen}
        onToggleSearch={() => setSearchOpen((current) => !current)}
        onToggleBookmark={toggleBookmark}
      />

      <div className="mx-auto max-w-[1240px] px-7 pt-[43px] max-[700px]:px-3.5 max-[700px]:pt-[30px]">
        <section className="relative flex min-h-[104px] items-end justify-between gap-6 max-[700px]:flex-col max-[700px]:items-stretch">
          <div>
            <span className="text-[9px] font-extrabold tracking-[0.16em] text-[var(--coral)]">
              READ • REFLECT • REST
            </span>
            <h1 className="mt-[10px] mb-2 font-heading text-[clamp(42px,5vw,61px)] leading-none font-bold tracking-[-0.045em]">
              Your Bible 💗
            </h1>
            <p className="text-[14px] text-[var(--ink-soft)]">
              Take your time. Let the Word speak.
            </p>
          </div>

          <BibleSearch
            open={searchOpen}
            query={searchQuery}
            book={book}
            results={searchResults}
            onQueryChange={setSearchQuery}
            onClose={() => {
              setSearchOpen(false);
              setSearchQuery("");
            }}
            onSelectResult={selectSearchResult}
          />
        </section>

        <BibleNavigator
          testament={testament}
          books={books}
          book={book}
          chapter={chapter}
          chapters={chapters}
          loading={loading}
          bookmarked={bookmarked.includes(passageKey)}
          onTestamentChange={changeTestament}
          onBookChange={changeBook}
          onChapterChange={showChapter}
        />

        <div className="grid grid-cols-[minmax(0,1fr)_270px] items-start gap-5.5 max-[900px]:grid-cols-1">
          <BibleReader
            book={book}
            chapter={chapter}
            verses={verseEntries}
            chapters={chapters}
            loading={loading}
            loadError={loadError}
            selectedVerse={selectedVerse}
            highlighted={highlighted}
            savedVerses={savedVerses}
            bookmarked={bookmarked.includes(passageKey)}
            fontSize={fontSize}
            copiedVerse={copiedVerse}
            noteOpen={noteOpen}
            notes={notes}
            aiVerse={aiVerse}
            onRetry={() => setReload((value) => value + 1)}
            onChapterChange={showChapter}
            onToggleBookmark={toggleBookmark}
            onFontSizeChange={setFontSize}
            onSelectVerse={selectVerse}
            onToggleHighlight={toggleHighlight}
            onCopyVerse={(verse, text) => void copyVerse(verse, text)}
            onToggleSaved={toggleSaved}
            onToggleNote={() => setNoteOpen((open) => !open)}
            onNoteChange={(key, value) =>
              setNotes((current) => ({ ...current, [key]: value }))
            }
            onToggleAi={(verse) =>
              setAiVerse((current) => (current === verse ? null : verse))
            }
          />

          <BibleSidebar
            savedVerses={savedVerseDetails}
            onSelectVerse={selectSavedVerse}
          />
        </div>
      </div>

      <ChapterNotice message={chapterNotice} />

      {/* Add your AppDock here when it is ready. */}
    </main>
  );
};

export default BiblePage;
