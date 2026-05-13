import Image from "next/image";
import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import SectionBadge from "@/components/section-badge";

export default function AboutSection() {
  return (
    <section>
      <div className="layout-container relative flex items-center overflow-hidden py-(--space-section-padding) lg:min-h-[665px] lg:py-(--space-section-padding)">
        <div className="absolute left-10 top-0 bottom-0 z-0 hidden h-full w-full opacity-60 lg:block">
          <Image
            src="/grid-home.svg"
            alt="background"
            fill
            className="object-contain object-left"
            sizes="50vw"
            unoptimized
          />
        </div>

        <div className="relative z-10 flex w-full flex-col gap-(--space-gap-lg) lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <ScrollReveal className="shrink-0 self-start">
            <SectionBadge
              label="WHO WE ARE"
              backgroundColor="var(--color-surface-cream)"
            />
          </ScrollReveal>

          <ScrollReveal className="flex min-w-0 flex-col" delay={0.06}>
            <h2 className="max-w-[879px] font-display text-h1 leading-tight text-(--color-fg)">
              We help organizations unlock lasting value from their network and
              IT <br />
              infrastructure—without compromising
              <br />
              <span className="text-(--color-muted)">
                security, performance, or sustainability.
              </span>
            </h2>

            <p className="md:hidden mt-6 max-w-[600px] text-b2 leading-relaxed text-(--color-muted)">
              We streamline infrastructure retirement to minimize risk and
              maximize sustainability, returning legacy assets to the circular
              economy.
            </p>

            <p className="hidden md:block mt-6 max-w-[600px] text-b2 leading-relaxed text-(--color-muted)">
              Our decommissioning and asset lifecycle management services ensure
              legacy infrastructure is removed efficiently, risk is minimized in
              live environments, and materials and equipment are returned to the
              circular economy wherever possible. By aligning infrastructure
              retirement with environmental and financial outcomes, we support
              the transition to modern, more sustainable networks.
            </p>

            <div className="mt-8 flex items-center gap-(--space-gap-sm)">
              <Button variant="secondary" href="/about">
                ABOUT US
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
