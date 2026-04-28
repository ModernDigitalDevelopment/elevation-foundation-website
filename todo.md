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
