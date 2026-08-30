import React from 'react';
import { skillsCategories, platformList } from '../data/portfolioData';
import { Server, Layout, Cpu, Check, MonitorSmartphone } from 'lucide-react';

export const SkillsBento: React.FC = () => {
  const categoryIcons = [
    <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    <Server className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
  ];

  return (
    <section id="architecture" className="py-16 sm:py-24 border-b border-border-light dark:border-border-dark bg-canvas-subtle/30 dark:bg-canvas-dark-subtle/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span>02 / TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Architectural <span className="italic font-normal">Stack & Tooling</span>
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
            A battle-tested technology foundation applied across production backends, reactive web clients, cross-platform mobile apps, cloud instances (Azure VM & Google Cloud Run), and edge microcontrollers.
          </p>
        </div>

        {/* 4-Card Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex flex-col justify-between space-y-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark">
                      {categoryIcons[idx % categoryIcons.length]}
                    </div>
                    <h3 className="font-semibold text-base text-ink-primary dark:text-ink-dark-primary tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-ink-faint dark:text-ink-dark-faint">
                    0{idx + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-ink-muted dark:text-ink-dark-muted leading-relaxed font-sans">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark text-ink-primary dark:text-ink-dark-primary font-medium'
                          : 'bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/50 text-ink-muted dark:text-ink-dark-muted border border-transparent'
                      }`}
                    >
                      {skill.highlight && (
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric indicator */}
              <div className="pt-3 border-t border-border-light/60 dark:border-border-dark/60 flex items-center justify-between text-[11px] font-mono text-ink-faint dark:text-ink-dark-faint">
                <span>Production Verified</span>
                <span>{category.skills.length} Technologies</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supported Target Platforms Footer Bar */}
        <div className="mt-6 p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-ink-muted dark:text-ink-dark-muted">
            <MonitorSmartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-semibold text-ink-primary dark:text-ink-dark-primary">Target Deployment Platforms:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {platformList.map((platform) => (
              <span
                key={platform}
                className="px-2.5 py-1 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light/60 dark:border-border-dark/60 text-ink-primary dark:text-ink-dark-primary"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
