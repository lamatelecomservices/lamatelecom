"use client";

import Link from "next/link";

import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { CAREERS_JOBS } from "@/data/careers-data";

import CareersSplitButtonDark from "./careers-split-button-dark";

export default function CareersOpenings() {
  return (
    <section
      id="openings"
      className="scroll-mt-28 bg-(--color-careers-panel-bg) py-(--space-section-padding)"
    >
      <div className="layout-container flex flex-col gap-12 lg:gap-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-x-10 lg:gap-x-12 xl:gap-x-16">
            <div className="flex min-w-0 flex-col gap-(--space-gap-md)">
              <SectionBadge
                label="WORK WITH US"
                backgroundColor="var(--color-surface-cream)"
              />
              <h2 className="font-display text-h1 xl:text-h0">
                Current Openings
              </h2>
            </div>
            <div className="min-w-0 md:max-w-[min(100%,574px)] md:justify-self-end">
              <p className="font-body text-b1">
                We’re looking for disciplined professionals to join our US-based
                field teams. If you’re ready to travel, handle high-stakes
                infrastructure, and take pride in a job done right, find your
                fit below.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ul className="flex flex-col">
          {CAREERS_JOBS.map((job) => (
            <li
              key={job.id}
              className="flex flex-col gap-6 border-b border-(--color-border) py-10 last:border-b-0 xl:flex-row xl:items-center xl:gap-8 xl:py-12"
            >
              <Link
                href={`/careers/${job.id}`}
                className="min-w-0 text-left transition-opacity hover:opacity-80 xl:flex-1"
              >
                <p className="font-display text-h2 font-light xl:text-h1 ">
                  {job.title}
                </p>
                <div className="mt-1">
                  <p className="font-body text-b1">{job.subtitle}</p>
                </div>
              </Link>
              <div>
                <p className="font-body text-b1 text-(--color-muted)">
                  Decom/operations
                </p>
              </div>
              <div className="flex xl:flex-1 xl:justify-end">
                <CareersSplitButtonDark
                  href={`/careers/${job.id}`}
                  label="APPLY NOW"
                  ariaLabel={`View ${job.title} role details`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
