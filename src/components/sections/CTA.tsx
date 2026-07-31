import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-brand-gradient py-20 text-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-bold">
          Ready to modernize your organization?
        </h2>
        <p className="max-w-xl text-white/80">
          Book a free consultation and we&apos;ll map out the right solution
          for your team.
        </p>
        <Button href="/contact" variant="secondary">
          Book a Free Consultation
        </Button>
      </Container>
    </section>
  );
}
