# FUTURE_FS_01
TASK 1: PERSONAL PROFESSIONAL PORTFOLIO
# Lindokuhle Nduli - Professional Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS. This single-page application showcases professional background, skills, education, experience, and projects with smooth animations and a polished user experience.

**Live Site:** Deployed on [Netlify](https://lindonportfolio.netlify.app)

---

## Features

- **Interactive Hero Section** - Animated profile image with a typewriter effect cycling through professional roles
- **AI Chatbot Widget** - An interactive assistant that answers questions about the portfolio, skills, and projects
- **Custom Cursor** - A custom pointer design replacing the default browser cursor
- **Scroll Animations** - Fade-in and slide-up effects triggered on scroll for each section
- **Loading Screen** - Splash animation displayed on initial page load
- **Smooth Scrolling** - Navigation links scroll smoothly to corresponding sections
- **Responsive Design** - Mobile-first layout that adapts to all screen sizes
- **Glass Morphism UI** - Backdrop blur card effects with teal, purple, pink, and gold accents

## Sections

| Section | Description |
|---------|-------------|
| **About** | Background story with an embedded Python code snippet |
| **Education** | Diploma in Software Development from Rosebank College (2023-2025) |
| **Experience** | Certifications and achievements (FNB App Academy, WeThinkCode) |
| **Skills** | Programming languages with proficiency levels (C#, Java, Python, JavaScript, SQL, Kotlin, and more) |
| **Projects** | Featured work including ZenithCloud, TuneTracker, and VoteSecure |
| **Contact** | Contact form with validation and social media links |

## Tech Stack

**Frontend:**
- [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast builds and development
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/) for accessible components

**Libraries:**
- [React Router](https://reactrouter.com/) - Client-side routing
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form handling and validation
- [TanStack React Query](https://tanstack.com/query) - Data fetching and caching
- [Lucide React](https://lucide.dev/) - Icon library
- [Sonner](https://sonner.emilkowal.dev/) - Toast notifications
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel component
- [Recharts](https://recharts.org/) - Data visualization

**Testing:**
- [Vitest](https://vitest.dev/) - Unit testing
- [Playwright](https://playwright.dev/) - End-to-end testing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Lindokuhlenduli/FUTURE_FS_01.git
cd FUTURE_FS_01

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start the development server (runs on port 8080)
bun run dev
# or
npm run dev
```

### Build

```bash
# Create a production build
bun run build
# or
npm run build
```

The production build outputs to the `dist` directory.

### Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
  components/
    AboutSection.tsx         # About me section
    ChatbotWidget.tsx        # Interactive AI assistant
    ContactSection.tsx       # Contact form & social links
    CustomCursor.tsx         # Custom cursor effect
    EducationSection.tsx     # Education details
    ExperienceSection.tsx    # Certifications & achievements
    Footer.tsx               # Page footer
    HeroSection.tsx          # Landing hero section
    LoadingScreen.tsx        # Splash/loading screen
    Navbar.tsx               # Navigation bar
    ProjectsSection.tsx      # Featured projects showcase
    SkillsSection.tsx        # Skills display with levels
    ui/                      # shadcn/ui component library
  hooks/
    useScrollAnimation.tsx   # Scroll-based animation hook
    use-toast.ts             # Toast notification hook
    use-mobile.tsx           # Mobile responsiveness hook
  pages/
    Index.tsx                # Main landing page
    NotFound.tsx             # 404 page
  lib/
    utils.ts                 # Utility functions
  assets/                    # Images and media
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file handles build settings:

- **Build command:** `bun run build`
- **Publish directory:** `dist`

## License

This project is open source. See the repository for license details.

## Contact

- **Email:** lindokuhlenduli81@gmail.com
- **GitHub:** [Lindokuhlenduli](https://github.com/Lindokuhlenduli)
- **LinkedIn:** [Lindokuhle Nduli](https://www.linkedin.com/in/lindokuhle-nduli-261625291)
