import React, { useState } from 'react';

interface AnimatedNameProps {
  name: string;
  className?: string;
}

export const AnimatedName: React.FC<AnimatedNameProps> = ({ name, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`relative inline-block select-none group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient glow on hover */}
      <span
        aria-hidden="true"
        className={`absolute -inset-x-2 -inset-y-1 rounded-xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 blur-md transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Main Gradient Text */}
      <span className="relative z-10 font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-sky-600 to-indigo-600 dark:from-white dark:via-sky-300 dark:to-emerald-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x transition-all duration-300 group-hover:drop-shadow-xs">
        {name}
      </span>

      {/* Subtle interactive accent underline */}
      <span
        className={`absolute left-0 bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 transition-all duration-500 ease-out ${
          isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
    </span>
  );
};
