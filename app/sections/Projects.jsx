"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="project"
      className="w-full px-[12%] py-10 lg:py-12 scroll-mt-20 relative z-11"
    >
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My projects
      </motion.h4>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse
        soluta nesciunt, distinctio vitae at dolor voluptatem! Cum, illo magni.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 my-10"
      >
        {workData.slice(0, isExpanded ? workData.length : 3).map((project, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            key={project.title}
            className="border-[0.5px] border-gray-400 rounded-xl overflow-hidden cursor-pointer hover:shadow-black duration-500 dark:border-white dark:hover:bg-dark-hover"
          >
            <div className="aspect-video relative overflow-hidden bg-black/5 dark:bg-black/20 border-b border-gray-500/30 dark:border-white/20">
              <Image 
                src={project.bgImage} 
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            
            <div className="p-6 bg-white dark:bg-transparent font-Outfit">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-white/80 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center gap-3 mb-5">
                {project.tools.map((tool, index) => (
                  <div key={index} className="p-2 border rounded-full border-gray-300 dark:border-white/20 hover:-translate-y-1 duration-500">
                    <Image src={tool} alt="" className={`w-4 ${(tool === assets.github || tool === assets.nextjs || tool === assets.api_integration) ? 'dark:invert' : ''}`} />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-600 bg-white rounded-lg px-4 py-2 hover:bg-blue-50 transition-all duration-300 hover:scale-105 dark:bg-transparent dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-currentColor">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> 
                    Live Demo
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-800 border border-gray-800 bg-white rounded-lg px-4 py-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105 dark:bg-transparent dark:text-gray-300 dark:border-gray-300 dark:hover:bg-white/10"
                  >
                    <Image src={assets.github} alt="" className="w-4 dark:invert" />
                    GitHub
                  </a>
                )}

                {project.github2 && (
                  <a 
                    href={project.github2} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-800 border border-gray-800 bg-white rounded-lg px-4 py-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105 dark:bg-transparent dark:text-gray-300 dark:border-gray-300 dark:hover:bg-white/10"
                  >
                    <Image src={assets.github} alt="" className="w-4 dark:invert" />
                    Docs GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
        viewport={{ once: true }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-light-hover duration-500 font-Outfit dark:text-white dark:border-white dark:hover:bg-dark-hover opacity-0"
      >
        {isExpanded ? 'Show less' : 'Show more'}
        <Image
          src={assets.right_arrow_bold}
          alt="Right-arrow"
          className={`w-4 block dark:hidden transform transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
        />
        <Image
          src={assets.right_arrow_bold_dark}
          alt="Right-arrow"
          className={`w-4 hidden dark:block transform transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </motion.button>
    </motion.div>
  );
};

export default Projects;
