"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { siteDuration, siteEase } from "@/lib/motion-presets";
import { FOOTER_CONTACT_HREF } from "@/lib/site-routes";

import {
  type NetworkExpertiseItem,
  networkExpertiseItems,
} from "./services-network-expertise-data";

const introBody = "max-w-[520px] text-b1 leading-relaxed text-(--color-muted)";

type ExpertiseRowProps = {
  item: NetworkExpertiseItem;
  reduceMotion: boolean | null;
};

function ExpertiseRow({ item, reduceMotion }: ExpertiseRowProps) {
  const rowArticle = [" py-12 md:py-16"].filter(Boolean).join(" ");

  return (
    <article className={rowArticle}>
      {/* Mobile: image full-width on top, content below */}
      <div className="flex flex-col gap-4 md:hidden">
        <motion.div
          className="relative h-[200px] w-full overflow-hidden rounded-md"
          transition={{ duration: siteDuration.hoverSubtle, ease: siteEase }}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </motion.div>
        <div className="flex items-start gap-4">
          <span className="shrink-0 font-display text-h3">{item.id}</span>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display text-h3">{item.title}</h3>
            <p className="font-body text-b2 text-(--color-muted)">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: image left, content right */}
      <div className="hidden items-center justify-between gap-10 md:flex">
        <motion.div
          className="relative h-[232px] w-[379px] shrink-0 overflow-hidden rounded-md"
          transition={{ duration: siteDuration.hoverSubtle, ease: siteEase }}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="220px"
          />
        </motion.div>
        <div className="flex items-start gap-[90px]">
          <span className="shrink-0 font-display text-h2">{item.id}</span>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-display text-h2">{item.title}</h3>
            <p className="font-body text-b1 text-(--color-muted) max-w-[744px]">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesNetworkExpertise() {
  const reduce = useReducedMotion();

  return (
    <section
      id="network-deinstallation"
      className="scroll-mt-28 bg-(--color-bg) py-(--space-section-padding)"
    >
      <div className="layout-container flex flex-col gap-14 md:gap-20">
        {/* HEADER */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* LEFT */}
          <div className="flex max-w-[720px] flex-col gap-(--space-gap-lg)">
            <SectionBadge
              backgroundColor="var(--color-surface-blush)"
              className="w-fit"
              label="SERVICE 02"
            />
            <h2 className="font-display text-h1 leading-tight text-(--color-fg)">
              End-to-End Network Deinstallation Expertise.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-(--space-gap-lg)">
            <p className={introBody}>
              Specialized removal services across the entire spectrum of telecom
              and IT environments.
            </p>
            <Button variant="secondary" href={FOOTER_CONTACT_HREF}>
              GET STARTED
            </Button>
          </div>
        </ScrollReveal>

        {/* LIST */}
        <StaggerContainer
          stagger={0.1}
          className="border-t border-(--color-border)"
        >
          {networkExpertiseItems.map((item) => (
            <StaggerItem key={item.id}>
              <ExpertiseRow item={item} reduceMotion={reduce} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
