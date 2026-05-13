import Image from "next/image";

const STATS = [
  {
    value: "99%",
    label: "On-Time Project Delivery",
    src: "/about/stats/1.svg",
  },
  {
    value: "500+",
    label: "Tonnes of IT & Network Assets Processed",
    src: "/about/stats/2.svg",
  },
  {
    value: "150+",
    label: "Infrastructure Projects Completed",
    src: "/about/stats/3.svg",
  },
] as const;

export default function AboutMissionStats() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding) text-(--color-fg)">
      <div className="layout-container flex flex-col gap-10 lg:gap-16">
        <h2 className="font-display max-w-[700px] text-h1 leading-tight lg:text-h0 lg:leading-tight">
          We’re here to clear the path for{" "}
          <span className="text-(--color-muted)">what’s next.</span>
        </h2>

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-(--space-gap-lg)">
          <div className="relative aspect-1440/668 w-full min-w-0 max-w-full lg:w-1/2 lg:min-h-[373px]">
            <Image
              src="/about/img/hero.svg"
              alt=""
              fill
              className="object-cover object-center grayscale contrast-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <p className="font-body text-b1 lg:text-h2">
              We’ve built our team on a simple promise: to handle your
              infrastructure with the same care and precision you used to build
              it.
            </p>
            <p className="font-body text-b1 lg:text-h2">
              Whether we are auditing a live site or recovering value from
              retired assets, we treat every project as a true partnership. For
              us, it’s about being responsive, staying disciplined, and ensuring
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

              {/* decrease image height and width */}
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
