
"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import AuthButton from "@/src/components/shared/button/AuthButton";

const avatarOptions = [
  { id: "1", src: "/2s.jpg" },
  { id: "2", src: "/1s.jpg" },
  { id: "3", src: "/3s.jpg" },
  { id: "4", src: "/4s.jpg" },
  { id: "5", src: "/5s.jpg" },
  { id: "6", src: "/7s.jpg" },
];

interface AvatarStepProps {
  avatarId: string;
  onChange: (avatarId: string) => void;
  onContinue: () => void;
}

export default function AvatarStep({
  avatarId,
  onChange,
  onContinue,
}: AvatarStepProps) {
  return (
    <div>
      <span className="text-xs font-bold tracking-widest text-[#C56B4E]">
        CHOOSE YOUR COMPANION
      </span>

      <h1 className="mt-4 font-heading text-4xl font-bold">
        Who's coming with you?
      </h1>

      <p className="mt-3 leading-7 text-[#6F675E]">
        Choose a character to accompany you through Abide.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {avatarOptions.map((avatar) => (
          <button
            key={avatar.id}
            type="button"
            aria-label={`Choose avatar ${avatar.id}`}
            aria-pressed={avatarId === avatar.id}
            onClick={() => onChange(avatar.id)}
            className={`relative flex min-h-36 flex-col items-center justify-center overflow-hidden rounded-2xl border-2  transition hover:-translate-y-0.5 ${
              avatarId === avatar.id
                ? "border-[#C56B4E] bg-[#EEE0CF]"
                : "border-[#D7CFC1] bg-[#F4EFE6]"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={avatar.src}
                alt={`Avatar ${avatar.id}`}
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>

            {avatarId === avatar.id && (
              <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#C56B4E] text-white">
                <Check size={15} />
              </span>
            )}
          </button>
        ))}
      </div>

      <AuthButton
        disabled={!avatarId}
        onClick={onContinue}
        className="mt-8 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#1C1B1A] font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Choose this character
      </AuthButton>
    </div>
  );
}
