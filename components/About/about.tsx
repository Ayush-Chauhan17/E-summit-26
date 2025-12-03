"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full py-20 px-4 flex justify-center items-center" id="about">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-900/20 blur-[100px] rounded-full -z-10" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative w-full max-w-5xl 
          /* GLASS CONTAINER */
          bg-white/5 backdrop-blur-xl border border-white/10 
          rounded-[2.5rem] p-8 md:p-14
          shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
          overflow-hidden
        "
      >
        {/* Decorative Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="text-center space-y-8">
          <h3
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT E-SUMMIT'26
          </h3>

          <div className="space-y-6 text-gray-200 leading-relaxed font-light">
            <h1 className="text-xl md:text-2xl font-medium text-white/90">
              E-Summit is an electrifying celebration of innovation and
              entrepreneurship, brought to you by the Entrepreneurship Cell (E-Cell) at the Indian Institute of Technology (IIT) BHU.
            </h1>
            
            <p className="text-base md:text-lg opacity-80 max-w-3xl mx-auto">
              This annual festival is a convergence of visionary thinkers,
              budding entrepreneurs, and established industry leaders, all
              united by a common passion: <span className="text-yellow-400 font-normal">"The drive to create, innovate and transform the future."</span>
            </p>

            <p className="text-base md:text-lg opacity-80 max-w-3xl mx-auto">
              E-Summit is where dreams are nurtured, ideas are cultivated, and
              future entrepreneurs are born. Join us in this exhilarating journey
              of entrepreneurship, and together let&apos;s write the future!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;