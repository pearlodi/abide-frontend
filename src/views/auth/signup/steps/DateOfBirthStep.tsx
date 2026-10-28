"use client";

import AuthButton from "@/src/components/shared/button/AuthButton";
import { ArrowRight } from "lucide-react";

interface DateOfBirthStepProps {
  dateOfBirth: string;
  onChange: (value: string) => void;
  onContinue: () => void;
}

export default function DateOfBirthStep({
  dateOfBirth,
  onChange,
  onContinue,
}: DateOfBirthStepProps) {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div>
          <img src="/dob.jpg" className="w-50 mx-auto rounded-full"/>

      <span className="text-xs font-bold tracking-widest text-[#C56B4E]">
        ONE IMPORTANT THING
      </span>

      <h1 className="mt-4 font-heading text-4xl font-bold">
        When were you born?
      </h1>

      <p className="mt-3 leading-7 text-[#6F675E]">
        We use your birth date to check that you're eligible to use Abide.
      </p>

      <label className="mt-8 block">
        <span className="mb-2 block text-sm font-bold">Date of birth</span>
        <input
          type="date"
          value={dateOfBirth}
          max={today}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-14 w-full rounded-2xl border-2 border-[#D7CFC1] bg-transparent px-4 outline-none focus:border-[#C56B4E]"
        />
      </label>

      <AuthButton
        disabled={!dateOfBirth}
        onClick={onContinue}
        className="mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#1C1B1A] font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue
      </AuthButton>
    </div>
  );
}