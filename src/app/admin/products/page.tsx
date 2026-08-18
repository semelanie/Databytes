"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { cms, type CmsProduct } from "@/lib/cms";
import { iconNames } from "@/lib/iconRegistry";

const BLANK: CmsProduct = {
  slug: "",
  title: "",
  summary: "",
  description: "",
  hook: "",
  accent: "#42A8E6",
  icon: "Database",
  badge: "",
  features: [],
  sort_order: 99,
};

export default function AdminProductsPage() {
  const [items, setItems] = useState<CmsProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<CmsProduct | null>(null);

  function load() {
    cms.getProducts().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }

  useEffect(load, []);

  async function handleSave() {
    if (!editing) return;
    await cms.upsertProduct(editing);
    setEditing(null);
    load();
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this product?")) return;
    await cms.deleteProduct(slug);
    load();
  }

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy">Products</h1>
        <button
          onClick={() => setEditing({ ...BLANK })}
          className="flex items-center gap-1.5 rounded-lg bg-deep px-3 py-2 text-sm font-semibold text-white hover:bg-primary"
        >
          <Plus size={14} /> New Product
        </button>
      </div>

      {editing && (
        <div className="mt-4 rounded-card bg-white p-6 shadow-card">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm font-medium text-ink">Slug (URL)</label>
              <input
                value={editing.slug}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Icon</label>
              <select
                value={editing.icon}
                onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
              >
                {iconNames.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Badge (2-3 letters)</label>
              <input
                value={editing.badge}
                onChange={(e) => setEditing({ ...editing, badge: e.target.value })}
                className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">Title</label>
            <input
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">Summary (short card text)</label>
            <textarea
              rows={2}
              value={editing.summary}
              onChange={(e) => setEditing({ ...editing, summary: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">Full description</label>
            <textarea
              rows={3}
              value={editing.description}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">
              Hook (catchy pop-out text)
            </label>
            <input
              value={editing.hook}
              onChange={(e) => setEditing({ ...editing, hook: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">
              Features (one per line)
            </label>
            <textarea
              rows={3}
              value={editing.features.join("\n")}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  features: e.target.value.split("\n").filter(Boolean),
                })
              }
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <label className="text-sm font-medium text-ink">Accent color</label>
            <input
              type="color"
              value={editing.accent}
              onChange={(e) => setEditing({ ...editing, accent: e.target.value })}
              className="h-8 w-14 rounded border border-mist"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleSave}
              className="rounded-lg bg-deep px-4 py-2 text-sm font-semibold text-white hover:bg-primary"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(null)}
              className="rounded-lg border border-mist px-4 py-2 text-sm font-medium text-ink/70"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 divide-y divide-mist rounded-card bg-white shadow-card">
        {items.map((item) => (
          <div key={item.slug} className="flex items-center justify-between p-4">
            <div>
              <p className="font-medium text-navy">{item.title}</p>
              <p className="text-xs text-ink/50">{item.slug}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setEditing(item)}
                className="text-sm font-medium text-primary"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.slug)}
                className="text-ink/40 hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
