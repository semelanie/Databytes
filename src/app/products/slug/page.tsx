import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return { title: product?.title ?? "Product" };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">
        {product.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/70">
        {product.description}
      </p>

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
  );
}
