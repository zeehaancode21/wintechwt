import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Our Services — ${SITE.name}` },
      { name: "description", content: "CCTV, computers, servers, networking, biometrics, printers, billing software and electrical works. Sales, service and AMC in Mysore." },
      { property: "og:title", content: `Services — ${SITE.name}` },
      { property: "og:description", content: "Sales, service & AMC for CCTV, IT, servers, printers, biometrics and electrical works in Mysore." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="End-to-end technology & electrical services"
        sub="Eight service lines, one accountable team. Explore what we deliver across sales, installation, repair and AMC."
      />

      {/* Anchor nav */}
      <div className="sticky top-16 sm:top-[72px] z-30 border-y border-border bg-white/85 backdrop-blur-lg">
        <div className="container-x flex gap-2 overflow-x-auto py-3 scrollbar-none">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="container-x py-16 sm:py-20 space-y-20">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const flip = i % 2 === 1;
          return (
            <section id={s.slug} key={s.slug} className="scroll-mt-32">
              <Reveal>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${flip ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      0{i + 1} · Service
                    </div>
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-primary">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.short}</p>
                    <ul className="mt-6 space-y-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3">
                          <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-foreground shrink-0">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm text-foreground">{it}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link to="/contact" className="btn-primary">
                        Get a Quote <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a href={`tel:${SITE.phone}`} className="btn-ghost-primary">
                        <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.3),transparent_60%)]" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Icon className="h-40 w-40 text-white/90" strokeWidth={1.2} />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-accent">Includes</div>
                        <div className="mt-1 text-sm font-semibold text-primary">
                          Sales · Installation · Repair · AMC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </section>
          );
        })}
      </div>
    </>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,107,53,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(0,180,216,0.18),transparent_50%)]" />
      <div className="container-x relative">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-[1.1]">
            {title}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-lg text-white/85">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
