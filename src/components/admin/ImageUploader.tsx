"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import { cms } from "@/lib/cms";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImageUploader({ value, onChange, label }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const url = await cms.uploadImage(file);
      onChange(url);
    } catch {
      setError("Upload failed. Check the site-images storage bucket exists.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {label && <p className="text-sm font-medium text-ink">{label}</p>}
      <div className="mt-2 flex items-center gap-4">
        {value && (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-mist">
            <Image src={value} alt="" fill sizes="64px" className="object-cover" />
          </div>
        )}
        <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-mist px-3 py-2 text-sm font-medium text-ink/70 hover:border-primary hover:text-primary">
          <Upload size={14} aria-hidden="true" />
          {uploading ? "Uploading…" : "Upload image"}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
            disabled={uploading}
          />
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Or paste an image URL"
        className="mt-2 w-full rounded-lg border border-mist px-3 py-1.5 text-xs text-ink/70 focus:border-primary focus:outline-none"
      />
    </div>
  );
}
