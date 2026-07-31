import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We work with government, education, private-sector, and residential clients across Seychelles.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — managed IT services and support plans are available for all our builds.",
  },
  {
    q: "Can you work with an existing system?",
    a: "Yes, we regularly integrate with or migrate existing systems rather than starting from scratch.",
  },
];

export default function FAQPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">
        Frequently Asked Questions
      </h1>

      <dl className="mt-10 divide-y divide-mist">
        {faqs.map((item) => (
          <div key={item.q} className="py-6">
            <dt className="font-display text-lg font-semibold text-navy">
              {item.q}
            </dt>
            <dd className="mt-2 text-ink/70">{item.a}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
