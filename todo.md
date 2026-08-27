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

## Website GitHub Ecosystem Integration (Comprehensive)
- [x] Home page: Add GitHub links to projects section cards (Transparently, WeSolar, Elevation Foundation)
- [x] Our Work page: GitHub repo links on each project + Open Source section with all 4 repos
- [x] Philosophy page: GitHub repo link to sotilitarianism with reading guide
- [x] Sotilitarianism landing page: Full GitHub repo integration with JSON-LD
- [x] White Papers page: "View Source" per category + GitHub CTA in Open Access section
- [x] Our Story page: GitHub org link + 4 repo cards in timeline section
- [x] About Founder page: GitHub profile button in social links
- [x] Footer: "Open Source" section with all 4 repos + GitHub icon in social links
- [x] Get Involved page: 8 open bounties with correct repo names + GitHub org link
- [x] Transparency page: GitHub org in public metrics
- [x] Donate page: "View Open Issues" GitHub link

## Blog Post Rewrites (Deep Content)
- [x] Parallel AI rewrite of all 13 blog posts with full depth from source documents
- [x] Alter blog_posts.content column from TEXT to LONGTEXT to accommodate long articles
- [x] Update all 12 existing blog posts (IDs 1-16) with rewritten deep content
- [x] Insert new WeSolar blog post (ID 17) 
- [x] Fix empty titles for IDs 3 and 15 (Five-Layer Architecture + Part IV)
- [x] Author name: all posts attributed to Cornelius Lawrence

## Navigation & UI Improvements
- [x] Rewrite Navigation.tsx to hamburger menu on ALL screen sizes (desktop + mobile)
- [x] Animated dropdown with grid layout, outside-click close, body scroll lock

## EasyA Kickstart Hackathon — $TRNS Transparently Token
- [x] Launch $TRNS token on Solana via EasyA Kickstart (mint: EotDwLsi6j4NbWDGyvM95NMpyDM5K7vjYqVa67ijMXCx)
- [x] Day 1 X post published on @SolarKitties
- [x] Phil's reply email sent
- [x] Add $TRNS Transparently Token section to Our Work page with gold accent styling and EasyA Kickstart link
- [ ] Post Day 2 X post on @SolarKitties (due April 30, 2026)
- [ ] Post in EasyA Discord (discord.com/invite/easya)
- [ ] Post Day 3 X post on @SolarKitties (due May 1, 2026)
- [ ] Post Day 4 X post on @SolarKitties (due May 2, 2026)
- [ ] Post Day 5 X post on @SolarKitties (due May 2, 2026)

## Blog Polish & Features (May 2026)
- [x] Center homepage hero title, subtitle, buttons, and eyebrow label
- [x] Add featured boolean column to blog_posts DB table
- [x] Pin Sotilitarian Manifesto as featured post via DB
- [x] Wire featured boolean to Blog.tsx list page
- [x] Add series navigator to Sotilitarian Capitalism blog posts
- [x] Add social share buttons to every blog post
- [x] Build /blog/series/sotilitarian-capitalism series landing page
- [x] Research backlink strategy via Bing Webmaster Tools and web research
- [x] Implement discrete backlink integrations across the site

## Visual Integration — Sotilitarian Capitalism Series
- [ ] Rewrite all 5 visual component files using Chart.js (same library as sandbox) to fix rendering
- [ ] Update BlogPost.tsx to inject visuals inline within article text at conceptual moments
- [ ] Apply beige background to all charts per project style guide
- [ ] Add click-to-enlarge for chart images (2/3 size display with modal)
- [ ] Export static PNG versions of all charts for SSRN PDF embedding
- [ ] Verify all visuals render on live site

## Performance Report Recommendations (May 17, 2026)

- [x] Fix sitemap.xml — add 9 missing pages with correct lastmod dates
- [x] Expand React.lazy() to cover Home, Sotilitarianism, WeSolar, TokenEconomy, Capitalism2
- [x] Remove recharts dependency (orphaned after Chart.js migration)
- [x] Audit framer-motion usage — remove if not actively used (removed, zero usage found)
- [x] Generate branded 1200x630 og:image social card and inject into head
- [x] Audit alt text across all 22 pages and fix missing attributes (all images confirmed to have alt text)
- [ ] Generate per-article og:image covers and inject via BlogPost.tsx dynamic head
- [ ] Update sitemap lastmod dates to reflect actual content modification dates

## Mailchimp Integration

- [x] Store Mailchimp API key as environment secret (MAILCHIMP_API_KEY)
- [x] Create "Elevation Foundation Community" audience list in Mailchimp (renamed existing list)
- [x] Build newsletter signup form component (email + first name)
- [x] Add signup form to homepage footer, blog page, and donate page
- [x] Create tRPC procedure for subscribing users to Mailchimp audience
- [ ] Set up welcome email automation in Mailchimp (requires Mailchimp dashboard — manual step)
- [x] Add subscriber count display to admin panel (listSubscribers procedure available)
- [x] Add unsubscribe handling (Mailchimp manages unsubscribes automatically)

## Mailchimp Welcome Automation & Newsletter CTAs (May 17, 2026)

- [ ] Set up Mailchimp welcome automation via API (welcome email for new subscribers)
- [ ] Add newsletter subscription form to bottom of each Sotilitarian Capitalism article
- [ ] Add subtle above-the-fold newsletter CTA on homepage, blog, philosophy, and token-economy pages
- [ ] Build sticky social sharing button component (LinkedIn, Twitter/X, Facebook, Instagram, TikTok)
- [ ] Add sticky social sharing buttons to all blog posts
- [ ] Create /media-kit page with brand assets, og:images, logos, and downloadable resources
- [ ] Add /media-kit to sitemap.xml and navigation

## Newsletter Archive & Image Fixes (May 17, 2026)
- [x] Fix IntersectionObserver threshold (0.15 → 0.05) so mission/community sections animate in correctly
- [x] Add rootMargin to IntersectionObserver to pre-trigger animations before element is fully in view
- [x] Create /newsletter archive page with issue list, subscribe sidebar, and topics cloud
- [x] Add Newsletter link to navigation (More dropdown) and footer (Connect section)
- [x] Add /newsletter route to App.tsx

## Admin Panel & Blog Redesign (May 2026)
- [x] Redesign Blog list page to off-white card grid matching article page
- [x] Build /admin panel with Dashboard, Posts, and Subscribers tabs
- [x] Add deleteSubscriber DB helper and adminProcedure endpoint
- [x] Add getAdminStats DB helper and adminProcedure endpoint
- [x] Add featured field to postInput schema in blogRouter
- [x] Add Admin link to Navigation (visible only to admin users)
- [x] Add /admin route to App.tsx

## Media Kit and Sotilitarianism Document Enhancements (August 2026)
- [x] Add direct high-resolution download buttons beneath each Media Kit logo asset
- [x] Add lightweight pitch-deck PDF preview thumbnail to the Sotilitarianism page
- [x] Add accessible social-sharing controls beside pitch-deck and whitepaper document links
- [x] Verify the updated Media Kit and Sotilitarianism pages, then create a publish-ready checkpoint
- [x] Generate an optimized pitch-deck thumbnail asset and update the preview card
- [x] Save a post-enhancement checkpoint after final page verification
