import type { Metadata } from "next";
import Link from "next/link";
import { TERMS_OF_SERVICE } from "@/data/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Lama Logistics — platform use, carriers, shippers, and payments.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-(--color-bg) pb-24 pt-32 text-(--color-fg)">
      <div className="layout-container max-w-3xl">
        <p className="font-mono text-o1 uppercase tracking-wider text-(--color-muted)">
          Legal
        </p>
        <h1 className="font-display text-h2 mt-3 leading-tight md:text-h1">
          Terms of Service
        </h1>
        <p className="mt-4 text-b2 text-(--color-text-body)">
          These terms govern use of the Site, Mobile App, and related services.
          They are incorporated by reference to our{" "}
          <Link
            href="/privacy"
            className="text-(--color-primary) underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          . For questions, contact{" "}
          <a
            className="text-(--color-primary) underline-offset-2 hover:underline"
            href="mailto:support@lamalogistics.com"
          >
            support@lamalogistics.com
          </a>
          .
        </p>

        <article
          className="mt-12 whitespace-pre-wrap border-t border-(--color-border) pt-10 font-body text-b2 leading-relaxed text-(--color-text-body)"
          aria-label="Terms of Service full text"
        >
          {TERMS_OF_SERVICE}
        </article>
      </div>
    </main>
  );
}
