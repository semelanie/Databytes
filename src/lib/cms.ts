import { supabase } from "./supabase";

export interface CmsService {
  slug: string;
  title: string;
  summary: string;
  description: string;
  hook: string;
  accent: string;
  icon: string;
  benefits: string[];
  sort_order: number;
}

export interface CmsProduct {
  slug: string;
  title: string;
  summary: string;
  description: string;
  hook: string;
  accent: string;
  icon: string;
  badge: string;
  features: string[];
  sort_order: number;
}

export type ProjectCategory = "Government" | "Institutional" | "Private";

export interface CmsProject {
  slug: string;
  title: string;
  category: ProjectCategory;
  client: string;
  summary: string;
  delivery: string[];
  tech_stack: string[];
  image: string;
  sort_order: number;
}

export interface CmsFaq {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
}

export interface CmsClient {
  id: string;
  name: string;
  logo_url: string;
  wide: boolean;
  sort_order: number;
}

/**
 * CMS service layer — every page and every admin screen goes through here,
 * never straight to `supabase`. Falls back to an empty/default result if a
 * table isn't reachable yet (e.g. before the schema has been run), so the
 * site degrades gracefully instead of crashing.
 */
export const cms = {
  // ---- Site-wide singleton text/image fields ----
  async getSiteContent(): Promise<Record<string, string>> {
    const { data, error } = await supabase.from("site_content").select("key, value");
    if (error || !data) return {};
    return Object.fromEntries(data.map((row) => [row.key, row.value]));
  },

  async setSiteContent(key: string, value: string) {
    const { error } = await supabase
      .from("site_content")
      .upsert({ key, value, updated_at: new Date().toISOString() });
    if (error) throw error;
  },

  // ---- Services ----
  async getServices(): Promise<CmsService[]> {
    const { data, error } = await supabase
      .from("cms_services")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data) return [];
    return data as CmsService[];
  },

  async upsertService(service: CmsService) {
    const { error } = await supabase.from("cms_services").upsert(service);
    if (error) throw error;
  },

  async deleteService(slug: string) {
    const { error } = await supabase.from("cms_services").delete().eq("slug", slug);
    if (error) throw error;
  },

  // ---- Products ----
  async getProducts(): Promise<CmsProduct[]> {
    const { data, error } = await supabase
      .from("cms_products")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data) return [];
    return data as CmsProduct[];
  },

  async upsertProduct(product: CmsProduct) {
    const { error } = await supabase.from("cms_products").upsert(product);
    if (error) throw error;
  },

  async deleteProduct(slug: string) {
    const { error } = await supabase.from("cms_products").delete().eq("slug", slug);
    if (error) throw error;
  },

  // ---- Portfolio projects ----
  async getProjects(): Promise<CmsProject[]> {
    const { data, error } = await supabase
      .from("cms_projects")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data) return [];
    return data as CmsProject[];
  },

  async upsertProject(project: CmsProject) {
    const { error } = await supabase.from("cms_projects").upsert(project);
    if (error) throw error;
  },

  async deleteProject(slug: string) {
    const { error } = await supabase.from("cms_projects").delete().eq("slug", slug);
    if (error) throw error;
  },

  // ---- FAQ ----
  async getFaqs(): Promise<CmsFaq[]> {
    const { data, error } = await supabase
      .from("cms_faq")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data) return [];
    return data as CmsFaq[];
  },

  async upsertFaq(faq: Partial<CmsFaq> & { question: string; answer: string }) {
    const { error } = await supabase.from("cms_faq").upsert(faq);
    if (error) throw error;
  },

  async deleteFaq(id: string) {
    const { error } = await supabase.from("cms_faq").delete().eq("id", id);
    if (error) throw error;
  },

  // ---- Trusted clients / partner logos ----
  async getClients(): Promise<CmsClient[]> {
    const { data, error } = await supabase
      .from("cms_clients")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data) return [];
    return data as CmsClient[];
  },

  async upsertClient(client: Partial<CmsClient> & { name: string; logo_url: string }) {
    const { error } = await supabase.from("cms_clients").upsert(client);
    if (error) throw error;
  },

  async deleteClient(id: string) {
    const { error } = await supabase.from("cms_clients").delete().eq("id", id);
    if (error) throw error;
  },

  // ---- Image upload ----
  async uploadImage(file: File): Promise<string> {
    const ext = file.name.split(".").pop();
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("site-images").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("site-images").getPublicUrl(path);
    return data.publicUrl;
  },
};
