import { COMPANY_INFO, SERVICES, FAQ_DATA, TESTIMONIALS } from "@/lib/constants";

interface SEOSchemaProps {
  type: "home" | "service";
  serviceId?: string;
}

export function SEOSchema({ type, serviceId }: SEOSchemaProps) {
  const service = serviceId ? SERVICES.find((s) => s.id === serviceId) : null;
  const baseUrl = "https://reliablehomeservice.in";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": COMPANY_INFO.name,
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.jpg`,
    "image": `${baseUrl}/images/hero-technician.webp`,
    "description": "Professional home appliance repair service in Gurugram, Haryana. Same-day doorstep repair for washing machines, refrigerators, microwaves, dryers, and dishwashers.",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "customer service",
      "areaServed": "Gurugram",
      "availableLanguage": ["English", "Hindi"],
    },
    "sameAs": [
      baseUrl,
    ],
    "knowsAbout": [
      "Washing Machine Repair",
      "Refrigerator Repair",
      "Microwave Repair",
      "Dryer Repair",
      "Dishwasher Repair",
      "Home Appliance Repair",
      "Appliance Maintenance",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}/#business`,
    "name": COMPANY_INFO.name,
    "image": `${baseUrl}/images/hero-technician.webp`,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "description": "Reliable Home Service provides expert home appliance repair in Gurugram. Same-day doorstep service for Washing Machine, Refrigerator, Microwave, Dryer & Dishwasher with 10+ years of experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gurugram",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4595",
      "longitude": "77.0266",
    },
    "url": baseUrl,
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Card",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      "opens": "09:00",
      "closes": "20:00",
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Gurugram",
        "@id": "https://www.wikidata.org/wiki/Q1643652",
      },
      {
        "@type": "City",
        "name": "Gurgaon",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Appliance Repair Services",
      "itemListElement": SERVICES.map((s) => ({
        "@type": "OfferCatalog",
        "name": s.name,
        "itemListElement": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.name,
            "description": s.description,
          },
        },
      })),
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "450",
      "reviewCount": "450",
    },
    "slogan": "Your Trusted Partner for Home Appliance Repair in Gurugram",
    "foundingDate": "2016",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": "10",
      "maxValue": "50",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": COMPANY_INFO.name,
    "url": baseUrl,
    "description": "Reliable Home Service - Professional home appliance repair in Gurugram. Same-day doorstep service.",
    "publisher": {
      "@id": `${baseUrl}/#organization`,
    },
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "Reliable Home Service | Appliance Repair Gurugram",
    "description": "Same-day home appliance repair in Gurugram. Expert washing machine, refrigerator, microwave, dryer & dishwasher repair. Call +91 97111 07248",
    "isPartOf": { "@id": `${baseUrl}/#website` },
    "about": { "@id": `${baseUrl}/#organization` },
    "inLanguage": "en-IN",
    "datePublished": "2024-01-01",
    "dateModified": "2026-02-07",
  };

  const serviceSchemas = SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/${s.id}`,
    "name": `${s.name} in Gurugram`,
    "description": s.description,
    "image": `${baseUrl}${s.image}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "@id": `${baseUrl}/#business`,
    },
    "areaServed": {
      "@type": "City",
      "name": "Gurugram",
    },
    "serviceType": "Appliance Repair",
    "category": "Home Appliance Repair",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "eligibleRegion": {
        "@type": "Place",
        "name": "Gurugram, Haryana, India",
      },
    },
    "termsOfService": "30-90 days warranty on all repairs",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${s.shortName} Brands We Repair`,
      "itemListElement": s.brands.map((brand) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": `${brand} ${s.shortName}`,
          "brand": { "@type": "Brand", "name": brand },
        },
      })),
    },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const averageRating = (TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#reviews`,
    "name": COMPANY_INFO.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": TESTIMONIALS.length.toString(),
      "reviewCount": TESTIMONIALS.length.toString(),
    },
    "review": TESTIMONIALS.map((t) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString(),
        "bestRating": "5",
      },
      "author": {
        "@type": "Person",
        "name": t.name,
      },
      "reviewBody": t.comment,
      "datePublished": "2025-12-01",
      "publisher": {
        "@type": "Organization",
        "name": COMPANY_INFO.name,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book Home Appliance Repair in Gurugram",
    "description": "Book a same-day home appliance repair service in Gurugram with Reliable Home Service in 5 easy steps.",
    "totalTime": "PT4H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "varies",
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Contact Us",
        "text": "Call +91 97111 07248 or fill the booking form on our website to request a repair.",
        "url": `${baseUrl}/#contact`,
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Describe the Issue",
        "text": "Tell us about your appliance issue and your preferred time for the technician visit.",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Technician Visit",
        "text": "Our certified technician arrives at your doorstep within 2-4 hours for same-day service.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Diagnosis & Quote",
        "text": "The technician diagnoses the issue and provides a transparent, upfront quote with no hidden charges.",
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Professional Repair",
        "text": "Quick, professional repair using genuine spare parts with 30-90 days warranty on all work.",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      ...(service
        ? [
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": `${baseUrl}/#services`,
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.name,
              "item": `${baseUrl}/services/${service.id}`,
            },
          ]
        : []),
    ],
  };

  const serviceSpecificSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/services/${service.id}#service`,
        "name": `${service.name} in Gurugram`,
        "description": `${service.description} Same-day doorstep service in Gurugram by certified technicians.`,
        "image": `${baseUrl}${service.image}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": COMPANY_INFO.name,
          "telephone": COMPANY_INFO.phone,
          "@id": `${baseUrl}/#business`,
        },
        "areaServed": {
          "@type": "City",
          "name": "Gurugram",
        },
        "serviceType": "Appliance Repair",
        "category": `${service.shortName} Repair`,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
        },
        "termsOfService": "30-90 days warranty on all repairs",
      }
    : null;

  const serviceWebPageSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/services/${service.id}#webpage`,
        "url": `${baseUrl}/services/${service.id}`,
        "name": `${service.name} in Gurugram - Same Day Doorstep Service | ${COMPANY_INFO.name}`,
        "description": `${service.description} Same-day doorstep service in Gurugram. Call now to book an appointment.`,
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "inLanguage": "en-IN",
        "dateModified": "2026-02-07",
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {type === "home" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          />
          {serviceSchemas.map((schema, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
          />
        </>
      )}
      {type === "service" && serviceSpecificSchema && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSpecificSchema) }}
          />
          {serviceWebPageSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceWebPageSchema) }}
            />
          )}
        </>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
