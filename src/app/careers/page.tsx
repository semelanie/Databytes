import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPageHeader } from "@/components/layout/PhotoPageHeader";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PhotoPageHeader
        eyebrow="Careers"
        title="Careers"
        description="We're not currently advertising open roles, but we're always happy to hear from people interested in working with us."
        image="https://images.unsplash.com/photo-1573496130407-57329f01f769?w=1600&q=80&auto=format&fit=crop"
        imageAlt="A team meeting around a table in a modern office"
        overlay="right"
      />
      <Container className="py-20">
        <Button href="/contact">Get in Touch</Button>
      </Container>
    </>
  );
}
