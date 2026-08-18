import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { cms } from "@/lib/cms";
import { faqs as staticFaqs } from "@/data/faq";

// Always render fresh — this page reads CMS content that admins
// can edit at any time, so it must not be statically cached.
export const dynamic = "force-dynamic";


export const metadata: Metadata = { title: "FAQ" };

export default async function FAQPage() {
  const cmsFaqs = await cms.getFaqs();
  const items =
    cmsFaqs.length > 0
      ? cmsFaqs.map((f) => ({ q: f.question, a: f.answer }))
      : staticFaqs;

  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions" />
      <Container className="py-20">
        <FAQAccordion items={items} />
      </Container>
    </>
  );
}
