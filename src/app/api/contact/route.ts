import { NextResponse } from "next/server";

// Reserved for Phase 2: server-side validation, rate limiting, or spam
// filtering in front of the Supabase insert. The v1 contact form calls
// contactService directly from the client — see src/lib/services.ts.
export async function POST() {
  return NextResponse.json(
    { message: "Not implemented — form currently submits client-side." },
    { status: 501 }
  );
}
