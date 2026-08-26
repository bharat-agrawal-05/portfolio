import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-2">
          <Briefcase className="w-6 h-6 text-emerald-500" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Industry Experience
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-mono">
          // Software engineering and performance optimization at scale
        </p>

        <div className="space-y-6">
          {resumeData.workExperience.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.company}
                    </span>
                    {exp.team && (
                      <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
                        ({exp.team})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Metrics Row */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="space-y-1">
                      <div className="text-[11px] uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 truncate">
                        {m.label}
                      </div>
                      <div className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-slate-100">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullets */}
              <div className="space-y-3 my-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="text-emerald-500 font-mono select-none mt-0.5 text-base">›</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
