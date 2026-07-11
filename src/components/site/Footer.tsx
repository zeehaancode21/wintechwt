import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-accent text-accent-foreground font-display font-bold">
              W
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg">{SITE.shortName}</div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">Enterprises</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Your trusted partner for CCTV, IT infrastructure, biometrics, printers, billing
            software and electrical works in Mysore.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/pricing", label: "AMC Plans" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="hover:text-accent transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>{SITE.city}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`tel:${SITE.phone}`} className="hover:text-accent">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>Sales • Service • AMC • {SITE.city}</div>
        </div>
      </div>
    </footer>
  );
}
