import { Container } from "@/components/ui/Container";

// Placeholder text marks until logo permission is confirmed per organization
// — see DATABYTES_SPEC.md §5. Replace each string with an <Image> once cleared.
const clients = [
  "Government",
  "Education",
  "Private Sector",
  "NGOs",
  "Residential",
];

export function TrustedBy() {
  return (
    <section className="border-y border-mist bg-mist/50 py-12">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wide text-ink/50">
          Trusted across sectors in Seychelles
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm font-semibold text-ink/40"
            >
              {client}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
