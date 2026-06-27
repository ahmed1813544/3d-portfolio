# 🌐 3D Portfolio — Immersive Creative Developer & Designer Portfolio

A stunning, fully interactive **3D portfolio website** built with modern web technologies. This project combines the power of **Next.js**, **Three.js**, **GSAP**, **Tailwind CSS**, and **21st.dev components** to create a visually breathtaking, scroll-driven experience that showcases creative development work in an unforgettable way.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🚀 Live Demo](#-live-demo)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 21st.dev Components](#-21stdev-components)
- [🎨 Sections](#-sections)
- [📁 Project Structure](#-project-structure)
- [⚡ Getting Started](#-getting-started)
- [🔧 Configuration](#-configuration)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🚀 Deployment](#-deployment)
- [📝 License](#-license)
- [🤝 Contributing](#-contributing)
- [💬 Contact](#-contact)

---

## ✨ Features

### 🌍 3D Interactive Scenes
- **Hero Scene** — A mesmerizing rotating torus knot with floating spheres, wireframe octahedrons, a particle field, and sparkle effects, all rendered in real-time using WebGL via React Three Fiber
- **About Scene** — A gently rotating wireframe icosahedron crystal that adds depth and dimension to the about section
- **Skills Scene** — An orbital particle system with colored particles and rotating rings that create a cosmic atmosphere around the skills showcase

### 🎭 21st.dev UI Components
- **MagicCard** — A card component with a magical mouse-following glow effect that tracks cursor position and renders a radial gradient highlight
- **ShimmerButton** — An eye-catching button with a continuous shimmer animation that sweeps across its surface
- **Globe** — A procedurally generated wireframe globe rendered on Canvas 2D with latitude/longitude lines, intersection dots, and smooth rotation
- **BackgroundGradientAnimation** — Floating, animated gradient blobs that create a dreamy, ethereal background atmosphere
- **AnimatedBeam** — An SVG-based animated beam that sweeps horizontally with a gradient trail
- **LampContainer** — A dramatic lighting effect component that creates a spotlight/lamp aesthetic with gradient masks
- **ScrollProgress** — A fixed top-of-page progress indicator that fills as the user scrolls through the page
- **ParallaxScroll** — A scroll-driven parallax effect container that shifts content vertically based on scroll position
- **TextReveal** — A word-by-word text animation triggered by intersection observer

### 🎬 GSAP Scroll Animations
- Smooth entrance animations for every section as they enter the viewport
- Staggered card animations in the projects grid
- Animated skill bars that fill from zero to their target percentage
- Parallax and fade effects throughout the entire page
- Timeline-based hero entrance with sequential text and button reveals

### 📱 Fully Responsive
- Mobile-first design that adapts beautifully to all screen sizes
- Collapsible mobile navigation with animated hamburger menu
- Fluid typography and spacing that scales gracefully

### 🌙 Dark Mode by Default
- A premium dark theme with purple/violet accent colors
- Glass-morphism effects with `backdrop-blur` and semi-transparent backgrounds
- Subtle border highlights and shadow effects

---

## 🚀 Live Demo

> *Deploy your own to see it live!* See [Deployment](#-deployment) section below.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16.x | React framework with App Router, server components, and optimized builds |
| **React** | 19.x | UI library for building component-based interfaces |
| **TypeScript** | 5.x | Type-safe JavaScript for better DX and fewer runtime errors |
| **Three.js** | Latest | 3D graphics library for WebGL rendering |
| **React Three Fiber** | Latest | React renderer for Three.js — declarative 3D scenes |
| **@react-three/drei** | Latest | Useful helpers and abstractions for R3F (Float, Sparkles, etc.) |
| **GSAP** | Latest | Professional-grade animation library for scroll and entrance animations |
| **GSAP ScrollTrigger** | Latest | Scroll-driven animation plugin for GSAP |
| **Framer Motion** | Latest | React animation library for UI transitions (navbar, mobile menu) |
| **Tailwind CSS** | 4.x | Utility-first CSS framework for rapid styling |
| **shadcn/ui** | Latest | Reusable component foundation (base for 21st.dev components) |
| **21st.dev** | — | Open-source React component registry patterns |
| **Geist Font** | — | Modern sans-serif font family by Vercel |

---

## 📦 21st.dev Components

This project implements **9 components** following the [21st.dev](https://21st.dev) open-source component registry pattern. Since 21st.dev components are source-code files you own and embed directly into your project (similar to shadcn/ui), each component lives under `src/components/ui/` and is fully customizable.

### Component List

| Component | File | Description |
|---|---|---|
| `MagicCard` | `magic-card.tsx` | Card with mouse-tracking radial glow effect |
| `ShimmerButton` | `shimmer-button.tsx` | Button with animated shimmer sweep |
| `Globe` | `globe.tsx` | Interactive rotating wireframe globe |
| `BackgroundGradientAnimation` | `background-gradient-animation.tsx` | Floating animated gradient blobs |
| `TextReveal` | `text-reveal.tsx` | Scroll-triggered word reveal animation |
| `AnimatedBeam` | `animated-beam.tsx` | Animated SVG beam line effect |
| `ParallaxScroll` | `parallax-scroll.tsx` | Scroll-based parallax container |
| `ScrollProgress` | `scroll-progress.tsx` | Fixed top scroll progress bar |
| `LampContainer` | `lamp.tsx` | Dramatic spotlight/lamp lighting effect |

### Usage Example

```tsx
import { MagicCard } from "@/components/ui/magic-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function MySection() {
  return (
    <section className="relative">
      <BackgroundGradientAnimation />
      <MagicCard>
        <div className="p-6">
          <h2>Glowing Card Content</h2>
        </div>
      </MagicCard>
      <ShimmerButton>
        Click Me
      </ShimmerButton>
    </section>
  );
}
```

---

## 🎨 Sections

The portfolio is composed of **7 main sections**, each designed as an independent, self-contained component with its own animations and 3D elements:

### 1. 🔝 Navigation Bar (`navbar.tsx`)
- Fixed position with transparent-to-blurred transition on scroll
- Desktop: horizontal nav links with "Let's Talk" CTA button
- Mobile: animated hamburger menu with slide-down panel
- Smooth entrance animation from top using Framer Motion

### 2. 🌠 Hero Section (`hero.tsx`)
- Full-screen height with the interactive 3D torus knot scene as background
- Large animated heading with gradient text effects
- Subtitle with descriptive text
- Two CTAs: shimmer "View My Work" button and outlined "Get In Touch" link
- Scroll indicator at the bottom with bouncing dot animation
- GSAP timeline for sequential text entrance

### 3. 👤 About Section (`about.tsx`)
- Two-column layout: text content + animated stats
- 3D wireframe crystal floating in the background
- Four stat cards: Years Experience, Projects, Clients, Technologies
- Animated beam separator effect
- Scroll-triggered GSAP fade-in

### 4. 💼 Projects Section (`projects.tsx`)
- Grid of 6 project cards (responsive: 1/2/3 columns)
- Each card uses `MagicCard` with glowing hover effect
- Project image placeholder with gradient overlay
- Tags/chips for technologies used
- Hover reveal "View Project" link
- Background rotating globe for depth
- Staggered GSAP entrance animations

### 5. 🛠️ Skills Section (`skills.tsx`)
- Three-column layout: Frontend, Backend, Tools & Design
- Each column contains 5 skills with animated progress bars
- `LampContainer` with dramatic spotlight effect
- 3D orbital particle system background
- GSAP ScrollTrigger-driven bar animations

### 6. 📬 Contact Section (`contact.tsx`)
- Two-column layout: contact info + form
- MagicCard-wrapped contact details (email, location, socials)
- Fully functional form with name, email, message fields
- Animated background gradient blobs
- Form submission feedback with confirmation state

### 7. 🔻 Footer (`footer.tsx`)
- Site branding and navigation links
- Social media icons (GitHub, LinkedIn, Twitter/X)
- Copyright notice with tech stack credits

---

## 📁 Project Structure

```
3d-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, CSS variables, Tailwind theme
│   │   ├── layout.tsx           # Root layout with dark mode and Geist fonts
│   │   └── page.tsx             # Main page composing all sections
│   │
│   ├── components/
│   │   ├── ui/                  # 21st.dev-style reusable UI components
│   │   │   ├── animated-beam.tsx
│   │   │   ├── background-gradient-animation.tsx
│   │   │   ├── button.tsx       # shadcn/ui base button
│   │   │   ├── globe.tsx
│   │   │   ├── lamp.tsx
│   │   │   ├── magic-card.tsx
│   │   │   ├── parallax-scroll.tsx
│   │   │   ├── scroll-progress.tsx
│   │   │   ├── shimmer-button.tsx
│   │   │   └── text-reveal.tsx
│   │   │
│   │   ├── three/               # Three.js / React Three Fiber scenes
│   │   │   ├── hero-scene.tsx   # Torus knot, floating objects, particles
│   │   │   ├── about-scene.tsx  # Wireframe icosahedron crystal
│   │   │   └── skills-scene.tsx # Orbital particles and rotating rings
│   │   │
│   │   └── sections/            # Page section components
│   │       ├── navbar.tsx
│   │       ├── hero.tsx
│   │       ├── about.tsx
│   │       ├── projects.tsx
│   │       ├── skills.tsx
│   │       ├── contact.tsx
│   │       └── footer.tsx
│   │
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
│
├── public/                      # Static assets
├── components.json              # shadcn/ui configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS/Tailwind configuration
├── tailwind.config.ts           # Tailwind CSS configuration (if applicable)
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** (or yarn/pnpm/bun)
- A modern browser with WebGL support

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahmed1813544/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🔧 Configuration

### Environment Variables

No environment variables are required for the default setup. If you add a contact form backend or analytics, create a `.env.local` file:

```env
# Example: Contact form API endpoint (if you add a backend)
CONTACT_API_URL=https://your-api.com/contact

# Example: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Tailwind CSS

The project uses **Tailwind CSS v4** with the new CSS-first configuration approach. Theme variables are defined in `globals.css` using `@theme inline`.

### Three.js

3D scenes are configured with:
- **Antialiasing** enabled for smooth edges
- **Alpha transparency** for seamless integration with page backgrounds
- **Device pixel ratio** handling for crisp rendering on Retina displays

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: oklch(0.145 0 0);    /* Dark background */
  --foreground: oklch(0.985 0 0);    /* Light text */
  --primary: oklch(0.922 0 0);       /* Primary actions */
  /* ... more variables */
}
```

### Modifying 3D Scenes

Each scene is an independent component under `src/components/three/`. You can:

- Change the **hero geometry** (replace `torusKnotGeometry` with `dodecahedronGeometry`, `icosahedronGeometry`, etc.)
- Adjust **colors** in `meshStandardMaterial` or `MeshDistortMaterial`
- Modify **animation speeds** in `useFrame` callbacks
- Add/remove **floating objects** in the scene arrays

### Updating Content

All portfolio content (projects, skills, stats, contact info) is defined as constants at the top of each section component. Simply edit the arrays to update:

```tsx
// In src/components/sections/projects.tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Your project description",
    tags: ["React", "Three.js"],
    image: "from-purple-600/20 to-blue-600/20",
    link: "https://your-project.com",
  },
  // ... more projects
];
```

### Adding New Sections

1. Create a new file in `src/components/sections/`
2. Build your section component with animations
3. Import and add it to `src/app/page.tsx`
4. Add a navigation link in `navbar.tsx`

---

## 📱 Responsive Design

The portfolio is designed mobile-first with these breakpoints:

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640px – 1024px | Two-column grids |
| Desktop | > 1024px | Full three-column layouts |

Key responsive features:
- **Navigation**: Hamburger menu on mobile, horizontal links on desktop
- **Projects grid**: 1 → 2 → 3 columns
- **Skills grid**: 1 → 3 columns
- **Contact**: Stacked → side-by-side
- **Typography**: Scales from `text-5xl` to `text-8xl` for headings
- **3D scenes**: Automatically resize with the viewport

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**

Vercel will automatically detect Next.js and configure the build settings.

### Netlify

```bash
npm run build
# Upload the .next/output directory
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export

For static hosting (GitHub Pages, etc.):

```js
// next.config.ts
const nextConfig = {
  output: 'export',
};
```

> **Note**: Static export will not include server-side features. 3D scenes and client components will still work.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤗 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Ideas for Contributions

- Add more 3D scene variations (black hole, DNA helix, particle galaxy)
- Implement dark/light theme toggle
- Add page transition animations
- Create a blog section with MDX
- Add i18n (internationalization) support
- Implement easter eggs or interactive 3D objects
- Add sound effects on interactions
- Optimize for Core Web Vitals

---

## 💬 Contact

**Ahmed** — [GitHub](https://github.com/ahmed1813544)

Project Link: [https://github.com/ahmed1813544/3d-portfolio](https://github.com/ahmed1813544/3d-portfolio)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) — The React framework for production
- [Three.js](https://threejs.org/) — 3D graphics library for the web
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) — React renderer for Three.js
- [Drei](https://github.com/pmndrs/drei) — Useful helpers for R3F
- [GSAP](https://gsap.com/) — Professional animation library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [21st.dev](https://21st.dev/) — Open-source React component registry
- [shadcn/ui](https://ui.shadcn.com/) — Component foundation pattern
- [Framer Motion](https://www.framer.com/motion/) — React animation library
- [Vercel](https://vercel.com/) — Hosting and deployment platform

---

<p align="center">Built with ❤️ using Next.js, Three.js, GSAP & 21st.dev Components</p>
