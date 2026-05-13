"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  isArrow?: boolean;
  type?: "button" | "submit" | "reset";
  /** When set, renders as a link with the same visual treatment as the button. */
  href?: string;
}

export default function Button({
  children,
  className,
  variant = "primary",
  isArrow = true,
  type = "button",
  href,
}: ButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 180);
  };

  const isPrimary = variant === "primary";
  const isAccent = variant === "accent";

  const base =
    "inline-flex items-center w-[177px] h-[48px] gap-1 font-mono text-o1 leading-none tracking-wide transition-all duration-400 md:h-[54px] md:w-auto md:text-b2";

  const segment = isAccent
    ? "bg-[var(--color-footer-accent)] text-[var(--color-on-primary)] group-hover:opacity-90"
    : isPrimary
      ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] group-hover:bg-black"
      : "bg-black text-white group-hover:bg-[var(--color-primary)]";

  const labelCell =
    "h-[48px] min-h-[48px] md:h-[54px] md:min-h-[54px] px-2 md:px-[var(--space-btn-x)] flex flex-1 items-center justify-center whitespace-nowrap md:flex-none md:justify-start md:shrink-0";
  const arrowCell =
    "h-[48px] w-[48px] min-h-[48px] min-w-[48px] md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px] flex items-center justify-center shrink-0";
  const borderRadius = "rounded-sm";

  const rootClass = `group ${base} ${className ?? ""}`;
  const labelClassName = `${labelCell} ${borderRadius} ${segment} ${
    clicked ? "font-bold tracking-wide" : ""
  } transition-all duration-300`;

  if (isArrow) {
    const arrow = (
      <>
        <span className={labelClassName}>{children}</span>
        <span
          className={`${arrowCell} ${borderRadius} ${segment} transition-all duration-400 transform group-hover:translate-x-1`}
          aria-hidden
        >
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={20}
            height={20} />
        </span>
      </>
    );
    if (href) {
      return (
        <Link href={href} className={rootClass} onClick={handleClick}>
          {arrow}
        </Link>
      );
    }
    return (
      <button onClick={handleClick} className={rootClass} type={type}>
        {arrow}
      </button>
    );
  }

  const labelOnly = <span className={labelClassName}>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={rootClass} onClick={handleClick}>
        {labelOnly}
      </Link>
    );
  }
  return (
    <button onClick={handleClick} className={rootClass} type={type}>
      {labelOnly}
    </button>
  );
}
