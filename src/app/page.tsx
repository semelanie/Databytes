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
import { cms } from "@/lib/cms";
import { resolveIcon } from "@/lib/iconRegistry";

// Always render fresh — this page reads CMS content that admins
// can edit at any time, so it must not be statically cached.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const content = await cms.getSiteContent();
  const cmsClients = await cms.getClients();
  const clients =
    cmsClients.length > 0
      ? cmsClients.map((c) => ({ name: c.name, src: c.logo_url, wide: c.wide }))
      : undefined;

  const cmsServices = await cms.getServices();
  const serviceItems =
    cmsServices.length > 0
      ? cmsServices.slice(0, 3).map((s) => {
          const Icon = resolveIcon(s.icon);
          return {
            slug: s.slug,
            title: s.title,
            summary: s.summary,
            accent: s.accent,
            icon: <Icon size={22} aria-hidden="true" />,
          };
        })
      : undefined;

  const cmsProducts = await cms.getProducts();
  const productItems =
    cmsProducts.length > 0
      ? cmsProducts.slice(0, 3).map((p) => {
          const Icon = resolveIcon(p.icon);
          return {
            slug: p.slug,
            title: p.title,
            summary: p.summary,
            hook: p.hook,
            accent: p.accent,
            badge: p.badge,
            icon: <Icon size={22} aria-hidden="true" />,
          };
        })
      : undefined;

  return (
    <>
      <Hero
        eyebrow={content.hero_eyebrow}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
      />
      <QuickLinks />
      <MissionVision />
      <AboutTeaser />
      <TrustedBy clients={clients} />
      <WhyChooseUs />
      <ServicesPreview items={serviceItems} />
      <IndustriesWeServe />
      <ProductsPreview items={productItems} />
      <OurProcess />
      <CTA />
    </>
  );
}
