import Image from "next/image";
import { site } from "@/content/site";
import { Heart, SectionTitle, Sparkle, Wash } from "@/components/Decor";
import { EmailPill, SocialDiscs, SocialPills } from "@/components/SocialButtons";

type Video = { title: string; category: string; views: string; url: string; src: string; poster: string };

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function VideoFrame({ src, poster, url, className = "" }: { src: string; poster: string; url?: string; className?: string }) {
  return (
    <div className={`aspect-[9/16] overflow-hidden bg-gradient-to-br from-lavender/40 via-cream to-taupe/50 ${className}`}>
      {src ? (
        <video src={src} poster={poster || undefined} controls playsInline preload="metadata" className="h-full w-full object-cover" />
      ) : url ? (
        <a href={url} target="_blank" rel="noreferrer" className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center text-sm font-semibold text-mocha hover:text-ink">
          <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          Watch on Instagram
        </a>
      ) : (
        <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted">Video coming soon</div>
      )}
    </div>
  );
}

/** The featured video, shown inside a phone. */
function PhoneFrame({ src, poster, views }: { src: string; poster: string; views: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[17rem] rounded-[2.75rem] bg-ink p-2.5 shadow-2xl">
      <div className="relative overflow-hidden rounded-[2.25rem]">
        <VideoFrame src={src} poster={poster} />
        <span className="pointer-events-none absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
        <span className="pointer-events-none absolute top-12 left-4 flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          {views}
        </span>
      </div>
    </div>
  );
}

