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

const CATS = ["All", "CCTV", "Office IT", "Server & Network", "Electrical", "Biometrics", "Hotel Maintenance"];

// A short line describing the work we do for each category — shown above
// the related photos once that category is selected.
const CAT_DESCRIPTIONS: Record<string, string> = {
  "CCTV": "We install, service and maintain CCTV camera systems — cabling, DVR/NVR setup, remote viewing and ongoing technical support.",
  "Office IT": "We set up and maintain office IT — computers, LAN cabling, workstations and day-to-day technical support for businesses.",
  "Server & Network": "We install and maintain servers and networking — structured cabling, server racks and Windows Server setups.",
  "Electrical": "We handle electrical installation and maintenance — panel boards, MCBs, UPS and inverter setups for homes and businesses.",
  "Biometrics": "We install and maintain biometric attendance systems for offices and factories.",
  "Hotel Maintenance": "I maintain these hotel's CCTV systems and handle the technical work involved — installation, servicing and ongoing support.",
};

const PROJECTS: Project[] = [
  { title: "Retail store surveillance — 24 cameras", category: "CCTV", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=70" },
  { title: "Corporate office IT setup", category: "Office IT", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70" },
  { title: "Server rack & structured cabling", category: "Server & Network", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70" },
  { title: "Panel board & MCB installation", category: "Electrical", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=70" },
  { title: "Biometric attendance for factory", category: "Biometrics", img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=900&q=70" },
  { title: "hotel-1", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}hotel-1.jpg` },
  { title: "hotel-2", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}hotel-2.jpg` },
  { title: "hotel-3", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}hotel-3.jpg` },
  { title: "hotel-5", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}hotel-5.jpeg` },
  { title: "hotel-6", category: "Hotel Maintenance", img: `${import.meta.env.BASE_URL}hotel-6.webp` },
  { title: "LAN cabling — 40 workstations", category: "Office IT", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=70" },
  { title: "UPS & inverter for showroom", category: "Electrical", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70" },
  { title: "Dell server + Windows Server setup", category: "Server & Network", img: "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?auto=format&fit=crop&w=900&q=70" },
];

function Gallery() {
  const [cat, setCat] = useState<string>("All");

  // "All" shows one cover photo per category (not every photo).
  // Selecting a specific category shows every photo that belongs to it.
  const list =
    cat === "All"
      ? CATS.filter((c) => c !== "All")
          .map((c) => PROJECTS.find((p) => p.category === c))
          .filter((p): p is Project => Boolean(p))
      : PROJECTS.filter((p) => p.category === cat);

  // How many photos exist in each category — used for the "N photos" badge on All
  const countByCategory = (category: string) =>
    PROJECTS.filter((p) => p.category === category).length;

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

          {cat !== "All" && CAT_DESCRIPTIONS[cat] && (
            <Reveal>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm sm:text-base text-muted-foreground">
                {CAT_DESCRIPTIONS[cat]}
              </p>
            </Reveal>
          )}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => {
              const isCover = cat === "All";
              const count = countByCategory(p.category);
              return (
                <Reveal key={`${p.category}-${p.title}`} delay={i * 60}>
                  <figure
                    onClick={isCover ? () => setCat(p.category) : undefined}
                    className={`group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm ${
                      isCover ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <figcaption className="p-5">
                      {isCover ? (
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-sm font-semibold uppercase tracking-wider text-accent">
                            {p.category}
                          </div>
                          {count > 1 && (
                            <div className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                              {count} photos
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="font-semibold text-red-600">{p.title}</div>
                      )}
                    </figcaption>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}