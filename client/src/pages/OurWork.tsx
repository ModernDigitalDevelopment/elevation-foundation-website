/*
 * ELEVATION RISING — Our Work Page
 * Projects: Transparently DApp, WeSolar, Elevation Engine, Purus, Brosnan Contracting
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-bg-dHdJJ35AQ4VkFJvPmeZBLw.png";
const TRANSPARENCY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/transparency-bg-dRYH2beMpwTLwnFHzDaK7x.png";

const projects = [
  {
    id: "transparently",
    status: "In Development",
    statusColor: "text-gold bg-gold/10 border-gold/30",
    label: "Governance",
    labelColor: "text-gold",
    title: "Transparently DApp",
    subtitle: "On-Chain Governance for Everyone",
    desc: "Transparently is a decentralized application that brings radical transparency to organizational governance. Every proposal, every vote, every treasury disbursement is recorded on the Ethereum blockchain — permanently, publicly, and without the possibility of alteration.",
    longDesc: "Traditional nonprofits and organizations operate with minimal financial transparency. Boards make decisions behind closed doors. Funds are allocated without community input. Audits happen annually, if at all. Transparently changes this by making governance the default mode of operation — not an add-on feature.",
    features: [
      "On-chain proposal creation and voting",
      "Real-time treasury tracking and visualization",
      "Steward election and accountability system",
      "Integration with SOT governance token",
      "Public audit trail for all decisions",
      "Multi-sig treasury management",
    ],
    tech: ["Solidity", "React", "Ethereum", "IPFS", "The Graph"],
    github: "https://github.com/ModernDigitalDevelopment/transparently-dapp",
    image: TRANSPARENCY_IMG,
    borderColor: "border-gold/30",
    accentColor: "text-gold",
  },
  {
    id: "wesolar",
    status: "Planning Phase",
    statusColor: "text-teal bg-teal/10 border-teal/30",
    label: "Energy",
    labelColor: "text-teal",
    title: "WeSolar",
    subtitle: "Tokenized Community Solar Energy",
    desc: "WeSolar is a community solar cooperative powered by blockchain technology. Residents in underserved communities co-own solar infrastructure, earn energy credits as tokens, and vote on expansion — all governed by smart contracts with no utility company intermediary.",
    longDesc: "Energy poverty is a systemic issue in low-income communities. Utility companies charge the highest rates to those who can least afford them, while solar energy remains inaccessible due to high upfront costs and complex financing. WeSolar solves this through collective ownership and tokenized incentives.",
    features: [
      "Tokenized solar panel co-ownership",
      "Energy credit earning and trading",
      "Community governance of expansion decisions",
      "Transparent billing and usage tracking",
      "Integration with local utility grid",
      "Carbon credit generation and distribution",
    ],
    tech: ["Solidity", "IoT Integration", "React", "Polygon", "Chainlink"],
    github: "https://github.com/ModernDigitalDevelopment/wesolar",
    image: PHILOSOPHY_IMG,
    borderColor: "border-teal/30",
    accentColor: "text-teal",
  },
  {
    id: "elevation-engine",
    status: "Beta Testing",
    statusColor: "text-crimson bg-crimson/10 border-crimson/30",
    label: "DeFi",
    labelColor: "text-crimson",
    title: "Elevation Engine",
    subtitle: "Autonomous DeFi Yield Generation",
    desc: "The Elevation Engine is an autonomous DeFi protocol that generates yield through flash loans, arbitrage, and liquidity provision across multiple protocols. All profits flow directly to the community treasury — no management fees, no intermediaries.",
    longDesc: "Traditional nonprofits depend on the generosity of donors. The Elevation Engine changes this equation by creating a self-sustaining revenue stream that operates 24/7 without human intervention. Smart contracts identify arbitrage opportunities, execute flash loans, and deposit profits into the community treasury automatically.",
    features: [
      "Flash loan arbitrage across DEXs",
      "Automated liquidity provision optimization",
      "Multi-chain yield farming strategies",
      "Real-time profit distribution to treasury",
      "Risk management and circuit breakers",
      "Transparent strategy performance tracking",
    ],
    tech: ["Python", "Solidity", "Web3.py", "Aave", "Uniswap", "Compound"],
    github: "https://github.com/ModernDigitalDevelopment/elevation-engine",
    image: TRANSPARENCY_IMG,
    borderColor: "border-crimson/30",
    accentColor: "text-crimson",
  },
  {
    id: "purus",
    status: "Research Phase",
    statusColor: "text-white/60 bg-white/5 border-white/20",
    label: "Environment",
    labelColor: "text-white/70",
    title: "Purus Project",
    subtitle: "Environmental Justice Through Blockchain",
    desc: "The Purus Project applies the Elevation Foundation's transparency and community governance model to environmental justice — specifically clean water access, air quality monitoring, and environmental accountability in underserved communities.",
    longDesc: "Environmental racism is real and documented. Communities of color bear a disproportionate burden of pollution, contaminated water, and environmental hazards. The Purus Project creates on-chain environmental monitoring, community reporting, and accountability mechanisms that give affected communities the tools to document and fight back.",
    features: [
      "On-chain environmental data recording",
      "Community pollution reporting system",
      "Corporate accountability tracking",
      "Clean water access mapping",
      "Environmental justice grant distribution",
      "Integration with EPA and public data sources",
    ],
    tech: ["IoT Sensors", "Solidity", "React", "IPFS", "Chainlink"],
    github: "https://github.com/ModernDigitalDevelopment/elevation-foundation",
    image: PHILOSOPHY_IMG,
    borderColor: "border-white/20",
    accentColor: "text-white/70",
  },
];

export default function OurWork() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${PHILOSOPHY_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Our Work</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Tools for the
              <br />
              <span className="gold-shimmer">Next Economy</span>
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl">
              We do not build products. We build infrastructure — the foundational systems that communities need to govern themselves, own their energy, and access financial tools that have always been out of reach.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────── */}
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

      {/* ─── TECH STACK ───────────────────────────────────────── */}
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

      {/* ─── OPEN SOURCE ──────────────────────────────────────── */}
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
                  { name: "elevation-foundation", desc: "Core foundation repo" },
                  { name: "transparently-dapp", desc: "Governance application" },
                  { name: "elevation-engine", desc: "DeFi yield protocol" },
                  { name: "wesolar", desc: "Solar energy cooperative" },
                  { name: "sotilitarianism", desc: "Philosophy & white papers" },
                  { name: "elevation-intelligence", desc: "AI/ML tools" },
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

      {/* ─── CTA ──────────────────────────────────────────────── */}
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
