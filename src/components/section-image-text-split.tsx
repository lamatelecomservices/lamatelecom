"use client";
import Image from "next/image";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import { FOOTER_CONTACT_HREF } from "@/lib/site-routes";

export type SectionImageTextLayout = "split" | "title-wide" | "aside-media";

export type SectionImageTextSplitProps = {
  title: string;
  paragraphs: readonly string[];
  listItems: readonly string[];
  imageSrc: string;
  imageAlt: string;
  /** Image column side (`split` / `title-wide`) or media column side (`aside-media`). */
  imagePosition: "left" | "right";
  layout?: SectionImageTextLayout;
  listHeading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "muted" | "white";
  /** When false, image container has square corners (design reference). */
  imageRounded?: boolean;
  className?: string;
  /** Sets `<section id>` for in-page anchors (e.g. `/industries#slug`). */
  sectionId?: string;
};

const defaultListHeading = "Typical support includes:";

const gridGap = "gap-8 lg:grid-cols-2 lg:gap-x-[99px]";

function TextBody({
  paragraphs,
  listHeading,
  listItems,
}: {
  paragraphs: readonly string[];
  listHeading: string;
  listItems: readonly string[];
}) {
  return (
    <div className="flex min-w-0 flex-col gap-6 lg:justify-start lg:gap-8">
      <div className="flex flex-col gap-4 text-b2">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-display text-h2 lg:font-body lg:text-b1">
          {listHeading}
        </p>

        {/* Numbered rows on all breakpoints */}
        <div className="flex flex-col">
          {listItems.map((item, i) => (
            <div key={item}>
              <div className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-sm font-mono text-b2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-b1">{item}</span>
              </div>
              {i < listItems.length - 1 && <div className="h-px bg-black/10" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SectionImageTextSplit({
  title,
  paragraphs,
  listItems,
  imageSrc,
  imageAlt,
  imagePosition,
  layout = "split",
  listHeading = defaultListHeading,
  ctaLabel = "GET STARTED",
  ctaHref = FOOTER_CONTACT_HREF,
  tone = "white",
  imageRounded = false,
  className,
  sectionId,
}: SectionImageTextSplitProps) {
  const contentRowReverse = imagePosition === "right";
  const anchorScroll = sectionId ? "scroll-mt-28" : "";
  const isSvg = imageSrc.endsWith(".svg");
  const radiusClass = imageRounded ? "rounded-md" : "rounded-none";
  const sectionToneClass =
    tone === "muted" ? "bg-[#DCE1F4]" : "bg-(--color-bg)";
  const topRow = (
    <div className="mb-8 flex flex-col gap-(--space-gap-md) lg:mb-[60px] lg:flex-row lg:items-center lg:justify-between lg:max-w-[960px]">
      <h2 className="font-display text-h1">{title}</h2>
      <div className="shrink-0">
        <Button variant="secondary" href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  );

  function ImageArea({ areaClassName }: { areaClassName: string }) {
    return (
      <div
        className={`relative w-full overflow-hidden ${radiusClass} ${areaClassName}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized={isSvg}
        />
      </div>
    );
  }

  if (layout === "aside-media") {
    const mediaOnRight = imagePosition === "right";
    const textColumn = (
      <div className="flex min-w-0 flex-col">
        <TextBody
          paragraphs={paragraphs}
          listHeading={listHeading}
          listItems={listItems}
        />
      </div>
    );
    const mediaColumn = (
      <div className="flex h-full min-w-0 flex-col">
        <ImageArea areaClassName="aspect-[4/3] min-h-[240px] max-h-[480px] w-full sm:max-h-[520px]" />
      </div>
    );

    return (
      <section
        id={sectionId}
        className={`py-(--space-section-padding) ${sectionToneClass} ${anchorScroll} ${className ?? ""}`}
      >
        <div className="layout-container">
          <div className="mx-auto w-full max-w-[1360px]">
            {topRow}
            <ScrollReveal className="w-full">
              <div className={`grid w-full items-stretch ${gridGap}`}>
                {mediaOnRight ? (
                  <>
                    {textColumn}
                    {mediaColumn}
                  </>
                ) : (
                  <>
                    {mediaColumn}
                    {textColumn}
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  if (layout === "title-wide") {
    const stretchImageTitleWide =
      "aspect-[4/3] min-h-[220px] max-h-[520px] w-full lg:aspect-[5/4] lg:min-h-[460px] lg:max-h-[620px]";

    return (
      <section
        id={sectionId}
        className={`py-(--space-section-padding) ${sectionToneClass} ${anchorScroll} ${className ?? ""}`}
      >
        <div className="layout-container">
          <div className="mx-auto w-full max-w-[1360px]">
            {topRow}
            <ScrollReveal className="w-full">
              <div className={`grid w-full items-stretch ${gridGap}`}>
                <ImageArea areaClassName={stretchImageTitleWide} />
                <div className="flex min-w-0 flex-col">
                  <TextBody
                    paragraphs={paragraphs}
                    listHeading={listHeading}
                    listItems={listItems}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  const sectionShell = `py-(--space-section-padding) ${sectionToneClass} ${anchorScroll} ${className ?? ""}`;
  const stretchImage =
    "aspect-[4/3] min-h-[220px] max-h-[520px] w-full lg:aspect-[5/4] lg:min-h-[460px] lg:max-h-[620px]";

  return (
    <section id={sectionId} className={sectionShell}>
      <div className="layout-container">
        <div className="mx-auto w-full max-w-[1360px]">
          {topRow}
          <ScrollReveal className="w-full">
            <div
              className={`grid w-full items-stretch ${gridGap}${
                contentRowReverse
                  ? " lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <ImageArea areaClassName={stretchImage} />
              <div className="flex min-w-0 flex-col">
                <TextBody
                  paragraphs={paragraphs}
                  listHeading={listHeading}
                  listItems={listItems}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
