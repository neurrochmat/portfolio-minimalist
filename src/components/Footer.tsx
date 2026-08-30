import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-canvas-light dark:bg-canvas-dark text-ink-muted dark:text-ink-dark-muted font-mono text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border-light dark:border-border-dark">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-ink-primary dark:text-ink-dark-primary font-semibold text-sm">
              <span className="w-5 h-5 rounded bg-ink-primary dark:bg-ink-dark-primary text-white dark:text-ink-primary text-xs flex items-center justify-center font-mono">
                NR
              </span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-[11px] text-ink-muted dark:text-ink-dark-muted">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-ink-faint dark:text-ink-dark-faint">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React 18, TypeScript & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
