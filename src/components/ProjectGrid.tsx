import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../data/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'web', label: 'Web Fullstack', count: projectsData.filter((p) => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: projectsData.filter((p) => p.category === 'mobile').length },
    { id: 'ai-iot', label: 'Edge AI & IoT', count: projectsData.filter((p) => p.category === 'ai-iot').length },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-border-light dark:border-border-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
              <span>01 / FEATURED PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-ink-primary dark:text-ink-dark-primary tracking-tight">
              Production Systems & <span className="italic font-normal">Architectures</span>
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
              Concrete implementations spanning multi-vendor e-commerce with automated escrow, circular waste logistics, municipal GIS platforms, and offline on-device computer vision.
            </p>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted dark:text-ink-dark-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech or domain..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-xs font-mono text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-faint dark:placeholder:text-ink-dark-faint focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-ink-muted hover:text-ink-primary"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-border-light/60 dark:border-border-dark/60">
          <SlidersHorizontal className="w-3.5 h-3.5 text-ink-faint dark:text-ink-dark-faint mr-1 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-tight transition-all shrink-0 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-ink-primary text-white dark:bg-ink-dark-primary dark:text-ink-primary font-semibold shadow-xs'
                  : 'border border-border-light dark:border-border-dark text-ink-muted dark:text-ink-dark-muted hover:bg-surface-hover dark:hover:bg-surface-dark-hover'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id
                    ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black'
                    : 'bg-canvas-subtle dark:bg-canvas-dark-subtle text-ink-faint'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-xl border border-dashed border-border-light dark:border-border-dark">
            <Sparkles className="w-6 h-6 text-ink-faint dark:text-ink-dark-faint mx-auto mb-2" />
            <h3 className="text-sm font-medium text-ink-primary dark:text-ink-dark-primary font-mono">
              No projects matching "{searchQuery}"
            </h3>
            <p className="text-xs text-ink-muted dark:text-ink-dark-muted mt-1">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-3 py-1.5 rounded bg-ink-primary text-white dark:bg-ink-dark-primary dark:text-ink-primary text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
