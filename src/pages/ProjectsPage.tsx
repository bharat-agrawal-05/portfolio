import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Projects } from '../components/Projects';
import { GithubIcon } from '../components/Icons';
import { resumeData } from '../data/resumeData';

export const ProjectsPage: React.FC = () => {
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
          Page // Projects & Research
        </span>
      </div>

      {/* Main Projects Component directly filling the spacious layout */}
      <Projects />

      {/* GitHub Repository Quick Link Footer */}
      <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-sky-500/5 via-indigo-500/5 to-purple-500/5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white dark:text-slate-200">
            <GithubIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Looking for full source code and benchmarks?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Explore repositories, open-source tools, and research scripts on GitHub.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={resumeData.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium bg-slate-900 hover:bg-slate-800 text-white dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-all shadow-xs"
          >
            <span>GitHub Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
