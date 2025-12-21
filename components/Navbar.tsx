"use client";

import React, { useState, useEffect, FunctionComponent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/public/logos/E-Cell-White[1].png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navItems = [
  { name: "EVENTS", link: "/events" },
  { name: "SPEAKERS", link: "/speakers" },
  { name: "PARTNERS", link: "/partners" },
  { name: "MERCH", link: "/merch" },
  { name: "INITIATIVE", link: "/initiative" },
];

const sjCities = ["delhi", "ahmedabad", "bangalore"];

const Navbar: FunctionComponent = () => {
  const pathname = usePathname();

  const [scrolling, setScrolling] = useState(false);
  const [isHoveringSJ, setIsHoveringSJ] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSJEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHoveringSJ(true);
  };

  const handleSJLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHoveringSJ(false);
    }, 120);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const gradientButtonStyle = {
    background: "linear-gradient(90deg,#F1E821,#23C0AD,#487AFA)",
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed left-1/2 -translate-x-1/2
          z-[9999] isolate
          w-full max-w-[76.5rem]
          px-4 md:px-0
          transition-all duration-300
          ${scrolling ? "top-2" : "top-4"}
        `}
      >
        <nav
          className={`
            relative w-full
            rounded-[999px]
            transition-all duration-300 ease-out
            ${
              scrolling
                ? "bg-black/85 border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.75)] backdrop-blur-2xl scale-[0.98]"
                : "bg-black/75 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            }
          `}
        >
          {/* subtle inner ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-white/5" />

          <div className="relative px-4 md:px-6 py-2.5">
            <div className="flex items-center justify-between gap-4">
              {/* Left: logo + brand text (like Apple wordmark) */}
              <Link href="/" className="flex items-center gap-2 shrink-0 group">
                <Image
                  unoptimized
                  src={logo}
                  alt="E-Summit Logo"
                  width={96}
                  height={56}
                  className={`
                    object-contain transition-transform duration-300
                    ${scrolling ? "scale-[0.9]" : "scale-100"}
                  `}
                />
                <span
                  className={`
                    hidden sm:inline-block text-[15px] tracking-[0.18em]
                    uppercase text-white/70 group-hover:text-white
                    transition-colors
                  `}
                >
                  E‑Summit 26
                </span>
              </Link>

              {/* ========== DESKTOP NAV (APPLE‑LIKE) ========== */}
              <div className="hidden lg:flex items-center justify-between flex-1">
                <ul className="flex items-center gap-12 mx-auto text-[15px] font-semibold">
                  {navItems.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                      <li key={item.link}>
                        <Link
                          href={item.link}
                          className={`
                            px-3 py-1.5 rounded-full
                            transition-all duration-200
                            ${
                              isActive
                                ? "text-white bg-white/10"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}

                  {/* SJ DESKTOP - inline, like Apple “Store / Mac / iPad / … More” */}
                  <li
                    onMouseEnter={handleSJEnter}
                    onMouseLeave={handleSJLeave}
                    className="relative"
                  >
                    <DropdownMenu open={isHoveringSJ} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className="
                            px-3 py-1.5 rounded-full
                            text-white/70 hover:text-white hover:bg-white/5
                            flex items-center gap-1 text-[13px] font-medium
                            transition-colors
                          "
                        >
                          SJ
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${
                              isHoveringSJ ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="center"
                        className="
                          mt-2 w-56 rounded-2xl
                          bg-[#050505]/95 text-white
                          border border-white/15
                          shadow-[0_20px_45px_rgba(0,0,0,0.9)]
                          backdrop-blur-xl
                        "
                      >
                        <DropdownMenuLabel className="text-xs text-white/60">
                          Startup Junction
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/15" />

                        {sjCities.map((city) => (
                          <DropdownMenuItem
                            key={city}
                            className="cursor-pointer"
                          >
                            <Link
                              href={`/SJ/${city}`}
                              className="flex w-full items-center justify-between text-sm"
                            >
                              <span>
                                SJ –{" "}
                                {city.charAt(0).toUpperCase() + city.slice(1)}
                              </span>
                              <ChevronDown
                                size={13}
                                className="rotate-[-90deg] text-white/40"
                              />
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>

                {/* Right: Register button, minimal pill like “Buy” on Apple */}
                <Link href="/payment?type=esummit">
                  <Button
                    className="
                      rounded-full text-[16px] font-semibold text-white
                      px-4 py-1.5 h-auto
                      transition-transform duration-200
                      hover:scale-[1.04]
                      shadow-[0_0_18px_rgba(35,192,173,0.65)]
                    "
                    style={gradientButtonStyle}
                  >
                    Register
                  </Button>
                </Link>
              </div>

              {/* ========== MOBILE NAV TRIGGER (RIGHT) ========== */}
              <div className="flex lg:hidden items-center gap-2">
                <Button
                  variant="outline"
                  className="
                    bg-transparent border-white/15 text-white
                    hover:bg-white/10
                    rounded-full h-8 w-8 p-0 flex items-center justify-center
                  "
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ========== MOBILE FULLSCREEN MENU (APPLE‑LIKE) ========== */}
      <div
        className={`
          fixed inset-0 z-[9998]
          lg:hidden
          transition-all duration-300 ease-out
          ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        {/* Dim background */}
        <div
          className={`
            absolute inset-0 bg-black/70 backdrop-blur-xl
            transition-opacity duration-300
            ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={closeMobileMenu}
        />

        {/* Sliding sheet from top (like Apple’s global nav overlay) */}
        <div
          className={`
            absolute top-0 left-0 right-0
            bg-[#050505] text-white
            pt-20 pb-10 px-6
            rounded-b-3xl
            border-b border-white/10
            shadow-[0_40px_80px_rgba(0,0,0,0.9)]
            transform transition-transform duration-300 ease-out
            ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-[110%]"}
          `}
        >
          {/* Title row inside sheet, like Apple “Store” label */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
              Menu
            </span>
            <span className="text-[11px] text-white/40">E‑Summit 26</span>
          </div>

          <nav className="space-y-6">
            {/* Primary nav items */}
            <ul className="space-y-1 text-[15px] font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      onClick={closeMobileMenu}
                      className={`
                        flex items-center justify-between
                        py-2.5
                        border-b border-white/8
                      `}
                    >
                      <span
                        className={isActive ? "text-white" : "text-white/80"}
                      >
                        {item.name}
                      </span>
                      {/* tiny gradient pill accent */}
                      <span className="h-[2px] w-8 rounded-full bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA] opacity-70" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Startup Junction group */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-2">
                Startup Junction
              </p>
              <div className="flex flex-col gap-1">
                {sjCities.map((city) => (
                  <Link
                    key={city}
                    href={`/SJ/${city}`}
                    onClick={closeMobileMenu}
                    className="
                      flex items-center justify-between
                      py-2 text-[14px]
                      text-white/80 hover:text-white
                    "
                  >
                    <span>
                      SJ – {city.charAt(0).toUpperCase() + city.slice(1)}
                    </span>
                    <ChevronDown
                      size={14}
                      className="rotate-[-90deg] text-white/40"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Register button */}
            <div className="pt-4">
              <Link href="/payment?type=esummit" onClick={closeMobileMenu}>
                <Button
                  className="
                    w-full rounded-full font-semibold text-white
                    py-2.5 text-[14px]
                    transition-transform duration-200
                    hover:scale-[1.02]
                    shadow-[0_0_18px_rgba(35,192,173,0.65)]
                  "
                  style={gradientButtonStyle}
                >
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <ToastContainer />

      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Navbar;
