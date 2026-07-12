import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "AMC Plans" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/85 backdrop-blur-lg shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt={SITE.shortName}
            className="h-10 w-10 rounded-md object-contain"
          />
          <div className="min-w-0">
            <div
              className={`font-display font-bold leading-tight text-base sm:text-lg ${scrolled ? "text-primary" : "text-white"
                }`}
            >
              {SITE.shortName}
            </div>
            <div
              className={`text-[10px] sm:text-[11px] uppercase tracking-wider leading-tight ${scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
            >
              Enterprises
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${scrolled
                ? "text-foreground hover:text-accent hover:bg-secondary"
                : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              activeProps={{
                className: `px-3 py-2 text-sm font-semibold rounded-md ${scrolled ? "text-accent bg-secondary" : "text-white bg-white/15"
                  }`,
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone}`}
            className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-primary" : "text-white"
              }`}
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 text-xs">
            Get a Quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-md ${scrolled ? "text-primary bg-secondary" : "text-white bg-white/15"
              }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white shadow-lg">
          <nav className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium text-foreground border-b border-border last:border-0"
                activeProps={{ className: "px-3 py-3 text-sm font-semibold text-accent border-b border-border last:border-0" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phone}`} className="mt-3 btn-primary">
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
