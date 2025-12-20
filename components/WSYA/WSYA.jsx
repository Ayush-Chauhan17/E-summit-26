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
    className="mt-8 flex flex-col items-center justify-center"
  >
    <div className="filter invert">
      <Image
unoptimized src={src} width={width} height={height} alt={alt} />
    </div>
    <p className="">{text}</p>
  </motion.div>
);

const WSYA = () => {
  const items = [
    {
      src: Cup,
      width: 150,
      height: 36,
      alt: "Events & Competitions",
      text: "Events & Competitions",
    },
    {
      src: Tec,
      width: 250,
      height: 36,
      alt: "Workshops & Masterclasses",
      text: "Workshops & Masterclasses",
    },
    {
      src: Mic,
      width: 250,
      height: 36,
      alt: "Talkshows & Keynote Lecture",
      text: "Talkshows & Keynote Lecture",
    },
    {
      src: StartupShowCase,
      width: 150,
      height: 36,
      alt: "Startup Showcase",
      text: "Startup Showcase",
    },
  ];

  return (
    <div className="text-center  py-12 text-primary-foreground pb-16 relative">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Why should You{" "}  <span
    style={{
      background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Attend
  </span>{" "}?</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-5 break-words">
          E-Summit has a range of events, competitions, panel discussions,
          <br /> networking, and pitching opportunities for every vertical of
          our entrepreneurial society.
        </p>
        <div className="min-h-full flex flex-col md:flex-row justify-around items-center">
          {items.map((item, index) => (
            <MotionDiv key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WSYA;
