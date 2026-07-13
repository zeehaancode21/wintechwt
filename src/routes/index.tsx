import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Clock,
  ShieldCheck,
  Wrench,
  Users,
  Award,
  Zap,
  Phone,
  MessageSquare,
  MapPin,
  ChevronRight,
  Sparkles,
  X,
  ArrowRight,
  CheckCircle,
  Globe,
  Cpu,
  Server,
  Camera,
  Network,
  Building,
  Settings,
  Star,
  Heart,
  Rocket,
  Zap as ZapIcon,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Counter, Reveal } from "@/components/site/motion";
import { TestimonialsCarousel, type Testimonial } from "@/components/site/TestimonialsCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: `${SITE.name} — CCTV, IT, Servers & Electrical | Mysore` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const STATS = [
  { icon: Award, value: 12, suffix: "+", label: "Years of Experience" },
  { icon: BadgeCheck, value: 2500, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 800, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 24, suffix: "h", label: "Response Time" },
];

const WHY = [
  { icon: ShieldCheck, title: "Certified Technicians", desc: "Trained, background-verified engineers with brand certifications." },
  { icon: Wrench, title: "Genuine Parts Only", desc: "We source from authorized distributors — no grey-market components." },
  { icon: Clock, title: "Same-Day Service", desc: "Fast dispatch across Mysore. Emergency support for AMC clients." },
  { icon: Zap, title: "End-to-End Solutions", desc: "One partner for CCTV, IT, servers, biometrics and electrical." },
];

const STEPS = [
  { n: "01", title: "Enquiry", desc: "Call, WhatsApp or fill our form. Tell us your requirement." },
  { n: "02", title: "Site Visit", desc: "Free consultation and site survey by our engineer." },
  { n: "03", title: "Installation", desc: "Professional installation with tested, branded products." },
  { n: "04", title: "Support & AMC", desc: "Ongoing maintenance, quick fixes, and yearly contracts." },
];

const BRANDS = ["Hikvision", "CP Plus", "Dell", "HP", "Lenovo", "Dahua", "Cisco", "TP-Link", "Epson", "Canon"];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Prime Retail Mysore",
    service: "CCTV & Billing",
    text: "Wintech installed our full CCTV system and billing setup. Zero downtime in two years and their AMC response is genuinely same-day.",
  },
  {
    name: "Anitha S.",
    role: "HR Manager, Meridian Tech",
    service: "Biometrics & Networking",
    text: "From biometrics to the office LAN, they delivered on time. Clean cabling, patient training — exactly what a growing office needs.",
  },
  {
    name: "Dr. Kiran M.",
    role: "Clinic Director",
    service: "Servers & Printers",
    text: "They set up our servers, printers and CCTV. Professional team, honest pricing. I recommend them to every clinic in my network.",
  },
  {
    name: "Fathima Noor",
    role: "Manager, Silk Route Boutique",
    service: "CCTV Installation",
    text: "Our store had blind spots for years. Wintech mapped every corner and the footage quality at night is far better than our old system.",
  },
  {
    name: "Suresh Gowda",
    role: "Proprietor, Gowda Hardware",
    service: "Billing Software",
    text: "Switched our old manual billing to their software in a single weekend. Staff picked it up fast and GST reports are now painless.",
  },
  {
    name: "Priya Ramesh",
    role: "Principal, Sunrise Public School",
    service: "Biometric Attendance",
    text: "Biometric attendance across three floors, all synced to one dashboard. Support calls get answered, not just logged.",
  },
  {
    name: "Manjunath B.",
    role: "Facility Head, Vega Business Park",
    service: "Electrical Works",
    text: "Handled our panel upgrade and CCTV rewiring without a single day of disruption to tenants. Clear documentation after handover too.",
  },
  {
    name: "Sneha Acharya",
    role: "Founder, Acharya Diagnostics",
    service: "IT Infrastructure",
    text: "They planned our server room from scratch — racks, UPS, networking. Two years in, everything still runs exactly as specified.",
  },
  {
    name: "Vikram Shetty",
    role: "Director, Shetty Motors",
    service: "AMC Support",
    text: "What sold us was the AMC. One call and an engineer is on-site the same day, whether it's a printer or a full server issue.",
  },
];

