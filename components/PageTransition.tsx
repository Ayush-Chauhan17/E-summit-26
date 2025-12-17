"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showContent, setShowContent] = React.useState(false);

  // Reset on route change
  React.useEffect(() => {
    setShowContent(false);
  }, [pathname]);

  return (
    <>
      {/* 🔥 TRANSITION OVERLAY */}
      <AnimatePresence mode="wait">
        {!showContent && (
          <motion.div
            key={pathname}
            className="fixed inset-0 z-50 bg-black"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => setShowContent(true)}
          />
        )}
      </AnimatePresence>

      {/* ✅ PAGE CONTENT (MOUNTS AFTER ANIMATION) */}
      {showContent && (
  <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col">
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
)}

    </>
  );
}
