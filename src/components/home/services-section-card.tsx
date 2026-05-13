"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { siteDuration, siteEase } from "@/lib/motion-presets";

export interface ServicesSectionCardProps {
  title: string;
  description: string;
  image: string;
  /** Hash target on `/services`, e.g. `/services#strategic-decommissioning` */
  readMoreHref: string;
}

export function ServicesSectionCard({
  title,
  description,
  image,
  readMoreHref,
}: ServicesSectionCardProps) {
  const reduce = useReducedMotion();

  return (
    <Link
      href={readMoreHref}
      className="group flex h-full w-full min-w-0 flex-col rounded-md no-underline text-inherit outline-offset-2 focus-visible:outline focus-visible:outline-(--color-primary)"
    >
      <motion.article
        className="flex h-full w-full flex-col overflow-hidden rounded-md bg-(--color-surface-cream)"
        whileHover={
          reduce
            ? undefined
            : { y: -5, boxShadow: "0 20px 44px -14px rgba(15, 23, 42, 0.14)" }
        }
        transition={{ duration: siteDuration.hoverLift, ease: siteEase }}
      >
        <div className="relative aspect-[4/3] sm:aspect-video w-full shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="flex min-h-[220px] flex-1 flex-col p-6">
          <h3 className="font-display text-h2 md:text-b1 mb-2">{title}</h3>

          <p className="mb-4 flex-1 text-b2">{description}</p>

          <span className="font-mono text-caption text-(--color-link-muted) underline underline-offset-4 decoration-(--color-link-muted) group-hover:decoration-fg w-fit">
            Read more
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
