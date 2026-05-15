/**
 * ELEVATION RISING — Sotilitarian Capitalism Series Landing Page
 * /blog/series/sotilitarian-capitalism
 * Introduces the 5-part arc and links to each part + SSRN academic papers.
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowRight, BookOpen, ChevronRight, ExternalLink, GraduationCap, FileText } from "lucide-react";

const SERIES = [
  {
    part: 1,
    slug: "sotilitarian-capitalism-part-i-the-new-economic-operating-system",
    title: "The New Economic Operating System",
    fullTitle: "Sotilitarian Capitalism, Part I: The New Economic Operating System",
    excerpt:
      "The global economic engine is not merely stalling — it is actively failing to deliver justice, concentrating wealth while externalizing societal and environmental costs. Sotilitarianism offers a radical alternative: a new economic operating system built on verified utility, radical transparency, and decentralized governance.",
    category: "Philosophy",
    color: "text-gold",
    border: "border-gold/30",
    bg: "bg-gold/5",
    accent: "bg-gold",
    ssrnId: "6767899",
    ssrnUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6767899",
    jelCodes: ["D63", "G28", "H41", "O35", "P16"],
  },
  {
    part: 2,
    slug: "sotilitarian-capitalism-continuous-consent-political-framework",
    title: "Continuous Consent and the Political Framework",
    fullTitle: "Sotilitarian Capitalism, Part II: Continuous Consent and the Political Framework",
    excerpt:
      "The traditional model of representative democracy is failing in the information age, creating a critical disconnect between citizens and governance. Sotilitarian Capitalism offers a revolutionary political framework designed for continuous participation and decentralized power.",
    category: "Governance",
    color: "text-teal",
    border: "border-teal/30",
    bg: "bg-teal/5",
    accent: "bg-teal",
    ssrnId: null,
    ssrnUrl: null,
    jelCodes: ["D72", "D78", "H11", "P16", "K10"],
  },
  {
    part: 3,
    slug: "sotilitarian-capitalism-part-iii-the-five-layer-technical-architecture",
    title: "The Five-Layer Technical Architecture",
    fullTitle: "Sotilitarian Capitalism, Part III: The Five-Layer Technical Architecture",
    excerpt:
      "Sotilitarian Capitalism introduces a revolutionary Five-Layer Technical Architecture built on a Trust Kernel Stack, ensuring every economic interaction is transparent, verifiable, and aligned with social utility. This integrated system aims to replace extractive capitalism with a community-focused alternative.",
    category: "Technology",
    color: "text-[oklch(0.65_0.15_200)]",
    border: "border-[oklch(0.65_0.15_200/0.3)]",
    bg: "bg-[oklch(0.65_0.15_200/0.05)]",
    accent: "bg-[oklch(0.65_0.15_200)]",
    ssrnId: null,
    ssrnUrl: null,
    jelCodes: ["G23", "G28", "L86", "O33", "D85"],
  },
  {
    part: 4,
    slug: "sotilitarian-capitalism-part-4-implementation-strategy-trojan-horse-effect",
    title: "Implementation Strategy — The Trojan Horse Effect",
    fullTitle: "Sotilitarian Capitalism, Part IV: Implementation Strategy — The Trojan Horse Effect",
    excerpt:
      "The traditional economic system is not merely flawed; it is fundamentally designed to perpetuate inequality and extract value from communities. Sotilitarianism leverages blockchain to build a new economic order rooted in verified utility and radical transparency — from within existing institutions.",
    category: "Strategy",
    color: "text-crimson",
    border: "border-crimson/30",
    bg: "bg-crimson/5",
    accent: "bg-crimson",
    ssrnId: null,
    ssrnUrl: null,
    jelCodes: ["O35", "O13", "Q42", "D91", "R11"],
  },
  {
    part: 5,
    slug: "sotilitarian-capitalism-part-v-future-of-economics-beyond-binary-debate",
    title: "The Future of Economics — Beyond the Binary Debate",
    fullTitle: "Sotilitarian Capitalism, Part V: The Future of Economics — Beyond the Binary Debate",
    excerpt:
      "The neoliberal consensus is not just crumbling — it's actively failing humanity, demanding an urgent and radical economic paradigm shift. Sotilitarianism emerges as the definitive third path, transcending the exhausted debates of capitalism and socialism by leveraging blockchain and AI for verified utility.",
    category: "Philosophy",
    color: "text-gold",
    border: "border-gold/30",
    bg: "bg-gold/5",
    accent: "bg-gold",
    ssrnId: null,
    ssrnUrl: null,
    jelCodes: ["P10", "P16", "B50", "D63", "O43"],
  },
];

const META_PAPER = {
  title: "Sotilitarian Capitalism: A Series Overview",
  subtitle: "Blockchain-Native Governance and the Architecture of Transparent Markets",
  ssrnId: null,
  ssrnUrl: null,
  desc: "A comprehensive meta-paper synthesizing the full five-part series — mapping the intellectual lineage, cross-referencing the technical architecture, and providing a reading guide for researchers, policymakers, and practitioners.",
};

const THEMES = [
  { label: "Verified Utility", desc: "Economic value tied to measurable social contribution, not speculation." },
  { label: "Radical Transparency", desc: "Every transaction, vote, and decision recorded immutably on-chain." },
  { label: "Continuous Consent", desc: "Governance that evolves in real time — not once every four years." },
  { label: "Decentralized Power", desc: "No single entity controls the system. Power is distributed by design." },
  { label: "Trust Kernel Stack", desc: "Five technical layers that make transparent economics enforceable by code." },
  { label: "Post-Binary Economics", desc: "Beyond capitalism vs. socialism — a third path built for the information age." },
];

export default function SotilitarianCapitalismSeries() {
  const submittedCount = SERIES.filter(p => p.ssrnId).length;

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Sotilitarian Capitalism: The Complete 5-Part Series | The Elevation Foundation"
        description="A comprehensive five-part exploration of Sotilitarian Capitalism — the economic philosophy that transcends capitalism and socialism through verified utility, radical transparency, and decentralized governance. Working papers available on SSRN."
        canonical="/blog/series/sotilitarian-capitalism"
        keywords="Sotilitarian Capitalism, capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, trust tech, transparency tech, blockchain governance, community finance, post-capitalist economics, cooperative economics, solidarity economics, Cornelius DeFalco, Elevation Foundation, SSRN working paper"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Series hero">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(oklch(0.72 0.12 75) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.12 75) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy" />

        <div className="container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 font-mono-data text-xs text-white/40" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Series</span>
            <ChevronRight size={12} />
            <span className="text-gold">Sotilitarian Capitalism</span>
          </nav>

          <div className="max-w-3xl">
            {/* Series badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gold/30 bg-gold/5 rounded-sm mb-6">
              <BookOpen size={13} className="text-gold" />
              <span className="font-mono-data text-xs text-gold uppercase tracking-wider">5-Part Series · SSRN Working Papers</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-black leading-[1.05] mb-6">
              <span className="gold-shimmer">Sotilitarian</span>
              <br />
              <span className="text-white">Capitalism</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed mb-4 max-w-2xl">
              A five-part manifesto by <span className="text-white font-medium">Cornelius DeFalco</span> that dismantles the false binary between capitalism and socialism — and builds a third path from first principles.
            </p>
            <p className="font-body text-base text-white/55 leading-relaxed mb-10 max-w-2xl">
              Sotilitarian Capitalism is not a reform of the existing system. It is a replacement — one built on verified utility, radical transparency, continuous consent, and a five-layer technical architecture that makes economic justice enforceable by code. The complete series is published as academic working papers on SSRN and indexed by Google Scholar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/blog/${SERIES[0].slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.5)] group"
              >
                Start Reading — Part I
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {SERIES[0].ssrnUrl && (
                <a
                  href={SERIES[0].ssrnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-body font-medium rounded-sm hover:bg-gold/5 transition-all duration-200"
                >
                  <GraduationCap size={16} />
                  View on SSRN
                  <ExternalLink size={13} />
                </a>
              )}
              {!SERIES[0].ssrnUrl && (
                <Link
                  href="/philosophy"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
                >
                  The Philosophy
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACADEMIC PAPERS SECTION ──────────────────────────── */}
      <section className="py-20 bg-[oklch(0.13_0.05_265)] border-y border-gold/10" aria-label="Academic papers on SSRN">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <GraduationCap size={14} className="text-gold" />
                <span className="font-mono-data text-xs text-gold uppercase tracking-wider">Academic Research</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Working Papers on <span className="text-gold">SSRN</span>
              </h2>
              <p className="font-body text-white/55 mt-3 max-w-xl">
                The Sotilitarian Capitalism series is published as peer-discoverable working papers on the Social Science Research Network (SSRN), indexed by Google Scholar. Each part is submitted as a standalone paper for granular academic discoverability.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-gold/20 rounded-sm text-center">
                <div className="font-display text-2xl font-bold text-gold">{submittedCount}/6</div>
                <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mt-0.5">Papers Live</div>
              </div>
            </div>
          </div>

          {/* Papers grid */}
          <div className="space-y-3 mb-8">
            {SERIES.map((part) => (
              <div
                key={part.part}
                className={`flex flex-col md:flex-row md:items-center gap-4 p-5 bg-[oklch(0.16_0.05_265)] border ${part.ssrnId ? "border-gold/20" : "border-white/8"} rounded-sm`}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-[oklch(0.18_0.05_265)]">
                  <span className={`font-mono-data text-sm font-bold ${part.color}`}>{part.part}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body font-medium text-white text-sm leading-snug">{part.fullTitle}</div>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {part.jelCodes.map(code => (
                      <span key={code} className="font-mono-data text-[10px] px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-white/40">{code}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {part.ssrnId ? (
                    <a
                      href={part.ssrnUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold/10 border border-gold/30 text-gold font-body text-xs font-medium rounded-sm hover:bg-gold/20 transition-colors"
                    >
                      <FileText size={12} />
                      SSRN #{part.ssrnId}
                      <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/3 border border-white/10 text-white/30 font-body text-xs rounded-sm">
                      Under Review
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Meta-paper row */}
            <div className={`flex flex-col md:flex-row md:items-center gap-4 p-5 bg-[oklch(0.16_0.05_265)] border ${META_PAPER.ssrnId ? "border-gold/20" : "border-white/8"} rounded-sm`}>
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-[oklch(0.18_0.05_265)]">
                <BookOpen size={14} className="text-gold/60" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-body font-medium text-white text-sm leading-snug">{META_PAPER.title}: {META_PAPER.subtitle}</div>
                <div className="font-body text-xs text-white/40 mt-1">Series overview · All five parts synthesized · Reading guide for researchers</div>
              </div>
              <div className="flex-shrink-0">
                {META_PAPER.ssrnId ? (
                  <a
                    href={META_PAPER.ssrnUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold/10 border border-gold/30 text-gold font-body text-xs font-medium rounded-sm hover:bg-gold/20 transition-colors"
                  >
                    <FileText size={12} />
                    SSRN #{META_PAPER.ssrnId}
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/3 border border-white/10 text-white/30 font-body text-xs rounded-sm">
                    Under Review
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="font-body text-xs text-white/30 text-center">
            All papers authored by Cornelius DeFalco, The Elevation Foundation (EIN 92-1042348). Submitted to SSRN eLibrary — indexed by Google Scholar upon approval.
          </p>
        </div>
      </section>

      {/* ─── SERIES MAP ───────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]" aria-label="Series parts">
        <div className="container">
          <div className="mb-12">
            <div className="section-label mb-3">The Five Parts</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Read in Order. <span className="text-gold">Or Start Anywhere.</span>
            </h2>
            <p className="font-body text-white/55 mt-3 max-w-xl">
              Each part stands alone, but the full arc builds a complete economic philosophy from diagnosis to blueprint to implementation.
            </p>
          </div>

          <div className="space-y-4">
            {SERIES.map((part) => (
              <Link
                key={part.slug}
                href={`/blog/${part.slug}`}
                className={`group flex items-start gap-6 p-6 md:p-8 bg-[oklch(0.16_0.05_265)] border ${part.border} rounded-sm hover:shadow-[0_8px_32px_oklch(0.05_0.05_265/0.5)] hover:-translate-y-0.5 transition-all duration-200`}
              >
                {/* Part number */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm bg-[oklch(0.18_0.05_265)]">
                  <span className={`font-mono-data text-lg font-bold ${part.color}`}>{part.part}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className={`section-label ${part.color} mb-2`}>{part.category}</div>
                  <h3 className={`font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:${part.color} transition-colors`}>
                    {part.title}
                  </h3>
                  <p className="font-body text-sm text-white/55 leading-relaxed line-clamp-2">
                    {part.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 hidden md:flex items-center">
                  <ArrowRight size={18} className={`text-white/20 group-hover:${part.color} group-hover:translate-x-1 transition-all`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE THEMES ──────────────────────────────────────── */}
      <section className="py-20 bg-navy" aria-label="Core themes">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="section-label mb-3">Core Themes</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Six Ideas That <span className="text-gold">Change Everything</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {THEMES.map(({ label, desc }) => (
              <div
                key={label}
                className="p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm hover:border-gold/20 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold mb-4" />
                <h3 className="font-display text-base font-bold text-gold mb-2">{label}</h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE AUTHOR ─────────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)] border-t border-white/10" aria-label="About the author">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-4">About the Author</div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Cornelius DeFalco</h2>
            <p className="font-body text-white/60 leading-relaxed mb-6">
              Cornelius DeFalco is the founder of The Elevation Foundation, a 501(c)(3) nonprofit building transparent, community-governed financial systems using blockchain technology. His work on Sotilitarianism — a synthesis of social utility, utilitarian ethics, and decentralized governance — represents a decade of research into post-capitalist economic frameworks. The Sotilitarian Capitalism series is published as working papers on SSRN and indexed by Google Scholar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/about/founder"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 font-body text-sm rounded-sm hover:border-gold/40 hover:text-gold transition-all"
              >
                About the Founder
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/sotilitarianism"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/30 text-gold font-body text-sm rounded-sm hover:bg-gold/5 transition-all"
              >
                Explore Sotilitarianism
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-navy" aria-label="Call to action">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Begin?
            </h2>
            <p className="font-body text-white/55 mb-8">
              Start with Part I and follow the arc from economic diagnosis to technical blueprint to implementation strategy. Or access the academic working papers directly on SSRN.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/blog/${SERIES[0].slug}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.5)] group"
              >
                Start with Part I
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {SERIES[0].ssrnUrl && (
                <a
                  href="https://ssrn.com/author=11379928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold font-body font-medium rounded-sm hover:bg-gold/5 transition-all duration-200"
                >
                  <GraduationCap size={16} />
                  All Papers on SSRN
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
