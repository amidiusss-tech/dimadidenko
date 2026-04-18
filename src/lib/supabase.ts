import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/** Returns a singleton Supabase client. Call only when env vars are set (`isSupabaseConfigured`). */
export function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  if (!url || !key) {
    throw new Error("Supabase environment variables are missing.");
  }
  if (!client) {
    client = createClient(url, key);
  }
  return client;
}
