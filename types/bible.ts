
export type BibleChapter = Record<string, string>;

export type BibleBookData = Record<string, BibleChapter>;

export interface BibleBook {
  name: string;
  chapters: number;
}
