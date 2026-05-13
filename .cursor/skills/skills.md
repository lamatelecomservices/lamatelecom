---
name: lama-typography-tokens
description: >-
  Use Lama typography scale classes only (text-h0…text-caption) with
  font-display / font-body / font-mono. Do not stack redundant leading,
  font-size, or font-weight utilities—those live in design tokens in
  globals.css.
---

# Lama typography (design tokens)

The type scale is defined once in `src/styles/globals.css` under `@theme inline` (`--text-h0`, `--text-h1`, … including `--line-height` and `--font-weight` for each step).

## Rule

When applying typography:

1. Choose the **semantic step** and use its **Tailwind class name only**: `text-h0`, `text-h1`, `text-h2`, `text-h3`, `text-b1`, `text-b2`, `text-b3`, `text-o1`, `text-caption`.
2. Pair with the right **family**: `font-display` (headings), `font-body` (paragraphs), `font-mono` (labels / UI chrome).
3. **Do not** add extra utilities that duplicate what the token already defines: **`leading-*`**, **`text-[length]`** / arbitrary sizes, **`font-light` / `font-bold`** / `font-*` weight, or **`tracking-*`** unless there is a documented one-off exception.

## Examples

- Prefer: `className="font-display text-h1"`
- Avoid: `className="font-display text-h1 leading-tight font-light"` (line-height and weight are already part of `text-h1` in the theme)

- Prefer: `className="font-body text-b2"`
- Avoid: `className="font-body text-b2 leading-relaxed text-base"` (redundant with `text-b2`)

## Color

Ink color is **not** part of the `text-h*` / `text-b*` utilities. Use design tokens when you need a specific color, e.g. `text-(--color-fg)`, `text-(--color-muted)`, `text-(--color-text-body)`, `text-white` on dark sections—not random palette grays.

## Source of truth

`src/styles/globals.css` — `@theme inline` typography block. If the design needs a new size or rhythm, **extend the theme there**, then use the new `text-*` class everywhere.
