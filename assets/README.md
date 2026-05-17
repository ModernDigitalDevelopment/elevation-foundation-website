# Visual Assets — Elevation Foundation

> **Note:** High-resolution og:image files (4–5 MB each) are stored in `/home/ubuntu/webdev-static-assets/` and served via CDN. They are NOT committed to this repo to avoid deployment timeouts. CDN URLs are listed below.

## og:image CDN URLs

| File | CDN URL |
|---|---|
| Global site card ("Tackling Tyranny Through Tokenized Transparency") | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-card-global-v2-AWyWGaADLwUDKd5VRWVKcB.png` |
| Part I — New Economic Operating System | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-1-iDPqrgM39bqDBeACvptKBV.png` |
| Part II — Continuous Consent | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-2-azQmSst3ZfqgkxX9jCQ5Cv.png` |
| Part III — Five-Layer Technical Architecture | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-3-mMV44N47jmxXmLLHpxJCzY.png` |
| Part IV — Trojan Horse Effect / Implementation | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-4-AFxBm3jZzmNA3thDrkVKLq.png` |
| Part V — Future of Economics | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-5-cgreTM2tsohbiAgNSUaAgw.png` |

## Chart Visuals (Sotilitarian Capitalism Series)

Interactive Chart.js visual components are in `client/src/components/visuals/`:
- `PartIVisuals.tsx` — Radar + Bar charts for economic system comparison
- `PartIIVisuals.tsx` — Governance participation + consent flow charts
- `PartIIIVisuals.tsx` — Five-layer architecture diagram + doughnut charts
- `PartIVVisuals.tsx` — Implementation timeline + adoption curve charts
- `PartVVisuals.tsx` — Future economic scenarios + projection charts

All charts use Chart.js with beige (#f5f0e8) backgrounds and click-to-enlarge modals.
