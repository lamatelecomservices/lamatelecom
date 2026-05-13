"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion";

const APPLY_HREF = "/about/apply";

export default function AboutJoinTeamCta() {
  return (
    <section
      className="bg-about-join-team-cta text-(--color-surface-cream)"
      aria-labelledby="about-join-team-heading"
    >
      <ScrollReveal className="layout-about-join-cta-inner">
        <div className="flex min-w-0 flex-col gap-[14px]">
          <h2 id="about-join-team-heading" className="font-display text-h1">
            Would you like to join the team?
          </h2>
          <p className="font-body text-b1">{`Write to us >>`}</p>
        </div>

        <div className="flex shrink-0 justify-start pt-2 lg:justify-end lg:pt-0">
          <Link
            href={APPLY_HREF}
            aria-label="Apply now — open the application form"
            className="group inline-flex h-[48px] w-[177px] items-center gap-1 font-mono text-o1 leading-none tracking-wide text-(--color-about-joincta-label-fg) transition-all duration-400 md:h-[54px] md:w-auto md:gap-2 md:text-b2"
          >
            <span className="flex h-[48px] min-h-[48px] flex-1 items-center justify-center whitespace-nowrap rounded-sm bg-(--color-about-joincta-surface) px-2 transition-colors group-hover:opacity-90 md:h-[54px] md:min-h-[54px] md:w-[141px] md:flex-none md:shrink-0 md:px-0">
              APPLY NOW
            </span>
            <span className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-sm bg-(--color-about-joincta-surface) transition-all duration-400 group-hover:translate-x-1 group-hover:opacity-90 md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px]">
              <ArrowRight
                className="size-5 shrink-0 text-(--color-about-joincta-label-fg)"
                strokeWidth={1.5}
                aria-hidden />
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
