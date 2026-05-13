"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { CareersJob } from "@/data/careers-data";
import { CAREERS_HR_EMAIL } from "@/data/careers-data";
import type { CareersJobDetailContent } from "@/data/careers-job-details";
import CareersJobApplicationForm from "./careers-job-application-form";
import CareersSplitButtonDark from "./careers-split-button-dark";

type CareersJobDetailViewProps = {
  job: CareersJob;
  detail: CareersJobDetailContent | null;
};

function SidebarMetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-(--color-border) pb-5">
      <p className="font-mono text-o1 uppercase tracking-wide text-(--color-careers-opening-meta)">
        {label}
      </p>
      <p className="mt-2 font-body text-b1">{value}</p>
    </div>
  );
}

function ApplyNowSplitButton({
  onClick,
  ariaLabel,
}: {
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="group inline-flex h-[48px] w-auto items-center gap-1 font-mono text-o1 leading-none tracking-wide text-white transition-all duration-400 md:h-[54px] md:gap-(--space-gap-sm) md:text-b2"
    >
      <span className="flex h-[48px] min-h-[48px] shrink-0 items-center whitespace-nowrap rounded-sm bg-black px-4 transition-colors group-hover:bg-(--color-primary) md:h-[54px] md:min-h-[54px] md:px-(--space-btn-x)">
        APPLY NOW
      </span>
      <span className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-sm bg-black transition-all duration-400 group-hover:translate-x-1 group-hover:bg-(--color-primary) md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px]">
        <Image src="/arrow.svg" alt="" width={20} height={20} />
      </span>
    </button>
  );
}

