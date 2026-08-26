import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Education } from '../components/Education';

export const EducationPage: React.FC = () => {
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
          Page // Education & Exchange
        </span>
      </div>

      {/* Main Education Component directly filling the spacious layout */}
      <Education />

      {/* Academic Highlights & Coursework Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center gap-2 mb-2.5 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            TUM Munich Curriculum
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Advanced Informatics & ML Systems
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Completed graduate modules at TUM in Graph Neural Networks, modern C++, NLP, and distributed systems with a 9.44 GPA (1.7 German Grade).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2.5 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              IIT Mandi Core Foundation
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Maintained a 9.04 CGPA with coursework in Data Structures, Algorithms, Operating Systems, Networks, Machine Learning, and Architecture.
            </p>
          </div>

          <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>View Technical Stack</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/achievements"
              className="text-xs sm:text-sm font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Awards & CP Solves →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
