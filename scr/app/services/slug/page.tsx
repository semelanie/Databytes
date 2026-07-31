import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">
        {service.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/70">
        {service.description}
      </p>

      {service.benefits.length > 0 && (
        <ul className="mt-8 space-y-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-ink/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {benefit}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10">
        <Button href="/contact">Request a Quote</Button>
      </div>
    </Container>
  );
}
