import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I need home appliance repair service in Gurugram.`}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-floating-whatsapp"
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">WhatsApp</span>
        </Button>
      </a>

      <a href={`tel:${COMPANY_INFO.phone}`} data-testid="link-floating-call">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg"
        >
          <Phone className="w-6 h-6" />
          <span className="sr-only">Call Now</span>
        </Button>
      </a>
    </div>
  );
}
