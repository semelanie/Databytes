# Databytes Pty Ltd — Corporate Website

Phase 1 scaffold. See `DATABYTES_SPEC.md` for the full tightened spec and
the phasing decisions that shaped this build.

## What's here

- Home, About, Services (index + detail template), Products (index +
  detail template), Portfolio, Careers, FAQ, Contact
- Working contact form (React Hook Form + Zod) wired to Supabase through a
  service layer (`src/lib/services.ts`) — swap this file, not the
  components, when the ASP.NET Core API replaces Supabase
- Brand tokens (colors, fonts, gradient) in `tailwind.config.ts` and
  `src/styles/globals.css`, including a dark-mode variable structure that's
  ready but not toggled yet
- `sitemap.xml` and `robots.txt` generated from the same data used for
  services/products, so new entries stay in sync automatically
- Content lives as typed data (`src/data/services.ts`,
  `src/data/products.ts`), not hardcoded in JSX — add an entry there and
  both the index page and detail page pick it up

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key
npm run dev
```

## Supabase setup

Create a `contact_submissions` table:

```sql
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  message text not null,
  type text not null check (type in ('contact', 'quote')),
  created_at timestamptz default now()
);
```

## What's intentionally not built yet (Phase 2)

- Remaining service/product detail pages — same template, add data +
  content
- AI chatbot, client portal, quote estimator, knowledge base
- Dark mode toggle (variables already exist)
- Blog/Insights, newsletter signup
- Real "Trusted By" logos — placeholder text marks are in place until
  logo-use permission is confirmed per organization (see spec §5)

## Deploying

Phase 1: push to GitHub, import into Vercel, add the Supabase env vars.
Phase 2 migration path (ASP.NET Core + IIS) is described in the spec —
no frontend rewrite required, only `src/lib/services.ts` changes.
