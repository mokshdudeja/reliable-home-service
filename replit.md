# Reliable Home Service - Gurugram Home Appliance Repair Website

## Overview
A professional, fast-loading website for a home appliance repair service business in Gurugram, Haryana. The site is optimized for:
- **Low CPC ad campaigns** - Conversion-focused design with clear CTAs (Call Now + Book Appointment)
- **SEO** - Comprehensive structured data, unique meta tags, robots.txt, sitemap.xml, AI crawler support
- **Lead generation** - Contact forms, click-to-call, popup booking form
- **Performance** - WebP images, lazy loading, code splitting, deferred scripts

## Deployment
- **Live URL**: https://public-one-red.vercel.app
- **GitHub**: https://github.com/mokshdudeja/reliable-home-service
- **Platform**: Vercel (static deployment)
- **Domain**: reliablehomeservice.in (configured in SEO/canonical URLs)

## Project Structure

### Frontend (`client/src/`)
- **pages/**
  - `Home.tsx` - Main landing page with lazy-loaded below-fold components
  - `ServiceDetail.tsx` - Individual service pages with unique SEO
  - `not-found.tsx` - 404 page

- **components/**
  - `Header.tsx` - Sticky header with navigation, call & book buttons
  - `Hero.tsx` - Hero section with main CTAs
  - `Services.tsx` - Service cards grid
  - `WhyChooseUs.tsx` - Trust-building feature cards
  - `BrandLogos.tsx` - 9 brand logos (Samsung, Godrej, Haier, LG, Videocon, Whirlpool, IFB, Xiaomi, Sony)
  - `Testimonials.tsx` - Customer reviews
  - `FAQ.tsx` - FAQ accordion (with FAQPage schema)
  - `ServiceAreas.tsx` - Gurugram areas covered
  - `ContactForm.tsx` - Lead capture form with EmailJS integration
  - `BookingDialog.tsx` - Popup booking form (BookingDialogProvider wraps app)
  - `Footer.tsx` - Site footer with links and contact info
  - `FloatingCTA.tsx` - Fixed call & book buttons
  - `SEOSchema.tsx` - Comprehensive structured data schemas
  - `ThemeToggle.tsx` - Light/dark mode toggle

- **lib/**
  - `constants.ts` - Business info, services, testimonials, FAQ data

- **hooks/**
  - `use-document-head.ts` - Dynamic page title, meta, OG, Twitter, canonical

### Static Files (`client/public/`)
- `robots.txt` - Search engine & AI crawler rules with sitemap reference
- `sitemap.xml` - XML sitemap with all 6 pages + image extensions
- `llms.txt` - AI crawler information file (also at `.well-known/llms.txt`)
- `ai.txt` - Structured business data for AI discovery
- `images/` - WebP optimized images (hero, services, logo)
- `favicon.jpg` - Site favicon

### Backend (`server/`)
- `routes.ts` - API endpoints (POST /api/contact)
- `storage.ts` - In-memory storage for contact requests

### Shared (`shared/`)
- `schema.ts` - Data models (ContactRequest, User)

## SEO Implementation
- **Meta Tags:** Unique title/description per page, geo tags (IN-HR, Gurugram coordinates), hreflang, expanded robots directive, mobile web app meta
- **Open Graph & Twitter Cards:** Absolute image URLs with dimensions, site_name, locale
- **Structured Data Schemas (JSON-LD):**
  - Organization (company identity, knowsAbout)
  - HomeAndConstructionBusiness (local business with hours, geo, ratings, offerCatalog)
  - WebSite (with SearchAction)
  - WebPage (per page with dateModified)
  - Service (5 services with brands, categories, warranty terms)
  - FAQPage (6 common questions)
  - Review (customer testimonials with ratings)
  - HowTo (5-step booking process)
  - BreadcrumbList (navigation path)
- **Canonical URLs** - Prevent duplicate content
- **Noscript Fallback** - Full business info for crawlers that don't execute JS
- **robots.txt** - Allows all search engines + AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- **sitemap.xml** - All pages with image extensions and lastmod dates
- **AI Discovery Files** - llms.txt, ai.txt, .well-known/llms.txt
- **Accessibility** - aria-label on all sections and nav elements

## Services Offered
1. Washing Machine Repair
2. Refrigerator Repair & Service
3. Microwave Repair & Service
4. Dryer Repair & Service
5. Dishwasher Repair & Service

## Contact Information (Configurable in `constants.ts`)
- Phone: +91 97111 07248
- Email: info@reliablehomeservice.in
- Working Hours: 9 AM - 8 PM, 7 days a week
- Service Area: All of Gurugram

## Performance Optimizations
- Images converted to WebP (5.6MB → ~112KB)
- Lazy loading for below-fold components via React.lazy
- Code splitting (separate chunks for WhyChooseUs, BrandLogos, Testimonials, ServiceAreas)
- Google Ads script deferred until after page load
- Optimized font loading (reduced weight variants)
- Preloaded critical hero image
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)

## Google Ads
- Tracking ID: AW-17938623489
- Script deferred to after page load for performance

## Development Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
```

## User Preferences
- No pricing displayed on the site
- No WhatsApp functionality
- Two CTAs everywhere: "Call Now" (phone call) and "Book an Appointment" (popup form)
- Custom logo image used for header and favicon
- Professional blue theme (hue 217)
