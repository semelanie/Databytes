"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

// Logos shown here should only be added once the organization has confirmed
// it's fine to be listed — see DATABYTES_SPEC.md §5.
const clients = [
  { name: "Seyviour", src: "/client-seyviour.png" },
  { name: "Seychelles Qualifications Authority", src: "/client-sqa.png" },
  {
    name: "National Institute of Health and Social Studies",
    src: "/client-nihss.jpeg",
  },
];

export function TrustedBy() {
  return (
    <section className="border-y border-mist bg-mist/50 py-12">
      <Container>
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-primary">
            Trusted Clients &amp; Partners
          </p>
          <span className="h-px w-8 bg-primary" />
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative h-14 w-14 grayscale transition-all duration-300 hover:grayscale-0"
              title={client.name}
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                sizes="56px"
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
