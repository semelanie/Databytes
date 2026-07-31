import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">Services</h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        End-to-end IT services for government, education, and private-sector
        organizations across Seychelles.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="h-full">
              <h2 className="font-display text-lg font-semibold text-navy">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-ink/70">{service.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
