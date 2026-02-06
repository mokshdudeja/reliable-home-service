import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { SEOSchema } from "@/components/SEOSchema";
import { useDocumentHead } from "@/hooks/use-document-head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  CheckCircle, 
  Clock, 
  Shield, 
  ArrowLeft,
  Wrench
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:serviceId");
  
  const service = match && params ? SERVICES.find((s) => s.id === params.serviceId) : null;

  useDocumentHead({
    title: service 
      ? `${service.name} in Gurugram - Same Day Doorstep Service | ${COMPANY_INFO.name}`
      : `Service Not Found | ${COMPANY_INFO.name}`,
    description: service 
      ? `${service.description} Same-day doorstep service in Gurugram. Call now to book an appointment for expert ${service.shortName.toLowerCase()} repair!`
      : "Service not found",
    canonical: service ? `/services/${service.id}` : undefined,
    ogImage: service?.image,
  });

  if (!match || !params || !service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-2xl font-bold">Service Not Found</h1>
            <Link href="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOSchema type="service" serviceId={service.id} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      <Clock className="w-3 h-3 mr-1" />
                      Same Day Service
                    </Badge>
                  </div>

                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    {service.name} in{" "}
                    <span className="text-primary">Gurugram</span>
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground">
                    {service.description} Our certified technicians are available for 
                    same-day doorstep service across all Gurugram areas.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${COMPANY_INFO.phone}`} data-testid="link-service-call">
                      <Button size="lg" className="gap-2 text-base">
                        <Phone className="h-5 w-5" />
                        Book an Appointment
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted">
                    <img
                      src={service.image}
                      alt={`${service.name} in Gurugram - Professional repair service`}
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="font-heading text-xl font-semibold">
                        Common {service.shortName} Issues We Fix
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {service.commonIssues.map((issue, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="font-heading text-xl font-semibold">
                        Brands We Repair
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand) => (
                        <Badge key={brand} variant="outline" className="py-2 px-3">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm pt-2">
                      Our technicians are trained to repair all major {service.shortName.toLowerCase()} brands 
                      with genuine spare parts and proper tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
                Why Choose Us for {service.shortName} Repair in Gurugram?
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover-elevate overflow-visible">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Same Day Service</h3>
                    <p className="text-sm text-muted-foreground">
                      Technician at your door within 2-4 hours
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-elevate overflow-visible">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">
                      No hidden charges, upfront quotes
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-elevate overflow-visible">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Warranty Included</h3>
                    <p className="text-sm text-muted-foreground">
                      30-90 days warranty on all repairs
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-elevate overflow-visible">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Expert Technicians</h3>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY_INFO.experience}+ years of experience
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
                {service.shortName} Repair Process
              </h2>
              <div className="grid gap-4">
                {[
                  { step: 1, title: "Book a Service", desc: "Call us or fill the form to book your repair appointment" },
                  { step: 2, title: "Technician Visit", desc: "Our expert technician arrives at your doorstep" },
                  { step: 3, title: "Diagnosis & Quote", desc: "We diagnose the issue and provide a transparent quote" },
                  { step: 4, title: "Professional Repair", desc: "Quick repair with genuine parts and quality workmanship" },
                  { step: 5, title: "Quality Check", desc: "We ensure your appliance works perfectly before leaving" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
