
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import { AppTheme } from "@/app/theme-provider";
import { localStorageUtils } from "@/lib/local-storage";
import AvatarStep from "./steps/AvatarStep";
import DateOfBirthStep from "./steps/DateOfBirthStep";
import ProfileStep from "./steps/ProfileStep";
import ThemeStep from "./steps/ThemeStep";
import WelcomeStep from "./steps/WelcomeStep";
import { ONBOARDING_DRAFT_KEY, useOnboardingDraft } from "./use-onboarding-draft";


const steps = [
  WelcomeStep,
  DateOfBirthStep,
  ProfileStep,
  AvatarStep,
  ThemeStep,
];

const validThemes: AppTheme[] = [
  "boy",
  "girl",
  "monochrome",
  "hotpink",
  "purple",
];

export default function OnboardingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    value: draft,
    setValue: setDraft,
    isLoaded,
  } = useOnboardingDraft();

  const [theme, setTheme] = useState<AppTheme>("boy");
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [ageError, setAgeError] = useState("");

  const requestedStep = Number(searchParams.get("step") || "1");
  const step = Number.isInteger(requestedStep) &&
    requestedStep >= 1 &&
    requestedStep <= 5
    ? requestedStep
    : 1;

  useEffect(() => {
    const savedTheme = localStorageUtils.get<unknown>("abide-theme", "boy");

    if (typeof savedTheme === "string" &&
      validThemes.includes(savedTheme as AppTheme)) {
      setTheme(savedTheme as AppTheme);
      document.documentElement.dataset.theme = savedTheme;
    }

    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || !themeLoaded) return;

    setDraft((current) => ({
      ...current,
      theme,
    }));
  }, [isLoaded, themeLoaded, theme, setDraft]);

  function goToStep(nextStep: number) {
    const safeStep = Math.min(5, Math.max(1, nextStep));
    router.push(`/onboarding?step=${safeStep}`, { scroll: false });
    setAgeError("");
  }

  function changeTheme(nextTheme: AppTheme) {
    setTheme(nextTheme);
    localStorageUtils.set("abide-theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  function continueFromAge() {
    if (!draft.dateOfBirth) {
      setAgeError("Please enter your date of birth.");
      return;
    }

    const birthDate = new Date(`${draft.dateOfBirth}T00:00:00`);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (Number.isNaN(birthDate.getTime()) || birthDate > today) {
      setAgeError("Please enter a valid date of birth.");
      return;
    }

    if (age < 16) {
      setAgeError("Abide is currently available for people aged 16 and over.");
      return;
    }

    goToStep(3);
  }

  function completeOnboarding(firstAction: "home" | "memory") {
    localStorageUtils.set("abide-profile", {
      ...draft,
      theme,
      emailVerified: true,
      onboardingComplete: true,
    });

    localStorageUtils.remove(ONBOARDING_DRAFT_KEY);

    router.push(firstAction === "memory" ? "/?start=memory" : "/");
  }

  if (!isLoaded || !themeLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4EFE6]">
        <Sparkles className="animate-pulse text-[#C56B4E]" size={28} />
      </main>
    );
  }


  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#F4EFE6] px-5 py-6 text-[#1C1B1A] sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 text-[#C56B4E]/50"
      >
        <Heart size={22} />
      </div>

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => goToStep(step - 1)}
            aria-label="Go to previous step"
            className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-[#EDE6DA]"
          >
            <ArrowLeft size={20} />
          </button>
        ) : (
          <span className="w-11" />
        )}

        <span className="font-heading text-2xl font-bold">Abide</span>

        <span className="text-sm font-semibold text-[#6F675E]">
          Step {step} of 5
        </span>
      </header>

      <div
        className="relative mx-auto mt-8 h-2 w-full max-w-6xl overflow-hidden rounded-full bg-[#E2D8C9]"
        role="progressbar"
        aria-label="Onboarding progress"
        aria-valuemin={1}
        aria-valuemax={5}
        aria-valuenow={step}
      >
        <div
          className="h-full rounded-full bg-[#C56B4E] transition-all duration-300"
          style={{ width: `${(step / 5) * 100}%` }}
        />
      </div>

      <section className="relative  mt-6  mx-auto my-auto w-full max-w-[600px] py-4 overflow-hidden rounded-[40px] border-6 border-[#FBF5EB] bg-[#F2EADF] shadow-lg lg:h-full">
        <div className="rounded-3xl sm:p-10">
          {step === 1 && (
            <WelcomeStep
              username={draft.username || "newfriend"}
              onContinue={() => goToStep(2)}
            />
          )}

          {step === 2 && (
            <>
              <DateOfBirthStep
                dateOfBirth={draft.dateOfBirth}
                onChange={(dateOfBirth) => {
                  setDraft((current) => ({ ...current, dateOfBirth }));
                  setAgeError("");
                }}
                onContinue={continueFromAge}
              />
              {ageError && (
                <p role="alert" className="mt-3 text-sm text-[#A33D2A]">
                  {ageError}
                </p>
              )}
            </>
          )}

          {step === 3 && (
            <ProfileStep
              displayName={draft.displayName}
              username={draft.username}
              onChange={(updates) =>
                setDraft((current) => ({ ...current, ...updates }))
              }
              onContinue={() => goToStep(4)}
            />
          )}

          {step === 4 && (
            <AvatarStep
              avatarId={draft.avatarId}
              onChange={(avatarId) =>
                setDraft((current) => ({ ...current, avatarId }))
              }
              onContinue={() => goToStep(5)}
            />
          )}

          {step === 5 && (
            <ThemeStep
              theme={theme}
              displayName={draft.displayName}
              onThemeChange={changeTheme}
              onComplete={completeOnboarding}
            />
          )}
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#6F675E]">
          <Heart size={14} className="text-[#C56B4E]" />
          Private, personal, and built with care.
        </p>
      </section>
    </main>
  );
}
