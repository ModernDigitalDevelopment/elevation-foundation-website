/**
 * SEO Routes
 * - GET /sitemap.xml  — dynamic XML sitemap including all published blog posts
 * - GET /robots.txt   — served from here so it references the live domain
 * - GET /api/gsc-verify — returns the GSC HTML verification meta tag token (env-based)
 *
 * Register BEFORE tRPC and static middleware in server/_core/index.ts
 */
import { Express, Request, Response } from "express";
import { listPublishedPosts } from "./db";

const DOMAIN = "https://elevation.foundation";

/** Static pages with their change frequency and priority */
const STATIC_ROUTES: Array<{ path: string; changefreq: string; priority: string; lastmod?: string }> = [
  { path: "/",                  changefreq: "weekly",  priority: "1.0" },
  { path: "/sotilitarianism",   changefreq: "monthly", priority: "0.95" },
  { path: "/philosophy",        changefreq: "monthly", priority: "0.9"  },
  { path: "/our-work",          changefreq: "monthly", priority: "0.85" },
  { path: "/our-story",         changefreq: "monthly", priority: "0.8"  },
  { path: "/white-papers",      changefreq: "monthly", priority: "0.8"  },
  { path: "/blog",              changefreq: "weekly",  priority: "0.85" },
  { path: "/transparency",      changefreq: "monthly", priority: "0.75" },
  { path: "/get-involved",      changefreq: "monthly", priority: "0.75" },
  { path: "/donate",            changefreq: "monthly", priority: "0.7"  },
  { path: "/about/founder",     changefreq: "monthly", priority: "0.7"  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toW3CDate(d: Date | null | undefined): string {
  if (!d) return new Date().toISOString().split("T")[0];
  return new Date(d).toISOString().split("T")[0];
}

export function registerSeoRoutes(app: Express) {
  /** Dynamic XML sitemap */
  app.get("/sitemap.xml", async (_req: Request, res: Response) => {
    try {
      // Fetch all published blog posts (up to 500 — well within sitemap limits)
      const { posts } = await listPublishedPosts({ limit: 500, offset: 0 });

      const today = new Date().toISOString().split("T")[0];

      const staticEntries = STATIC_ROUTES.map(
        (r) => `  <url>
    <loc>${DOMAIN}${escapeXml(r.path)}</loc>
    <lastmod>${r.lastmod ?? today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
      ).join("\n");

      const blogEntries = posts
        .map(
          (p) => `  <url>
    <loc>${DOMAIN}/blog/${escapeXml(p.slug)}</loc>
    <lastmod>${toW3CDate(p.publishedAt ?? p.createdAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`
        )
        .join("\n");

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticEntries}
${blogEntries}
</urlset>`;

      res.set("Content-Type", "application/xml; charset=utf-8");
      res.set("Cache-Control", "public, max-age=3600"); // cache 1 hour
      res.send(xml);
    } catch (err) {
      console.error("[sitemap] Error generating sitemap:", err);
      res.status(500).send("Error generating sitemap");
    }
  });

  /** robots.txt — references the sitemap and allows all crawlers */
  app.get("/robots.txt", (_req: Request, res: Response) => {
    const content = `User-agent: *
Allow: /

# Priority crawl targets for Sotilitarianism / capitalism 2.0 content
Allow: /sotilitarianism
Allow: /philosophy
Allow: /blog
Allow: /white-papers

# Admin pages should not be indexed
Disallow: /admin/
Disallow: /api/

Sitemap: ${DOMAIN}/sitemap.xml
`;
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.set("Cache-Control", "public, max-age=86400"); // cache 24 hours
    res.send(content);
  });

  /** GSC HTML verification token endpoint — returns the meta tag value from env */
  app.get("/api/gsc-verify", (_req: Request, res: Response) => {
    const token = process.env.GOOGLE_SITE_VERIFICATION ?? "";
    res.json({ token, metaTag: token ? `<meta name="google-site-verification" content="${token}" />` : null });
  });
}
