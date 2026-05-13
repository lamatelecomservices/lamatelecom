"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Button from "@/components/button";
import SectionBadge from "@/components/section-badge";

import {
  defaultViewport,
  siteDuration,
  siteEase,
  siteSpringContent,
} from "@/lib/motion-presets";
import { FOOTER_CONTACT_HREF } from "@/lib/site-routes";

import { services } from "./services-decommissioning-data";

export default function ServicesDecomissiong() {
  return (
    <section
      id="strategic-decommissioning"
      className="scroll-mt-28 bg-[#DCE1F4] py-(--space-section-padding)"
    >
      <div className="layout-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="flex max-w-[480px] flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{
              duration: siteDuration.sectionReveal,
              ease: siteEase,
            }}
          >
            <SectionBadge
              label="SERVICE 01"
              backgroundColor="var(--color-surface-cream)"
              className="w-fit" />

            <span className="font-display text-h1  leading-tight">
              Strategic Decommissioning Approach
            </span>

            <p className="text-b1 leading-relaxed text-[#666666]">
              A high-level overview of how we manage your infrastructure
              transition from planning to logistics.
            </p>

            <div className="pt-2">
              <Button variant="secondary" href={FOOTER_CONTACT_HREF}>
                GET STARTED
              </Button>
            </div>
          </motion.div>
          <ServicesDecomissiongContent />
        </div>
      </div>
    </section>
  );
}

export function ServicesDecomissiongContent() {
  const [openId, setOpenId] = useState("01" as string | null);

  return (
    <motion.div
      className="flex min-w-0 flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        visible: {
          transition: {
            staggerChildren: siteDuration.staggerGap,
            delayChildren: siteDuration.accordionListDelayChildren,
          },
        },
      }}
    >
      {services.map((item) => {
        const isOpen = openId === item.id;
        const hasBullets = item.bullets.length > 0;

        return (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: siteDuration.staggerRow,
                  ease: siteEase,
                },
              },
            }}
            className="border-b border-[#8E8E93]"
          >
            <motion.button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-start justify-between gap-4 py-6 text-left transition-colors hover:bg-black/2"
              onClick={() =>
                setOpenId((prev) => (prev === item.id ? null : item.id))
              }
              whileTap={{ scale: 0.995 }}
              transition={{
                duration: siteDuration.micro,
                ease: siteEase,
              }}
            >
              <div className="flex min-w-0 flex-1 items-start gap-4">
                <span
                  className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xs  font-display text-h3 text-footer-bg md:h-[57px] md:w-[57px] md:text-h2"
                  aria-hidden
                >
                  {item.id}
                </span>
                <span className="min-w-0 pt-1.5 font-display text-h3 md:text-h2">
                  {item.title}
                </span>
              </div>
              <motion.span
                className="relative flex h-8 w-8 shrink-0 items-center justify-center pt-1 text-[#000000]"
                aria-hidden
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="up"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.82, rotate: -12 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.82, rotate: 12 }}
                      transition={{
                        duration: siteDuration.iconSwap,
                        ease: siteEase,
                      }}
                    >
                      <ArrowUpRight size={32} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="down"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.82, rotate: 12 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.82, rotate: -12 }}
                      transition={{
                        duration: siteDuration.iconSwap,
                        ease: siteEase,
                      }}
                    >
                      <ArrowDownRight size={32} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && hasBullets && (
                <motion.div
                  key={`${item.id}-panel`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: siteSpringContent,
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
                      height: { ...siteSpringContent, stiffness: 420 },
                      opacity: {
                        duration: siteDuration.micro,
                        ease: siteEase,
                      },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pl-[72px] pr-2">
                    <motion.ul
                      className="list-disc space-y-3 pl-4 text-b2"
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: {
                          transition: {
                            staggerChildren: siteDuration.bulletStaggerGap,
                            delayChildren: siteDuration.bulletStaggerDelay,
                          },
                        },
                      }}
                    >
                      {item.bullets.map((bullet) => (
                        <motion.li
                          key={bullet}
                          variants={{
                            hidden: { opacity: 0, x: -8 },
                            show: {
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: siteDuration.bullet,
                                ease: siteEase,
                              },
                            },
                          }}
                        >
                          {bullet}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
