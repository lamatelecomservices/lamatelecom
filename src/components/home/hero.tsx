"use client";

import { motion, useReducedMotion } from "motion/react";

import { siteDuration, siteEase } from "@/lib/motion-presets";

const HERO_VIDEO = "/videos/hero.mp4";
const HERO_POSTER = "/home-banner.png";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="w-full">
      {/* Full-bleed media below md; inset matches layout container from md up */}
      <div className="layout-full-bleed px-0">
        <div className="relative grid h-[min(705px,92svh)] w-full overflow-hidden rounded-none sm:h-[min(705px,88svh)] md:h-[705px] lg:h-(--space-hero-height) xl:h-[min(80svh,780px)] 2xl:h-[min(84svh,880px)]">
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.04, opacity: 0.92 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: siteDuration.heroMedia, ease: siteEase }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={HERO_POSTER}
              aria-hidden
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          </motion.div>

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full">
            <div className="layout-container grid h-full items-end py-5 sm:py-8 lg:py-10">
              <motion.h1
                className="md:max-w-4xl font-display text-h0 leading-tight text-white"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: siteDuration.heroHeadline,
                  ease: siteEase,
                  delay: 0.2,
                }}
              >
                Powering a Smarter,
                <br className="hidden md:block" />
                Circular
                <br className="md:hidden" /> Telecom Economy
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
