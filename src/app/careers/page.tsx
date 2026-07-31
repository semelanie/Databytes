import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <Container className="py-20">
      <h1 className="font-display text-4xl font-bold text-navy">Careers</h1>
      <p className="mt-4 max-w-2xl text-ink/70">
        We&apos;re not currently advertising open roles, but we&apos;re
        always happy to hear from people interested in working with us.
      </p>
      <div className="mt-8">
        <Button href="/contact">Get in Touch</Button>
      </div>
    </Container>
  );
}
