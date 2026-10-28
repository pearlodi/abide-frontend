
"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  showArrow?: boolean;
}

export default function AuthButton({
  children,
  showArrow = true,
  className = "",
  type = "button",
  ...props
}: AuthButtonProps) {
  return (
    <button
      type={type}
      className={`flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#302E2A] px-5 font-bold text-white shadow-auth-raised transition hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight size={18} />}
    </button>
  );
}
