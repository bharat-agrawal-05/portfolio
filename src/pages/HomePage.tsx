import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { MarqueeTicker } from '../components/MarqueeTicker';
import {
  Briefcase,
  FolderGit2,
  GraduationCap,
  Cpu,
  Trophy,
  Mail,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Introduction */}
      <Hero />

      {/* Marquee Skill & Keyword Ticker */}
      <MarqueeTicker />

      {/* Exploration Hub Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-sky-500" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Explore Portfolio
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-mono">
          // Dedicated sections for experience, research, education, stack, and awards
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Experience Card */}
          <Link
            to="/experience"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                  Google
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Google SWE Internship: Silicon Product Software, GPU profiling, 490+ hardware counters & Perfetto pipelines.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>View Experience</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Projects Card */}
          <Link
            to="/projects"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md">
                  {resumeData.projects.length} Works
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                Projects & Research
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                SemEval-2026 LLM Causal Reasoning, Local Feature Matching Survey, Tabularis, BiometricSEAL, and RF Signal DNNs.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs sm:text-sm font-mono text-sky-600 dark:text-sky-400 font-semibold gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Education Card */}
          <Link
            to="/education"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md">
                  TUM & IIT Mandi
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Education & Exchange
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                TUM Exchange (9.44 GPA / 1.7 German Grade) & IIT Mandi B.Tech CSE (9.04 CGPA).
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs sm:text-sm font-mono text-indigo-600 dark:text-indigo-400 font-semibold gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>View Academics</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Skills Card */}
          <Link
            to="/skills"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-md">
                  4 Categories
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Technical Arsenal
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                C++, Python, PyTorch, LoRA/Unsloth, Perfetto, Vulkan, React, FastAPI, Linux Kernel & Drivers.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs sm:text-sm font-mono text-amber-600 dark:text-amber-400 font-semibold gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>View Full Arsenal</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Achievements Card */}
          <Link
            to="/achievements"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-md">
                  1,100+ Solved
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Achievements & CTFs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Rank 10 India CSAW CTF, 1st Place KrackHack'24, Amazon ML Challenge qualifier, and competitive programming profiles.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs sm:text-sm font-mono text-purple-600 dark:text-purple-400 font-semibold gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>View Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Contact Card */}
          <Link
            to="/contact"
            className="group p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                  Open for roles
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Direct email, phone number, LinkedIn, GitHub, and collaboration channels.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center text-xs sm:text-sm font-mono text-sky-600 dark:text-sky-400 font-semibold gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Contact Bharat</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Quick Fast Facts Bar */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-500/5 via-indigo-500/5 to-emerald-500/5 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sky-500">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-900 dark:text-white">Active Focus:</span> High-performance deep learning systems, causal LLM reasoning, and low-latency systems.
            </div>
          </div>
          <Link
            to="/experience"
            className="shrink-0 text-xs sm:text-sm font-mono font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1.5"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
