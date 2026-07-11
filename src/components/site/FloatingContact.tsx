import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Wintech, I'd like a quote.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="float-pulse grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.28c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.26-1.4-.83-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38 0 1.4 1.02 2.75 1.17 2.94.14.19 2.02 3.08 4.89 4.32.68.3 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.68-.69 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.54-.33zM16.02 4C9.4 4 4.06 9.34 4.06 15.95c0 2.11.55 4.16 1.6 5.97L4 28l6.24-1.63a11.9 11.9 0 005.78 1.47h.01c6.6 0 11.95-5.34 11.95-11.95C27.98 9.34 22.63 4 16.02 4z" />
        </svg>
      </a>
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-xl transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
