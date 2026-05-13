import type { Metadata } from "next";
import Link from "next/link";

import GeneralApplicationForm from "@/components/apply/general-application-form";
import { CAREERS_JOBS } from "@/data/careers-data";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Send your application to Lama Telecom Services — attach your resume and tell us about yourself.",
};

type PageProps = {
  searchParams: Promise<{ position?: string }>;
};

export default async function AboutApplyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const positionId =
    typeof params.position === "string" && params.position.length > 0
      ? params.position
      : null;
  const job = positionId
    ? CAREERS_JOBS.find((j) => j.id === positionId)
    : undefined;
  const roleTitle = job?.title ?? null;

  return (
    <main className="min-h-screen bg-(--color-bg) pb-10 pt-8 text-(--color-fg) lg:pb-16 lg:pt-28">
      <div className="layout-container flex flex-col gap-10 lg:gap-14">
        {positionId ? (
          <nav aria-label="Breadcrumb" className="font-body text-b2">
            <Link
              href="/careers"
              className="text-(--color-careers-opening-meta) underline-offset-4 hover:underline"
            >
              Careers
            </Link>
            <span className="text-(--color-careers-opening-meta)" aria-hidden>
              {" "}
              /{" "}
            </span>
            <span className="text-(--color-fg)">Apply</span>
          </nav>
        ) : null}

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="flex flex-col gap-4 lg:max-w-xl">
            <h1 className="font-display text-h1 lg:text-h0">
              Send us your application via this form
            </h1>
            {roleTitle ? (
              <p className="font-body text-b1 text-(--color-text-body)">
                Applying for:{" "}
                <span className="text-(--color-fg)">{roleTitle}</span>
              </p>
            ) : (
              <p className="font-body text-b1 text-(--color-text-body)">
                Share your details and resume. Our team will review your
                application and follow up if there&apos;s a strong match.
              </p>
            )}
          </div>

          <div className="min-w-0">
            <GeneralApplicationForm
              positionId={positionId}
              roleTitle={roleTitle} />
          </div>
        </div>
      </div>
    </main>
  );
}
