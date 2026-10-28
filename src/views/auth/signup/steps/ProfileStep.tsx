"use client";

import AuthButton from "@/src/components/shared/button/AuthButton";
import { ArrowRight } from "lucide-react";

interface ProfileStepProps {
  displayName: string;
  username: string;
  onChange: (updates: {
    displayName?: string;
    username?: string;
  }) => void;
  onContinue: () => void;
}

export default function ProfileStep({
  displayName,
  username,
  onChange,
  onContinue,
}: ProfileStepProps) {
  const usernameValid = /^[a-z0-9_]{3,20}$/.test(username);
  const reserved = ["abide", "admin", "pearl", "support"];
  const usernameAvailable = usernameValid && !reserved.includes(username);

  return (
    <div>
          <img src="/name.jpg" className="w-50 mx-auto rounded-full"/>

      <span className="text-xs font-bold tracking-widest text-[#C56B4E]">
        MAKE IT YOURS
      </span>

      <h1 className="mt-4 font-heading text-4xl font-bold">
        What should we call you?
      </h1>

      <p className="mt-3 leading-7 text-[#6F675E]">
        You can change both of these later in your profile.
      </p>

      <label className="mt-8 block">
        <span className="mb-2 block text-sm font-bold">Display name</span>
        <input
          value={displayName}
          onChange={(event) => onChange({ displayName: event.target.value })}
          placeholder="What should we call you?"
          className="min-h-14 w-full rounded-2xl border-2 border-[#D7CFC1] bg-transparent px-4 outline-none focus:border-[#C56B4E]"
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-bold">Username</span>
        <input
          value={username}
          onChange={(event) =>
            onChange({
              username: event.target.value.toLowerCase().replace(/\s/g, ""),
            })
          }
          className="min-h-14 w-full rounded-2xl border-2 border-[#D7CFC1] bg-transparent px-4 outline-none focus:border-[#C56B4E]"
        />
        <span
          className={`mt-2 block text-xs ${
            usernameAvailable ? "text-green-700" : "text-[#8D675B]"
          }`}
        >
          {usernameAvailable
            ? `@${username} is available`
            : "Use 3–20 lowercase letters, numbers or underscores."}
        </span>
      </label>

      <AuthButton
        disabled={!displayName.trim() || !usernameAvailable}
        onClick={onContinue}
        className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#1C1B1A] font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        That's me
      </AuthButton>
    </div>
  );
}