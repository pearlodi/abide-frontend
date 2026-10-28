// import ThemeButton from "@/src/components/shared/themes/Button";
// import ThemeCard from "@/src/components/shared/themes/Card";
// import ThemeHeading from "@/src/components/shared/themes/Heading";
// import ThemeText from "@/src/components/shared/themes/Text";

import { Sparkles, Heart, Flame, ArrowRight } from "lucide-react";

// export default function Example() {
//   return (
//     <ThemeCard color="lavender" shadow="theme" padding="lg">
//       <ThemeHeading level={2} color="navy-deep">
//         Your daily devotion
//       </ThemeHeading>

//       <ThemeButton shadow="theme" color="navy" textColor="white">
//         Start  todays devotional
//       </ThemeButton>
//       <ThemeText color="navy">
//         Take a moment to spend time with God.
//       </ThemeText>

//     </ThemeCard>
//   );
// }

import Container from "@/src/components/shared/Container";
import Link from "next/link";

export default function Welcome() {
  return (
    <main className="min-h-screen bg-[#F4EFE6] px-6 pb-16 pt-6 text-[#1C1B1A]">
      <header className="flex justify-end">
        <button
          type="button"
          className="rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-[#EDE6DA]"
        >
          I already have an account
        </button>
      </header>

      <Container className="mt-8 flex justify-center items-center h-[80vh]">
        <section className="grid h-auto w-full grid-cols-1 gap-8 lg:h-[580px] lg:grid-cols-2">
          {/* Artwork card */}
          <div className="relative h-96 w-full overflow-hidden rounded-[40px] border-10 border-[#FBF5EB] bg-[#EEE0CF] shadow-lg lg:h-full">
            <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[#EED79F] opacity-80 sm:top-24 sm:h-72 sm:w-72" />

            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-white/35" />

            <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 overflow-hidden rounded-full bg-[#EED79F] opacity-80 sm:top-26 sm:h-72 sm:w-72">
              <img
                src="/abide.jpg"
                alt="Abide"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="absolute left-8 top-12 z-20 flex h-12 w-12 -rotate-6 items-center justify-center rounded-2xl bg-[#EEE0CF] text-[#C56B4E] shadow-raised">
              <Sparkles size={22} />
            </div>

            <div className="absolute right-8 top-20 z-20 flex h-12 w-12 rotate-6 items-center justify-center rounded-2xl bg-[#DFA083] text-[#713D2E] shadow-raised">
              <Heart size={20} />
            </div>
            <div className="absolute animate-bounce left-4 top-56 z-20 rounded-2xl bg-[#FBF9F6] px-4 py-3 shadow-md sm:left-6">
              <span className="block text-xs font-bold text-[#C56B4E]">
                Today’s reminder
              </span>
              <strong className="mt-1 block text-sm">
                You are loved. Fully.
              </strong>
              <div className="absolute -right-4 top-6 border-8 border-transparent border-l-[#FBF9F6]" />
            </div>

            <div className="absolute w-fit bottom-6 right-5 z-20 grid grid-cols-2 items-center  rounded-2xl bg-[#EAD2C2] px-4 py-3 shadow-md">
              <Flame className="row-span-2 text-[#C56B4E]" size={22} />
              <strong className="text-lg leading-none">7</strong>
              <span className="text-xs">day streak</span>
            </div>
          </div>

          {/* Welcome card */}
         <div className="bg-[white] pr-1 rounded-[40px] pt-1.5">
         <div className="flex h-auto w-full flex-col pt-10 rounded-[40px] bg-[#FCF7EE] p-6 sm:p-8 lg:h-full">
            <div className="flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#C56B4E]">
              <Sparkles className="animate-pulse" size={15} />
              Abide in me, and I in you…
            </div>

            <h1 className="mb-2 mt-5 font-heading text-6xl font-bold leading-none tracking-tight">
              Welcome to Abide
            </h1>
            {/* <p className="mb-2 font-heading text-lg font-bold leading-none tracking-tight">
            A little space to grow in faith.


            </p> */}

            <p className="mb-7 text-sm leading-relaxed text-[#6F675E]">
              Begin with Scripture, honest reflection, and Fellowship one real
              day at a time.
            </p>

            <label className="mb-4 mt-6 block">
              {/* <span className="mb-2 ml-1 block text-xs font-extrabold">
                Google account email
              </span> */}
              <input
                autoComplete="email"
                className="min-h-14 w-full rounded-2xl border-2 border-[#D7CFC1] bg-[#FBF9F6] px-4 outline-none placeholder:text-[#8D857B] focus:border-[#C56B4E]"
                placeholder="you@example.com"
                type="email"
              />
            </label>

            <Link
              href="/onboarding"
              className="flex min-h-14  w-full items-center justify-center gap-3 rounded-2xl bg-[#1C1B1A] px-5 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 active:translate-y-0"
            >
              Join with Google
              <ArrowRight size={18} />
            </Link>

            <button
              type="button"
              className="mt-6 shadow-raised flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl bg-[#F6F0E5] text-sm font-extrabold transition hover:bg-[#EDE6DA]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-base font-bold text-[#4285F4]">
                G
              </span>
              Choose my Google account
            </button>

            <small className="mt-auto pt-4 text-center text-xs leading-5 text-[#6F675E]">
              By continuing, you agree to our Terms and Privacy Policy.
            </small>
          </div>
         </div>
        </section>
      </Container>

      {/* Bottom marquee */}
      <div className="fixed bottom-0 left-0 flex min-h-12 w-full items-center justify-center gap-8 overflow-hidden whitespace-nowrap bg-[#1C1B1A] px-4 text-xs font-extrabold tracking-widest text-white max-sm:gap-4">
        <span>Daily devotionals</span>
        <span className="text-[#C56B4E]">✦</span>
        <span>Bible reading</span>
        <span className="text-[#C56B4E]">✦</span>
        <span>Memory verses</span>
        <span className="text-[#C56B4E]">✦</span>
        <span>Real encouragement</span>
      </div>
    </main>
  );
}
