/*
 * ELEVATION FOUNDATION — Our Work Page
 * Organic Codex: parchment tones, botanical linework, Lora body, Playfair headings
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const HERO_IMG       = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/hero-organic-eXmKi5wTJNqTyjkvgXDbgY.webp";
const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-organic-b6rVFEqfcmn9sbKJw5wwC5.webp";
const COMMUNITY_IMG  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-organic-g5WMb5bLePcW2C24P3yXDi.webp";

const projects = [
  {
    id: "transparently",
    status: "In Development",
    statusColor: "text-ochre bg-ochre/10 border-ochre/30",
    label: "Governance",
    labelColor: "text-forest",
    title: "Transparently DApp",
    subtitle: "On-Chain Governance for Everyone",
    desc: "Transparently is a decentralized application that brings radical transparency to organizational governance. Every proposal, every vote, every treasury disbursement is recorded on the Ethereum blockchain — permanently, publicly, and without the possibility of alteration.",
    longDesc: "Traditional nonprofits and organizations operate with minimal financial transparency. Boards make decisions behind closed doors. Funds are allocated without community input. Transparently changes this by making governance the default mode of operation.",
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
    image: PHILOSOPHY_IMG,
    borderClass: "border-forest/25",
    accentClass: "bg-forest",
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
    longDesc: "Energy poverty is a systemic issue in low-income communities. WeSolar solves this through collective ownership and tokenized incentives, making solar energy accessible to those who need it most.",
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
    image: COMMUNITY_IMG,
    borderClass: "border-teal/25",
    accentClass: "bg-teal",
  },
  {
    id: "elevation-engine",
    status: "Beta Testing",
    statusColor: "text-terra bg-terra/10 border-terra/30",
    label: "DeFi",
    labelColor: "text-terra",
    title: "Elevation Engine",
    subtitle: "Autonomous DeFi Yield Generation",
    desc: "The Elevation Engine is an autonomous DeFi protocol that generates yield through flash loans, arbitrage, and liquidity provision across multiple protocols. All profits flow directly to the community treasury — no management fees, no intermediaries.",
    longDesc: "Traditional nonprofits depend on the generosity of donors. The Elevation Engine creates a self-sustaining revenue stream that operates 24/7 without human intervention, funding the mission autonomously.",
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
    image: PHILOSOPHY_IMG,
    borderClass: "border-terra/25",
    accentClass: "bg-terra",
  },
  {
    id: "purus",
    status: "Research Phase",
    statusColor: "text-ink-faint bg-parchment-deep border-[oklch(0.20_0.025_60/20%)]",
    label: "Environment",
    labelColor: "text-ink-light",
    title: "Purus Project",
    subtitle: "Environmental Justice Through Blockchain",
    desc: "The Purus Project applies the Elevation Foundation's transparency and community governance model to environmental justice — specifically clean water access, air quality monitoring, and environmental accountability in underserved communities.",
    longDesc: "Environmental racism is real and documented. The Purus Project creates on-chain environmental monitoring, community reporting, and accountability mechanisms that give affected communities the tools to document and fight back.",
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
    image: COMMUNITY_IMG,
    borderClass: "border-[oklch(0.20_0.025_60/20%)]",
    accentClass: "bg-ink-faint",
  },
];

export default function OurWork() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Our Work</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-ink leading-tight mb-6">
              Tools for the
              <br />
              <em className="font-script text-ochre">Next Economy</em>
            </h1>
            <p className="font-body text-lg text-ink-light leading-relaxed max-w-2xl">
              We do not build products. We build infrastructure — the foundational systems that communities need to govern themselves, own their energy, and access financial tools that have always been out of reach.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────── */}
      <section className="py-20 bg-parchment">
        <div className="container">
          <div className="space-y-24">
            {projects.map((project, i) => (
              <div
                key={project.id}
                id={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className={`relative overflow-hidden aspect-[4/3] ink-border-strong ${project.borderClass}`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-parchment/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`font-mono-data text-xs px-3 py-1 border ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className={`section-label ${project.labelColor} mb-3`}>{project.label}</div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-2">{project.title}</h2>
                  <p className="font-script text-ink-faint text-base mb-4 italic">{project.subtitle}</p>
                  <p className="font-body text-ink-light leading-relaxed mb-3 text-sm">{project.desc}</p>
                  <p className="font-body text-ink-faint text-sm leading-relaxed mb-6">{project.longDesc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${project.accentClass}`} />
                        <span className="font-body text-xs text-ink-faint">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono-data text-xs px-2 py-1 bg-parchment-deep border border-[oklch(0.20_0.025_60/15%)] text-ink-faint">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-body font-medium text-forest hover:text-forest-mid transition-colors"
                    >
                      <Github size={15} /> View on GitHub
                    </a>
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
            Build With Us
          </h2>
          <p className="font-body text-parchment/70 max-w-lg mx-auto mb-8">
            All our projects are open source. Developers, designers, and community organizers are welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="inline-flex items-center gap-2 px-7 py-3.5 bg-parchment text-forest font-semibold font-body rounded-sm hover:bg-parchment-dark transition-all group">
              Get Involved <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://github.com/ModernDigitalDevelopment" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-parchment/40 text-parchment font-body font-medium rounded-sm hover:border-parchment/70 transition-all">
              <Github size={15} /> GitHub Organization
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
