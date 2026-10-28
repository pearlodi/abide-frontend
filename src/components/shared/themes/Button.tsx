
import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  backgroundColors,
  borderColors,
  textColors,
  shadows,
  type ThemeColor,
  type Shadow,
} from "./theme-styles";

type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  color?: ThemeColor;
  textColor?: ThemeColor;
  shadow?: Shadow;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

export default function ThemeButton({
  children,
  variant = "solid",
  color = "blue",
  textColor = "navy",
  shadow = "normal",
  size = "md",
  className = "",
  type = "button",
  disabled,
  style,
  ...props
}: ThemeButtonProps) {
  const variantStyles = {
    solid: `${backgroundColors[color]} ${textColors[textColor]}`,
    outline: `border-2 ${borderColors[color]} ${textColors[textColor]} bg-transparent`,
    ghost: `${textColors[textColor]} bg-transparent`,
  };

  const buttonShadow =
    shadow === "theme"
      ? `0 7px 0 color-mix(in srgb, var(--${color}) 65%, black), 0 10px 16px color-mix(in srgb, var(--${color}) 25%, transparent)`
      : undefined;

  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        ...style,
        ...(buttonShadow ? { boxShadow: buttonShadow } : {}),
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-200 hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ${sizes[size]} ${variantStyles[variant]} ${shadow === "normal" ? shadows.normal : ""} ${className}`}      {...props}
    >
      {children}
    </button>
  );
}
