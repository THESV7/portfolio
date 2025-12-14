import React from 'react'

const ScrollDown = () => {
  return (
    <div className="mt-12 md:mt-0 z-10 flex flex-col items-center gap-1 cursor-pointer">
        {/* Minimal Text */}
        <span className="text-sm font-Outfit text-gray-600 dark:text-gray-300 tracking-widest uppercase animate-pulse">
            Scroll Down
        </span>

        {/* Desktop: Mouse Animation */}
        <div className="hidden md:flex justify-center w-[20px] h-[35px] border border-[#333] dark:border-white/80 rounded-full relative">
            <div className="w-1 h-2 bg-[#333] dark:bg-white rounded-full mt-2 animate-wheel"></div>
        </div>

        {/* Mobile: Bouncing Arrow */}
        <div className="md:hidden animate-bounce">
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-[#333] dark:text-white"
            >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
            </svg>
        </div>
    </div>
  )
}

export default ScrollDown
