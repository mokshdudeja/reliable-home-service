import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { useBookingDialog } from "@/components/BookingDialog";

export function Services() {
  const { setOpen } = useBookingDialog();

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Complete Home Appliance Repair Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert doorstep repair for all major home appliances in Gurugram. 
            Book an appointment for same-day doorstep service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              className="group hover-elevate overflow-visible flex flex-col"
            >
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={service.image}
                    alt={`${service.name} in Gurugram`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={225}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-5 space-y-3">
                <h3 className="font-heading font-semibold text-lg">
                  {service.shortName}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {service.brands.slice(0, 4).map((brand) => (
                    <Badge key={brand} variant="secondary" className="text-xs">
                      {brand}
                    </Badge>
                  ))}
                  {service.brands.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{service.brands.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button
                  className="w-full gap-2"
                  onClick={() => setOpen(true)}
                  data-testid={`button-service-${service.id}`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book an Appointment
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
