"use client";

import { useState } from "react";
import type { DiscountCode } from "@/content/links";

/** The "Discount codes" button on the home page. Tapping it opens the codes right below it. */
export function CodesDropdown({ codes }: { codes: DiscountCode[] }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(code: string, key: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
    } catch {
      // Clipboard blocked: the code is still on screen to copy by hand.
    }
  }

  return (
    <div className={`overflow-hidden rounded-[1.75rem] border border-gold/60 bg-white/85 shadow-[0_8px_20px_-12px_rgba(90,60,30,0.45)] transition ${open ? "bg-white" : "hover:bg-white"}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="discount-codes"
        className="group flex w-full items-center gap-4 py-2 pr-5 pl-2 text-left"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender-light ring-1 ring-gold/50">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12V4h8l10 10-8 8L3 12ZM7.5 7.5h0" />
          </svg>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold uppercase tracking-[0.15em]">Discount codes</span>
          <span className="block text-xs text-muted">Save on some of my favorite brands</span>
        </span>
        <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 fill-none stroke-ink transition ${open ? "rotate-90" : ""}`} strokeWidth={2} aria-hidden="true">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div id="discount-codes" hidden={!open} className="grid gap-2 border-t border-gold/30 px-3 pt-3 pb-3">
        {codes.length === 0 && <p className="px-2 py-1 text-center text-xs text-muted">New codes coming soon!</p>}
        {codes.map((c) => {
          const key = `${c.brand}-${c.code}`;
          return (
            <div key={key} className="flex items-center gap-3 rounded-2xl bg-lavender-light/50 px-4 py-3">
              <div className="min-w-0 flex-1">
                <a href={c.url} target="_blank" rel="noreferrer" className="block text-sm font-semibold hover:underline">{c.brand}</a>
                <span className="block text-xs text-muted">{c.deal}</span>
              </div>
              <button
                type="button"
                onClick={() => copy(c.code, key)}
                className="shrink-0 rounded-full border border-dashed border-mocha px-3 py-1.5 font-mono text-xs font-semibold tracking-wider transition hover:bg-white"
                aria-label={`Copy code ${c.code}`}
              >
                {copied === key ? "Copied!" : c.code}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
