import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const navItems = [
  { name: "Home", href: "#top" },
  { name: "About me", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#project" },
  { name: "Contact me", href: "#contact" },
];

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // Active Section Logic
      const sections = navItems
        .map((item) => {
          const section = document.querySelector(item.href);
          if (section) return { id: item.href.slice(1), offsetTop: section.offsetTop };
          return null;
        })
        .filter((item) => item !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let currentSection = "top";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 550) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Check on initial load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full blur-md" />
      </div>
      
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 border border-transparent ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-[#fff]/20"
            : ""
        }`}
      >
        <a href="#top">
          <h1 className="text-4xl cursor-pointer font-Outfit font-bold tracking-tight text-[#1a1a1a] flex items-baseline mr-0 lg:mr-18 dark:text-white">
            Smit<span className="text-[#ff004f]">.</span>
          </h1>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 border border-transparent ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                className="font-Ovo text-sm relative z-10 py-1 px-3"
                href={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
              >
                {item.name}
              </a>
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-black/5 rounded-full -z-0 dark:bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          
          {/* --- FIXED TOGGLE BUTTON --- */}
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer"
          >
            {/* 1. Moon Icon: Show in Light Mode, Hide in Dark Mode */}
            <Image
              src={assets.moon_icon}
              alt=""
              className="w-6 block dark:hidden" 
            />
            {/* 2. Sun Icon: Hide in Light Mode, Show in Dark Mode */}
            <Image
              src={assets.sun_icon}
              alt=""
              className="w-6 hidden dark:block" 
            />
          </button>
          {/* --------------------------- */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            {/* Same logic for the Arrow icon if needed */}
            <Image
              src={assets.arrow_icon}
              className="w-3 block dark:hidden"
              alt="Contact"
            />
             <Image
              src={assets.arrow_icon_dark}
              className="w-3 hidden dark:block"
              alt="Contact"
            />
          </a>

          <button
            className="cursor-pointer block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 block dark:hidden"
            />
            <Image
              src={assets.menu_white}
              alt="menu"
              className="w-6 hidden dark:block"
            />
          </button>
        </div>

        {/* ---------- mobile menu ---------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer block dark:hidden"
            />
             <Image
              src={assets.close_white}
              alt=""
              className="w-5 cursor-pointer hidden dark:block"
            />
          </div>

          {navItems.map((item) => (
             <li key={item.name} className="relative w-fit">
              <a
                className="font-Ovo block relative z-10 py-1 px-3"
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  closeMenu();
                }}
              >
                {item.name}
              </a>
              {activeSection === item.href.slice(1) && (
                <motion.span
                  layoutId="activeSectionMobile"
                  className="absolute inset-0 bg-black/5 rounded-full -z-0 dark:bg-white/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;