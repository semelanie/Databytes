import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/layout/PageHeader";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Services"
        description="End-to-end IT services for government, education, and private-sector organizations across Seychelles."
      />
      <Container className="py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="group h-full">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.accent }}
                >
                  <service.icon size={22} aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-navy">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-ink/70">{service.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
