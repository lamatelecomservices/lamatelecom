import Image from "next/image";

const STATS = [
  {
    value: "15+",
    label: "Years of Experience",
    src: "/about/stats/1.svg",
  },
  {
    value: "15,000+",
    label: "Tons of IT & Network Assets Processed",
    src: "/about/stats/2.svg",
  },
  {
    value: "400+",
    label: "Infrastructure Projects Completed",
    src: "/about/stats/3.svg",
  },
] as const;

export default function AboutMissionStats() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding) text-(--color-fg)">
      <div className="layout-container flex flex-col gap-10 lg:gap-16">
        <h2 className="font-display max-w-[700px] text-h1 leading-tight lg:text-h0 lg:leading-tight">
          We're here to clear the path for{" "}
          <span className="text-(--color-muted)">what's next.</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-(--space-gap-lg)">
          {/* Image: natural aspect ratio, no cropping */}
          <div className="w-full min-w-0 max-lg:mx-auto max-lg:max-w-[min(100%,920px)]">
            <Image
              src="/about/img/hero.svg"
              alt="Lama Telecom Services team"
              width={1440}
              height={668}
              className="h-auto w-full object-contain grayscale contrast-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* Text: aligns to top, flows naturally */}
          <div className="flex w-full min-w-0 flex-col gap-6">
            <p className="font-body text-b1 ">
              We've built our team on a simple promise: to handle your
              infrastructure with the same care and precision you used to build
              it.
            </p>
            <p className="font-body text-b1">
              Whether we are auditing a live site or recovering value from
              retired assets, we treat every project as a true partnership. For
              us, it's about being responsive, staying disciplined, and ensuring
              that nothing goes to waste.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-(--space-gap-md) sm:grid-cols-2 lg:grid-cols-3 lg:gap-(--space-gap-lg)">
          {STATS.map((item) => (
            <li
              key={item.src}
              className="flex flex-col overflow-hidden rounded-lg bg-(--color-surface-about-stat-card)"
            >
              <div className="flex flex-col gap-3 px-6 pt-8 pb-2">
                <p className="font-display text-h1 lg:text-h0">{item.value}</p>
                <p className="font-body text-b1">{item.label}</p>
              </div>

              <div className="relative mt-auto h-[min(150px,20vw)] min-h-[120px] w-full sm:h-[150px] lg:h-[180px]">
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-contain object-bottom-right grayscale contrast-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
