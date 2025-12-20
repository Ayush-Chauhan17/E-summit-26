"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logos/esummit26.png";
import Res from "@/public/reg.png";
import Particle from "@/components/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollTicket from "./ui/ScrollTicket.jsx";

const Hero: FunctionComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]); // Adjusted scale for smoother exit
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: i * 0.25 + 0.6, // staggered entry
      },
    }),
  };

  return (
    <section className=" relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden py-2">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particle />
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <ScrollTicket />

      <motion.div
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="
          text-center flex flex-col items-center gap-6 z-10 
          p-8 md:p-14 rounded-3xl
          /* GLASS CONTAINER FOR HERO CONTENT */
          bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        "
      >
        {/* Gradient Heading */}
        <h2
          className="text-xl md:text-2xl font-mono tracking-widest uppercase"
          
          style={{
            background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          presents
        </h2>

        {/* Logo with Glow Effect */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <Image
            unoptimized
            src={Logo}
            width={isSmallScreen ? 240 : 350}
            height={isSmallScreen ? 240 : 350}
            alt="E-Summit'26 Logo"
            className="relative z-10 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          // className="mt-2 text-gray-200 max-w-sm sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed hidden md:block text-shadow-sm"
          className="mt-2 text-gray-200 max-w-sm sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-xl md:leading-loose md:font-normal font-light hidden md:block text-shadow-sm"

        >
          Are you one of those people working day and night on that one startup
          idea? Are you the one who wants to explore the world of
          entrepreneurship? You&apos;ve arrived at the proper location. You are
          wanted by us!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-col md:flex-row gap-6 items-center w-full justify-center"
          initial="hidden"
          animate="visible"
        >
          {/* E-Summit Button */}
          <motion.div
            custom={0}
            variants={buttonVariants}
            className="w-full sm:w-auto relative"
          >
            <Link href="/payment?type=esummit">
              <button
                className="
                  group w-full sm:w-[280px] 
                  bg-gradient-to-r from-[#487AFA] via-[#23C0AD] to-[#F1E821]
                  text-white px-8 py-4 rounded-full flex items-center justify-between gap-4 font-bold
                  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(72,122,250,0.6)]
                  relative overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 text-sm md:text-base pointer-events-none">
                  Get Summit Passes
                </span>
                <Image
                  src={Res}
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="relative z-10 w-6 h-6 invert brightness-0"
                />
              </button>
            </Link>
          </motion.div>

          {/* Startup Expo Button */}
          <motion.div
            custom={1}
            variants={buttonVariants}
            className="w-full sm:w-auto relative"
          >
            <Link href="/payment?type=StartupExpo">
              <button
                className="
                  group w-full sm:w-[280px]
                  bg-transparent border-2 border-[#23C0AD]
                  text-white px-8 py-4 rounded-full flex items-center justify-between gap-4 font-bold
                  transition-all duration-300 hover:scale-105 hover:bg-[#23C0AD]/10 hover:shadow-[0_0_30px_rgba(35,192,173,0.4)]
                  relative
                "
              >
                <span className="relative z-10 text-sm md:text-base pointer-events-none text-[#23C0AD] group-hover:text-white transition-colors">
                  Startup Expo
                </span>
                {/* Reusing arrow or different icon logic here */}
                <div className="w-6 h-6 bg-[#23C0AD] rounded-full group-hover:bg-white transition-colors"></div>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <ToastContainer />
    </section>
  );
};

export default Hero;
