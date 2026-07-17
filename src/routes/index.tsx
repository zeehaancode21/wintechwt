import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Clock,
  ShieldCheck,
  Wrench,
  Users,
  Award,
  Zap,
  Phone,
  MessageSquare,
  MapPin,
  ChevronRight,
  Sparkles,
  X,
  ArrowRight,
  CheckCircle,
  Cpu,
  Server,
  Camera,
  Network,
  Building,
  Settings,
  Star,
  Rocket,
  Quote,
  Calendar,
  ThumbsUp,
  ChevronLeft,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Counter, Reveal } from "@/components/site/motion";
import { type Testimonial } from "@/components/site/TestimonialsCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${SITE.name} — CCTV, IT, Servers & Electrical | Mysore` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

/* ------------------------------------------------------------------ */
/*  Static data (module scope — never re‑created on render)            */
/* ------------------------------------------------------------------ */

const STATS = [
  { icon: Award, value: 12, suffix: "+", label: "Years of Experience" },
  { icon: BadgeCheck, value: 600, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 800, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 24, suffix: "h", label: "Response Time" },
] as const;

const WHY = [
  { icon: ShieldCheck, title: "Certified Technicians", desc: "Trained, background-verified engineers with brand certifications." },
  { icon: Wrench, title: "Genuine Parts Only", desc: "We source from authorized distributors — no grey-market components." },
  { icon: Clock, title: "Same-Day Service", desc: "Fast dispatch across Mysore. Emergency support for AMC clients." },
  { icon: Zap, title: "End-to-End Solutions", desc: "One partner for CCTV, IT, servers, biometrics and electrical." },
] as const;

const STEPS = [
  { n: "01", title: "Enquiry", desc: "Call, WhatsApp or fill our form. Tell us your requirement." },
  { n: "02", title: "Site Visit", desc: "Free consultation and site survey by our engineer." },
  { n: "03", title: "Installation", desc: "Professional installation with tested, branded products." },
  { n: "04", title: "Support & AMC", desc: "Ongoing maintenance, quick repairs, and monthly or yearly service contracts." },
] as const;

const BRANDS = [ "Hikvision", "CP Plus", "HP", "Lenovo", "Dahua", "Cisco", "TP-Link", "Epson", "Canon", "Acer", "DELL", "ASUS", "Gigabyte", "Zebra", "Tally", "JPOS", "Petpooja", "MyBillBook", "BusyWin"] as const;

const TESTIMONIALS: Testimonial[] = [
  { name: "Rajesh Kumar", role: "Owner, Prime Retail Mysore", service: "CCTV & Billing", text: "Wintech installed our full CCTV system and billing setup. Zero downtime in two years and their AMC response is genuinely same-day." },
  { name: "Anitha S.", role: "HR Manager, Meridian Tech", service: "Biometrics & Networking", text: "From biometrics to the office LAN, they delivered on time. Clean cabling, patient training — exactly what a growing office needs." },
  { name: "Dr. Kiran M.", role: "Clinic Director", service: "Servers & Printers", text: "They set up our servers, printers and CCTV. Professional team, honest pricing. I recommend them to every clinic in my network." },
  { name: "Fathima Noor", role: "Manager, Silk Route Boutique", service: "CCTV Installation", text: "Our store had blind spots for years. Wintech mapped every corner and the footage quality at night is far better than our old system." },
  { name: "Suresh Gowda", role: "Proprietor, Gowda Hardware", service: "Billing Software", text: "Switched our old manual billing to their software in a single weekend. Staff picked it up fast and GST reports are now painless." },
  { name: "Priya Ramesh", role: "Principal, Sunrise Public School", service: "Biometric Attendance", text: "Cctv surveillance , all synced to one dashboard. Support calls get answered, not just logged." },
  { name: "Manjunath B.", role: "Facility Head, Vega Business Park", service: "Electrical Works", text: "Handled our panel upgrade and CCTV rewiring without a single day of disruption to tenants. Clear documentation after handover too." },
  { name: "Sneha Acharya", role: "Founder, Acharya Diagnostics", service: "IT Infrastructure", text: "They planned our server room from scratch — racks, UPS, networking. Two years in, everything still runs exactly as specified." },
  { name: "Vikram Shetty", role: "Director, Shetty Motors", service: "AMC Support", text: "What sold us was the AMC. One call and an engineer is on-site the same day, whether it's a printer or a full server issue." },
];

