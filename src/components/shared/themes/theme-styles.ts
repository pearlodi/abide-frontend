
export type ThemeColor =
  | "navy"
  | "navy-deep"
  | "ink-soft"
  | "white"
  | "cream"
  | "shell"
  | "mint"
  | "blue"
  | "blue-deep"
  | "peach"
  | "coral"
  | "lavender"
  | "yellow";

export const textColors: Record<ThemeColor, string> = {
  navy: "text-navy",
  "navy-deep": "text-navy-deep",
  "ink-soft": "text-ink-soft",
  white: "text-white",
  cream: "text-cream",
  shell: "text-shell",
  mint: "text-mint",
  blue: "text-blue",
  "blue-deep": "text-blue-deep",
  peach: "text-peach",
  coral: "text-coral",
  lavender: "text-lavender",
  yellow: "text-yellow",
};

export const backgroundColors: Record<ThemeColor, string> = {
  navy: "bg-navy",
  "navy-deep": "bg-navy-deep",
  "ink-soft": "bg-ink-soft",
  white: "bg-white",
  cream: "bg-cream",
  shell: "bg-shell",
  mint: "bg-mint",
  blue: "bg-blue",
  "blue-deep": "bg-blue-deep",
  peach: "bg-peach",
  coral: "bg-coral",
  lavender: "bg-lavender",
  yellow: "bg-yellow",
};

export const borderColors: Record<ThemeColor, string> = {
  navy: "border-navy",
  "navy-deep": "border-navy-deep",
  "ink-soft": "border-ink-soft",
  white: "border-white",
  cream: "border-cream",
  shell: "border-shell",
  mint: "border-mint",
  blue: "border-blue",
  "blue-deep": "border-blue-deep",
  peach: "border-peach",
  coral: "border-coral",
  lavender: "border-lavender",
  yellow: "border-yellow",
};

export const shadows = {
  none: "",
  normal: "shadow-raised",
  theme: "",
};

export type Shadow = keyof typeof shadows;
