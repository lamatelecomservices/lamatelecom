"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ScrollReveal } from "@/components/motion";
import { ApplyNowLink } from "@/components/careers/careers-job-detail-view";

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
          <ApplyNowLink color="white" />
        </div>
      </ScrollReveal>
    </section>
  );
}
