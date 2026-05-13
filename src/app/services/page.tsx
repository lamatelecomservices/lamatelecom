import type { Metadata } from "next";
import BrandsSection from "@/components/home/brands-section";
import ServicesDecomissiong from "@/components/services/services-decomissiong";
import ServicesEnterpriseNetwork from "@/components/services/services-enterprise-network";
import ServicesHero from "@/components/services/services-hero";
import ServicesNetworkExpertise from "@/components/services/services-network-expertise";
import ServicesResponsibleRecycling from "@/components/services/services-responsible-recycling";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We help operators, OEMs, and service providers remove, recover, and repurpose infrastructure while maximizing asset value and ensuring environmental compliance.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesDecomissiong />
      <ServicesNetworkExpertise />
      <ServicesResponsibleRecycling />
      <ServicesEnterpriseNetwork />
      <BrandsSection />
    </div>
  );
}
