import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { myWorld } from "@/content/my-world";
import { SectionTitle, Sparkle, Wash } from "@/components/Decor";
import { GuideWaitlist } from "@/components/GuideWaitlist";
import { ProductShop } from "@/components/ProductShop";

export const metadata: Metadata = {
  title: "My World | Collabs with Shadé",
  description: myWorld.intro.text,
};

const jump = [
  { href: "#guide", label: "The Guide" },
  { href: "#routine", label: "Evie's Routine" },
  { href: "#shop", label: "Shop" },
  { href: "#codes", label: "Codes" },
];

/** A soft book cover for the guide, until there's a real one. */
function GuideCover({ title }: { title: string }) {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[17rem] rotate-[-3deg] rounded-r-2xl rounded-l-md bg-[radial-gradient(circle_at_30%_20%,#efe4f7_0%,#cbb8de_55%,#a888c0_100%)] p-6 shadow-[0_30px_60px_-25px_rgba(90,60,120,0.7)] ring-4 ring-gold/60">
      <span className="absolute inset-y-0 left-3 w-px bg-white/50" aria-hidden="true" />
      <Sparkle className="absolute top-5 right-5 h-6 w-6 fill-white/90" />
      <Sparkle className="absolute top-12 right-10 h-3 w-3 fill-white/90" />
      <div className="flex h-full flex-col justify-end text-ink">
        <p className="font-script text-4xl leading-none text-white [text-shadow:0_1px_3px_rgba(80,50,110,0.5)]">Shadé&apos;s</p>
        <p className="font-title mt-2 text-4xl leading-[0.95] uppercase">{title.replace(/^The /, "")}</p>
        <p className="mt-3 text-[0.55rem] font-semibold uppercase tracking-[0.2em] whitespace-nowrap text-ink/70">Routines · Swaps · Real life</p>
      </div>
    </div>
  );
}

export default function MyWorldPage() {
  const { intro, guide, routine, products, codes } = myWorld;
  const available = guide.status === "available" && guide.buyUrl;

  return (
    <main className="flex-1 overflow-x-clip">
      {/* Intro */}
      <section className="ombre relative">
        <Wash className="-top-24 -left-32 h-80 w-80" />
        <Sparkle className="absolute top-14 left-[12%] h-8 w-8" />
        <Sparkle className="absolute top-28 left-[8%] h-4 w-4" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-16 md:grid-cols-[3fr_2fr] md:gap-14">
          <div className="text-center md:text-left">
            <h1 className="font-script py-2 text-7xl leading-none sm:text-8xl lg:text-9xl">{intro.title}</h1>
            <p className="font-title mt-4 text-3xl uppercase sm:text-4xl">{intro.script}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:max-w-none">{intro.text}</p>
            <nav className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
              {jump.map((j) => (
                <a key={j.href} href={j.href} className="rounded-full border border-gold/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white">
                  {j.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="relative mx-auto w-full max-w-[16rem]">
            <Sparkle className="absolute -top-3 -right-3 z-10 h-9 w-9" />
            <Sparkle className="absolute bottom-10 -left-5 z-10 h-6 w-6" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full border-4 border-white shadow-xl">
              <Image src={intro.photo} alt={site.fullName} fill priority className="object-cover object-top" sizes="16rem" />
            </div>
          </div>
        </div>
      </section>

      {/* The guide */}
      <section id="guide" className="ombre relative scroll-mt-20 py-20">
        <Wash className="-right-24 top-10 h-80 w-80 bg-lavender/40" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-5 md:grid-cols-[2fr_3fr]">
          <GuideCover title={guide.title} />
          <div>
            <span className="inline-block rounded-full bg-gold/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-mocha">
              {available ? "Out now" : "Coming soon"}
            </span>
            <h2 className="font-title mt-4 text-5xl leading-[0.95] uppercase">{guide.title}</h2>
            <p className="font-script mt-2 text-4xl text-mocha">{guide.subtitle}</p>
            <ul className="mt-6 grid gap-2.5">
              {guide.inside.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <Sparkle className="mt-1 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              {available ? (
                <a
                  href={guide.buyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full border-2 border-gold bg-[radial-gradient(circle_at_35%_25%,#c7aee0_0%,#9a76bd_55%,#7a589e_100%)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_8px_18px_-8px_rgba(110,80,150,0.7)] transition hover:-translate-y-0.5"
                >
                  Get the guide{guide.price && ` · ${guide.price}`}
                </a>
              ) : (
                <>
                  <p className="mb-3 text-sm font-semibold text-ink">Be the first to know when it&apos;s ready.</p>
                  <GuideWaitlist email={site.email} guide={guide.title} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Evie's routine */}
      <section id="routine" className="ombre relative scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="Evie's Skin Routine" script="What a good skin day looks like" center />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {routine.map((r, i) => (
              <li key={r.step} className="relative rounded-3xl bg-white/80 p-6 shadow-[0_10px_30px_-15px_rgba(26,26,26,0.3)]">
                <span className="font-title flex h-12 w-12 items-center justify-center rounded-full bg-lavender/70 text-2xl">{i + 1}</span>
                <h3 className="font-title mt-4 text-2xl uppercase">{r.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
                <a href={r.url} target="_blank" rel="noreferrer sponsored" className="mt-4 inline-block text-sm font-semibold underline decoration-lavender decoration-2 underline-offset-4 hover:text-mocha">
                  {r.product} →
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="ombre relative scroll-mt-20 py-20">
        <Sparkle className="absolute top-14 right-[12%] h-9 w-9" />
        <Sparkle className="absolute top-28 right-[9%] h-4 w-4" />
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="Shop My Favorites" script="Tried, tested, and loved" center />
          <ProductShop products={products} />
        </div>
      </section>

      {/* Codes */}
      <section id="codes" className="relative scroll-mt-20 bg-cream py-20">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle title="Codes" script="A little something off" center />
          <div className="grid gap-4 sm:grid-cols-2">
            {codes.map((c) => (
              <a key={c.brand} href={c.url} target="_blank" rel="noreferrer sponsored" className="flex items-center justify-between gap-4 rounded-3xl border border-gold/60 bg-white p-5 shadow-[0_10px_30px_-18px_rgba(26,26,26,0.35)] transition hover:-translate-y-0.5">
                <span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-mocha">{c.brand}</span>
                  <span className="mt-1 block text-sm text-muted">{c.deal}</span>
                </span>
                <span className="rounded-xl border-2 border-dashed border-gold px-3 py-2 font-semibold tracking-widest">{c.code}</span>
              </a>
            ))}
          </div>
          <div className="mt-14 space-y-3 border-t border-taupe/60 pt-6 text-xs leading-relaxed text-muted">
            <p>{myWorld.disclosure}</p>
            <p>{myWorld.medical}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
