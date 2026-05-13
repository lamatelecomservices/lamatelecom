"use client";
import Image from "next/image";

const HERO_IMAGE = "/about/img/about-us-landing.jpg";

export default function AboutHero() {
  return (
    <section className="layout-full-bleed relative min-h-[min(50vh,400px)] w-full overflow-hidden bg-black md:min-h-[min(72vh,820px)]">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        className="object-cover object-center grayscale contrast-105"
        priority
        sizes="100vw" />
    </section>
  );
}
