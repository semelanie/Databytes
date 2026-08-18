"use client";

import { useEffect, useState } from "react";
import { cms } from "@/lib/cms";
import { ImageUploader } from "@/components/admin/ImageUploader";

const FIELDS: { key: string; label: string; type: "text" | "textarea" | "image"; group: string }[] = [
  { key: "hero_eyebrow", label: "Eyebrow", type: "text", group: "Homepage Hero" },
  { key: "hero_title", label: "Headline", type: "textarea", group: "Homepage Hero" },
  { key: "hero_subtitle", label: "Subtitle", type: "textarea", group: "Homepage Hero" },

  { key: "about_banner_image", label: "Banner image", type: "image", group: "About Page" },
  { key: "about_intro_title", label: "Intro heading", type: "text", group: "About Page" },
  { key: "about_intro_text", label: "Intro text", type: "textarea", group: "About Page" },

  { key: "careers_banner_image", label: "Banner image", type: "image", group: "Careers Page" },
  { key: "careers_text", label: "Intro text", type: "textarea", group: "Careers Page" },

  { key: "contact_email", label: "Email", type: "text", group: "Contact Details" },
  { key: "contact_phone", label: "Phone", type: "text", group: "Contact Details" },
  { key: "contact_address", label: "Address", type: "text", group: "Contact Details" },

  { key: "footer_blurb", label: "Footer blurb", type: "textarea", group: "Footer" },
  { key: "logo_url", label: "Logo image", type: "image", group: "Footer" },
];

export default function AdminContentPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    cms.getSiteContent().then((data) => {
      setValues(data);
      setLoading(false);
    });
  }, []);

  async function saveField(key: string) {
    setSaving(key);
    try {
      await cms.setSiteContent(key, values[key] ?? "");
      setSaved(key);
      setTimeout(() => setSaved(null), 1500);
    } finally {
      setSaving(null);
    }
  }

  const groups = Array.from(new Set(FIELDS.map((f) => f.group)));

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <h1 className="font-display text-2xl font-bold text-navy">Site Content</h1>

      {groups.map((group) => (
        <div key={group} className="rounded-card bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold text-navy">{group}</h2>
          <div className="mt-4 space-y-5">
            {FIELDS.filter((f) => f.group === group).map((field) => (
              <div key={field.key}>
                {field.type === "image" ? (
                  <ImageUploader
                    label={field.label}
                    value={values[field.key] ?? ""}
                    onChange={(url) => {
                      setValues((v) => ({ ...v, [field.key]: url }));
                    }}
                  />
                ) : (
                  <div>
                    <label className="text-sm font-medium text-ink">{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        rows={3}
                        value={values[field.key] ?? ""}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [field.key]: e.target.value }))
                        }
                        className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm focus:border-primary focus:outline-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={values[field.key] ?? ""}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, [field.key]: e.target.value }))
                        }
                        className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm focus:border-primary focus:outline-none"
                      />
                    )}
                  </div>
                )}
                <div className="mt-2 flex items-center gap-3">
                  <button
                    onClick={() => saveField(field.key)}
                    disabled={saving === field.key}
                    className="rounded-lg bg-deep px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary disabled:opacity-50"
                  >
                    {saving === field.key ? "Saving…" : "Save"}
                  </button>
                  {saved === field.key && (
                    <span className="text-xs font-medium text-green-600">Saved</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
