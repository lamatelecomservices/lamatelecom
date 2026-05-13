"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CareersSplitButtonCreamProps = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export default function CareersSplitButtonCream({
  href,
  label,
  ariaLabel,
}: CareersSplitButtonCreamProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className="group inline-flex h-[48px] w-[177px] items-center gap-1 font-mono text-o1 leading-none tracking-wide text-(--color-about-joincta-label-fg) transition-all duration-400 md:h-[54px] md:w-auto md:gap-(--space-gap-sm) md:text-b2"
    >
      <span className="flex h-[48px] min-h-[48px] flex-1 items-center justify-center whitespace-nowrap rounded-sm bg-(--color-about-joincta-surface) px-2 transition-colors group-hover:opacity-90 md:h-[54px] md:min-h-[54px] md:flex-none md:shrink-0 md:justify-start md:px-(--space-btn-x)">
        {label}
      </span>
      <span className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-sm bg-(--color-about-joincta-surface) transition-all duration-400 group-hover:translate-x-1 group-hover:opacity-90 md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px]">
        <ArrowRight
          className="size-5 shrink-0 text-(--color-about-joincta-label-fg)"
          strokeWidth={1.5}
          aria-hidden />
      </span>
    </Link>
  );
}
