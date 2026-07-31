import { createClient } from "@supabase/supabase-js";

// Falls back to a placeholder so `next build` doesn't crash before real
// Supabase env vars are configured (e.g. first CI run, or preview builds
// without secrets). Requests will simply fail at runtime until
// NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY are set for real.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Single Supabase client for the app. Only this file (and the service layer
// below) should ever import from @supabase/supabase-js — components go
// through src/lib/services.ts instead, so swapping to the future ASP.NET
// Core API means editing services.ts only.
export const supabase = createClient(url, anonKey);
