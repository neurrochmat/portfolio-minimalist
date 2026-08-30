export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ai-iot';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'ai-iot';
  categoryLabel: string;
  period: string;
  image: string;
  summary: string;
  keyHighlights: string[];
  architecture: string[];
  metrics: ProjectMetric[];
  stack: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'organization';
  points: string[];
  stack?: string[];
}

export interface Coursework {
  name: string;
  grade: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  major: string;
  gpa: string;
  period: string;
  location: string;
  coursework: Coursework[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}
