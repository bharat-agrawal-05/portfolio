import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowLeft, ArrowRight } from 'lucide-react';
import { Skills } from '../components/Skills';

export const SkillsPage: React.FC = () => {
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
          Page // Technical Arsenal
        </span>
      </div>

      {/* Main Skills Component directly filling the spacious layout */}
      <Skills />

      {/* Cross-linking to projects where stack was used */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/5 via-sky-500/5 to-emerald-500/5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              See these technologies in action
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Browse production implementations across deep learning pipelines, GPU systems, and full-stack web applications.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-slate-900 hover:bg-slate-800 text-white dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-all shadow-xs"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
