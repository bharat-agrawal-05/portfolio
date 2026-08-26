import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Experience } from '../components/Experience';
import { resumeData } from '../data/resumeData';

export const ExperiencePage: React.FC = () => {
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
          Page // Experience
        </span>
      </div>

      {/* Main Experience Component directly filling the spacious layout */}
      <Experience />

      {/* Deep-Dive Tech Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-2 mb-2.5 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            Engineering Scope
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Silicon Product Software & GPU Performance
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Engineered low-level profiling infrastructure connecting Linux kernel events, Vulkan graphics drivers, and Perfetto trace pipelines to identify hardware bottlenecks and reduce out-of-memory stalls across Linux and Android runtime environments.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2.5 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <ExternalLink className="w-4 h-4" />
              Related Research & Code
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Explore Research & Systems Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Check out associated deep learning research in causal reasoning, local feature matching taxonomy, and custom trading engines.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={resumeData.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Resume PDF ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
