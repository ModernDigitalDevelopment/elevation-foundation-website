/*
 * ELEVATION RISING — White Papers & Documents Page
 * Showcases all key research documents, whitepapers, and manifestos
 * with CDN download links and full SEO metadata
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Download, FileText, BookOpen, Zap, Sun, Shield, Cpu, Github, ExternalLink } from "lucide-react";

const categories = [
  { id: "philosophy", label: "Philosophy & Governance", color: "text-gold", border: "border-gold/30", bg: "bg-gold/10", repo: "sotilitarianism" },
  { id: "transparently", label: "Transparently DApp", color: "text-teal", border: "border-teal/30", bg: "bg-teal/10", repo: "transparently" },
  { id: "wesolar", label: "WeSolar", color: "text-crimson", border: "border-crimson/30", bg: "bg-crimson/10", repo: "wesolar" },
  { id: "token", label: "Token Economy", color: "text-white/80", border: "border-white/20", bg: "bg-white/5", repo: "elevation-foundation" },
];

const documents = [
  {
    category: "philosophy",
    icon: BookOpen,
    title: "The American Transparency Revolution Manifesto",
    subtitle: "The Founding Document",
    description: "The foundational manifesto of the Elevation Foundation. This document lays out the philosophical case for radical transparency in governance, finance, and civic life — and introduces Sotilitarianism as the framework for a new social contract built on verifiable public good.",
    pages: "42 pages",
    year: "2024",
    tags: ["Sotilitarianism", "Manifesto", "Governance", "Philosophy"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/american-transparency-revolution-manifesto_549ab403.pdf",
    featured: true,
  },
  {
    category: "philosophy",
    icon: Zap,
    title: "Tokenized Transparency: The SST Mint Mechanism",
    subtitle: "Efficiency as Collateral — A New Monetary Primitive",
    description: "The first formal specification of the SST mint mechanism — a stablecoin collateralized not by stored wealth, but by the measurable efficiency surplus generated when organizations integrate Sotility Trust Tech. Defines the four-stage mint process, anti-inflation properties, the adoption flywheel, and investment pathways. Submitted to Frontiers in Blockchain, April 2026.",
    pages: "18 pages",
    year: "2026",
    tags: ["SST Stablecoin", "Tokenized Transparency", "Efficiency Collateral", "Monetary Design", "Sotility Trust Tech"],
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663269003011/qvPqixTMWDbIDCZd.pdf",
    featured: true,
  },
  {
    category: "philosophy",
    icon: Shield,
    title: "Sotility Whitepaper",
    subtitle: "The Token Economy & Governance Architecture",
    description: "The complete technical and philosophical whitepaper for the Sotility ecosystem. Covers the three-token economy (SOT, SUG, SST), governance mechanisms, the Dual-Lever Economic Flywheel, R-scores, time-weighted voting, and the Five-Layer Trust Kernel Stack.",
    pages: "38 pages",
    year: "2024",
    tags: ["SOT Token", "SUG Token", "SST Stablecoin", "Tokenomics", "DAO"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/sotility-whitepaper_24f46455.pdf",
    featured: true,
  },
  {
    category: "philosophy",
    icon: BookOpen,
    title: "Sotility Ecosystem Overview",
    subtitle: "Complete Ecosystem Architecture",
    description: "A comprehensive overview of the complete Sotility ecosystem — all projects, protocols, and how they interconnect. Includes the SoGood platform, Transparently DApp, WeSolar, and the Elevation Engine. Covers the Dual-Lever Economic Model and Utility Maximization Feedback Loop.",
    pages: "28 pages",
    year: "2024",
    tags: ["Ecosystem", "DeFi", "Community Governance", "Social Capitalism"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/sotility-ecosystem-complete_370400bc.pdf",
    featured: false,
  },
  {
    category: "philosophy",
    icon: Shield,
    title: "Appendix A: Token Distribution Model",
    subtitle: "SOT, SUG & SST Allocation Schedules",
    description: "Detailed breakdown of the SOT, SUG, and SST token distribution schedules, vesting periods, allocation percentages, and economic rationale for each allocation category.",
    pages: "18 pages",
    year: "2024",
    tags: ["Tokenomics", "SOT", "SUG", "SST"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/appendix-a_75413c61.pdf",
    featured: false,
  },
  {
    category: "philosophy",
    icon: Shield,
    title: "Appendix B: Governance Architecture",
    subtitle: "Multi-Level Governance Technical Spec",
    description: "Technical specification of the multi-level governance model — from token holder proposals to steward elections to smart contract execution. Includes continuous consent mechanism and liquid democracy implementation.",
    pages: "22 pages",
    year: "2024",
    tags: ["Governance", "DAO", "Blockchain", "Utilitarian Capitalism"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/appendix-b_91e7f139.pdf",
    featured: false,
  },
  {
    category: "philosophy",
    icon: Shield,
    title: "Appendix C: Security Model & Threat Analysis",
    subtitle: "Smart Contract Security Specification",
    description: "Comprehensive security analysis of the Sotility smart contract suite — attack vectors, mitigation strategies, audit requirements, and the multi-signature treasury protection model.",
    pages: "24 pages",
    year: "2024",
    tags: ["Security", "Smart Contracts", "Audit", "Trust Tech"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/appendix-c_f6336e7c.pdf",
    featured: false,
  },
  {
    category: "token",
    icon: Cpu,
    title: "Elevation Ownership Token (EOT) — Smart Contract",
    subtitle: "Solidity Contract Documentation",
    description: "Technical documentation for the ElevationOwnershipToken.sol smart contract. Covers the ERC-20 implementation, ownership mechanics, minting controls, governance integration, and the on-chain treasury routing logic for the Elevation Foundation.",
    pages: "18 pages",
    year: "2024",
    tags: ["Solidity", "ERC-20", "Smart Contract", "EOT Token"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/elevation-ownership-token_b1fe4aef.pdf",
    featured: false,
  },
  {
    category: "transparently",
    icon: FileText,
    title: "Transparently DApp — Architecture Overview",
    subtitle: "Technical Architecture Document",
    description: "Full technical architecture for the Transparently decentralized governance application. Covers the smart contract layer, transparency scoring algorithm, on-chain voting mechanics, the Governance Activity Feed, and integration with the Sotility token economy.",
    pages: "34 pages",
    year: "2024",
    tags: ["DApp", "Architecture", "Smart Contracts", "Governance Scoring"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/transparently-dapp-architecture_dc5dcb99.pdf",
    featured: true,
  },
  {
    category: "transparently",
    icon: FileText,
    title: "Transparently MVP Strategy",
    subtitle: "Go-to-Market & Product Roadmap",
    description: "The minimum viable product strategy and phased launch roadmap for Transparently. Covers target user segments (nonprofits, DAOs, government agencies), feature prioritization, pilot program design, and the path from MVP to full decentralized governance platform.",
    pages: "28 pages",
    year: "2024",
    tags: ["MVP", "Product Strategy", "Roadmap", "Nonprofits"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/transparently-mvp-strategy_403a1e9b.pdf",
    featured: false,
  },
  {
    category: "transparently",
    icon: Zap,
    title: "Transparently Monetization Plan",
    subtitle: "Revenue Model & Business Strategy",
    description: "The business model and revenue strategy for the Transparently platform. Covers the freemium tier structure, premium governance features, enterprise licensing for government agencies, token-gated access mechanics, and the path to financial sustainability.",
    pages: "31 pages",
    year: "2024",
    tags: ["Business Model", "Revenue", "Enterprise", "Freemium"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/transparently-monetization-plan_5afd83db.pdf",
    featured: false,
  },
  {
    category: "wesolar",
    icon: Sun,
    title: "WeSolar Whitepaper — Final",
    subtitle: "Decentralized Community Solar Platform",
    description: "The complete WeSolar whitepaper. Covers the peer-to-peer solar financing model built on the IOTA Tangle, WeSolarCredits tokenization, fractional solar panel ownership, automated energy trading, community governance of shared infrastructure, and the pilot program roadmap for underserved communities.",
    pages: "55 pages",
    year: "2024",
    tags: ["Solar Energy", "IOTA Tangle", "P2P Finance", "WeSolarCredits", "DeFi"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/wesolar-whitepaper_c68f3478.pdf",
    featured: true,
  },
  {
    category: "wesolar",
    icon: Sun,
    title: "WeSolar Technical Specifications",
    subtitle: "Component Architecture & Engineering",
    description: "Detailed technical specifications for all WeSolar platform components. Covers the IOTA Tangle integration, smart meter data feeds, energy credit minting logic, the WeSolario DApp interface, grid interconnection standards, and the technical requirements for solar installation partners.",
    pages: "22 pages",
    year: "2024",
    tags: ["Technical Specs", "IOTA", "Smart Meters", "Engineering"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/wesolar-technical-specs_a424cbfb.pdf",
    featured: false,
  },
  {
    category: "wesolar",
    icon: Sun,
    title: "Modern Energy DAO Whitepaper",
    subtitle: "Decentralized Autonomous Energy Organization",
    description: "A whitepaper exploring the design of a fully decentralized autonomous organization for community energy management. Covers DAO governance of shared solar infrastructure, token-weighted voting on energy policy, automated revenue distribution, and the case for community ownership of clean energy assets.",
    pages: "30 pages",
    year: "2024",
    tags: ["Energy DAO", "Community Ownership", "Clean Energy", "Governance"],
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/modern-energy-dao-whitepaper_a181bcc8.pdf",
    featured: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "White Papers & Research Documents — The Elevation Foundation",
  "description": "Research documents, whitepapers, and manifestos from the Elevation Foundation covering Sotilitarianism, Transparently DApp, WeSolar, and the Sotility token economy.",
  "url": "https://elevation.foundation/white-papers",
  "publisher": {
    "@type": "Organization",
    "name": "The Elevation Foundation",
    "url": "https://elevation.foundation"
  },
  "hasPart": documents.map(doc => ({
    "@type": "DigitalDocument",
    "name": doc.title,
    "description": doc.description,
    "url": doc.url,
    "encodingFormat": "application/pdf"
  }))
};

export default function WhitePapers() {
  const featured = documents.filter(d => d.featured);
  const byCategory = categories.map(cat => ({
    ...cat,
    docs: documents.filter(d => d.category === cat.id),
  }));

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="White Papers & Research Documents | The Elevation Foundation"
        description="Download free research documents, whitepapers, and manifestos from the Elevation Foundation: the Sotilitarianism manifesto, Transparently DApp architecture, WeSolar whitepaper, Sotility tokenomics, and more."
        canonical="/white-papers"
        keywords="Sotilitarianism whitepaper, capitalism 2.0 research, social capitalism whitepaper, utilitarian capitalism, transparent economics research, trust tech whitepaper, transparency tech, Transparently DApp architecture, WeSolar whitepaper, Elevation Foundation documents, blockchain governance research, community solar whitepaper, SOT token whitepaper, free blockchain research"
        jsonLd={jsonLd}
      />
      <Navigation />

      {/* --- HERO ----------------------------------------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.05_265)] to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-4">Research & Documents</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              White Papers &
              <br />
              <span className="gold-shimmer">Open Research</span>
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              All of our research is open and freely available. From the founding manifesto to technical architecture documents — knowledge that belongs to the community should be accessible to the community.
            </p>
          </div>
        </div>
      </section>

      {/* --- SSRN ACADEMIC PAPER -------------------------------- */}
      <section className="py-14 bg-navy border-b border-white/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-label mb-3">Peer-Reviewed Research · New · 2026</div>
            <div className="border border-gold/30 bg-gold/5 rounded-sm p-7 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-sm">
                <ExternalLink size={22} className="text-gold" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono-data text-[10px] uppercase tracking-wider text-gold/70 bg-gold/10 px-2 py-0.5 rounded">SSRN Working Paper</span>
                  <span className="font-mono-data text-[10px] text-white/35 uppercase">Posted May 9, 2026</span>
                  <span className="font-mono-data text-[10px] text-white/35 uppercase">19 Pages</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Sotilitarianism: A Framework for Blockchain-Native Governance and Incentive-Aligned Political Economy
                </h3>
                <p className="font-body text-white/55 text-sm mb-1">
                  <strong className="text-white/75">Author:</strong> Cornelius DeFalco &nbsp;·&nbsp; <strong className="text-white/75">Date:</strong> April 16, 2026
                </p>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4 italic">
                  "Traditional governance systems face a legitimacy crisis rooted in opacity, exclusion, and misaligned incentives. Sotilitarianism proposes a new socioeconomic philosophy in which transparency is architecturally enforced, community sovereignty is structurally guaranteed..."
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Sotilitarianism", "Blockchain Governance", "Mechanism Design", "DAOs", "Capitalism 2.0", "Political Economy"].map(t => (
                    <span key={t} className="font-mono-data text-[10px] px-2 py-0.5 border border-gold/20 text-gold/60 rounded">{t}</span>
                  ))}
                </div>
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6678798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[oklch(0.12_0.05_265)] font-body font-semibold text-sm rounded-sm hover:bg-gold-light transition-all"
                >
                  Read on SSRN <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED DOCUMENTS --------------------------------- */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-4">Featured Documents</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
            Start Here
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((doc) => {
              const Icon = doc.icon;
              const cat = categories.find(c => c.id === doc.category)!;
              return (
                <article
                  key={doc.title}
                  className={`bg-[oklch(0.16_0.05_265)] border ${cat.border} p-7 rounded-sm flex flex-col gap-5 card-lift`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-sm border ${cat.border} ${cat.bg} flex items-center justify-center`}>
                      <Icon size={22} className={cat.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`section-label ${cat.color} mb-1`}>{doc.subtitle}</div>
                      <h3 className="font-display text-xl font-bold text-white leading-snug">{doc.title}</h3>
                    </div>
                  </div>
                  <p className="font-body text-white/65 text-sm leading-relaxed flex-1">{doc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    {doc.tags.map(tag => (
                      <span key={tag} className="font-mono-data text-xs text-white/40 border border-white/10 px-2 py-0.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="font-mono-data text-xs text-white/40">{doc.pages} · {doc.year}</div>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className={`inline-flex items-center gap-2 px-4 py-2 ${cat.bg} border ${cat.border} ${cat.color} font-body text-sm font-medium rounded-sm hover:opacity-80 transition-opacity`}
                      aria-label={`Download ${doc.title} PDF`}
                    >
                      <Download size={14} />
                      Download PDF
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- ALL DOCUMENTS BY CATEGORY -------------------------- */}
      {byCategory.map(cat => (
        <section key={cat.id} className="py-16 bg-navy border-t border-white/10">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className={`section-label ${cat.color} mb-3`}>{cat.label}</div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                  {cat.label} Documents
                </h2>
              </div>
              <a
                href={`https://github.com/ModernDigitalDevelopment/${cat.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-2 px-4 py-2 border ${cat.border} ${cat.color} font-mono-data text-xs rounded-sm hover:opacity-70 transition-opacity`}
              >
                <Github size={14} />
                View Source
                <ExternalLink size={10} className="opacity-60" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {cat.docs.map((doc) => {
                const Icon = doc.icon;
                return (
                  <article
                    key={doc.title}
                    className={`bg-[oklch(0.16_0.05_265)] border ${cat.border} p-6 rounded-sm flex flex-col gap-4 card-lift`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-sm border ${cat.border} ${cat.bg} flex items-center justify-center`}>
                        <Icon size={16} className={cat.color} />
                      </div>
                      <div className={`section-label ${cat.color} text-xs`}>{doc.subtitle}</div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">{doc.title}</h3>
                    <p className="font-body text-white/60 text-sm leading-relaxed flex-1 line-clamp-4">{doc.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="font-mono-data text-xs text-white/40">{doc.pages}</div>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className={`inline-flex items-center gap-1.5 ${cat.color} font-body text-sm font-medium hover:opacity-70 transition-opacity`}
                        aria-label={`Download ${doc.title}`}
                      >
                        <Download size={13} />
                        PDF
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* --- CITATION / OPEN ACCESS NOTE ------------------------ */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)] border-t border-white/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-4">Open Access</div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Free to Share, Free to Build On
            </h2>
            <p className="font-body text-white/65 leading-relaxed mb-6">
              All Elevation Foundation research documents are published under open access principles. You are free to share, cite, and build upon this work — provided you attribute the source and keep derivative works open. Knowledge hoarded is knowledge wasted.
            </p>
            <p className="font-mono-data text-xs text-white/40 mb-8">
              Citation: The Elevation Foundation. (2024). [Document Title]. elevation.foundation/white-papers
            </p>
            <a
              href="https://github.com/ModernDigitalDevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200"
            >
              <Github size={16} />
              View All Repositories on GitHub
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
