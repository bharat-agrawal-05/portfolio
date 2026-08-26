import React from 'react';
import { ArrowUp } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-[#07080b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Bharat Agrawal.</span>
          <span>•</span>
          <span className="text-[11px] text-slate-400">Deployed on GitHub Pages</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={resumeData.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={resumeData.socials[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
