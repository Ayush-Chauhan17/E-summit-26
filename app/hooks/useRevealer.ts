"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
}

export function useRevealer() {
  useGSAP(() => {
    // This is the logic shown in your reference screenshot
    gsap.to(".revealer", {
      scaleY: 0,
      duration: 1.25,
      delay: 0.5, // Reduced delay for better feel
      ease: "hop",
    });
  }, []);
}