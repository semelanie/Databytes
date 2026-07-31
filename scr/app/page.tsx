import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">
        Product Solutions
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        Ready-built platforms that can be tailored to your organization.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <Card className="h-full">
              <h2 className="font-display text-lg font-semibold text-navy">
                {product.title}
              </h2>
              <p className="mt-2 text-sm text-ink/70">{product.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
