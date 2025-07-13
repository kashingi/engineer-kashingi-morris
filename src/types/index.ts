import { LucideIcon } from 'lucide-react';

export interface IconType {
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  description: string;
  socialLinks: SocialLink[];
}

export interface Technology {
  name: string;
  level: number;
}

export interface Skill {
  category: string;
  icon: LucideIcon;
  technologies: Technology[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}