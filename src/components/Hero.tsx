import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Copy,
  Check,
  ArrowRight,
  Award,
  ExternalLink,
  Sparkles,
  Briefcase
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from './Icons';
import { AnimatedName } from './AnimatedName';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'Code2':
        return <LeetCodeIcon className="w-4 h-4 text-amber-500" />;
      case 'Terminal':
        return <CodeforcesIcon className="w-4 h-4 text-red-500" />;
      case 'Award':
        return <Award className="w-4 h-4 text-amber-500" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background subtle ambient grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Experience & Team Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5 animate-fade-in">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
          >
            <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-semibold">Ex-Google SWE Intern</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-sky-700 dark:text-sky-300 bg-sky-500/10 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>May 18 – Aug 7, 2026</span>
          </div>
        </div>

        {/* Main Headings with Animated Name */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm <AnimatedName name="Bharat Agrawal" className="tracking-tight" />.
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-200 tracking-tight leading-relaxed max-w-4xl">
            Ex-Software Engineering Intern at{' '}
            <Link
              to="/experience"
              className="text-slate-900 dark:text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4 hover:decoration-emerald-500 transition-colors"
            >
              Google
            </Link>
            , CS student at{' '}
            <Link
              to="/education"
              className="text-slate-900 dark:text-white font-semibold underline decoration-sky-500/50 decoration-2 underline-offset-4 hover:decoration-sky-500 transition-colors"
            >
              IIT Mandi
            </Link>{' '}
            & exchange student at{' '}
            <Link
              to="/education"
              className="text-slate-900 dark:text-white font-semibold underline decoration-indigo-500/50 decoration-2 underline-offset-4 hover:decoration-indigo-500 transition-colors"
            >
              TU Munich
            </Link>
            .
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-normal">
            Specializing in deep learning research, causal reasoning in LLMs, GPU profiling, and low-latency systems.
          </p>
        </div>

        {/* Metric Quick Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8 pt-1">
          <Link
            to="/education"
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all group"
          >
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1 group-hover:text-sky-500 transition-colors">TUM Exchange →</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white">9.44 <span className="text-xs font-normal text-slate-500">GPA</span></div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">German Grade: 1.7</div>
          </Link>

          <Link
            to="/education"
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all group"
          >
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1 group-hover:text-sky-500 transition-colors">IIT Mandi →</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white">9.04 <span className="text-xs font-normal text-slate-500">CGPA</span></div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">CSE 2023–Present</div>
          </Link>

          <Link
            to="/achievements"
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all group"
          >
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1 group-hover:text-sky-500 transition-colors">Competitive Prog. →</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-600 dark:text-sky-400">1,100+ <span className="text-xs font-normal text-slate-500">Solved</span></div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">CF / LC / CodeChef</div>
          </Link>

          <Link
            to="/achievements"
            className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all group"
          >
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1 group-hover:text-emerald-500 transition-colors">Cybersecurity →</div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">Rank 10 <span className="text-xs font-normal text-slate-500">India</span></div>
            <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">CSAW CTF 2025</div>
          </Link>
        </div>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* View Projects CTA */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 rounded-xl transition-all shadow-xs"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </Link>

          {/* View Experience CTA */}
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all"
          >
            <Briefcase className="w-4 h-4 text-emerald-500" />
            <span>Google Experience</span>
          </Link>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
            title="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span className="font-mono text-xs">{resumeData.contact.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 mt-8">
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-1">Profiles:</span>
          {resumeData.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
            >
              {getSocialIcon(social.icon)}
              <span>{social.platform}</span>
            </a>
          ))}
          <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>{resumeData.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
