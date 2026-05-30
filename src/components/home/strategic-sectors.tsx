import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";

const sectors = [
  {
    id: "01",
    title: "Telecom Operators",
    href: "/industries#telecommunications-carriers",
    iconSrc: "/strategic_sectors/1.svg",
    iconWidth: 83,
    iconHeight: 104,
  },
  {
    id: "02",
    title: "Data Centers & Hyperscalers",
    href: "/industries#data-centers",
    iconSrc: "/strategic_sectors/2.svg",
    iconWidth: 100,
    iconHeight: 97,
  },
  {
    id: "03",
    title: "Govt Comms",
    href: "/industries#government-organizations",
    iconSrc: "/strategic_sectors/3.svg",
    iconWidth: 94,
    iconHeight: 103,
  },
  {
    id: "04",
    title: "Enterprise Networks",
    href: "/industries#enterprise-networks",
    iconSrc: "/strategic_sectors/4.svg",
    iconWidth: 81,
    iconHeight: 84,
  },
] as const;

/** Fine dashed rules: longer dashes + wider gaps than CSS border-dashed */
const dashedLineV = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, var(--color-border-dashed) 0 6px, transparent 6px 18px)",
} as const;
const dashedLineH = {
  backgroundImage:
    "repeating-linear-gradient(to right, var(--color-border-dashed) 0 6px, transparent 6px 18px)",
} as const;

export default function StrategicSectors() {
  return (
    <section className="bg-white py-(--space-section-padding)">
      <div className="layout-container flex flex-col gap-10 lg:gap-12 xl:flex-row xl:items-center xl:justify-between xl:gap-16 2xl:gap-24">
        <ScrollReveal className="flex w-full max-w-[520px] shrink-0 flex-col gap-8 xl:max-w-[420px]">
          <SectionBadge
            label="KEY INDUSTRIES"
            backgroundColor="var(--color-surface-cream-alt)"
            className="w-fit"
          />

          <h2 className="font-display text-h1 leading-tight xl:text-h0">
            Strategic
            <br />
            Sector Focus
          </h2>

          <div className="pt-2">
            <Button variant="secondary" href="/industries">
              ALL INDUSTRIES
            </Button>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid w-full min-w-0 grid-cols-1 gap-0 md:grid-cols-2 xl:max-w-[min(100%,758px)] xl:flex-1 xl:gap-0 xl:h-[594px]">
          {sectors.map((item, index) => (
            <StaggerItem key={item.id} className="min-h-[220px] md:min-h-[252px] xl:min-h-0">
              <Link
                href={item.href}
                className="group relative flex h-full min-h-0 flex-col justify-between rounded-sm bg-(--color-surface-cream-alt) px-4 py-4 text-inherit no-underline outline-offset-2 transition-colors duration-350 ease-out hover:bg-(--color-surface-sector-hover) focus-visible:outline focus-visible:outline-(--color-primary) md:px-6 md:py-5 xl:px-8 xl:py-4"
              >
                {/* Vertical divider: desktop only, after col 0 */}
                {(index === 0 || index === 2) && (
                  <span
                    className="pointer-events-none absolute inset-y-0 right-0 hidden w-px md:block"
                    style={dashedLineV}
                    aria-hidden
                  />
                )}
                {/* Horizontal divider: mobile — after all but last; 2×2 — after row 0 only */}
                {index < sectors.length - 1 && (
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px md:hidden"
                    style={dashedLineH}
                    aria-hidden
                  />
                )}
                {(index === 0 || index === 1) && (
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-px md:block"
                    style={dashedLineH}
                    aria-hidden
                  />
                )}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm leading-none tracking-wide">
                    {item.id}
                  </span>
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-(--color-neutral-icon) transition-colors group-hover:bg-(--color-neutral-icon-hover)"
                    aria-hidden
                  >
                    <ArrowUpRight className="size-6" strokeWidth={2} />
                  </span>
                </div>
                <div className="hidden min-h-0 flex-1 items-center md:flex">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="h-auto max-h-[72px] w-auto max-w-[72px] object-contain object-left lg:max-h-[84px] lg:max-w-[84px] xl:max-h-[104px] xl:max-w-[100px]"
                  />
                </div>
                <div className="flex h-auto items-end pb-2 pt-6 md:min-h-18 md:shrink-0 md:pb-0 md:pt-0 xl:min-h-[76px]">
                  <span className="font-display text-h2 text-pretty md:text-h3 xl:text-h2">
                    {item.title}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
