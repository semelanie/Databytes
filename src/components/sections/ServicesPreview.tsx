import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              What we do
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden items-center gap-1 text-sm font-semibold text-deep hover:text-primary md:flex"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{service.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
