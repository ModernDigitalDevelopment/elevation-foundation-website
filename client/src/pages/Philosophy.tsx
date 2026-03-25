/*
 * ELEVATION FOUNDATION — Philosophy Page
 * Organic Codex: parchment tones, botanical linework, Lora body, Playfair headings
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-organic-b6rVFEqfcmn9sbKJw5wwC5.webp";
const COMMUNITY_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-organic-g5WMb5bLePcW2C24P3yXDi.webp";

const principles = [
  {
    number: "01",
    title: "Transparency Is Not Optional",
    desc: "In traditional governance, transparency is a concession — something granted reluctantly when demanded. In Sotilitarianism, transparency is the foundation. Every decision, every transaction, every vote is recorded on an immutable public ledger. There is no version of legitimate governance that operates in the dark.",
  },
  {
    number: "02",
    title: "Community Sovereignty",
    desc: "The people most affected by a system must govern it. Not through representation — through direct participation. Token holders vote on proposals, elect stewards, and control the treasury. Power is not delegated upward; it is distributed outward.",
  },
  {
    number: "03",
    title: "Autonomous Finance",
    desc: "Human intermediaries are the primary vector for corruption, inefficiency, and exclusion. Smart contracts execute without bias, without bribery, and without borders. The Elevation Engine generates yield autonomously — funding the mission without depending on the goodwill of donors.",
  },
  {
    number: "04",
    title: "Equity by Architecture",
    desc: "Equity cannot be retrofitted into systems built for exclusion. It must be designed in from the beginning. Every protocol, every contract, every governance mechanism in the Elevation ecosystem is built with equity as a first principle — not an afterthought.",
  },
  {
    number: "05",
    title: "Open Source as Obligation",
    desc: "If your code is not public, your governance is not transparent. The Elevation Foundation publishes all smart contracts, all protocols, and all tooling under open-source licenses. We build in the open because we have nothing to hide — and because the community deserves to audit what governs them.",
  },
];

const tokens = [
  {
    symbol: "SOT",
    name: "Sotility Governance Token",
    colorClass: "text-forest",
    borderClass: "border-forest/30",
    bgClass: "bg-forest/5",
    supply: "100,000,000",
    purpose: "Governance & Voting",
    desc: "The SOT token represents ownership and governance rights in the Elevation ecosystem. Holders vote on proposals, elect stewards, allocate treasury funds, and shape the strategic direction of the Foundation.",
    mechanics: [
      "1 SOT = 1 vote on governance proposals",
      "Staking SOT earns yield from Elevation Engine",
      "Earned through contribution, not purchased through privilege",
      "Vesting schedules prevent concentration of power",
    ],
  },
  {
    symbol: "SUG",
    name: "Sotility Utility Token",
    colorClass: "text-teal",
    borderClass: "border-teal/30",
    bgClass: "bg-teal/5",
    supply: "1,000,000,000",
    purpose: "Platform Access & Rewards",
    desc: "The SUG token powers the day-to-day operations of the Elevation ecosystem. It is used to access platform features, pay for services, reward contributors, and incentivize participation.",
    mechanics: [
      "Pay for Transparently DApp governance services",
      "Earn SUG by participating in community activities",
      "SUG holders receive fee discounts across all platforms",
      "Burned on use to maintain deflationary pressure",
    ],
  },
  {
    symbol: "SST",
    name: "Sotility Stable Token",
    colorClass: "text-ink-light",
    borderClass: "border-[oklch(0.20_0.025_60/20%)]",
    bgClass: "bg-parchment-deep",
    supply: "Algorithmic",
    purpose: "Stability & Treasury",
    desc: "The SST token provides USD-pegged stability for everyday transactions, treasury reserves, and cross-border payments. It is the bridge between the crypto economy and the real-world financial needs of the communities we serve.",
    mechanics: [
      "1:1 USD peg maintained algorithmically",
      "Used for treasury reserves and grant disbursements",
      "Enables cross-border payments without bank intermediaries",
      "Backed by diversified reserve portfolio",
    ],
  },
];

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={PHILOSOPHY_IMG} alt="" className="w-full h-full object-cover object-top opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/60 via-parchment/70 to-parchment" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">The Philosophy</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-ink leading-tight mb-6">
              Sotilitarianism
            </h1>
            <p className="font-body text-lg text-ink-light leading-relaxed max-w-2xl">
              A governance philosophy for the digital age. Rooted in the belief that transparency is not a feature — it is the foundation of legitimate governance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DEFINITION ───────────────────────────────────────── */}
      <section className="py-20 bg-parchment-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-forest/40 pl-8 mb-12">
              <blockquote className="font-display text-2xl md:text-3xl italic text-ink leading-relaxed">
                "Sotilitarianism holds that any system of governance, finance, or community organization that cannot withstand full public scrutiny is, by definition, illegitimate."
              </blockquote>
              <cite className="font-mono-data text-sm text-ochre/80 mt-4 block">— Founding Principles of the Elevation Foundation</cite>
            </div>
            <div className="space-y-5 font-body text-ink-light leading-relaxed">
              <p>
                The word "Sotility" derives from a synthesis of "sovereignty" and "utility" — the idea that true sovereignty is only meaningful when it is useful to the people who hold it. Abstract rights without practical tools are not rights at all.
              </p>
              <p>
                Sotilitarianism is not an ideology of protest. It is an ideology of construction. We do not ask the existing system to reform itself. We build a parallel system — one that is transparent by default, governed by those it serves, and financially autonomous through smart contract automation.
              </p>
              <p>
                The philosophy draws on three intellectual traditions: the African communal governance model of Ubuntu ("I am because we are"), the cypherpunk tradition of cryptographic privacy and financial sovereignty, and the cooperative economics movement pioneered by W.E.B. Du Bois and the Black cooperative movement of the early 20th century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRINCIPLES ───────────────────────────────────────── */}
      <section className="py-20 bg-parchment">
        <div className="container">
          <div className="section-label mb-4">Core Principles</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-14">
            The Five Pillars of <em className="font-script text-ochre">Sotilitarianism</em>
          </h2>
          <div className="space-y-6">
            {principles.map((principle) => (
              <div key={principle.number} className="codex-card grid md:grid-cols-[80px_1fr] gap-6 p-8">
                <div className="font-mono-data text-4xl font-bold text-ochre/30">{principle.number}</div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink mb-3">{principle.title}</h3>
                  <p className="font-body text-ink-faint leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOKEN ECONOMY ────────────────────────────────────── */}
      <section id="token-economy" className="py-20 bg-parchment-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="section-label mb-4">Token Economy</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
                The Three-Token Architecture
              </h2>
              <p className="font-body text-ink-light leading-relaxed">
                Sotilitarianism is not just a philosophy — it is an economic architecture. The three-token economy creates a self-sustaining system where governance, utility, and stability reinforce each other, creating a flywheel of community empowerment.
              </p>
            </div>
            <div className="ink-border-strong p-2 bg-parchment">
              <img src={COMMUNITY_IMG} alt="Token economy visualization" className="w-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            {tokens.map((token) => (
              <div key={token.symbol} className={`p-8 border ${token.borderClass} ${token.bgClass}`}>
                <div className="grid md:grid-cols-[180px_1fr] gap-8">
                  <div className="text-center md:text-left">
                    <div className={`font-display text-5xl font-black ${token.colorClass} mb-2`}>{token.symbol}</div>
                    <div className="font-body text-sm text-ink-faint mb-1">{token.name}</div>
                    <div className="font-mono-data text-xs text-ink-faint/60 uppercase tracking-wider">{token.purpose}</div>
                    <div className="mt-4">
                      <div className="font-mono-data text-xs text-ink-faint/50 uppercase tracking-wider mb-1">Supply</div>
                      <div className="font-mono-data text-sm text-ink-light">{token.supply}</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-ink-faint leading-relaxed mb-4 text-sm">{token.desc}</p>
                    <div className="space-y-2">
                      {token.mechanics.map((m) => (
                        <div key={m} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-forest/50 flex-shrink-0 mt-1.5" />
                          <span className="font-body text-sm text-ink-faint">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-parchment">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-4">
            Philosophy in Action
          </h2>
          <p className="font-body text-parchment/70 max-w-lg mx-auto mb-8">
            See how Sotilitarianism is being implemented across our projects and initiatives.
          </p>
          <Link href="/our-work" className="inline-flex items-center gap-2 px-7 py-3.5 bg-parchment text-forest font-semibold font-body rounded-sm hover:bg-parchment-dark transition-all group">
            See Our Work <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
