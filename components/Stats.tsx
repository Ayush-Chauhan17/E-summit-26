"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Tilt } from "react-tilt";

interface Stat {
  value: string;
  label: string;
}

const statsData: Stat[] = [
  { value: "250+", label: "Startups" },
  { value: "8000+", label: "Attendees" },
  { value: "20+", label: "Guest Speakers" },
  { value: "15+", label: "Investors" },
  { value: "10+", label: "Events" },
  { value: "50+", label: "Partners" },
];

const StatItem: FunctionComponent<Stat & { isFirstItem: boolean }> = ({
  value,
  label,
  isFirstItem,
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, numericValue, {
            duration: 2.5,
            ease: "circOut",
          });
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, [count, numericValue]);

  return (
    <div
      ref={ref}
      className={`
        
        relative flex flex-col justify-center items-center py-4 px-2
        w-full md:w-auto
        group
      `}
    >
      {/* Vertical Divider for Desktop (Glass Style) */}
      {!isFirstItem && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      )}
      {/* Horizontal Divider for Mobile */}
      {!isFirstItem && (
        <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      <motion.div 
        className="flex justify-center items-center gap-1"
        whileHover={{ scale: 1.1 }}
      >
        <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-teal-300 to-blue-600 drop-shadow-sm">
          {rounded}
        </motion.h2>
        <span className="text-2xl sm:text-3xl font-semibold text-teal-500">
          +
        </span>
      </motion.div>
      <p className="text-gray-400 mt-2 text-xs sm:text-sm font-medium tracking-widest uppercase group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
};

const Stats: FunctionComponent = () => {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.02,   // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,   // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <section className="relative w-full px-4 md:px-10 py-16 overflow-hidden z-10">
      
      {/* Background Glow for Stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-blue-300/10 blur-[80px] -z-10 pointer-events-none" />

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 text-white tracking-wide">
        Key Event <span className="text-teal-400">Statistics</span>
      </h1>

      <Tilt options={defaultOptions} className="w-full max-w-6xl mx-auto">
        <div className="
          w-full 
          /* GLASS CONTAINER */
          bg-white/5 backdrop-blur-xl border border-white/10
          rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
          p-6 md:p-10
          flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0
        ">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              isFirstItem={index === 0}
            />
          ))}
        </div>
      </Tilt>
    </section>
  );
};

export default Stats;