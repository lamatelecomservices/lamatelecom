# Component naming (Lama)

Conventions for React components in this repo. **File names, default export names, and import aliases should line up** so a file is easy to find from the tree or from a JSX tag.

## Files

- Use **kebab-case** for filenames: `about-section.tsx`, `services-section-card.tsx`, `section-badge.tsx`.
- **Page-level sections** (full-width blocks on the home page): name the file `{feature}-section.tsx` when the component is a named section (e.g. `brands-section.tsx` → `BrandsSection`).
- **Section-specific UI** that only belongs to one section: `{section}-section-{role}.tsx` (e.g. `services-section-card.tsx` for a card used only inside the services section).
- **Shared primitives** (used in multiple places): short, role-based names at the component root: `button.tsx`, `section-badge.tsx`, `stat-card.tsx`, `navbar.tsx`.

## Exports

- **Default export** for the primary component in a file; the component name should match the file:

  | File                     | Default export        |
  | ------------------------ | --------------------- |
  | `about-section.tsx`      | `AboutSection`        |
  | `services-section.tsx`   | `ServicesSection`     |
  | `brands-section.tsx`     | `BrandsSection`       |
  | `strategic-sectors.tsx`  | `StrategicSectors`    |

- **Named exports** for secondary pieces (helpers, subcomponents, props types): **PascalCase** for components, **PascalCase + `Props` suffix** for prop types, e.g. `ServicesSectionCard`, `ServicesSectionCardProps`.

## Imports in `page.tsx` (and similar)

- Import the **same identifier** you render: `import AboutSection from "@/components/home/about-section"` and `<AboutSection />`, not a different alias like `WhoWeAre` for `AboutSection`.

## When adding a new home section

1. Add `src/components/home/{feature}-section.tsx`.
2. `export default function {Feature}Section`.
3. Import in `src/app/page.tsx` with matching name and path.

## Optional follow-ups (legacy names)

Some files predate this doc; renaming is optional unless you are already touching the file:

- `stats.tsx` / `Stats` could become `stats-section.tsx` / `StatsSection` for consistency with `*-section.tsx`.
- `strategic-sectors.tsx` could become `strategic-sectors-section.tsx` / `StrategicSectorsSection` if you want every section file to end in `-section`.
