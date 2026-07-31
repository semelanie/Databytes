import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PhotoPageHeader } from "@/components/layout/PhotoPageHeader";
import { PhotoCollage } from "@/components/sections/PhotoCollage";

export const metadata: Metadata = { title: "About" };

const values = [
  "Innovation",
  "Integrity",
  "Professionalism",
  "Excellence",
  "Reliability",
  "Customer First",
  "Security",
  "Continuous Improvement",
];

export default function AboutPage() {
  return (
    <>
      <PhotoPageHeader
        eyebrow="About"
        title="About Us"
        description="Innovating today. Empowering tomorrow — Databytes Pty Ltd."
        image="https://images.unsplash.com/photo-1497366616365-e78dd380d3dd?w=1600&q=80&auto=format&fit=crop"
        imageAlt="Modern office lounge interior"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
      <Container className="py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">
              Sustainable Technology &amp; Digital Transformation
            </h2>
            <p className="mt-4 text-ink/70">
              Databytes Pty Ltd delivers innovative, secure, and reliable
              technology solutions that empower organizations across
              Seychelles to embrace digital transformation — combining
              local support with global standards.
            </p>
          </div>
          <PhotoCollage />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-deep">
              Mission
            </h2>
            <p className="mt-2 text-ink/70">
              To empower organizations through innovative, secure, and
              reliable technology solutions that simplify business operations
              and accelerate digital transformation.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-deep">
              Vision
            </h2>
            <p className="mt-2 text-ink/70">
              To become Seychelles&apos; leading technology solutions
              provider, recognized for innovation, quality, professionalism,
              and exceptional customer service.
            </p>
          </div>
        </div>

        <h2 className="mt-16 font-display text-xl font-semibold text-deep">
          Core Values
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {values.map((value) => (
            <li
              key={value}
              className="cursor-default rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-card"
            >
              {value}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
