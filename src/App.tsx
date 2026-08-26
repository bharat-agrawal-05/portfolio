import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { MotionBackground } from './components/MotionBackground';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#08090d] text-slate-900 dark:text-slate-100 selection:bg-sky-500/20 selection:text-sky-400 flex flex-col justify-between">
        {/* Ambient floating gradient background */}
        <MotionBackground />

        {/* Top Sticky Navigation */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* Dynamic Route Pages */}
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer />

        {/* Interactive Command Palette */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </HashRouter>
  );
}

export default App;
