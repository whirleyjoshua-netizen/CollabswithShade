import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Heart, Sparkle, Wash } from "@/components/Decor";

export const metadata: Metadata = {
  title: `Email ${site.name} | ${site.fullName}`,
};

export default function ContactPage() {
  return (
    <main className="relative flex-1 overflow-hidden bg-gradient-to-br from-cream via-cream to-lavender-light">
      <Wash className="-top-24 -left-32 h-80 w-80" />
      <Wash className="top-1/3 -right-32 h-96 w-96 bg-lavender/40" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-lavender/70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -bottom-40 h-96 w-96 rounded-full bg-lavender/70" aria-hidden="true" />
      <Sparkle className="absolute top-16 left-[12%] h-10 w-10" />
      <Sparkle className="absolute top-32 left-[16%] h-4 w-4" />
      <Sparkle className="absolute top-[45%] right-[10%] h-9 w-9" />
      <Sparkle className="absolute top-[52%] right-[14%] h-4 w-4" />
      <Sparkle className="absolute bottom-24 left-[10%] h-7 w-7" />
      <section className="relative mx-auto max-w-2xl px-5 py-16 sm:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-mocha">Contact</p>
        <h1 className="font-title uppercase tracking-wide text-4xl sm:text-5xl">
          Let&apos;s work together
          <Heart className="ml-2 inline-block h-8 w-8 -translate-y-1.5 sm:h-10 sm:w-10" />
        </h1>
        <p className="mt-4 mb-10 text-lg text-muted">
          Have a brand, product, or idea you&rsquo;d love to bring to life? Tell me a little about it! I&rsquo;m always excited to explore new collaborations and create something special together.
        </p>
        <div className="rounded-3xl border border-lavender/60 bg-white/60 p-6 shadow-[0_20px_50px_-25px_rgba(120,90,150,0.45)] backdrop-blur-sm sm:p-8">
          <ContactForm email={site.email} />
        </div>
      </section>
    </main>
  );
}
