import React, { useState, useEffect, useMemo } from 'react';
import { Search, ArrowRight, Layers, FileText, Mail, MessageSquare, ExternalLink, Sun, Moon, Sparkles } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useToast } from './Toast';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (id: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Command items
  const commandItems = useMemo(() => {
    const items = [
      // Sections
      { id: 'sec-projects', title: 'Go to Projects Section', category: 'Navigation', icon: <Layers className="w-4 h-4" />, action: () => { window.location.href = '#projects'; onClose(); } },
      { id: 'sec-arch', title: 'Go to Architecture & Stack', category: 'Navigation', icon: <Layers className="w-4 h-4" />, action: () => { window.location.href = '#architecture'; onClose(); } },
      { id: 'sec-exp', title: 'Go to Work & Organization Experience', category: 'Navigation', icon: <Layers className="w-4 h-4" />, action: () => { window.location.href = '#experience'; onClose(); } },
      { id: 'sec-cred', title: 'Go to Academics & Credentials', category: 'Navigation', icon: <Layers className="w-4 h-4" />, action: () => { window.location.href = '#credentials'; onClose(); } },
      { id: 'sec-contact', title: 'Go to Contact Section', category: 'Navigation', icon: <Mail className="w-4 h-4" />, action: () => { window.location.href = '#contact'; onClose(); } },

      // Quick Actions
      { id: 'act-resume', title: 'Download Resume (PDF)', category: 'Quick Actions', icon: <FileText className="w-4 h-4" />, action: () => { window.open(personalInfo.resumePdf, '_blank'); onClose(); } },
      { id: 'act-email', title: `Copy Email (${personalInfo.email})`, category: 'Quick Actions', icon: <Mail className="w-4 h-4" />, action: () => { navigator.clipboard.writeText(personalInfo.email); showToast('Email copied: ' + personalInfo.email); onClose(); } },
      { id: 'act-wa', title: 'Open WhatsApp Chat', category: 'Quick Actions', icon: <MessageSquare className="w-4 h-4" />, action: () => { window.open(personalInfo.whatsappUrl, '_blank'); onClose(); } },
      { id: 'act-gh', title: 'Visit GitHub Profile (@neurrochmat)', category: 'Quick Actions', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open(personalInfo.github, '_blank'); onClose(); } },
      { id: 'act-li', title: 'Visit LinkedIn Profile', category: 'Quick Actions', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open(personalInfo.linkedin, '_blank'); onClose(); } },
      { id: 'act-theme', title: `Toggle Color Theme (Current: ${theme})`, category: 'Quick Actions', icon: theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />, action: () => { toggleTheme(); onClose(); } },

      // Projects
      ...projectsData.map((project) => ({
        id: `proj-${project.id}`,
        title: `Project: ${project.title}`,
        category: 'Projects',
        icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
        action: () => {
          window.location.href = `#projects`;
          onClose();
        }
      }))
    ];

    if (!query.trim()) return items;
    return items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, theme, toggleTheme, showToast, onClose]);

  // Handle arrow key navigation
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const handleNavigation = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (commandItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + commandItems.length) % (commandItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (commandItems[selectedIndex]) {
          commandItems[selectedIndex].action();
        }
      }
    };
    window.addEventListener('keydown', handleNavigation);
    return () => window.removeEventListener('keydown', handleNavigation);
  }, [isOpen, commandItems, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-neutral-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-2xl overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="p-4 border-b border-border-light dark:border-border-dark flex items-center gap-3">
          <Search className="w-4 h-4 text-ink-muted dark:text-ink-dark-muted shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or section..."
            autoFocus
            className="w-full bg-transparent text-sm font-mono text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-faint dark:placeholder:text-ink-dark-faint focus:outline-none"
          />
          <kbd className="px-2 py-0.5 rounded border border-border-light dark:border-border-dark bg-canvas-subtle dark:bg-canvas-dark-subtle font-mono text-[10px] text-ink-muted dark:text-ink-dark-muted">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {commandItems.length > 0 ? (
            commandItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-left transition-colors font-mono text-xs ${
                  selectedIndex === idx
                    ? 'bg-ink-primary text-white dark:bg-ink-dark-primary dark:text-ink-primary'
                    : 'text-ink-primary dark:text-ink-dark-primary hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span className="shrink-0">{item.icon}</span>
                  <span className="truncate">{item.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className={`text-[10px] uppercase tracking-wider ${
                    selectedIndex === idx ? 'text-white/60 dark:text-black/60' : 'text-ink-faint dark:text-ink-dark-faint'
                  }`}>
                    {item.category}
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </div>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-border-light dark:border-border-dark bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/50 flex items-center justify-between text-[11px] font-mono text-ink-faint dark:text-ink-dark-faint">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Command Palette</span>
        </div>
      </div>
    </div>
  );
};
