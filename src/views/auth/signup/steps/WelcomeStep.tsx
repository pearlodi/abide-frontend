"use client";

import AuthButton from "@/src/components/shared/button/AuthButton";
import { ArrowRight } from "lucide-react";

interface WelcomeStepProps {
  username: string;
  onContinue: () => void;
}

export default function WelcomeStep({
  username,
  onContinue,
}: WelcomeStepProps) {
  return (
    <div className="flex text-center h-auto w-full flex-col rounded-3xl   lg:h-full">
          <img src="/onboard.jpg" className="w-50 mx-auto rounded-full"/>

      <span className="mb-4 text-xs font-bold tracking-widest text-[#C56B4E]">
        EMAIL CONFIRMED
      </span>

      <h1 className="font-heading text-4xl font-bold">
        Hey, {username}!
      </h1>

      
<p className="mt-4 max-w-md text-base leading-7 text-[#6F675E]">
  That's not really your name, is it?  Let's get to know you a little
  better with a few quick choices.
</p>


      <AuthButton
        onClick={onContinue}
      >
        Let's do it
      </AuthButton>
    </div>
  );
}