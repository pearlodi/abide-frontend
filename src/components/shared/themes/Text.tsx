import type { ReactNode } from "react";
import { textColors, type ThemeColor } from "./theme-styles";

type ThemeTextProps = {
  children: ReactNode;
  variant?: "body" | "lead" | "muted" | "small";
  color?: ThemeColor;
  className?: string;
};

const variants = {
  body: "font-sans text-base leading-7",
  lead: "font-sans text-lg leading-8",
  muted: "font-sans text-sm leading-6",
  small: "font-sans text-xs leading-5",
};

export default function ThemeText({
  children,
  variant = "body",
  color,
  className = "",
}: ThemeTextProps) {
  const defaultColor =
    variant === "muted" || variant === "small" ? "ink-soft" : "navy";

  return (
    <p
      className={`${variants[variant]} ${textColors[color ?? defaultColor]} ${className}`}
    >
      {children}
    </p>
  );
}