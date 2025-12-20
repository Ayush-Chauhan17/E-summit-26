import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About/about";
import WSYA from "@/components/WSYA/WSYA";
import SlidersComponent from "@/components/SliderComponent";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import FAQ from "@/components/FAQ";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <section className="relative min-h-screen pb-8 pt-6 md:py-10 overflow-hidden">
      {/* ANIMATED BACKGROUND FOR ENTIRE PAGE */}
      <InteractiveBackground size={45} />
      <div className="fixed inset-0 -z-20">
        <AnimatedBackground />
      </div>

      {/* Optional: Add a subtle ambient light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10" />

      <main className="relative z-10 grid items-center gap-12 px-4 sm:px-6">
        <Hero />
        
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Stats />
        </div>
        
        <About />
        <WSYA />
        <SlidersComponent />
        <MarqueeComponent />
        <FAQ />
      </main>
    </section>
  );
}