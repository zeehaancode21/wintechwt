import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

// IMPORTANT: Replace this with your own Unsplash API key
// Get one at: https://unsplash.com/developers
const UNSPLASH_ACCESS_KEY = "beUQwqByJ8Q0W1geBx-UbB12yF49uXrQND0FYYlspQM";

// High-quality fallback images that are guaranteed to work
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1642606570507-ca8e13b8784d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1581092921461-7031e3e6d0f7?auto=format&fit=crop&w=1920&q=80", // Tech office
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80", // Circuit board
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80", // Server room
];

interface UnsplashPhoto {
  urls: { regular: string };
  alt_description?: string;
  description?: string;
}

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
  const [photos, setPhotos] = useState<string[]>(FALLBACK_IMAGES);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isUsingFallback, setIsUsingFallback] = useState(true);

  // FETCH LIVE IMAGES FROM UNSPLASH WITH MULTIPLE FALLBACK STRATEGIES
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        console.log("Attempting to fetch Unsplash images...");
        
        // Strategy 1: Try with the main query first
        let imageUrls = await tryFetchWithQuery(
          "cctv security camera server room network office technology"
        );
        
        // Strategy 2: If first strategy fails, try more specific queries
        if (!imageUrls || imageUrls.length === 0) {
          console.log("Main query failed, trying specific queries...");
          const specificQueries = [
            "technology office network",
            "server hardware data center",
            "security camera surveillance",
            "computer it professional"
          ];
          
          for (const query of specificQueries) {
            const result = await tryFetchWithQuery(query);
            if (result && result.length > 0) {
              imageUrls = result;
              break;
            }
          }
        }
        
        // Strategy 3: Try without any query (get random photos)
        if (!imageUrls || imageUrls.length === 0) {
          console.log("Specific queries failed, trying random photos...");
          imageUrls = await tryFetchRandomPhotos();
        }
        
        // If we got images, update state and mark as live
        if (imageUrls && imageUrls.length > 0) {
          setPhotos(imageUrls);
          setIsUsingFallback(false);
          console.log(`Successfully loaded ${imageUrls.length} images from Unsplash`);
        } else {
          console.log("All Unsplash strategies failed, using fallback images");
          setIsUsingFallback(true);
        }
        
      } catch (error) {
        console.error("Failed to fetch Unsplash images, using fallback set:", error);
        setIsUsingFallback(true);
      }
    };

    // Helper function to try fetching with a specific query
    const tryFetchWithQuery = async (query: string): Promise<string[] | null> => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${encodedQuery}&count=6&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        
        if (!response.ok) {
          console.warn(`Query "${query}" failed with status: ${response.status}`);
          return null;
        }
        
        const data: UnsplashPhoto[] = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
          return null;
        }
        
        // Filter and map the results
        const filtered = data.filter((photo) => {
          const text = `${photo.alt_description || ""} ${photo.description || ""}`.toLowerCase();
          return !(
            text.includes("food") ||
            text.includes("portrait") ||
            text.includes("animal") ||
            text.includes("person smiling") ||
            text.includes("selfie")
          );
        });
        
        const imageUrls = (filtered.length ? filtered : data)
          .slice(0, 6)
          .map((photo) => `${photo.urls.regular}&auto=format&fit=crop&w=1920&q=80`);
        
        return imageUrls.length > 0 ? imageUrls : null;
        
      } catch (error) {
        console.warn(`Error fetching with query "${query}":`, error);
        return null;
      }
    };
    
    // Helper function to try fetching random photos
    const tryFetchRandomPhotos = async (): Promise<string[] | null> => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=6&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        
        if (!response.ok) {
          console.warn(`Random fetch failed with status: ${response.status}`);
          return null;
        }
        
        const data: UnsplashPhoto[] = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
          return null;
        }
        
        return data
          .slice(0, 6)
          .map((photo) => `${photo.urls.regular}&auto=format&fit=crop&w=1920&q=80`);
          
      } catch (error) {
        console.warn("Error fetching random photos:", error);
        return null;
      }
    };

    fetchPhotos();
  }, []);

  // PRELOAD IMAGES for smooth transitions
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  // IMAGE ROTATION
  useEffect(() => {
    if (photos.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [photos]);

  // TEXT ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === heroContent.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGES */}
      {photos.map((img, index) => (
        <img
          key={img}
          src={img}
          alt="Wintech Enterprises — IT, CCTV, servers and electrical services"
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[2000ms] ease-in-out will-change-[opacity,transform] transform-gpu ${
            index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 via-primary-dark/65 to-primary-dark/90" />

      {/* ACCENT GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl animate-pulse" />

      {/* STATUS INDICATOR - Optional, shows if using fallback */}
      {isUsingFallback && (
        <div className="absolute bottom-20 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-xs text-white/50 backdrop-blur-sm">
          Using fallback images
        </div>
      )}

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
          <Link to="/contact" className="btn-hero">
            Get a Free Quote
            <ArrowRight size={18} className="btn-hero-icon" />
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