export default function CareersJobDetailView({
  job,
  detail,
}: CareersJobDetailViewProps) {
  const applyHref = `mailto:${CAREERS_HR_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}`;
  const [tab, setTab] = useState<"overview" | "application">("overview");

  const goToApplication = () => {
    setTab("application");
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1023px)").matches
    ) {
      document
        .getElementById("job-application")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!detail) {
    return (
      <main className="min-h-screen bg-(--color-bg) pb-24 pt-6 text-(--color-fg) md:pt-10 lg:pb-32">
        <div className="layout-container flex flex-col gap-10 lg:gap-14">
          <Link
            href="/careers"
            className="inline-flex w-fit items-center rounded-sm bg-(--color-surface-cream) px-4 py-3 font-mono text-o1 uppercase tracking-wide text-(--color-fg) transition-opacity hover:opacity-90"
          >
            &lt; back to careers
          </Link>

          <header className="flex max-w-[880px] flex-col gap-4">
            <h1 className="font-display text-h1 lg:text-h0">{job.title}</h1>
            <p className="font-body text-b1">{job.subtitle}</p>
          </header>

          <div className="flex max-w-[640px] flex-col gap-6">
            <p className="font-body text-b1 text-(--color-text-body)">
              Full role details for this opening will be published soon. You can
              still reach out to our team with your resume.
            </p>
            <CareersSplitButtonDark
              href={applyHref}
              label="APPLY NOW"
              ariaLabel={`Apply for ${job.title}`}
            />
          </div>
        </div>
      </main>
    );
  }

  const sidebar = (
    <aside className="flex flex-col gap-4">
      <SidebarMetaRow label="Category" value={detail.sidebar.department} />
    </aside>
  );

  const overviewBody = (
    <>
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-h2">Role overview</h2>
        <p className="whitespace-pre-line font-body text-b1">
          {detail.roleOverview}
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-h2">Key responsibilities</h2>
        {detail.responsibilitySections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h3 className="font-display text-h3">{section.title}</h3>
            <ul className="list-disc space-y-2 pl-5 font-body text-b1">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {detail.requirements && detail.requirements.length > 0 ? (
        <section className="flex flex-col gap-4 lg:hidden">
          <h2 className="font-display text-h2">
            Requirements &amp; qualifications
          </h2>
          <ul className="list-disc space-y-2 pl-5 font-body text-b1">
            {detail.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {detail.benefits && detail.benefits.length > 0 ? (
        <section className="flex flex-col gap-4 lg:hidden">
          <h2 className="font-display text-h2">Benefits and perks</h2>
          <ul className="list-disc space-y-2 pl-5 font-body text-b1">
            {detail.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="hidden pt-2 lg:block">
        <ApplyNowSplitButton
          onClick={goToApplication}
          ariaLabel={`Open application for ${job.title}`}
        />
      </div>

      <div className="pt-2 lg:hidden">
        <ApplyNowSplitButton
          onClick={goToApplication}
          ariaLabel={`Scroll to application for ${job.title}`}
        />
      </div>
    </>
  );

  return (
    <main className=" min-h-screen bg-(--color-bg) pb-24 pt-8 text-(--color-fg) md:pt-10 lg:pb-32">
      <div className="layout-container flex flex-col gap-10 lg:gap-12">
        <nav
          aria-label="Breadcrumb"
          className="font-body text-b2 text-(--color-careers-opening-meta)"
        >
          <span className="lg:hidden">
            <Link
              href="/careers"
              className="underline-offset-4 hover:underline"
            >
              Careers
            </Link>
            <span aria-hidden className="px-1">
              &gt;
            </span>
            <span>Job details</span>
          </span>
          <span className="hidden lg:inline">
            <Link href="/" className="underline-offset-4 hover:underline">
              Home
            </Link>
            <span aria-hidden className="px-1">
              /
            </span>
            <Link
              href="/careers"
              className="underline-offset-4 hover:underline"
            >
              Careers
            </Link>
          </span>
        </nav>

        <header className="flex max-w-[880px] flex-col gap-5 lg:max-w-none">
          <h1 className="font-display text-h1 lg:text-h0">{job.title}</h1>
          <p className="font-body text-b1">{job.subtitle}</p>
          {detail.mobileMeta ? (
            <dl className="grid gap-4 font-body text-b1 lg:hidden">
              <div className="flex flex-col items-start gap-1 text-center">
                <dt className="font-mono text-o1 uppercase text-(--color-careers-opening-meta)">
                  Department
                </dt>
                <dd>{detail.sidebar.department}</dd>
              </div>
            </dl>
          ) : null}
        </header>

        {/* Mobile: overview + extra sections + form (no tabs) */}
        <div className="flex flex-col gap-12 lg:hidden">
          <div className="flex flex-col gap-10">{overviewBody}</div>
          <CareersJobApplicationForm
            id="job-application"
            jobTitle={job.title}
          />
        </div>

        {/* Desktop: sidebar + tabs */}
        <div className="hidden  lg:grid lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:items-start lg:gap-x-20 xl:gap-x-28 2xl:gap-x-36">
          {sidebar}
          <div className="flex min-w-0 flex-col gap-8 max-w-[800px]">
            <div
              role="tablist"
              aria-label="Job sections"
              className="flex gap-10 border-b border-(--color-border) font-mono text-o1 uppercase tracking-wide md:text-b2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={tab === "overview"}
                id="tab-overview"
                aria-controls="panel-overview"
                className={
                  tab === "overview"
                    ? "-mb-px border-b-2 border-(--color-primary) pb-3 text-(--color-primary)"
                    : "pb-3 text-(--color-careers-opening-meta) transition-colors hover:text-(--color-fg)"
                }
                onClick={() => setTab("overview")}
              >
                Overview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "application"}
                id="tab-application"
                aria-controls="panel-application"
                className={
                  tab === "application"
                    ? "-mb-px border-b-2 border-(--color-primary) pb-3 text-(--color-primary)"
                    : "pb-3 text-(--color-careers-opening-meta) transition-colors hover:text-(--color-fg)"
                }
                onClick={() => setTab("application")}
              >
                Application
              </button>
            </div>

            <div
              id="panel-overview"
              role="tabpanel"
              aria-labelledby="tab-overview"
              hidden={tab !== "overview"}
              className="flex flex-col gap-10"
            >
              {overviewBody}
            </div>

            <div
              id="panel-application"
              role="tabpanel"
              aria-labelledby="tab-application"
              hidden={tab !== "application"}
              className="flex flex-col gap-10"
            >
              <CareersJobApplicationForm
                id="job-application-desktop"
                jobTitle={job.title}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
