"use client";

import React, { useState, useEffect, FunctionComponent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/public/logos/E-Cell-White[1].png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navItems = [
  { name: "ITINERARY", link: "/itinerary" },
  { name: "EVENTS", link: "/events" },
  { name: "SPEAKERS", link: "/speakers" },
  { name: "PARTNERS", link: "/partners" },
  //{ name: "CONTACT US", link: "/contact" },
  { name: "MERCH", link: "/merch" },
  { name: "INITIATIVE", link: "/initiative" },
];

const sjCities = ["delhi", "ahmedabad", "bangalore"];

const Navbar: FunctionComponent = () => {
  const pathname = usePathname();

  const [scrolling, setScrolling] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const [isHoveringSJ, setIsHoveringSJ] = useState(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    const handleResize = () =>
      setIsPortrait(window.innerHeight > window.innerWidth);

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSJEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHoveringSJ(true);
  };

  const handleSJLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHoveringSJ(false);
    }, 150);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-full max-w-[76.5rem]
          z-[9999] isolate
          px-4 md:px-0
        "
      >
        <nav
          className={`
            relative w-full rounded-full
            transition-all duration-300 ease-in-out
            ${
              scrolling
                ? "bg-[#0B0B0B] border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                : "bg-[#111111] border border-white/10 shadow-lg"
            }
          `}
        >
          {/* subtle ring */}
          <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />

          <div className="relative px-6 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  unoptimized
                  src={logo}
                  alt="E-Summit Logo"
                  width={44}
                  height={20}
                  className="object-contain"
                />
              </Link>
              {isPortrait ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      <Menu />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="
                      w-56 mt-2 mr-2
                      animate-in fade-in zoom-in-95 duration-200
                      bg-[#111111] text-white
                      border border-white/20 rounded-xl
                    "
                  >
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />

                    {navItems.map((item) => (
                      <DropdownMenuItem
                        key={item.link}
                        className="focus:bg-white/10 cursor-pointer"
                      >
                        <Link href={item.link} className="w-full">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuLabel>Startup Junction</DropdownMenuLabel>

                    {sjCities.map((city) => (
                      <DropdownMenuItem key={city}>
                        <Link href={`/SJ/${city}`}>
                          SJ – {city.charAt(0).toUpperCase() + city.slice(1)}
                        </Link>
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuSeparator className="bg-white/20" />
                    <div className="px-2 py-2">
                      <Link href="/payment?type=esummit">
                        <Button
                          className="
                            w-full rounded-full font-bold text-white
                            transition-all duration-300
                            hover:scale-[1.02]
                            shadow-[0_0_15px_rgba(35,192,173,0.6)]
                          "
                          style={{
                            background:
                              "linear-gradient(90deg,#F1E821,#23C0AD,#487AFA)",
                          }}
                        >
                          Register
                        </Button>
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                /* ================= DESKTOP ================= */
                <ul className="hidden lg:flex items-center gap-3 text-sm">
                  {navItems.map((item) => (
                    <li key={item.link} className="relative group">
                      <Link href={item.link}>
                        <span
                          className={`
                            px-3 py-2
                            transition-colors
                            ${
                              pathname === item.link
                                ? "text-white"
                                : "text-white/80 group-hover:text-white"
                            }
                          `}
                        >
                          {item.name}
                        </span>
                        <span
                          className={`
                            absolute left-1/2 -translate-x-1/2 bottom-0
                            h-[2px] w-0
                            bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA]
                            transition-all duration-300
                            ${
                              pathname === item.link
                                ? "w-8"
                                : "group-hover:w-6"
                            }
                          `}
                        />
                      </Link>
                    </li>
                  ))}

                  {/* SJ */}
                  <li onMouseEnter={handleSJEnter} onMouseLeave={handleSJLeave}>
                    <DropdownMenu open={isHoveringSJ} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-white/80 hover:text-white flex items-center gap-1"
                        >
                          SJ
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              isHoveringSJ ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="end"
                        className="
                          mt-3 w-56 rounded-xl
                          bg-[#111111] text-white
                          border border-white/20
                        "
                      >
                        <DropdownMenuLabel>Startup Junction</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/20" />

                        {sjCities.map((city) => (
                          <DropdownMenuItem key={city}>
                            <Link href={`/SJ/${city}`}>
                              SJ – {city.charAt(0).toUpperCase() + city.slice(1)}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>

                  {/* REGISTER */}
                  <li className="ml-2">
                    <Link href="/payment?type=esummit">
                      <Button
                        className="
                          rounded-full font-bold text-white
                          px-6
                          transition-all duration-300
                          hover:scale-105
                          shadow-[0_0_20px_rgba(35,192,173,0.75)]
                        "
                        style={{
                          background:
                            "linear-gradient(90deg,#F1E821,#23C0AD,#487AFA)",
                        }}
                      >
                        Register
                      </Button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </header>

      <ToastContainer />

      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Navbar;
