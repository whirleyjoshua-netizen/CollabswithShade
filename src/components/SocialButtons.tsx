import Link from "next/link";
import { site } from "@/content/site";
import { Sparkle } from "@/components/Decor";

type Social = (typeof site.socials)[number];
type Icon = Social["icon"] | "email";

function SocialIcon({ icon, className = "" }: { icon: Icon; className?: string }) {
  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth={2.2} strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </svg>
    );
  }
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth={2.2} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" className="fill-current stroke-none" />
      </svg>
    );
  }
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
        <path d="M13.6 22v-8.4h2.9l.5-3.5h-3.4V7.9c0-1 .4-1.8 1.9-1.8h1.6V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.7H7.3v3.5h2.9V22h3.4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.4 6.4 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.4 1.4V6.6a4.5 4.5 0 0 1-4.4-4.6Z" />
    </svg>
  );
}

/** Glossy lavender disc with a gold rim, like an enamel pin. */
function Disc({ icon, size }: { icon: Icon; size: "lg" | "sm" }) {
  const lg = size === "lg";
  return (
    <span
      className={`relative block shrink-0 rounded-full bg-gradient-to-br from-[#f6e3bf] via-gold to-[#a8834f] shadow-[0_6px_14px_-4px_rgba(90,60,30,0.45)] ${lg ? "h-20 w-20 p-[5px] sm:h-24 sm:w-24" : "h-11 w-11 p-[3px]"}`}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#eadcf3_0%,#c8afdb_45%,#a888c0_100%)] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(80,50,110,0.25)]">
        <SocialIcon icon={icon} className={`text-cream drop-shadow-[0_1px_1px_rgba(140,100,50,0.6)] ${lg ? "h-9 w-9 sm:h-11 sm:w-11" : "h-5 w-5"}`} />
      </span>
      {lg && <Sparkle className="absolute top-1 right-1 h-4 w-4 fill-white/90" />}
    </span>
  );
}

/** The round buttons under the location at the top. */
export function SocialDiscs({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center gap-5 sm:gap-8 ${className}`}>
      {site.socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="transition hover:-translate-y-1">
          <Disc icon={s.icon} size="lg" />
        </a>
      ))}
    </div>
  );
}

const pill =
  "flex w-[14.5rem] items-center gap-2.5 rounded-full border border-gold/70 bg-gradient-to-b from-white to-cream py-1.5 pr-4 pl-1.5 shadow-[0_6px_16px_-6px_rgba(90,60,30,0.35)] transition hover:-translate-y-0.5";

function PillContent({ icon, label }: { icon: Icon; label: string }) {
  return (
    <>
      <Disc icon={icon} size="sm" />
      <span className="h-7 w-px bg-gold/60" aria-hidden="true" />
      <span className="min-w-0 flex-1 text-left text-[0.8rem] font-medium uppercase tracking-[0.22em] text-ink">{label}</span>
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-ink" strokeWidth={2} aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
    </>
  );
}

/** The oval "Email me" button, matching the social ones. */
export function EmailPill({ className = "" }: { className?: string }) {
  return (
    <Link href="/contact" className={`${pill} ${className}`}>
      <PillContent icon="email" label="Email me" />
    </Link>
  );
}

/** The oval buttons under "Let's Connect". */
export function SocialPills({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {site.socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={pill}>
          <PillContent icon={s.icon} label={s.label} />
        </a>
      ))}
    </div>
  );
}