const CAROUSEL_INTERVAL = 5000;

/* ------------------------------------------------------------------ */
/*  Global CSS keyframes — injected once, runs on compositor thread    */
/* ------------------------------------------------------------------ */

const GlobalKeyframes = memo(function GlobalKeyframes() {
  return (
    <style>{`
      @keyframes wt-float {
        0%, 100% { transform: translate(0, 0); opacity: .2; }
        50% { transform: translate(var(--fx, 20px), var(--fy, -30px)); opacity: .6; }
      }
      @keyframes wt-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      @keyframes wt-spin-slow {
        to { transform: rotate(360deg); }
      }
      @keyframes wt-star-drift {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: .3; }
        50% { transform: translateY(-10px) rotate(180deg); opacity: .6; }
      }
      @keyframes wt-ring-pulse {
        0% { transform: scale(0); opacity: .5; }
        60% { opacity: .15; }
        100% { transform: scale(1.5); opacity: 0; }
      }
      @keyframes wt-shine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes wt-glow-soft {
        0%, 100% { box-shadow: 0 0 10px rgba(255,107,53,.3); }
        50% { box-shadow: 0 0 20px rgba(255,107,53,.5); }
      }
      @keyframes wt-glow-strong {
        0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,.5); }
        50% { box-shadow: 0 0 40px rgba(255,107,53,.8); }
      }
      @keyframes wt-spark {
        0% { transform: translate(0, 0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translate(var(--sx, 20px), var(--sy, -20px)); opacity: 0; }
      }
      @keyframes wt-gradient-pan {
        0% { background-position: 0% 0%; }
        50% { background-position: 100% 100%; }
        100% { background-position: 0% 0%; }
      }
      @keyframes wt-card-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,107,53,0.2); }
        50% { box-shadow: 0 0 40px rgba(255,107,53,0.4); }
      }
      .wt-particle { animation: wt-float var(--dur, 15s) ease-in-out var(--delay, 0s) infinite; }
      .wt-bob { animation: wt-bob 2s ease-in-out infinite; }
      .wt-spin-slow { animation: wt-spin-slow 3s linear infinite; }
      .wt-star { animation: wt-star-drift var(--dur, 3s) ease-in-out var(--delay, 0s) infinite; }
      .wt-pulse-ring { animation: wt-ring-pulse 2s ease-out var(--delay, 0s) infinite; }
      .wt-glow-idle { animation: wt-glow-soft 2s ease-in-out infinite; }
      .wt-glow-hover { animation: wt-glow-strong 2s ease-in-out infinite; }
      .wt-shine-sweep { animation: wt-shine 1.5s ease-in-out infinite; }
      .wt-spark { animation: wt-spark 1.2s ease-out var(--delay, 0s) infinite; }
      .wt-bg-pan { background-size: 300% 300%; animation: wt-gradient-pan 3s linear infinite; }
      .wt-card-glow { animation: wt-card-glow 3s ease-in-out infinite; }
    `}</style>
  );
});

/* ------------------------------------------------------------------ */
/*  Floating particles — CSS‑animated, positions computed once         */
/* ------------------------------------------------------------------ */

const FloatingParticles = memo(function FloatingParticles({ count = 14 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
        fx: `${(Math.random() - 0.5) * 40}px`,
        fy: `${-20 - Math.random() * 20}px`,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="wt-particle absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            // @ts-expect-error custom css vars
            "--dur": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            "--fx": p.fx,
            "--fy": p.fy,
          }}
        />
      ))}
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  Animated Logo — enhanced with spring entrance (Framer Motion)     */
/*  but continuous animations remain CSS classes.                     */
/* ------------------------------------------------------------------ */

