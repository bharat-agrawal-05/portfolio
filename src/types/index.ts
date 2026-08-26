export interface EducationItem {
  institution: string;
  degree: string;
  location?: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'GPA' | 'Percentage' | 'Grade';
  conversionScore?: string;
  highlights?: string[];
  isExchange?: boolean;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  team?: string;
  location: string;
  period: string;
  type: 'internship' | 'fulltime' | 'research';
  metrics?: { label: string; value: string }[];
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'ml' | 'research' | 'fullstack' | 'data-systems' | 'all';
  guide?: string;
  affiliation?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  award?: string;
  isResearchPaper?: boolean;
  metrics: {
    label: string;
    value: string;
  }[];
  bullets: string[];
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'expert' | 'proficient' | 'familiar';
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  type: 'hackathon' | 'ctf' | 'cp' | 'ml';
  metrics?: string;
  link?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  description: string;
  period?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  icon: string;
}

export interface ResumeData {
  name: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  status: string;
  contact: {
    email: string;
    phone: string;
    resumeUrl: string;
  };
  socials: SocialLink[];
  education: EducationItem[];
  workExperience: WorkExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  leadership: LeadershipItem[];
  cpStats: {
    totalProblems: number;
    platforms: {
      name: string;
      handle: string;
      url: string;
      highlight: string;
    }[];
  };
}
