import { ArrowUpRight } from "lucide-react";
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
  },
  {
    id: "02",
    title: "Data Centers & Hyperscalers",
    href: "/industries#data-centers",
  },
  {
    id: "03",
    title: "Govt Comms",
    href: "/industries#government-organizations",
  },
  {
    id: "04",
    title: "Enterprise Networks",
    href: "/industries#enterprise-networks",
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
      <div className="layout-container flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-24">
        <ScrollReveal className="flex max-w-[420px] shrink-0 flex-col gap-8">
          <SectionBadge
            label="KEY INDUSTRIES"
            backgroundColor="var(--color-surface-cream-alt)"
            className="w-fit"
          />

          <h2 className="font-display text-h1 leading-tight lg:text-h0">
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

        <StaggerContainer className="grid w-full min-w-0 max-w-[min(100%,758px)] grid-cols-1 lg:h-[594px] lg:grid-cols-2">
          {sectors.map((item, index) => (
            <StaggerItem key={item.id}>
              <Link
                href={item.href}
                className="group relative flex h-full min-h-0 flex-col justify-between rounded-sm bg-(--color-surface-cream-alt) px-4 py-4 text-inherit no-underline outline-offset-2 transition-colors duration-350 ease-out hover:bg-(--color-surface-sector-hover) focus-visible:outline focus-visible:outline-(--color-primary) lg:px-8 lg:py-4"
              >
                {/* Vertical divider: desktop only, after col 0 */}
                {(index === 0 || index === 2) && (
                  <span
                    className="pointer-events-none absolute inset-y-0 right-0 hidden w-px lg:block"
                    style={dashedLineV}
                    aria-hidden
                  />
                )}
                {/* Horizontal divider: mobile — after all but last; desktop — after row 0 only */}
                {index < sectors.length - 1 && (
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px lg:hidden"
                    style={dashedLineH}
                    aria-hidden
                  />
                )}
                {(index === 0 || index === 1) && (
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-px lg:block"
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
                <div className="flex h-auto items-end pb-2 pt-6 lg:h-[76px] lg:pb-0 lg:pt-0">
                  <span className="font-display text-h2 lg:text-h2">
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
