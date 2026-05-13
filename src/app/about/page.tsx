import type { Metadata } from "next";

import AboutHero from "@/components/about/about-hero";
import AboutJoinTeamCta from "@/components/about/about-join-team-cta";
import AboutLeadership from "@/components/about/about-leadership";
import AboutMissionCarousel from "@/components/about/about-mission-carousel";
import AboutMissionStats from "@/components/about/about-mission-stats";
import { AboutOperationalWorkflow } from "@/components/about/about-operational-workflow";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lama Telecom Services — infrastructure transitions, asset recovery, and accountable decommissioning for operators and enterprises.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMissionStats />
      <AboutMissionCarousel />
      <AboutLeadership />
      <AboutJoinTeamCta />
      <AboutOperationalWorkflow />
    </div>
  );
}
