/**
 * SEOHead — Per-page SEO meta tag injector
 * Updates document.title, meta description, Open Graph, Twitter Card,
 * canonical URL, and JSON-LD structured data for each page.
 */
import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: object;
  keywords?: string;
}

const DEFAULT_OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-card-global-v2-AWyWGaADLwUDKd5VRWVKcB.png";
const SITE_NAME = "The Elevation Foundation";
const BASE_URL = "https://elevation.foundation";

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: object) {
  let el = document.querySelector(`script[data-seo-id="${id}"]`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  keywords,
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes("Elevation Foundation")
      ? title
      : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    // Primary meta
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Canonical
    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:image:alt", `${SITE_NAME} — ${title}`, true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // JSON-LD
    if (jsonLd) {
      setJsonLd("page-schema", jsonLd);
    }
  }, [title, description, canonical, ogImage, ogType, jsonLd, keywords]);

  return null;
}
