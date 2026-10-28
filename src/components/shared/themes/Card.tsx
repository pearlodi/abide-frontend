
import type { HTMLAttributes, ReactNode } from "react";
import {
  backgroundColors,
  textColors,
  shadows,
  type ThemeColor,
  type Shadow,
} from "./theme-styles";

type ThemeCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  color?: ThemeColor;
  textColor?: ThemeColor;
  shadow?: Shadow;
  padding?: "none" | "sm" | "md" | "lg";
};

const paddings = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

export default function ThemeCard({
  children,
  color = "white",
  textColor = "navy",
  shadow = "none",
  padding = "md",
  className = "",
  style,
  ...props
}: ThemeCardProps) {
  const cardShadow =
    shadow === "theme"
      ? `0 7px 0 color-mix(in srgb, var(--${color}) 65%, black), 0 10px 16px color-mix(in srgb, var(--${color}) 25%, transparent)`
      : undefined;

  return (
    <div
      style={{
        ...style,
        ...(cardShadow ? { boxShadow: cardShadow } : {}),
      }}
      className={`rounded-3xl ${backgroundColors[color]} ${textColors[textColor]} ${shadow === "normal" ? shadows.normal : ""} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
