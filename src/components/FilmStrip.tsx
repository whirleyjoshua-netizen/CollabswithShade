import Image from "next/image";
import { Sparkle } from "@/components/Decor";

type Photo = { src: string; w: number; h: number };

/** A row of gold sprocket holes along one edge of the film. */
function Sprockets({ count }: { count: number }) {
  return (
    <div className="flex justify-around px-1.5 py-2" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="h-3 w-4 rounded-[3px] bg-gradient-to-b from-[#f6e3bf] to-gold shadow-[inset_0_1px_1px_rgba(90,60,30,0.35)]" />
      ))}
    </div>
  );
}

/** Purple film with gold sprockets, scrolling sideways through Shade's photos. */
export function FilmStrip({ photos }: { photos: Photo[] }) {
  // The list is drawn twice so the scroll can loop without a gap.
  const frames = [...photos, ...photos];
  return (
    <div className="relative -rotate-1 py-6">
      <Sparkle className="absolute -top-1 left-[8%] z-10 h-9 w-9" />
      <Sparkle className="absolute right-[10%] -bottom-1 z-10 h-10 w-10" />
      <div className="overflow-hidden border-y-[3px] border-gold bg-[linear-gradient(to_bottom,#6f4f93,#8d6bb0_50%,#6f4f93)] shadow-[0_18px_40px_-18px_rgba(80,50,110,0.7)]">
        <div className="animate-film flex w-max">
          {frames.map((p, i) => {
            const ratio = p.w / p.h;
            return (
              <div key={i} className="shrink-0 border-r border-gold/40" aria-hidden={i >= photos.length}>
                <Sprockets count={Math.max(3, Math.round(ratio * 6))} />
                <div className="px-2.5">
                  {/* Every frame is the same height; its width follows the photo's shape. */}
                  <div className="relative h-48 overflow-hidden rounded-sm ring-2 ring-gold/80 sm:h-56" style={{ aspectRatio: ratio }}>
                    <Image src={p.src} alt="" fill className="object-cover" sizes="24rem" />
                  </div>
                </div>
                <Sprockets count={Math.max(3, Math.round(ratio * 6))} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
