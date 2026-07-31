import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { products } from "@/data/products";

export function ProductsPreview() {
  return (
    <section className="bg-mist/50 py-24">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Ready-built platforms
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              Product Solutions
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-1 text-sm font-semibold text-deep hover:text-primary md:flex"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.slice(0, 2).map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{product.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
