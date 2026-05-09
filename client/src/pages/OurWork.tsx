/*
 * ELEVATION RISING — Our Work Page
 * Projects: Transparently DApp, WeSolar, Elevation Engine, Purus, Brosnan Contracting
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Github, ExternalLink, Zap } from "lucide-react";

const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-bg-dHdJJ35AQ4VkFJvPmeZBLw.png";
const TRANSPARENCY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/transparency-bg-dRYH2beMpwTLwnFHzDaK7x.png";

// Project logos from CDN
const TRANSPARENTLY_LOGO = "/manus-storage/transparently-logo_848c456c.png";
const TRANSPARENTLY_ICON = "/manus-storage/transparently-icon_5ddf17a1.png";
const WESOLAR_LOGO = "/manus-storage/wesolar-logo_4fa4c9b5.png";
const WESOLAR_ICON = "/manus-storage/wesolar-icon_7a078cf9.png";
const SOTILITY_LOGO = "/manus-storage/sotility-logo_19c1758e.png";
const SOTILITY_ICON = "/manus-storage/sotility-icon_94760a53.png";

const projects = [
  {
    id: "transparently",
    status: "In Development",
    statusColor: "text-gold bg-gold/10 border-gold/30",
    label: "Governance DApp",
    labelColor: "text-gold",
    title: "Transparently",
    logo: TRANSPARENTLY_LOGO,
    logoIcon: TRANSPARENTLY_ICON,
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
    image: TRANSPARENCY_IMG,
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
    logo: WESOLAR_LOGO,
    logoIcon: WESOLAR_ICON,
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
    image: PHILOSOPHY_IMG,
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
    logo: SOTILITY_LOGO,
    logoIcon: SOTILITY_ICON,
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
    image: TRANSPARENCY_IMG,
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
    logo: SOTILITY_LOGO,
    logoIcon: SOTILITY_ICON,
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
    image: PHILOSOPHY_IMG,
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
          style={{ backgroundImage: `url(${PHILOSOPHY_IMG})` }}
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
          <div className="space-y-20">
            {projects.map((project, i) => (
              <div
                key={project.id}
                id={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className={`relative rounded-sm overflow-hidden aspect-[16/10] border ${project.borderColor}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`font-mono-data text-xs px-3 py-1 rounded-sm border ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className={`section-label ${project.labelColor} mb-3`}>{project.label}</div>
                  {/* Project Logo */}
                  <div className="mb-4">
                    <img
                      src={project.logo}
                      alt={project.title + " logo"}
                      className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                    />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="font-body text-white/50 text-sm mb-4">{project.subtitle}</p>
                  <p className="font-body text-white/70 leading-relaxed mb-4">{project.desc}</p>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-6">{project.longDesc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${project.accentColor}`}
                          style={{ background: "currentColor" }} />
                        <span className="font-body text-xs text-white/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono-data text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-white/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${project.accentColor} font-body text-sm font-medium hover:opacity-80 transition-opacity`}
                    >
                      <Github size={14} /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
