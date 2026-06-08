# Lama Telecom — Project Handover Documentation

## 1. Project Overview

**Lama Telecom** is a corporate marketing website for a telecom infrastructure services company. It showcases the company's services (network decommissioning, IT asset recovery, recycling, enterprise solutions), company information, career opportunities, and provides contact/application form submission capabilities.

- **Domain/URL:** (configure via Vercel deployment)
- **Backend API:** Hosted on Heroku (`lama-logistics-88b311025848.herokuapp.com`) — handles form submissions and job applications
- **Type:** Static marketing site (JAMstack architecture)

---

## 2. Tech Stack

| Category           | Technology                                                      |
| ------------------ | --------------------------------------------------------------- |
| Language           | TypeScript (strict mode)                                        |
| Framework          | Next.js 16.1.7 (App Router)                                     |
| UI Library         | React 19.2.3                                                    |
| Styling            | Tailwind CSS v4 + PostCSS                                       |
| Animation          | Motion (formerly Framer Motion) v12.38.0                        |
| Icons              | Lucide React v0.577.0, custom SVGs                              |
| Lottie             | @lottiefiles/dotlottie-react v0.18.10                           |
| Image Optimization | sharp v0.34.5, next/image                                       |
| Fonts              | Google Fonts (Funnel Display, Martian Mono) + local Matter font |
| Linter/Formatter   | Biome v2.2.0                                                    |
| Package Manager    | npm (bun lockfile also present)                                 |

---

## 3. Getting Started

### Prerequisites

- Node.js 20+
- npm or bun

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Build

```bash
# Production build
npm run build

# Start production server
npm run start
```

### Code Quality

```bash
# Lint
npm run lint

# Format code
npm run format
```

### Image Compression

```bash
# Dry-run (report potential savings)
npm run images:compress

# Actually compress images in public/
npm run images:compress:write
```

---

## 4. Project Structure

