import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoPageHeader } from "@/components/layout/PhotoPageHeader";
import { cms } from "@/lib/cms";

// Always render fresh — this page reads CMS content that admins
// can edit at any time, so it must not be statically cached.
export const dynamic = "force-dynamic";


export const metadata: Metadata = { title: "Careers" };

const DEFAULT_BANNER =
  "https://images.unsplash.com/photo-1573496130407-57329f01f769?w=1600&q=80&auto=format&fit=crop";

export default async function CareersPage() {
  const content = await cms.getSiteContent();

  return (
    <>
      <PhotoPageHeader
        eyebrow="Careers"
        title="Careers"
        description={
          content.careers_text ||
          "We're not currently advertising open roles, but we're always happy to hear from people interested in working with us."
        }
        image={content.careers_banner_image || DEFAULT_BANNER}
        imageAlt="A team meeting around a table in a modern office"
        overlay="right"
      />
      <Container className="py-20">
        <Button href="/contact">Get in Touch</Button>
      </Container>
    </>
  );
}
