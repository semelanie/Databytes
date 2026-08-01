import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Button } from "@/components/ui/Button";
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

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-ink/60">
            Not sure which service fits? We're happy to talk it through.
          </p>
          <Button href="/contact">Contact Us</Button>
        </div>
      </Container>
    </>
  );
}
