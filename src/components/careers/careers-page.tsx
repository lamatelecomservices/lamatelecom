"use client";

import BrandsSection from "../home/brands-section";
import CareersDontSeeRole from "./careers-dont-see-role";
import CareersHero from "./careers-hero";
import CareersLeadership from "./careers-leadership";
import CareersLifeField from "./careers-life-field";
import CareersLtsWay from "./careers-lts-way";
import CareersOpenings from "./careers-openings";

export default function CareersPage() {
  return (
    <main className="min-h-screen ">
      <CareersHero />
      <CareersLtsWay />
      <CareersLifeField />
      <CareersOpenings />
      <CareersDontSeeRole />
      <CareersLeadership />
      <BrandsSection />
    </main>
  );
}
