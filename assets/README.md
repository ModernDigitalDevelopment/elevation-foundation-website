# Visual Assets — Elevation Foundation

All images are now stored in this repository via **Git LFS** (`assets/images/`) and served in production via **CloudFront CDN**.

CDN base: `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/`

---

## Open Graph / Social Share Images

Local path: `assets/images/og/`

| File | CDN URL | Used On |
|------|---------|---------|
| `og-card-global-v2.png` | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-card-global-v2-AWyWGaADLwUDKd5VRWVKcB.png` | Global default (all pages) |
| `og-sotilitarian-part-1.png` | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-1-iDPqrgM39bqDBeACvptKBV.png` | Blog: Sotilitarian Capitalism Part I |
| `og-sotilitarian-part-2.png` | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-2-azQmSst3ZfqgkxX9jCQ5Cv.png` | Blog: Sotilitarian Capitalism Part II |
| `og-sotilitarian-part-3.png` | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-3-mMV44N47jmxXmLLHpxJCzY.png` | Blog: Sotilitarian Capitalism Part III |
| `og-sotilitarian-part-4.png` | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-4-AFxBm3jZzmNA3thDrkVKLq.png` | Blog: Sotilitarian Capitalism Part IV |
| `og-sotilitarian-part-5.png` | `https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-5-cgreTM2tsohbiAgNSUaAgw.png` | Blog: Sotilitarian Capitalism Part V |

**Design spec:** 1200×630 px, dark navy background, gold typography, tagline "Tackling Tyranny Through Tokenized Transparency"

---

## Hero Images

Local path: `assets/images/hero/`

| File | CDN URL | Used On |
|------|---------|---------|
| `hero-main-v3.png` | _(uploaded to CDN separately)_ | Homepage hero (v3, archived) |
| `hero-main-v4.png` | _(uploaded to CDN separately)_ | Homepage hero (v4, current) |

---

## Brand Logos

Local paths: `assets/images/logos/` (light, for dark backgrounds) and `assets/images/logos-dark/` (dark, for light backgrounds)

| Logo | Light File | Dark File |
|------|-----------|-----------|
| Elevation Foundation | `logos/elevation-foundation-logo.png` | `logos-dark/elevation-foundation-logo.png` |
| Klarity | `logos/klarity-logo.png` | `logos-dark/klarity-logo.png` |
| Sotilitarianism | `logos/sotilitarianism-logo.png` | `logos-dark/sotilitarianism-logo.png` |
| Sotility (icon) | `logos/sotility-icon.png` | `logos-dark/sotility-icon.png` |
| Sotility (full) | `logos/sotility-logo.png` | `logos-dark/sotility-logo.png` |
| Transparently (icon) | `logos/transparently-icon.png` | `logos-dark/transparently-icon.png` |
| Transparently (full) | `logos/transparently-logo.png` | `logos-dark/transparently-logo.png` |
| WeSolar (icon) | `logos/wesolar-icon.png` | `logos-dark/wesolar-icon.png` |
| WeSolar (full) | `logos/wesolar-logo.png` | `logos-dark/wesolar-logo.png` |

---

## Standalone Assets

| File | Description |
|------|-------------|
| `assets/images/EF44.png` | Elevation Foundation square logo (285 KB) |

---

## Chart Visuals (Sotilitarian Capitalism Series)

Interactive Chart.js visual components are in `client/src/components/visuals/`:
- `PartIVisuals.tsx` — Radar + Bar charts for economic system comparison
- `PartIIVisuals.tsx` — Governance participation + consent flow charts
- `PartIIIVisuals.tsx` — Five-layer architecture diagram + doughnut charts
- `PartIVVisuals.tsx` — Implementation timeline + adoption curve charts
- `PartVVisuals.tsx` — Future economic scenarios + projection charts

All charts use Chart.js with beige (`#f5f0e8`) backgrounds and click-to-enlarge modals.

---

## Git LFS Configuration

All image files are tracked via Git LFS (`.gitattributes` in repo root):

```
*.png filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.webp filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.svg filter=lfs diff=lfs merge=lfs -text
```

To clone with LFS objects: run `git lfs pull` after `git clone`.
