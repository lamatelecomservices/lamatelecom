import type { Metadata } from "next";

import CareersPage from "@/components/careers/careers-page";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the future by mastering the past. Explore careers at Lama Telecom Services—infrastructure, logistics, and sustainable asset recovery.",
};

export default function CareersRoute() {
  return <CareersPage />;
}
