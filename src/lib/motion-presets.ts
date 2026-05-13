/** Shared site-wide motion tokens (used with `motion/react`). */

export const siteEase = [0.25, 0.1, 0.25, 1] as const;

/**
 * Durations (seconds). Tuned to match pre-refactor literals site-wide.
 */
export const siteDuration = {
  /** ScrollReveal — typography / blocks easing into view */
  reveal: 0.72,
  /** Section intros that were slightly slower than ScrollReveal */
  sectionReveal: 0.78,
  /** StaggerItem (scroll lists) */
  staggerChild: 0.62,
  /** Accordion / service rows in decommissioning */
  staggerRow: 0.58,
  staggerGap: 0.095,
  staggerDelay: 0.085,
  /** Decommissioning accordion column */
  accordionListDelayChildren: 0.08,
  bulletStaggerGap: 0.06,
  bulletStaggerDelay: 0.04,
  heroMedia: 1.15,
  heroHeadline: 0.88,
  heroAsideServices: 0.88,
  heroAsideIndustries: 1.05,
  heroFloat: 2.6,
  navbar: 0.45,
  hoverLift: 0.28,
  hoverSubtle: 0.3,
  micro: 0.2,
  accordionOpacity: 0.28,
  iconSwap: 0.22,
  bullet: 0.35,
  /** About leadership hover portrait — float down from above (see Cargo-style team lists) */
  leadershipPortraitIn: 0.52,
  leadershipPortraitOut: 0.3,
} as const;

/** Mission carousel slide crossfade */
export const carouselCrossfade = 0.82;

export const defaultViewport = {
  once: true,
  margin: "-48px",
  amount: 0.15,
} as const;

/** Accordion panel height (matches legacy `springContent` in services) */
export const siteSpringContent = {
  type: "spring" as const,
  stiffness: 380,
  damping: 34,
};
