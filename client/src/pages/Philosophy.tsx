/*
 * ELEVATION RISING — Philosophy Page
 * Sotilitarianism, three-token economy, governance model
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-bg-dHdJJ35AQ4VkFJvPmeZBLw.png";
const TOKEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/token-economy-Lg7aNHvZZDFY3tPRPfZhDn.png";

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
    desc: "Human intermediaries are the primary vector for corruption, inefficiency, and exclusion. Smart contracts execute without bias, without bribery, and without borders. The Elevation Engine generates yield autonomously — funding the mission without depending on the goodwill of donors or the approval of banks.",
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
    color: "text-gold",
    borderColor: "border-gold/40",
    bgColor: "bg-gold/10",
    glowClass: "glow-gold",
    supply: "100,000,000",
    purpose: "Governance & Voting",
    desc: "The SOT token represents ownership and governance rights in the Elevation ecosystem. Holders vote on proposals, elect stewards, allocate treasury funds, and shape the strategic direction of the Foundation. SOT is earned through contribution, not purchased through privilege.",
    mechanics: [
      "1 SOT = 1 vote on governance proposals",
      "Staking SOT earns yield from Elevation Engine",
      "Earned through code contributions, community work, and donations",
      "Vesting schedules prevent concentration of power",
    ],
  },
  {
    symbol: "SUG",
    name: "Sotility Utility Token",
    color: "text-teal",
    borderColor: "border-teal/40",
    bgColor: "bg-teal/10",
    glowClass: "glow-teal",
    supply: "1,000,000,000",
    purpose: "Platform Access & Rewards",
    desc: "The SUG token powers the day-to-day operations of the Elevation ecosystem. It is used to access platform features, pay for services, reward contributors, and incentivize participation. SUG is the fuel that keeps the engine running.",
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
    color: "text-white/80",
    borderColor: "border-white/30",
    bgColor: "bg-white/5",
    glowClass: "",
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
    <div className="min-h-screen bg-navy text-white">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${PHILOSOPHY_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">The Philosophy</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Sotilitarianism
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl">
              A governance philosophy for the digital age. Rooted in the belief that transparency is not a feature — it is the foundation of legitimate governance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DEFINITION ───────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-2 border-gold pl-8 mb-12">
              <blockquote className="font-display text-2xl md:text-3xl italic text-white/90 leading-relaxed">
                "Sotilitarianism holds that any system of governance, finance, or community organization that cannot withstand full public scrutiny is, by definition, illegitimate."
              </blockquote>
              <cite className="font-mono-data text-sm text-gold/70 mt-4 block">— Founding Principles of the Elevation Foundation</cite>
            </div>
            <div className="space-y-6 font-body text-white/70 text-lg leading-relaxed">
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
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-4">Core Principles</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-14">
            The Five Pillars of Sotilitarianism
          </h2>
          <div className="space-y-8">
            {principles.map((principle) => (
              <div key={principle.number} className="grid md:grid-cols-[80px_1fr] gap-6 p-8 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm card-lift">
                <div className="font-mono-data text-4xl font-bold text-gold/30">{principle.number}</div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="font-body text-white/65 leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOKEN ECONOMY ────────────────────────────────────── */}
      <section id="token-economy" className="py-20 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="section-label mb-4">Token Economy</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                The Three-Token Architecture
              </h2>
              <p className="font-body text-white/70 text-lg leading-relaxed">
                Sotilitarianism is not just a philosophy — it is an economic architecture. The three-token economy creates a self-sustaining system where governance, utility, and stability reinforce each other, creating a flywheel of community empowerment.
              </p>
            </div>
            <div>
              <img
                src={TOKEN_IMG}
                alt="SOT, SUG, and SST token visualization"
                className="w-full rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-8">
            {tokens.map((token) => (
              <div
                key={token.symbol}
                className={`p-8 border ${token.borderColor} ${token.bgColor} rounded-sm`}
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="text-center md:text-left">
                    <div className={`font-display text-5xl font-black ${token.color} mb-2`}>{token.symbol}</div>
                    <div className="font-body text-sm text-white/60 mb-1">{token.name}</div>
                    <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider">{token.purpose}</div>
                    <div className="mt-4">
                      <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mb-1">Supply</div>
                      <div className={`font-mono-data text-sm ${token.color}`}>{token.supply}</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-white/70 leading-relaxed mb-6">{token.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {token.mechanics.map((mechanic) => (
                        <div key={mechanic} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${token.color} flex-shrink-0 mt-2`}
                            style={{ background: "currentColor" }} />
                          <span className="font-body text-sm text-white/60">{mechanic}</span>
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

      {/* ─── GOVERNANCE MODEL ─────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4">Governance Model</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
              How Decisions Are Made
            </h2>
            <div className="space-y-6 font-body text-white/70 text-lg leading-relaxed mb-10">
              <p>
                The Elevation Foundation uses a hybrid governance model that combines the legal protections of a 501(c)(3) nonprofit with the participatory power of a DAO. Wyoming's DUNA (Decentralized Unincorporated Nonprofit Association) law provides the legal framework.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: "01", title: "Proposal Submission", desc: "Any SOT holder with at least 1,000 tokens can submit a governance proposal. Proposals must include a clear description, budget request, timeline, and success metrics." },
                { step: "02", title: "Community Discussion", desc: "A 7-day discussion period allows the community to debate, refine, and amend proposals before voting begins." },
                { step: "03", title: "On-Chain Vote", desc: "SOT holders vote directly on the blockchain. 1 SOT = 1 vote. A simple majority (>50%) passes most proposals; major changes require a supermajority (>67%)." },
                { step: "04", title: "Automatic Execution", desc: "Approved proposals are executed automatically by smart contracts. Treasury disbursements, protocol changes, and steward elections happen without human intermediaries." },
                { step: "05", title: "Public Audit", desc: "All decisions, votes, and executions are permanently recorded on-chain and publicly viewable on the Transparency Dashboard." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6 p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                  <div className="font-mono-data text-2xl font-bold text-gold/40 flex-shrink-0">{step}</div>
                  <div>
                    <h4 className="font-body font-semibold text-white mb-1">{title}</h4>
                    <p className="font-body text-sm text-white/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-navy border-t border-white/10">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Philosophy Without Action Is Just Words
          </h2>
          <p className="font-body text-white/65 text-lg max-w-xl mx-auto mb-8">
            See how Sotilitarianism is being put into practice through our projects and initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              See Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              View Transparency Dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