```
lama/
├── public/                     # Static assets
│   ├── about/                  # About page images
│   ├── brands/                 # Partner logo images
│   ├── careers/                # Careers page images
│   ├── contact/                # Contact page images
│   ├── footer/                 # Footer images
│   ├── home/                   # Home page images
│   ├── industries/             # Industries page images
│   ├── infra/                  # Infrastructure images
│   ├── lottie/                 # Lottie animation files
│   ├── navbar/                 # Navigation images
│   ├── section/                # Section images
│   ├── services/               # Services page images
│   ├── strategic_sectors/      # Strategic sectors images
│   └── videos/                 # Background videos
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (Navbar + Footer wrapper)
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page + Apply sub-page
│   │   ├── careers/            # Careers listing + dynamic job detail pages
│   │   ├── contact/            # Contact page
│   │   ├── industries/         # Industries page
│   │   ├── privacy/            # Privacy Policy page
│   │   ├── services/           # Services page
│   │   └── terms/              # Terms of Service page
│   ├── assets/fonts/           # Local font files (Matter family)
│   ├── components/             # React components
│   │   ├── about/              # About page section components
│   │   ├── apply/              # Application form component
│   │   ├── careers/            # Careers page section components
│   │   ├── contact/            # Contact page components (form, etc.)
│   │   ├── home/               # Home page section components
│   │   ├── industries/         # Industries page section components
│   │   ├── motion/             # Animation wrapper components
│   │   ├── services/           # Services page section components
│   │   └── (shared)            # Reusable: button, footer, navbar, etc.
│   ├── data/                   # Static content/constant definitions
│   ├── lib/                    # Utility libraries (motion presets, routes, social links)
│   ├── styles/globals.css      # Global styles + Tailwind v4 theme configuration
│   └── utils/fonts.ts          # Font loading configuration
├── docs/                       # Project documentation
│   ├── component-naming.md     # React component naming conventions
│   ├── design-tokens.md        # Design system tokens reference
│   └── client-handover.md      # THIS DOCUMENT
├── scripts/compress-images.mjs # Image compression utility
├── next.config.ts              # Next.js configuration
├── biome.json                  # Biome linter/formatter config
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 5. Pages & Routes

| Route              | Page                | Key Components                                                                                                        |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `/`                | Home                | Hero, AboutSection, Stats, ServicesSection, LoopInfra, BrandsSection, StrategicSectors                                |
| `/about`           | About               | AboutHero, AboutMissionStats, AboutMissionCarousel, AboutLeadership, AboutJoinTeamCta, AboutOperationalWorkflow       |
| `/about/apply`     | General Application | ApplyForm                                                                                                             |
| `/services`        | Services            | ServicesHero, ServicesDecomissiong, ServicesNetworkExpertise, ServicesResponsibleRecycling, ServicesEnterpriseNetwork |
| `/industries`      | Industries          | IndustriesHero, IndustriesSections (4 industries), ExploreServicesCta                                                 |
| `/careers`         | Careers             | CareersHero, CareersLtsWay, CareersLifeField, CareersOpenings                                                         |
| `/careers/[jobId]` | Job Detail          | CareersJobDetailView                                                                                                  |
| `/contact`         | Contact             | ContactForm                                                                                                           |
| `/privacy`         | Privacy Policy      | Static content from data file                                                                                         |
| `/terms`           | Terms of Service    | Static content from data file                                                                                         |

---

## 6. Component Library

### Shared Primitives

| Component               | File                                      | Purpose                                                    |
| ----------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| `Button`                | `components/button.tsx`                   | 3 variants (primary/secondary/accent), optional arrow icon |
| `Navbar`                | `components/navbar.tsx`                   | Fixed top nav with mobile hamburger (Lottie animation)     |
| `Footer`                | `components/footer.tsx`                   | Dark footer with contact form, nav columns, social links   |
| `SectionBadge`          | `components/section-badge.tsx`            | Pill/badge label with gradient icon dot                    |
| `SectionBadgeHeading`   | `components/section-badge-heading.tsx`    | Badge + heading combo                                      |
| `SectionImageTextSplit` | `components/section-image-text-split.tsx` | Reusable image+text layout (3 variants)                    |
| `StatCard`              | `components/stat-card.tsx`                | Value + description stat display                           |
| `VideoBackground`       | `components/video-background.tsx`         | Video with image fallback                                  |

### Motion Wrappers

| Component          | File                                  | Purpose                          |
| ------------------ | ------------------------------------- | -------------------------------- |
| `ScrollReveal`     | `components/motion/scroll-reveal.tsx` | Fade-in on scroll                |
| `StaggerContainer` | `components/motion/stagger.tsx`       | Container for staggered children |
| `StaggerItem`      | `components/motion/stagger.tsx`       | Individual staggered item        |

---

## 7. Design System

**Source of truth:** `src/styles/globals.css` (`@theme inline` directive)

### Layout Classes

| Class                    | Usage                                     |
| ------------------------ | ----------------------------------------- |
| `layout-container`       | Default page column (max-width + padding) |
| `layout-container-edge`  | Same max-width, no horizontal padding     |
| `layout-full-bleed`      | Edge-to-edge panels                       |
| `layout-media-container` | Media section container                   |

### Typography

| Class                       | Usage           |
| --------------------------- | --------------- |
| `text-h0` through `text-h3` | Heading scale   |
| `text-b1` through `text-b3` | Body text scale |
| `text-o1`                   | Overline        |
| `text-caption`              | Caption text    |

For complete token reference, see `docs/design-tokens.md`.

---

## 8. API Integration

The project has **no local API routes**. It integrates with an external Heroku backend:

### Form Submissions

| Form                | Endpoint                                                                   | Method | Payload                                    |
| ------------------- | -------------------------------------------------------------------------- | ------ | ------------------------------------------ |
| Footer contact form | `/api/staff/api/sendInquiry` (proxied via Next.js rewrite)                 | POST   | `{ name, company, email, phone, message }` |
| Contact page form   | `https://lama-logistics-88b311025848.herokuapp.com/staff/api/sendInquiry`  | POST   | `{ name, company, email, tellUsMore }`     |
| Career applications | External link to `https://lama-logistics-88b311025848.herokuapp.com/apply` | —      | Redirects to external apply page           |

