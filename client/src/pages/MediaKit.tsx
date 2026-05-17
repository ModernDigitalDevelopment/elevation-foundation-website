/*
 * ELEVATION RISING — Media Kit Page
 * Showcases brand assets, og:images, logos, color palette, typography,
 * and downloadable resources for press and partners.
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Download, Copy, Check, ExternalLink, Palette, Type, Image, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─── ASSET DEFINITIONS ──────────────────────────────────────────────────────

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/EF44_3886167a.png";

const OG_IMAGES = [
  {
    title: "Global Site Card",
    subtitle: "\"Tackling Tyranny Through Tokenized Transparency\"",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-card-global-v2-AWyWGaADLwUDKd5VRWVKcB.png",
    dimensions: "1200 × 630",
    usage: "Homepage, general social sharing",
  },
  {
    title: "Part I — New Economic OS",
    subtitle: "Sotilitarian Capitalism Series",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-1-iDPqrgM39bqDBeACvptKBV.png",
    dimensions: "1200 × 630",
    usage: "Article sharing, SSRN citation",
  },
  {
    title: "Part II — Continuous Consent",
    subtitle: "Sotilitarian Capitalism Series",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-2-azQmSst3ZfqgkxX9jCQ5Cv.png",
    dimensions: "1200 × 630",
    usage: "Article sharing, governance content",
  },
  {
    title: "Part III — Five-Layer Architecture",
    subtitle: "Sotilitarian Capitalism Series",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-3-mMV44N47jmxXmLLHpxJCzY.png",
    dimensions: "1200 × 630",
    usage: "Technical content, developer audiences",
  },
  {
    title: "Part IV — Trojan Horse Effect",
    subtitle: "Sotilitarian Capitalism Series",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-4-AFxBm3jZzmNA3thDrkVKLq.png",
    dimensions: "1200 × 630",
    usage: "Strategy content, implementation posts",
  },
  {
    title: "Part V — Future of Economics",
    subtitle: "Sotilitarian Capitalism Series",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-sotilitarian-part-5-cgreTM2tsohbiAgNSUaAgw.png",
    dimensions: "1200 × 630",
    usage: "Vision content, thought leadership",
  },
];

const WHITE_PAPERS = [
  {
    title: "American Transparency Revolution Manifesto",
    description: "The foundational document outlining the case for radical transparency in American governance and finance.",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/american-transparency-revolution-manifesto_549ab403.pdf",
    type: "PDF",
  },
  {
    title: "Sotility Whitepaper",
    description: "Technical specification for the Sotility token ecosystem — SOT, SUG, and SST token mechanics, governance design, and smart contract architecture.",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/sotility-whitepaper_24f46455.pdf",
    type: "PDF",
  },
  {
    title: "Sotility Ecosystem Complete",
    description: "Comprehensive overview of the full Sotility ecosystem including all three token layers, governance mechanisms, and community finance protocols.",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/sotility-ecosystem-complete_370400bc.pdf",
    type: "PDF",
  },
];

const BRAND_COLORS = [
  { name: "Navy", value: "oklch(0.12 0.05 265)", hex: "#0B0E1A", usage: "Primary background" },
  { name: "Gold", value: "oklch(0.72 0.12 75)", hex: "#C9A84C", usage: "Primary accent, CTAs, headlines" },
  { name: "Gold Light", value: "oklch(0.80 0.10 75)", hex: "#D4B96A", usage: "Hover states, secondary gold" },
  { name: "Teal", value: "oklch(0.68 0.12 195)", hex: "#2ABFBF", usage: "Technology, secondary accent" },
  { name: "Crimson", value: "oklch(0.55 0.20 25)", hex: "#C0392B", usage: "DeFi, alerts, emphasis" },
  { name: "White/75", value: "rgba(255,255,255,0.75)", hex: "#BFBFBF", usage: "Body text on dark" },
];

const TYPOGRAPHY = [
  { name: "Display / Headlines", family: "Cinzel Decorative", weight: "700–900", usage: "Page titles, section headers, hero text" },
  { name: "Body / UI", family: "Inter", weight: "400–600", usage: "Paragraphs, navigation, buttons, labels" },
  { name: "Mono / Data", family: "Space Mono", weight: "400–700", usage: "Stats, labels, code, timestamps, tags" },
];

// ─── COPY BUTTON ─────────────────────────────────────────────────────────────
function CopyButton({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      toast.success(`Copied: ${label || value}`);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 px-2 py-1 font-mono-data text-xs text-white/40 hover:text-gold border border-white/10 hover:border-gold/30 rounded-sm transition-all"
    >
      {copied ? <Check size={10} className="text-gold" /> : <Copy size={10} />}
      {label || "Copy"}
    </button>
  );
}

// ─── ASSET CARD ──────────────────────────────────────────────────────────────
function AssetCard({ title, subtitle, url, dimensions, usage }: {
  title: string;
  subtitle: string;
  url: string;
  dimensions: string;
  usage: string;
}) {
  return (
    <div className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm overflow-hidden group hover:border-gold/25 transition-all duration-300">
      {/* Preview */}
      <div className="aspect-[1200/630] overflow-hidden bg-[oklch(0.12_0.05_265)]">
        <img
          src={url}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="font-mono-data text-[10px] text-gold/60 uppercase tracking-wider mb-1">{subtitle}</div>
        <h3 className="font-display text-base font-bold text-white mb-1">{title}</h3>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono-data text-xs text-white/35">{dimensions}</span>
          <span className="font-mono-data text-xs text-white/25">·</span>
          <span className="font-body text-xs text-white/40">{usage}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={url}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 border border-gold/25 text-gold font-body text-xs font-medium rounded-sm hover:bg-gold/20 transition-all"
          >
            <Download size={11} />
            Download
          </a>
          <CopyButton value={url} label="URL" />
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function MediaKit() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Media Kit | The Elevation Foundation"
        description="Brand assets, logos, color palette, typography, og:images, and downloadable white papers for press, partners, and collaborators of the Elevation Foundation."
        canonical="/media-kit"
        keywords="Elevation Foundation media kit, brand assets, press kit, Sotilitarianism branding, blockchain governance brand, nonprofit press kit"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.05_265)] via-[oklch(0.14_0.05_265)] to-[oklch(0.10_0.05_265)]" />
        {/* Gold grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.72 0.12 75) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.72 0.12 75) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Media Kit</div>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-6">
              <span className="gold-shimmer">Brand Assets</span>
              <br />
              <span className="text-white">& Press Resources</span>
            </h1>
            <p className="font-body text-xl text-white/65 leading-relaxed max-w-2xl">
              Everything you need to write about, share, or collaborate with the Elevation Foundation. Logos, color palette, typography, social cards, and white papers — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LOGO ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <Image size={16} className="text-gold/70" />
            <h2 className="font-display text-2xl font-bold text-white">Logo</h2>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Primary logo on dark */}
            <div className="bg-[oklch(0.10_0.05_265)] border border-white/10 rounded-sm p-8 flex flex-col items-center gap-6">
              <img src={LOGO_URL} alt="Elevation Foundation logo" className="w-24 h-24 object-contain" />
              <div className="text-center">
                <div className="font-mono-data text-xs text-white/40 mb-2">Primary — Dark Background</div>
                <div className="flex items-center gap-2 justify-center">
                  <a
                    href={LOGO_URL}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 border border-gold/25 text-gold font-body text-xs font-medium rounded-sm hover:bg-gold/20 transition-all"
                  >
                    <Download size={11} />
                    PNG
                  </a>
                  <CopyButton value={LOGO_URL} label="URL" />
                </div>
              </div>
            </div>

            {/* Logo on white */}
            <div className="bg-white border border-white/10 rounded-sm p-8 flex flex-col items-center gap-6">
              <img src={LOGO_URL} alt="Elevation Foundation logo on white" className="w-24 h-24 object-contain" />
              <div className="text-center">
                <div className="font-mono-data text-xs text-black/40 mb-2">On Light Background</div>
                <div className="flex items-center gap-2 justify-center">
                  <a
                    href={LOGO_URL}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy/10 border border-navy/25 text-navy font-body text-xs font-medium rounded-sm hover:bg-navy/20 transition-all"
                  >
                    <Download size={11} />
                    PNG
                  </a>
                </div>
              </div>
            </div>

            {/* Usage guidelines */}
            <div className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm p-6">
              <div className="font-mono-data text-xs text-gold/60 uppercase tracking-wider mb-4">Usage Guidelines</div>
              <ul className="space-y-3">
                {[
                  "Maintain clear space equal to the logo height on all sides",
                  "Do not stretch, rotate, or distort the logo",
                  "Do not change the logo colors",
                  "Minimum size: 32px height for digital use",
                  "Always use on high-contrast backgrounds",
                  "Do not place on busy or low-contrast backgrounds",
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-white/60">
                    <span className="text-gold/50 flex-shrink-0 mt-0.5">→</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLOR PALETTE ────────────────────────────────────── */}
      <section className="py-16 bg-navy">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <Palette size={16} className="text-gold/70" />
            <h2 className="font-display text-2xl font-bold text-white">Color Palette</h2>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRAND_COLORS.map((color) => (
              <div key={color.name} className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm overflow-hidden">
                {/* Color swatch */}
                <div
                  className="h-16 w-full"
                  style={{ background: color.value }}
                />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-display text-sm font-bold text-white">{color.name}</span>
                    <CopyButton value={color.hex} label={color.hex} />
                  </div>
                  <div className="font-mono-data text-xs text-white/40 mb-1">{color.hex}</div>
                  <div className="font-mono-data text-[10px] text-white/25 mb-2">{color.value}</div>
                  <div className="font-body text-xs text-white/50">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TYPOGRAPHY ───────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <Type size={16} className="text-gold/70" />
            <h2 className="font-display text-2xl font-bold text-white">Typography</h2>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TYPOGRAPHY.map((font) => (
              <div key={font.name} className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm p-6">
                <div className="font-mono-data text-xs text-gold/60 uppercase tracking-wider mb-3">{font.name}</div>
                <div
                  className="text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: font.family }}
                >
                  Aa Bb Cc
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-white/50">Family</span>
                    <span className="font-mono-data text-xs text-white/70">{font.family}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-white/50">Weights</span>
                    <span className="font-mono-data text-xs text-white/70">{font.weight}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="font-body text-xs text-white/40">{font.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[oklch(0.16_0.05_265)] border border-gold/15 rounded-sm">
            <span className="font-mono-data text-xs text-gold/60">Google Fonts: </span>
            <a
              href="https://fonts.google.com/specimen/Cinzel+Decorative"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-data text-xs text-gold hover:underline"
            >
              Cinzel Decorative
            </a>
            <span className="font-mono-data text-xs text-white/30"> · </span>
            <a
              href="https://fonts.google.com/specimen/Inter"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-data text-xs text-gold hover:underline"
            >
              Inter
            </a>
            <span className="font-mono-data text-xs text-white/30"> · </span>
            <a
              href="https://fonts.google.com/specimen/Space+Mono"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-data text-xs text-gold hover:underline"
            >
              Space Mono
            </a>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL CARDS / OG IMAGES ─────────────────────────── */}
      <section className="py-16 bg-navy">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <Image size={16} className="text-gold/70" />
            <h2 className="font-display text-2xl font-bold text-white">Social Cards & og:images</h2>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>
          <p className="font-body text-white/55 mb-10 max-w-2xl">
            Use these 1200×630 images when sharing Elevation Foundation content on LinkedIn, X, Facebook, or in academic citations. Each article in the Sotilitarian Capitalism series has its own unique card.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {OG_IMAGES.map((asset) => (
              <AssetCard key={asset.title} {...asset} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHITE PAPERS ─────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <FileText size={16} className="text-gold/70" />
            <h2 className="font-display text-2xl font-bold text-white">White Papers & Documents</h2>
            <div className="flex-1 h-px bg-white/10 ml-2" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {WHITE_PAPERS.map((paper) => (
              <div key={paper.title} className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm p-6 hover:border-gold/25 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3">
                  <FileText size={20} className="text-gold/50 flex-shrink-0 mt-0.5" />
                  <span className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider">{paper.type}</span>
                </div>
                <h3 className="font-display text-base font-bold text-white mb-3 leading-snug group-hover:text-gold transition-colors">
                  {paper.title}
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed mb-5">
                  {paper.description}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={paper.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 border border-gold/25 text-gold font-body text-xs font-medium rounded-sm hover:bg-gold/20 transition-all"
                  >
                    <Download size={11} />
                    Download PDF
                  </a>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 text-white/50 font-body text-xs rounded-sm hover:border-white/30 hover:text-white/70 transition-all"
                  >
                    <ExternalLink size={11} />
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRESS CONTACT ────────────────────────────────────── */}
      <section className="py-16 bg-navy">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-4">Press & Media Inquiries</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Working on a Story?
            </h2>
            <p className="font-body text-white/65 leading-relaxed mb-8">
              We welcome press coverage, academic citations, and partnership inquiries. For interviews, quotes, or additional assets, reach out to our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@elevation.foundation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold/90 transition-all duration-200"
              >
                press@elevation.foundation
              </a>
              <a
                href="/our-story"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-body font-medium rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
              >
                About the Foundation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
