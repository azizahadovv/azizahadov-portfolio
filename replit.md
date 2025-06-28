# Portfolio Website

## Overview

This is a modern, multilingual portfolio website built with React and Express.js, showcasing a full-stack developer's work, skills, and blog content. The application features a responsive design with dark theme, smooth animations, and internationalization support for 5 languages.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript/JSX support
- **Routing**: Wouter for client-side routing (SPA architecture)
- **State Management**: React Query (TanStack Query) for server state management
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **Internationalization**: Custom i18n implementation supporting 5 languages (English, Uzbek, Russian, Arabic, German)
- **Form Handling**: React Hook Form with Zod validation
- **Email Service**: EmailJS for client-side contact form submissions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **File Serving**: Static asset serving for images and media

### Build System
- **Bundler**: Vite for development and production builds
- **Development**: Hot module replacement and TypeScript compilation
- **Production**: Optimized builds with code splitting

## Key Components

### Database Schema
- **developers**: Core developer information and profile data
- **skills**: Technical skills with categories and proficiency levels
- **projects**: Portfolio projects with technologies and links
- **articles**: Blog posts with content and metadata
- **contacts**: Contact form submissions (schema defined but implementation varies)

### API Endpoints
- `GET /api/developer` - Retrieve developer profile information
- `GET /api/skills` - Fetch all technical skills
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects only
- `GET /api/articles` - Retrieve blog articles
- `GET /api/articles/:slug` - Get specific article by slug
- `POST /api/contact` - Submit contact form

### Frontend Pages
- **Home**: Hero section with developer introduction and featured content
- **About**: Detailed developer biography and mission
- **Skills**: Technical skills organized by categories
- **Portfolio**: Project showcase with filtering capabilities
- **Blog**: Article listing and individual post views
- **Contact**: Contact form with project inquiry options

## Data Flow

### Client-Server Communication
1. React components use React Query to fetch data from Express API endpoints
2. API requests are made through a centralized API client with error handling
3. Server responses are cached and managed by React Query for optimal performance
4. Contact form submissions can use either server-side handling or EmailJS client-side service

### State Management
- **Server State**: Managed by React Query with automatic caching and invalidation
- **Client State**: Local component state using React hooks
- **Form State**: React Hook Form for complex form handling and validation

### Development vs Production Data
- **Development**: Uses in-memory storage with mock data for rapid development
- **Production**: Connects to PostgreSQL database through Drizzle ORM

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe database ORM
- **@emailjs/browser**: Client-side email service integration
- **framer-motion**: Animation library for smooth UI transitions
- **@radix-ui/**: Accessible UI component primitives
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation

### Development Tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS processing and optimization

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with Vite dev server on port 5000
- **Production**: Node.js server serving static assets and API
- **Database**: Environment-based DATABASE_URL configuration

### Build Process
1. Frontend assets built with Vite to `dist/public` directory
2. Backend compiled with esbuild to `dist/index.js`
3. Static assets served from `attached_assets` directory
4. Single production command starts Express server

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Static file serving capability
- Environment variable support for DATABASE_URL

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Complete multi-language portfolio website implementation:
  * Converted from Node.js/TypeScript to pure React.jsx
  * Added 5-language support (Uzbek, Russian, English, Arabic, German)
  * Implemented separate pages for all sections (Home, About, Skills, Portfolio, Blog, Contact)
  * Integrated EmailJS for contact form functionality
  * Added RTL support for Arabic language
  * Fixed contact form field editing issues
  * Created comprehensive setup documentation
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```