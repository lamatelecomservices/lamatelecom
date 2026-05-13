---
name: init
description: >-
  Sets up and verifies the Lama Next.js app (install, Biome, build). Also
  defines implementation rules: design tokens from globals.css, typography
  and layout utilities, shared motion presets. Use for /init, environment
  checks, or whenever adding UI, styles, or motion in this repository.
---

# Project init (`/init`) — Lama

Run from the **repository root** (`lama/`).

## Stack (this repo)

- **Next.js** 16 (App Router under `src/app/`)
- **React** 19 + **TypeScript** (strict)
- **Tailwind CSS** v4 via `@tailwindcss/postcss`
- **Motion** (`motion/react`) for animation
- **Biome** 2.2 — single tool for format + lint (`biome.json`, Next/React domains enabled)
- **Path alias:** `@/*` → `src/*`
- **Fonts:** `src/utils/fonts.ts` — wired in `layout.tsx` as CSS variables (`--font-funnel-display`, etc.)

## Install

- Lockfiles present: **`package-lock.json`** and **`bun.lock`** (no `packageManager` field in `package.json`).
- Default: **`npm ci`** if `node_modules` is missing or the user wants a clean install; **`npm install`** for additive updates.
- If the user prefers Bun, use **`bun install`** and align with their workflow.

## Scripts (from `package.json`)

| Script   | Command                | Use                                          |
| -------- | ---------------------- | -------------------------------------------- |
| `dev`    | `next dev`             | Local development                            |
| `build`  | `next build`           | Production build (includes TypeScript check) |
| `start`  | `next start`           | Run production server                        |
| `lint`   | `biome check`          | Lint + format diagnostics                    |
| `format` | `biome format --write` | Apply formatting                             |

Baseline verification for init:

1. `npm run lint` (or `npx biome check .`)
2. `npm run build`

Optional: `npx biome check --write` only when fixing safe issues is in scope.

## Init workflow

1. Confirm cwd is repo root; read `package.json` if versions or scripts changed.
2. Install dependencies if needed (`npm ci` / `npm install` / `bun install`).
3. Run **`npm run lint`**, then **`npm run build`**.
4. Summarize: pass/fail, any Biome or Next errors (quote relevant lines), and suggest `npm run dev` to work locally.

## Implementation conventions (always)

Single source of truth: **`src/styles/globals.css`** (`@theme inline { ... }`). Do **not** introduce ad hoc palette or spacing that bypasses tokens.

### Colors and surfaces

- Reference CSS variables with Tailwind’s CSS-first syntax, e.g. `text-(--color-fg)`, `bg-(--color-bg)`, `border-(--color-border)`, `text-(--color-muted)`, `text-(--color-text-body)`, surfaces like `bg-(--color-surface-cream)`, footer tokens `bg-(--color-footer-bg)`, etc.
- Prefer **adding a new token** under `@theme inline` in `globals.css` if a color is reused or part of the brand — avoid scattered hex/rgb in JSX except rare one-offs (e.g. a single art-directed gradient already in design).

### Typography

- **Display / headings:** `font-display` with scale classes `text-h0` … `text-h3` (and line weights defined in theme).
- **Body:** `font-body` with `text-b1`, `text-b2`, `text-b3` as appropriate.
- **Mono / labels:** `font-mono` with `text-o1` (uppercase section labels, buttons copy style per existing components).

**Do not stack redundant `leading-*`, font-size, or font-weight utilities** on those `text-*` classes — size, line-height, and weight already come from `@theme inline` in `globals.css`. See **`.cursor/skills/skills.md`** (typography tokens skill).

Match heading hierarchy and sizes to neighboring sections; copy **`section-badge.tsx`**, **`button.tsx`**, and existing heroes for patterns.

### Spacing and layout

- Section vertical rhythm: `py-(--space-section-padding)` (and related tokens `gap-(--space-gap-sm|md|lg)`).
- Page width: **`layout-container`** (padded column) or **`layout-container-edge`** (max-width only); use tokens `(--space-container-padding)`, `(--space-container-max-width)`.
- Buttons / chrome: padding `px-(--space-btn-x)` patterns from **`button`** / footer CTAs.

### Border radius

Radius scales are defined in `@theme inline` as `--radius-sm`, `--radius-md`, `--radius-lg` in **`globals.css`**. Tailwind wires those to utilities — **always prefer `rounded-sm`, `rounded-md`, and `rounded-lg`** in components.

- **Do not** wrap those CSS variables in arbitrary radius utilities in JSX (parentheses-only forms like `rounded-(--radius-sm)` are invalid).
- Only reach for arbitrary radius values when there is no matching step on the scale.

### Motion

- Reuse **`src/lib/motion-presets.ts`**: `siteEase`, `siteDuration`, `defaultViewport`, and `siteSpringContent` (accordions) for scroll, hero, and micro-interactions — avoid one-off duration/easing values when a preset fits.
- Prefer **`ScrollReveal`**, **`StaggerContainer`**, **`StaggerItem`** from `src/components/motion/` instead of one-off viewport logic unless the design requires it.

### Components

- Reuse **`SectionBadge`**, **`Button`**, **`section-image-text-split`**, **`navbar`**, **`footer`** patterns; keep typography and spacing consistent with nearby sections.

### Constraints (implementation)

- Do not change application code during **init-only** runs unless fixing a failure the user requested.
- Respect Biome ignores (`.gitignore`, `biome.json` excludes `node_modules`, `.next`, etc.).
- `ignoreScripts` / `trustedDependencies` in `package.json` relate to installs; if install fails on optional native deps, surface the log and minimal next step.

## Not in scripts

- No separate `typecheck` script; **`next build`** covers TS.
- Optional **react-doctor** after React/UI work is a manual `npx` step, not part of init unless requested.
