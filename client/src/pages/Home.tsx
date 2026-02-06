import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BrandLogos } from "@/components/BrandLogos";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ServiceAreas } from "@/components/ServiceAreas";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SEOSchema } from "@/components/SEOSchema";
import { useDocumentHead } from "@/hooks/use-document-head";
import { COMPANY_INFO } from "@/lib/constants";

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
          <WhyChooseUs />
          <BrandLogos />
          <Testimonials />
          <FAQ />
          <ServiceAreas />
          <ContactForm />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
