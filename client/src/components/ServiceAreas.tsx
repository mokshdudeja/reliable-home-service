import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreas() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" id="areas">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-3 h-3 mr-1" />
            Service Areas
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Serving All Areas in Gurugram
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide doorstep home appliance repair services across Gurugram. 
            Our technicians can reach you anywhere in the city.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {SERVICE_AREAS.map((area) => (
            <Badge
              key={area}
              variant="outline"
              className="text-sm py-2 px-4"
            >
              {area}
            </Badge>
          ))}
        </div>

        <div className="mt-12 rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.2302956057!2d76.92842231320085!3d28.42296039854947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1706784000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Reliable Home Service - Gurugram Service Area"
          />
        </div>
      </div>
    </section>
  );
}
