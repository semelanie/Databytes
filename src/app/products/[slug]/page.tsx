import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { cms } from "@/lib/cms";
import { products as staticProducts } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

// Fully dynamic — products can be added/edited/removed via the admin
// panel at any time, so slugs can't be known at build time.
export const dynamic = "force-dynamic";

async function getProduct(slug: string) {
  const cmsProducts = await cms.getProducts();
  const fromCms = cmsProducts.find((p) => p.slug === slug);
  if (fromCms) return fromCms;

  const fromStatic = staticProducts.find((p) => p.slug === slug);
  if (!fromStatic) return null;
  return {
    slug: fromStatic.slug,
    title: fromStatic.title,
    description: fromStatic.description,
    features: fromStatic.features,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  return { title: product?.title ?? "Product" };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHeader eyebrow="Products" title={product.title} />
      <Container className="py-20">
        <p className="max-w-2xl text-lg text-ink/70">{product.description}</p>

        {product.features.length > 0 && (
          <ul className="mt-8 space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-ink/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex gap-4">
          <Button href="/contact">Request a Demo</Button>
          <Button href="/contact" variant="secondary">
            Pricing
          </Button>
        </div>
      </Container>
    </>
  );
}
