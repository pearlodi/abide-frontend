
import type { Metadata } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Navbar from "@/src/components/shared/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Abide",
  description: "Your faith, your pace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fredoka.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("abide-theme");
                if (["boy", "girl", "monochrome", "hotpink", "purple"].includes(theme)) {
                  document.documentElement.dataset.theme = theme;
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className="min-h-full  flex flex-col font-sans">
        <ThemeProvider>
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
