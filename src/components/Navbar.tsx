import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, Command, FileText, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  onOpenCommandPalette
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#08090d]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus:outline-hidden"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-mono font-bold flex items-center justify-center text-sm shadow-xs group-hover:scale-105 transition-transform">
            BA
          </div>
          <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white hidden sm:inline-block">
            Bharat Agrawal
          </span>
        </Link>

        {/* Desktop Navigation with NavLink */}
        <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-slate-950 dark:text-white bg-slate-100 dark:bg-slate-800/90 font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2">
          {/* Quick Command Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/70 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700/60 transition-colors cursor-pointer"
            title="Command Palette (Cmd+K)"
          >
            <Command className="w-3 h-3 text-slate-400" />
            <span className="text-[11px] font-mono">⌘K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume CTA */}
          <a
            href={resumeData.contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 rounded-lg transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-md cursor-pointer"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1017] px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? 'font-semibold text-slate-950 dark:text-white bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <a
              href={resumeData.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-slate-900 dark:bg-sky-500 dark:text-slate-950 rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              Download Resume
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="px-3 py-2 text-xs font-medium border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              ⌘K Actions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
