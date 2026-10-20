// The mood board's accents: gold sparkles, lavender hearts, brush strokes, and soft lavender washes.

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none fill-gold ${className}`} aria-hidden="true">
      <path d="M12 0C12.7 7.3 16.7 11.3 24 12 16.7 12.7 12.7 16.7 12 24 11.3 16.7 7.3 12.7 0 12 7.3 11.3 11.3 7.3 12 0Z" />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`pointer-events-none fill-none stroke-lavender ${className}`} strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
      <path d="M12 21C8 17.5 2.5 13.4 2.6 8.6 2.7 5.6 5 3.6 7.6 3.9c2 .2 3.4 1.7 4.4 4 .9-2.4 2.4-3.9 4.5-4 2.6-.1 4.8 2 4.8 4.9-.1 4.6-5.4 8.9-9.3 12.6" />
    </svg>
  );
}

export function Brush({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" className={`pointer-events-none fill-none stroke-lavender ${className}`} strokeWidth={5} strokeLinecap="round" aria-hidden="true">
      <path d="M4 14C40 6 90 4 196 8" />
    </svg>
  );
}

/** A soft blurred lavender shape behind a section. Position it with className. */
export function Wash({ className = "" }: { className?: string }) {
  return <div className={`pointer-events-none absolute rounded-full bg-lavender/50 blur-3xl ${className}`} aria-hidden="true" />;
}

/** Anton all-caps title with a lavender heart, and a handwritten subheading under it. */
export function SectionTitle({ title, script, center = false }: { title: React.ReactNode; script?: string; center?: boolean }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <h2 className="font-title text-5xl leading-[0.95] uppercase sm:text-6xl">
        {title}
        <Heart className="ml-2 inline-block h-8 w-8 -translate-y-2 sm:h-10 sm:w-10" />
      </h2>
      {script && (
        <div className={`relative mt-3 inline-block ${center ? "" : ""}`}>
          <p className="font-script relative z-10 text-5xl leading-tight text-mocha sm:text-6xl">{script}</p>
          <Brush className="absolute -bottom-1 left-0 h-4 w-full opacity-60" />
        </div>
      )}
    </div>
  );
}
