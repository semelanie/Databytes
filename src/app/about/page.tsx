import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PhotoPageHeader } from "@/components/layout/PhotoPageHeader";
import { PhotoCollage } from "@/components/sections/PhotoCollage";
import { MissionVision } from "@/components/sections/MissionVision";
import { CoreValues } from "@/components/sections/CoreValues";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PhotoPageHeader
        eyebrow="About"
        title="About Us"
        description="Innovating today. Empowering tomorrow — Databytes Pty Ltd."
        image="https://images.unsplash.com/photo-1752224543110-35faed040b91?w=1600&q=80&auto=format&fit=crop"
        imageAlt="A calm, plant-filled workspace with a laptop"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
        overlay="filter"
      />

      <Container className="py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Who We Are
          </p>
        </div>
        <div className="mt-6 grid items-center gap-12 md:grid-cols-2">
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
      </Container>

      {/* Full-width colored cards for stronger visual contrast than plain text */}
      <MissionVision />

      <Container className="py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            What We Stand For
          </p>
        </div>
        <h2 className="mt-2 font-display text-2xl font-bold text-navy">
          Core Values
        </h2>
        <p className="mt-1 text-sm text-ink/50">
          Hover or tap a card to see what it means to us.
        </p>
        <CoreValues />
      </Container>

      <CTA
        title="Ready to work with a team that lives these values?"
        subtitle="Let's talk about what your organization needs."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
