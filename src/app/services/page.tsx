import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Services"
        description="End-to-end IT services for government, education, and private-sector organizations across Seychelles. Click a service to learn more."
      />
      <Container className="py-20">
        <p className="mb-6 text-sm text-ink/50">
          Tap any service to expand it for details, or tap again to collapse.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              summary={service.summary}
              hook={service.hook}
              icon={<service.icon size={22} aria-hidden="true" />}
              accent={service.accent}
            />
          ))}
        </div>
      </Container>

      <CTA
        title="Not sure which service fits?"
        subtitle="We're happy to talk it through."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
