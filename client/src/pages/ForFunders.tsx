/**
 * For Funders & Grantors — Standalone Page
 * Aggregates all four grant programs across Sotility, WeSolar, Transparently, and Foundation.
 * Displays 501(c)(3) status, EIN, contact info, and open grant applications.
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, ExternalLink, Github, FileText, CheckCircle2, Clock, DollarSign, Building2, Shield, Globe } from "lucide-react";

const grants = [
  {
    id: "esp",
    status: "draft",
    statusLabel: "Application Draft Ready",
    funder: "Ethereum Foundation",
    program: "Ecosystem Support Program (ESP)",
    project: "Sotility Protocol",
    amount: "$30K–$100K",
    category: "Academic Research & Protocol Development",
    description: "Funding formal academic publication of the efficiency-backed stablecoin mechanism, deployment of all 20 Sotility Protocol contracts to Base Mainnet, and a public security audit by a recognized firm.",
    applicationUrl: "https://github.com/ModernDigitalDevelopment/sotilitarianism/blob/main/grant-applications/ethereum-foundation-esp.md",
    submitUrl: "https://esp.ethereum.foundation/applicants",
    color: "text-gold",
    border: "border-gold/30",
    bg: "bg-gold/5",
    dot: "bg-gold",
  },
  {
    id: "gitcoin",
    status: "draft",
    statusLabel: "Application Draft Ready",
    funder: "Gitcoin",
    program: "DeSci Round (GG24)",
    project: "Sotility Protocol",
    amount: "$5K–$50K",
    category: "Decentralized Science & Governance",
    description: "Quadratic funding for the Sotility Protocol's open-source governance infrastructure. Community matching amplifies individual donations. Requires testnet deployment to qualify.",
    applicationUrl: "https://github.com/ModernDigitalDevelopment/sotilitarianism/blob/main/grant-applications/gitcoin-desci-round.md",
    submitUrl: "https://gitcoin.co/grants",
    color: "text-teal",
    border: "border-teal/30",
    bg: "bg-teal/5",
    dot: "bg-teal",
  },
  {
    id: "celo",
    status: "draft",
    statusLabel: "Application Draft Ready",
    funder: "Celo Foundation",
    program: "Climate Collective Grant",
    project: "WeSolar",
    amount: "$25K–$100K",
    category: "Climate Tech & Community Energy",
    description: "Funding WeSolar's tokenized community solar platform — fractional NFT ownership of solar panels, peer-to-peer energy credit trading, and community governance for expansion decisions in underserved communities.",
    applicationUrl: "https://github.com/ModernDigitalDevelopment/wesolar/blob/main/docs/whitepapers/CELO-CLIMATE-COLLECTIVE-GRANT.md",
    submitUrl: "https://celo.org/climate",
    color: "text-teal",
    border: "border-teal/30",
    bg: "bg-teal/5",
    dot: "bg-teal",
  },
  {
    id: "ford",
    status: "planned",
    statusLabel: "In Planning",
    funder: "Ford / Mozilla / Knight Foundation",
    program: "Technology & Democracy / Responsible Tech",
    project: "Transparently DApp + Foundation",
    amount: "$25K–$100K+",
    category: "Civic Technology & Democratic Governance",
    description: "Funding the Transparently DApp's on-chain governance infrastructure and the Foundation's broader mission of making financial transparency the default for community organizations, nonprofits, and cooperatives.",
    applicationUrl: null,
    submitUrl: "https://www.fordfoundation.org/work/challenging-inequality/",
    color: "text-crimson",
    border: "border-crimson/30",
    bg: "bg-crimson/5",
    dot: "bg-crimson",
  },
];

const projects = [
  {
    name: "Sotility Protocol",
    slug: "/sotilitarianism",
    github: "https://github.com/ModernDigitalDevelopment/sotilitarianism",
    desc: "20 open-source smart contracts implementing a three-token governance economy (SOT, SUG, SST). Includes the efficiency-backed stablecoin mechanism and a 117,000-word philosophical treatise.",
    contracts: 20,
    color: "text-gold",
  },
  {
    name: "WeSolar",
    slug: "/wesolar",
    github: "https://github.com/ModernDigitalDevelopment/wesolar",
    desc: "Decentralized peer-to-peer solar financing platform. Fractional NFT ownership of solar panels, WeSolarToken energy credits, and community governance via WeSolarDAO.",
    contracts: 4,
    color: "text-teal",
  },
  {
    name: "Transparently DApp",
    slug: "/our-work#transparently",
    github: "https://github.com/ModernDigitalDevelopment/transparently",
    desc: "On-chain governance platform. Every vote, decision, and dollar recorded immutably on the blockchain. 24 smart contracts including oracle agents and cross-chain identity.",
    contracts: 24,
    color: "text-white/80",
  },
];

const totalPotential = "$85K–$350K";

export default function ForFunders() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="For Funders & Grantors | The Elevation Foundation"
        description="The Elevation Foundation is a 501(c)(3) nonprofit (EIN: 92-1042348) building open-source blockchain infrastructure for community-governed finance. View our open grant applications across Ethereum Foundation ESP, Gitcoin, Celo Climate Collective, and Ford/Mozilla/Knight."
        keywords="Elevation Foundation grants, blockchain nonprofit, 501c3 blockchain, Ethereum Foundation ESP, Gitcoin DeSci, Celo Climate Collective, community finance grants, open source blockchain grants"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.10_0.05_265)] via-[oklch(0.12_0.06_265/0.5)] to-[oklch(0.10_0.05_265)]" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-sm mb-6">
              <Building2 size={12} className="text-gold" />
              <span className="font-mono-data text-xs text-gold tracking-wider uppercase">501(c)(3) Nonprofit · EIN: 92-1042348</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-[1.05] mb-6">
              <span className="text-white">For Funders</span>
              <br />
              <span className="text-gold italic">& Grantors</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl">
              The Elevation Foundation is a 501(c)(3) nonprofit building open-source blockchain infrastructure for community-governed finance. All grant applications are published openly on GitHub. All smart contracts are MIT-licensed. All financial decisions are recorded on-chain.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal" />
                <span className="font-body text-sm text-white/70">Tax-exempt 501(c)(3)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal" />
                <span className="font-body text-sm text-white/70">EIN: 92-1042348</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal" />
                <span className="font-body text-sm text-white/70">All code open-source (MIT)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal" />
                <span className="font-body text-sm text-white/70">On-chain financial transparency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUNDING SUMMARY ──────────────────────────────────── */}
      <section className="bg-[oklch(0.16_0.05_265)] border-y border-white/10 py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">{totalPotential}</div>
              <div className="font-mono-data text-xs tracking-wider text-white/50 uppercase">30-Day Grant Potential</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-teal mb-1">4</div>
              <div className="font-mono-data text-xs tracking-wider text-white/50 uppercase">Active Grant Programs</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">48</div>
              <div className="font-mono-data text-xs tracking-wider text-white/50 uppercase">Open-Source Contracts</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">3</div>
              <div className="font-mono-data text-xs tracking-wider text-white/50 uppercase">Active Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GRANT PROGRAMS ───────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="mb-14">
            <div className="section-label mb-3">Open Grant Applications</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Four Programs.<br />
              <span className="text-gold">Three Are Ready to Submit.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {grants.map((grant) => (
              <div key={grant.id} className={`p-8 border ${grant.border} ${grant.bg} rounded-sm`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm border ${grant.border} ${grant.bg}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${grant.dot} ${grant.status === 'draft' ? 'animate-pulse' : ''}`} />
                        <span className={`font-mono-data text-xs ${grant.color}`}>{grant.statusLabel}</span>
                      </div>
                      <span className="font-mono-data text-xs text-white/40 uppercase tracking-wider">{grant.category}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">{grant.funder}</h3>
                    <div className={`font-body text-sm font-medium mb-3 ${grant.color}`}>{grant.program} · {grant.project}</div>
                    <p className="font-body text-white/65 leading-relaxed max-w-2xl">{grant.description}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
                    <div className="text-right">
                      <div className={`font-display text-3xl font-bold ${grant.color}`}>{grant.amount}</div>
                      <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider">Grant Range</div>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                      {grant.applicationUrl && (
                        <a
                          href={grant.applicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 border ${grant.border} ${grant.color} font-body text-sm font-medium rounded-sm hover:bg-white/5 transition-colors`}
                        >
                          <FileText size={14} />
                          View Application
                          <ExternalLink size={12} />
                        </a>
                      )}
                      <a
                        href={grant.submitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/20 text-white/70 font-body text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
                      >
                        <Globe size={14} />
                        Funder Website
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS OVERVIEW ────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="mb-14">
            <div className="section-label mb-3">The Portfolio</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              What We're Building
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="p-7 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <h3 className={`font-display text-xl font-bold mb-2 ${project.color}`}>{project.name}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-6">{project.desc}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <div className={`font-display text-2xl font-bold ${project.color}`}>{project.contracts}</div>
                    <div className="font-mono-data text-xs text-white/40 uppercase">Contracts</div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-white">MIT</div>
                    <div className="font-mono-data text-xs text-white/40 uppercase">License</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={project.slug}
                    className={`inline-flex items-center gap-1 text-sm font-body font-medium ${project.color} hover:gap-2 transition-all`}
                  >
                    Project page <ArrowRight size={13} />
                  </Link>
                  <span className="text-white/20">·</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-body text-white/50 hover:text-white/80 transition-colors"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDATION INFO ──────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Foundation Information</div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Legal & Organizational
                <br />
                <span className="text-gold">Structure</span>
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Legal Name", value: "The Elevation Foundation" },
                  { label: "Tax Status", value: "501(c)(3) Public Charity" },
                  { label: "EIN", value: "92-1042348" },
                  { label: "Jurisdiction", value: "United States" },
                  { label: "Founded", value: "2022" },
                  { label: "Mission", value: "Building open-source blockchain infrastructure for community-governed finance" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between py-3 border-b border-white/10">
                    <span className="font-mono-data text-xs text-white/40 uppercase tracking-wider pt-0.5">{label}</span>
                    <span className="font-body text-sm text-white/80 text-right max-w-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label mb-4">Contact for Funders</div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="font-body text-white/70 leading-relaxed mb-8">
                For grant inquiries, partnership proposals, or due diligence requests, please reach out directly. We respond to all funder inquiries within 48 hours and can provide IRS determination letters, audited financials, and project documentation on request.
              </p>
              <div className="space-y-4">
                <div className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                  <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mb-2">General Inquiries</div>
                  <a href="mailto:info@elevation.foundation" className="font-body text-gold hover:text-gold-light transition-colors">
                    info@elevation.foundation
                  </a>
                </div>
                <div className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                  <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mb-2">Grant & Partnership Inquiries</div>
                  <a href="mailto:grants@elevation.foundation" className="font-body text-gold hover:text-gold-light transition-colors">
                    grants@elevation.foundation
                  </a>
                </div>
                <div className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                  <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mb-2">GitHub Organization</div>
                  <a
                    href="https://github.com/ModernDigitalDevelopment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-gold hover:text-gold-light transition-colors"
                  >
                    <Github size={14} />
                    github.com/ModernDigitalDevelopment
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
                >
                  <DollarSign size={16} />
                  Make a Tax-Deductible Gift
                </Link>
                <Link
                  href="/transparency"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
                >
                  <Shield size={16} />
                  Financial Transparency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
