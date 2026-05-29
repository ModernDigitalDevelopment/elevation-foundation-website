/*
 * ELEVATION RISING — Our Work Page
 * Projects: Transparently DApp, WeSolar, Elevation Engine, Purus, Brosnan Contracting
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Github, ExternalLink, Zap, Coins, BookOpen } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-bg-dHdJJ35AQ4VkFJvPmeZBLw.png";

const projects = [
  {
    id: "transparently",
    status: "In Development",
    statusColor: "text-gold bg-gold/10 border-gold/30",
    label: "Governance DApp",
    labelColor: "text-gold",
    title: "Transparently",
    subtitle: "On-Chain Governance & Transparency Scoring for Organizations",
    desc: "Transparently is a decentralized application that brings radical transparency to organizational governance. Organizations register, submit financial disclosures, and earn Transparency Scores. Every proposal, every vote, every treasury disbursement is recorded on the blockchain — permanently, publicly, and without the possibility of alteration.",
    longDesc: "Traditional nonprofits and organizations operate with minimal financial transparency. Boards make decisions behind closed doors. Funds are allocated without community input. Audits happen annually, if at all. Transparently changes this by making governance the default mode of operation. Organizations earn Transparency Scores based on verified disclosures. Community members earn SUG tokens for participation. The SoGoodDAOFactory deploys governance contracts for any organization that wants to govern itself on-chain.",
    features: [
      "Organization registration and Transparency Score system",
      "On-chain proposal creation, voting, and execution",
      "Real-time treasury tracking via SotilityTreasuryRouter",
      "Steward election and accountability smart contracts",
      "Community members earn SUG tokens for verified participation",
      "SoGoodDAOFactory: deploy governance for any organization",
      "IPFS-backed document storage for all disclosures",
      "Multi-sig treasury management with on-chain audit trail",
    ],
    tech: ["Solidity", "React", "Ethereum", "IPFS", "The Graph", "SoGoodDAOFactory"],
    github: "https://github.com/ModernDigitalDevelopment/transparently",
    borderColor: "border-gold/30",
    accentColor: "text-gold",
  },
  {
    id: "wesolar",
    status: "Development Phase",
    statusColor: "text-teal bg-teal/10 border-teal/30",
    label: "Renewable Energy",
    labelColor: "text-teal",
    title: "WeSolar",
    subtitle: "Decentralized Peer-to-Peer Solar Financing on IOTA Tangle",
    desc: "WeSolar is a decentralized peer-to-peer solar financing platform built on the IOTA Tangle. Residents co-own solar infrastructure through fractional NFT ownership, earn WeSolarCredits for energy generation, and vote on expansion — all governed by smart contracts. Putting the We in Web3 Energy.",
    longDesc: "Energy poverty is a systemic issue in low-income communities. Utility companies charge the highest rates to those who can least afford them, while solar energy remains inaccessible due to high upfront costs. WeSolar solves this through the WeSolarCrowdfund contract (fractional ownership), WeSolarToken (energy credit trading), and WeSolarGovernance (community voting on expansion). The IOTA Tangle provides feeless microtransactions for energy credit settlement, making sub-cent transactions economically viable.",
    features: [
      "WeSolarCrowdfund: fractional NFT ownership of solar panels",
      "WeSolarToken (WST): earn credits for energy generated",
      "WeSolarGovernance: community votes on expansion decisions",
      "WeSolarMarketplace: peer-to-peer energy credit trading",
      "IOTA Tangle integration for feeless microtransactions",
      "IoT sensor integration for real-time energy monitoring",
      "Carbon credit generation and transparent distribution",
      "Rent-to-own pathway for low-income households",
    ],
    tech: ["Solidity", "IOTA Tangle", "React", "IoT Integration", "Chainlink", "IPFS"],
    github: "https://github.com/ModernDigitalDevelopment/wesolar",
    borderColor: "border-teal/30",
    accentColor: "text-teal",
  },
  {
    id: "elevation-engine",
    status: "Beta Testing",
    statusColor: "text-crimson bg-crimson/10 border-crimson/30",
    label: "DeFi Protocol",
    labelColor: "text-crimson",
    title: "Elevation Engine",
    subtitle: "AI-Managed Autonomous DeFi Yield for the Community Treasury",
    desc: "The Elevation Engine is an autonomous DeFi protocol that generates yield through AI-managed flash loans, arbitrage strategies, and liquidity provision across multiple protocols. All profits flow through the SotilityTreasuryRouter directly to the community — no management fees, no intermediaries, no opacity.",
    longDesc: "Traditional nonprofits depend entirely on donor generosity. The Elevation Engine changes this equation by creating a self-sustaining revenue stream that operates 24/7 without human intervention. Python-based AI agents scan for arbitrage opportunities across DEXs, execute flash loans via Aave and Uniswap, and deposit profits into the SotilityTreasuryRouter which distributes them: 40% to SOT dividend holders, 40% to SST reserves, 20% to SUG community campaigns.",
    features: [
      "AI-managed flash loan arbitrage across Aave, Uniswap, Compound",
      "Automated liquidity provision optimization across DEXs",
      "SotilityTreasuryRouter: autonomous profit distribution (40/40/20)",
      "Multi-chain yield farming strategies (Ethereum, Polygon, Arbitrum)",
      "Real-time performance dashboard with on-chain verification",
      "Risk management circuit breakers and position limits",
      "Transparent strategy performance tracking via The Graph",
      "Zero management fees — all yield flows to community",
    ],
    tech: ["Python", "Solidity", "Web3.py", "Aave", "Uniswap", "Compound", "The Graph"],
    github: "https://github.com/ModernDigitalDevelopment/elevation-foundation",
    borderColor: "border-crimson/30",
    accentColor: "text-crimson",
  },
  {
    id: "sogood",
    status: "In Development",
    statusColor: "text-white/60 bg-white/5 border-white/20",
    label: "Social Platform",
    labelColor: "text-white/70",
    title: "SoGood Platform",
    subtitle: "Earn Tokens for Verified Social Good Contributions",
    desc: "SoGood is the social layer of the Elevation ecosystem — a platform where verified community contributions earn SUG tokens. Volunteer hours, community organizing, mentorship, and civic participation are tracked, verified, and rewarded with real economic value. Social action becomes economic yield.",
    longDesc: "SoGood bridges the gap between social impact and economic reward. The SoGoodDAOFactory allows any community organization to deploy its own governance structure on-chain. Contributions are verified through a community attestation system, preventing gaming while rewarding genuine participation. SUG tokens earned on SoGood carry governance weight in the broader Elevation ecosystem — making social capital into real capital.",
    features: [
      "Verified contribution tracking (volunteer hours, civic action, mentorship)",
      "SUG token rewards for verified social good activities",
      "SoGoodDAOFactory: deploy governance for any community org",
      "Community attestation system for contribution verification",
      "Social capital to economic capital conversion",
      "Integration with Transparently for organizational governance",
      "Time-locked SUG rewards to incentivize long-term participation",
      "Community tipping and peer recognition system",
    ],
    tech: ["React", "Solidity", "IPFS", "The Graph", "SoGoodDAOFactory"],
    github: "https://github.com/ModernDigitalDevelopment/elevation-foundation",
    borderColor: "border-white/20",
    accentColor: "text-white/70",
  },
];

export default function OurWork() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Our Work | Transparently, WeSolar, Elevation Engine | The Elevation Foundation"
        description="The Elevation Foundation builds Transparently (on-chain governance DApp), WeSolar (decentralized community solar), and the Elevation Engine (AI-managed DeFi yield). Tools for the next economy."
        canonical="/our-work"
        keywords="Transparently DApp, WeSolar, Elevation Engine, SoGood platform, capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, trust tech, transparency tech, blockchain projects, community solar, DeFi yield, on-chain governance, transparent capitalism, community-owned finance"
      />
      <Navigation />

      {/* --- HERO ----------------------------------------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-4">Our Work</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Tools for the
              <br />
              <span className="gold-shimmer">Next Economy</span>
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              We do not build products. We build infrastructure — the foundational systems that communities need to govern themselves, own their energy, and access financial tools that have always been out of reach.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROJECTS ------------------------------------------- */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className={`grid md:grid-cols-5 gap-10 items-start border-t ${project.borderColor} pt-10`}
              >
                {/* Left: header + description */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-mono-data text-xs px-3 py-1 rounded-sm border ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <div className={`section-label ${project.labelColor}`}>{project.label}</div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="font-body text-white/50 text-sm mb-5">{project.subtitle}</p>
                  <p className="font-body text-white/70 leading-relaxed mb-4">{project.desc}</p>
                  <p className="font-body text-white/55 text-sm leading-relaxed mb-6">{project.longDesc}</p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${project.accentColor} font-body text-sm font-medium hover:opacity-80 transition-opacity`}
                    >
                      <Github size={14} /> View on GitHub
                    </a>
                    {project.id === "transparently" && (
                      <a
                        href="https://github.com/ModernDigitalDevelopment/transparently/tree/main/packages/contracts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={14} /> Explore 20 Contracts
                      </a>
                    )}
                    {project.id === "wesolar" && (
                      <a
                        href="/wesolar"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-teal font-body text-sm font-medium transition-colors"
                      >
                        <ArrowRight size={14} /> Join Waitlist
                      </a>
                    )}
                    {project.id === "elevation-engine" && (
                      <Link
                        href="/token-economy"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm font-medium transition-colors"
                      >
                        <Coins size={14} /> Token Economy →
                      </Link>
                    )}
                    {project.id === "sogood" && (
                      <Link
                        href="/capitalism-2-0"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm font-medium transition-colors"
                      >
                        <BookOpen size={14} /> Capitalism 2.0 →
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right: features + tech */}
                <div className="md:col-span-2 space-y-5">
                  {/* Features list */}
                  <div className={`bg-[oklch(0.14_0.05_265)] border ${project.borderColor} rounded-sm p-5`}>
                    <div className="font-mono-data text-[10px] uppercase tracking-widest text-white/30 mb-4">Key Features</div>
                    <div className="space-y-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <div className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${project.accentColor}`}
                            style={{ background: "currentColor" }} />
                          <span className="font-body text-xs text-white/60 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="bg-[oklch(0.14_0.05_265)] border border-white/8 rounded-sm p-5">
                    <div className="font-mono-data text-[10px] uppercase tracking-widest text-white/30 mb-3">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="font-mono-data text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm text-white/55">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ECOSYSTEM CROSS-LINKS -------------------------------- */}
      <section className="py-10 bg-[oklch(0.13_0.05_265)] border-y border-gold/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-mono-data text-xs text-gold/60 uppercase tracking-widest mb-1">Understand the System</div>
              <p className="font-body text-white/70 text-sm">
                These projects are the <em className="text-white">infrastructure layer</em> of a broader economic philosophy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/token-economy"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-gold/30 bg-gold/5 text-gold font-body text-sm font-medium rounded-sm hover:bg-gold/10 transition-all"
              >
                <Coins size={13} />
                Token Economy (SOT / SUG / SST)
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/capitalism-2-0"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white/60 font-body text-sm font-medium rounded-sm hover:border-gold/30 hover:text-gold transition-all"
              >
                <BookOpen size={13} />
                Capitalism 2.0 — The Philosophy
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/sotilitarianism"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white/60 font-body text-sm font-medium rounded-sm hover:border-gold/30 hover:text-gold transition-all"
              >
                Sotilitarianism
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- $TRNS HACKATHON FEATURE ---------------------------- */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-[oklch(0.16_0.05_265)] p-8 md:p-12">
            {/* Gold glow background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono-data text-xs px-3 py-1 rounded-sm border text-gold bg-gold/10 border-gold/30 uppercase tracking-wider">
                    Live on Solana
                  </span>
                  <span className="font-mono-data text-xs px-3 py-1 rounded-sm border text-teal bg-teal/10 border-teal/30 uppercase tracking-wider">
                    EasyA Kickstart
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  $TRNS —{" "}
                  <span className="gold-shimmer">Transparently Token</span>
                </h2>
                <p className="font-body text-white/70 leading-relaxed mb-4">
                  The Transparently token ($TRNS) is now live on Solana as part of the{" "}
                  <strong className="text-white">EasyA Kickstart Hackathon</strong>. $TRNS is the
                  governance and utility token for the Transparently DApp — enabling on-chain
                  voting, transparency scoring, and community-driven accountability for
                  organizations worldwide.
                </p>
                <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                  Launched April 29, 2026. Mint address:{" "}
                  <code className="font-mono-data text-gold/80 text-xs break-all">
                    EotDwLsi6j4NbWDGyvM95NMpyDM5K7vjYqVa67ijMXCx
                  </code>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://kickstart.easya.io/token/EotDwLsi6j4NbWDGyvM95NMpyDM5K7vjYqVa67ijMXCx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.4)] group"
                  >
                    <Zap size={15} />
                    View $TRNS on EasyA Kickstart
                    <ExternalLink size={13} className="opacity-60" />
                  </a>
                  <a
                    href="https://github.com/ModernDigitalDevelopment/transparently"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
                  >
                    <Github size={15} />
                    View Source Code
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono-data text-xs text-gold/60 uppercase tracking-wider mb-3">
                  Token Details
                </div>
                {[
                  { label: "Token Symbol", value: "$TRNS", highlight: true },
                  { label: "Network", value: "Solana", highlight: false },
                  { label: "Hackathon", value: "EasyA Kickstart 2026", highlight: false },
                  { label: "Use Case", value: "Governance + Transparency Scoring", highlight: false },
                  { label: "Contracts", value: "TransparentlyCore, TRANSToken, VERIFYToken, IMPACTToken", highlight: false },
                  { label: "Status", value: "Live — Judging May 2, 2026", highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className="flex items-start justify-between gap-4 py-2 border-b border-white/10">
                    <span className="font-mono-data text-xs text-white/40 uppercase tracking-wider flex-shrink-0">{label}</span>
                    <span className={`font-body text-sm text-right ${highlight ? "text-gold font-semibold" : "text-white/70"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK ----------------------------------------- */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-4">Technology</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
            Built on Proven Infrastructure
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Ethereum", desc: "Primary smart contract platform", icon: "⟠" },
              { name: "Solidity", desc: "20+ contracts written and tested", icon: "◈" },
              { name: "React + TypeScript", desc: "Frontend applications", icon: "⚛" },
              { name: "Python", desc: "Elevation Engine automation", icon: "🐍" },
              { name: "IPFS", desc: "Decentralized file storage", icon: "◉" },
              { name: "The Graph", desc: "Blockchain data indexing", icon: "▦" },
              { name: "Chainlink", desc: "Oracle data feeds", icon: "⬡" },
              { name: "Polygon", desc: "Layer 2 scaling solution", icon: "⬟" },
            ].map(({ name, desc, icon }) => (
              <div key={name} className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm card-lift">
                <div className="text-2xl mb-3">{icon}</div>
                <div className="font-body font-semibold text-white text-sm mb-1">{name}</div>
                <div className="font-body text-xs text-white/50">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KLARITY -------------------------------------------- */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-label mb-4 text-teal">Identity Infrastructure</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Powered by{" "}
                <span className="text-teal">Klarity</span>
              </h2>
              <p className="font-body text-white/70 leading-relaxed mb-4">
                Klarity is the identity layer of the Sotility Protocol — a zero-knowledge identity system that enables verified participation without exposing personal data. Every Transparently governance vote, every WeSolar energy credit, and every SoGood contribution is anchored to a Klarity-verified identity.
              </p>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                Klarity uses zk-SNARKs to prove identity attributes (age, residency, humanity) without revealing the underlying data. The <code className="font-mono-data text-teal/80 text-xs">SotilityZKIdentity</code> and <code className="font-mono-data text-teal/80 text-xs">SotilityProofOfPersonhood</code> contracts form the backbone of Sybil resistance across the entire ecosystem — preventing double-voting, double-spending, and bot manipulation.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { label: "SotilityProfileRegistry", desc: "On-chain identity profiles with verified attributes" },
                  { label: "SotilityProofOfPersonhood", desc: "Sybil-resistant humanity verification" },
                  { label: "SotilityZKIdentity", desc: "Zero-knowledge attribute proofs" },
                  { label: "SotilityCrossChainIdentity", desc: "Identity portability across EVM chains" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 bg-teal" />
                    <div>
                      <span className="font-mono-data text-xs text-teal/80">{label}</span>
                      <span className="font-body text-xs text-white/50 ml-2">— {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/ModernDigitalDevelopment/sotilitarianism/tree/main/smart-contracts/contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-body text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <Github size={14} /> View Klarity Contracts on GitHub
              </a>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-[oklch(0.14_0.05_265)] border border-teal/30 rounded-sm">
                <div className="font-mono-data text-xs text-teal/60 uppercase tracking-wider mb-3">How It Works</div>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Identity Registration", desc: "User registers with Klarity, submitting a zero-knowledge proof of their identity attributes (age, residency, humanity)." },
                    { step: "02", title: "Proof Generation", desc: "SotilityZKIdentity generates a cryptographic proof that can be verified on-chain without revealing personal data." },
                    { step: "03", title: "Verified Participation", desc: "Every governance vote, energy credit, and contribution is anchored to a verified Klarity identity — Sybil-resistant by design." },
                    { step: "04", title: "Cross-Chain Portability", desc: "SotilityCrossChainIdentity allows the same verified identity to work across Ethereum, Polygon, Celo, and any EVM chain." },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <div className="font-mono-data text-xs text-teal/40 flex-shrink-0 mt-0.5">{step}</div>
                      <div>
                        <div className="font-body text-sm font-semibold text-white mb-1">{title}</div>
                        <div className="font-body text-xs text-white/50 leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OPEN SOURCE ---------------------------------------- */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="bg-[oklch(0.16_0.05_265)] border border-gold/20 p-10 rounded-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="section-label mb-4">Open Source</div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">
                  All Code Is Public
                </h2>
                <p className="font-body text-white/70 leading-relaxed mb-6">
                  Every line of code we write is published under open-source licenses on GitHub. We believe that if your code is not public, your governance is not transparent. Fork it, audit it, improve it — that is the point.
                </p>
                <a
                  href="https://github.com/ModernDigitalDevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
                >
                  <Github size={16} />
                  View GitHub Organization
                  <ExternalLink size={14} className="opacity-60" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "elevation-foundation", desc: "501(c)(3) nonprofit · governance · research" },
                  { name: "transparently", desc: "On-chain governance DApp" },
                  { name: "wesolar", desc: "P2P solar energy platform" },
                  { name: "sotilitarianism", desc: "Philosophy · book · manifestos" },
                ].map(({ name, desc }) => (
                  <a
                    key={name}
                    href={`https://github.com/ModernDigitalDevelopment/${name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[oklch(0.12_0.05_265)] border border-white/10 rounded-sm hover:border-gold/30 transition-colors group"
                  >
                    <div className="font-mono-data text-xs text-gold/70 group-hover:text-gold transition-colors mb-1">{name}</div>
                    <div className="font-body text-xs text-white/40">{desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA ------------------------------------------------ */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)] border-t border-white/10">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Contribute?
          </h2>
          <p className="font-body text-white/65 text-lg max-w-xl mx-auto mb-8">
            We welcome developers, designers, researchers, and community organizers. Every contribution earns SOT governance tokens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              Get Involved
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/token-economy"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gold/30 text-gold font-body font-medium rounded-sm hover:bg-gold/5 transition-all duration-200"
            >
              <Coins size={15} /> Token Economy
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
