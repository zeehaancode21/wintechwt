import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageSquare, Navigation, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { PageHero } from "./services";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: `Contact ${SITE.name} — Get a Free Quote` },
      { name: "description", content: `Call ${SITE.phoneDisplay}, WhatsApp or email ${SITE.email}. Free site visits across Mysore for CCTV, IT and electrical services.` },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:description", content: "Get a free quote or book a site visit today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

// Strips everything except digits, so tel:/wa.me links work
// regardless of how the number is formatted in SITE (+91, spaces, dashes, etc).
const toDigits = (value: string) => value.replace(/\D/g, "");

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const callHref = `tel:+${toDigits(SITE.phone)}`;
  const whatsappHref = `https://wa.me/${toDigits(SITE.whatsapp)}`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Website enquiry — " + (form.service || "General"))}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project."
        sub="Free site visits, honest quotes, same-day response across Mysore."
      />

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal>
            <div className="space-y-4">
              <InfoCard
                icon={Phone}
                title="Call Us"
                body={<a className="text-primary font-semibold transition-colors hover:text-accent" href={callHref}>{SITE.phoneDisplay}</a>}
                sub="Mon – Sat, 9:30 AM – 8:00 PM"
                href={callHref}
              />
              <InfoCard
                icon={MessageSquare}
                title="WhatsApp"
                body={<a className="text-primary font-semibold transition-colors hover:text-accent" href={whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp</a>}
                sub="Fastest response — usually within minutes"
                href={whatsappHref}
                pulse
              />
              <InfoCard
                icon={Mail}
                title="Email"
                body={<a className="text-primary font-semibold transition-colors hover:text-accent break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a>}
                sub="For quotes, AMC & partnerships"
                href={`mailto:${SITE.email}`}
              />
              <InfoCard
                icon={MapPin}
                title="Visit"
                body={<a className="text-primary font-semibold transition-colors hover:text-accent" href={directionsHref} target="_blank" rel="noreferrer">{SITE.city}</a>}
                sub="Serving all of Mysore & nearby areas"
                href={directionsHref}
              />
              <InfoCard icon={Clock} title="Business Hours" body={<span className="text-primary font-semibold">{SITE.hours}</span>} sub="Emergency support for AMC clients" />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
              <h2 className="font-display text-2xl font-bold text-primary">Get a free quote</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us what you need. We'll get back within a few hours.</p>

              {sent && (
                <div className="mt-5 animate-in fade-in slide-in-from-top-1 rounded-md bg-accent/10 border border-accent/30 p-3 text-sm text-accent">
                  Thanks! Your email client should now open with the details. If not, call {SITE.phoneDisplay}.
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Phone" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                </div>
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Multiple</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us about your requirement, site size, timeline…"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary justify-center transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                  Send Enquiry <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Prefer to talk? Call <a href={callHref} className="text-accent font-semibold hover:underline">{SITE.phoneDisplay}</a> or
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-accent font-semibold ml-1 hover:underline">WhatsApp us</a>.
                </p>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <div className="container-x mt-14">
          <Reveal>
            <div className="group overflow-hidden rounded-2xl border border-border shadow-sm transition-colors hover:border-accent/50">
              <iframe
                title="Wintech Enterprises location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                className="h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-4 border-t border-border bg-card px-5 py-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-primary">{SITE.city}</div>
                  <div className="text-xs text-muted-foreground">Tap below for turn-by-turn directions</div>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary shrink-0 !px-4 !py-2.5 text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon, title, body, sub, href, pulse = false,
}: { icon: any; title: string; body: React.ReactNode; sub: string; href?: string; pulse?: boolean }) {
  const content = (
    <div className="group rounded-xl border border-border bg-card p-5 flex gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md">
      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-transform duration-200 group-hover:scale-110">
        {pulse && <span className="absolute inset-0 animate-ping rounded-lg bg-accent/20" />}
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1">{body}</div>
        <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );

  // Whole card is clickable when a target href is provided, in addition to the inline link in `body`.
  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto");
    return (
      <a href={href} target={external && href.startsWith("http") ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="block">
        {content}
      </a>
    );
  }
  return content;
}

function Field({
  label, value, onChange, type = "text", required = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  );
}