"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomSlider from "./CustomSlider";
import AlternativeComponent from "./AltComp";


const ResponsiveComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => setIsSmallScreen(window.innerWidth < 768);
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const slidesData = [
{
  name: "Shivam",
  description: "Frontend Developer",
  post: "The summit was incredibly inspiring! The keynote sessions were thought-provoking, and the networking felt top-notch. It gave me a fresh, motivating perspective on entrepreneurship and helped me connect with amazing people."
},
{
  name: "Ramesh",
  description: "Graphic Designer",
  post: "I loved the great mix of workshops and speaker sessions. The insights shared by experienced mentors were extremely practical, and each interaction felt valuable for my startup journey. The event truly exceeded expectations in every possible way."
},
{
  name: "Swati",
  description: "UI/UX Designer",
  post: "The event was well-organized, and the energy throughout the summit was amazing. I especially enjoyed the pitch competition sessions. They were exciting, challenging, and incredibly rewarding, making the whole experience memorable."
},
{
  name: "Manoj",
  description: "College Fresher",
  post: "As a first-time attendee, I appreciated how approachable all the speakers were. The panel discussions on funding and scaling startups offered meaningful direction and clarity. It was eye-opening, motivating, and very enjoyable."
},
{
  name: "Aryan",
  description: "Aspiring Product Manager",
  post: "The vast diversity of topics covered during the summit was genuinely impressive. From technology trends to leadership skills, every session added real value to my knowledge. The event was vibrant, insightful, and highly engaging in every sense."
}

  ];

  return (
    <section className="relative w-full py-20 px-4 flex justify-center items-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-900/20 blur-[100px] rounded-full -z-10" />
      
      {/* Additional decorative blur glows */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-[#23C0AD]/20 blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#487AFA]/20 blur-[120px] -z-10" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative w-full max-w-6xl 
          bg-white/10 backdrop-blur-xl border border-white/20 
          rounded-[2.5rem] p-8 md:p-14
          shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
          overflow-hidden
        "
      >
        {/* Decorative Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

        <div className="text-center mb-8">
          <h2
            className="
              text-3xl md:text-5xl font-extrabold tracking-tight mb-4
            "
            style={{
              background: "linear-gradient(90deg, #F1E821, #23C0AD, #487AFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Our Participants Say
          </h2>
          <p className="text-gray-200 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Hear directly from the attendees about their experiences at the summit.
          </p>
        </div>

        {/* Custom Slider */}
        <div className="relative">
          <CustomSlider
            heading="What our Participants speak for us?"
            gradientText="Participants speak"
            slidesData={slidesData}
            sliderType="participant"
          />
        </div>
      </motion.div>
    </section>
  );
};


export default ResponsiveComponent;