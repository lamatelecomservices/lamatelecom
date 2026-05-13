import Image from "next/image";
import Button from "@/components/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { VideoBackground } from "@/components/video-background";

const iconClass = "text-[var(--color-primary)] [&_svg]:size-6 [&_svg]:shrink-0";

const features = [
  {
    label: "Zero Waste",
    icon: (
      <Image src="/infra/waste.svg" alt="Zero Waste" width={24} height={24} />
    ),
  },
  {
    label: "ISO-Certified",
    icon: (
      <Image src="/infra/iso.svg" alt="ISO-Certified" width={24} height={24} />
    ),
  },
  {
    label: "R2v3 Processes",
    icon: (
      <Image src="/infra/r3v.svg" alt="R2v3 Processes" width={24} height={24} />
    ),
  },
];

export default function LoopInfra() {
  return (
    <section className="py-(--space-section-padding)">
      {/* Video panel */}
      <div className="layout-full-bleed relative min-h-[560px] overflow-hidden sm:min-h-[600px] lg:h-[min(88vh,840px)] lg:min-h-[680px] xl:h-[min(90vh,920px)] 2xl:h-[min(92vh,1020px)]">
        <VideoBackground
          videoSrc="/videos/second.mp4"
          imageSrc="/loop-infra.png"
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden />

        {/* Mobile / tablet: stack with gaps so feature labels are not clipped; desktop: side-by-side */}
        <div className="absolute inset-0 z-10">
          <div className="layout-container flex h-full flex-col gap-8 py-8 text-white sm:gap-10 sm:py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:py-16 xl:py-20 2xl:py-24">
            <ScrollReveal className="max-w-[min(100%,920px)] shrink-0">
              <p className="font-display text-h1 leading-tight text-(--color-surface-cream) lg:text-h0">
                Closing the Loop on <br />
                Telecom Infrastructure
              </p>
            </ScrollReveal>

            <div className="flex min-h-0 w-full min-w-0 flex-col gap-8 lg:mt-0 lg:max-w-xl lg:flex-1 lg:justify-between">
              <StaggerContainer className="flex flex-col gap-6 sm:gap-5 lg:flex-row lg:flex-wrap lg:gap-10">
                {features.map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex flex-col items-start gap-3">
                      <div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-sm bg-white shadow-md ${iconClass}`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-b2">{item.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <ScrollReveal
                className="hidden max-w-xl flex-col gap-6 lg:flex lg:pr-2"
                delay={0.08}
              >
                <p className="text-b1">
                  We help organisations recover value from IT and telecom assets
                  through secure decommissioning, asset recovery, and
                  responsible recycling. Our services are built for speed,
                  compliance, and sustainability—supporting smarter
                  infrastructure decisions at every stage.
                </p>

                <div className="flex gap-3">
                  <Button
                    variant="primary"
                    href="/services#responsible-recycling"
                  >
                    READ MORE
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Text + button below video on mobile only */}
      <div className="layout-container mt-8 flex flex-col gap-6 lg:hidden">
        <ScrollReveal delay={0.08}>
          <p className="text-b1 text-(--color-fg)">
            We help organisations recover value from IT and telecom assets
            through secure decommissioning, asset recovery, and responsible
            recycling. Our services are built for speed, compliance, and
            sustainability—supporting smarter infrastructure decisions at every
            stage.
          </p>
        </ScrollReveal>
        <div className="flex gap-3">
          <Button variant="secondary" href="/services#responsible-recycling">
            READ MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
