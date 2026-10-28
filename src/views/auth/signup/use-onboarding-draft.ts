
"use client";

import { useLocalStorage } from "@/src/hooks/use-local-storage";

export const ONBOARDING_DRAFT_KEY = "abide-onboarding-draft-v1";

export interface OnboardingDraft {
  dateOfBirth: string;
  displayName: string;
  username: string;
  avatarId: string;
  theme: string;
}

export const initialOnboardingDraft: OnboardingDraft = {
  dateOfBirth: "",
  displayName: "",
  username: "",
  avatarId: "",
  theme: "boy",
};

export function useOnboardingDraft() {
  return useLocalStorage<OnboardingDraft>(
    ONBOARDING_DRAFT_KEY,
    initialOnboardingDraft,
  );
}
