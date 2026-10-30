"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/content/my-world";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="relative flex flex-col rounded-3xl bg-white p-3 shadow-[0_10px_30px_-12px_rgba(26,26,26,0.3)]">
      {p.favorite && (
        <span className="absolute top-5 left-5 z-10 rounded-full bg-ink/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cream">Shadé&apos;s favorite</span>
      )}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-lavender-light via-cream to-taupe/50">
        {p.image ? (
          <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(min-width: 1024px) 18rem, (min-width: 640px) 33vw, 50vw" />
        ) : (
          <span className="font-title absolute inset-0 flex items-center justify-center text-4xl text-mocha/70">{initials(p.brand)}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-1.5 pt-3 pb-1">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-mocha">{p.brand}</span>
        <h3 className="mt-0.5 font-semibold leading-snug">{p.name}</h3>
        <p className="mt-1.5 flex-1 font-serif text-sm italic leading-relaxed text-muted">&ldquo;{p.why}&rdquo;</p>
        {p.code && (
          <p className="mt-3 text-xs text-muted">
            Code <span className="rounded-md border border-dashed border-gold px-2 py-0.5 font-semibold tracking-wider text-ink">{p.code}</span>
          </p>
        )}
        <a
          href={p.url}
          target="_blank"
          rel="noreferrer sponsored"
          className="mt-4 rounded-full border border-gold/70 bg-gradient-to-b from-white to-cream py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_6px_16px_-8px_rgba(90,60,30,0.35)] transition hover:-translate-y-0.5"
        >
          Shop
        </a>
      </div>
    </article>
  );
}

/** Category tabs over a grid of product cards. */
export function ProductShop({ products }: { products: Product[] }) {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === active}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
              c === active ? "border-ink bg-ink text-cream" : "border-gold/70 bg-white/70 text-ink hover:bg-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {shown.map((p) => (
          <ProductCard key={p.name} p={p} />
        ))}
      </div>
    </>
  );
}
