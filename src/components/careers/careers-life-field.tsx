"use client";
import Image from "next/image";
import { Fragment } from "react";

import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { CAREERS_FIELD_ROWS } from "@/data/careers-data";

/** Matches `public/careers/life in field/content.png`: 296×200, radius 10px (`rounded-md`). */
const LIFE_FIELD_IMG_W = 296;
const LIFE_FIELD_IMG_H = 200;

export default function CareersLifeField() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container">
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Top: title column lines up with image column; intro lines up with role copy column */}
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-x-10 lg:gap-x-12 xl:gap-x-16">
              <div className="flex w-full max-w-[494px] flex-col gap-(--space-gap-md)">
                <SectionBadge
                  label="Our structure"
                  backgroundColor="var(--color-surface-cream)" />
                <h2 className="font-display text-h1 font-light xl:text-h0">
                  Life in the Field
                </h2>
              </div>
              <div className="min-w-0 md:max-w-[min(100%,670px)]">
                <p className="font-body text-b1">
                  To keep our decommissioning safe and secure across the US,
                  we’ve organized our field operations into three specialized
                  roles. When you join us, you aren’t just moving
                  equipment—you’re part of a disciplined system built for total
                  transparency.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-10 md:hidden">
              {CAREERS_FIELD_ROWS.map((row, i) => (
                <div key={row.id}>
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-3/2 w-full overflow-hidden rounded-md">
                      <Image
                        src={row.imageSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100vw" />
                    </div>
                    <p className="font-display text-b1 text-(--color-muted)">
                      {row.titleMuted}
                    </p>
                    <p className="font-body text-b2">{row.titleLead}</p>
                  </div>
                  {i < CAREERS_FIELD_ROWS.length - 1 && (
                    <div className="mt-10 h-px bg-[#D9D9D9]" />
                  )}
                </div>
              ))}
            </div>

            {/* Tablet+: 2-col rows with fixed-size images */}
            <div className="hidden items-center gap-y-12 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:gap-x-12 xl:gap-x-16">
              {CAREERS_FIELD_ROWS.map((row) => (
                <Fragment key={row.id}>
                  <div className="relative h-[200px] w-full max-w-[296px] shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={row.imageSrc}
                      alt=""
                      width={LIFE_FIELD_IMG_W}
                      height={LIFE_FIELD_IMG_H}
                      className="h-full w-full object-cover"
                      sizes="296px" />
                  </div>
                  <div className="flex min-w-0 flex-col gap-4 md:max-w-[min(100%,670px)]">
                    <div className="text-(--color-muted)">
                      <p className="font-display text-h2">{row.titleMuted}</p>
                    </div>
                    <div className="text-(--color-fg)">
                      <p className="font-body text-b1">{row.titleLead}</p>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
