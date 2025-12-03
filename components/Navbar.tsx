"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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

// Removed the old CSS file import to prevent conflicts
// import "./Navbar.css"; 

declare global {
  interface Window {
    popup?: (eventId: string) => void;
  }
}

const navItems = [
  { name: "ITINERARY", link: "/itinerary" },
  { name: "EVENTS", link: "/events" },
  { name: "SPEAKERS", link: "/speakers" },
  { name: "PARTNERS", link: "/partners" },
  { name: "CONTACT US", link: "/contact" },
  { name: "MERCH", link: "/merch" },
  { name: "INITIATIVE", link: "/initiative" },
];

const Navbar: FunctionComponent = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const [isHoveringSJ, setIsHoveringSJ] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    const handleResize = () => setIsPortrait(window.innerHeight > window.innerWidth);

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full min-h-fit sticky top-4 z-50 max-w-[76.5rem] mx-auto px-4 md:px-0">
      {/* GLASS EFFECT APPLIED HERE 
          Logic: If scrolling -> Darker background + Blur. If top -> Lighter background + Subtle Blur.
      */}
      <nav
        className={`
          w-full rounded-full transition-all duration-300 ease-in-out border
          ${
            scrolling
              ? "bg-black/60 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              : "bg-white/5 backdrop-blur-md border-white/10 shadow-lg"
          }
        `}
      >
        <div className="relative block px-6 py-2">
          <div className="flex items-center justify-between w-full gap-1 capitalize">
            
            {/* Logo */}
            <Link href="/" aria-label="logo" className="flex items-center">
              <Image
                unoptimized
                src={logo}
                alt="E-Summit'24 logo"
                width={50}
                height={20}
                className="scale-125 sm:w-28 object-contain"
              />
            </Link>

            {/* Navigation */}
            {isPortrait ? (
              // Portrait (mobile)
              <div className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      variant="outline"
                      className="bg-transparent border-white/20 text-white hover:bg-white/10"
                    >
                      <Menu />
                    </Button>
                  </DropdownMenuTrigger>

                  {/* Added Glass Class to Mobile Dropdown */}
                  <DropdownMenuContent align="end" className="w-56 mr-2 glass bg-black/80 text-white border-white/20">
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuGroup>
                      {navItems.map((item, index) => (
                        <DropdownMenuItem key={index} className="focus:bg-white/10 focus:text-white cursor-pointer">
                          <Link href={item.link} className="w-full">
                            {item.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}

                      {/* SJ Dropdown inside portrait */}
                      <DropdownMenuItem className="p-0 focus:bg-transparent">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 px-2 h-8">
                              SJ
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-48 glass bg-black/80 text-white border-white/20">
                            <DropdownMenuLabel>Startup Junction</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-white/20" />
                            <DropdownMenuGroup>
                              <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                                <Link href="/SJ/delhi">SJ - Delhi</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                                <Link href="/SJ/ahmedabad">SJ - Ahmedabad</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                                <Link href="/SJ/bangalore">SJ - Bangalore</Link>
                              </DropdownMenuItem>
                            </DropdownMenuGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              // Landscape (desktop)
              <div className="hidden lg:flex">
                <ul className="tracking-wide font-light text-sm flex lg:flex-row flex-wrap justify-end items-center gap-2">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link} className="no-underline">
                        <Button className="text-white hover:bg-white/10 hover:text-primary-foreground transition-colors" variant="ghost">
                          {item.name}
                        </Button>
                      </Link>
                    </li>
                  ))}

                  {/* SJ Hover Dropdown */}
                  <li
                    onMouseEnter={() => setIsHoveringSJ(true)}
                    onMouseLeave={() => setIsHoveringSJ(false)}
                  >
                    <DropdownMenu open={isHoveringSJ} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="text-white hover:bg-white/10 flex items-center gap-1"
                          variant="ghost"
                        >
                          SJ
                          <ChevronDown
                            className={`transition-transform duration-200 ${
                              isHoveringSJ ? "rotate-180" : ""
                            }`}
                            size={16}
                          />
                        </Button>
                      </DropdownMenuTrigger>
                      {/* Added Glass Class to Desktop Dropdown */}
                      <DropdownMenuContent align="end" className="w-56 glass bg-black/80 text-white border-white/20 mt-2">
                        <DropdownMenuLabel>Startup Junction</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/20" />
                        <DropdownMenuGroup>
                          <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link href="/SJ/delhi">SJ - Delhi</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link href="/SJ/ahmedabad">SJ - Ahmedabad</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild className="focus:bg-white/10 focus:text-white cursor-pointer">
                            <Link href="/SJ/bangalore">SJ - Bangalore</Link>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              </div>
            )}

            {/* Register Button */}
            {!isPortrait && (
              <div className="hidden lg:block ml-4">
                <Link href="/payment?type=esummit" className="no-underline">
                  <Button
                    variant="default"
                    style={{
                      background:
                        "linear-gradient(90deg, #F1E821, #23C0AD, #487AFA)",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      fontWeight: "bold",
                      borderRadius: "9999px", // Fully rounded button to match navbar
                    }}
                    className="hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(35,192,173,0.5)]" // Added Glow
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <ToastContainer />

      {/* Townscript Widget */}
      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </header>
  );
};

export default Navbar;