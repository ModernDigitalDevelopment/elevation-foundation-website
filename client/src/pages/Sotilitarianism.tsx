/*
 * ELEVATION RISING — Sotilitarianism Dedicated SEO Landing Page
 * Primary SEO target: "capitalism 2.0", "utilitarian capitalism", "transparent economics"
 * Full JSON-LD structured data for Book, Article, and Organization schemas
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import DocumentShareControls from "@/components/DocumentShareControls";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, FileText, ExternalLink, ChevronRight, Zap, Shield, Globe, Users, Code2, Download, Gavel } from "lucide-react";

const GITHUB_REPO = "https://github.com/ModernDigitalDevelopment/sotilitarianism";
const GITHUB_CONTRACTS = "https://github.com/ModernDigitalDevelopment/sotilitarianism/tree/main/smart-contracts/contracts";
const GITHUB_DEPLOYMENT = "https://github.com/ModernDigitalDevelopment/sotilitarianism/blob/main/smart-contracts/DEPLOYMENT.md";
const GITHUB_RELEASE = "https://github.com/ModernDigitalDevelopment/sotilitarianism/releases/tag/v1.0.0";
const GITHUB_ESP = "https://github.com/ModernDigitalDevelopment/sotilitarianism/blob/main/grant-applications/ethereum-foundation-esp.md";
const PITCH_DECK_URL = "/manus-storage/sotility-pitch-deck_6eaff90a.pdf";
const PITCH_DECK_SHARE_URL = "https://elevation.foundation/manus-storage/sotility-pitch-deck_6eaff90a.pdf";
const PITCH_DECK_PREVIEW_URL = "/manus-storage/sotility-pitch-deck-preview-thumbnail_86be8f8e.webp";

const protocolContracts = [
  { layer: "Token Layer", contracts: ["SotilityOwnershipToken (SOT)", "SotilityStableToken (SST)", "SoGoodUtilityGovernance (SUG)"], color: "text-gold", border: "border-gold/30", bg: "bg-gold/5" },
  { layer: "Identity Layer (Klarity)", contracts: ["SotilityProfileRegistry", "SotilityProofOfPersonhood", "SotilityZKIdentity", "SotilityCrossChainIdentity"], color: "text-teal", border: "border-teal/30", bg: "bg-teal/5" },
  { layer: "Governance Layer", contracts: ["SotilityVeToken", "SoGoodFeed", "SotilityBadgeNFT"], color: "text-white/80", border: "border-white/20", bg: "bg-white/5" },
  { layer: "Financial Layer (Elevation Engine)", contracts: ["SotilityTreasuryRouter", "SotilityYieldEngine", "SotilityVaultFactory", "SotilityLiquidStaking", "SotilityExchange", "SotilityInsurance"], color: "text-crimson", border: "border-crimson/30", bg: "bg-crimson/5" },
  { layer: "Infrastructure Layer", contracts: ["AIOracleManager", "MultiOracleAggregator", "SotilityBridgeAdapter", "SotilityEmergencyShutdown"], color: "text-white/60", border: "border-white/15", bg: "bg-white/3" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Sotilitarianism: A New Economic Operating System",
    "author": {
      "@type": "Person",
      "name": "Cornelius Lawrence",
      "url": "https://elevation.foundation/about/founder",
      "affiliation": {
        "@type": "Organization",
        "name": "The Elevation Foundation",
        "url": "https://elevation.foundation"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Elevation Foundation",
      "url": "https://elevation.foundation"
    },
    "url": "https://elevation.foundation/sotilitarianism",
    "sameAs": GITHUB_REPO,
    "description": "Sotilitarianism is a new economic philosophy that aligns capitalist incentives with social good through tokenized transparency, AI-powered verification, and participatory governance. Also known as capitalism 2.0, utilitarian capitalism, and transparent economics.",
    "genre": ["Economics", "Political Philosophy", "Blockchain", "Social Theory"],
    "keywords": "capitalism 2.0, utilitarian capitalism, transparent economics, social capitalism, trust tech, transparency tech, sotilitarianism, blockchain governance, community finance, participatory economics",
    "numberOfPages": "400+",
    "inLanguage": "en",
    "license": "https://creativecommons.org/licenses/by-sa/4.0/",
    "hasPart": [
      { "@type": "BookSection", "name": "Part I: Foundation and Vision", "position": 1 },
      { "@type": "BookSection", "name": "Part II: The Five-Layer Framework", "position": 2 },
      { "@type": "BookSection", "name": "Part III: Transformational Mechanisms", "position": 3 },
      { "@type": "BookSection", "name": "Part IV: Implementation and Future", "position": 4 },
      { "@type": "BookSection", "name": "The Sotilitarian Revolt (Companion Volume)", "position": 5 }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "Sotilitarianism",
    "alternateName": ["Capitalism 2.0", "Utilitarian Capitalism", "Transparent Economics", "Social Capitalism", "Sotilitarian Capitalism"],
    "description": "Sotilitarianism is an economic philosophy and governance framework that aligns capitalist incentives with social good through tokenized transparency, AI-powered verification, and participatory governance. It proposes a five-layer architecture — token, social, financial, governance, and AI verification layers — as a new operating system for post-capitalist participation economies.",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Elevation Foundation Glossary",
      "url": "https://github.com/ModernDigitalDevelopment/sotilitarianism/blob/main/GLOSSARY.md"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Sotilitarianism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sotilitarianism is a new economic philosophy that aligns capitalist incentives with social good through tokenized transparency, AI-powered verification, and participatory governance. It is also referred to as capitalism 2.0, utilitarian capitalism, and transparent economics."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Sotilitarianism and traditional capitalism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional capitalism maximizes shareholder value without internalizing social costs. Sotilitarianism redesigns the incentive architecture so that doing good is the most profitable path forward — through Proof of Utility consensus, tokenized social contribution, and transparent on-chain governance."
        }
      },
      {
        "@type": "Question",
        "name": "What is capitalism 2.0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Capitalism 2.0 is a term for post-capitalist economic frameworks that preserve market efficiency while eliminating extractive features. Sotilitarianism is the Elevation Foundation's implementation of capitalism 2.0 — a system where transparency is the default, governance is participatory, and economic power flows toward those who create genuine social value."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Sotility token?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Sotility ecosystem uses three tokens: SOT (SotilityOwnershipToken) for governance and dividends, SUG (SoGoodUtilityGovernance Token) earned through verified social contributions, and SST (SotilityStableToken) a USD-pegged stablecoin backed by verified business revenue."
        }
      }
    ]
  }
];

const bookParts = [
  {
    part: "Part I",
    title: "Foundation and Vision",
    chapters: ["The Sotilitarian Vision", "Foundational Principles: Towards Utilitarian Consensusism", "The Crisis of Traditional Capitalism", "The Dual-Lever Economic Model"],
    slug: "sotilitarian-capitalism-part-i-the-new-economic-operating-system",
  },
  {
    part: "Part II",
    title: "The Political Framework",
    chapters: ["Continuous Consent Governance", "Liquid Democracy and Delegated Voting", "Multi-Level Governance Architecture", "The R-Score and Reputation Systems"],
    slug: "sotilitarian-capitalism-continuous-consent-political-framework",
  },
  {
    part: "Part III",
    title: "The Five-Layer Technical Architecture",
    chapters: ["Layer 1: The Token Layer", "Layer 2: The Social Layer", "Layer 3: The Financial Layer", "Layer 4: The Governance Layer", "Layer 5: The AI & Verification Layer"],
    slug: "sotilitarian-capitalism-part-iii-the-five-layer-technical-architecture",
  },
  {
    part: "Part IV",
    title: "Implementation Strategy",
    chapters: ["The Trojan Horse Strategy", "Cross-Sector Applications", "The Comprehensive Benefits Analysis", "Beyond the Binary Debate"],
    slug: "sotilitarian-capitalism-part-4-implementation-strategy-trojan-horse-effect",
  },
  {
    part: "Part V",
    title: "The Future of Economics",
    chapters: ["The End of an Era", "The Sotilitarian Vision for 2030", "The Long Arc", "A Call to Build"],
    slug: "sotilitarian-capitalism-part-v-future-of-economics-beyond-binary-debate",
  },
];

const keyTerms = [
  { term: "Capitalism 2.0", definition: "A post-capitalist economic framework that preserves market efficiency while eliminating extractive features through structural incentive alignment." },
  { term: "Utilitarian Capitalism", definition: "An economic system where profit and social utility are structurally aligned — doing good is the most profitable path forward." },
  { term: "Transparent Economics", definition: "An economic model where all transactions, governance decisions, and resource allocations are publicly verifiable on immutable public ledgers." },
  { term: "Social Capitalism", definition: "A market-based system that explicitly incorporates social good as an economic output, measured and rewarded through Proof of Utility consensus." },
  { term: "Trust Tech", definition: "Technology infrastructure designed to replace institutional trust with mathematical trust — smart contracts, cryptographic verification, and public ledgers." },
  { term: "Transparency Tech", definition: "Technology that makes opacity structurally impossible — AI audit oracles, on-chain governance, and public treasury management." },
  { term: "Proof of Utility", definition: "A consensus mechanism that rewards verified social good, making the most socially beneficial actors the most economically powerful." },
  { term: "Dual-Lever Economic Model", definition: "Sotilitarianism's core economic innovation — operating on both demand-side (tokenized rebates, contribution rewards) and supply-side (on-chain accountability, smart contract automation) simultaneously." },
  { term: "Sotility", definition: "The token ecosystem powering Sotilitarianism: SOT (ownership/governance), SUG (social utility), and SST (USD-pegged stablecoin)." },
  { term: "R-Score", definition: "The Reputation Score — a composite metric calculated from governance participation, community contribution, and verified social impact. Determines governance weight and platform access." },
];

const faq = [
  {
    q: "What is Sotilitarianism?",
    a: "Sotilitarianism is a new economic philosophy that aligns capitalist incentives with social good through tokenized transparency, AI-powered verification, and participatory governance. It is also referred to as capitalism 2.0, utilitarian capitalism, and transparent economics. It proposes a five-layer architecture as a new operating system for post-capitalist participation economies.",
  },
  {
    q: "What is the difference between Sotilitarianism and traditional capitalism?",
    a: "Traditional capitalism maximizes shareholder value without internalizing social costs. Sotilitarianism redesigns the incentive architecture so that doing good is the most profitable path forward — through Proof of Utility consensus, tokenized social contribution, and transparent on-chain governance. It is not a rejection of markets; it is a redesign of market incentives.",
  },
  {
    q: "What is capitalism 2.0?",
    a: "Capitalism 2.0 is a term for post-capitalist economic frameworks that preserve market efficiency while eliminating extractive features. Sotilitarianism is the Elevation Foundation's implementation of capitalism 2.0 — a system where transparency is the default, governance is participatory, and economic power flows toward those who create genuine social value.",
  },
  {
    q: "How is Sotilitarianism different from socialism?",
    a: "Sotilitarianism is not socialism. It does not propose collective ownership of the means of production or centralized economic planning. It preserves market mechanisms and private ownership while redesigning the incentive architecture to align individual self-interest with collective outcomes. It transcends the capitalism vs. socialism binary through mechanism design.",
  },
  {
    q: "What is the Sotility token ecosystem?",
    a: "The Sotility ecosystem uses three tokens: SOT (SotilityOwnershipToken) for governance and dividends, SUG (SoGoodUtilityGovernance Token) earned through verified social contributions, and SST (SotilityStableToken) a USD-pegged stablecoin backed by verified business revenue.",
  },
  {
    q: "Where can I read the full Sotilitarianism text?",
    a: "The complete Sotilitarianism treatise is published open-source on GitHub at github.com/ModernDigitalDevelopment/sotilitarianism under CC BY-SA 4.0. You can also read the five-part series on this blog.",
  },
];

export default function SotilitarianismPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Sotilitarianism — Capitalism 2.0 | Utilitarian Capitalism | Transparent Economics"
        description="Sotilitarianism is a new economic philosophy — capitalism 2.0 — that aligns profit with social good through tokenized transparency, AI verification, and participatory governance. Read the complete 5-part treatise by Cornelius Lawrence."
        canonical="/sotilitarianism"
        keywords="sotilitarianism, capitalism 2.0, utilitarian capitalism, transparent economics, social capitalism, trust tech, transparency tech, sotilitarian capitalism, participatory economics, cooperative economics, solidarity economics, post-capitalism, blockchain governance, community finance, proof of utility, dual-lever economic model, sotility token, SOT token, transparent governance, economic philosophy, new economic system"
        jsonLd={jsonLd}
      />
      <Navigation />

      {/* --- HERO ----------------------------------------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.10_0.05_265)] via-navy to-[oklch(0.12_0.08_265)]" />
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(oklch(0.72 0.12 75) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.12 75) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 section-label mb-6 border border-gold/30 px-3 py-1 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Economic Philosophy · Blockchain Governance · Capitalism 2.0
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black text-white leading-[0.95] mb-6">
              <span className="gold-shimmer">Sotili</span>
              <span className="text-white">tarianism</span>
            </h1>
            <p className="font-display text-2xl md:text-3xl text-white/60 italic mb-8 leading-snug">
              A New Economic Operating System.<br />
              <span className="text-gold">Capitalism 2.0.</span>
            </p>
            <p className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              Sotilitarianism is an economic philosophy that aligns capitalist incentives with social good through tokenized transparency, AI-powered verification, and participatory governance. It is the framework behind the Elevation Foundation's work — and a proposal for what comes after extractive capitalism.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/blog/sotilitarian-capitalism-part-i-the-new-economic-operating-system"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.5)] group"
              >
                Read the Treatise
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
              >
                <ExternalLink size={15} />
                GitHub Repository
              </a>
              <Link
                href="/white-papers"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/70 font-body font-medium rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
              >
                <FileText size={15} />
                Download PDFs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHAT IS SOTILITARIANISM ---------------------------- */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">The Definition</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                What Is<br />
                <span className="text-gold">Sotilitarianism?</span>
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                Sotilitarianism — also called <strong className="text-white">capitalism 2.0</strong>, <strong className="text-white">utilitarian capitalism</strong>, and <strong className="text-white">transparent economics</strong> — is a new economic philosophy developed by Cornelius Lawrence and the Elevation Foundation.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                It starts from a simple observation: traditional capitalism is efficient at creating wealth but structurally incapable of distributing it equitably. The problem is not greed — it is mechanism design. The incentive architecture of extractive capitalism makes exploitation more profitable than contribution.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
                Sotilitarianism redesigns the incentive architecture. Through the <strong className="text-white">Dual-Lever Economic Model</strong>, <strong className="text-white">Proof of Utility</strong> consensus, and a five-layer blockchain architecture, it creates a system where doing good is the most profitable path forward — structurally, not morally.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 py-2 mb-8">
                <p className="font-display text-xl text-white/90 italic leading-relaxed">
                  "Make blockchain invisible. Make impact inevitable."
                </p>
                <cite className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mt-3 block">— Cornelius Lawrence</cite>
              </blockquote>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, color: "text-gold", border: "border-gold/30", bg: "bg-gold/10", title: "Radical Transparency", desc: "Every transaction, governance decision, and resource allocation is recorded on an immutable public ledger. Opacity is not a right — it is a privilege that must be earned through demonstrated trustworthiness." },
                { icon: Users, color: "text-teal", border: "border-teal/30", bg: "bg-teal/10", title: "Community Sovereignty", desc: "Token holders govern the system. No single person, board, or entity controls the direction. Power is distributed by design, enforced by smart contracts, and resistant to capture." },
                { icon: Zap, color: "text-crimson", border: "border-crimson/30", bg: "bg-crimson/10", title: "Autonomous Finance", desc: "Smart contracts execute without human intermediaries. The Elevation Engine generates yield autonomously, funding the mission 24/7. Profit without predation." },
                { icon: Globe, color: "text-white/80", border: "border-white/20", bg: "bg-white/5", title: "Proof of Utility", desc: "Social good is economically rewarded. The most socially beneficial actors become the most economically powerful. Self-interest and altruism point in the same direction." },
              ].map(({ icon: Icon, color, border, bg, title, desc }) => (
                <div key={title} className={`flex items-start gap-4 p-5 border ${border} ${bg} rounded-sm`}>
                  <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border ${border}`} style={{ background: "oklch(0.16 0.05 265)" }}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <h3 className={`font-body font-semibold text-sm ${color} mb-1`}>{title}</h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE FIVE-PART TREATISE ----------------------------- */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">The Complete Work</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              The Five-Part<br />
              <span className="text-gold">Sotilitarian Treatise</span>
            </h2>
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
              A comprehensive framework for a new economic operating system. Read online, download as PDF, or explore the full source on GitHub.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {bookParts.map((part, i) => (
              <Link
                key={part.part}
                href={`/blog/${part.slug}`}
                className="block bg-[oklch(0.16_0.05_265)] border border-white/10 hover:border-gold/30 p-6 rounded-sm card-lift group transition-all duration-200"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-sm border border-gold/20 bg-gold/5 group-hover:border-gold/40 transition-colors">
                    <span className="font-display text-xl font-bold text-gold">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono-data text-xs text-gold/60 uppercase tracking-wider mb-1">{part.part}</div>
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{part.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {part.chapters.map((ch) => (
                        <span key={ch} className="font-body text-xs text-white/50 border border-white/10 px-2 py-0.5 rounded-sm">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight size={18} className="flex-shrink-0 text-white/30 group-hover:text-gold group-hover:translate-x-1 transition-all mt-1" />
                </div>
              </Link>
            ))}

            {/* Companion: The Revolt */}
            <Link
              href="/blog/the-sotilitarian-revolt-why-the-system-isnt-broken-its-working-as-designed"
              className="block bg-[oklch(0.16_0.05_265)] border border-crimson/20 hover:border-crimson/40 p-6 rounded-sm card-lift group transition-all duration-200"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-sm border border-crimson/30 bg-crimson/10 group-hover:border-crimson/50 transition-colors">
                  <BookOpen size={22} className="text-crimson" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono-data text-xs text-crimson/70 uppercase tracking-wider mb-1">Companion Volume</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-crimson transition-colors">The Sotilitarian Revolt</h3>
                  <p className="font-body text-sm text-white/55">Rewriting Value in the Age of Trust — A manifesto for the disillusioned. The philosophical and political case for Sotilitarianism.</p>
                </div>
                <ChevronRight size={18} className="flex-shrink-0 text-white/30 group-hover:text-crimson group-hover:translate-x-1 transition-all mt-1" />
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-body font-medium hover:gap-3 transition-all duration-200 group"
            >
              Read the full source on GitHub
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- PROTOCOL & SMART CONTRACTS ----------------------- */}
      <section className="py-24 bg-[oklch(0.12_0.05_265)] border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-label mb-4">The Protocol</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                20 Smart Contracts.<br />
                <span className="text-gold">Five Protocol Layers.</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={GITHUB_RELEASE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body text-sm rounded-sm hover:bg-gold-light transition-all"
              >
                <Download size={14} />
                v1.0.0 Release
              </a>
              <a
                href={GITHUB_DEPLOYMENT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 font-body text-sm rounded-sm hover:border-gold/40 hover:text-gold transition-all"
              >
                <Code2 size={14} />
                Deployment Guide
              </a>
            </div>
          </div>

          {/* --- PITCH DECK PREVIEW -------------------------------- */}
          <article className="mb-12 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] overflow-hidden rounded-sm border border-gold/25 bg-[oklch(0.14_0.05_265)] shadow-[0_18px_45px_oklch(0.06_0.04_265/0.28)]">
            <a
              href={PITCH_DECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block min-h-64 overflow-hidden bg-[oklch(0.10_0.05_265)]"
              aria-label="Open the Sotility pitch deck PDF"
            >
              <img
                src={PITCH_DECK_PREVIEW_URL}
                alt="First-page preview of the Sotility pitch deck"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-80 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.05_265/0.92)] via-[oklch(0.08_0.05_265/0.20)] to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="font-mono-data text-[10px] uppercase tracking-[0.18em] text-gold/85">Investor overview</div>
                  <div className="mt-1 font-display text-xl font-bold text-white">Sotility Pitch Deck</div>
                </div>
                <FileText size={22} className="flex-shrink-0 text-gold" />
              </div>
            </a>
            <div className="flex flex-col justify-center p-7 md:p-9">
              <div className="section-label mb-3">Presentation</div>
              <h3 className="font-display text-2xl font-bold leading-tight text-white">
                A concise view of the <span className="text-gold">Sotility opportunity.</span>
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
                Explore the problem, protocol, token model, revenue flywheel, roadmap, and funding case behind the Foundation’s transparent-economics infrastructure.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={PITCH_DECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 bg-gold px-4 py-2.5 font-body text-sm font-semibold text-[oklch(0.12_0.05_265)] rounded-sm transition-all hover:bg-gold-light"
                >
                  <Download size={14} />
                  Download Pitch Deck
                </a>
                <a
                  href={PITCH_DECK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 font-body text-sm font-medium text-white/75 rounded-sm transition-all hover:border-white/40 hover:text-white"
                >
                  <ExternalLink size={14} />
                  View PDF
                </a>
                <DocumentShareControls documentUrl={PITCH_DECK_SHARE_URL} documentTitle="Sotility Pitch Deck" compact />
              </div>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {protocolContracts.map((layer) => (
              <div key={layer.layer} className={`p-5 border ${layer.border} ${layer.bg} rounded-sm`}>
                <div className={`font-mono-data text-xs uppercase tracking-wider ${layer.color} mb-3`}>{layer.layer}</div>
                <ul className="space-y-1.5">
                  {layer.contracts.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 bg-current ${layer.color}`} />
                      <span className="font-mono-data text-xs text-white/70">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={GITHUB_CONTRACTS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-body font-medium hover:gap-3 transition-all duration-200 group"
            >
              Browse all 20 contracts on GitHub
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOR FUNDERS --------------------------------------- */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-label mb-4">Funding & Grants</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              For Funders &<br />
              <span className="text-gold">Grant Programs</span>
            </h2>
            <p className="font-body text-white/65 text-lg leading-relaxed mb-10">
              The Elevation Foundation is a 501(c)(3) nonprofit (EIN: 92-1042348) actively seeking grant funding to deploy the Sotility Protocol, publish academic research on the efficiency-backed stablecoin mechanism, and expand community governance infrastructure.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Gavel, title: "Ethereum Foundation ESP", amount: "$75,000", status: "Application Ready", desc: "Academic/research grant for formal publication of the efficiency-backed stablecoin mechanism and Base Mainnet deployment of all 20 contracts.", link: GITHUB_ESP, linkLabel: "View Application Draft", color: "text-gold", border: "border-gold/30", bg: "bg-gold/5" },
                { icon: Globe, title: "Gitcoin DeSci Round", amount: "Community Match", status: "Application Ready", desc: "Quadratic funding for open-source DeSci research. Every unique donor increases the matching multiplier — even $1 counts.", link: "https://explorer.gitcoin.co", linkLabel: "View Gitcoin", color: "text-teal", border: "border-teal/30", bg: "bg-teal/5" },
                { icon: Shield, title: "Celo Climate Collective", amount: "$25K–$100K", status: "Via WeSolar", desc: "Climate finance grant for the WeSolar tokenized community solar project, built on the Sotility Protocol infrastructure.", link: "https://celo.org/climate", linkLabel: "View Program", color: "text-crimson", border: "border-crimson/30", bg: "bg-crimson/5" },
                { icon: FileText, title: "Ford / Mozilla / Knight", amount: "$25K–$100K+", status: "Planned", desc: "Foundation grants for digital equity, open-source public goods, and community financial infrastructure. For Funders page in development.", link: "/our-story", linkLabel: "Our Story", color: "text-white/70", border: "border-white/20", bg: "bg-white/5" },
              ].map(({ icon: Icon, title, amount, status, desc, link, linkLabel, color, border, bg }) => (
                <div key={title} className={`p-6 border ${border} ${bg} rounded-sm`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`flex items-center gap-2 font-mono-data text-xs uppercase tracking-wider ${color}`}>
                      <Icon size={13} />
                      {title}
                    </div>
                    <span className="font-mono-data text-xs text-white/40 border border-white/15 px-2 py-0.5 rounded-sm">{status}</span>
                  </div>
                  <div className={`font-display text-2xl font-bold ${color} mb-2`}>{amount}</div>
                  <p className="font-body text-sm text-white/60 leading-relaxed mb-4">{desc}</p>
                  <a
                    href={link}
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center gap-1.5 text-sm font-body ${color} hover:opacity-80 transition-opacity`}
                  >
                    {linkLabel} <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[oklch(0.16_0.05_265)] border border-gold/20 rounded-sm text-center">
              <p className="font-body text-white/70 text-sm mb-3">
                The Elevation Foundation is a 501(c)(3) tax-exempt nonprofit. EIN: 92-1042348. All grant funds are used exclusively for open-source protocol development, academic research, and community benefit.
              </p>
              <a
                href="mailto:contact@elevationfoundation.org"
                className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:opacity-80 transition-opacity"
              >
                contact@elevationfoundation.org <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEY TERMS GLOSSARY --------------------------------- */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="mb-12">
            <div className="section-label mb-4">Glossary</div>
            <h2 className="font-display text-4xl font-bold text-white">
              Key Terms &<br />
              <span className="text-gold">Definitions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {keyTerms.map((item) => (
              <div key={item.term} className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <dt className="font-display text-base font-bold text-gold mb-2">{item.term}</dt>
                <dd className="font-body text-sm text-white/65 leading-relaxed">{item.definition}</dd>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={`${GITHUB_REPO}/blob/main/GLOSSARY.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm transition-colors"
            >
              View the complete glossary on GitHub
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* --- FAQ ------------------------------------------------ */}
      <section className="py-24 bg-navy">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <div className="section-label mb-4">Frequently Asked Questions</div>
            <h2 className="font-display text-4xl font-bold text-white">
              Common Questions About<br />
              <span className="text-gold">Sotilitarianism</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="border-b border-white/10 pb-6">
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="font-body text-white/65 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SSRN CITATION ------------------------------------- */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)] border-t border-white/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="section-label mb-4">Academic Research</div>
            <h2 className="font-display text-3xl font-bold text-white mb-8">Published on SSRN</h2>
            <div className="border border-gold/25 bg-gold/5 rounded-sm p-7 mb-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold/10 border border-gold/30 rounded-sm">
                  <FileText size={20} className="text-gold" />
                </div>
                <div className="flex-1">
                  <div className="font-mono-data text-[10px] uppercase tracking-wider text-gold/60 mb-2">SSRN Working Paper · April 16, 2026 · 19 Pages · Open Access</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Sotilitarianism: A Framework for Blockchain-Native Governance and Incentive-Aligned Political Economy
                  </h3>
                  <p className="font-body text-white/50 text-sm mb-3">Cornelius DeFalco · Social Science Research Network</p>
                  <blockquote className="border-l-2 border-gold/40 pl-4 mb-4">
                    <p className="font-body text-white/65 text-sm italic leading-relaxed">
                      "Sotilitarianism proposes a new socioeconomic philosophy in which transparency is architecturally enforced, community sovereignty is structurally guaranteed, and individual self-interest is made structurally identical to collective social good — through programmable incentive mechanisms deployed on public blockchains."
                    </p>
                  </blockquote>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Mechanism Design", "DAOs", "Commons Governance", "Political Economy", "Tokenomics", "Capitalism 2.0"].map(t => (
                      <span key={t} className="font-mono-data text-[10px] px-2 py-0.5 border border-gold/20 text-gold/55 rounded">{t}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6678798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[oklch(0.12_0.05_265)] font-body font-semibold text-sm rounded-sm hover:bg-gold-light transition-all"
                    >
                      Read on SSRN <ExternalLink size={12} />
                    </a>
                    <Link
                      href="/white-papers"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/55 font-body text-sm rounded-sm hover:border-gold/40 hover:text-gold transition-all"
                    >
                      All Research Documents
                    </Link>
                    <Link
                      href="/capitalism-2-0"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/45 font-body text-sm rounded-sm hover:border-gold/30 hover:text-gold transition-all"
                    >
                      Capitalism 2.0 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA ------------------------------------------------ */}
      <section className="py-20 bg-[oklch(0.12_0.05_265)] border-t border-white/10">
        <div className="container text-center">
          <div className="section-label mb-4">Get Involved</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            The System Was Not Built For Us.<br />
            <span className="text-gold">So We Are Building Our Own.</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto mb-10">
            Read the work, join the community, or contribute to the open-source codebase. Sotilitarianism is a construction project — and it needs builders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              Read the Blog
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/white-papers"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Download Research
            </Link>
            <Link
              href="/token-economy"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/30 text-gold font-body font-medium rounded-sm hover:bg-gold/10 transition-all duration-200"
            >
              Token Economy
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/70 font-body font-medium rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
