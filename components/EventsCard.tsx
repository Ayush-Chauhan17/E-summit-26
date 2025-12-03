"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type EventProps = {
  title: string;
  description: string;
  imageUrl: string;
  eventPage: string;
};

const EventsCard = (props: EventProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortDescription = `${props.description.substring(0, 100)}...`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6,
      }}
      viewport={{ once: true }}
      className="flex justify-center m-4"
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 10px 40px -10px rgba(255, 215, 0, 0.15)", // Golden glow on hover
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="
          relative sm:w-80 py-6 px-4 rounded-3xl overflow-hidden
          /* GLASS EFFECTS START */
          bg-white/5 
          backdrop-blur-xl 
          border border-white/10 
          shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
          /* GLASS EFFECTS END */
          hover:border-yellow-400/40 
          transition-all duration-300
          group
        "
      >
        {/* Optional: Inner Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center relative z-10"
        >
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/5">
            <Image
              unoptimized
              src={props.imageUrl}
              alt={props.title}
              width={280}
              height={200}
              className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        <h1 className="text-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mt-5 tracking-wide drop-shadow-sm">
          {props.title}
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? "expanded" : "collapsed"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-300/90 p-2 leading-relaxed font-light text-center">
              {isExpanded ? props.description : shortDescription}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-2 relative z-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-yellow-400/80 hover:text-yellow-300 uppercase tracking-widest font-semibold transition-colors duration-300"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        </div>

        <div className="flex justify-center mt-6 relative z-10">
          <motion.a
            href={props.eventPage}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <Button
              className="
                w-full
                bg-gradient-to-r from-yellow-500 to-yellow-600 
                text-black font-bold tracking-wider
                border-0
                hover:from-yellow-400 hover:to-yellow-500 
                shadow-[0_0_20px_rgba(234,179,8,0.3)] 
                hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]
                rounded-xl py-6
                transition-all duration-300
              "
            >
              REGISTER
            </Button>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventsCard;