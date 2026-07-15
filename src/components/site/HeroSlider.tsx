import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

/* Curated, verified free-to-use images (Unsplash License — free for
   commercial use, no attribution required). Swapped in for a live
   Unsplash API call so there's no third-party key or rate limit risk. */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80", // IT / office tech
  "https://images.unsplash.com/photo-1642606570507-ca8e13b8784d?auto=format&fit=crop&w=1920&q=80", // CCTV camera
  "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1920&q=80", // Server rack
];

/* Rotating headline + subtitle content, tuned to Wintech's actual services */
const heroContent = [
  {
    title: "Complete CCTV Surveillance Solutions",
    highlight: "CCTV Surveillance",
    subtitle:
      "From single-camera shops to multi-site enterprise setups — Hikvision & CP Plus systems installed, configured and monitored by certified engineers.",
  },
  {
    title: "IT Infrastructure You Can Rely On",
    highlight: "IT Infrastructure",
    subtitle:
      "Computers, networking, servers and structured cabling — set up right the first time, so your team isn't calling support every other week.",
  },
  {
    title: "Server Setup & Maintenance",
    highlight: "Server Setup",
    subtitle:
      "From procurement to configuration to ongoing AMC — we keep your business-critical systems running with same-day response across Mysore.",
  },
  {
    title: "Biometric & Access Control Systems",
    highlight: "Biometric Systems",
    subtitle:
      "Attendance, access control and security — integrated cleanly with your existing network, with training included so your staff actually use it.",
  },
  {
    title: "Electrical Works, Done Properly",
    highlight: "Electrical Works",
    subtitle:
      "Panel work, wiring and installations handled by trained technicians — genuine components only, no shortcuts that come back to bite you later.",
  },
  {
    title: "One Partner, Every System",
    highlight: "One Partner",
    subtitle:
      "CCTV, IT, servers, biometrics, printers and electrical — one AMC, one point of contact, and 12+ years keeping Mysore businesses running.",
  },
];

export function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  /* IMAGE ROTATION — every 3s */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* TEXT ROTATION — every 5s, offset from images so both feel intentional */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGES */}
      {HERO_IMAGES.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Wintech Enterprises — IT, CCTV, servers and electrical services"
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[2000ms] ease-in-out will-change-[opacity,transform] transform-gpu ${
            index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary-dark/65 to-primary-dark/90" />

      {/* ACCENT GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl animate-pulse" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Serving Mysore since 2013 · Sales · Service · AMC
            </div> */}

            <motion.h1
              className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0em" }}
              transition={{ duration: 0.8 }}
            >
              {heroContent[currentText].title.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`inline-block mr-3 ${
                    heroContent[currentText].highlight.includes(word)
                      ? "bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "140px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-6 h-[3px] rounded-full bg-gradient-to-r from-accent to-amber-300"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl"
            >
              {heroContent[currentText].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <Link
            to="/contact"
            className="group rounded-full bg-accent px-8 py-3 font-medium text-accent-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-accent/30"
          >
            <span className="flex items-center gap-2">
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
          >
            <Phone size={16} />
            Call {SITE.phoneDisplay}
          </a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-white/70 transition-colors hover:text-white"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronDown size={34} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}