"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { ScrollReveal } from "@/components/motion";
import { siteDuration, siteEase } from "@/lib/motion-presets";

import CareersSplitButtonDark from "./careers-split-button-dark";

export default function CareersHero() {
  const reduce = useReducedMotion();
  const floatAnimation = reduce ? undefined : { y: [-10, 10] };
  const floatTransition = {
    duration: siteDuration.heroFloat * 0.72,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
    repeatType: "mirror" as const,
  };

  return (
    <section className="layout-container relative overflow-x-clip bg-(--color-bg) pb-14 pt-6 md:pt-8 xl:overflow-x-visible xl:pb-(--space-section-padding) xl:pt-(--space-section-padding)">
      {/* Mobile / tablet: image on top, text below (matches industries / services heroes) */}
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
              src="/careers/career-landing.png"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              priority
            />
          </motion.div>
        </motion.div>

        <ScrollReveal className="flex flex-col gap-6">
          <h1 className="font-display text-h1 lg:text-h0">
            Build the <span className="text-(--color-muted)">future</span> by
            mastering the past
          </h1>
          <p className="font-body text-b1">
            We don&apos;t just clear out the old; we make room for what&apos;s
            next. Join a team that treats every retirement as a new opportunity
            for a sustainable future.
          </p>
          <div className="pt-2">
            <CareersSplitButtonDark
              href="#openings"
              label="VIEW CURRENT OPENINGS"
              aria-label="View current openings"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Desktop: centered copy + centered visual lane */}
      <div className="relative isolate hidden xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-12">
        <ScrollReveal className="relative z-10 flex w-full flex-col gap-8 xl:w-1/2">
          <h1 className="font-display text-h0">
            Build the <span className="text-(--color-muted)">future</span> by
            mastering the past
          </h1>
          <p className="max-w-[540px] font-body text-b1">
            We don&apos;t just clear out the old; we make room for what&apos;s
            next. Join a team that treats every retirement as a new opportunity
            for a sustainable future.
          </p>
          <div className="pt-4">
            <CareersSplitButtonDark
              href="#openings"
              label="VIEW CURRENT OPENINGS"
              aria-label="View current openings"
            />
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
                src="/careers/career-landing.png"
                alt=""
                fill
                className="object-contain object-right"
                sizes="50vw"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
