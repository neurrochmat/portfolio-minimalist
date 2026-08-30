import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Command, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommand: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommand }) => {
  const { theme, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(new Date());
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-200">
      <div
        className={`max-w-5xl mx-auto rounded-xl border transition-all duration-300 ${scrolled
            ? 'glass-header border-border-light dark:border-border-dark shadow-sm py-2.5 px-4 sm:px-6'
            : 'bg-canvas-light/80 dark:bg-canvas-dark/80 backdrop-blur-md border-border-light/70 dark:border-border-dark/70 py-3 px-4 sm:px-6'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand & Live status */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-medium text-sm tracking-tight text-ink-primary dark:text-ink-dark-primary flex items-center gap-2 group"
            >
              <span className="w-6 h-6 rounded bg-ink-primary dark:bg-ink-dark-primary text-white dark:text-ink-primary font-mono text-xs font-bold flex items-center justify-center">
                NR
              </span>
              <span className="hidden sm:inline font-semibold">{personalInfo.name}</span>
            </a>

            {/* <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-pastel-green dark:bg-pastel-green-dark border border-emerald-200/50 dark:border-emerald-900/50 text-[11px] font-mono text-pastel-green-ink dark:text-pastel-green-ink-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for projects</span>
            </div> */}
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-tight text-ink-muted dark:text-ink-dark-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink-primary dark:bg-ink-dark-primary transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Clock */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-ink-muted dark:text-ink-dark-muted px-2 py-1 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark">
              <span className="text-ink-faint dark:text-ink-dark-faint">SMG</span>
              <span>{currentTime}</span>
              <span className="text-[10px] text-ink-faint dark:text-ink-dark-faint">WIB</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommand}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-hover dark:hover:bg-surface-dark-hover transition-colors text-xs font-mono text-ink-muted dark:text-ink-dark-muted"
              title="Open Command Palette (⌘K)"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">⌘K</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-hover dark:hover:bg-surface-dark-hover transition-colors text-ink-primary dark:text-ink-dark-primary"
              aria-label="Toggle color theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-neutral-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-hover dark:hover:bg-surface-dark-hover transition-colors text-ink-primary dark:text-ink-dark-primary"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-3 border-t border-border-light dark:border-border-dark animate-fade-in flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-1.5 rounded text-ink-muted dark:text-ink-dark-muted hover:text-ink-primary dark:hover:text-ink-dark-primary hover:bg-surface-hover dark:hover:bg-surface-dark-hover transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}
            <div className="pt-2 border-t border-border-light dark:border-border-dark flex items-center justify-between text-xs font-mono text-ink-muted dark:text-ink-dark-muted px-2">
              <span>Semarang Local Time</span>
              <span>{currentTime} WIB</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
