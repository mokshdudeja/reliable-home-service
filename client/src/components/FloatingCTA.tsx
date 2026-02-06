import { Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
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
