/*
 * ELEVATION RISING — Philosophy Page
 * Sotilitarianism, three-token economy, governance model
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
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
    name: "SotilityOwnershipToken",
    color: "text-gold",
    borderColor: "border-gold/40",
    bgColor: "bg-gold/10",
    glowClass: "glow-gold",
    supply: "1,000,000,000",
    purpose: "Ownership, Governance & Dividends",
    desc: "The SOT token represents equity ownership in the Elevation ecosystem. It is dividend-eligible from protocol revenue — 40% of all Elevation Engine yield flows to SOT holders. Holders vote on proposals, elect stewards, allocate treasury funds, and shape the Foundation's strategic direction. SOT is the ownership layer of Sotilitarian Economics.",
    mechanics: [
      "Dividend-eligible: 40% of protocol revenue distributed to holders",
      "1 SOT = 1 vote on governance proposals via SotilityGovernance contract",
      "Staking SOT earns additional yield from Elevation Engine strategies",
      "Vesting schedules prevent concentration of power",
      "Minted against verified business revenue with IPFS audit trail",
    ],
  },
  {
    symbol: "SUG",
    name: "SoGoodUtilityGovernance Token",
    color: "text-teal",
    borderColor: "border-teal/40",
    bgColor: "bg-teal/10",
    glowClass: "glow-teal",
    supply: "Earned, Not Purchased",
    purpose: "Social Utility & Community Participation",
    desc: "The SUG token is earned through verified contributions on the SoGood social platform — not purchased. It powers community governance, content curation, and proposal weighting. SUG is time-locked to reward long-term participation over speculation. This is the utility layer: social action generates economic yield.",
    mechanics: [
      "Earned through verified social contributions on SoGood platform",
      "Time-locked tokens reward long-term community participation",
      "Used for proposal weighting, content curation, and community tipping",
      "20% of protocol revenue allocated to SUG community campaigns",
      "Cannot be purchased — must be earned through genuine contribution",
    ],
  },
  {
    symbol: "SST",
    name: "SotilityStableToken",
    color: "text-white/80",
    borderColor: "border-white/30",
    bgColor: "bg-white/5",
    glowClass: "",
    supply: "Minted 1:1 Against Revenue",
    purpose: "Stability, Treasury & Cross-Border Payments",
    desc: "The SST token is a USD-pegged stablecoin minted 1:1 against verified business revenue. Every mint is backed by an IPFS receipt audit trail — not algorithmic speculation. SST provides stability for treasury reserves, grant disbursements, and cross-border payments. 40% of protocol revenue flows to SST reserves.",
    mechanics: [
      "1:1 USD peg backed by verified business revenue (not algorithmic)",
      "Every mint backed by IPFS receipt audit trail for full transparency",
      "40% of protocol revenue allocated to SST reserve maintenance",
      "Used for treasury reserves, grant disbursements, and payroll",
      "Enables cross-border payments without traditional bank intermediaries",
    ],
  },
];

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Sotilitarianism Philosophy | The Elevation Foundation"
        description="Sotilitarianism is a governance philosophy that synthesizes social utility, tokenized participation, and programmable fairness. Where social action generates economic yield. The intellectual foundation of the Elevation Foundation."
        canonical="/philosophy"
        keywords="Sotilitarianism, sotilitarian capitalism, capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, trust tech, transparency tech, blockchain governance philosophy, post-capitalist economics, participatory economics, cooperative economics, solidarity economics, SOT token, SUG utility token, SST stablecoin, social utility, community governance, DeFi philosophy, economic transparency, social good finance, impact investing"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${PHILOSOPHY_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-4">The Philosophy</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Sotilitarianism
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
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
                Sotilitarianism is a new economic operating system — a synthesis of social utility, tokenized participation, and programmable fairness. It integrates capitalist opportunism, socialist humanism, and the idealism of collective ownership into a single coherent framework rendered in code, enforced by smart contracts, and governed by the community.
              </p>
              <p>
                The word "Sotility" derives from a synthesis of "sovereignty" and "utility" — the idea that true sovereignty is only meaningful when it is useful to the people who hold it. Abstract rights without practical tools are not rights at all. Sotilitarianism asks: what if we designed economic systems where <strong className="text-white">profit naturally flows toward verified social good?</strong>
              </p>
              <p>
                Drawing from Jeremy Bentham's utilitarianism (greatest good for the greatest number), Elinor Ostrom's commons governance (communities can self-govern shared resources), and Leonid Hurwicz's mechanism design theory (systems can be architected to align individual incentives with collective outcomes), Sotilitarianism synthesizes these insights into a blockchain-native governance framework.
              </p>
              <p>
                The philosophy also draws from the African communal governance model of Ubuntu ("I am because we are"), the cypherpunk tradition of cryptographic privacy and financial sovereignty, and the cooperative economics movement pioneered by W.E.B. Du Bois and the Black cooperative movement of the early 20th century.
              </p>
              <p>
                Sotilitarianism is not an ideology of protest. It is an ideology of construction. We do not ask the existing system to reform itself. We build a parallel system — one that is transparent by default, governed by those it serves, and financially autonomous through smart contract automation. <strong className="text-white">Make blockchain invisible. Make impact inevitable.</strong>
              </p>
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                {[
                  { label: "Merit-Based = Profit-Based", desc: "Economic rewards are tied to verified social impact, not speculation" },
                  { label: "Utility = Currency", desc: "Useful contributions form the basis for economic value in the ecosystem" },
                  { label: "Social Action = Economic Yield", desc: "Positive community actions generate measurable financial returns" },
                  { label: "Redirected Incentives", desc: "Self-interest is channeled toward collective good through mechanism design" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.16_0.05_265)] border border-gold/20 p-5 rounded-sm">
                    <div className="font-body font-semibold text-gold text-sm mb-2">{item.label}</div>
                    <div className="font-body text-white/55 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
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

      {/* ─── READ THE FULL WORK ─────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.12_0.05_265)] border-t border-white/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-label mb-4">Open Source</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Read the Complete Work
            </h2>
            <p className="font-body text-white/65 text-lg max-w-2xl mx-auto mb-10">
              The entire body of Sotilitarian intellectual work — the four-part book, manifestos, whitepapers, smart contracts, and economic models — is published as open source on GitHub.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { title: "The Book", desc: "4-part treatise + expanded edition (~117,000 words)", path: "book/" },
                { title: "Manifestos", desc: "5-part series, The Sotilitarian Revolt, core manifesto", path: "manifestos/" },
                { title: "Smart Contracts", desc: "15+ Solidity contracts across 5 architectural layers", path: "smart-contracts/" },
              ].map((item) => (
                <a
                  key={item.title}
                  href={`https://github.com/ModernDigitalDevelopment/sotilitarianism/tree/main/${item.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-[oklch(0.16_0.05_265)] border border-gold/20 rounded-sm card-lift text-left group"
                >
                  <h3 className="font-display text-lg font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">{item.title}</h3>
                  <p className="font-body text-sm text-white/55">{item.desc}</p>
                </a>
              ))}
            </div>
            <a
              href="https://github.com/ModernDigitalDevelopment/sotilitarianism"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.5)] group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
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
