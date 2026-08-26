import React from 'react';
import { Cpu, Code, Layers, BrainCircuit, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-sky-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-500" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="skills" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-2">
          <Cpu className="w-6 h-6 text-sky-500" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Arsenal
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 font-mono">
          // Languages, deep learning frameworks, web technologies, and systems tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {resumeData.skills.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-mono rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-sky-500/50 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
