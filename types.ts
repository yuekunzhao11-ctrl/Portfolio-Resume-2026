
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  location: string;
}

export type SkillCategory = 'Informatique & Data' | 'Outils & Environnements' | 'Méthodes & Finance';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: SkillCategory;
}
