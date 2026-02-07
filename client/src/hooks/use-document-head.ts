import { useEffect } from "react";

interface DocumentHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export function useDocumentHead({
  title,
  description,
  canonical,
  ogImage = "/images/hero-technician.webp",
}: DocumentHeadProps) {
  useEffect(() => {
    const baseUrl = "https://reliablehomeservice.in";
    
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag("description", description);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", `${baseUrl}${ogImage}`, true);
    updateMetaTag("og:url", canonical ? `${baseUrl}${canonical}` : baseUrl, true);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${baseUrl}${ogImage}`);
    updateMetaTag("twitter:image:alt", title);

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = `${baseUrl}${canonical}`;
    }
  }, [title, description, canonical, ogImage]);
}
