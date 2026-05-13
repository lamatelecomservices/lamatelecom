import Button from "@/components/button";
import { ServicesSectionCard } from "@/components/home/services-section-card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";

const services = [
  {
    title: "About our Deinstallation Services",
    description:
      "A high-level overview of how we manage your infrastructure transition from planning to logistics.",
    image: "/home/1.png",
    readMoreHref: "/services#strategic-decommissioning",
  },
  {
    title: "End-to-End Network Deinstallation Expertise",
    description:
      "Specialized removal services across the entire spectrum of telecom and IT environments.",
    image: "/home/2.png",
    readMoreHref: "/services#network-deinstallation",
  },
  {
    title: "Responsible Recycling & Value Recovery",
    description:
      "Turning retired infrastructure into renewed capital through sustainable asset management.",
    image: "/home/3.png",
    readMoreHref: "/services#responsible-recycling",
  },
  {
    title: "Enterprise Network Solutions",
    description:
      "Comprehensive lifecycle support from deployment to migration and security.",
    image: "/home/4.png",
    readMoreHref: "/services#enterprise-network",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container">
        <ScrollReveal className="mb-10 flex flex-col gap-(--space-gap-lg)">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="var(--color-surface-blush)"
            className="w-fit"
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <h2 className="flex-1 font-display text-h2 leading-tight text-(--color-fg) md:text-h1">
              Protecting{" "}
              <span className="text-(--color-muted)">your value</span> through
              <br className="hidden md:block" /> {""}
              every network cycle
            </h2>

            <div className="flex flex-1 flex-col items-start gap-6">
              <p className="text-b1">
                We remove, recover, and repurpose your assets across all
                <br className="hidden md:block" /> {""}
                environments—maximizing value with zero disruption and
                <br className="hidden md:block" /> {""} total environmental
                compliance.
              </p>

              <Button href="/services" variant="secondary" isArrow>
                ALL SERVICES
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-10 border-t border-(--color-border)" />

        <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServicesSectionCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
