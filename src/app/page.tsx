import { Hero } from "@/components/sections/Hero";
import { QuickLinks } from "@/components/sections/QuickLinks";
import { MissionVision } from "@/components/sections/MissionVision";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { OurProcess } from "@/components/sections/OurProcess";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <MissionVision />
      <AboutTeaser />
      <TrustedBy />
      <WhyChooseUs />
      <ServicesPreview />
      <IndustriesWeServe />
      <ProductsPreview />
      <OurProcess />
      <CTA />
    </>
  );
}
