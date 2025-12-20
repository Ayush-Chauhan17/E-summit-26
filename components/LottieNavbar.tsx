"use client";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import { useRef } from "react";
import animationData from "@/public/lottie/tab-nav.json";
export default function LottieNavbar() {
  const router = useRouter();
  const lottieRef = useRef<any>(null);
  const handleNav = (trigger: string, path: string) => {
    lottieRef.current?.play(trigger);
    setTimeout(() => {
      router.push(path);
    }, 250);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="w-[420px]">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          style={{ cursor: "pointer" }}
          onClick={(e: any) => {
            const x = e.nativeEvent.offsetX;
            if (x < 80) handleNav("power_trigger", "/");
            else if (x < 160) handleNav("winner_trigger", "/winners");
            else if (x < 240) handleNav("security_trigger", "/security");
            else if (x < 320) handleNav("awards_trigger", "/awards");
            else handleNav("profile_trigger", "/profile");
          }}
        />
      </div>
    </div>
  );
}
