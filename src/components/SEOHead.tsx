import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { formatTitle } from "@/config/routes";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

/**
 * Sets document title, meta tags, and optional JSON-LD.
 * No helmet dependency — uses vanilla DOM for portability.
 */
export function SEOHead({
  title,
  description,
  canonical,
  noIndex = false,
  type = "website",
  jsonLd,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const fullTitle = formatTitle(title);
  const canonicalUrl = canonical || `${siteConfig.url}${pathname}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("twitter:title", fullTitle, "name");
    setMeta("twitter:description", description, "name");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // Robots
    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    // JSON-LD
    const ldId = "seo-json-ld";
    let ldScript = document.getElementById(ldId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!ldScript) {
        ldScript = document.createElement("script");
        ldScript.id = ldId;
        ldScript.type = "application/ld+json";
        document.head.appendChild(ldScript);
      }
      ldScript.textContent = JSON.stringify(jsonLd);
    } else if (ldScript) {
      ldScript.remove();
    }

    return () => {
      // Cleanup JSON-LD on unmount
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [fullTitle, description, canonicalUrl, noIndex, type, jsonLd]);

  return null;
}
