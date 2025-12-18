"use client";
import { useEffect, useState } from "react";

const InteractiveBackground = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-300"
      style={{
        background: `
          radial-gradient(
            circle at ${pos.x}% ${pos.y}%,
            rgba(241,232,33,0.25),
            rgba(35,192,173,0.2),
            rgba(72,122,250,0.15),
            #000
          )
        `,
      }}
    />
  );
};

export default InteractiveBackground;
