"use client";

import { useState, ReactNode } from "react";
import { Check, Copy } from "lucide-react";

interface CopyableRowProps {
  icon: ReactNode;
  value: string;
  href?: string;
}

export function CopyableRow({ icon, value, href }: CopyableRowProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API can fail (permissions, insecure context) — fail silently,
      // the value is still visible and selectable as plain text.
    }
  }

  return (
    <div className="group flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
        {icon}
      </span>
      {href ? (
        <a href={href} className="text-ink/80 hover:text-primary">
          {value}
        </a>
      ) : (
        <span className="text-ink/80">{value}</span>
      )}
      <button
        onClick={handleCopy}
        aria-label={copied ? "Copied" : `Copy ${value}`}
        className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-ink/30 opacity-0 transition-all duration-200 hover:bg-mist hover:text-primary group-hover:opacity-100"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}
