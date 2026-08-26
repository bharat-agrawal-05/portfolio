import React from 'react';
import { Sparkles, Terminal, Trophy, GraduationCap, Flame, ShieldCheck, Briefcase } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    { icon: Briefcase, text: "Ex-Google SWE Intern (Silicon Product Software, May–Aug '26)", color: "text-emerald-500" },
    { icon: GraduationCap, text: "TU Munich Informatics Exchange (9.44 GPA)", color: "text-sky-500" },
    { icon: GraduationCap, text: "IIT Mandi B.Tech CSE (9.04 GPA)", color: "text-indigo-500" },
    { icon: Sparkles, text: "SemEval-2026 Abductive Event Reasoning Paper", color: "text-purple-500" },
    { icon: Flame, text: "1,100+ Coding Problems Solved (CF / LC / GFG)", color: "text-amber-500" },
    { icon: ShieldCheck, text: "Rank 10 Nationwide — CSAW CTF 2025", color: "text-emerald-500" },
    { icon: Trophy, text: "1st Place @ KrackHack'24 & 2nd Place @ HCLTech", color: "text-yellow-500" },
    { icon: Terminal, text: "490+ GPU Hardware Counters Profiling Pipeline", color: "text-sky-500" },
  ];

  return (
    <div className="w-full overflow-hidden py-3 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#0c0e15]/60 backdrop-blur-xs select-none">
      <div className="flex w-max animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 mx-5 text-xs font-mono text-slate-700 dark:text-slate-300 shrink-0"
            >
              <Icon className={`w-3.5 h-3.5 ${item.color}`} />
              <span>{item.text}</span>
              <span className="text-slate-300 dark:text-slate-700 ml-4 font-normal">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
