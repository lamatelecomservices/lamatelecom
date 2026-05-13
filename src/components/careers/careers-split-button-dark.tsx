"use client";
import Image from "next/image";
import Link from "next/link";

type CareersSplitButtonDarkProps = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export default function CareersSplitButtonDark({
  href,
  label,
  ariaLabel,
}: CareersSplitButtonDarkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className="group inline-flex h-[48px] w-auto items-center gap-1 font-mono text-o1 leading-none tracking-wide text-white transition-all duration-400 md:h-[54px] md:gap-(--space-gap-sm) md:text-b2"
    >
      <span className="flex h-[48px] min-h-[48px] shrink-0 items-center whitespace-nowrap rounded-sm bg-black px-4 transition-colors group-hover:bg-(--color-primary) md:h-[54px] md:min-h-[54px] md:px-(--space-btn-x)">
        {label}
      </span>
      <span className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-sm bg-black transition-all duration-400 group-hover:translate-x-1 group-hover:bg-(--color-primary) md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px]">
        <Image src="/arrow.svg" alt="" width={20} height={20} />
      </span>
    </Link>
  );
}
