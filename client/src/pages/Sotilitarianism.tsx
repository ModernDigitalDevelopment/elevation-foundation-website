/*
 * ELEVATION RISING — Sotilitarianism Dedicated SEO Landing Page
 * Primary SEO target: "capitalism 2.0", "utilitarian capitalism", "transparent economics"
 * Full JSON-LD structured data for Book, Article, and Organization schemas
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, FileText, ExternalLink, ChevronRight, Zap, Shield, Globe, Users } from "lucide-react";

const GITHUB_REPO = "https://github.com/ModernDigitalDevelopment/sotilitarianism";

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
    slug: "sotilitarian-capitalism-part-1-new-economic-operating-system",
  },
  {
    part: "Part II",
    title: "The Political Framework",
    chapters: ["Continuous Consent Governance", "Liquid Democracy and Delegated Voting", "Multi-Level Governance Architecture", "The R-Score and Reputation Systems"],
    slug: "sotilitarian-capitalism-part-2-political-framework",
  },
  {
    part: "Part III",
    title: "The Five-Layer Technical Architecture",
    chapters: ["Layer 1: The Token Layer", "Layer 2: The Social Layer", "Layer 3: The Financial Layer", "Layer 4: The Governance Layer", "Layer 5: The AI & Verification Layer"],
    slug: "sotilitarian-capitalism-part-3-technical-architecture",
  },
  {
    part: "Part IV",
    title: "Implementation Strategy",
    chapters: ["The Trojan Horse Strategy", "Cross-Sector Applications", "The Comprehensive Benefits Analysis", "Beyond the Binary Debate"],
    slug: "sotilitarian-capitalism-part-4-implementation-strategy",
  },
  {
    part: "Part V",
    title: "The Future of Economics",
    chapters: ["The End of an Era", "The Sotilitarian Vision for 2030", "The Long Arc", "A Call to Build"],
    slug: "sotilitarian-capitalism-part-5-future-of-economics",
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

      {/* ─── HERO ─────────────────────────────────────────────── */}
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
                href="/blog/sotilitarian-capitalism-part-1-new-economic-operating-system"
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

      {/* ─── WHAT IS SOTILITARIANISM ──────────────────────────── */}
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

      {/* ─── THE FIVE-PART TREATISE ───────────────────────────── */}
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
              href="/blog/sotilitarian-revolt-rewriting-value"
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

      {/* ─── KEY TERMS GLOSSARY ───────────────────────────────── */}
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

      {/* ─── FAQ ──────────────────────────────────────────────── */}
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

      {/* ─── CTA ──────────────────────────────────────────────── */}
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
