import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [, navigate] = useLocation();

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === '/';
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Reliable Home Service
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Expert home appliance repair services in Gurugram. Same-day doorstep service for Washing Machine, Refrigerator, Microwave, Dryer & Dishwasher.
            </p>
            <div className="flex gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Call us"
                data-testid="link-footer-call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email us"
                data-testid="link-footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid={`link-footer-${service.id}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                  data-testid="link-footer-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-background/70 hover:text-background transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-services"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#why-us"
                  className="text-background/70 hover:text-background transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-why-us"
                  onClick={(e) => scrollToSection(e, 'why-us')}
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-background/70 hover:text-background transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-testimonials"
                  onClick={(e) => scrollToSection(e, 'testimonials')}
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-background/70 hover:text-background transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-faq"
                  onClick={(e) => scrollToSection(e, 'faq')}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-background/70 hover:text-background transition-colors text-sm cursor-pointer"
                  data-testid="link-footer-contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-background/70 text-sm hover:text-background"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-background/70 text-sm hover:text-background"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Service Area</p>
                  <p className="text-background/70 text-sm">{COMPANY_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Working Hours</p>
                  <p className="text-background/70 text-sm">
                    {COMPANY_INFO.workingHours}
                  </p>
                  <p className="text-background/70 text-sm">
                    {COMPANY_INFO.workingDays}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p>
              Home Appliance Repair Services in Gurugram, Haryana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
