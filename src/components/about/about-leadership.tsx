"use client";
import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { ScrollReveal } from "@/components/motion";
import type { LeadershipMember } from "@/data/about-leadership-data";
import { ABOUT_LEADERSHIP_TEAM } from "@/data/about-leadership-data";
import {
  siteDuration,
  siteEase,
  siteSpringContent,
} from "@/lib/motion-presets";

const PREVIEW_W = 220;
const PREVIEW_H = 286;

function useFinePointerHover() {
  const [fineHover, setFineHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFineHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return fineHover;
}

export default function AboutLeadership() {
  const reduce = useReducedMotion();
  const fineHover = useFinePointerHover();
  const showFloatPreview = fineHover && !reduce;

  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredMember = ABOUT_LEADERSHIP_TEAM.find(
    (m) => m.id === hoveredId && m.id !== openId,
  );

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    if (!showFloatPreview) return;
    const onVis = () => {
      if (document.visibilityState === "hidden") setHoveredId(null);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [showFloatPreview]);

  useEffect(() => {
    // Never show hover portrait while a row is expanded.
    if (openId) setHoveredId(null);
  }, [openId]);

  return (
    <section className="relative bg-(--color-bg) py-(--space-section-padding)">
      {showFloatPreview ? (
        <div
          className="pointer-events-none fixed inset-0 z-30 hidden md:flex md:items-center md:justify-center"
          aria-hidden
        >
          <AnimatePresence mode="wait">
            {hoveredMember ? (
              <motion.div
                key={hoveredMember.id}
                className="w-[220px] overflow-hidden rounded-md bg-(--color-bg) shadow-lg"
                style={{ height: PREVIEW_H }}
                initial={{ opacity: 0, y: -56 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 32,
                  transition: {
                    y: {
                      duration: siteDuration.leadershipPortraitOut,
                      ease: siteEase,
                    },
                    opacity: {
                      duration: siteDuration.leadershipPortraitOut * 0.85,
                      ease: siteEase,
                    },
                  },
                }}
                transition={{
                  y: {
                    duration: siteDuration.leadershipPortraitIn,
                    ease: siteEase,
                  },
                  opacity: {
                    duration: siteDuration.leadershipPortraitIn * 0.72,
                    ease: siteEase,
                  },
                }}
              >
                <Image
                  src={hoveredMember.imageSrc}
                  alt=""
                  width={PREVIEW_W}
                  height={PREVIEW_H}
                  className="size-full object-cover object-top grayscale contrast-105"
                  unoptimized={hoveredMember.imageSrc.endsWith(".svg")}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ) : null}

      <div className="layout-container">
        <ScrollReveal className="mb-12 lg:mb-16">
          <h2 className="font-display text-h1 lg:text-h0">Leadership Team</h2>
        </ScrollReveal>

        <ul className="flex flex-col border-t border-(--color-border)">
          {ABOUT_LEADERSHIP_TEAM.map((member) => (
            <LeadershipRow
              key={member.id}
              member={member}
              isOpen={openId === member.id}
              onToggle={() => toggle(member.id)}
              onRowPointerEnter={
                showFloatPreview && openId !== member.id
                  ? () => setHoveredId(member.id)
                  : undefined
              }
              onRowPointerLeave={
                showFloatPreview ? () => setHoveredId(null) : undefined
              }
              showInlinePortrait={true}
              reduce={reduce}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

type RowProps = {
  member: LeadershipMember;
  isOpen: boolean;
  onToggle: () => void;
  onRowPointerEnter?: () => void;
  onRowPointerLeave?: () => void;
  showInlinePortrait: boolean;
  reduce: boolean | null;
};

function LeadershipRow({
  member,
  isOpen,
  onToggle,
  onRowPointerEnter,
  onRowPointerLeave,
  showInlinePortrait,
  reduce,
}: RowProps) {
  const panelId = `leadership-panel-${member.id}`;
  const headerId = `leadership-header-${member.id}`;

  const heightTransition = reduce
    ? { duration: 0.28, ease: siteEase }
    : siteSpringContent;

  const heightExitTransition = reduce
    ? { duration: 0.22, ease: siteEase }
    : { ...siteSpringContent, stiffness: 420 };

  const liClass =
    isOpen === true
      ? "flex flex-col border-b border-(--color-leadership-expanded-divider) bg-(--color-leadership-expanded-bg) text-(--color-leadership-expanded-fg)"
      : "flex flex-col border-b border-(--color-border)";

  const buttonHoverClass =
    isOpen === true
      ? "hover:bg-white/6"
      : "hover:bg-(--color-surface-about-stat-card)/60";

  const bioParagraphs = member.bio;

  return (
    <li
      className={liClass}
      onMouseEnter={() => onRowPointerEnter?.()}
      onMouseLeave={() => onRowPointerLeave?.()}
    >
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex w-full cursor-pointer items-center px-(--space-gap-md) py-6 text-left transition-colors sm:px-(--space-gap-lg) ${buttonHoverClass}`}
      >
        <div className="flex w-full flex-nowrap items-center gap-x-3 sm:grid sm:grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-x-5 md:gap-x-8 lg:gap-x-10">
          <span className="shrink-0 font-mono text-o1 tabular-nums">
            {member.indexLabel}
          </span>
          <span className="min-w-0 flex-1 truncate font-display text-b2 sm:flex-none sm:text-h2">
            {member.name}
          </span>
          <span className="hidden min-w-0 truncate text-right font-body text-b4 md:b1 sm:block">
            {member.title}
          </span>
          <span
            className="flex size-10 shrink-0 items-center justify-center sm:justify-self-end"
            aria-hidden
          >
            {isOpen ? (
              <Minus className="size-6" strokeWidth={1.25} />
            ) : (
              <Plus className="size-6" strokeWidth={1.25} />
            )}
          </span>
        </div>
      </button>

      <p className="px-(--space-gap-md) pb-4 font-body text-b2 sm:hidden">
        {member.title}
      </p>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.section
            key={panelId}
            id={panelId}
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: heightTransition,
                opacity: {
                  duration: siteDuration.accordionOpacity,
                  ease: siteEase,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: heightExitTransition,
                opacity: {
                  duration: siteDuration.micro,
                  ease: siteEase,
                },
              },
            }}
            className="w-full overflow-hidden"
          >
            <div
              className={`grid gap-6 border-t border-(--color-leadership-expanded-divider) px-(--space-gap-md) py-6 sm:py-8 sm:px-(--space-gap-lg) ${
                showInlinePortrait
                  ? "sm:grid-cols-[minmax(0,180px)_1fr] sm:gap-x-5 md:gap-x-8"
                  : "sm:grid-cols-[2.5rem_1fr] sm:gap-x-5 md:gap-x-8"
              }`}
            >
              {showInlinePortrait ? (
                <div className="relative col-span-2 mx-auto aspect-400/520 w-full max-w-[200px] shrink-0 overflow-hidden rounded-md sm:col-span-1 sm:mx-0 sm:max-w-[180px]">
                  <Image
                    src={member.imageSrc}
                    alt=""
                    fill
                    className="object-cover object-top grayscale contrast-105"
                    sizes="200px"
                    unoptimized={member.imageSrc.endsWith(".svg")}
                  />
                </div>
              ) : null}
              <div className="col-span-2 flex flex-col gap-6 sm:col-span-1 sm:col-start-2">
                {bioParagraphs.map((paragraph, i) => (
                  <p
                    key={`${member.id}-bio-${i}`}
                    className="font-body text-b2"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </li>
  );
}
