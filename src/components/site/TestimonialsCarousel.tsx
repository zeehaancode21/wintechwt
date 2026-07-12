import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Pause, Play } from "lucide-react";

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating?: number; // 1-5, defaults to 5
  service?: string; // small tag e.g. "CCTV Installation"
};

const AUTOPLAY_MS = 6000;

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // remount progress bar to restart its animation
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const count = items.length;

  const goTo = useCallback(
    (i: number) => {
      const next = ((i % count) + count) % count;
      setActive(next);
      setProgressKey((k) => k + 1);
    },
    [count]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => next(), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused, next]);

  // Keyboard navigation when the carousel region has focus
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Basic touch swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative focus:outline-none"
    >
      {/* Card viewport */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((t, i) => (
            <div key={t.name + i} className="w-full shrink-0 px-1">
              <TestimonialCard testimonial={t} isActive={i === active} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="mt-7 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dot + progress indicators */}
        <div className="flex items-center gap-2.5">
          {items.map((t, i) => (
            <button
              key={t.name + i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial from ${t.name}`}
              aria-current={i === active}
              className="group relative h-2 overflow-hidden rounded-full bg-border transition-all duration-300"
              style={{ width: i === active ? 32 : 8 }}
            >
              {i === active && !paused && (
                <span
                  key={progressKey}
                  className="absolute inset-y-0 left-0 rounded-full bg-accent motion-reduce:w-full"
                  style={{
                    animation: `testimonial-progress ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              )}
              {i === active && paused && (
                <span className="absolute inset-y-0 left-0 w-full rounded-full bg-accent/60" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-accent hover:text-accent hover:scale-105 active:scale-95"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
          className="ml-2 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:text-accent"
        >
          {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        </button>
      </div>

      <style>{`
        @keyframes testimonial-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ testimonial: t, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  const rating = t.rating ?? 5;
  return (
    <div
      className={`h-full rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <Quote className="h-9 w-9 text-accent/50 shrink-0" />
        {t.service && (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            {t.service}
          </span>
        )}
      </div>

      <div className="mt-4 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "fill-transparent text-border"}`}
          />
        ))}
      </div>

      <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground max-w-2xl">
        "{t.text}"
      </p>

      <div className="mt-7 flex items-center gap-3 pt-6 border-t border-border">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-semibold shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </div>
  );
}