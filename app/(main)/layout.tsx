import Navbar from "@/src/components/shared/Navbar";
import type { ReactNode } from "react";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* Footer */}
    </>
  );
}