# 🎮 Andrea Reverberi - Game Designer Portfolio

A sleek, responsive portfolio website showcasing the work and skills of Andrea Reverberi, a passionate Italian game designer.

[Visit Live Site](https://andreareverberi.com)

## ✨ Features

- **Modern UI/UX Design** - Built with React and Framer Motion for smooth animations
- **Responsive Layout** - Optimized for all device sizes
- **Project Showcase** - Interactive project cards with detailed individual pages
- **Markdown Content** - Easy-to-update project information using markdown files
- **Contact Form** - Integrated with EmailJS for seamless communication
- **Interactive Mini-Game** - "TechTimeline" game where users guess the year of tech events

## 🚀 Technologies

- **React** - Frontend library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better code quality
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Animation library for fluid transitions
- **React Router** - For seamless navigation between pages
- **EmailJS** - For contact form functionality without a backend
- **Vite** - Modern, fast build tool

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/game-designer-portfolio.git
   ```

2. Navigate to the project directory
   ```
   cd game-designer-portfolio
   ```

3. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

4. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 📝 Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # React components
├── content/          # Markdown content for projects
├── data/             # Static data files
├── App.tsx           # Main application component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop screens
- Tablets
- Mobile devices

## 🎨 Customization

To customize the portfolio for your own use:

1. Update the personal information in the components
2. Add your own projects in the `src/content/projects/` directory
3. Modify the color scheme in `tailwind.config.js`

## 📝 Project Template

When adding new projects, use this markdown template in the `src/content/projects/` directory:

```markdown
---
title: "Project Name"
date: "YYYY-MM-DD"
description: "A brief description of the project that appears in the card overview."
image: "/Assets/your-image.png"
tags: ["Tag1", "Tag2", "Tag3"]
details:
  engine: "Used Engine"
  role: "Your Role"
  duration: "Project Duration"
  responsibilities:
    - "Responsibility 1"
    - "Responsibility 2"
    - "Responsibility 3"
    - "Responsibility 4"
---

# Project Name

Detailed project description goes here. This is the main content that will appear on the project page.

## Section Heading

More details about the project, broken into logical sections.

## Another Section

Additional information about features, design choices, or technical challenges.
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Designed and developed with ❤️