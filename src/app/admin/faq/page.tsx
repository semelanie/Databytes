"use client";

import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";
import { cms, type CmsFaq } from "@/lib/cms";

export default function AdminFaqPage() {
  const [items, setItems] = useState<CmsFaq[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<CmsFaq> | null>(null);

  function load() {
    cms.getFaqs().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }

  useEffect(load, []);

  async function handleSave() {
    if (!editing || !editing.question || !editing.answer) return;
    await cms.upsertFaq({
      id: editing.id,
      question: editing.question,
      answer: editing.answer,
      sort_order: editing.sort_order ?? 99,
    } as CmsFaq);
    setEditing(null);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this FAQ?")) return;
    await cms.deleteFaq(id);
    load();
  }

  if (loading) return <p className="text-sm text-ink/50">Loading…</p>;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy">FAQ</h1>
        <button
          onClick={() => setEditing({ question: "", answer: "", sort_order: 99 })}
          className="flex items-center gap-1.5 rounded-lg bg-deep px-3 py-2 text-sm font-semibold text-white hover:bg-primary"
        >
          <Plus size={14} /> New Question
        </button>
      </div>

      {editing && (
        <div className="mt-4 rounded-card bg-white p-6 shadow-card">
          <div>
            <label className="text-sm font-medium text-ink">Question</label>
            <input
              value={editing.question ?? ""}
              onChange={(e) => setEditing({ ...editing, question: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-ink">Answer</label>
            <textarea
              rows={3}
              value={editing.answer ?? ""}
              onChange={(e) => setEditing({ ...editing, answer: e.target.value })}
              className="mt-1 w-full rounded-lg border border-mist px-3 py-2 text-sm"
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
          <div key={item.id} className="flex items-center justify-between p-4">
            <p className="font-medium text-navy">{item.question}</p>
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
