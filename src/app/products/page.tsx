import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/sections/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Product Solutions"
        description="Ready-built platforms that can be tailored to your organization."
      />
      <Container className="py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              title={product.title}
              summary={product.summary}
              icon={<product.icon size={22} aria-hidden="true" />}
              accent={product.accent}
              badge={product.badge}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
