import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I need home appliance repair service in Gurugram.`}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-floating-whatsapp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover-elevate active-elevate-2 overflow-visible"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp</span>
      </a>

      <a
        href={`tel:${COMPANY_INFO.phone}`}
        data-testid="link-floating-call"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover-elevate active-elevate-2 overflow-visible"
      >
        <Phone className="w-6 h-6" />
        <span className="sr-only">Call Now</span>
      </a>
    </div>
  );
}
