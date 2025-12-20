"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  // Track scroll progress for only this paragraph
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 90%", "end 40%"], // animation starts when enters, ends when leaving
  });

  // Paragraph text
  const heroText =
    "E-Summit is a high-energy celebration where innovation, entrepreneurship, and bold ideas converge to shape the future, brought to you by the Entrepreneurship Cell, IIT (BHU).";

  const words = heroText.split(" "); // split by character
  return (
    <section
      className="relative w-full py-20 px-4 flex justify-center items-center"
      id="about"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full -z-10" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
       className="
  relative w-full max-w-5xl 
  bg-white/10 backdrop-blur-xl border border-white/20 
  rounded-[2.5rem] p-8 md:p-14
  shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
  overflow-hidden

        "
      >
        {/* Decorative Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="text-center space-y-8">
          <h3
            // className="text-3xl md:text-5xl font-extrabold tracking-tight"
            className="
    text-3xl 
    sm:text-4xl 
    md:text-5xl 
    font-extrabold 
    tracking-tight"
            style={{
              background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT E-SUMMIT&apos;26
          </h3>

          <div className="space-y-6 text-gray-200 leading-relaxed font-light">
            <motion.p
            ref={textRef}
            className="
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              font-medium leading-relaxed
              flex flex-wrap justify-center
            "
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;

              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["#9CA3AF", "#FFFFFF"]
              );

              return (
                <React.Fragment key={index}>
                <motion.span
                  style={{ color }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
                <span>&nbsp;</span>
    </React.Fragment>
              );
            })}
          </motion.p>
            {/* <p className="text-base md:text-lg opacity-80 max-w-3xl mx-auto"> */}
            <p className="
  text-sm 
  sm:text-base 
  md:text-lg 
  lg:text-xl 
  leading-relaxed 
  opacity-80 
  max-w-3xl 
  mx-auto
">

              
              <span className="text-yellow-400 font-normal">
                &quot;The drive to create, innovate and transform the future.&quot;
              </span>
            </p>

            <p className="text-base md:text-lg opacity-80 max-w-3xl mx-auto">
              E-Summit is where ideas are nurtured, ambitions take form, and the
              next generation of entrepreneurs begins its journey.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
