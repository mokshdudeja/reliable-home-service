import { COMPANY_INFO, SERVICES, FAQ_DATA, TESTIMONIALS } from "@/lib/constants";

interface SEOSchemaProps {
  type: "home" | "service";
  serviceId?: string;
}

export function SEOSchema({ type, serviceId }: SEOSchemaProps) {
  const service = serviceId ? SERVICES.find((s) => s.id === serviceId) : null;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://reliablehomeservice.in/#business",
    "name": COMPANY_INFO.name,
    "image": "https://reliablehomeservice.in/images/hero-technician.png",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4595",
      "longitude": "77.0266",
    },
    "url": "https://reliablehomeservice.in",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "09:00",
      "closes": "20:00",
    },
    "areaServed": {
      "@type": "City",
      "name": "Gurugram",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "450",
    },
  };

  const serviceSchemas = SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": s.name,
    "description": s.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
    },
    "areaServed": {
      "@type": "City",
      "name": "Gurugram",
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
    },
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
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
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://reliablehomeservice.in",
      },
      ...(service
        ? [
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://reliablehomeservice.in/#services",
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.name,
              "item": `https://reliablehomeservice.in/services/${service.id}`,
            },
          ]
        : []),
    ],
  };

  const serviceSpecificSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service.name} in Gurugram`,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": COMPANY_INFO.name,
          "telephone": COMPANY_INFO.phone,
        },
        "areaServed": {
          "@type": "City",
          "name": "Gurugram",
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {type === "home" && (
        <>
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
        </>
      )}
      {type === "service" && serviceSpecificSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSpecificSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
