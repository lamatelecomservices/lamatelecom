import type { Metadata } from "next";
import Link from "next/link";
import { PRIVACY_POLICY } from "@/data/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "LAMA Logistics privacy practices — how we collect, use, share, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-(--color-bg) pb-24 pt-32 text-(--color-fg)">
      <div className="layout-container max-w-3xl">
        <p className="font-mono text-o1 uppercase tracking-wider text-(--color-muted)">
          Legal
        </p>
        <h1 className="font-display text-h2 mt-3 leading-tight md:text-h1">
          Privacy Policy
        </h1>
        <p className="mt-4 text-b2 text-(--color-text-body)">
          Amended May 17, 2021. This policy works together with our{" "}
          <Link
            href="/terms"
            className="text-(--color-primary) underline-offset-2 hover:underline"
          >
            Terms of Service
          </Link>
          .
        </p>

        <article
          className="mt-12 whitespace-pre-wrap border-t border-(--color-border) pt-10 font-body text-b2 leading-relaxed text-(--color-text-body)"
          aria-label="Privacy Policy full text"
        >
          {PRIVACY_POLICY}
        </article>
      </div>
    </main>
  );
}
