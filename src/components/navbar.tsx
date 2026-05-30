"use client";
import type { DotLottie } from "@lottiefiles/dotlottie-web";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { siteDuration, siteEase } from "@/lib/motion-presets";
import { FOOTER_CONTACT_HREF } from "@/lib/site-routes";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((m) => ({
      default: m.DotLottieReact,
    })),
  { ssr: false },
);

const NAV_LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/industries", label: "INDUSTRIES" },
  { href: "/careers", label: "CAREERS" },
] as const;

const navGetStartedClassName =
  "inline-flex h-[54px] w-[164px] shrink-0 items-center justify-center gap-2.5 rounded-sm bg-(--color-nav-get-started-bg) px-5 py-4 font-mono text-nav-get-started text-(--color-on-primary) transition-opacity hover:opacity-90";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();

  const [menuOpen, setMenuOpen] = useState(false);
  const lottieRef = useRef<DotLottie | null>(null);

  const resetLottie = useCallback(() => {
    const inst = lottieRef.current;
    if (inst) {
      inst.setMode("forward");
      inst.stop();
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the intentional trigger
  useEffect(() => {
    resetLottie();
    setMenuOpen(false);
  }, [pathname, resetLottie]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      const inst = lottieRef.current;
      if (inst) {
        inst.setMode(next ? "forward" : "reverse");
        inst.play();
      }
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    const inst = lottieRef.current;
    if (inst) {
      inst.setMode("reverse");
      inst.play();
    }
    setMenuOpen(false);
  }, []);

  const dotLottieRefCallback = useCallback((instance: DotLottie | null) => {
    lottieRef.current = instance;
    instance?.setSpeed(1.2);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm">
        <motion.div
          className="layout-container-navbar min-w-0"
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: siteDuration.navbar, ease: siteEase }}
        >
          <div className="flex min-w-0 items-center justify-between gap-3 md:gap-4 h-16 md:h-(--space-navbar-height)">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="flex shrink-0 cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-left md:gap-3"
              aria-label="Go to home"
            >
              <Image
                src="/LOGO-1.png"
                alt=""
                width={180}
                height={70}
                className="h-8 w-auto rounded-none! md:h-auto md:w-auto"
              />
              {/* <div className="hidden flex-col leading-tight md:flex">
                <span className="font-display text-[22px] font-medium">
                  Lama
                </span>
                <span className="font-display text-[20px] font-medium">
                  Telecom
                </span>-
              </div> */}
            </button>

            <div className="flex shrink-0 items-center gap-2 md:gap-(--space-gap-md)">
              <nav className="hidden items-center gap-4 lg:gap-(--space-gap-md) lg:flex">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display text-b2 font-medium uppercase transition-colors hover:text-primary ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href={`/contact`} className={navGetStartedClassName}>
                  GET STARTED
                </Link>
              </nav>

              <button
                type="button"
                className="flex size-10 shrink-0 items-center justify-center lg:hidden"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <DotLottieReact
                  src="/lottie/burger-menu.json"
                  dotLottieRefCallback={dotLottieRefCallback}
                  autoplay={false}
                  loop={false}
                  className="size-10"
                />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: siteEase }}
                className="overflow-hidden lg:hidden"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-1 border-t border-black/8 px-2 py-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-sm px-4 py-3 font-display text-b2 font-medium uppercase transition-colors ${
                        pathname === link.href
                          ? "bg-black/5 text-primary"
                          : "text-black/60 hover:bg-black/3 hover:text-black"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href={FOOTER_CONTACT_HREF}
                    className={`mx-2 mt-2 ${navGetStartedClassName}`}
                    onClick={closeMenu}
                  >
                    GET STARTED
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <div className="h-16 shrink-0 md:h-(--space-navbar-height)" aria-hidden />
    </>
  );
}
