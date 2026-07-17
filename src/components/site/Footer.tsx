import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { Reveal } from "./motion";

const SLOGAN_WORDS = SITE.slogan.split(" ");
const SLOGAN_LEAD = SLOGAN_WORDS.slice(0, -1).join(" ");
const SLOGAN_LAST = SLOGAN_WORDS[SLOGAN_WORDS.length - 1];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white/80">
      {/* Ambient glow blobs — echoes the accent/cyan glow language used in Hero & CTA sections */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-blob-1" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan/10 blur-3xl animate-blob-2" />

      {/* Top accent line */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-x relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <div className="flex items-center gap-2">
            <motion.img
              src={`${import.meta.env.BASE_URL}logo-white.png`}
              alt={SITE.shortName}
              className="h-10 w-10 rounded-md object-contain"
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            />
            <div>
              <div className="font-display font-bold text-white text-lg">{SITE.shortName}</div>
              <div className="text-[11px] uppercase tracking-wider text-white/60">Enterprises</div>
              <div className="mt-0.5 text-xs font-medium text-white/70">
                {SLOGAN_LEAD} <span className="font-semibold text-accent">{SLOGAN_LAST}</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Your trusted partner for CCTV, IT infrastructure, biometrics, printers, billing
            software and electrical works in Mysore.
          </p>
          {/* <div className="mt-4 flex gap-3">
            <motion.a
              href="/"
              aria-label="Facebook"
              whileHover={{ scale: 1.12, rotate: -6 }}
              whileTap={{ scale: 0.94 }}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/"
              aria-label="Instagram"
              whileHover={{ scale: 1.12, rotate: 6 }}
              whileTap={{ scale: 0.94 }}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </motion.a>
          </div> */}
        </Reveal>

        <Reveal delay={80}>
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
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <span className="relative">
                    {l.label}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="group inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <span className="relative">
                    {s.title}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="group flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span>{SITE.city}</span>
            </li>
            <li className="group flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <a href={`tel:${SITE.phone}`} className="hover:text-accent transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="group flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors break-all">
                {SITE.email}
              </a>
            </li>
            <li className="group flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Sales • Service • AMC • {SITE.city}
          </div>
        </div>
      </div>
    </footer>
  );
}