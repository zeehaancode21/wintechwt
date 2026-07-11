import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Reveal } from "./motion";

export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.slug} delay={i * 60}>
            <Link
              to="/services"
              hash={s.slug}
              className="group block h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
