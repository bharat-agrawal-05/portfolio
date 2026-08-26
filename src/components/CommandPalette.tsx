import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  Sun,
  Moon,
  Copy,
  Check,
  FileText,
  Terminal,
  X,
  FolderGit2,
  GraduationCap,
  Cpu,
  Trophy,
  Mail,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from './Icons';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Pages' | 'Actions' | 'Socials' | 'Projects';
  icon: React.ReactNode;
  perform: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  theme,
  toggleTheme,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const goToPage = (path: string) => {
    onClose();
    navigate(path);
  };

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
    setTimeout(() => onClose(), 600);
  };

  const commands: CommandItem[] = [
    // Page Navigation
    {
      id: 'nav-home',
      title: 'Go to Home / Overview',
      category: 'Pages',
      icon: <Terminal className="w-4 h-4 text-sky-500" />,
      perform: () => goToPage('/'),
    },
    {
      id: 'nav-experience',
      title: 'Go to Experience (Google SWE Internship)',
      category: 'Pages',
      icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      perform: () => goToPage('/experience'),
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects & Research Papers',
      category: 'Pages',
      icon: <FolderGit2 className="w-4 h-4 text-sky-500" />,
      perform: () => goToPage('/projects'),
    },
    {
      id: 'nav-education',
      title: 'Go to Education & Exchange (TUM & IIT Mandi)',
      category: 'Pages',
      icon: <GraduationCap className="w-4 h-4 text-indigo-500" />,
      perform: () => goToPage('/education'),
    },
    {
      id: 'nav-skills',
      title: 'Go to Technical Skills',
      category: 'Pages',
      icon: <Cpu className="w-4 h-4 text-amber-500" />,
      perform: () => goToPage('/skills'),
    },
    {
      id: 'nav-achievements',
      title: 'Go to Achievements, CTFs & CP Solves',
      category: 'Pages',
      icon: <Trophy className="w-4 h-4 text-purple-500" />,
      perform: () => goToPage('/achievements'),
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact Information',
      category: 'Pages',
      icon: <Mail className="w-4 h-4 text-sky-500" />,
      perform: () => goToPage('/contact'),
    },

    // Actions
    {
      id: 'act-copy-email',
      title: `Copy Email (${resumeData.contact.email})`,
      category: 'Actions',
      icon: <Copy className="w-4 h-4 text-emerald-500" />,
      perform: () => copyText(resumeData.contact.email, 'email'),
    },
    {
      id: 'act-download-resume',
      title: 'Download Resume (PDF)',
      category: 'Actions',
      icon: <FileText className="w-4 h-4 text-sky-500" />,
      perform: () => {
        window.open(resumeData.contact.resumeUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'act-toggle-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Actions',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />,
      perform: () => {
        toggleTheme();
        onClose();
      },
    },

    // Projects direct jumps
    ...resumeData.projects.map((p) => ({
      id: `proj-${p.id}`,
      title: `${p.isResearchPaper ? 'Research: ' : 'Project: '}${p.title}`,
      category: 'Projects' as const,
      icon: p.isResearchPaper ? <Sparkles className="w-4 h-4 text-purple-400" /> : <FolderGit2 className="w-4 h-4 text-slate-400" />,
      perform: () => goToPage('/projects'),
    })),

    // Socials
    {
      id: 'soc-github',
      title: 'Open GitHub Profile',
      category: 'Socials',
      icon: <GithubIcon className="w-4 h-4 text-slate-400" />,
      perform: () => {
        window.open('https://github.com/bharatagrawal1322', '_blank');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Socials',
      icon: <LinkedinIcon className="w-4 h-4 text-sky-500" />,
      perform: () => {
        window.open('https://www.linkedin.com/in/bharat-agrawal-iitmandi/', '_blank');
        onClose();
      },
    },
    {
      id: 'soc-leetcode',
      title: 'Open LeetCode Profile',
      category: 'Socials',
      icon: <LeetCodeIcon className="w-4 h-4 text-amber-500" />,
      perform: () => {
        window.open('https://leetcode.com/u/bharat_agrawal/', '_blank');
        onClose();
      },
    },
    {
      id: 'soc-codeforces',
      title: 'Open Codeforces Profile',
      category: 'Socials',
      icon: <CodeforcesIcon className="w-4 h-4 text-red-500" />,
      perform: () => {
        window.open('https://codeforces.com/profile/bharat_agrawal', '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-950/60 backdrop-blur-xs">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-[#0f1117] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 animate-fade-in">
        {/* Search input header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to page..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-md cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Toast notification inside palette */}
        {toastMessage && (
          <div className="px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium flex items-center gap-2 border-b border-emerald-500/20">
            <Check className="w-3.5 h-3.5" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400 font-mono">
              No matching commands or pages found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => cmd.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <div className="shrink-0">{cmd.icon}</div>
                    <span className="text-xs font-medium truncate">{cmd.title}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3 h-3 text-sky-500" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">↑↓</kbd> navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">↵</kbd> select</span>
            <span><kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">esc</kbd> close</span>
          </div>
          <span>Bharat Agrawal</span>
        </div>
      </div>
    </div>
  );
};
