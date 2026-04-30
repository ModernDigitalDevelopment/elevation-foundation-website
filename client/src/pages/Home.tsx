/*
 * ELEVATION RISING — Home Page
 * Fully populated with real content from Elevation Foundation documents
 * SEO: title, description, Open Graph via Helmet
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import NewsletterForm from "@/components/NewsletterForm";
import { ArrowRight, Shield, Zap, Globe, ChevronDown, Sun, Vote, TrendingUp, Github, ExternalLink } from "lucide-react";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663269003011/GZvjNIQjEGBIFXsV.png";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-bg-RdFx47xnXRjkf2fcLDsprJ.png";
const TOKEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/token-economy-Lg7aNHvZZDFY3tPRPfZhDn.png";

const stats = [
  { value: "501(c)(3)", label: "Tax-Exempt Nonprofit" },
  { value: "20+", label: "Smart Contracts Written" },
  { value: "3", label: "Token Economy Layers" },
  { value: "∞", label: "Community Governance" },
];

const projects = [
  {
    id: "transparently",
    label: "Governance DApp",
    icon: Vote,
    title: "Transparently",
    desc: "An on-chain governance platform where every vote, every decision, and every dollar is recorded immutably on the blockchain. Organizations earn transparency scores. Communities earn rewards for participation. No more black boxes.",
    color: "text-gold",
    border: "border-gold/30",
    href: "/our-work#transparently",
    github: "https://github.com/ModernDigitalDevelopment/transparently",
  },
  {
    id: "wesolar",
    label: "Renewable Energy",
    icon: Sun,
    title: "WeSolar",
    desc: "A decentralized peer-to-peer solar financing platform. Residents co-own solar infrastructure, earn tokenized energy credits, and vote on expansion — all governed by smart contracts on the IOTA Tangle. Putting the We in Web3 Energy.",
    color: "text-teal",
    border: "border-teal/30",
    href: "/our-work#wesolar",
    github: "https://github.com/ModernDigitalDevelopment/wesolar",
  },
  {
    id: "elevation-engine",
    label: "DeFi Protocol",
    icon: TrendingUp,
    title: "Elevation Engine",
    desc: "An autonomous DeFi protocol generating yield through AI-managed flash loans and arbitrage strategies. Profits flow directly back to the community treasury via the SotilityTreasuryRouter — no middlemen, no opacity.",
    color: "text-crimson",
    border: "border-crimson/30",
    href: "/our-work#elevation-engine",
    github: "https://github.com/ModernDigitalDevelopment/elevation-foundation",
  },
];

const tokens = [
  {
    symbol: "SOT",
    name: "SotilityOwnershipToken",
    desc: "Equity stake in the ecosystem. Dividend-eligible from protocol revenue. Vote on proposals, elect stewards, and shape the Foundation's direction. 1 billion total supply.",
    color: "text-gold",
    bg: "bg-gold/10 border-gold/30",
  },
  {
    symbol: "SUG",
    name: "SoGoodUtilityGovernance",
    desc: "Earned through verified contributions on the SoGood social platform. Used for proposal weighting, content curation, and community tipping. Time-locked to reward long-term participation.",
    color: "text-teal",
    bg: "bg-teal/10 border-teal/30",
  },
  {
    symbol: "SST",
    name: "SotilityStableToken",
    desc: "USD-pegged stablecoin minted 1:1 against verified business revenue. Every mint is backed by an IPFS receipt audit trail. Stability without traditional collateral.",
    color: "text-white/80",
    bg: "bg-white/5 border-white/20",
  },
];

const principles = [
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "Every financial transaction, governance vote, and operational decision is recorded on-chain and publicly verifiable. Transparency is not a feature — it is the foundation.",
    color: "text-gold",
  },
  {
    icon: Globe,
    title: "Community Sovereignty",
    desc: "Token holders govern the Foundation. No single person, board, or entity controls the direction. Power is distributed by design through the SoGoodDAOFactory governance framework.",
    color: "text-teal",
  },
  {
    icon: Zap,
    title: "Autonomous Finance",
    desc: "Smart contracts execute without human intermediaries. The Elevation Engine generates yield autonomously 24/7, funding the mission through AI-managed DeFi strategies.",
    color: "text-crimson",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="The Elevation Foundation | Capitalism 2.0 · Transparent Economics · Blockchain Governance"
        description="The Elevation Foundation is a 501(c)(3) nonprofit pioneering Capitalism 2.0 — transparent economics, social capitalism, and utilitarian capitalism powered by blockchain. Sotilitarianism: where social action generates economic yield. Transparently DApp, WeSolar, and the Elevation Engine."
        canonical="/"
        keywords="Elevation Foundation, Sotilitarianism, capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, trust tech, transparency tech, blockchain governance, community finance, transparent capitalism, participatory economics, Transparently DApp, WeSolar, Elevation Engine, DAO, DeFi, nonprofit blockchain, SOT token, post-capitalist economics, cooperative economics, solidarity economics"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          role="img"
          aria-label="Abstract sacred geometry representing the Elevation Foundation's vision"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.05_265/0.92)] via-[oklch(0.10_0.05_265/0.70)] to-[oklch(0.10_0.05_265/0.30)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.12_0.05_265)] to-transparent" />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-6 animate-fade-up">
              501(c)(3) Nonprofit · Blockchain Governance · Community Finance
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6 animate-fade-up-delay-1">
              <span className="gold-shimmer">Transparency</span>
              <br />
              <span className="text-white">Is Not Given.</span>
              <br />
              <span className="text-white/70 italic">It Is Built.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/75 leading-relaxed mb-10 mx-auto max-w-2xl animate-fade-up-delay-2">
              The Elevation Foundation builds transparent, community-governed financial systems using blockchain technology — putting economic power where it belongs: in the hands of the people. Profit for the People.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.5)] group"
              >
                See Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
              >
                The Philosophy
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
          <ChevronDown size={20} className="text-gold/60" />
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-[oklch(0.16_0.05_265)] border-y border-white/10 py-8" aria-label="Foundation stats">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="font-mono-data text-xs tracking-wider text-white/50 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ────────────────────────────────── */}
      <section className="py-24 bg-navy" aria-labelledby="mission-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Our Mission</div>
              <h2 id="mission-heading" className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                The System Was Not Built For Us.
                <br />
                <span className="text-gold italic">So We Are Building Our Own.</span>
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                For generations, communities have been excluded from the financial systems that govern their lives. Banks deny loans. Governments lack accountability. Nonprofits operate in opacity. The Elevation Foundation exists to dismantle these barriers — not through protest, but through code.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                We build open-source blockchain infrastructure grounded in <strong className="text-white">Sotilitarianism</strong> — a new economic philosophy that redirects capitalist incentives toward verified social good. Where merit equals profit. Where utility is currency. Where social action generates economic yield.
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
                Our three flagship projects — Transparently, WeSolar, and the Elevation Engine — are the living proof that transparent, autonomous, community-governed finance is not a dream. It is deployable code.
              </p>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-gold font-body font-medium hover:gap-3 transition-all duration-200 group"
              >
                Read Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <img
                  src={COMMUNITY_IMG}
                  alt="Community members collaborating around a shared governance platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[oklch(0.16_0.05_265)] border border-gold/30 p-4 rounded-sm glow-gold">
                <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Core Philosophy</div>
                <div className="font-display text-xl font-bold text-white">Sotilitarianism</div>
                <div className="font-body text-sm text-white/60 mt-1">Make blockchain invisible. Make impact inevitable.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]" aria-labelledby="projects-heading">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-label mb-3">Our Work</div>
              <h2 id="projects-heading" className="font-display text-4xl md:text-5xl font-bold text-white">
                Tools for the <span className="text-gold">Next Economy</span>
              </h2>
            </div>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 text-white/60 hover:text-gold font-body text-sm transition-colors group"
            >
              View All Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  className={`block bg-[oklch(0.16_0.05_265)] border ${project.border} p-7 rounded-sm card-lift group`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={18} className={project.color} />
                    <div className={`section-label ${project.color}`}>{project.label}</div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1 ${project.color} text-sm font-body font-medium`}>
                      Learn more <ArrowRight size={13} />
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/40 hover:text-gold text-xs font-mono-data transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} /> Source
                      </a>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TOKEN ECONOMY ────────────────────────────────────── */}
      <section className="py-24 bg-navy relative overflow-hidden" aria-labelledby="token-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={TOKEN_IMG}
                alt="Three-token economy diagram: SOT ownership token, SUG utility token, SST stablecoin"
                className="w-full rounded-sm"
              />
            </div>
            <div>
              <div className="section-label mb-4">Token Economy</div>
              <h2 id="token-heading" className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Three Tokens.
                <br />
                <span className="text-gold">One Ecosystem.</span>
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-4">
                Our three-token economy creates a self-sustaining governance and financial system rooted in Sotilitarian Economics. Protocol revenue is distributed autonomously: <strong className="text-white">40% to SOT dividends</strong>, <strong className="text-white">40% to SST reserves</strong>, and <strong className="text-white">20% to SUG community campaigns</strong>.
              </p>
              <p className="font-body text-white/70 text-base leading-relaxed mb-8">
                Each token serves a distinct purpose — together they form the backbone of transparent autonomous finance where merit equals profit and social action generates economic yield.
              </p>
              <div className="space-y-4 mb-8">
                {tokens.map((token) => (
                  <div key={token.symbol} className={`flex items-start gap-4 p-4 border rounded-sm ${token.bg}`}>
                    <div
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center font-mono-data text-xs font-bold rounded-sm"
                      style={{ background: "oklch(0.16 0.05 265)" }}
                    >
                      <span className={token.color}>{token.symbol}</span>
                    </div>
                    <div>
                      <div className={`font-body font-semibold text-sm ${token.color} mb-0.5`}>{token.name}</div>
                      <div className="font-body text-sm text-white/55">{token.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/philosophy#token-economy"
                className="inline-flex items-center gap-2 text-gold font-body font-medium hover:gap-3 transition-all duration-200 group"
              >
                Explore the Full Token Economy
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOTILITARIANISM TEASER ───────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]" aria-labelledby="sotility-heading">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label mb-4">The Philosophy</div>
            <h2 id="sotility-heading" className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Sotilitarianism: <span className="text-gold">A New Economic Operating System</span>
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Sotilitarianism is a synthesis of social utility, tokenized participation, and programmable fairness. It integrates capitalist opportunism, socialist humanism, and the idealism of collective ownership into a single coherent framework — rendered in code, enforced by smart contracts, and governed by the community.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {[
                { principle: "Merit-Based = Profit-Based", desc: "Economic rewards tied to verified social impact" },
                { principle: "Utility = Currency", desc: "Useful contributions form the basis for value" },
                { principle: "Social Action = Economic Yield", desc: "Positive actions generate financial returns" },
                { principle: "Redirected Incentives", desc: "Self-interest channeled toward collective good" },
              ].map((item) => (
                <div key={item.principle} className="bg-[oklch(0.16_0.05_265)] border border-gold/20 p-5 rounded-sm text-left">
                  <div className="font-body font-semibold text-gold text-sm mb-2">{item.principle}</div>
                  <div className="font-body text-white/55 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/40 text-gold font-body font-semibold rounded-sm hover:bg-gold/10 transition-all duration-200 group"
            >
              Read the Full Philosophy
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ───────────────────────────────────────── */}
      <section className="py-24 bg-navy" aria-labelledby="principles-heading">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Core Principles</div>
            <h2 id="principles-heading" className="font-display text-4xl font-bold text-white">
              How We <span className="text-gold">Operate</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="text-center p-8 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm card-lift">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-sm border border-current/30 mb-6 ${color}`}
                  style={{ background: "oklch(0.18 0.05 265)" }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)] relative overflow-hidden" aria-labelledby="cta-heading">
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, oklch(0.72 0.12 75) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="section-label mb-4">Join the Movement</div>
          <h2 id="cta-heading" className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Future of Finance
            <br />
            <span className="gold-shimmer">Belongs to Everyone.</span>
          </h2>
          <p className="font-body text-white/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you contribute code, capital, or community — there is a place for you in the Elevation ecosystem. The revolution will be tokenized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[oklch(0.12_0.05_265)] font-bold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_40px_oklch(0.72_0.12_75/0.5)] group"
            >
              Get Involved
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-body font-semibold rounded-sm hover:bg-gold/10 transition-all duration-200"
            >
              Support the Mission
            </Link>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────── */}
      <NewsletterForm
        source="home"
        heading="Join the Transparency Movement"
        subheading="Get updates on Capitalism 2.0, Sotilitarianism, transparent economics, and the Elevation Foundation's latest work — delivered to your inbox. No spam. Ever."
      />

      <Footer />
    </div>
  );
}