const AnimatedLogo = memo(function AnimatedLogo() {
  const stars = useMemo(
    () =>
      [0, 1, 2].map((i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 3 + i,
        delay: i * 0.5,
      })),
    []
  );

  return (
    <motion.div
      className="group relative inline-flex items-center gap-3 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
    >
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <div className="absolute inset-0 rounded-full bg-accent/20 scale-125 opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-60" />
        <div className="absolute inset-0 rounded-full bg-accent/10 scale-150 opacity-20 transition-all duration-500 delay-75 group-hover:scale-[2.2] group-hover:opacity-40" />

        <div className="wt-bob relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
          <div className="wt-bg-pan absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/50 to-primary/50" />
          <div className="absolute -right-1 -top-1 transition-transform duration-500 group-hover:scale-150 group-hover:rotate-[360deg]">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <ShieldCheck className="h-8 w-8 relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
          <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
        </div>
      </div>

      <div>
        <div className="font-display text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-105">
          <span className="transition-[letter-spacing] duration-300 group-hover:tracking-wider">Win</span>
          <span className="text-accent">tech</span>
        </div>
        <p className="text-xs text-muted-foreground opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          Technology Solutions
        </p>
      </div>

      {stars.map((s) => (
        <div
          key={s.id}
          className="wt-star absolute text-accent/30"
          style={{
            top: s.top,
            left: s.left,
            // @ts-expect-error custom css vars
            "--dur": `${s.duration}s`,
            "--delay": `${s.delay}s`,
          }}
        >
          <Star className="h-3 w-3" />
        </div>
      ))}
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/*  Testimonial popup — enhanced with 3D rotation from Version B      */
/* ------------------------------------------------------------------ */

const TestimonialPopup = memo(function TestimonialPopup({
  testimonial,
  isOpen,
  onClose,
}: {
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!testimonial) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-surface via-card to-surface shadow-2xl"
              initial={{ rotateX: 20, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="wt-bg-pan absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/10 p-2.5 text-foreground/60 transition-all hover:rotate-90 hover:scale-110 hover:bg-black/20 hover:text-foreground backdrop-blur-sm"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="mb-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-accent to-primary p-2">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                      Client Testimonial
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-primary">{testimonial.name}</h3>

                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="flex items-center text-sm font-semibold text-accent">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      {testimonial.service}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-6xl text-accent/10 font-serif">"</div>
                  <div className="pl-6">
                    <p className="text-lg leading-relaxed text-foreground/90">{testimonial.text}</p>
                  </div>
                  <div className="absolute -right-2 -bottom-2 text-6xl text-accent/10 font-serif rotate-180">"</div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">5.0</span>
                  <span className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ThumbsUp className="h-4 w-4 text-accent" />
                    <span>Verified Client</span>
                  </div>
                  <span className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-accent" />
                    <span>Happy Customer</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex-1 min-w-[120px] rounded-xl bg-gradient-to-r from-accent to-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30 active:scale-95"
                  >
                    <Phone className="mr-2 inline h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[120px] rounded-xl border-2 border-accent/30 bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-foreground transition-all hover:scale-105 hover:border-accent hover:bg-accent/5 active:scale-95"
                  >
                    <MessageSquare className="mr-2 inline h-4 w-4" />
                    WhatsApp
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 min-w-[120px] rounded-xl border border-border bg-card px-4 py-2.5 text-center text-sm font-semibold text-muted-foreground transition-all hover:scale-105 hover:bg-surface hover:text-foreground active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

/* ------------------------------------------------------------------ */
/*  Clickable testimonial tile — CSS transitions for performance      */
/* ------------------------------------------------------------------ */

const ClickableTestimonialTile = memo(function ClickableTestimonialTile({
  testimonial,
  onSelect,
}: {
  testimonial: Testimonial;
  onSelect: (t: Testimonial) => void;
}) {
  const handleClick = useCallback(() => onSelect(testimonial), [onSelect, testimonial]);

  return (
    <button
      onClick={handleClick}
      className="group w-full text-left transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors text-lg">
                {testimonial.name}
              </h4>
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full inline-block mt-1">
                {testimonial.service}
              </span>
            </div>
            <div className="flex-shrink-0 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 p-2 text-accent transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
              <Quote className="h-4 w-4" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">&ldquo;{testimonial.text}&rdquo;</p>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((star) => (
              <Star key={star} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </div>

          <div className="absolute bottom-3 right-3 rounded-full bg-accent/10 p-1.5 text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-90">
            <ChevronRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </button>
  );
});

/* ------------------------------------------------------------------ */
/*  Testimonials carousel — uses useRef for timer, CSS for glow       */
/*  Added pulsing glow on hover from Version B via CSS class.         */
/* ------------------------------------------------------------------ */

const FixedTestimonialsCarousel = memo(function FixedTestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showHoverEffect, setShowHoverEffect] = useState(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setProgress(0);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setProgress(0);
  }, [items.length]);

  useEffect(() => {
    if (isHovered) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / CAROUSEL_INTERVAL) * 100;
      if (newProgress >= 100) {
        setProgress(100);
        nextSlide();
      } else {
        setProgress(newProgress);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex, nextSlide]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setShowHoverEffect(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setShowHoverEffect(false), 3000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setShowHoverEffect(false);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  }, []);

  useEffect(() => () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  }, []);

  const currentItem = items[currentIndex];
  const remainingSeconds = Math.ceil((100 - progress) / 20);

  return (
    <div className="relative w-full max-w-3xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`relative rounded-2xl border p-6 sm:p-8 shadow-lg overflow-hidden transition-all duration-500 ${
          showHoverEffect
            ? "bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] border-accent/30 shadow-[0_20px_40px_rgba(251,146,60,0.15)] wt-card-glow"
            : "bg-card border-border"
        }`}
      >
        {showHoverEffect && (
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.15),transparent_70%)]" />
        )}

        {isHovered && (
          <div className="absolute top-4 left-4 z-20">
            <span className="text-[10px] text-accent/60 font-medium bg-accent/5 px-2 py-1 rounded-full">⏸</span>
          </div>
        )}

        <div className="absolute top-4 right-4 text-accent/20">
          <Quote className="h-12 w-12" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-foreground/90 mb-4">&ldquo;{currentItem.text}&rdquo;</p>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-foreground">{currentItem.name}</h4>
              <span className="text-sm text-accent font-medium">{currentItem.service}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs text-muted-foreground">
            Next slide in{" "}
            <span className={`font-semibold ${isHovered ? "text-muted-foreground" : "text-accent"}`}>
              {isHovered ? "⏸" : remainingSeconds}s
            </span>
          </span>
          {isHovered && <span className="text-[10px] text-accent/60 font-medium">Paused</span>}
        </div>

        <div className="h-1 w-full rounded-full bg-accent/10 overflow-hidden relative">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-accent to-primary transition-opacity duration-300 ${isHovered ? "opacity-40" : "opacity-100"}`}
            style={{ width: `${progress}%`, transition: "width 50ms linear" }}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-accent/20 animate-pulse rounded-full" />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6 pt-2">
        <button
          onClick={prevSlide}
          className="rounded-full bg-accent/10 p-3 text-accent transition-all hover:scale-110 hover:bg-accent/20 active:scale-90"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setProgress(0);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-accent" : "w-2 bg-accent/30 hover:bg-accent/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="rounded-full bg-accent/10 p-3 text-accent transition-all hover:scale-110 hover:bg-accent/20 active:scale-90"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="text-center mt-3">
        <span className="text-xs text-muted-foreground">
          {currentIndex + 1} / {items.length}
        </span>
      </div>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/*  Learn more popup & button — merged enhancements                   */
/* ------------------------------------------------------------------ */

const LEARN_MORE_FEATURES = [
  { icon: Camera, title: "CCTV Surveillance", desc: "HD cameras with night vision and remote access", color: "from-blue-500 to-cyan-400" },
  { icon: Server, title: "Server Solutions", desc: "On-premise & cloud servers with backup", color: "from-purple-500 to-pink-400" },
  { icon: Network, title: "Networking", desc: "Structured cabling & WiFi solutions", color: "from-green-500 to-emerald-400" },
  { icon: Building, title: "Electrical Works", desc: "Panel upgrades & complete wiring", color: "from-yellow-500 to-orange-400" },
  { icon: Cpu, title: "IT Support", desc: "Hardware, software & AMC contracts", color: "from-red-500 to-rose-400" },
  { icon: Settings, title: "Biometrics", desc: "Attendance systems & access control", color: "from-indigo-500 to-violet-400" },
] as const;

const LEARN_MORE_STATS = [
  { label: "Projects", value: "600+", icon: CheckCircle, color: "from-blue-500 to-cyan-400" },
  { label: "Clients", value: "800+", icon: Users, color: "from-green-500 to-emerald-400" },
  { label: "Experience", value: "12+", icon: Award, color: "from-yellow-500 to-orange-400" },
] as const;

const LearnMorePopup = memo(function LearnMorePopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-surface via-card to-surface shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="wt-bg-pan absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent" />
              <button
                onClick={onClose}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/10 p-2 text-foreground/60 transition-all hover:rotate-90 hover:scale-110 hover:bg-black/20 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-5 sm:p-6 lg:p-7">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="wt-spin-slow rounded-full bg-accent/10 p-1.5">
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Why Choose Us</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-primary">
                    Your Complete Technology Partner
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    End-to-end solutions with guaranteed quality and support.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {LEARN_MORE_FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.title}
                        className="group rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:scale-[1.03] hover:border-accent hover:shadow-lg hover:shadow-accent/25"
                      >
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-md transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                          {feature.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {LEARN_MORE_STATS.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="rounded-lg bg-primary/5 p-3 text-center transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                      >
                        <div
                          className={`mx-auto grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br ${stat.color} text-white shadow-md transition-transform duration-500 hover:rotate-[360deg]`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="mt-1 font-display text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex-1 min-w-[100px] rounded-lg bg-gradient-to-r from-accent to-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.04] hover:shadow-lg active:scale-95"
                  >
                    <Phone className="mr-1.5 inline h-3.5 w-3.5" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[100px] rounded-lg border border-accent/30 bg-transparent px-4 py-2 text-center text-sm font-semibold text-foreground transition-all hover:scale-[1.04] hover:border-accent hover:bg-accent/5 active:scale-95"
                  >
                    <MessageSquare className="mr-1.5 inline h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 min-w-[100px] rounded-lg border border-border bg-card px-4 py-2 text-center text-sm font-semibold text-muted-foreground transition-all hover:scale-[1.04] hover:bg-surface hover:text-foreground active:scale-95"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

const LearnMoreButton = memo(function LearnMoreButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sparks = useMemo(
    () =>
      [0, 1, 2, 3].map((i) => ({
        id: i,
        sx: `${-20 + Math.random() * 40}%`,
        sy: `${-30 + Math.random() * 60}%`,
        delay: i * 0.2,
      })),
    []
  );

  return (
    <>
      <button
        onClick={() => setIsPopupOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 wt-bg-pan ${
          isHovered ? "wt-glow-hover" : "wt-glow-idle"
        } ${className}`}
        style={{ backgroundImage: "linear-gradient(135deg, #FF6B35, #FF4500, #FF6B35, #FF8C00)" }}
      >
        {isHovered &&
          sparks.map((s) => (
            <span
              key={s.id}
              className="wt-spark absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-white/60"
              style={{
                // @ts-expect-error custom css vars
                "--sx": s.sx,
                "--sy": s.sy,
                "--delay": `${s.delay}s`,
              }}
            />
          ))}

        <span className="relative z-10 flex items-center gap-3">
          <span className={isHovered ? "wt-spin-slow inline-flex" : "inline-flex"}>
            <Rocket className="h-4 w-4" />
          </span>
          {children}
          <span className="inline-flex transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight className="h-4 w-4" />
          </span>
        </span>

        {isHovered && (
          <span className="wt-shine-sweep pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
      </button>
      <LearnMorePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
});

/* ------------------------------------------------------------------ */
/*  Home page — uses merged components with ENHANCED CTA              */
/* ------------------------------------------------------------------ */

function Home() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isTestimonialPopupOpen, setIsTestimonialPopupOpen] = useState(false);

  const handleTestimonialSelect = useCallback((testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsTestimonialPopupOpen(true);
  }, []);

  const handleCloseTestimonialPopup = useCallback(() => {
    setIsTestimonialPopupOpen(false);
    setTimeout(() => setSelectedTestimonial(null), 300);
  }, []);

  return (
    <>
      <GlobalKeyframes />

      {/* HERO */}
      <HeroSlider />

      {/* STATS STRIP */}
      <section className="relative overflow-hidden bg-primary py-10 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.3),transparent_50%)]" />
        <FloatingParticles />
        <div className="container-x relative">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => {
                const Icon = s.icon;
                void Icon;
                return (
                  <div
                    key={s.label}
                    className="text-center sm:text-left group transition-transform duration-300 hover:scale-105"
                  >
                    <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-white/70 group-hover:text-white/90 transition-colors">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad bg-surface relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="Our Services"
              title="One partner for every business system"
              sub="From CCTV and servers to biometrics and billing solutions, we deliver end-to-end business technology. Supply, installation, support, and maintenance—all handled by one trusted partner."
            />
          </Reveal>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.05),transparent_50%)]" />
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center relative">
          <Reveal>
            <div>
              <div className="mb-6">
                <AnimatedLogo />
              </div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-accent transition-[letter-spacing] duration-300 hover:tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">
                Trusted by 800+ businesses across Mysore.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're not just installers — we're your long-term technology partner.
                Genuine products, certified engineers, transparent pricing, and support
                that actually shows up.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/about"
                  className="btn-ghost-primary transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  About Wintech
                </Link>
                <LearnMoreButton>Learn More</LearnMoreButton>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/20 hover:border-accent">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent relative transition-transform duration-500 group-hover:rotate-[360deg]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground relative">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground relative">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,107,53,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <FloatingParticles />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="How It Works"
              title="A simple, transparent process"
              sub="From your first call to long-term AMC — no surprises, no jargon."
              light
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative text-center md:text-left group transition-transform duration-300 hover:-translate-y-1">
                  <div className="mx-auto md:mx-0 grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground font-display text-lg font-bold ring-8 ring-primary relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                    {s.n}
                    <div
                      className="wt-pulse-ring absolute inset-0 rounded-full bg-accent/30"
                      style={{
                        // @ts-expect-error custom css vars
                        "--delay": `${i * 0.5}s`,
                      }}
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-12 border-b border-border bg-surface overflow-hidden">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Authorized partners & brands we work with
          </p>
          <div className="mt-6">
            <div className="flex items-center justify-center gap-x-10 gap-y-4 flex-wrap">
              {BRANDS.map((b) => (
                <span
                  key={b}
                  className="text-lg sm:text-xl font-display font-bold text-muted-foreground/70 transition-all duration-300 hover:scale-[1.2] hover:text-accent cursor-pointer"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-surface relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.05),transparent_50%)]" />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="Client Stories"
              title="What our customers say"
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12">
              <FixedTestimonialsCarousel items={TESTIMONIALS} />
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialPopup
        testimonial={selectedTestimonial}
        isOpen={isTestimonialPopupOpen}
        onClose={handleCloseTestimonialPopup}
      />

      <section className="pb-32">
        <div className="container-x">
          <motion.div
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl transition-all duration-300 hover:scale-[1.01] wt-card-glow"
            style={{
              background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated gradient overlay */}
            <div className="wt-bg-pan absolute inset-0 opacity-30 blur-sm -z-10" style={{ backgroundImage: "linear-gradient(45deg, #FF6B35, #FF4500, #FF6B35, #FF8C00)" }} />

            {/* Decorative glowing orbs */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />

            {/* Rotating ring decoration */}
            <div className="absolute -right-10 top-10 h-32 w-32 rounded-full border border-white/10 wt-spin-slow pointer-events-none" />
            <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full border border-white/5 wt-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }} />

            <FloatingParticles count={12} />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                {/* Heading with staggered reveal */}
                <motion.h2
                  className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Ready for reliable, all-in-one IT support?
                </motion.h2>

                {/* Paragraphs with staggered fade-in */}
                <motion.div
                  className="mt-4 space-y-3 text-white/90 max-w-xl font-medium [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                    }
                  }}
                >
                  
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    We'll assess your site, understand your needs, and give you a transparent quote. No pressure, no hidden costs, and no mysterious "consultation fees" that appear out of nowhere.
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    No sales tricks. No surprise add-ons. No "We'll call you back" that turns into next year. Just a free site visit and a clear, no-obligation quote.
                  </motion.p>
                  
                </motion.div>

                {/* Location */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm text-white/80"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  {SITE.city}
                </motion.div>
              </div>

              {/* Buttons with enhanced hover effects */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.a
                  href={`tel:${SITE.phone}`}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent to-primary px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_-10px_rgba(255,107,53,0.5)] active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone className="h-5 w-5" /> Call Now
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.a>

                <motion.a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl border-2 border-white/30 px-8 py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-accent hover:bg-accent/10 active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" /> WhatsApp
                  </span>
                  <span className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service quick list (SEO-only, visually hidden) */}
      <section className="hidden">
        {SERVICES.map((s) => (
          <span key={s.slug}>{s.title}</span>
        ))}
      </section>
    </>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span
        className={`text-sm font-semibold uppercase tracking-wider transition-[letter-spacing] duration-300 hover:tracking-[0.1em] ${
          light ? "text-accent" : "text-accent"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-muted-foreground"}`}>{sub}</p>
      )}
    </div>
  );
}