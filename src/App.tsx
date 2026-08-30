import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillsBento } from './components/SkillsBento';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCredentials } from './components/EducationCredentials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export const AppContent: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-ink-primary dark:text-ink-dark-primary transition-colors duration-300 relative selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900">
      {/* Background subtle noise layer */}
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-60 dark:opacity-40 z-0" />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenCommand={() => setCommandPaletteOpen(true)} />
        <main className="flex-1">
          <Hero />
          <ProjectGrid />
          <SkillsBento />
          <ExperienceTimeline />
          <EducationCredentials />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
