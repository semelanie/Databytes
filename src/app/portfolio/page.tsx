import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = { title: "Portfolio" };

// Populate with real case studies once client sign-off is confirmed for each.
const caseStudies = [
  {
    title: "Government Website Modernization",
    summary: "A responsive, accessible site rebuild for a public-sector client.",
  },
  {
    title: "Institutional Booking Platform",
    summary: "A room/resource booking system replacing a paper-based process.",
  },
];

export default function PortfolioPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">
        Portfolio &amp; Case Studies
      </h1>
      <p className="mt-3 max-w-2xl text-ink/70">
        A selection of recent work. Full write-ups coming soon.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {caseStudies.map((item) => (
          <Card key={item.title}>
            <h2 className="font-display text-lg font-semibold text-navy">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-ink/70">{item.summary}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
