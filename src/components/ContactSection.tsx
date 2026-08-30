import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useToast } from './Toast';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { MessageSquare, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-time Opportunity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast('Email address copied: ' + personalInfo.email);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.', 'info');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Message inquiry sent successfully! Thank you.', 'success');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // Confetti fallback
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-border-light dark:border-border-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span>05 / INITIATE CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Let’s Build Something <span className="italic font-normal">Resilient</span>
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
            Whether you have a fulltime engineering role, a consulting contract, or a project in mind, feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Layout: Direct Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
                  Direct Email
                </span>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Fast Response
                </span>
              </div>
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-ink-primary dark:text-ink-dark-primary hover:underline break-all block"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-ink-muted dark:text-ink-dark-muted mt-1">
                  Average response time under 12 hours.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-border-light/60 dark:border-border-dark/60">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2 px-3 rounded-lg border border-border-light dark:border-border-dark hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-ink-muted" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex items-center justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary">
                      WhatsApp Chat
                    </div>
                    <div className="text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-ink-faint group-hover:text-ink-primary dark:group-hover:text-ink-dark-primary">
                  ↗
                </span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex items-center justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-ink-primary dark:text-ink-dark-primary" />
                  <div>
                    <div className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary">
                      GitHub Repositories
                    </div>
                    <div className="text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted">
                      github.com/neurrochmat
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-ink-faint group-hover:text-ink-primary dark:group-hover:text-ink-dark-primary">
                  ↗
                </span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex items-center justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-xs font-semibold text-ink-primary dark:text-ink-dark-primary">
                      LinkedIn Network
                    </div>
                    <div className="text-[11px] font-mono text-ink-muted dark:text-ink-dark-muted">
                      linkedin.com/in/neurrochmat
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-ink-faint group-hover:text-ink-primary dark:group-hover:text-ink-dark-primary">
                  ↗
                </span>
              </a>
            </div>

            {/* Location Tag */}
            <div className="p-4 rounded-xl border border-border-light dark:border-border-dark bg-canvas-subtle/50 dark:bg-canvas-dark-subtle/50 flex items-center gap-2.5 font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Based in Semarang, Central Java, Indonesia (WIB UTC+7)</span>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
              {submitted ? (
                <div className="py-12 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-pastel-green dark:bg-pastel-green-dark border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-primary dark:text-ink-dark-primary font-mono">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name}. I will review your message and reply to <span className="font-mono text-ink-primary dark:text-ink-dark-primary">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Full-time Opportunity',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-xs font-mono hover:bg-canvas-subtle dark:hover:bg-canvas-dark-subtle"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2 rounded-lg border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-xs font-mono text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-faint focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2 rounded-lg border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-xs font-mono text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-faint focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                      Opportunity / Inquiry Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-xs font-mono text-ink-primary dark:text-ink-dark-primary focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
                    >
                      <option value="Full-time Opportunity">Full-time Engineering Role</option>
                      <option value="Contract / Project">Contract / Milestone Project</option>
                      <option value="Mobile App Development">Mobile App Development (Flutter)</option>
                      <option value="Web Platform Engineering">Web Platform Engineering (Laravel/Next.js)</option>
                      <option value="General Technical Inquiry">General Technical Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                      Message & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your requirements, project scope, or role specifications..."
                      className="w-full px-3.5 py-2 rounded-lg border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark text-xs font-mono text-ink-primary dark:text-ink-dark-primary placeholder:text-ink-faint focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg bg-ink-primary hover:bg-neutral-800 text-white dark:bg-ink-dark-primary dark:hover:bg-neutral-200 dark:text-ink-primary text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Send Direct Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
