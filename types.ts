export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
  skills?: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ResearchProject {
  title: string;
  role: string;
  period?: string;
  institution?: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}