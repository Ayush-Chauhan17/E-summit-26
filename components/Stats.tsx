"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import "@/app/globals.css";
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
          // Animate the motion value to the target number once when visible
          animate(count, numericValue, {
            duration: 2,
            ease: "easeOut",
          });
          // stop observing after animation starts to avoid repeated triggers
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      // use the captured node reference to avoid ref.current changes during cleanup
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, [count, numericValue]);

  return (
    <Tilt>
      <div
        ref={ref}
        className={`
          mt-4 text-center flex flex-col justify-center items-center p-4
          ${
            isFirstItem
              ? ""
              : "md:border-l-2 border-yellow-400 border-t-2 md:border-t-0"
          }
        `}
      >
        <div className="flex justify-center items-center gap-1">
          <motion.h2 className="text-3xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-md">
            {rounded}
          </motion.h2>
          <span className="text-3xl sm:text-4xl font-semibold text-yellow-300">
            +
          </span>
        </div>
        <p className="text-gray-200 mt-2 tracking-wide font-medium">
          {label.toUpperCase()}
        </p>
      </div>
    </Tilt>
  );
};

const Stats: FunctionComponent = () => {
  return (
    <section className="px-0 md:px-20 py-10 overflow-hidden relative pb-16 mt-28 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#000000] text-white">
      <h1 className="text-3xl md:text-4xl text-yellow-400 font-bold text-center mb-6 drop-shadow-lg">
        Key Event Statistics
      </h1>

      <div className="md:w-full w-1/3 mx-auto bg-white/10 px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-md border border-yellow-500/40 flex flex-col md:flex-row justify-around items-center">
        {statsData.map((stat, index) => (
          <StatItem
            key={index}
            value={stat.value}
            label={stat.label}
            isFirstItem={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
