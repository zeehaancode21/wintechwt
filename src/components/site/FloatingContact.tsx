import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, MessageSquareText, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";

// Each option's position relative to the main FAB when expanded
// (fans out in a gentle arc going up-and-left from the button)
const OPTIONS = [
  {
    key: "call",
    label: "Call",
    href: `tel:${SITE.phone}`,
    x: -4,
    y: -78,
    bg: "bg-primary",
    icon: Phone,
  },
  {
    key: "message",
    label: "Message",
    href: `sms:${SITE.phone}`,
    x: -58,
    y: -142,
    bg: "bg-cyan",
    icon: MessageSquareText,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Wintech, I'd like a quote.")}`,
    x: -78,
    y: -212,
    bg: "bg-[#25D366]",
    icon: MessageCircle,
    external: true,
  },
] as const;

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside the widget
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-40">
      {/* Backdrop — dims the page slightly while options are open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 bg-charcoal/10 backdrop-blur-[1px]"
          />
        )}
      </AnimatePresence>

      <div className="relative h-14 w-14">
        {/* THREE EXPANDING CIRCLES: WhatsApp / Message / Call */}
        <AnimatePresence>
          {open &&
            OPTIONS.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.a
                  key={opt.key}
                  href={opt.href}
                  target={opt.external ? "_blank" : undefined}
                  rel={opt.external ? "noreferrer" : undefined}
                  aria-label={opt.label}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x: opt.x, y: opt.y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 20,
                    delay: i * 0.06,
                  }}
                  className={`group absolute bottom-0 right-0 grid h-14 w-14 place-items-center rounded-full text-white shadow-xl ${opt.bg}`}
                >
                  <Icon className="h-6 w-6" />
                  {/* Tooltip label */}
                  <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-charcoal px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
                    {opt.label}
                  </span>
                </motion.a>
              );
            })}
        </AnimatePresence>

        {/* MAIN FAB TOGGLE — blinking glow when closed */}
        <motion.button
          type="button"
          aria-label={open ? "Close contact options" : "Contact us"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.92 }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className={`absolute bottom-0 right-0 grid h-14 w-14 place-items-center rounded-full text-white shadow-xl transition-colors duration-300 ${
            open ? "bg-primary chat-fab-open" : "bg-accent chat-fab-blink"
          }`}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-7 w-7" />
          )}
        </motion.button>
      </div>
    </div>
  );
}