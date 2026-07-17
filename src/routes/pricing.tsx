import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "./services";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: `AMC Plans & Pricing — ${SITE.name}` },
      { name: "description", content: "Basic, Standard and Premium AMC plans for CCTV, IT, servers and electrical systems. Transparent pricing, no surprises." },
      { property: "og:title", content: `AMC Plans — ${SITE.name}` },
      { property: "og:description", content: "Annual Maintenance Contracts for CCTV, IT, servers and electrical systems." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const PLANS = [
  {
    name: "Basic",
    tag: "Small offices & homes",
    highlights: [
      "2 preventive maintenance visits / year",
      "Remote support (calls & WhatsApp)",
      "48-hour on-site response",
      "10% discount on spare parts",
      "Covers up to 8 devices",
    ],
    featured: false,
  },
  {
    name: "Standard",
    tag: "Most popular",
    highlights: [
      "4 preventive maintenance visits / year",
      "Priority phone & remote support",
      "24-hour on-site response",
      "20% discount on spare parts",
      "Free OS reinstall (1 / year / device)",
      "Covers up to 20 devices",
    ],
    featured: true,
  },
  {
    name: "Premium",
    tag: "Businesses & retail",
    highlights: [
      "Unlimited preventive visits",
      "Dedicated engineer & hotline",
      "Same-day / 4-hour response",
      "30% discount on spare parts",
      "Free labour on repairs",
      "Covers up to 50 devices",
      "Quarterly health & security audit",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="AMC Plans"
        title="Annual maintenance that keeps you running."
        sub="Fixed yearly pricing for CCTV, IT, servers, printers and electrical systems. Pick a plan or ask for a custom quote."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${
                    p.featured
                      ? "border-accent bg-primary text-white shadow-2xl scale-[1.02]"
                      : "border-border bg-card hover:border-accent hover:shadow-lg"
                  }`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-lg">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </div>
                  )}
                  <div>
                    <div className={`text-sm font-semibold uppercase tracking-wider ${p.featured ? "text-accent" : "text-accent"}`}>
                      {p.tag}
                    </div>
                    <h3 className={`mt-2 font-display text-3xl font-bold ${p.featured ? "text-white" : "text-primary"}`}>
                      {p.name}
                    </h3>
                    <div className={`mt-2 text-sm ${p.featured ? "text-white/75" : "text-muted-foreground"}`}>
                      Custom pricing — quote on request
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          p.featured ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"
                        }`}>
                          <Check className="h-3 w-3" />
                        </span>
                        <span className={p.featured ? "text-white/90" : "text-foreground"}>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 ${p.featured ? "btn-primary" : "btn-ghost-primary"}`}
                  >
                    Request Quote
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-primary">Need a custom AMC?</h3>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Every business is different. Tell us your setup and we'll design an AMC that
                fits your equipment, uptime needs and budget.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-primary">Talk to us</Link>
                <a href={`tel:${SITE.phone}`} className="btn-ghost-primary">Call {SITE.phoneDisplay}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}