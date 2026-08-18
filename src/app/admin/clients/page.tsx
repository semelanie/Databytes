"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { cms, type CmsClient } from "@/lib/cms";
import { ImageUploader } from "@/components/admin/ImageUploader";

export default function AdminClientsPage() {
  const [items, setItems] = useState<CmsClient[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<CmsClient> | null>(null);

  function load() {
    cms.getClients().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }

  useEffect(load, []);

  async function handleSave() {
    if (!editing || !editing.name || !editing.logo_url) return;
    await cms.upsertClient({
      id: editing.id,
      name: editing.name,
      logo_url: editing.logo_url,
      wide: editing.wide ?? false,
      sort_order: editing.sort_order ?? 99,
    });
    setEditing(null);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Remove this client logo?")) return;
    await cms.deleteClient(id);
    load();
  }

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy">
          Trusted Clients &amp; Partners
        </h1>
        <button
          onClick={() => setEditing({ name: "", logo_url: "", wide: false, sort_order: 99 })}
          className="flex items-center gap-1.5 rounded-lg bg-deep px-3 py-2 text-sm font-semibold text-white hover:bg-primary"
        >
          <Plus size={14} /> New Client
        </button>
      </div>
      <p className="mt-1 text-sm text-ink/50">
        Only add logos for organizations that have confirmed it&apos;s fine to be listed.
      </p>

      {editing && (
        <div className="mt-4 rounded-card bg-white p-6 shadow-card">
          <div>
            <label className="text-sm font-medium text-ink">Client / Partner name</label>
            <input
              value={editing.name ?? ""}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <ImageUploader
              label="Logo"
              value={editing.logo_url ?? ""}
              onChange={(url) => setEditing({ ...editing, logo_url: url })}
            />
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              checked={editing.wide ?? false}
              onChange={(e) => setEditing({ ...editing, wide: e.target.checked })}
            />
            Wide logo (a horizontal wordmark, like Round Table Seychelles)
          </label>

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
          <div key={item.id} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- admin list thumbnail, arbitrary uploaded sizes */}
              <img src={item.logo_url} alt="" className="h-8 w-8 rounded object-contain" />
              <p className="font-medium text-navy">{item.name}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setEditing(item)}
                className="text-sm font-medium text-primary"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
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
