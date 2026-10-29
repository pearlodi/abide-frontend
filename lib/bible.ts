import { BibleBookData } from "@/types/bible";


export async function getBibleBook(
  book: string,
): Promise<BibleBookData> {
  const response = await fetch(
    `/bible/kjv/${encodeURIComponent(book)}.json`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load ${book}`);
  }

  return response.json() as Promise<BibleBookData>;
}
