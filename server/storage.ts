import { 
  developers, 
  skills, 
  projects, 
  articles, 
  contacts,
  type Developer, 
  type Skill, 
  type Project, 
  type Article, 
  type Contact,
  type InsertContact 
} from "@shared/schema";

export interface IStorage {
  getDeveloper(): Promise<Developer>;
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getArticles(): Promise<Article[]>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private developer: Developer;
  private skills: Skill[];
  private projects: Project[];
  private articles: Article[];
  private contacts: Contact[];
  private contactId: number;

  constructor() {
    this.contactId = 1;
    
    // Initialize with authentic developer data
    this.developer = {
      id: 1,
      name: "Azizbek Ahadov",
      title: "Full Stack",
      role: "Developer",
      bio: "Creating beautiful, functional, and user-friendly digital experiences with modern technologies and creative solutions.",
      photo: "https://i.postimg.cc/50Hxt1DV/photo-2025-02-02-23-58-15.jpg",
      email: "azizahadov991@gmail.com",
      phone: "+998978611199",
      location: "Bukhara, Uzbekistan 200100",
      aboutDescription: "I'm a passionate full-stack developer with 5+ years of experience creating innovative web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
      aboutMission: "My mission is to bridge the gap between design and functionality, creating digital experiences that not only look great but also perform exceptionally well.",
      interests: ["JavaScript", "React", "Node.js", "UI/UX Design"],
      socialLinks: {
        github: "https://github.com/azizahadovv",
        linkedin: "https://linkedin.com/in/azizahadov",
        twitter: "",
        dribbble: "https://azizahadov.uz"
      }
    };

    this.skills = [
      { id: 1, name: "React.js & Next.js", category: "Frontend Development", icon: "fab fa-react", level: 95 },
      { id: 2, name: "TypeScript & JavaScript", category: "Frontend Development", icon: "fab fa-js-square", level: 90 },
      { id: 3, name: "Tailwind CSS & SCSS", category: "Frontend Development", icon: "fas fa-palette", level: 85 },
      { id: 4, name: "Redux & Context API", category: "Frontend Development", icon: "fas fa-layer-group", level: 80 },
      { id: 5, name: "Node.js & Express", category: "Backend Development", icon: "fab fa-node-js", level: 90 },
      { id: 6, name: "Python & Django", category: "Backend Development", icon: "fab fa-python", level: 85 },
      { id: 7, name: "PostgreSQL & MongoDB", category: "Backend Development", icon: "fas fa-database", level: 80 },
      { id: 8, name: "REST & GraphQL APIs", category: "Backend Development", icon: "fas fa-exchange-alt", level: 85 },
      { id: 9, name: "Docker & Kubernetes", category: "DevOps & Tools", icon: "fab fa-docker", level: 75 },
      { id: 10, name: "AWS & Digital Ocean", category: "DevOps & Tools", icon: "fab fa-aws", level: 80 },
      { id: 11, name: "Git & GitHub Actions", category: "DevOps & Tools", icon: "fab fa-git-alt", level: 90 },
      { id: 12, name: "Linux & Nginx", category: "DevOps & Tools", icon: "fab fa-linux", level: 75 }
    ];

    this.projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        liveUrl: "https://ecommerce-demo.alexchen.dev",
        githubUrl: "https://github.com/alexchen/ecommerce-platform",
        featured: true
      },
      {
        id: 2,
        title: "Analytics Dashboard",
        description: "Real-time analytics dashboard with interactive charts and data visualization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        technologies: ["Vue.js", "Python", "Redis", "Chart.js", "PostgreSQL"],
        liveUrl: "https://analytics-demo.alexchen.dev",
        githubUrl: "https://github.com/alexchen/analytics-dashboard",
        featured: true
      },
      {
        id: 3,
        title: "Task Management App",
        description: "Cross-platform mobile app for team collaboration and project management.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        technologies: ["React Native", "Express", "Firebase", "Redux", "TypeScript"],
        liveUrl: "https://taskapp-demo.alexchen.dev",
        githubUrl: "https://github.com/alexchen/task-management-app",
        featured: true
      },
      {
        id: 4,
        title: "AI Chat Application",
        description: "Real-time chat application with AI integration and smart responses.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        technologies: ["Next.js", "OpenAI API", "Socket.io", "Prisma", "Tailwind CSS"],
        liveUrl: "https://ai-chat-demo.azizahadov.uz",
        githubUrl: "https://github.com/azizahadovv/ai-chat-app",
        featured: false
      },
      {
        id: 5,
        title: "Cryptocurrency Portfolio Tracker",
        description: "Track your crypto investments with real-time price updates and portfolio analytics.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        technologies: ["React", "Node.js", "CoinGecko API", "Chart.js", "Material-UI"],
        liveUrl: "https://crypto-tracker-demo.azizahadov.uz",
        githubUrl: "https://github.com/azizahadovv/crypto-portfolio",
        featured: false
      },
      {
        id: 6,
        title: "Weather Forecast App",
        description: "Beautiful weather application with 7-day forecasts and location-based alerts.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        technologies: ["Vue.js", "OpenWeather API", "PWA", "Vuex", "CSS Grid"],
        liveUrl: "https://weather-app-demo.azizahadov.uz",
        githubUrl: "https://github.com/azizahadovv/weather-forecast",
        featured: false
      }
    ];

    this.articles = [
      {
        id: 1,
        title: "The Future of Web Development: What's Coming in 2024",
        excerpt: "Exploring upcoming trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks...",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        publishedAt: new Date("2024-03-15"),
        readTime: "5 min read",
        slug: "future-of-web-development-2024"
      },
      {
        id: 2,
        title: "Building Scalable React Applications: Best Practices",
        excerpt: "Learn how to structure large React applications for maintainability, performance, and team collaboration...",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        publishedAt: new Date("2024-03-08"),
        readTime: "8 min read",
        slug: "building-scalable-react-applications"
      },
      {
        id: 3,
        title: "Microservices Architecture: A Complete Guide",
        excerpt: "Deep dive into microservices architecture, Docker containerization, and orchestration with Kubernetes...",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300",
        publishedAt: new Date("2024-02-28"),
        readTime: "12 min read",
        slug: "microservices-architecture-complete-guide"
      }
    ];

    this.contacts = [];
  }

  async getDeveloper(): Promise<Developer> {
    return this.developer;
  }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return this.projects.filter(project => project.featured);
  }

  async getArticles(): Promise<Article[]> {
    return this.articles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return this.articles.find(article => article.slug === slug);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const contact: Contact = {
      ...insertContact,
      id: this.contactId++,
      createdAt: new Date()
    };
    this.contacts.push(contact);
    return contact;
  }
}

export const storage = new MemStorage();
