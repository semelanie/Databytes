import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

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
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">About Us</h1>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-deep">
            Mission
          </h2>
          <p className="mt-2 text-ink/70">
            To empower organizations through innovative, secure, and reliable
            technology solutions that simplify business operations and
            accelerate digital transformation.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-deep">
            Vision
          </h2>
          <p className="mt-2 text-ink/70">
            To become Seychelles&apos; leading technology solutions provider,
            recognized for innovation, quality, professionalism, and
            exceptional customer service.
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
            className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-ink"
          >
            {value}
          </li>
        ))}
      </ul>
    </Container>
  );
}
