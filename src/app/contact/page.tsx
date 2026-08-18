import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { CopyableRow } from "@/components/sections/CopyableRow";
import { cms } from "@/lib/cms";

// Always render fresh — this page reads CMS content that admins
// can edit at any time, so it must not be statically cached.
export const dynamic = "force-dynamic";


export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const content = await cms.getSiteContent();
  const email = content.contact_email || "mgt@databytes.sc";
  const phone = content.contact_phone || "+248 254 1776";
  const address = content.contact_address || "Providence, Rue D'Iolinda, Mahé, Seychelles";
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Tell us about your project and we'll get back to you shortly."
      />
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-4 md:col-span-2">
            <CopyableRow
              icon={<Mail size={20} />}
              value={email}
              href={`mailto:${email}`}
            />
            <CopyableRow icon={<Phone size={20} />} value={phone} href={telHref} />
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-primary" size={20} />
              <span className="text-ink/80">{address}</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
