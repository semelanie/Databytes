import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { products } from "@/data/products";

const BASE_URL = "https://www.databytes.sc";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/products",
    "/portfolio",
    "/careers",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const productPages = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...productPages];
}
