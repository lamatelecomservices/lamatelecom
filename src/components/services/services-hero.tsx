"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { siteDuration, siteEase } from "@/lib/motion-presets";

export default function ServicesHero() {
  const reduce = useReducedMotion();
  const floatAnimation = reduce ? undefined : { y: [-10, 10] };
  const floatTransition = {
    duration: siteDuration.heroFloat * 0.72,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
    repeatType: "mirror" as const,
  };

  return (
    <section className="layout-container relative overflow-x-clip bg-(--color-bg) py-(--space-section-padding) xl:overflow-x-visible">
      {/* Mobile / tablet layout: image on top, text below */}
      <div className="flex flex-col gap-8 xl:hidden">
        <motion.div
          className="relative mx-auto h-[min(260px,52vw)] w-full max-w-[min(100%,560px)] sm:h-[min(280px,48vw)] sm:max-w-[min(100%,620px)] md:h-[300px] md:max-w-none lg:h-[320px]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: siteDuration.heroAsideServices,
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
              src="/services/services-hero.png"
              alt="Operations professional working"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
        </motion.div>

        <ScrollReveal className="z-10 flex flex-col gap-6">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="var(--color-surface-blush)"
            className="w-fit"
          />
          <h1 className="font-display text-h0 leading-tight text-(--color-fg)">
            Bringing Technology Full Circle
          </h1>
          <p className="text-b1 leading-relaxed text-(--color-muted)">
            We help operators, OEMs, and service providers remove, recover, and
            repurpose infrastructure while maximizing asset value and ensuring
            environmental compliance.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Desktop: Centered, items-center, space-between layout */}
      <div className="relative isolate hidden xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-12">
        {/* LEFT SIDE: Content centered vertically */}
        <ScrollReveal className="relative z-10 flex w-full flex-col gap-8 xl:w-1/2">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="var(--color-surface-blush)"
            className="w-fit"
          />
          <h1 className="font-display text-h0 leading-tight text-(--color-fg)">
            Bringing Technology Full Circle
          </h1>
          <p className="max-w-[540px] text-b1 leading-relaxed text-(--color-muted)">
            We help operators, OEMs, and service providers remove, recover, and
            repurpose infrastructure while maximizing asset value and ensuring
            environmental compliance.
          </p>
          <div className="flex items-center gap-3 pt-4">
            <Button variant="secondary">LET&apos;S TALK</Button>
          </div>
        </ScrollReveal>

        {/* RIGHT SIDE: Image centered vertically and larger */}
        <motion.div
          /* REMOVED: xl:absolute, xl:-right-6, xl:bottom-0 */
          /* ADDED: flex-1 to take available space, justify-end */
          className="pointer-events-none relative z-20 flex flex-1 items-center justify-end"
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: siteDuration.heroAsideServices,
            ease: siteEase,
            delay: 0.1,
          }}
        >
          {/* INCREASED: max-h from 488px to 600px (adjust as needed) */}
          <div className="relative h-[480px] w-[480px] shrink-0">
            <motion.div
              className="relative h-full w-full"
              animate={floatAnimation}
              transition={floatTransition}
            >
              <Image
                src="/services/services-hero.png"
                alt="Operations professional working"
                fill
                /* CHANGED: object-right to keep it flush to the right edge of the container */
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
