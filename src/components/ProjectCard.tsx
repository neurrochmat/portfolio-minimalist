import React from 'react';
import { Project } from '../data/types';
import { GithubIcon } from './Icons';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300">
      {/* Image Preview Container */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] overflow-hidden bg-canvas-subtle dark:bg-canvas-dark-subtle cursor-pointer border-b border-border-light dark:border-border-dark"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/90 text-white text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Inspect Architecture</span>
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Eyebrow: Category & Period */}
          <div className="flex items-center justify-between gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark text-ink-muted dark:text-ink-dark-muted">
              {project.categoryLabel}
            </span>
            <span className="text-[11px] text-ink-faint dark:text-ink-dark-faint">
              {project.period}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3
              onClick={() => onSelect(project)}
              className="text-lg font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
            </h3>
            <p className="text-xs text-ink-muted dark:text-ink-dark-muted mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Direct Summary */}
          <p className="text-xs text-ink-muted dark:text-ink-dark-muted leading-relaxed line-clamp-2 font-sans">
            {project.summary}
          </p>

          {/* Key Metrics Quick Pill */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1.5 rounded bg-canvas-subtle/80 dark:bg-canvas-dark-subtle/80 border border-border-light/60 dark:border-border-dark/60 font-mono text-[10px]"
              >
                <span className="text-ink-faint dark:text-ink-dark-faint block">{metric.label}</span>
                <span className="font-semibold text-ink-primary dark:text-ink-dark-primary truncate block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle text-ink-muted dark:text-ink-dark-muted border border-border-light/50 dark:border-border-dark/50"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-ink-faint dark:text-ink-dark-faint">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-3 border-t border-border-light dark:border-border-dark flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-medium text-ink-primary dark:text-ink-dark-primary hover:underline flex items-center gap-1"
          >
            <span>System Details</span>
          </button>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle text-ink-muted dark:text-ink-dark-muted hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors"
                title="Live Deployment"
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle text-ink-muted dark:text-ink-dark-muted hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors"
              title="GitHub Source"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
