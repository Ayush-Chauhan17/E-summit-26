"use client";
import React, { useState, useEffect } from "react";
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
      post: "The summit was incredibly inspiring! The keynote sessions were thought-provoking, and the networking opportunities were top-notch. It gave me a fresh perspective on entrepreneurship.",
    },
    {
      name: "Ramesh",
      description: "Graphic Designer",
      post: "I loved the mix of workshops and speaker sessions. The practical insights shared by industry experts were extremely helpful for my startup journey.",
    },
    {
      name: "Swati",
      description: "UI/UX Designer",
      post: "The event was well-organized, and the energy throughout the summit was amazing. I especially enjoyed the pitch competition—it was both challenging and rewarding!",
    },
    {
      name: "Manoj",
      description: "College Fresher",
      post: "As a first-time attendee, I appreciated how approachable the speakers were. The panel discussions on funding and scaling startups were particularly useful.",
    },
    {
      name: "Aryan",
      description: "Aspiring Product Manager",
      post: "The diversity of topics covered in the summit was impressive. From technology trends to leadership skills, every session added value to my entrepreneurial knowledge.",
    },
  ];

  return (
    <section
      className=" 
        relative py-16 md:py-20 
        bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#161616]
        text-[#F1E821]
        overflow-hidden
      "
    >
      <div className="text-center mb-8 px-4">
        <h2
          className="
            text-3xl md:text-5xl font-extrabold uppercase tracking-wide
            text-transparent bg-clip-text 
            bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA]
            drop-shadow-[0_0_10px_rgba(35,192,173,0.4)]
          "
        >
          What Our Participants Say
        </h2>
        <p className="text-[#cfcfcf] mt-3 text-sm md:text-base">
          Hear directly from the attendees about their experiences at the summit.
        </p>
      </div>

      {/* Custom Slider */}
      <div
        className="
          mx-auto max-w-6xl px-4
          border-t border-[#23C0AD]/20 
          pt-6 backdrop-blur-[2px]
        "
      >
        <CustomSlider
          heading="What our Participants speak for us?"
          gradientText="Participants speak"
          slidesData={slidesData}
          sliderType="participant"
        />
      </div>

      {/* Optional decorative blur glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-[#23C0AD]/20 blur-[120px]" />
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#487AFA]/20 blur-[120px]" />
      </div>
    </section>
  );
};

export default ResponsiveComponent;
