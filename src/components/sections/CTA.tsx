"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-brand-gradient py-20 text-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold"
        >
          Ready to modernize your organization?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-white/80"
        >
          Book a free consultation and we&apos;ll map out the right solution
          for your team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            href="mailto:mgt@databytes.sc?subject=Free%20Consultation%20Request"
            variant="secondary"
          >
            Book a Free Consultation
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
