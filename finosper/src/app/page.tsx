"use client";

import {
  Hero,
  TrustSection,
  ServicesOverview,
  WhyFinosper,
  HowItWorks,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <WhyFinosper />
      <HowItWorks />
      <CTASection />
    </>
  );
}
