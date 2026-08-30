import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useToast } from './Toast';
import { ArrowDown, Copy, Download, MessageSquare, MapPin, Check, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast('Email address copied to clipboard: ' + personalInfo.email);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-border-light dark:border-border-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Editorial Eyebrow & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span className="tracking-wide uppercase">Engineering Portfolio</span>
            <span className="text-ink-faint dark:text-ink-dark-faint">/</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {personalInfo.location}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Fulltime, Contract & Projects</span>
          </div>
        </div>

        {/* Main Grid: Headline & Profile Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left / Top Editorial Statement */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink-primary dark:text-ink-dark-primary leading-[1.08] tracking-tight">
              Engineering <span className="italic font-normal">decoupled systems</span>, cross-platform mobile apps, and edge intelligence.
            </h1>

            <p className="text-base sm:text-lg text-ink-muted dark:text-ink-dark-muted leading-relaxed font-sans max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Quick Action Button Array */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ink-primary hover:bg-neutral-800 text-white dark:bg-ink-dark-primary dark:hover:bg-neutral-200 dark:text-ink-primary text-xs font-medium tracking-tight transition-all active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-hover dark:hover:bg-surface-dark-hover text-ink-primary dark:text-ink-dark-primary text-xs font-medium transition-all active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-hover dark:hover:bg-surface-dark-hover text-ink-primary dark:text-ink-dark-primary text-xs font-mono transition-all active:scale-[0.98]"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-ink-muted" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark hover:bg-surface-hover dark:hover:bg-surface-dark-hover text-ink-primary dark:text-ink-dark-primary text-xs font-medium transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Profile Frame */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="w-full max-w-[280px] p-3 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-border-light/60 dark:border-border-dark/60 mb-3 group">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
              </div>
              <div className="space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between text-ink-primary dark:text-ink-dark-primary font-semibold">
                  <span>{personalInfo.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark text-ink-muted dark:text-ink-dark-muted">
                    @{personalInfo.nick}
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted dark:text-ink-dark-muted truncate">
                  Politeknik Negeri Semarang · GPA 3.85
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-ink-muted dark:text-ink-dark-muted border-t border-border-light dark:border-border-dark">
                  <span>GitHub & LinkedIn</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors"
                    >
                      gh <ExternalLink className="w-2.5 h-2.5 inline" />
                    </a>
                    <span>·</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-ink-primary dark:hover:text-ink-dark-primary transition-colors"
                    >
                      in <ExternalLink className="w-2.5 h-2.5 inline" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Utilitarian Stat Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border-light dark:border-border-dark">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-border-light dark:border-border-dark bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/50 hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
            >
              <div className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-ink-primary dark:text-ink-dark-primary">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-ink-primary dark:text-ink-dark-primary mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-ink-muted dark:text-ink-dark-muted font-mono mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
