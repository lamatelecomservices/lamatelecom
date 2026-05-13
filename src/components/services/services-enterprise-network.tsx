"use client";
import Image from "next/image";

import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";
import { FOOTER_CONTACT_HREF } from "@/lib/site-routes";

const intro =
  "Comprehensive lifecycle support from deployment to migration and security.";

const offerings = [
  {
    title: "Deployment & Installation",
    description:
      "Expert equipment setup, rack installation, and structured cabling for smooth network rollouts in data centers and office environments.",
  },
  {
    title: "Architecture & Wireless Planning",
    description:
      "Designing scalable, secure network environments and wireless solutions (AP installation and controller configuration) tailored for future growth.",
  },
  {
    title: "Migration & Upgrades",
    description:
      "Controlled transitions to new platforms and technology refreshes, planned specifically to maintain stability and performance with minimal disruption.",
  },
  {
    title: "CCTV & Surveillance",
    description:
      "Full design and deployment of monitoring systems, integrated seamlessly into your existing network infrastructure.",
  },
];

export default function ServicesEnterpriseNetwork() {
  return (
    <section
      id="enterprise-network"
      className="scroll-mt-28 bg-[#DCE1F4] py-(--space-section-padding)"
    >
      <div className="layout-container">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-8 lg:gap-10">
          {/* Header */}
          <ScrollReveal className="w-full">
            <div className="flex flex-col gap-6 lg:hidden">
              <SectionBadge
                backgroundColor="var(--color-surface-cream)"
                className="w-fit"
                label="SERVICE 04"
              />
              <h2 className="font-display text-h1 leading-tight text-(--color-fg)">
                Enterprise Network Solutions
              </h2>
              <p className="text-b1 font-body leading-relaxed">{intro}</p>
              <Button variant="secondary" href={FOOTER_CONTACT_HREF}>
                GET STARTED
              </Button>
            </div>

            {/* lg: same 700px | rest column split as the image row below */}
            <div className="hidden w-full lg:flex lg:flex-row">
              <div className="flex w-[700px] shrink-0 flex-col gap-[24px]">
                <SectionBadge
                  backgroundColor="var(--color-surface-cream)"
                  className="w-fit"
                  label="SERVICE 04"
                />
                <h2 className="font-display text-h1 leading-[1.1] text-(--color-fg)">
                  Enterprise Network Solutions
                </h2>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-3 pl-10 xl:pl-12">
                <p className="text-b1 font-body leading-snug">{intro}</p>
                <Button variant="secondary" href={FOOTER_CONTACT_HREF}>
                  GET STARTED
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Image + offerings — content drives the height, image stretches to match */}
          <ScrollReveal className="w-full" delay={0.06}>
            <div className="flex w-full flex-col lg:flex-row lg:items-stretch">
              <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-md lg:h-auto lg:w-[700px]">
                <Image
                  src="/services/enterprise-network-solutions.svg"
                  alt="Fiber optic network cabling"
                  fill
                  className="object-cover object-center"
                  sizes="700px"
                  unoptimized
                />
              </div>

              <StaggerContainer
                className="flex min-w-0 flex-1 flex-col gap-8 py-8 lg:gap-10 lg:py-6 lg:pl-10 xl:pl-12"
                stagger={0.06}
              >
                {offerings.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-h3 leading-snug text-(--color-fg) md:text-h2">
                        {item.title}
                      </h3>
                      <p className="text-b2 font-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
