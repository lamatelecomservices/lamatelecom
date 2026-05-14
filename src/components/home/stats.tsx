import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import StatCard from "@/components/stat-card";

export default function Stats() {
  return (
    <section className="w-full">
      <div className="relative flex flex-col overflow-hidden lg:h-[500px] lg:flex-row">
        {/* LEFT SECTION: Gradient + Ring */}
        <ScrollReveal className="relative flex items-center justify-end h-[min(280px,42vw)] w-full min-h-[220px] bg-[#3842A6] sm:h-[320px] lg:h-full lg:min-h-0 lg:flex-1">
          {/* REMOVED: layout-container 
             The wrapper below now takes up 100% of the gradient width
          */}
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/ring.png"
              alt="ring"
              fill
              className="pointer-events-none object-cover lg:object-contain object-center scale-[1.22] origin-center lg:object-right lg:scale-[1.4] lg:origin-right"
              sizes="50vw"
              priority
            />
          </div>
        </ScrollReveal>

        {/* RIGHT SECTION: Stats */}
        <div className="flex w-full items-center bg-(--color-surface-cream) py-10 lg:h-full lg:w-1/2 lg:py-0">
          {/* Keep layout-container or padding here to align text with the rest of your site */}
          <StaggerContainer className="max-w-[725px] grid w-full grid-cols-2 gap-x-8 gap-y-10 px-6 sm:gap-x-12 sm:gap-y-12 sm:px-10 lg:gap-x-16 lg:px-16">
            <StaggerItem>
              <StatCard value="99%" content="On-Time Project Delivery" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="15,000+" content="Tons of IT & Network Assets" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="400+" content="Infrastructure Projects" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="15+" content="Years in Business" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
