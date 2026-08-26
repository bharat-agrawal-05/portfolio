import React from 'react';
import { Trophy, ShieldCheck, Code2, Award, ExternalLink, Flame } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-2">
          <Trophy className="w-6 h-6 text-sky-500" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Achievements & Competitive Programming
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-mono">
          // Hackathons, CTF rankings, and algorithmic problem solving
        </p>

        {/* Big Highlight Banner for CP & CTF */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
          {/* CP Solved Banner */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-sky-50 to-indigo-50/40 dark:from-slate-900 dark:to-slate-800/80 border border-sky-200 dark:border-slate-700 shadow-xs flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-sky-700 dark:text-sky-400 font-semibold uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                Problem Solving
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                1,100+ <span className="text-sm sm:text-base font-normal text-slate-500">Solved</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Codeforces, LeetCode & GeeksforGeeks
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <Flame className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </div>

          {/* CTF Banner */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50/40 dark:from-slate-900 dark:to-slate-800/80 border border-emerald-200 dark:border-slate-700 shadow-xs flex items-center justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Offensive Security & CTFs
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                Rank 10 <span className="text-sm sm:text-base font-normal text-slate-500">Nationwide</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                CSAW CTF 2025 (100+ national teams)
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
          </div>
        </div>

        {/* Detailed Achievements List */}
        <div className="space-y-3">
          {resumeData.achievements.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-500 shrink-0 mt-0.5 sm:mt-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.badge && (
                <span className="self-start sm:self-center shrink-0 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Platform Links */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mb-3">
            // Competitive Profiles:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {resumeData.cpStats.platforms.map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-colors group"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white group-hover:text-sky-500">
                  <span>{p.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1">
                  {p.highlight}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
