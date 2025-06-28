# GitHub Upload Guide

## Preparing Your Portfolio for GitHub

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Multi-language portfolio website"
```

### Step 2: Connect to GitHub Repository
```bash
git remote add origin https://github.com/azizahadovv/emailjs-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Update Repository Settings
After uploading, update your repository:

1. Go to your GitHub repository
2. Add a proper README.md file
3. Set up GitHub Pages (if you want free hosting)

## Project Structure Overview
```
emailjs-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── i18n/          # Multi-language support
│   │   └── data/          # Static data
├── server/                # Express backend
├── shared/                # Shared schemas
├── EMAILJS_SETUP.md       # EmailJS configuration guide
└── package.json          # Dependencies
```

## Features Included
✅ Multi-language support (5 languages)
✅ Responsive design with animations
✅ Contact form with EmailJS integration
✅ Separate pages for all sections
✅ Dark theme with modern UI
✅ RTL support for Arabic

## Installation Instructions (for GitHub README)

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup
1. Clone the repository:
```bash
git clone https://github.com/azizahadovv/emailjs-portfolio.git
cd emailjs-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS (see EMAILJS_SETUP.md):
- Create EmailJS account
- Update credentials in `client/src/pages/Contact.jsx`

4. Start development server:
```bash
npm run dev
```

5. Open http://localhost:5000

## Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Enable in repository settings
- **Railway/Render**: Connect repository for full-stack deployment

## Technologies Used
- React.js (Frontend)
- Express.js (Backend)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- EmailJS (Contact form)
- React Router (Navigation)

## Contact
For questions about this portfolio template, contact Azizbek Ahadov.