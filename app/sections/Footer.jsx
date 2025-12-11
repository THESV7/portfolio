import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-4xl cursor-pointer font-Outfit font-bold tracking-tight text-[#1a1a1a] dark:text-white w-36 mx-auto">
          Smit<span className="text-[#ff004f]">.</span>
        </h1>

        <div className="w-max flex items-center gap-2 mx-auto font-Outfit">
          <Image src={assets.mail_icon} alt="" className="w-6 block dark:hidden" />
          <Image src={assets.mail_icon_dark} alt="" className="w-6 hidden dark:block" />
          vadhelsmit@gmail.com
        </div>
      </div>

      <div className="font-Outfit text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="">&copy; 2025 Smit Vadhel. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a target="_blank" href="https://github.com/THESV7">Github</a></li>
          <li><a target="_blank" href="https://github.com/THESV7">LinkedIn</a></li>
          <li><a target="_blank" href="https://github.com/THESV7">Twitter</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
