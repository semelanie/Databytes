import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { faqs } from "@/data/faq";

export const metadata: Metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions" />
      <Container className="py-20">
        <FAQAccordion items={faqs} />
      </Container>
    </>
  );
}
