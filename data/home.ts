import { AvatarMoodConfig, HomePageData } from "@/types/home";


export const avatarMoodConfig: AvatarMoodConfig = {
  inactiveAfterDays: 3,

  streakMilestones: [7, 14, 30, 60, 100],

  moods: {
    inactive: {
      id: "inactive",
      emoji: "😔",
      label: "We miss you",
      message: "Your little corner is waiting for you.",
    },
    welcomeBack: {
      id: "welcome-back",
      emoji: "👋",
      label: "Welcome back",
      message: "Ready for one good step?",
    },
    chilling: {
      id: "chilling",
      emoji: "😎",
      label: "Taking it easy",
      message: "You're finding your rhythm.",
    },
    consistent: {
      id: "consistent",
      emoji: "👍",
      label: "Looking good",
      message: "Look at you showing up!",
    },
    streak: {
      id: "streak",
      emoji: "🔥",
      label: "On a roll",
      message: "Your streak is growing. Keep going!",
    },
    milestone: {
      id: "milestone",
      emoji: "🥳",
      label: "That's a milestone!",
      message: "Every little step is adding up.",
    },
  },
};

export const mockHomeData: HomePageData = {
  theme: "purple",

  greeting: {
    date: "2025-06-14",
    formattedDate: "SATURDAY, JUNE 14",
    firstName: "pearl",
    eyebrow: "Purple",
    headline: "ready for one good step?",
    description:
      "A few quiet minutes can change the shape of your whole day.",
  },

  profile: {
    id: "user_001",
    username: "pearl",
    displayName: "Pearl",
    avatarUrl: "/3s.jpg",
  },

  activity: {
    lastActiveAt: "2025-06-14T09:30:00Z",
    lastCheckInDate: "2025-06-14",
    currentStreak: 5,
    longestStreak: 12,
    totalActiveDays: 28,
    isActiveToday: true,
    streakMilestone: null,
  },

  avatarMood: {
    id: "streak",
    emoji: "🔥",
    label: "On a roll",
    message: "Your streak is growing. Keep going!",
  },

  stats: {
    currentStreak: 5,
    monthlyXp: 240,
  },

  devotional: {
    id: "devotional_001",
    category: "DAILY DEVOTIONAL",
    durationMinutes: 5,
    title: "Peace for the in-between.",
    description:
      "You do not need every answer to trust the One who sees the whole story.",
    scripture: {
      book: "Psalms",
      chapter: 46,
      reference: "Psalm 46",
    },
    completed: false,
    completedAt: null,
  },

  bibleJourney: {
    id: "plan_001",
    title: "30 Days Through Psalms",
    progressPercent: 40,
    currentDay: 12,
    totalDays: 30,
    currentReading: {
      book: "Psalms",
      chapters: [46, 47, 48],
      reference: "Psalm 46–48",
      title: "Peace when life feels loud",
    },
    lastRead: {
      book: "Psalms",
      chapter: 46,
      verse: 1,
      reference: "Psalm 46",
    },
  },

  sectionHeading: {
    eyebrow: "YOUR ABIDE",
    title: "Where would you like to go?",
    description:
      "Pick up a passage, reflect, gather, or simply see how your rhythm is growing.",
  },

  navigation: [
    {
      id: "bible",
      title: "Bible",
      description: "Continue from Psalm 46",
      subtitle: "Return to your last-read place.",
      destination: "Bible",
      icon: "book-open",
    },
    {
      id: "study",
      title: "Study",
      description: "Study at your pace",
      subtitle: "Memory Verse, Devotional, and Bible Reading.",
      destination: "Study",
      icon: "book-marked",
    },
    {
      id: "notes",
      title: "Notes",
      description: "Open your reflections",
      subtitle: "Saved notes, folders, and recent thoughts.",
      destination: "Notes",
      icon: "notebook-pen",
    },
    {
      id: "fellowship",
      title: "Fellowship",
      description: "Gather with others",
      subtitle: "Discover, listen, or prepare to host.",
      destination: "Fellowship",
      icon: "users",
    },
    {
      id: "ai-chat",
      title: "AI Bible Chat",
      description: "Ask about Scripture",
      subtitle: "Explore a passage with sample guidance.",
      destination: "Chat",
      icon: "message-circle",
    },
    {
      id: "you",
      title: "You",
      description: "Your space",
      subtitle: "Progress, preferences, plans, and settings.",
      destination: "You",
      icon: "user-round",
    },
  ],

  verseOfTheDay: {
    id: "verse_001",
    label: "VERSE OF THE DAY",
    subtitle: "A truth to carry",
    text: "Let all that you do be done in love.",
    emphasizedText: "love.",
    reference: "1 Corinthians 16:14",
    translation: "ESV",
    isSaved: false,
  },

  memoryVerse: {
    id: "memory_001",
    title: "Memory verse",
    masteredParts: 3,
    totalParts: 5,
    xpReward: 20,
    text: "Be still, and know that I am God.",
    reference: "Psalm 46:10",
    words: ["Be still", "and know", "that I am God"],
    revealedParts: [false, true, false],
  },

  weeklyAchievement: {
    label: "WEEKLY WIN",
    title: "Okayyy, look at you growing!",
    description:
      "Seven days of showing up. That is something to celebrate.",
    streak: 7,
    days: [
      { day: "M", completed: true },
      { day: "T", completed: true },
      { day: "W", completed: true },
      { day: "T", completed: true },
      { day: "F", completed: true },
      { day: "S", completed: true },
      { day: "S", completed: false },
    ],
  },
};
