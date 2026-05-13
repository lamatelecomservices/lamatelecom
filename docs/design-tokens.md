# Design tokens (quick reference)

Source of truth: `src/styles/globals.css` (`@theme inline` and `@layer components`).

## Layout classes

| Class | Use when |
|--------|----------|
| `layout-container` | Default page column: `max-width` + horizontal padding from `--space-container-padding`. |
| `layout-container-edge` | Same `max-width`, **no** horizontal padding — e.g. edge-to-edge panels inside the column; add `px-(--space-container-padding)` on inner content if needed. |

Example:

```html
<div class="layout-container">…navbar, services copy…</div>

<div class="layout-container-edge relative h-[520px] …">
  <!-- full-width strip inside max width; pad children yourself -->
</div>
```

## Spacing CSS variables

| Variable | Value | Tailwind (arbitrary) |
|----------|--------|----------------------|
| `--space-container-padding` | 20px | `px-(--space-container-padding)` |
| `--space-container-max-width` | 1440px | `max-w-(--space-container-max-width)` |
| `--space-section-padding` | 80px | `py-(--space-section-padding)` |
| `--space-navbar-height` | 104px | `h-(--space-navbar-height)` |
| `--space-hero-height` | 646px | `h-(--space-hero-height)` |
| `--space-gap-sm` | 16px | `gap-(--space-gap-sm)` |
| `--space-gap-md` | 24px | `gap-(--space-gap-md)` |
| `--space-gap-lg` | 32px | `gap-(--space-gap-lg)` |
| `--space-btn-x` / `--space-btn-y` | 32px / 16px | Buttons (see `button.tsx`) |

## Typography

Use the generated utilities: `text-h0`, `text-h1`, `text-h2`, `text-h3`, `text-b1`, `text-b2`, `text-b3`, `text-caption`. Sizes and line heights live in `globals.css`.

## Colors

Core tokens live in `src/styles/globals.css` under `@theme inline`. Use Tailwind with the `(--token)` form, e.g. `text-(--color-fg)`, `bg-(--color-bg)`, `border-(--color-border)`.

### Core

| Token | Role |
|--------|------|
| `--color-fg` | Primary text |
| `--color-muted` | Secondary / muted text |
| `--color-bg` | Page background |
| `--color-border` | Default borders |
| `--color-primary` / `--color-primary-hover` / `--color-on-primary` | Buttons & accents |

### Warm surfaces (home)

| Token | Role |
|--------|------|
| `--color-surface-cream` | Cream panels (stats, loop headline on dark, footer inputs, badges) |
| `--color-surface-cream-alt` | Slightly warmer cream (strategic sectors grid + badge) |
| `--color-surface-blush` | Service cards + “OUR SERVICES” badge |
| `--color-surface-warm-muted` | Default `SectionBadge` background |
| `--color-surface-sector-hover` | Strategic sector cell hover |

### Neutrals & links

| Token | Role |
|--------|------|
| `--color-border-dashed` | Custom dashed dividers (strategic sectors) |
| `--color-neutral-icon` | Icon / chrome gray (`#d9d9d9`) |
| `--color-neutral-icon-hover` | Hover for neutral icon buttons |
| `--color-text-secondary` | Dense stat labels (`#444`) |
| `--color-link-muted` | “Read more” style links |

### Brand logo tiles (home)

`--color-brand-tile-1` … `--color-brand-tile-5` — backgrounds for the partner logo strip in `brands-section.tsx`.

### Other

| Token | Role |
|--------|------|
| `--gradient-badge-icon` | Gradient on the small square in `SectionBadge` (also exposed via `.bg-badge-icon-gradient`) |
| `--color-footer-*` | Footer dark theme (existing) |

Inline `style={{ backgroundColor }}` on `SectionBadge` should use `var(--color-…)` when pointing at these tokens.
