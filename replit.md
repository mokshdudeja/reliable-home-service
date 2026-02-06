# Reliable Home Service - Gurugram Home Appliance Repair Website

## Overview
A professional, fast-loading website for a home appliance repair service business in Gurugram, Haryana. The site is optimized for:
- **Low CPC ad campaigns** - Conversion-focused design with clear CTAs
- **SEO** - Structured data, unique meta tags per page, location-specific content
- **Lead generation** - Contact forms, click-to-call, WhatsApp integration

## Project Structure

### Frontend (`client/src/`)
- **pages/**
  - `Home.tsx` - Main landing page with all sections
  - `ServiceDetail.tsx` - Individual service pages
  - `not-found.tsx` - 404 page

- **components/**
  - `Header.tsx` - Sticky header with navigation, call & WhatsApp buttons
  - `Hero.tsx` - Hero section with main CTAs
  - `Services.tsx` - Service cards grid
  - `WhyChooseUs.tsx` - Trust-building feature cards
  - `BrandLogos.tsx` - Supported brand names
  - `Testimonials.tsx` - Customer reviews
  - `FAQ.tsx` - FAQ accordion (with schema markup)
  - `ServiceAreas.tsx` - Gurugram areas covered with map
  - `ContactForm.tsx` - Lead capture form
  - `Footer.tsx` - Site footer with links and contact info
  - `FloatingCTA.tsx` - Fixed WhatsApp & call buttons
  - `SEOSchema.tsx` - Structured data (LocalBusiness, Service, FAQ, Review schemas)

- **lib/**
  - `constants.ts` - Business info, services, testimonials, FAQ data

- **hooks/**
  - `use-document-head.ts` - Dynamic page title and meta tags

### Backend (`server/`)
- `routes.ts` - API endpoints (POST /api/contact)
- `storage.ts` - In-memory storage for contact requests

### Shared (`shared/`)
- `schema.ts` - Data models (ContactRequest, User)

## SEO Implementation
- **Unique page titles/descriptions** - Each page has dynamic meta tags
- **Structured Data Schemas:**
  - LocalBusiness (company info, hours, location)
  - Service (for each appliance type)
  - FAQPage (common questions)
  - Review (customer testimonials)
  - BreadcrumbList (navigation path)
- **Open Graph & Twitter Cards** - Social sharing optimization
- **Canonical URLs** - Prevent duplicate content

## Services Offered
1. Washing Machine Repair (Starting ₹249)
2. Refrigerator Repair & Service (Starting ₹299)
3. Microwave Repair & Service (Starting ₹199)
4. Dryer Repair & Service (Starting ₹299)
5. Dishwasher Repair & Service (Starting ₹349)

## Contact Information (Configurable in `constants.ts`)
- Phone: +91 98765 43210
- WhatsApp: 919876543210
- Working Hours: 9 AM - 8 PM, 7 days a week
- Service Area: All of Gurugram

## Development Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
```

## Future Enhancements (Planned)
- Google Analytics integration (add VITE_GA_MEASUREMENT_ID secret)
- Email notifications for form submissions
- Blog/content system for SEO
- Admin dashboard for managing leads
- Online appointment scheduling
