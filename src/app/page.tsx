import AboutSection from "@/components/home/about-section";
import BrandsSection from "@/components/home/brands-section";
import Hero from "@/components/home/hero";
import LoopInfra from "@/components/home/loop-infra";
import ServicesSection from "@/components/home/services-section";
import Stats from "@/components/home/stats";
import StrategicSectors from "@/components/home/strategic-sectors";

function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <Stats />
      <ServicesSection />
      <LoopInfra />
      <BrandsSection />
      <StrategicSectors />
    </div>
  );
}

export default Page;
