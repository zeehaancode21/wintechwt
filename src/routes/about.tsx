import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Target, Users, Award, Zap, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "./services";
import { Counter, Reveal } from "@/components/site/motion";

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

const VALUES = [
  { icon: ShieldCheck, title: "Reliability", desc: "Same-day response, honest diagnosis and long-term accountability." },
  { icon: BadgeCheck, title: "Genuine Products", desc: "Only authorized brands, sealed packaging and real warranties." },
  { icon: Users, title: "Client-First", desc: "Transparent pricing and jargon-free explanations for every decision." },
  { icon: Zap, title: "Speed", desc: "Fast installs and rapid fixes — because downtime costs you money." },
];

const CERTS = ["Hikvision Certified", "CP Plus Partner", "Dell Authorized Reseller", "HP Service Partner", "Licensed Electrical Contractor"];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Wintech"
        title="Mysore's one-stop IT, security & electrical partner."
        sub="Since 2013, we've helped offices, retail stores, clinics and homes deploy technology that works reliably — and stays working."
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.35),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center text-white">
                <div className="text-center px-6">
                  <div className="font-display text-6xl sm:text-7xl font-extrabold">
                    <Counter to={12} suffix="+" />
                  </div>
                  <div className="mt-3 text-lg text-white/85">Years serving Mysore</div>
                  <div className="mt-8 grid grid-cols-2 gap-6 max-w-xs mx-auto">
                    <Stat n={2500} suf="+" label="Projects" />
                    <Stat n={800} suf="+" label="Clients" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Story</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">
                Built on trust. Grown by referrals.
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {SITE.name} started as a small CCTV and computer service shop in Mysore.
                  Over the last decade we've grown into a full-service partner for businesses
                  across the city — installing, maintaining and upgrading everything from
                  security cameras and servers to biometric access control and industrial
                  electrical panels.
                </p>
                <p>
                  What hasn't changed is how we work: pick up the phone, show up on time,
                  explain the problem clearly, and stand behind every job.
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <MissionCard icon={Target} title="Our Mission" desc="Deliver honest, reliable technology and electrical services that let our clients focus on their business." />
                <MissionCard icon={Award} title="Our Promise" desc="Genuine products, certified engineers and after-sales support that actually shows up." />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We Stand For</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">Our core values</h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="h-full rounded-xl bg-card border border-border p-6 hover:border-accent hover:shadow-lg transition-all">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad">
        <div className="container-x text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Certifications & Partnerships</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">Authorized. Trained. Trusted.</h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CERTS.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <BadgeCheck className="h-4 w-4 text-accent" />
                {c}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary">Work with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, suf, label }: { n: number; suf?: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold"><Counter to={n} suffix={suf} /></div>
      <div className="text-xs text-white/70 mt-1">{label}</div>
    </div>
  );
}

function MissionCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/5 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-semibold text-sm">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
