"use client";
import React, { useState, useRef, useEffect } from "react";
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
  const [isModal, setIsModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModal(false);
      }
    }
    if (isModal) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isModal]);

  const shortDescription = `${props.description.substring(0, 100)}...`;

  return (
    <>
      {/* CARD */}
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
            boxShadow: "0px 10px 40px -10px rgba(255, 215, 0, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="
            relative sm:w-80 py-6 px-4 rounded-3xl overflow-hidden
            bg-white/5 backdrop-blur-xl border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
            hover:border-yellow-400/40 transition-all duration-300 group
          "
        >
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

          <p className="text-sm text-gray-300/90 p-2 leading-relaxed font-light text-center">
            {shortDescription}
          </p>

          <div className="flex justify-center mt-2 relative z-10">
            <button
              onClick={() => setIsModal(true)}
              className="text-xs text-yellow-400/80 hover:text-yellow-300 uppercase tracking-widest font-semibold transition-colors duration-300"
            >
              Read more
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
                  w-full bg-gradient-to-r from-yellow-500 to-yellow-600 
                  text-black font-bold tracking-wider border-0
                  hover:from-yellow-400 hover:to-yellow-500 
                  shadow-[0_0_20px_rgba(234,179,8,0.3)]
                  hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]
                  rounded-xl py-6 transition-all duration-300
                "
              >
                REGISTER
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                bg-white/10 border border-yellow-400/30 backdrop-blur-xl
                shadow-xl rounded-2xl p-6 max-w-lg w-full
              "
            >
              <h2 className="text-center text-2xl font-bold text-yellow-300 drop-shadow mb-4">
                {props.title}
              </h2>

              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                {props.description}
              </p>

              <a href={props.eventPage} target="_blank" rel="noreferrer">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-4 rounded-xl">
                  REGISTER
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventsCard;
