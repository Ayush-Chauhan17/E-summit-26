// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "./WSYA.module.css";
// import Cup from "@/public/WSYA/communication.svg";
// import Tec from "@/public/WSYA/taking-notes.svg";
// import Mic from "@/public/WSYA/podcast-show.svg";
// import StartupShowCase from "@/public/WSYA/startupShowcase.svg";

// const MotionDiv = ({ src, width, height, alt, text }) => (
//   <motion.div
//     initial={{ scale: 0.6, opacity: 0 }}
//     whileInView={{ scale: 1, opacity: 1 }}
//     transition={{ duration: 2 }}
//     className="mt-8 flex flex-col items-center justify-center"
//   >
//     <div className="filter invert">
//       <Image
// unoptimized src={src} width={width} height={height} alt={alt} />
//     </div>
//     <p className="">{text}</p>
//   </motion.div>
// );

// const WSYA = () => {
//   const items = [
//     {
//       src: Cup,
//       width: 150,
//       height: 36,
//       alt: "Events & Competitions",
//       text: "Events & Competitions",
//     },
//     {
//       src: Tec,
//       width: 250,
//       height: 36,
//       alt: "Workshops & Masterclasses",
//       text: "Workshops & Masterclasses",
//     },
//     {
//       src: Mic,
//       width: 250,
//       height: 36,
//       alt: "Talkshows & Keynote Lecture",
//       text: "Talkshows & Keynote Lecture",
//     },
//     {
//       src: StartupShowCase,
//       width: 150,
//       height: 36,
//       alt: "Startup Showcase",
//       text: "Startup Showcase",
//     },
//   ];

//   return (
//     <div className="text-center  py-12 text-primary-foreground pb-16 relative">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-2">Why should You{" "}  <span
//     style={{
//       background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     }}
//   >
//     Attend
//   </span>{" "}?</h1>
//         <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-5 break-words">
//           E-Summit has a range of events, competitions, panel discussions,
//           <br /> networking, and pitching opportunities for every vertical of
//           our entrepreneurial society.
//         </p>
//         <div className="min-h-full flex flex-col md:flex-row justify-around items-center">
//           {items.map((item, index) => (
//             <MotionDiv key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WSYA;
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./WSYA.module.css";
import Cup from "@/public/WSYA/communication.svg";
import Tec from "@/public/WSYA/taking-notes.svg";
import Mic from "@/public/WSYA/podcast-show.svg";
import StartupShowCase from "@/public/WSYA/startupShowcase.svg";

const MotionDiv = ({ src, width, height, alt, text }) => (
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2 }}
    className="mt-8 flex flex-col items-center justify-center relative group"
  >
    {/* Glassmorphism Circle Background */}
    <div className="relative mb-6">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
      
      {/* Glassmorphism circle */}
      <div className="
        relative
       w-[180px] h-[190px] 
        rounded-full
        bg-white/10 
        backdrop-blur-xl 
        border border-white/20
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        flex items-center justify-center
        group-hover:bg-white/15
        group-hover:border-white/30
        group-hover:shadow-[0_12px_40px_0_rgba(72,122,250,0.3)]
        transition-all duration-500
      ">
        {/* Image inside circle */}
        <div className="filter invert group-hover:scale-110 transition-transform duration-500">
          <Image 
            unoptimized 
            src={src} 
            width={width} 
            height={height} 
            alt={alt} 
          />
        </div>
      </div>
    </div>
    
    {/* Text label */}
    <p className="text-white text-base md:text-lg font-medium text-center max-w-[200px]">
      {text}
    </p>
  </motion.div>
);

const WSYA = () => {
  const items = [
    {
      src: Cup,
      width: 80,
      height: 80,
      alt: "Events & Competitions",
      text: "Events & Competitions",
    },
    {
      src: Tec,
      width: 100,
      height: 100,
      alt: "Workshops & Masterclasses",
      text: "Workshops & Masterclasses",
    },
    {
      src: Mic,
      width: 100,
      height: 100,
      alt: "Talkshows & Keynote Lecture",
      text: "Talkshows & Keynote Lecture",
    },
    {
      src: StartupShowCase,
      width: 80,
      height: 80,
      alt: "Startup Showcase",
      text: "Startup Showcase",
    },
  ];

  return (
    <div className="text-center py-12 text-primary-foreground pb-16 relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          Why should You{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Attend
          </span>
          ?
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-5 break-words text-gray-200">
          E-Summit has a range of events, competitions, panel discussions,
          <br /> networking, and pitching opportunities for every vertical of
          our entrepreneurial society.
        </p>
        <div className="min-h-full flex flex-col md:flex-row justify-around items-center gap-8 px-4">
          {items.map((item, index) => (
            <MotionDiv key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WSYA;