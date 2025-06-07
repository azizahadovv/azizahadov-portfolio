import { queryClient } from "./queryClient";

export interface Developer {
  id: number;
  name: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
  email: string;
  phone: string;
  location: string;
  aboutDescription: string;
  aboutMission: string;
  interests: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    dribbble: string;
  };
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  icon: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  readTime: string;
  slug: string;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export const api = {
  async submitContact(data: ContactForm) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit contact form');
    }
    
    return response.json();
  }
};
