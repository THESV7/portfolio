import { assets, infoList, toolsData, skillsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      id="about"
      className="w-full px-[12%] pt-10 pb-10 lg:py-14 scroll-mt-20 relative z-11"
    >
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex w-full max-w-screen-xl mx-auto flex-col lg:flex-row items-center gap-20 my-10 lg:my-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full max-w-[275px] rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="mb-6 max-w-2xl lg:max-w-3xl font-Ovo">
            I'm a frontend developer passionate about building clean, responsive, and user-focused web interfaces. I enjoy turning ideas into smooth, functional experiences using React, Next.js, and modern UI tools. With a strong foundation in computer engineering and hands-on project experience, I focus on writing efficient code and creating designs that feel intuitive and polished.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl font-Outfit"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover"
                key={index}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7 mt-3 block dark:hidden"
                />
                <Image
                  src={iconDark}
                  alt={title}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-base dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        viewport={{ once: true }}
        className="my-10 lg:my-10"
      >
        <h4 className="text-center mb-8 text-xl font-Ovo">My Skills</h4>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skillsData.map(({ icon, title, isDark }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-400 bg-white shadow-sm dark:bg-black/20 dark:border-white/20 hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer transition-all duration-300"
            >
              <Image src={icon} alt={title} className={`w-6 sm:w-8 ${isDark ? 'dark:invert' : ''}`} />
              <span className="font-Outfit text-sm sm:text-base text-gray-700 dark:text-white">
                {title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        viewport={{ once: true }}
        className="my-10 lg:my-10"
      >
        <h4 className="text-center mb-8 text-xl font-Ovo">Tools I use</h4>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {toolsData.map(({ icon, title, isDark }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-400 bg-white shadow-sm dark:bg-black/20 dark:border-white/20 hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer transition-all duration-300"
            >
              {icon && <Image src={icon} alt={title} className={`w-6 sm:w-8 ${isDark ? 'dark:invert' : ''}`} />}
              <span className="font-Outfit text-sm sm:text-base text-gray-700 dark:text-white">
                {title}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  );
};

export default About;
