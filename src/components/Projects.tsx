import React, { useState } from 'react';
import { FolderGit2, BrainCircuit, Layout, Database, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'research' | 'ml' | 'fullstack' | 'data-systems'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', icon: FolderGit2, count: resumeData.projects.length },
    { id: 'research', label: 'Research & Papers', icon: Sparkles, count: resumeData.projects.filter(p => p.category === 'research').length },
    { id: 'ml', label: 'Machine Learning & AI', icon: BrainCircuit, count: resumeData.projects.filter(p => p.category === 'ml').length },
    { id: 'fullstack', label: 'Full-Stack & Systems', icon: Layout, count: resumeData.projects.filter(p => p.category === 'fullstack').length },
    { id: 'data-systems', label: 'Data Pipelines', icon: Database, count: resumeData.projects.filter(p => p.category === 'data-systems').length },
  ];

  const filteredProjects = activeTab === 'all'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <FolderGit2 className="w-6 h-6 text-sky-500" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Research & Engineering Projects
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-mono">
              // Causal reasoning in LLMs, local feature matching, signal processing, and low-latency systems
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 my-6">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                  isActive
                    ? 'bg-white/20 dark:bg-slate-950/20'
                    : 'bg-slate-100 dark:bg-slate-800'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
