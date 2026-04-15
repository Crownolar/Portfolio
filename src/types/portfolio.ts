export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
}

export type SkillIconName = "code" | "database" | "palette" | "globe";

export interface Skill {
  name: string;
  level: number;
  icon: SkillIconName;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: Skill[];
  projects: Project[];
}