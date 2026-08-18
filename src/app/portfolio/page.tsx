import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { cms } from "@/lib/cms";

export const metadata: Metadata = { title: "Portfolio" };

// Always render fresh — this page reads CMS content that admins
// can edit at any time, so it must not be statically cached.
export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  const cmsProjects = await cms.getProjects();
  const projects =
    cmsProjects.length > 0
      ? cmsProjects.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          client: p.client,
          summary: p.summary,
          delivery: p.delivery,
          techStack: p.tech_stack,
          image: p.image,
        }))
      : undefined; // PortfolioGrid falls back to its own static list

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Portfolio & Case Studies"
        description="Real projects delivered across government, education, community, and private-sector clients."
      />
      <Container className="py-20">
        <PortfolioGrid projects={projects} />
      </Container>
    </>
  );
}
