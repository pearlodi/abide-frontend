
"use client"

import { useTheme } from "@/app/theme-provider";
import Hero from "./Hero";
import DevotionalAndReading from "./Devotional";
import HomePortal from "./Portal";
import VerseAndMemory from "./VerseAndMemory";
import AchievementStrip from "./Achievement";

const WelcomePage = () => {
  const { theme } = useTheme();
  const girlTheme = theme === "girl";
  return (
    <>
     <Hero/>
     <DevotionalAndReading theme={theme} />
     <HomePortal theme={theme} />
     <VerseAndMemory theme={theme} />
     <AchievementStrip theme={theme} />
     
    </>
  );
};

export default WelcomePage;
