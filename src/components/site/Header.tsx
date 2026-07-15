import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Accent hairline that fades in once scrolled — echoes the accent glow used across the page */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        initial={false}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="container-x flex items-center justify-between gap-4 py-3 sm:py-4">
        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="relative"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              className="absolute inset-0 rounded-md bg-accent/25 blur-md"
              variants={{ rest: { opacity: 0, scale: 0.8 }, hover: { opacity: 1, scale: 1.3 } }}
              transition={{ duration: 0.35 }}
            />
            <motion.img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt={SITE.shortName}
              className="relative h-10 w-10 rounded-md object-contain"
              variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -8, scale: 1.08 } }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            />
          </motion.div>
          <div className="min-w-0">
            <div
              className={`font-display font-bold leading-tight text-base sm:text-lg transition-colors duration-500 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              {SITE.shortName}
            </div>
            <div
              className={`text-[10px] sm:text-[11px] uppercase tracking-wider leading-tight transition-colors duration-500 ${
                scrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              Enterprises
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV — animated underline indicator */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`group relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
              activeProps={{
                className: `group relative px-3 py-2 text-sm font-semibold rounded-md ${
                  scrolled ? "text-accent" : "text-white"
                }`,
              }}
            >
              {n.label}
              {/* underline grows from center on hover */}
              <span
                className={`pointer-events-none absolute left-1/2 bottom-0.5 h-[2px] w-0 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ease-out group-hover:w-[calc(100%-1.5rem)]`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone}`}
            className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            <motion.span
              animate={{ rotate: [0, -12, 12, -8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            >
              <Phone className="h-4 w-4" />
            </motion.span>
            {SITE.phoneDisplay}
          </a>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 text-xs">
              Get a Quote
            </Link>
          </motion.div>

          {/* ANIMATED HAMBURGER */}
          <motion.button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-md transition-colors duration-300 ${
              scrolled ? "text-primary bg-secondary" : "text-white bg-white/15"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU — slide + stagger */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border bg-white shadow-lg"
          >
            <motion.nav
              className="container-x flex flex-col py-3"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              {NAV.map((n) => (
                <motion.div
                  key={n.to}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -16 },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-medium text-foreground border-b border-border last:border-0"
                    activeProps={{
                      className: "block px-3 py-3 text-sm font-semibold text-accent border-b border-border last:border-0",
                    }}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={`tel:${SITE.phone}`}
                variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -16 } }}
                transition={{ duration: 0.25 }}
                className="mt-3 btn-primary"
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}