/** A straight row of framed video cards. */
function VideoGrid({ videos, className }: { videos: Video[]; className: string }) {
  return (
    <div className={`grid grid-cols-2 gap-5 sm:gap-6 ${className}`}>
      {videos.map((v) => (
        <figure key={v.title}>
          <div className="rounded-2xl bg-white p-2 shadow-[0_10px_30px_-12px_rgba(26,26,26,0.35)]">
            <VideoFrame src={v.src} poster={v.poster} url={v.url} className="rounded-xl" />
          </div>
          <figcaption className="mt-3 px-1">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-mocha">{v.category}</span>
            <p className="mt-0.5 text-sm font-semibold leading-snug">{v.title}</p>
            <a href={v.url} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-ink">
              {v.views ? `${v.views} views` : "Watch on Instagram"}
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const icon = "h-8 w-8 fill-none stroke-ink";
const processIcons = [
  // Light bulb
  <svg key="bulb" viewBox="0 0 24 24" className={icon} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
    <path d="M12 0.5v0M4 4l1 1M20 4l-1 1" />
  </svg>,
  // Document
  <svg key="doc" viewBox="0 0 24 24" className={icon} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z" />
    <path d="M14 3v5h5M8.5 12h7M8.5 15h7M8.5 18h4" />
  </svg>,
  // Camera
  <svg key="camera" viewBox="0 0 24 24" className={icon} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h3L9 5h6l1.5 2h3A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-9Z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>,
  // Bar chart
  <svg key="chart" viewBox="0 0 24 24" className={icon} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18M6 21v-6h3v6M10.5 21V10h3v11M15 21V4h3v17" />
  </svg>,
];

export default function Home() {
  const featured = site.featuredVideo;
  const pin = (
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  );

  return (
    <main className="flex-1 overflow-x-clip">
      {/* Cover */}
      <section className="ombre relative">
        <Wash className="-top-24 -left-32 h-80 w-80" />
        <Wash className="-right-24 top-10 h-72 w-72 bg-lavender/40" />
        <Sparkle className="absolute top-14 left-[12%] h-8 w-8 sm:h-10 sm:w-10" />
        <Sparkle className="absolute top-28 left-[8%] h-4 w-4" />
        <Sparkle className="absolute right-[10%] bottom-16 h-9 w-9" />
        <Sparkle className="absolute right-[15%] bottom-28 h-4 w-4" />
        <div className="relative mx-auto max-w-6xl px-5 pt-12 pb-16 text-center sm:pt-16">
          <h1 className="font-script py-2 text-6xl leading-tight text-ink sm:text-8xl lg:text-[10rem]">{site.fullName}</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-mocha sm:text-base">{site.tagline}</p>
          <p className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-mocha sm:text-base">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-gold" aria-hidden="true">{pin}</svg>
            {site.location}
          </p>
          <SocialDiscs className="mt-8" />
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-mocha hover:text-ink sm:text-base"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-gold" strokeWidth={2} strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m3.5 7 8.5 6 8.5-6" />
            </svg>
            {site.email}
          </a>
        </div>
      </section>

      {/* 01 Hi, I'm Shadé */}
      <section id="about" className="ombre relative py-20">
        <Wash className="right-0 -bottom-20 h-96 w-96" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[3fr_2fr] md:gap-14">
          <div className="text-center md:text-left">
            <h2 className="font-script text-7xl leading-none sm:text-8xl">
              Hi, I&apos;m Shadé
              <Heart className="ml-3 inline-block h-10 w-10 -translate-y-6" />
            </h2>
            <p className="font-title mt-6 text-3xl leading-tight uppercase sm:text-4xl">{site.hero.headline}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:max-w-none">{site.hero.bio}</p>
          </div>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm">
            <div className="absolute inset-x-[2%] top-[4%] bottom-0 rounded-t-full bg-lavender/70" aria-hidden="true" />
            <Sparkle className="absolute -top-2 right-0 z-10 h-10 w-10" />
            <Sparkle className="absolute top-12 -right-4 z-10 h-5 w-5" />
            <Sparkle className="absolute bottom-24 -left-6 z-10 h-7 w-7" />
            <Image
              src={site.hero.photo}
              alt={`${site.fullName} with her kids`}
              fill
              priority
              className="object-contain object-bottom drop-shadow-xl"
              sizes="(min-width: 768px) 24rem, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 02 In good company */}
      <section id="brands" className="ombre relative py-20">
        <Sparkle className="absolute top-16 right-[14%] h-8 w-8" />
        <Sparkle className="absolute top-28 right-[11%] h-4 w-4" />
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="In Good Company" script="Brands I've worked with" center />
          <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-12">
            {site.brands.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noreferrer" className="group flex w-24 flex-col items-center gap-3">
                <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-4 ring-lavender-light transition group-hover:-translate-y-1 group-hover:ring-lavender">
                  {b.logo ? (
                    <Image src={b.logo} alt={b.name} fill className={"fit" in b && b.fit === "contain" ? "object-contain p-1.5" : "object-cover"} sizes="6rem" />
                  ) : (
                    <span className="font-title text-2xl text-mocha">{initials(b.name)}</span>
                  )}
                </span>
                <span className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted group-hover:text-ink">{b.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Where experience meets impact */}
      <section id="impact" className="ombre relative py-20">
        <Wash className="-top-10 -right-20 h-80 w-80" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[3fr_2fr] md:gap-16">
          <div>
            <SectionTitle title={<>Where Experience<br />Meets Impact</>} />
            <p className="-mt-4 text-lg leading-relaxed text-muted">{featured.story}</p>
            <dl className="mt-8 grid grid-cols-2 gap-y-5 rounded-3xl bg-lavender/60 px-4 py-5 text-center sm:grid-cols-4 sm:divide-x sm:divide-ink/15">
              {featured.stats.map((s) => (
                <div key={s.label} className="px-2">
                  <dd className="font-title text-3xl">{s.value}</dd>
                  <dt className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-ink/80">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-serif italic text-muted">
              {featured.note}{" "}
              <a href={featured.url} target="_blank" rel="noreferrer" className="not-italic font-sans text-sm font-semibold text-ink underline decoration-lavender decoration-2 underline-offset-4 hover:text-mocha">
                Watch on Instagram
              </a>
            </p>
          </div>
          <div className="relative">
            <Sparkle className="absolute -top-4 left-4 h-8 w-8 sm:left-10" />
            <Sparkle className="absolute bottom-10 -right-2 h-6 w-6 sm:right-6" />
            <PhoneFrame src={featured.src} poster={featured.poster} views={featured.stats[0].value} />
          </div>
        </div>
      </section>

      {/* 04 Featured collaborations */}
      <section id="work" className="ombre relative py-20">
        <Sparkle className="absolute top-14 right-[12%] h-9 w-9" />
        <Sparkle className="absolute top-28 right-[9%] h-4 w-4" />
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="Featured Collaborations" script="A collection of my brand content" center />
          <VideoGrid videos={site.brandVideos} className="md:grid-cols-4" />
        </div>
      </section>

      {/* 05 No brief, just creativity */}
      <section id="creative" className="ombre relative py-20">
        <Wash className="-bottom-24 -left-24 h-96 w-96" />
        <Sparkle className="absolute top-16 left-[8%] h-8 w-8" />
        <Sparkle className="absolute top-32 left-[12%] h-4 w-4" />
        <div className="relative mx-auto max-w-6xl px-5">
          <SectionTitle title="No Brief, Just Creativity" script="Original content, everyday moments & a little personality" center />
          <VideoGrid videos={site.creativeVideos} className="md:grid-cols-4" />
        </div>
      </section>

      {/* 06 My creative process */}
      <section id="process" className="ombre relative py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionTitle title="My Creative Process" script="Thoughtful content, intentionally created." center />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {site.process.map((step, i) => (
              <li key={step.title} className="relative text-center">
                <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-lavender/70">{processIcons[i % processIcons.length]}</span>
                {i < site.process.length - 1 && (
                  <span className="absolute top-12 -right-5 hidden -translate-y-1/2 text-xl text-ink/50 lg:block" aria-hidden="true">→</span>
                )}
                <h3 className="font-title mt-5 text-xl uppercase">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 Let's connect */}
      <section id="contact" className="relative overflow-hidden bg-cream py-24">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-lavender/70" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 -bottom-40 h-96 w-96 rounded-full bg-lavender/70" aria-hidden="true" />
        <Sparkle className="absolute top-16 left-[14%] h-10 w-10" />
        <Sparkle className="absolute top-32 left-[18%] h-4 w-4" />
        <Sparkle className="absolute right-[12%] bottom-24 h-12 w-12" />
        <Sparkle className="absolute right-[18%] bottom-14 h-5 w-5" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <SectionTitle title="Let's Connect" script="Good things start with a hello." center />
          <p className="-mt-4 text-lg text-muted">Have a project in mind? I&apos;d love to hear about it!</p>
          <EmailPill className="mx-auto mt-8" />
          <SocialPills className="mt-4" />
        </div>
      </section>
    </main>
  );
}
