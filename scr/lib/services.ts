import { supabase } from "./supabase";

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: "contact" | "quote";
}

/**
 * Service layer — this is the only place the app talks to the backend.
 * Today it calls Supabase directly; when the ASP.NET Core API is ready,
 * only this file changes (e.g. swap to axios calls against the new API),
 * and every component and form stays exactly the same.
 */
export const contactService = {
  async submit(payload: ContactSubmission) {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert(payload)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
