import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { links, type HubLink, type LinkIcon } from "@/content/links";
import { Heart, Sparkle, Wash } from "@/components/Decor";
import { SocialDiscs } from "@/components/SocialButtons";

export const metadata: Metadata = {
  title: `${site.fullName} | ${site.tagline}`,
  description: links.intro,
};

const iconPaths: Record<LinkIcon, React.ReactNode> = {
  briefcase: <path d="M4 8h16v11H4zM9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8M4 13h16" />,
  file: <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5ZM14 3v5h5M8.5 13h7M8.5 17h5" />,
  book: <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" />,
  bag: <path d="M5 8h14l-1 12H6L5 8ZM9 8V6.5a3 3 0 0 1 6 0V8" />,
  tag: <path d="M3 12V4h8l10 10-8 8L3 12ZM7.5 7.5h0" />,
  play: <path d="M7 4.5v15l12-7.5-12-7.5Z" />,
  amazon: <path d="M3 15c5 3.5 13 3.5 18 0M17 13.5l3.5 1.5-1 3.5M7 4h10l-1 7H8L7 4Z" />,
  heart: <path d="M12 20C8 16.5 3 13 3 8.6 3 6 5 4 7.5 4c2 0 3.5 1.4 4.5 3.4C13 5.4 14.5 4 16.5 4 19 4 21 6 21 8.6 21 13 16 16.5 12 20Z" />,
  mail: <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11ZM3.5 7l8.5 6 8.5-6" />,
  star: <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7L12 3Z" />,
};

/** One row in the link list. Links inside the site stay in the tab; outside ones open a new one. */
function LinkButton({ link }: { link: HubLink }) {
  const internal = link.href.startsWith("/");
  const newTab = link.href.startsWith("http");
  const className = `group flex items-center gap-4 rounded-full border py-2 pr-5 pl-2 shadow-[0_8px_20px_-12px_rgba(90,60,30,0.45)] transition hover:-translate-y-0.5 ${
    link.highlight ? "border-gold bg-[radial-gradient(circle_at_30%_20%,#efe4f7_0%,#cbb8de_70%)]" : "border-gold/60 bg-white/85 hover:bg-white"
  }`;
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lavender-light ring-1 ring-gold/50">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {iconPaths[link.icon]}
        </svg>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold uppercase tracking-[0.15em]">{link.label}</span>
        {link.note && <span className="block truncate text-xs text-muted">{link.note}</span>}
      </span>
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-ink transition group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true">
        <path d="m9 6 6 6-6 6" />
      </svg>
    </>
  );
  return internal ? (
    <Link href={link.href} className={className}>{inner}</Link>
  ) : (
    <a href={link.href} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} className={className}>{inner}</a>
  );
}

export default function Hub() {
  const visible = links.links.filter((l) => l.href);

  return (
    <main className="ombre relative flex-1 overflow-hidden">
      <Wash className="-top-24 -left-32 h-80 w-80" />
      <Wash className="top-1/3 -right-32 h-96 w-96 bg-lavender/40" />
      <Wash className="-bottom-24 -left-24 h-96 w-96" />
      <Sparkle className="absolute top-12 left-[10%] h-8 w-8" />
      <Sparkle className="absolute top-24 left-[6%] h-4 w-4" />
      <Sparkle className="absolute top-40 right-[10%] h-9 w-9" />
      <Sparkle className="absolute top-56 right-[14%] h-4 w-4" />

      <div className="relative mx-auto max-w-md px-4 pt-12 pb-16 text-center">
        {/* Who she is */}
        <div className="relative mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-[#f6e3bf] via-gold to-[#a8834f] p-1 shadow-[0_12px_28px_-10px_rgba(90,60,30,0.55)]">
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-cream">
            <Image src={links.avatar} alt={site.fullName} fill priority className="object-cover" sizes="8rem" />
          </div>
          <Sparkle className="absolute -top-1 -right-2 h-7 w-7" />
        </div>
        <h1 className="font-script mt-4 text-6xl leading-tight">{site.fullName}</h1>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mocha">{site.tagline}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-mocha">{site.location}</p>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">{links.intro}</p>
        <SocialDiscs size="sm" className="mt-5" />

        {/* Her two worlds */}
        <nav aria-label="Explore" className="mt-10 grid grid-cols-2 gap-4">
          {links.tabs.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-[2rem] border-4 border-white bg-[radial-gradient(circle_at_50%_30%,#efe4f7_0%,#cbb8de_60%,#a888c0_100%)] shadow-[0_20px_40px_-20px_rgba(90,60,120,0.7)] ring-2 ring-gold/60 transition hover:-translate-y-1"
            >
              {"cutout" in t && t.cutout ? (
                <Image src={t.photo} alt="" fill className="object-contain object-bottom pt-4 drop-shadow-lg transition group-hover:scale-[1.03]" sizes="14rem" />
              ) : (
                <Image src={t.photo} alt="" fill className="object-cover object-top transition group-hover:scale-[1.03]" sizes="14rem" />
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent px-3 pt-12 pb-4 text-cream">
                <span className="font-script block text-4xl leading-none">{t.title}</span>
                <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-cream/85">{t.caption}</span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Links */}
        <div className="mt-10 grid gap-3 text-left">
          {visible.map((l) => (
            <LinkButton key={l.label} link={l} />
          ))}
          <LinkButton link={{ label: "Email me", note: site.email, href: `mailto:${site.email}`, icon: "mail" }} />
        </div>

        {/* Brands */}
        <p className="font-script mt-12 text-4xl text-mocha">
          In good company
          <Heart className="ml-2 inline-block h-6 w-6 -translate-y-2" />
        </p>
        <div className="mt-4 flex justify-center gap-3">
          {site.brands.map((b) => (
            <a key={b.name} href={b.url} target="_blank" rel="noreferrer" aria-label={b.name} className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow ring-2 ring-lavender-light transition hover:-translate-y-0.5 hover:ring-lavender">
              <Image src={b.logo} alt={b.name} fill className={"fit" in b && b.fit === "contain" ? "object-contain p-1" : "object-cover"} sizes="3.5rem" />
            </a>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted">© {site.fullName} · {site.location}</p>
      </div>
    </main>
  );
}
