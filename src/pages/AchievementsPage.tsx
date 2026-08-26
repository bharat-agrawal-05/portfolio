import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowLeft, ArrowRight } from 'lucide-react';
import { Achievements } from '../components/Achievements';
import { Leadership } from '../components/Leadership';

export const AchievementsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-28 md:pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Back Navigation & Breadcrumb */}
      <div className="flex items-center justify-between gap-2">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
          Page // Achievements & Community
        </span>
      </div>

      {/* Main Achievements Component directly filling the spacious layout */}
      <Achievements />

      {/* Leadership Component directly filling the spacious layout */}
      <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        <Leadership />
      </div>

      {/* Next CTA */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-purple-500/5 via-sky-500/5 to-emerald-500/5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Interested in collaborating or discussing challenges?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Get in touch for technical discussions, competitive programming, or research.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-slate-900 hover:bg-slate-800 text-white dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-all shadow-xs"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
