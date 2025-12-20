// "use client";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LottieNavbar from "@/components/LottieNavbar"; 
import "./globals.css";
import React from "react";


export const metadata: Metadata = {
  applicationName: "E-Summit'26 | IIT BHU Varanasi",
  referrer: "origin-when-cross-origin",
  title: {
    default: "E-Summit'26 | IIT BHU Varanasi",
    template: "%s | E-Summit'26 | IIT BHU Varanasi",
  },
  description: "E-Summit'26 | IIT BHU Varanasi",
  category: "Technology and Entrepreneurship Summit",
  keywords: [
    "E-Summit",
    "E-Summit'26",
    "E-Summit'26 IIT BHU Varanasi",
    "IIT BHU Varanasi",
    "E-Summit IIT BHU Varanasi",
    "E-Summit'26 IIT BHU",
    "esummit 26",
    "esummit",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/E-Cell-White"
          media="(prefers-color-scheme: light)"
        />
      </head>

      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased",
          fontSans.variable
        )}
      >
       
        <Navbar />

        
        <main className="flex-1">{children}</main>

       
        <div className="lg:hidden">
          {/* <LottieNavbar /> */}
        </div>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
