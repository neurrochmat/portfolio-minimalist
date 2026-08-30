import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-border-light dark:border-border-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span>03 / WORK & ORGANIZATION EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Work Experience & <span className="italic font-normal">Organization</span>
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
            A track record of delivering enterprise-grade software, building automated workflows, and participating in humanitarian organization missions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-border-light dark:border-border-dark space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-surface-light dark:border-surface-dark bg-neutral-900 dark:bg-neutral-100 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark space-y-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                {/* Meta & Roles */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark text-ink-primary dark:text-ink-dark-primary">
                        {item.type === 'work' ? (
                          <Briefcase className="w-3.5 h-3.5" />
                        ) : (
                          <Users className="w-3.5 h-3.5" />
                        )}
                      </span>
                      <h3 className="text-lg font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
                        {item.role}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-ink-muted dark:text-ink-dark-muted mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-ink-faint dark:text-ink-dark-faint space-y-0.5">
                    <span className="flex items-center gap-1.5 text-ink-muted dark:text-ink-dark-muted">
                      <Calendar className="w-3 h-3" /> {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </span>
                  </div>
                </div>

                {/* Key Points */}
                <ul className="space-y-2 text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted pt-2 border-t border-border-light/60 dark:border-border-dark/60">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack Badges if any */}
                {item.stack && item.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle text-ink-muted dark:text-ink-dark-muted border border-border-light/60 dark:border-border-dark/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
