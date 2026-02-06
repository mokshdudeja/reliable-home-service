import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Shield, Wrench } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm py-1 px-3">
                <Clock className="w-3 h-3 mr-1" />
                Same Day Service
              </Badge>
              <Badge variant="secondary" className="text-sm py-1 px-3">
                <Shield className="w-3 h-3 mr-1" />
                {COMPANY_INFO.experience} Years Experience
              </Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Fast & Reliable Home Appliance{" "}
              <span className="text-primary">Repair Service</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Fast, reliable doorstep repair for Washing Machine, Refrigerator, Microwave, Dryer & Dishwasher. 
              Certified technicians with {COMPANY_INFO.experience} years of experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={`tel:${COMPANY_INFO.phone}`} data-testid="link-hero-call">
                <Button size="lg" className="gap-2 text-base">
                  <Phone className="h-5 w-5" />
                  Book an Appointment
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{COMPANY_INFO.servicesCompleted}</p>
                  <p>Services Done</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{COMPANY_INFO.happyCustomers}</p>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-technician.png"
                alt="Professional home appliance repair technician in Gurugram"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
