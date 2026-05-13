import Image from "next/image";
import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";

export default function ExploreServicesCta() {
  return (
    <>
      {/* ✅ DESKTOP (unchanged, only visibility added) */}
      <section className="hidden lg:block relative overflow-hidden bg-(--color-surface-cream) h-[557px] lg:h-[434px]">
        <div className="layout-container relative z-10 h-full flex w-full flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-10 xl:gap-14">
          <ScrollReveal className="h-full items-center justify-center flex w-full lg:w-1/2 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-h1 leading-[1.1] text-(--color-fg)">
                Ready to streamline your <br className="hidden md:block" />
                network transition?
              </h2>

              <p className="max-w-[480px] text-b1 text-(--color-text-body)">
                From site audits to sustainable asset recovery, let Lama Telecom
                Services handle the heavy lifting.
              </p>

              <Button variant="secondary" href="/services">
                EXPLORE SERVICES
              </Button>
            </div>
          </ScrollReveal>

          <div className="h-full pointer-events-none relative w-full lg:w-1/2 shrink-0">
            <Image
              src="/industries/explore.svg"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 1023px) 100vw, 480px"
              unoptimized />
          </div>
        </div>
      </section>

      {/* ✅ MOBILE (new section) */}
      <section className="block lg:hidden relative overflow-hidden bg-(--color-surface-cream) h-[557px] md:h-[800px]">
        <div className="layout-container relative z-10 h-full flex flex-col justify-between">
          {/* TOP CONTENT */}
          <ScrollReveal className="flex flex-col gap-4 pt-10">
            <h2 className="font-display text-h1 leading-[1.1] text-(--color-fg)">
              Ready to streamline your network transition?
            </h2>

            <p className="text-b1 text-(--color-text-body)">
              From site audits to sustainable asset recovery, let Lama Telecom
              Services handle the heavy lifting.
            </p>

            <Button variant="secondary" href="/services">
              EXPLORE SERVICES
            </Button>
          </ScrollReveal>

          {/* BOTTOM IMAGE */}
          <div className="relative w-full h-[180px] md:h-[300px] pointer-events-none">
            <Image
              src="/industries/explore.svg"
              alt=""
              fill
              className="object-cover object-bottom"
              unoptimized />
          </div>
        </div>
      </section>
    </>
  );
}
