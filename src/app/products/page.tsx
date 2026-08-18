import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/sections/ProductCard";
import { cms } from "@/lib/cms";
import { resolveIcon } from "@/lib/iconRegistry";
import { products as staticProducts } from "@/data/products";

export const metadata: Metadata = { title: "Products" };

// Always render fresh — this page reads CMS content that admins
// can edit at any time, so it must not be statically cached.
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const cmsProducts = await cms.getProducts();
  const products =
    cmsProducts.length > 0
      ? cmsProducts.map((p) => ({
          slug: p.slug,
          title: p.title,
          summary: p.summary,
          hook: p.hook,
          accent: p.accent,
          badge: p.badge,
          Icon: resolveIcon(p.icon),
        }))
      : staticProducts.map((p) => ({
          slug: p.slug,
          title: p.title,
          summary: p.summary,
          hook: p.hook,
          accent: p.accent,
          badge: p.badge,
          Icon: p.icon,
        }));

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Product Solutions"
        description="Ready-built platforms that can be tailored to your organization. Click a product to learn more."
      />
      <Container className="py-20">
        <p className="mb-6 text-sm text-ink/50">
          Tap any product to expand it for details, or tap again to collapse.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              title={product.title}
              summary={product.summary}
              hook={product.hook}
              icon={<product.Icon size={22} aria-hidden="true" />}
              accent={product.accent}
              badge={product.badge}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
