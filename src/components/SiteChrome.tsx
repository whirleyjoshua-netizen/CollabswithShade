import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#brands", label: "Brands" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-taupe/60 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-script text-4xl leading-none text-ink">Shadé</Link>
        <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.2em] sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-mocha">{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-taupe/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted">
        <p>© {site.fullName} · {site.location}</p>
        <div className="flex gap-6">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink">{s.label}</a>
          ))}
          <Link href="/contact" className="hover:text-ink">Email me</Link>
        </div>
      </div>
    </footer>
  );
}
