import type { ReactNode } from "react";
import { textColors, type ThemeColor } from "./theme-styles";

type ThemeHeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: ThemeColor;
  className?: string;
};

  const sizes = {
    1: "font-heading text-4xl font-bold tracking-tight",
    2: "font-heading text-3xl font-bold tracking-tight",
    3: "font-heading text-2xl font-bold",
    4: "font-heading text-xl font-semibold",
    5: "font-heading text-lg font-semibold",
    6: "font-heading text-base font-semibold",
};

export default function ThemeHeading({
  children,
  level = 2,
  color = "navy",
  className = "",
}: ThemeHeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={`${sizes[level]} ${textColors[color]} ${className}`}>
      {children}
    </Tag>
  );
}