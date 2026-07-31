import { Hero } from "@/components/sections/Hero";
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
