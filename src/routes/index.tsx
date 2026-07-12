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
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Counter, Reveal } from "@/components/site/motion";
import { TestimonialsCarousel, type Testimonial } from "@/components/site/TestimonialsCarousel";

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

const STATS = [
  { icon: Award, value: 12, suffix: "+", label: "Years of Experience" },
  { icon: BadgeCheck, value: 2500, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 800, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 24, suffix: "h", label: "Response Time" },
];

const WHY = [
  { icon: ShieldCheck, title: "Certified Technicians", desc: "Trained, background-verified engineers with brand certifications." },
  { icon: Wrench, title: "Genuine Parts Only", desc: "We source from authorized distributors — no grey-market components." },
  { icon: Clock, title: "Same-Day Service", desc: "Fast dispatch across Mysore. Emergency support for AMC clients." },
  { icon: Zap, title: "End-to-End Solutions", desc: "One partner for CCTV, IT, servers, biometrics and electrical." },
];

const STEPS = [
  { n: "01", title: "Enquiry", desc: "Call, WhatsApp or fill our form. Tell us your requirement." },
  { n: "02", title: "Site Visit", desc: "Free consultation and site survey by our engineer." },
  { n: "03", title: "Installation", desc: "Professional installation with tested, branded products." },
  { n: "04", title: "Support & AMC", desc: "Ongoing maintenance, quick fixes, and yearly contracts." },
];

const BRANDS = ["Hikvision", "CP Plus", "Dell", "HP", "Lenovo", "Dahua", "Cisco", "TP-Link", "Epson", "Canon"];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Prime Retail Mysore",
    service: "CCTV & Billing",
    text: "Wintech installed our full CCTV system and billing setup. Zero downtime in two years and their AMC response is genuinely same-day.",
  },
  {
    name: "Anitha S.",
    role: "HR Manager, Meridian Tech",
    service: "Biometrics & Networking",
    text: "From biometrics to the office LAN, they delivered on time. Clean cabling, patient training — exactly what a growing office needs.",
  },
  {
    name: "Dr. Kiran M.",
    role: "Clinic Director",
    service: "Servers & Printers",
    text: "They set up our servers, printers and CCTV. Professional team, honest pricing. I recommend them to every clinic in my network.",
  },
  {
    name: "Fathima Noor",
    role: "Manager, Silk Route Boutique",
    service: "CCTV Installation",
    text: "Our store had blind spots for years. Wintech mapped every corner and the footage quality at night is far better than our old system.",
  },
  {
    name: "Suresh Gowda",
    role: "Proprietor, Gowda Hardware",
    service: "Billing Software",
    text: "Switched our old manual billing to their software in a single weekend. Staff picked it up fast and GST reports are now painless.",
  },
  {
    name: "Priya Ramesh",
    role: "Principal, Sunrise Public School",
    service: "Biometric Attendance",
    text: "Biometric attendance across three floors, all synced to one dashboard. Support calls get answered, not just logged.",
  },
  {
    name: "Manjunath B.",
    role: "Facility Head, Vega Business Park",
    service: "Electrical Works",
    text: "Handled our panel upgrade and CCTV rewiring without a single day of disruption to tenants. Clear documentation after handover too.",
  },
  {
    name: "Sneha Acharya",
    role: "Founder, Acharya Diagnostics",
    service: "IT Infrastructure",
    text: "They planned our server room from scratch — racks, UPS, networking. Two years in, everything still runs exactly as specified.",
  },
  {
    name: "Vikram Shetty",
    role: "Director, Shetty Motors",
    service: "AMC Support",
    text: "What sold us was the AMC. One call and an engineer is on-site the same day, whether it's a printer or a full server issue.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* STATS STRIP */}
      <section className="bg-primary py-10 text-white">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Our Services"
              title="One partner for every business system"
              sub="From surveillance to servers, biometrics to billing — we sell, install, service and maintain it all."
            />
          </Reveal>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Why Choose Us</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">
                Trusted by 800+ businesses across Mysore.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're not just installers — we're your long-term technology partner.
                Genuine products, certified engineers, transparent pricing, and support
                that actually shows up.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/about" className="btn-ghost-primary">About Wintech</Link>
                <Link to="/pricing" className="btn-primary">See AMC Plans</Link>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,107,53,0.2),transparent_50%)]" />
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
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-white/20" />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative text-center md:text-left">
                  <div className="mx-auto md:mx-0 grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground font-display text-lg font-bold ring-8 ring-primary relative">
                    {s.n}
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
      <section className="py-12 border-b border-border bg-surface">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Authorized partners & brands we work with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {BRANDS.map((b) => (
              <span key={b} className="text-lg sm:text-xl font-display font-bold text-muted-foreground/70 hover:text-primary transition-colors">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Client Stories"
              title="What our customers say"
              sub="Real feedback from businesses and homeowners across Mysore. Browse through, or let it play on its own."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 mx-auto max-w-3xl">
              <TestimonialsCarousel items={TESTIMONIALS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-primary p-8 sm:p-12 lg:p-16 text-white">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan/25 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold">
                  Ready for reliable, all-in-one IT support?
                </h2>
                <p className="mt-3 text-white/85 max-w-xl">
                  Book a free site visit today. Our engineer will assess your needs and
                  give you a transparent quote — no obligation.
                </p>
                <div className="mt-3 flex items-center gap-2 text-sm text-white/75">
                  <MapPin className="h-4 w-4 text-accent" />
                  {SITE.city}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${SITE.phone}`} className="btn-primary text-base !py-3.5 !px-7">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank" rel="noreferrer"
                  className="btn-outline text-base !py-3.5 !px-7"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service quick list */}
      <section className="hidden">
        {SERVICES.map((s) => <span key={s.slug}>{s.title}</span>)}
      </section>
    </>
  );
}

export function SectionHead({
  eyebrow, title, sub, light = false,
}: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <span className={`text-sm font-semibold uppercase tracking-wider ${light ? "text-accent" : "text-accent"}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

// silence unused warnings for icons imported for potential future use
void ChevronRight;