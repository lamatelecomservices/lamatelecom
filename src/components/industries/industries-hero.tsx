"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { siteDuration, siteEase } from "@/lib/motion-presets";

const description =
  "From hyper-scale data centers to national telecom networks, we deliver the precision, security, and sustainability required to manage your most critical technology environments.";

export default function IndustriesHero() {
  const reduce = useReducedMotion();
  const floatAnimation = reduce ? undefined : { y: [-10, 10] };
  const floatTransition = {
    duration: siteDuration.heroFloat * 0.72,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
    repeatType: "mirror" as const,
  };

  return (
    <section className="layout-container relative overflow-x-clip bg-(--color-bg) pb-10 pt-6 md:pb-12 md:pt-8 xl:overflow-x-visible xl:pb-(--space-section-padding) xl:pt-(--space-section-padding)">
      {/* Mobile / tablet: image on top, text below (matches services & about heroes) */}
      <div className="flex flex-col gap-8 xl:hidden">
        <motion.div
          className="pointer-events-none relative mx-auto aspect-4/3 w-full max-w-[min(100%,480px)] sm:max-w-[min(100%,520px)] md:max-w-[min(100%,580px)]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: siteDuration.heroAsideIndustries,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={floatAnimation}
            transition={floatTransition}
          >
            <Image
              src="/industries/home.svg"
              alt=""
              fill
              className="object-contain object-center"
              sizes="100vw"
              priority />
          </motion.div>
        </motion.div>

        <ScrollReveal className="flex flex-col gap-6">
          <SectionBadge
            label="INDUSTRIES WE SERVE"
            backgroundColor="var(--color-surface-cream)"
            className="w-fit" />
          <h1 className="font-display text-h1 leading-[1.05] tracking-tight">
            <span className="block text-(--color-fg)">
              Tailored Solutions for
            </span>
            <span className="block text-(--color-muted)">
              Global Industry Leaders
            </span>
          </h1>
          <p className="text-b1 text-(--color-text-body)">{description}</p>
          <div className="pt-2">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Desktop: centered copy + centered visual lane ── */}
      <div className="relative isolate hidden xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-12">
        <ScrollReveal className="relative z-10 flex w-full flex-col gap-8 xl:w-1/2">
          <SectionBadge
            label="INDUSTRIES WE SERVE"
            backgroundColor="var(--color-surface-cream)"
            className="w-fit" />
          <h1 className="font-display text-h0 leading-[1.05] tracking-tight">
            <span className="block text-(--color-fg)">
              Tailored Solutions for
            </span>
            <span className="block text-(--color-muted)">
              Global Industry Leaders
            </span>
          </h1>
          <p className="max-w-[540px] text-b1 text-(--color-text-body)">
            {description}
          </p>
          <div className="pt-4">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>

        <motion.div
          className="pointer-events-none relative z-20 flex flex-1 items-center justify-end"
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: siteDuration.heroAsideIndustries,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          <div className="relative h-[480px] w-[480px] shrink-0">
            <motion.div
              className="relative h-full w-full"
              animate={floatAnimation}
              transition={floatTransition}
            >
              <Image
                src="/industries/home.svg"
                alt=""
                fill
                className="object-contain object-center"
                sizes="50vw"
                priority />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
