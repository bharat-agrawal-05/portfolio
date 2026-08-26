import React from 'react';
import { Users, Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-2">
          <Users className="w-6 h-6 text-sky-500" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Leadership & Community
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-mono">
          // Community involvement and technical initiatives at IIT Mandi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {resumeData.leadership.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
                    {item.role}
                  </span>
                  {item.period && (
                    <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2.5">
                  {item.organization}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
