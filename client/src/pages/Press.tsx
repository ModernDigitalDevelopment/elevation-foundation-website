/**
 * ELEVATION RISING — Press & Media Page
 * /press — downloadable press kit, logos, founder bio, boilerplate
 * Designed to attract backlinks from journalists, grant databases, and directories
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Download, ExternalLink, FileText, Mail, Github, ArrowRight } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-card-v2-TEXKDEWMfEu3SM7dBodn79.png";

const PRESS_ASSETS = [
  {
    label: "Organization Boilerplate",
    desc: "One-paragraph description for press releases and directory listings.",
    type: "text",
  },
  {
    label: "White Papers",
    desc: "Sotilitarianism ecosystem overview and technical appendices (PDF).",
    href: "/white-papers",
    type: "link",
  },
  {
    label: "GitHub Organization",
    desc: "All open-source repositories — Transparently, WeSolar, Elevation Engine, Sotilitarianism.",
    href: "https://github.com/ModernDigitalDevelopment",
    type: "external",
  },
  {
    label: "Sotilitarianism Manifesto Series",
    desc: "The complete 5-part Sotilitarian Capitalism manifesto — free to read, cite, and share.",
    href: "/blog/series/sotilitarian-capitalism",
    type: "link",
  },
];

const COVERAGE_TOPICS = [
  "Blockchain governance for nonprofits and community organizations",
  "Sotilitarianism — a post-capitalist economic philosophy built on verified utility",
  "Community-owned solar energy via tokenized infrastructure (WeSolar)",
  "On-chain transparency tools for government and corporate accountability (Transparently DApp)",
  "Autonomous DeFi yield generation for nonprofit treasury management (Elevation Engine)",
  "The three-token economy: SOT, SUG, and SST",
  "501(c)(3) nonprofit operating entirely on open-source blockchain infrastructure",
];

const BOILERPLATE = `The Elevation Foundation is a 501(c)(3) nonprofit organization building transparent, community-governed financial systems using blockchain technology. Founded by Cornelius Lawrence, the Foundation pioneers Sotilitarianism — a post-capitalist economic philosophy that ties economic value to verified social utility, governed by continuous consent and enforced by smart contracts. Its flagship projects include Transparently (on-chain governance), WeSolar (community solar finance), and the Elevation Engine (autonomous DeFi yield). All code is open source. All governance is on-chain. All decisions are public. Website: https://elevation.foundation`;

export default function Press() {
  const copyBoilerplate = () => {
    navigator.clipboard.writeText(BOILERPLATE);
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Press & Media | The Elevation Foundation"
        description="Press resources for The Elevation Foundation — organization boilerplate, founder bio, white papers, logos, and media contact. A 501(c)(3) nonprofit building blockchain governance and community finance tools."
        canonical="/press"
        keywords="Elevation Foundation press, media kit, nonprofit blockchain press, Sotilitarianism press, Cornelius Lawrence bio, blockchain governance nonprofit, community finance press"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Press & Media — The Elevation Foundation",
          "url": "https://elevation.foundation/press",
          "description": "Press resources and media kit for The Elevation Foundation, a 501(c)(3) nonprofit building blockchain governance and community finance tools.",
          "about": {
            "@type": "NGO",
            "@id": "https://elevation.foundation/#organization",
            "name": "The Elevation Foundation",
            "url": "https://elevation.foundation",
            "sameAs": [
              "https://github.com/ModernDigitalDevelopment",
              "https://twitter.com/ElevationFound",
              "https://www.linkedin.com/company/elevation-foundation"
            ]
          }
        }}
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-navy" aria-label="Press hero">
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Press & Media</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Media <span className="text-gold">Resources</span>
            </h1>
            <p className="font-body text-lg text-white/65 leading-relaxed mb-6">
              Everything journalists, researchers, and grant writers need to cover The Elevation Foundation — boilerplate copy, founder bio, white papers, and media contact.
            </p>
            <a
              href="mailto:press@elevation.foundation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              <Mail size={15} />
              press@elevation.foundation
            </a>
          </div>
        </div>
      </section>

      {/* ─── BOILERPLATE ──────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]" aria-label="Organization boilerplate">
        <div className="container">
          <div className="section-label mb-4">Organization Boilerplate</div>
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            Standard Copy for Press Releases & Listings
          </h2>
          <div className="bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm p-6 mb-4">
            <p className="font-body text-white/80 leading-relaxed text-sm">
              {BOILERPLATE}
            </p>
          </div>
          <button
            onClick={copyBoilerplate}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/30 text-gold font-body text-sm rounded-sm hover:bg-gold/5 transition-all"
          >
            <FileText size={13} />
            Copy Boilerplate
          </button>
        </div>
      </section>

      {/* ─── FAST FACTS ───────────────────────────────────────── */}
      <section className="py-16 bg-navy" aria-label="Fast facts">
        <div className="container">
          <div className="section-label mb-4">Fast Facts</div>
          <h2 className="font-display text-2xl font-bold text-white mb-8">
            Key <span className="text-gold">Details</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Legal Name", value: "The Elevation Foundation" },
              { label: "Tax Status", value: "501(c)(3) Tax-Exempt Nonprofit" },
              { label: "EIN", value: "Available upon request" },
              { label: "Founded", value: "2024" },
              { label: "Founder", value: "Cornelius Lawrence" },
              { label: "Headquarters", value: "United States" },
              { label: "Website", value: "https://elevation.foundation" },
              { label: "GitHub", value: "github.com/ModernDigitalDevelopment" },
              { label: "Philosophy", value: "Sotilitarianism (Capitalism 2.0)" },
              { label: "Token", value: "$TRNS (Transparently Token, Solana)" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start gap-4 p-4 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider w-32 flex-shrink-0 pt-0.5">{label}</div>
                <div className="font-body text-sm text-white/80">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ANGLES ─────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]" aria-label="Story angles">
        <div className="container">
          <div className="section-label mb-4">Story Angles</div>
          <h2 className="font-display text-2xl font-bold text-white mb-8">
            Topics We're <span className="text-gold">Ready to Discuss</span>
          </h2>
          <div className="space-y-3">
            {COVERAGE_TOPICS.map((topic) => (
              <div key={topic} className="flex items-start gap-3 p-4 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm hover:border-gold/20 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="font-body text-sm text-white/75 leading-relaxed">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRESS ASSETS ─────────────────────────────────────── */}
      <section className="py-16 bg-navy" aria-label="Press assets">
        <div className="container">
          <div className="section-label mb-4">Assets & Resources</div>
          <h2 className="font-display text-2xl font-bold text-white mb-8">
            Downloads & <span className="text-gold">Links</span>
          </h2>

          {/* OG Card / Logo */}
          <div className="mb-8 p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
            <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-3">Organization Card</div>
            <img
              src={LOGO_URL}
              alt="The Elevation Foundation — organization card"
              className="w-full max-w-md rounded-sm border border-white/10"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PRESS_ASSETS.map((asset) => (
              <div key={asset.label} className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm hover:border-gold/20 transition-colors">
                <div className="font-display text-base font-bold text-white mb-1">{asset.label}</div>
                <p className="font-body text-sm text-white/55 mb-4">{asset.desc}</p>
                {asset.type === "text" && (
                  <button
                    onClick={copyBoilerplate}
                    className="inline-flex items-center gap-1.5 text-gold text-sm font-body hover:gap-2.5 transition-all"
                  >
                    <FileText size={13} /> Copy Text
                  </button>
                )}
                {asset.type === "link" && asset.href && (
                  <Link href={asset.href} className="inline-flex items-center gap-1.5 text-gold text-sm font-body hover:gap-2.5 transition-all">
                    <ArrowRight size={13} /> View
                  </Link>
                )}
                {asset.type === "external" && asset.href && (
                  <a href={asset.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gold text-sm font-body hover:gap-2.5 transition-all">
                    <ExternalLink size={13} /> Open
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER BIO ──────────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]" aria-label="Founder bio">
        <div className="container">
          <div className="section-label mb-4">Founder</div>
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            Cornelius Lawrence
          </h2>
          <div className="max-w-2xl">
            <p className="font-body text-white/70 leading-relaxed mb-4">
              Cornelius Lawrence is the founder of The Elevation Foundation, a 501(c)(3) nonprofit building transparent, community-governed financial systems using blockchain technology. He is the originator of Sotilitarianism — a post-capitalist economic philosophy that synthesizes social utility theory, utilitarian ethics, and decentralized governance into a coherent alternative to both capitalism and socialism.
            </p>
            <p className="font-body text-white/70 leading-relaxed mb-6">
              Lawrence has authored the Sotilitarian Capitalism manifesto series, the Sotilitarian Revolt, and over 40 documents defining the Sotility ecosystem's governance, token economics, and technical architecture. His work spans blockchain smart contracts, DeFi protocol design, community solar finance, and on-chain governance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about/founder"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/30 text-gold font-body text-sm rounded-sm hover:bg-gold/5 transition-all"
              >
                Full Bio <ArrowRight size={13} />
              </Link>
              <a
                href="https://github.com/ModernDigitalDevelopment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 font-body text-sm rounded-sm hover:border-white/40 hover:text-white transition-all"
              >
                <Github size={13} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section className="py-16 bg-navy border-t border-white/10" aria-label="Press contact">
        <div className="container">
          <div className="max-w-xl">
            <div className="section-label mb-4">Media Contact</div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="font-body text-white/60 mb-6">
              For press inquiries, interview requests, and partnership opportunities, contact us directly. We respond to all media inquiries within 48 hours.
            </p>
            <a
              href="mailto:press@elevation.foundation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200"
            >
              <Mail size={15} />
              press@elevation.foundation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