### Next.js Rewrite (in `next.config.ts`)

```
/api/staff/:path*  →  https://lama-logistics-88b311025848.herokuapp.com/staff/:path*
```

This proxies `/api/staff/*` requests to the Heroku backend, avoiding CORS issues for the footer form.

> **Note:** The backend Heroku application is NOT part of this repository. It is maintained separately.

---

## 9. Content Management

All website content is defined as **static TypeScript constants** in `src/data/`:

| File                                 | Content                                       |
| ------------------------------------ | --------------------------------------------- |
| `about-leadership-data.ts`           | Leadership team members (8 members with bios) |
| `about-mission-carousel-data.ts`     | Mission/Vision/Approach carousel slides       |
| `about-operational-workflow-data.ts` | Operational workflow steps                    |
| `careers-data.ts`                    | Job listings (3 positions)                    |
| `careers-job-details.ts`             | Detailed job descriptions                     |
| `industries-sections.ts`             | 4 industry section configurations             |
| `privacy-policy.ts`                  | Full privacy policy text                      |
| `terms-of-service.ts`                | Full terms of service text                    |

To update website content, edit the relevant data file — **no CMS or database** is involved.

---

## 10. Animation System

### Libraries

- **Motion** (v12, formerly Framer Motion) for all scroll and UI animations
- **@lottiefiles/dotlottie-react** for Lottie animations (navbar hamburger)

### Animation Patterns

| Pattern                | Implementation                                       |
| ---------------------- | ---------------------------------------------------- |
| Scroll fade-in         | `ScrollReveal` wrapper with `useInView`              |
| Staggered lists        | `StaggerContainer` + `StaggerItem`                   |
| Scroll-driven carousel | `useScroll` + `useTransform` + `useMotionValueEvent` |
| Scroll timeline        | `useScroll` + `useTransform` with weighted segments  |
| Accordion panels       | `AnimatePresence` with spring physics                |

**Shared presets** are centralized in `src/lib/motion-presets.ts` — never use magic animation values.

---

## 11. Deployment

### Platform

The site is designed for **Vercel deployment** (standard Next.js deployment).

### Steps

1. Push repository to Git provider (GitHub, GitLab, etc.)
2. Import project in Vercel
3. Vercel auto-detects Next.js configuration
4. Deploy — Vercel handles build (`npm run build`) and hosting

### Environment Variables

No environment variables are currently required. The Heroku backend URL is hardcoded in the Next.js config and contact form component.

---

## 12. Image Strategy

- Uses `next/image` with `fill` + `object-cover` for responsive images
- Image compression via `scripts/compress-images.mjs` using `sharp`
- Favicon switches based on `prefers-color-scheme` (dark/light)
- Static assets live in `public/` organized by page/section

---

## 13. Maintenance Notes

### Adding a New Page

1. Create route directory in `src/app/` (e.g., `src/app/new-page/page.tsx`)
2. Create section components in `src/components/new-page/`
3. Add route constant in `src/lib/site-routes.ts`
4. Update Navbar if adding to navigation

### Adding a New Home Section

1. Create `src/components/home/{feature}-section.tsx`
2. Default-export `{Feature}Section` component
3. Import and render in `src/app/page.tsx`

### Code Conventions

- **Files:** kebab-case
- **Components:** PascalCase, default export matches filename
- **Props types:** PascalCase + `Props` suffix
- **Section components:** `{feature}-section.tsx` → `{Feature}Section`

See `docs/component-naming.md` for full conventions.
