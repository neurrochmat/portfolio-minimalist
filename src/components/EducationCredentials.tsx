import React from 'react';
import { educationData, certificationsData, personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, BookmarkCheck, HeartHandshake } from 'lucide-react';

export const EducationCredentials: React.FC = () => {
  return (
    <section id="credentials" className="py-16 sm:py-24 border-b border-border-light dark:border-border-dark bg-canvas-subtle/30 dark:bg-canvas-dark-subtle/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span>04 / ACADEMICS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-ink-primary dark:text-ink-dark-primary tracking-tight">
            Formal Education & <span className="italic font-normal">Certifications</span>
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
            Verified academic milestones from Politeknik Negeri Semarang alongside 8 industry credential verifications from Oracle Academy, MikroTik SIA, and Dicoding Indonesia.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Education & Soft Skills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light dark:border-border-dark text-ink-primary dark:text-ink-dark-primary">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <span className="font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
                      Higher Education
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
                    {educationData.institution}
                  </h3>
                  <p className="text-xs text-ink-muted dark:text-ink-dark-muted">
                    {educationData.degree} · {educationData.major}
                  </p>
                </div>

                <div className="text-right font-mono">
                  <div className="text-2xl font-bold text-ink-primary dark:text-ink-dark-primary">
                    {educationData.gpa}
                  </div>
                  <span className="text-[10px] text-ink-muted dark:text-ink-dark-muted">
                    Cumulative GPA
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-ink-faint dark:text-ink-dark-faint pt-2 border-t border-border-light/60 dark:border-border-dark/60">
                <span>{educationData.location}</span>
                <span>{educationData.period}</span>
              </div>

              {/* Coursework Matrix */}
              <div className="space-y-2 pt-2 border-t border-border-light/60 dark:border-border-dark/60">
                <div className="text-xs font-mono uppercase tracking-wider text-ink-muted dark:text-ink-dark-muted">
                  Verified Academic Coursework
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light/60 dark:border-border-dark/60 flex items-center justify-between text-xs font-mono"
                    >
                      <span className="text-ink-muted dark:text-ink-dark-muted truncate mr-1">
                        {course.name}
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                        {course.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills & Professional Attributes Card */}
            {personalInfo.softSkills && (
              <div className="p-5 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                  <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="uppercase tracking-wider">Professional Core Competencies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-canvas-subtle dark:bg-canvas-dark-subtle border border-border-light/60 dark:border-border-dark/60 font-mono text-xs text-ink-primary dark:text-ink-dark-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 8 Verified Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>8 Verified Industry Credentials</span>
              </div>
              <span className="text-[11px] font-mono text-ink-faint dark:text-ink-dark-faint">
                Oracle, MikroTik & Dicoding
              </span>
            </div>

            <div className="space-y-2.5">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark flex items-center justify-between gap-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <BookmarkCheck className="w-4 h-4 text-neutral-800 dark:text-neutral-200 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-ink-primary dark:text-ink-dark-primary tracking-tight">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-ink-muted dark:text-ink-dark-muted font-mono mt-0.5">
                        {cert.issuer} · Verified Credential
                      </p>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-medium shrink-0 border ${
                    cert.badge === 'MikroTik'
                      ? 'bg-pastel-blue dark:bg-pastel-blue-dark text-pastel-blue-ink dark:text-pastel-blue-ink-dark border-blue-300 dark:border-blue-800'
                      : cert.badge === 'Oracle'
                      ? 'bg-pastel-amber dark:bg-pastel-amber-dark text-pastel-amber-ink dark:text-pastel-amber-ink-dark border-amber-300 dark:border-amber-800'
                      : 'bg-canvas-subtle dark:bg-canvas-dark-subtle border-border-light dark:border-border-dark text-ink-primary dark:text-ink-dark-primary'
                  }`}>
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
