"use client";
import Image from "next/image";

import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";

import CareersSplitButtonDark from "./careers-split-button-dark";

const LEADERSHIP_IMAGE_SRC = "/careers/leadership/1.jpg" as const;

export default function CareersLeadership() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
        <ScrollReveal className="flex flex-col gap-6">
          <SectionBadge
            label="WORK WITH US"
            backgroundColor="var(--color-surface-cream)"
          />
          <h2 className="font-display text-h1 font-light xl:text-h0">
            Meet the Leadership
          </h2>
          <p className="max-w-xl font-body text-b1 text-(--color-text-body)">
            Our leaders bring deep experience in telecom logistics, secure asset
            recovery, and customer delivery—setting the tone for how we show up
            on every project.
          </p>
          <div className="pt-2">
            <CareersSplitButtonDark
              href="/about"
              label="ABOUT US"
              aria-label="About us"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal className="relative mx-auto w-full max-w-[min(100%,640px)] overflow-hidden rounded-md md:mx-0 md:max-w-none">
          <div className="relative aspect-4/3 w-full md:aspect-16/10">
            <Image
              src={LEADERSHIP_IMAGE_SRC}
              alt="Lama Telecom leadership"
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
