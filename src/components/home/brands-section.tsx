import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";

const brands = [
  {
    name: "ATNI",
    src: "/brands/atni.svg",
    bg: "bg-[#072457]",
  },
  {
    name: "Google Cloud",
    src: "/brands/google-cloud.svg",
    bg: "bg-(--color-brand-tile-3)",
  },
  {
    name: "Lumen",
    src: "/brands/lumen.svg",
    bg: "bg-(--color-brand-tile-5)",
  },

  {
    name: "AWS",
    src: "/brands/aws.svg",
    bg: "bg-(--color-brand-tile-4)",
  },
  {
    name: "Full Circle",
    src: "/brands/full_circle.svg",
    bg: "bg-[#00007D]",
  },
];

export default function BrandsSection() {
  return (
    <section className="py-(--space-section-padding) bg-[#DCE1F44D]">
      <div className="layout-container-edge">
        <ScrollReveal className="flex flex-col gap-6 px-(--space-container-padding)">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <SectionBadge
              label="WHY CHOOSE US"
              backgroundColor="var(--color-surface-cream)"
            />

            <h2 className="max-w-[786px] font-display text-h2 lg:text-h1">
              We&apos;ve built long lasting partnerships with the most ambitious
              brands across the globe
            </h2>
          </div>
        </ScrollReveal>

        {/* Mobile: row 1 — 3 equal cards, row 2 — 2 same-size cards centered */}
        <div className="mt-10 flex flex-col gap-3 px-(--space-container-padding) lg:hidden">
          <StaggerContainer className="grid grid-cols-3 gap-3">
            {brands.slice(0, 3).map((brand) => (
              <StaggerItem key={brand.name}>
                <div
                  className={`flex h-[110px] w-full items-center justify-center ${brand.bg}`}
                  style={{ borderRadius: "9.89px" }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={80}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="flex justify-center gap-3">
            {brands.slice(3).map((brand) => (
              <StaggerItem key={brand.name} className="w-[calc(33.333%-4px)]">
                <div
                  className={`flex h-[110px] w-full items-center justify-center ${brand.bg}`}
                  style={{ borderRadius: "9.89px" }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={80}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Desktop: full-width row so tiles aren’t floating in a narrow band on large screens */}
        <StaggerContainer className="mt-14 hidden w-full grid-cols-5 gap-3 px-(--space-container-padding) lg:grid lg:gap-4">
          {brands.map((brand) => (
            <StaggerItem key={brand.name} className="min-w-0">
              <div
                className={`mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-2xl xl:max-w-[240px] ${brand.bg}`}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
