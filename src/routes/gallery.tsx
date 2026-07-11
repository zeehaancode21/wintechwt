import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { PageHero } from "./services";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: `Project Gallery — ${SITE.name}` },
      { name: "description", content: "Recent CCTV, IT infrastructure, networking and electrical projects delivered by Wintech across Mysore." },
      { property: "og:title", content: `Project Gallery — ${SITE.name}` },
      { property: "og:description", content: "Recent installations and projects across Mysore." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

interface Project { title: string; category: string; img: string }

const CATS = ["All", "CCTV", "Office IT", "Server & Network", "Electrical", "Biometrics"];

const PROJECTS: Project[] = [
  { title: "Retail store surveillance — 24 cameras", category: "CCTV", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=70" },
  { title: "Corporate office IT setup", category: "Office IT", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70" },
  { title: "Server rack & structured cabling", category: "Server & Network", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70" },
  { title: "Panel board & MCB installation", category: "Electrical", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=70" },
  { title: "Biometric attendance for factory", category: "Biometrics", img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=900&q=70" },
  { title: "Clinic CCTV & intercom", category: "CCTV", img: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=900&q=70" },
  { title: "LAN cabling — 40 workstations", category: "Office IT", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=70" },
  { title: "UPS & inverter for showroom", category: "Electrical", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70" },
  { title: "Dell server + Windows Server setup", category: "Server & Network", img: "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?auto=format&fit=crop&w=900&q=70" },
];

function Gallery() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Recent projects across Mysore"
        sub="A snapshot of installations, setups and service work we've delivered for offices, retail and homes."
      />
      <section className="section-pad">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  cat === c
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border bg-card text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <figure className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</div>
                    <div className="mt-1 font-semibold text-foreground">{p.title}</div>
                  </figcaption>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
