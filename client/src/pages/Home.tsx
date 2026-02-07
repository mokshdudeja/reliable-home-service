import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SEOSchema } from "@/components/SEOSchema";
import { useDocumentHead } from "@/hooks/use-document-head";
import { COMPANY_INFO } from "@/lib/constants";

const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const BrandLogos = lazy(() => import("@/components/BrandLogos").then(m => ({ default: m.BrandLogos })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const ServiceAreas = lazy(() => import("@/components/ServiceAreas").then(m => ({ default: m.ServiceAreas })));
const ContactForm = lazy(() => import("@/components/ContactForm").then(m => ({ default: m.ContactForm })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FloatingCTA = lazy(() => import("@/components/FloatingCTA").then(m => ({ default: m.FloatingCTA })));

export default function Home() {
  useDocumentHead({
    title: `Washing Machine, Refrigerator, Microwave, Dryer, Dishwasher Repair in Gurugram | ${COMPANY_INFO.name}`,
    description: "Reliable Home Service - Expert home appliance repair in Gurugram. Same-day doorstep service for Washing Machine, Refrigerator, Microwave, Dryer & Dishwasher. Call now for instant repair!",
    canonical: "/",
  });

  return (
    <>
      <SEOSchema type="home" />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <Suspense fallback={null}>
            <WhyChooseUs />
            <BrandLogos />
            <Testimonials />
            <FAQ />
            <ServiceAreas />
            <ContactForm />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingCTA />
        </Suspense>
      </div>
    </>
  );
}
