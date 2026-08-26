import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Contact } from '../components/Contact';
import { resumeData } from '../data/resumeData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from '../components/Icons';

export const ContactPage: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GithubIcon className="w-4 h-4" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-4 h-4 text-sky-500" />;
      case 'LeetCode':
        return <LeetCodeIcon className="w-4 h-4 text-amber-500" />;
      case 'Codeforces':
        return <CodeforcesIcon className="w-4 h-4 text-red-500" />;
      default:
        return <ExternalLink className="w-4 h-4 text-slate-400" />;
    }
  };

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
          Page // Contact & Communication
        </span>
      </div>

      {/* Main Contact Card directly filling the spacious layout */}
      <Contact />

      {/* Socials & Networking Hub */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2.5 mb-2">
          <Globe className="w-5 h-5 text-sky-500" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Online Profiles & Presence
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 font-mono">
          // Connect via professional networks and developer channels
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  {getSocialIcon(social.platform)}
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {social.platform}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
                    @{social.handle}
                  </div>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
