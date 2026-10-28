
import type { AppTheme } from "@/app/theme-provider";

export type AvatarMoodId =
  | "inactive"
  | "welcome-back"
  | "chilling"
  | "consistent"
  | "streak"
  | "milestone";

export interface AvatarMood {
  id: AvatarMoodId;
  emoji: string;
  label: string;
  message: string;
}

export interface AvatarMoodConfig {
  inactiveAfterDays: number;
  streakMilestones: number[];
  moods: {
    inactive: AvatarMood;
    welcomeBack: AvatarMood;
    chilling: AvatarMood;
    consistent: AvatarMood;
    streak: AvatarMood;
    milestone: AvatarMood;
  };
}

export interface HomeGreeting {
  date: string;
  formattedDate: string;
  firstName: string;
  eyebrow: string;
  headline: string;
  description: string;
}

export interface HomeProfile {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
}

export interface HomeActivity {
  lastActiveAt: string;
  lastCheckInDate: string | null;
  currentStreak: number;
  longestStreak: number;
  totalActiveDays: number;
  isActiveToday: boolean;
  streakMilestone: number | null;
}

export interface HomeStats {
  currentStreak: number;
  monthlyXp: number;
}

export interface ScriptureReference {
  book: string;
  chapter: number;
  reference: string;
}

export interface HomeDevotional {
  id: string;
  category: string;
  durationMinutes: number;
  title: string;
  description: string;
  scripture: ScriptureReference;
  completed: boolean;
  completedAt: string | null;
}

export interface BibleReading {
  book: string;
  chapters: number[];
  reference: string;
  title: string;
}

export interface LastReadLocation {
  book: string;
  chapter: number;
  verse: number;
  reference: string;
}

export interface BibleJourney {
  id: string;
  title: string;
  progressPercent: number;
  currentDay: number;
  totalDays: number;
  currentReading: BibleReading;
  lastRead: LastReadLocation;
}

export interface HomeSectionHeading {
  eyebrow: string;
  title: string;
  description: string;
}

export type HomeDestination =
  | "Bible"
  | "Study"
  | "Notes"
  | "Fellowship"
  | "Chat"
  | "You";

export interface HomeNavigationItem {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  destination: HomeDestination;
  icon: string;
}

export interface VerseOfTheDay {
  id: string;
  label: string;
  subtitle: string;
  text: string;
  emphasizedText: string;
  reference: string;
  translation: string;
  isSaved: boolean;
}

export interface MemoryVerse {
  id: string;
  title: string;
  masteredParts: number;
  totalParts: number;
  xpReward: number;
  text: string;
  reference: string;
  words: string[];
  revealedParts: boolean[];
}

export interface WeeklyAchievementDay {
  day: string;
  completed: boolean;
}

export interface WeeklyAchievement {
  label: string;
  title: string;
  description: string;
  streak: number;
  days: WeeklyAchievementDay[];
}

export interface HomePageData {
  theme: AppTheme;
  greeting: HomeGreeting;
  profile: HomeProfile;
  activity: HomeActivity;
  avatarMood: AvatarMood;
  stats: HomeStats;
  devotional: HomeDevotional;
  bibleJourney: BibleJourney;
  sectionHeading: HomeSectionHeading;
  navigation: HomeNavigationItem[];
  verseOfTheDay: VerseOfTheDay;
  memoryVerse: MemoryVerse;
  weeklyAchievement: WeeklyAchievement;
}


