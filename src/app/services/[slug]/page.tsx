import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { cms } from "@/lib/cms";
import { services as staticServices } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

// Fully dynamic — services can be added/edited/removed via the admin
// panel at any time, so slugs can't be known at build time.
export const dynamic = "force-dynamic";

async function getService(slug: string) {
  const cmsServices = await cms.getServices();
  const fromCms = cmsServices.find((s) => s.slug === slug);
  if (fromCms) return fromCms;

  const fromStatic = staticServices.find((s) => s.slug === slug);
  if (!fromStatic) return null;
  return {
    slug: fromStatic.slug,
    title: fromStatic.title,
    description: fromStatic.description,
    benefits: fromStatic.benefits,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader eyebrow="Services" title={service.title} />
      <Container className="py-20">
        <p className="max-w-2xl text-lg text-ink/70">{service.description}</p>

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
          <Button href="mailto:mgt@databytes.sc?subject=Quote%20Request">Request a Quote</Button>
        </div>
      </Container>
    </>
  );
}
