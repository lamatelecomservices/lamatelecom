"use client";

import type { ReactNode } from "react";

import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";

export type SectionBadgeHeadingProps = {
  badgeLabel: string;
  /** Heading content (text or rich nodes). Rendered inside the heading element. */
  heading: ReactNode;
  badgeBackgroundColor?: string;
  badgeClassName?: string;
  headingClassName?: string;
  className?: string;
  scrollRevealClassName?: string;
  headingElement?: "h1" | "h2" | "h3";
  headingId?: string;
};

const defaultHeadingClass = "max-w-[786px] font-display text-h2 lg:text-h1";

/**
 * Shared “brands section” header: cream badge + wide heading in a row on large screens.
 */
export default function SectionBadgeHeading({
  badgeLabel,
  heading,
  badgeBackgroundColor = "var(--color-surface-cream)",
  badgeClassName,
  headingClassName,
  className,
  scrollRevealClassName,
  headingElement: HeadingTag = "h2",
  headingId,
}: SectionBadgeHeadingProps) {
  return (
    <ScrollReveal
      className={`flex flex-col gap-6 px-(--space-container-padding) ${scrollRevealClassName ?? ""}`}
    >
      <div
        className={`flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between ${className ?? ""}`}
      >
        <SectionBadge
          label={badgeLabel}
          backgroundColor={badgeBackgroundColor}
          className={badgeClassName}
        />
        <HeadingTag
          id={headingId}
          className={headingClassName ?? defaultHeadingClass}
        >
          {heading}
        </HeadingTag>
      </div>
    </ScrollReveal>
  );
}
