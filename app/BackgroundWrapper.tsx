"use client";

import { usePathname } from "next/navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import TransitionBackground from "@/components/TransitionBackground";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function BackgroundWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="fixed inset-0 -z-10">
      {isHomePage && <AnimatedBackground />}
      <InteractiveBackground size={isHomePage ? 45 : 60} />
      {!isHomePage && <TransitionBackground />}
    </div>
  );
}
