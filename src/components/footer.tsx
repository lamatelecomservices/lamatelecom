"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";
import {
  SOCIAL_FACEBOOK_HREF,
  SOCIAL_LINKEDIN_HREF,
  SOCIAL_X_HREF,
} from "@/lib/social-links";

const SERVICES = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About Our Decommissioning Services",
    href: "/services#strategic-decommissioning",
  },
  {
    label: "End-to-End Network Decommissioning Expertise",
    href: "/services#network-deinstallation",
  },
  {
    label: "Responsible Recycling & Value Recovery",
    href: "/services#responsible-recycling",
  },
  {
    label: "Enterprise Network Solutions",
    href: "/services#enterprise-network",
  },
];

const INDUSTRIES = [
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Telecom Operations",
    href: "/industries#telecommunications-carriers",
  },
  { label: "Enterprise Networks", href: "/industries#enterprise-networks" },
  { label: "Data Centers", href: "/industries#data-centers" },
  { label: "Government", href: "/industries#government-organizations" },
];

const ABOUT = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

function FooterLineInput({
  id,
  type = "text",
  required,
  placeholderText,
}: {
  id: string;
  type?: string;
  required?: boolean;
  placeholderText: string;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const showHint = Boolean(required) && !value && !focused;

  const inputClass =
    "w-full border-0 bg-transparent py-4 text-b2 text-white outline-none";

  if (!required) {
    return (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholderText}
        className={`${inputClass} border-b border-(--color-footer-input-border) focus:border-(--color-footer-accent) placeholder:text-b2 placeholder:text-white/60`}
      />
    );
  }

  return (
    <div className="relative border-b border-(--color-footer-input-border) focus-within:border-(--color-footer-accent)">
      {showHint ? (
        <span
          className="pointer-events-none absolute top-4 left-0 text-b2 leading-normal"
          aria-hidden
        >
          <span className="text-white/75">{placeholderText}</span>
          <span className="text-(--color-primary)">*</span>
        </span>
      ) : null}
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${inputClass} relative z-10`}
        aria-label={`${placeholderText} (required)`}
        autoComplete={
          type === "email" ? "email" : type === "tel" ? "tel" : undefined
        }
      />
    </div>
  );
}

export default function Footer() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("footer-full-name"),
      company: formData.get("footer-company"),
      email: formData.get("footer-email"),
      tellUsMore: formData.get("footer-message") || "",
    };

    try {
      const response = await fetch(
        "https://lama-logistics-88b311025848.herokuapp.com/staff/api/sendInquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to send inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="scroll-mt-28 relative overflow-x-clip bg-(--color-footer-bg) px-4 py-12 text-white sm:px-6 lg:px-[131px] lg:py-[64px]"
    >
      <div className="layout-media-container-footer relative flex flex-col gap-12 py-12 lg:gap-14 lg:py-16">
        {/* WAVE (FIXED) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-30">
          <Image
            src="/footer-wave.svg"
            alt=""
            width={1440}
            height={300}
            className="w-full object-contain mt-10"
            unoptimized
          />
        </div>

        {/* TOP */}
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT */}
          <ScrollReveal className="flex max-w-[465px] flex-col gap-8">
            <h2 className="font-display text-h0 leading-tight">
              Let’s plan your <br />
              next transition!
            </h2>

            <p className="text-b1 text-(--color-neutral-icon)">
              Complex infrastructure needs a trusted partner, not just a vendor.
              Share your project details, and we’ll reach out with a tailored
              strategy and a clear path forward.
            </p>
          </ScrollReveal>

          {/* RIGHT FORM */}
          <ScrollReveal className="flex flex-col" delay={0.08}>
            <form
              className="relative z-10 flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <FooterLineInput
                id="footer-full-name"
                placeholderText="Your Full Name"
                required
              />
              <FooterLineInput
                id="footer-company"
                placeholderText="Company's Name"
                required
              />

              <FooterLineInput
                id="footer-email"
                placeholderText="Work Email Address"
                type="email"
                required
              />

              <textarea
                id="footer-message"
                name="footer-message"
                rows={3}
                placeholder="Tell us more about your needs (Optional)"
                className="w-full resize-y border-0 border-b border-(--color-footer-input-border) bg-transparent py-4 text-b2 text-white outline-none focus:border-(--color-footer-accent) placeholder:text-b2 placeholder:text-white/60"
              />

              <label
                htmlFor="footer-consent"
                className="flex max-w-[382px] cursor-pointer items-center gap-4 pt-8"
              >
                <input
                  id="footer-consent"
                  name="consent"
                  type="checkbox"
                  className="footer-consent-checkbox mt-0.5"
                />
                <span className="text-b2 leading-relaxed text-white">
                  I agree that Lama Telecom may contact me at the email address
                  above.
                </span>
              </label>

              {submitStatus === "success" && (
                <p className="text-b2 text-green-400">
                  Inquiry sent successfully!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-b2 text-red-400">{errorMessage}</p>
              )}

              <div className="pt-2">
                <Button
                  variant="accent"
                  isArrow
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </Button>
              </div>

              <p className="text-b3 text-(--color-footer-muted)">
                By completing this form, I have read, acknowledged and <br />{" "}
                agree to the{" "}
                <Link
                  href="/privacy"
                  className="text-white underline-offset-2 hover:text-(--color-footer-accent) hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </form>
          </ScrollReveal>
        </div>

        {/* FOOTER LINKS — 2-col grid matches top: brand under copy, nav columns under form */}
        <ScrollReveal className="relative z-10 mt-12 border-t border-(--color-footer-divider) pt-10 lg:mt-14 lg:pt-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-16">
            <div className="flex max-w-[465px] flex-col gap-6">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-fit cursor-pointer border-0 bg-transparent p-0"
                aria-label="Go to home"
              >
                <Image
                  src="/footer/logo.svg"
                  alt="Lama Telecom"
                  width={197}
                  height={40}
                  className="rounded-none!"
                />
              </button>

              <p className="text-b2 leading-relaxed text-(--color-footer-muted)">
                2161 Shattuck Ave, Ste 232 <br />
                Berkeley, CA 94704
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-o1 uppercase text-(--color-footer-muted)">
                    Freight Partner
                  </span>
                  <Link
                    href="https://www.lamafreight.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-b1 text-white underline underline-offset-4 transition-colors hover:text-(--color-footer-accent)"
                  >
                    Lama Freight
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-[minmax(220px,1.35fr)_minmax(150px,1fr)_minmax(120px,0.9fr)] sm:items-start sm:gap-x-8 lg:gap-x-10">
              <nav
                aria-label="Services"
                className="flex min-w-0 flex-col gap-5"
              >
                <ul className="flex flex-col gap-3.5 text-b2 leading-snug">
                  {SERVICES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 transition-colors hover:text-(--color-footer-accent)"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 flex gap-3">
                  <Link
                    href={SOCIAL_LINKEDIN_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/footer/linkedin.svg"
                      alt="LinkedIn"
                      width={40}
                      height={40}
                      className="footer-social-icon"
                    />
                  </Link>
                  <Link
                    href={SOCIAL_FACEBOOK_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/footer/facebook.svg"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="footer-social-icon"
                    />
                  </Link>
                  <Link
                    href={SOCIAL_X_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/footer/X.svg"
                      alt="X"
                      width={40}
                      height={40}
                      className="footer-social-icon"
                    />
                  </Link>
                </div>
              </nav>

              <nav
                aria-label="Industries"
                className="flex min-w-0 flex-col gap-5"
              >
                <ul className="flex flex-col gap-3.5 text-b2 leading-snug">
                  {INDUSTRIES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 transition-colors hover:text-(--color-footer-accent)"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="About" className="flex min-w-0 flex-col gap-5">
                <ul className="flex flex-col gap-3.5 text-b2 leading-snug">
                  {ABOUT.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 transition-colors hover:text-(--color-footer-accent)"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </ScrollReveal>

        {/* BOTTOM */}
        <ScrollReveal className="relative z-10 flex flex-col gap-4 border-t border-(--color-footer-divider) pt-8 pb-1 text-b3 text-(--color-footer-muted) sm:flex-row sm:justify-between">
          <span>© 2026 Lama Telecom Services. All Rights Reserved.</span>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/terms"
              className="transition-colors hover:text-(--color-footer-accent)"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-(--color-footer-accent)"
            >
              Privacy Policy
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
