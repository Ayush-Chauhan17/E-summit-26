// // "use client";
// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import { cn } from "@/lib/utils";
// // import { fontSans } from "@/lib/fonts";
// // import { Toaster } from "@/components/ui/toaster";
// // import Footer from "@/components/Footer";
// // import Navbar from "@/components/Navbar";
// // import "./globals.css";
// // import React from "react";
// // import { ParallaxProvider } from "react-scroll-parallax";
// // import Head from "next/head";
// // import AnimatedBackground from "@/components/AnimatedBackground";
// // import TransitionBackground from "@/components/TransitionBackground";
// // import { usePathname } from "next/navigation";

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   const pathname = usePathname();
// //   const isHomePage = pathname === "/";

// //   return (
// //     <html lang="en">
// //       <head>
// //         <link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
// //         <link rel="icon" href="/E-Cell-White" media="(prefers-color-scheme: light)" />
// //       </head>
   
// //       <body
// //         className={cn(
// //           "min-h-screen font-sans antialiased relative",
// //           fontSans.variable,
// //         )}
// //       >
// //         {/* Conditional Background based on route */}
// //         <div className="fixed inset-0 -z-10">
// //           {isHomePage ? <AnimatedBackground /> : <TransitionBackground />}
// //         </div>

// //         <Navbar />
// //         <main className="flex-1 relative z-10">{children}</main>
// //         <Footer />
// //         <Toaster />
// //       </body>
// //     </html>
// //   );
// // }
// "use client";

// import type { Metadata } from "next";
// import { cn } from "@/lib/utils";
// import { fontSans } from "@/lib/fonts";
// import { Toaster } from "@/components/ui/toaster";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// // import LottieNavbar from "@/components/LottieNavbar";
// import "./globals.css";
// import React from "react";
// import BackgroundWrapper from "./BackgroundWrapper";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={cn(
//           "min-h-screen font-sans antialiased relative",
//           fontSans.variable,
//         )}
//       >
//         <BackgroundWrapper />

//         <Navbar />
//         <main className="flex-1 relative z-10">{children}</main>
//         <Footer />
//         <Toaster />
//       </body>
//     </html>
//   );
// }
"use client";

import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased relative",
          fontSans.variable,
        )}
      >
        <BackgroundWrapper />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}