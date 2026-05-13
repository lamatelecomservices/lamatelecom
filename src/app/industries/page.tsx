import type { Metadata } from "next";
import BrandsSection from "@/components/home/brands-section";
import ExploreServicesCta from "@/components/home/explore-services-cta";
import IndustriesHero from "@/components/industries/industries-hero";
import IndustriesSections from "@/components/industries/industries-sections";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Tailored solutions for global industry leaders — from data centers to national telecom networks.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <IndustriesHero />
      <IndustriesSections />
      <ExploreServicesCta />
      <BrandsSection />
    </div>
  );
}
