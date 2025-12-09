import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
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
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#project">Projects</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
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

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#project">Projects</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;