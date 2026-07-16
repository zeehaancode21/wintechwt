import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Target, Users, Award, Zap, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "./services";
import { Counter, Reveal } from "@/components/site/motion";
import { motion, useInView } from "framer-motion";
import { memo, useMemo, useRef } from "react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About Us — ${SITE.name}` },
      { name: "description", content: `Learn about ${SITE.name}, Mysore's trusted IT, security and electrical solutions provider serving 800+ clients.` },
      { property: "og:title", content: `About ${SITE.name}` },
      { property: "og:description", content: `${SITE.name} — Mysore's trusted IT, security and electrical solutions provider.` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

/* ------------------------------------------------------------------ */
/*  Global keyframes – reused from the Home component                 */
/*  Injected once, runs on compositor thread.                         */
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
        50% { transform: translateY(-6px); }
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
      .wt-bg-pan { background-size: 300% 300%; animation: wt-gradient-pan 3s linear infinite; }
      .wt-card-glow { animation: wt-card-glow 3s ease-in-out infinite; }
    `}</style>
  );
});

/* ------------------------------------------------------------------ */
/*  Floating particles – same as Home                                 */
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
/*  About page component – fully animated aesthetic                   */
/* ------------------------------------------------------------------ */

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "Same-day response, honest diagnosis and long-term accountability." },
  { icon: BadgeCheck, title: "Genuine Products", desc: "Only authorized brands, sealed packaging and real warranties." },
  { icon: Users, title: "Client-First", desc: "Transparent pricing and jargon-free explanations for every decision." },
  { icon: Zap, title: "Speed", desc: "Fast installs and rapid fixes — because downtime costs you money." },
];

const CERTS = ["Hikvision Certified", "CP Plus Partner", "Dell Authorized Reseller", "HP Service Partner", "Licensed Electrical Contractor"];

// Paragraph stagger variants
const paragraphVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
};

// Tilt card wrapper
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`${className} transition-all duration-300`}
      whileHover={{
        rotateX: 3,
        rotateY: 3,
        scale: 1.02,
        boxShadow: "0 20px 40px -12px rgba(255,107,53,0.3)",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
      style={{ perspective: "800px" }}
    >
      {children}
    </motion.div>
  );
};

function About() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <>
      <GlobalKeyframes />

      { /* HERO - with floating particles and animated tagline */ }
      <div className="relative -mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.08),transparent_50%)]" />
        <FloatingParticles count={12} />

        <PageHero
          eyebrow="About Wintech"
          title="The last vendor call you'll ever need to make."
          sub={
            <div className="hero-content-wrapper">
              <motion.div
                className="hero-tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="pill"><span className="icon">🛡️</span> Secure</span>
                <span className="dot">·</span>
                <span className="pill"><span className="icon">⚡</span> Server-ready</span>
                <span className="dot">·</span>
                <span className="pill"><span className="icon">🔌</span> Wired</span>
                <span className="dot">·</span>
                <span className="pill"><span className="icon">📶</span> Wireless</span>
                <span className="dot">—</span>
                <span className="accent-badge"><span className="icon">✨</span> total coverage</span>
              </motion.div>

              <motion.div
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Whether it's protecting your business with CCTV, setting up office IT infrastructure, deploying servers & networks, repairing desktops and laptops, installing printers, implementing biometric attendance, providing GST billing software, or handling electrical works, we deliver complete technology solutions that simply work.
              </motion.div>
            </div>
          }
        />
      </div>

      { /* ============================================================ */ }
      { /*  OUR STORY — now with floating badge, bob animation,          */ }
      { /*  staggered text, and 3D tilt cards                           */ }
      { /* ============================================================ */ }
      <section className="section-pad overflow-hidden">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          { /* Image Column with Floating Stats */ }
          <motion.div
            ref={statsRef}
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark shadow-2xl wt-card-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isStatsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
          >
            { /* Floating glow orb */ }
            <motion.div
              className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.35),transparent_60%)]" />

            { /* Bobbing Stats Container */ }
            <motion.div
              className="absolute inset-0 grid place-items-center text-white wt-bob"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center px-6 relative z-10">
                <div className="font-display text-6xl sm:text-7xl font-extrabold">
                  <Counter to={12} suffix="+" />
                </div>
                <div className="mt-3 text-lg text-white/85">Years serving Mysore</div>
                <div className="mt-8 grid grid-cols-2 gap-6 max-w-xs mx-auto">
                  <Stat n={2500} suf="+" label="Projects" />
                  <Stat n={800} suf="+" label="Clients" />
                </div>
              </div>
            </motion.div>

            { /* Decorative spinning rings */ }
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10 wt-spin-slow pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-white/5 wt-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }} />
          </motion.div>

          { /* Text Column with Staggered Paragraphs */ }
          <div>
            { /* ✅ Animation removed – simple static text */ }
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">
              Built on trust. Grown by referrals.
            </h2>

            <motion.div
              className="mt-5 space-y-4 text-muted-foreground leading-relaxed"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p variants={childVariants}>
                {SITE.name} started as a small CCTV and computer service shop in Mysore.
                Over the last decade we've grown into a full-service partner for businesses
                across the city — installing, maintaining and upgrading everything from
                security cameras and servers to biometric access control and industrial
                electrical panels.
              </motion.p>
              <motion.p variants={childVariants}>
                What hasn't changed is how we work: pick up the phone, show up on time,
                explain the problem clearly, and stand behind every job.
              </motion.p>
            </motion.div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <TiltCard>
                <MissionCard icon={Target} title="Our Mission" desc="Deliver honest, reliable technology and electrical services that let our clients focus on their business." />
              </TiltCard>
              <TiltCard>
                <MissionCard icon={Award} title="Our Promise" desc="Genuine products, certified engineers and after-sales support that actually shows up." />
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      { /* ============================================================ */ }
      { /*  WHAT WE STAND FOR — 3D tilt cards with staggered flip-up     */ }
      { /* ============================================================ */ }
      <section className="section-pad bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_60%)]" />
        <div className="container-x relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We Stand For</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">Our core values</h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 15 },
                    visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
                  }}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  whileHover={{
                    rotateX: 4,
                    rotateY: 4,
                    scale: 1.03,
                    boxShadow: "0 20px 40px -12px rgba(255,107,53,0.25)",
                    borderColor: "#FF6B35",
                  }}
                  style={{ perspective: "600px" }}
                  className="group h-full rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-accent"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold group-hover:text-accent transition-colors">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      { /* Certifications & Partnerships */ }
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.05),transparent_50%)]" />
        <div className="container-x text-center relative">
          <Reveal>
            <motion.span
              className="text-sm font-semibold uppercase tracking-wider text-accent"
              whileHover={{ letterSpacing: "0.1em" }}
            >
              Certifications & Partnerships
            </motion.span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">Authorized. Trained. Trusted.</h2>
          </Reveal>
          <motion.div
            className="mt-8 flex-wrap justify-center gap-3 flex"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {CERTS.map((c) => (
              <motion.span
                key={c}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1, boxShadow: "0 8px 20px -8px rgba(255,107,53,0.3)" }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <BadgeCheck className="h-4 w-4 text-accent" />
                {c}
              </motion.span>
            ))}
          </motion.div>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary relative overflow-hidden group">
              <span className="relative z-10">Work with us</span>
              <span className="absolute inset-0 bg-accent -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </section>

      { /* Global Styles – updated to match the professional theme */ }
      <style>{`
        .hero-content-wrapper {
          width: 100%;
          max-width: 100%;
          overflow: visible;
          margin-top: -0.5rem;
        }

        .page-hero {
          padding-top: 0 !important;
          padding-bottom: 0.5rem !important;
        }

        .hero-tagline {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.2rem 0.3rem;
          font-size: 1rem;
          font-weight: 500;
          color: #1a3b54;
          padding: 0.4rem 1.2rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 60px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          width: fit-content;
          max-width: 100%;
          animation: taglinePulse 3s ease-in-out infinite alternate, floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          flex-wrap: nowrap;
          overflow: visible;
          white-space: nowrap;
        }

        .hero-tagline:hover {
          box-shadow: 0 8px 30px rgba(26, 76, 122, 0.08);
        }

        .hero-tagline .pill {
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          padding: 0.1rem 0.6rem;
          background: rgba(26, 76, 122, 0.06);
          border-radius: 40px;
          font-weight: 600;
          color: #0b2a44;
          border: 1px solid rgba(26, 76, 122, 0.08);
          transition: all 0.25s ease;
          cursor: default;
          white-space: nowrap;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .hero-tagline .pill:hover {
          background: rgba(26, 76, 122, 0.12);
          transform: translateY(-2px) scale(1.02);
        }

        .hero-tagline .pill .icon {
          font-size: 0.8rem;
          line-height: 1;
        }

        .hero-tagline .dot {
          color: #8aaec9;
          font-weight: 300;
          margin: 0 0.05rem;
          flex-shrink: 0;
          font-size: 0.85rem;
        }

        .hero-tagline .accent-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.15rem;
          padding: 0.1rem 0.9rem;
          background: linear-gradient(135deg, #1a4c7a, #2b7aaa);
          color: white;
          border-radius: 40px;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(26, 76, 122, 0.25);
          transition: all 0.3s ease;
          cursor: default;
          white-space: nowrap;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .hero-tagline .accent-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(26, 76, 122, 0.35);
        }

        .hero-tagline .accent-badge .icon {
          font-size: 0.8rem;
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #1f3b4f;
          padding: 0.8rem 1.2rem;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.4);
          width: 100%;
          max-width: 100%;
          overflow: visible;
          animation: floatIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        @keyframes taglinePulse {
          0% { box-shadow: 0 2px 12px rgba(26, 76, 122, 0.02); border-color: rgba(255, 255, 255, 0.4); }
          100% { box-shadow: 0 8px 32px rgba(26, 76, 122, 0.08); border-color: rgba(26, 76, 122, 0.15); }
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 768px) {
          .hero-tagline {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
            width: auto;
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            white-space: nowrap;
            gap: 0.15rem 0.2rem;
          }
          .hero-tagline .pill {
            padding: 0.08rem 0.4rem;
            font-size: 0.7rem;
          }
          .hero-tagline .accent-badge {
            padding: 0.08rem 0.6rem;
            font-size: 0.7rem;
          }
          .hero-tagline .pill .icon {
            font-size: 0.65rem;
          }
          .hero-tagline .accent-badge .icon {
            font-size: 0.65rem;
          }
          .hero-tagline .dot {
            font-size: 0.7rem;
          }
          .hero-description {
            font-size: 0.9rem;
            padding: 0.6rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-tagline {
            font-size: 0.6rem;
            padding: 0.2rem 0.6rem;
            gap: 0.1rem 0.15rem;
          }
          .hero-tagline .pill {
            padding: 0.05rem 0.3rem;
            font-size: 0.6rem;
          }
          .hero-tagline .accent-badge {
            padding: 0.05rem 0.4rem;
            font-size: 0.6rem;
          }
          .hero-tagline .pill .icon {
            font-size: 0.55rem;
          }
          .hero-tagline .accent-badge .icon {
            font-size: 0.55rem;
          }
          .hero-tagline .dot {
            font-size: 0.6rem;
          }
          .hero-description {
            font-size: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
        }

        .hero-tagline {
          display: flex !important;
          flex-wrap: nowrap !important;
          white-space: nowrap !important;
          overflow: visible !important;
        }
      `}</style>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper components                                                */
/* ------------------------------------------------------------------ */

function Stat({ n, suf, label }: { n: number; suf?: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <div className="font-display text-3xl font-bold"><Counter to={n} suffix={suf} /></div>
      <div className="text-xs text-white/70 mt-1">{label}</div>
    </motion.div>
  );
}

function MissionCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/5 text-primary transition-transform duration-300 group-hover:rotate-[360deg]">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}