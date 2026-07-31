# Databytes Pty Ltd — Corporate Website Spec (v2, tightened)

This is a working, buildable version of the master prompt. Where the original left
things open, a decision is made below so a build can start immediately — each is
flagged **[DECISION]** and easy to override later.

## 1. Identity

- **Company:** Databytes Pty Ltd — IT solutions provider, Seychelles
- **Tagline [DECISION]:** *"Innovating Today. Empowering Tomorrow."*
  (kept as the primary; the other two options work fine as secondary line/meta description
  variants if you want to A/B them later)
- **Mission / Vision / Values:** as originally written — no changes needed, these are fine as-is.

## 2. Visual system (brief already pins this down — followed exactly)

| Token | Value |
|---|---|
| Primary Blue | `#42A8E6` |
| Deep Blue | `#1E3A8A` |
| Navy | `#1B1464` |
| White | `#FFFFFF` |
| Light Grey | `#F4F7FA` |
| Dark Text | `#1F2937` |
| Hero gradient | `linear-gradient(135deg, #1B1464 0%, #1E3A8A 45%, #42A8E6 100%)` |

- Headings: **Sora** (display, more distinctive than Poppins for a tech brand) — **[DECISION]** dropped Poppins as a second heading face; one display face is cleaner than two competing ones.
- Body: **Inter**
- Icons: Lucide (primary), Heroicons only where Lucide is missing something specific
- Cards: white, 18px radius, soft shadow, blue accent on hover

**Dark mode [DECISION]:** Build the CSS-variable structure for it now (so it's cheap later),
but ship light mode only in v1. Toggling a full dark palette across 10+ product pages before
any content is finalized is wasted design time — do it once content is stable.

## 3. Stack (unchanged — this part of the brief is solid)

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion,
  React Hook Form + Zod, TanStack Query, Axios
- **Backend (now):** Supabase (Postgres, Auth, Storage) via a service-layer abstraction —
  no component talks to Supabase directly
- **Backend (later):** ASP.NET Core 9 + EF Core + JWT/RBAC, same Postgres schema, swapped
  in behind the same service layer
- **Hosting:** Vercel + GitHub now → Windows Server/IIS + Docker later

## 4. Scope phasing **[DECISION — the main change from the original brief]**

The original brief lists ~15 services, ~10 product pages, an AI chatbot, a client portal,
a quote estimator, a knowledge base, and full Light+Dark WCAG 2.2 AA compliance, all as
one deliverable. That's a 3–6 month enterprise build, not a v1. Splitting it:

**Phase 1 (v1 — what gets scaffolded now)**
- Home, About, Services (index + one detailed template), Products (index + one detailed
  template), Portfolio/Case Studies (index), Contact, Careers, FAQ
- Contact form + "Request a Quote" form (real submission to Supabase)
- Trusted-By logo strip (placeholder logos until permitted ones are confirmed — see below)
- SEO basics: sitemap, robots.txt, OG metadata, semantic HTML
- Responsive, keyboard-navigable, Lighthouse-conscious from the start

**Phase 2 (structure left ready, not built yet)**
- Remaining service/product detail pages (same template, new content)
- AI chatbot, client portal, quote estimator (as a multi-step form), knowledge base
- Dark mode toggle
- Blog/Insights (with CMS), newsletter signup
- Live chat, mega menu, breadcrumb navigation
- Technology Partners logo strip (Microsoft, Cisco, Ubiquiti, etc. — needs partner-status confirmation, same permission issue as client logos)
- Testimonials (no real quotes supplied yet)
- Working hours on the contact page (not specified yet — placeholder needed or real hours from the client)
- Privacy Policy / Terms & Conditions pages (no legal copy supplied)
- Downloadable company profile PDF

## 6. Second reference prompt (merged)

A second, overlapping "Website Development Prompt" was supplied later, written for
generic AI website builders (ChatGPT/Lovable/Bolt). Where it introduced content not
already in v1 and cheap to add, it's now folded in directly: **Why Choose Databytes**,
**Industries We Serve**, and **Our Process** are now homepage sections, plus a
scroll-to-top button and a cookie consent banner. Where it repeated what v1 already
had (React/Next.js/Tailwind/Framer Motion stack, similar service list, SEO basics),
no change was needed. Everything else it introduced beyond v1 is filed under Phase 2
above rather than built now, per the same phasing logic as before.

That prompt also referenced a live site at `databytes.sc` as a citation source —
worth checking against for real company copy (About Us story, actual working hours,
existing testimonials) before writing placeholder content for those sections., live project showcase

## 5. One compliance flag, not a design note

The "Trusted By" list (Attorney General's Office, MECENR, NIHSS, SQA, FoodPro, Sibert
Residence, etc.) should only go live for organizations Databytes has actual written
permission to display as clients. Until that's confirmed per-logo, v1 ships with generic
placeholder marks in that slot rather than real government/client logos.

## 6. Folder structure (as scaffolded)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx            # index
│   │   └── [slug]/page.tsx     # detail template
│   ├── products/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── portfolio/page.tsx
│   ├── careers/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── layout/ (Navbar, Footer)
│   ├── sections/ (Hero, TrustedBy, ServicesPreview, ProductsPreview, CTA)
│   └── ui/ (Button, Card, Container)
├── lib/ (supabase client, service layer)
├── data/ (services.ts, products.ts — content as typed data, not hardcoded JSX)
├── types/
└── styles/globals.css
```
