import React, { useEffect } from 'react';
import { Project } from '../data/types';
import { GithubIcon } from './Icons';
import { X, ExternalLink, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-950/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-2xl overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex items-center justify-between bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
              {project.categoryLabel} / Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-border-light dark:border-border-dark hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle text-ink-muted dark:text-ink-dark-muted hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Title & Subtitle */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-1">
              <span>{project.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-ink-muted dark:text-ink-dark-muted mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Full High-Res Preview */}
          <div className="relative rounded-xl overflow-hidden border border-border-light dark:border-border-dark bg-canvas-subtle dark:bg-canvas-dark-subtle aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-border-light dark:border-border-dark bg-canvas-subtle/40 dark:bg-canvas-dark-subtle/40"
              >
                <div className="text-[11px] font-mono text-ink-faint dark:text-ink-dark-faint">{metric.label}</div>
                <div className="text-sm font-semibold text-ink-primary dark:text-ink-dark-primary mt-0.5">{metric.value}</div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted">
              Project Overview
            </h3>
            <p className="text-sm text-ink-primary dark:text-ink-dark-primary leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Engineering Implementation & Achievements</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted">
              {project.keyHighlights.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-normal">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Pipeline Breakdown */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>Architecture & Data Flow</span>
              </h3>
              <div className="p-4 rounded-xl border border-border-light dark:border-border-dark bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/50 space-y-2 font-mono text-xs">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-ink-muted dark:text-ink-dark-muted">
                    <span className="text-ink-faint dark:text-ink-dark-faint">{idx + 1}.</span>
                    <span className="text-ink-primary dark:text-ink-dark-primary">{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack List */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark font-mono text-xs text-ink-primary dark:text-ink-dark-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-border-light dark:border-border-dark bg-canvas-subtle/60 dark:bg-canvas-dark-subtle/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-xs font-mono hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
          >
            Close Inspector
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-light dark:hover:bg-surface-dark text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-primary hover:bg-neutral-800 text-white dark:bg-ink-dark-primary dark:hover:bg-neutral-200 dark:text-ink-primary text-xs font-medium transition-colors"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
