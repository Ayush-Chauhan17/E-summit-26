"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import Image from "next/image";
import Script from "next/script";
import { useTransitionRouter } from "next-view-transitions";
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
  const router = useTransitionRouter();
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const [isHoveringSJ, setIsHoveringSJ] = useState(false);

  
  const triggerPageTransition = (path: string) => {
    if (pathname === path) return;

 
    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    router.push(path);
  };

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
            
            
            <div 
              onClick={() => triggerPageTransition("/")} 
              className="flex items-center cursor-pointer"
            >
              <Image
                unoptimized
                src={logo}
                alt="E-Summit'24 logo"
                width={50}
                height={20}
                className="scale-125 sm:w-28 object-contain"
              />
            </div>

            
            {isPortrait ? (
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

                  <DropdownMenuContent align="end" className="w-56 mr-2 glass bg-black/80 text-white border-white/20">
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/20" />
                    <DropdownMenuGroup>
                      {navItems.map((item, index) => (
                        <DropdownMenuItem 
                          key={index} 
                          className="focus:bg-white/10 focus:text-white cursor-pointer"
                          onClick={() => triggerPageTransition(item.link)}
                        >
                          {item.name}
                        </DropdownMenuItem>
                      ))}

                      
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
                              <DropdownMenuItem 
                                onClick={() => triggerPageTransition("/SJ/delhi")} 
                                className="focus:bg-white/10 focus:text-white cursor-pointer"
                              >
                                SJ - Delhi
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => triggerPageTransition("/SJ/ahmedabad")} 
                                className="focus:bg-white/10 focus:text-white cursor-pointer"
                              >
                                SJ - Ahmedabad
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={() => triggerPageTransition("/SJ/bangalore")} 
                                className="focus:bg-white/10 focus:text-white cursor-pointer"
                              >
                                SJ - Bangalore
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
              <div className="hidden lg:flex">
                <ul className="tracking-wide font-light text-sm flex lg:flex-row flex-wrap justify-end items-center gap-2">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Button 
                        onClick={() => triggerPageTransition(item.link)}
                        className="text-white hover:bg-white/10 hover:text-primary-foreground transition-colors" 
                        variant="ghost"
                      >
                        {item.name}
                      </Button>
                    </li>
                  ))}

                  
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
                      <DropdownMenuContent align="end" className="w-56 glass bg-black/80 text-white border-white/20 mt-2">
                        <DropdownMenuLabel>Startup Junction</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/20" />
                        <DropdownMenuGroup>
                          <DropdownMenuItem 
                            onClick={() => triggerPageTransition("/SJ/delhi")} 
                            className="focus:bg-white/10 focus:text-white cursor-pointer"
                          >
                            SJ - Delhi
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => triggerPageTransition("/SJ/ahmedabad")} 
                            className="focus:bg-white/10 focus:text-white cursor-pointer"
                          >
                            SJ - Ahmedabad
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => triggerPageTransition("/SJ/bangalore")} 
                            className="focus:bg-white/10 focus:text-white cursor-pointer"
                          >
                            SJ - Bangalore
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              </div>
            )}

            
            {!isPortrait && (
              <div className="hidden lg:block ml-4">
                <Button
                  onClick={() => triggerPageTransition("/payment?type=esummit")}
                  variant="default"
                  style={{
                    background: "linear-gradient(90deg, #F1E821, #23C0AD, #487AFA)",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    fontWeight: "bold",
                    borderRadius: "9999px",
                  }}
                  className="hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(35,192,173,0.5)]"
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <ToastContainer />
      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </header>
  );
};

export default Navbar;