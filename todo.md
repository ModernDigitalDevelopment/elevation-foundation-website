# Elevation Foundation — TODO

- [x] Initial website build (8 pages)
- [x] Abstract hero image (no people)
- [x] Stripe feature scaffold added
- [x] Create Stripe donation products (one-time + monthly recurring)
- [x] Build server-side checkout session endpoint for donations
- [x] Build Stripe webhook handler at /api/stripe/webhook
- [x] Update Donate page with live Stripe checkout (one-time + recurring)
- [x] Add donation success page (/donate/success)

## White Papers / Documents Page
- [ ] Upload key PDFs from Google Drive to CDN
- [ ] Build /white-papers page with document cards, descriptions, and download links
- [ ] Add per-document SEO meta tags
- [ ] Add /white-papers route to App.tsx and Navigation

## Blog CMS (Database-backed)
- [ ] Add blog_posts table to drizzle schema and run db:push
- [ ] Add tRPC procedures: list posts (public), get post by slug (public), create/update/delete post (admin)
- [ ] Seed database with existing 8 blog posts from static content
- [ ] Update Blog page to read from database (paginated, filterable by category)
- [ ] Build /blog/:slug individual post page with full content and SEO
- [ ] Build /admin/blog post editor (create/edit/delete, markdown editor, publish toggle)
- [ ] Add admin route guard (owner/admin only)
- [ ] Write vitest tests for blog procedures

## Newsletter Subscription
- [x] Newsletter DB table (newsletter_subscribers), tRPC subscribe mutation, admin list view
- [x] Newsletter form UI component with toast feedback and duplicate handling
- [x] Add newsletter section to Home page, Footer, and Get Involved page

## Hero Title & SEO Keywords
- [x] Fix hero title: change "Elevation" to "Transparency" in Home page hero
- [x] SEO keywords: capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, trust tech, transparency tech across meta tags and JSON-LD
- [x] Update index.html global meta keywords tag with full keyword set
- [x] Update SEOHead per-page descriptions to weave in keyword variations

## Sotilitarianism GitHub Repo & Website Integration
- [x] Deep-read all 49 Sotility/Sotilitarianism documents from Google Drive
- [x] Create comprehensive organizational taxonomy (book, manifestos, whitepapers, smart-contracts, economics)
- [x] Restructure sotilitarianism GitHub repo with proper directory structure
- [x] Write comprehensive README with glossary, reading order, architecture diagrams
- [x] Add AUTHOR.md, GLOSSARY.md, LICENSE (CC BY-SA 4.0), section READMEs
- [x] Make repo public with SEO topics and description
- [x] Add "Read the Complete Work" section to Philosophy page linking to GitHub

## White Papers Page
- [x] Upload whitepaper PDFs to CDN (ecosystem overview + appendices A, B, C)
- [x] Build /white-papers page with document cards and download links
- [x] Add /white-papers route to App.tsx and Navigation

## Blog Seeding (Remaining)
- [x] Seed Sotilitarian Revolt as blog post
- [x] Seed 5-part Sotilitarian Capitalism manifesto series as blog posts

## Sotilitarianism SEO Landing Page
- [x] Build /sotilitarianism dedicated landing page
- [x] Add JSON-LD structured data markup (Book, DefinedTerm, FAQPage schemas)
- [x] Add /sotilitarianism route to App.tsx and Navigation

## Google Search Console Preparation
- [x] Generate XML sitemap with all current routes and blog post slugs
- [x] Add /sitemap.xml server route (dynamic, includes all blog posts)
- [x] Update robots.txt to reference sitemap URL
- [x] Add GSC HTML meta tag support (env-based VITE_GOOGLE_SITE_VERIFICATION token)
- [x] Save checkpoint and deploy