// Floating particles animation
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Animated Logo Component with Multiple Pop Effects
const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-flex items-center gap-3 cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main Logo Container with 3D Pop Effect */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 200,
          duration: 0.8,
        }}
      >
        {/* Glow Rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/20"
          animate={{
            scale: isHovered ? 1.8 : 1.2,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-accent/10"
          animate={{
            scale: isHovered ? 2.2 : 1.4,
            opacity: isHovered ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />

        {/* Logo Icon with Pop Animation */}
        <motion.div
          className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-primary text-white shadow-xl"
          whileHover={{
            scale: 1.2,
            rotate: [0, -5, 5, -3, 3, 0],
            boxShadow: "0 20px 40px -12px rgba(255,107,53,0.5)",
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/50 to-primary/50"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Sparkle Effect */}
          <motion.div
            className="absolute -right-1 -top-1"
            animate={{
              scale: isHovered ? 1.5 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-4 w-4 text-accent" />
          </motion.div>

          {/* Main Icon */}
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
          >
            <ShieldCheck className="h-8 w-8 relative z-10" />
          </motion.div>

          {/* Inner Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/20"
            animate={{
              opacity: isHovered ? 0.4 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      {/* Logo Text with Pop Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          delay: 0.3,
        }}
      >
        <motion.div
          className="font-display text-2xl font-bold text-primary"
          whileHover={{
            scale: 1.05,
            color: "#FF6B35",
          }}
        >
          <motion.span
            animate={{
              letterSpacing: isHovered ? "0.05em" : "0em",
            }}
            transition={{ duration: 0.3 }}
          >
            Win
          </motion.span>
          <motion.span
            className="text-accent"
            animate={{
              color: isHovered ? "#FF6B35" : "#FF6B35",
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            tech
          </motion.span>
        </motion.div>
        <motion.p
          className="text-xs text-muted-foreground"
          animate={{
            opacity: isHovered ? 1 : 0.7,
            x: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          Technology Solutions
        </motion.p>
      </motion.div>

      {/* Floating Stars */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute text-accent/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <Star className="h-3 w-3" />
        </motion.div>
      ))}
    </motion.div>
  );
};

// Enhanced Learn More Popup with Unique Animations
const LearnMorePopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const features = [
    { icon: Camera, title: "CCTV Surveillance", desc: "HD cameras with night vision and remote access", color: "from-blue-500 to-cyan-400" },
    { icon: Server, title: "Server Solutions", desc: "On-premise & cloud servers with backup", color: "from-purple-500 to-pink-400" },
    { icon: Network, title: "Networking", desc: "Structured cabling & WiFi solutions", color: "from-green-500 to-emerald-400" },
    { icon: Building, title: "Electrical Works", desc: "Panel upgrades & complete wiring", color: "from-yellow-500 to-orange-400" },
    { icon: Cpu, title: "IT Support", desc: "Hardware, software & AMC contracts", color: "from-red-500 to-rose-400" },
    { icon: Settings, title: "Biometrics", desc: "Attendance systems & access control", color: "from-indigo-500 to-violet-400" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-surface via-card to-surface shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Decorative header gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_200%] animate-gradient-shift" />

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/10 p-2 text-foreground/60 hover:bg-black/20 hover:text-foreground transition-colors"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="rounded-full bg-accent/10 p-2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="h-6 w-6 text-accent" />
                    </motion.div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                      Why Choose Us
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                    Your Complete Technology Partner
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    We deliver end-to-end solutions with guaranteed quality and support.
                  </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20, scale: 0.9 },
                          visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px -12px rgba(255,107,53,0.3)",
                          borderColor: "#FF6B35",
                        }}
                        className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-xl"
                      >
                        <motion.div
                          className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>
                        <h3 className="mt-3 font-semibold text-foreground group-hover:text-accent transition-colors">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {feature.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Stats & CTA */}
                <motion.div
                  className="mt-8 grid gap-4 sm:grid-cols-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { label: "Projects Completed", value: "2500+", icon: CheckCircle, color: "from-blue-500 to-cyan-400" },
                    { label: "Happy Clients", value: "800+", icon: Users, color: "from-green-500 to-emerald-400" },
                    { label: "Years Experience", value: "12+", icon: Award, color: "from-yellow-500 to-orange-400" },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        className="rounded-lg bg-primary/5 p-4 text-center hover:bg-primary/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className={`mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>
                        <p className="mt-2 font-display text-xl font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                  className="mt-8 flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a
                    href={`tel:${SITE.phone}`}
                    className="flex-1 min-w-[140px] rounded-xl bg-gradient-to-r from-accent to-primary px-6 py-3 text-center font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(255,107,53,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="mr-2 inline h-4 w-4" />
                    Call Now
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[140px] rounded-xl border-2 border-accent/30 bg-transparent px-6 py-3 text-center font-semibold text-foreground transition-all hover:border-accent hover:bg-accent/5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare className="mr-2 inline h-4 w-4" />
                    WhatsApp
                  </motion.a>
                  <motion.button
                    onClick={onClose}
                    className="flex-1 min-w-[140px] rounded-xl border border-border bg-card px-6 py-3 text-center font-semibold text-muted-foreground transition-all hover:bg-surface hover:text-foreground"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Enhanced Learn More Button with Multiple Animation Layers
const LearnMoreButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsPopupOpen(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-xl px-8 py-4 font-semibold text-white shadow-lg transition-all ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(135deg, #FF6B35, #FF4500, #FF6B35)",
          backgroundSize: "200% 200%",
        }}
      >
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : ["0% 0%", "50% 50%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(135deg, #FF6B35, #FF4500, #FF6B35, #FF8C00)",
            backgroundSize: "300% 300%",
          }}
        />

        {/* Rotating Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: isHovered 
              ? ["0 0 20px rgba(255,107,53,0.5)", "0 0 40px rgba(255,107,53,0.8)", "0 0 20px rgba(255,107,53,0.5)"]
              : ["0 0 10px rgba(255,107,53,0.3)", "0 0 20px rgba(255,107,53,0.5)", "0 0 10px rgba(255,107,53,0.3)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/60"
                initial={{ 
                  x: "50%", 
                  y: "50%",
                  opacity: 0 
                }}
                animate={{
                  x: ["50%", `${30 + Math.random() * 40}%`],
                  y: ["50%", `${20 + Math.random() * 60}%`],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center gap-3">
          {/* Pulsing Icon */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.3, 1] : 1,
              rotate: isHovered ? [0, 360] : 0,
            }}
            transition={{
              duration: isHovered ? 0.8 : 0,
              repeat: isHovered ? Infinity : 0,
            }}
          >
            <Rocket className="h-4 w-4" />
          </motion.div>
          
          {children}
          
          {/* Bouncing Arrow */}
          <motion.span
            animate={{ 
              x: isHovered ? [0, 8, 0] : [0, 5, 0],
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </span>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: isHovered ? ["-100%", "100%"] : "-100%",
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        {/* Border Glow */}
        <motion.div
          className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100"
          animate={{
            opacity: isHovered ? [0, 0.6, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(90deg, #FF6B35, #FF4500, #FF6B35)",
            backgroundSize: "200% 200%",
            zIndex: -1,
          }}
        />
      </motion.button>

      <LearnMorePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* STATS STRIP with animated background */}
      <section className="relative overflow-hidden bg-primary py-10 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.3),transparent_50%)]" />
        <FloatingParticles />
        <div className="container-x relative">
          <Reveal>
            <motion.div 
              className="grid grid-cols-2 gap-6 sm:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {STATS.map((s, index) => (
                <motion.div
                  key={s.label}
                  className="text-center sm:text-left group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad bg-surface relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="Our Services"
              title="One partner for every business system"
              sub="From surveillance to servers, biometrics to billing — we sell, install, service and maintain it all."
            />
          </Reveal>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.05),transparent_50%)]" />
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center relative">
          <Reveal>
            <div>
              {/* Animated Logo Section */}
              <div className="mb-6">
                <AnimatedLogo />
              </div>
              
              <motion.span 
                className="inline-block text-sm font-semibold uppercase tracking-wider text-accent"
                whileHover={{ scale: 1.05 }}
              >
                Why Choose Us
              </motion.span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-primary">
                Trusted by 800+ businesses across Mysore.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We're not just installers — we're your long-term technology partner.
                Genuine products, certified engineers, transparent pricing, and support
                that actually shows up.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="btn-ghost-primary">About Wintech</Link>
                </motion.div>
                
                {/* Enhanced Learn More Button with Popup */}
                <LearnMoreButton>
                  Learn More
                </LearnMoreButton>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {WHY.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.title} delay={i * 80}>
                  <motion.div
                    className="h-full rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 transition-all hover:shadow-xl hover:shadow-accent/20 hover:border-accent relative overflow-hidden group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div 
                      className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent relative"
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="mt-4 font-semibold text-foreground relative">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground relative">{w.desc}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,107,53,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <FloatingParticles />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="How It Works"
              title="A simple, transparent process"
              sub="From your first call to long-term AMC — no surprises, no jargon."
              light
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <motion.div 
                  className="relative text-center md:text-left group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="mx-auto md:mx-0 grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground font-display text-lg font-bold ring-8 ring-primary relative"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {s.n}
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-accent/30"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  </motion.div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{s.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS with animated marquee */}
      <section className="py-12 border-b border-border bg-surface overflow-hidden">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Authorized partners & brands we work with
          </p>
          <div className="mt-6 relative">
            <motion.div 
              className="flex items-center justify-center gap-x-10 gap-y-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {BRANDS.map((b, index) => (
                <motion.span
                  key={b}
                  className="text-lg sm:text-xl font-display font-bold text-muted-foreground/70 hover:text-primary transition-colors cursor-pointer"
                  whileHover={{ 
                    scale: 1.2,
                    color: "#FF6B35",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-surface relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.05),transparent_50%)]" />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="Client Stories"
              title="What our customers say"
              sub="Real feedback from businesses and homeowners across Mysore. Browse through, or let it play on its own."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 mx-auto max-w-3xl">
              <TestimonialsCarousel items={TESTIMONIALS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA with 3D hover effect */}
      <section className="pb-20">
        <div className="container-x">
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-primary p-8 sm:p-12 lg:p-16 text-white"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan/25 blur-3xl animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_70%)]" />
            <FloatingParticles />
            
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <motion.h2 
                  className="font-display text-3xl sm:text-4xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Ready for reliable, all-in-one IT support?
                </motion.h2>
                <motion.p 
                  className="mt-3 text-white/85 max-w-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Book a free site visit today. Our engineer will assess your needs and
                  give you a transparent quote — no obligation.
                </motion.p>
                <motion.div 
                  className="mt-3 flex items-center gap-2 text-sm text-white/75"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  {SITE.city}
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={`tel:${SITE.phone}`}
                  className="btn-primary text-base !py-3.5 !px-7 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Call Now
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank" rel="noreferrer"
                  className="btn-outline text-base !py-3.5 !px-7 border-white/30 hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service quick list */}
      <section className="hidden">
        {SERVICES.map((s) => <span key={s.slug}>{s.title}</span>)}
      </section>
    </>
  );
}

export function SectionHead({
  eyebrow, title, sub, light = false,
}: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <motion.div 
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className={`text-sm font-semibold uppercase tracking-wider ${light ? "text-accent" : "text-accent"}`}
        whileHover={{ letterSpacing: "0.1em" }}
        transition={{ duration: 0.3 }}
      >
        {eyebrow}
      </motion.span>
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-muted-foreground"}`}>{sub}</p>}
    </motion.div>
  );
}

void ChevronRight;
void Globe;
void Heart;
void ZapIcon;