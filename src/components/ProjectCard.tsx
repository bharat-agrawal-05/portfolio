import React, { useState } from 'react';
import { ExternalLink, Award, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { ProjectItem } from '../types';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all p-5 sm:p-6 shadow-xs hover:shadow-card-hover dark:hover:shadow-card-hover-dark flex flex-col justify-between">
      <div>
        {/* Header row: Category / Award / Research Paper Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex flex-wrap items-center gap-2">
            {project.isResearchPaper && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                <FileText className="w-3.5 h-3.5" />
                Research Paper
              </span>
            )}
            {project.award && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                <Award className="w-3.5 h-3.5" />
                {project.award}
              </span>
            )}
            {project.affiliation && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {project.affiliation}
              </span>
            )}
            {project.guide && (
              <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                Guide: {project.guide}
              </span>
            )}
          </div>

          {/* GitHub / Paper / Demo Links */}
          <div className="flex items-center gap-2">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200 dark:border-purple-800/60 transition-colors"
                title="View Research Paper / Repo"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Paper</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}
            {project.githubUrl && !project.paperUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 mb-3 leading-relaxed">
          {project.tagline}
        </p>

        {/* Key Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
            {project.metrics.map((m, mIdx) => (
              <div key={mIdx} className="space-y-0.5">
                <div className="text-[10px] uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 truncate">
                  {m.label}
                </div>
                <div className="text-sm sm:text-[15px] font-mono font-bold text-slate-900 dark:text-slate-100">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Details Bullets */}
        <div className="space-y-1.5 mb-3">
          {project.bullets.slice(0, expanded ? project.bullets.length : 2).map((bullet, bIdx) => (
            <div key={bIdx} className="flex items-start gap-2 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="text-sky-500 font-mono select-none mt-0.5">›</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {project.bullets.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 hover:underline mb-3 cursor-pointer"
          >
            {expanded ? (
              <>
                <span>Show fewer details</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Show full architecture breakdown (+{project.bullets.length - 2} points)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Tech Tags */}
      <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
        {project.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
