"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { cms, type CmsProject, type ProjectCategory } from "@/lib/cms";
import { ImageUploader } from "@/components/admin/ImageUploader";

const CATEGORIES: ProjectCategory[] = ["Government", "Institutional", "Private"];

const BLANK: CmsProject = {
  slug: "",
  title: "",
  category: "Government",
  client: "",
  summary: "",
  delivery: [],
  tech_stack: [],
  image: "",
  sort_order: 99,
};

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<CmsProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<CmsProject | null>(null);

  function load() {
    cms.getProjects().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }

  useEffect(load, []);

  async function handleSave() {
    if (!editing) return;
    await cms.upsertProject(editing);
    setEditing(null);
    load();
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this project?")) return;
    await cms.deleteProject(slug);
    load();
  }

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy">Portfolio</h1>
        <button
          onClick={() => setEditing({ ...BLANK })}
          className="flex items-center gap-1.5 rounded-lg bg-deep px-3 py-2 text-sm font-semibold text-white hover:bg-primary"
        >
          <Plus size={14} /> New Project
        </button>
      </div>

      {editing && (
        <div className="mt-4 rounded-card bg-white p-6 shadow-card">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-ink">Slug (URL)</label>
              <input
                value={editing.slug}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Category</label>
              <select
                value={editing.category}
                onChange={(e) =>
                  setEditing({ ...editing, category: e.target.value as ProjectCategory })
                }
                className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
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
            <label className="text-sm font-medium text-ink">Client</label>
            <input
              value={editing.client}
              onChange={(e) => setEditing({ ...editing, client: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">Summary</label>
            <textarea
              rows={2}
              value={editing.summary}
              onChange={(e) => setEditing({ ...editing, summary: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">
              Delivery items (one per line)
            </label>
            <textarea
              rows={3}
              value={editing.delivery.join("\n")}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  delivery: e.target.value.split("\n").filter(Boolean),
                })
              }
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">
              Tech stack (comma separated)
            </label>
            <input
              value={editing.tech_stack.join(", ")}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  tech_stack: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                })
              }
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <ImageUploader
              label="Project image"
              value={editing.image}
              onChange={(url) => setEditing({ ...editing, image: url })}
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
              <p className="text-xs text-ink/50">
                {item.category} · {item.slug}
              </p>
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
