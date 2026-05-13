import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CareersJobDetailView from "@/components/careers/careers-job-detail-view";
import { CAREERS_JOBS } from "@/data/careers-data";
import { CAREERS_JOB_DETAIL_BY_ID } from "@/data/careers-job-details";

type PageProps = {
  params: Promise<{ jobId: string }>;
};

export function generateStaticParams() {
  return CAREERS_JOBS.map((job) => ({ jobId: job.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { jobId } = await params;
  const job = CAREERS_JOBS.find((j) => j.id === jobId);
  if (!job) {
    return { title: "Careers" };
  }
  return {
    title: `${job.title}`,
    description: `${job.title} — ${job.subtitle} Careers at Lama Telecom Services.`,
  };
}

export default async function CareersJobPage({ params }: PageProps) {
  const { jobId } = await params;
  const job = CAREERS_JOBS.find((j) => j.id === jobId);
  if (!job) {
    notFound();
  }

  const detail = CAREERS_JOB_DETAIL_BY_ID[jobId] ?? null;

  return <CareersJobDetailView job={job} detail={detail} />;
}
