import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-2">
          <GraduationCap className="w-6 h-6 text-sky-500" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Exchange
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-mono">
          // Academic foundations across India and Germany
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {resumeData.education.map((edu, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all overflow-hidden flex flex-col justify-between ${
                edu.isExchange
                  ? 'bg-sky-50/40 dark:bg-sky-950/20 border-sky-200/80 dark:border-sky-800/50 shadow-xs'
                  : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xs'
              }`}
            >
              <div>
                {/* Header row with flex wrap containment */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white break-words">
                        {edu.institution}
                      </span>
                      {edu.isExchange && (
                        <span className="px-2.5 py-0.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/80 dark:text-sky-300 shrink-0">
                          Exchange
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium mt-1">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Score Badges */}
                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-bold bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 whitespace-nowrap shadow-2xs">
                      <Award className="w-4 h-4 text-sky-500" />
                      {edu.score} {edu.scoreType}
                    </span>
                    {edu.conversionScore && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 whitespace-nowrap">
                        {edu.conversionScore}
                      </span>
                    )}
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-sky-500 font-mono select-none mt-0.5">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
                {edu.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
