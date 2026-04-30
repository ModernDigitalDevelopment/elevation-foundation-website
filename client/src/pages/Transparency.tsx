/*
 * ELEVATION RISING — Transparency Page
 * Financial dashboard, on-chain data, governance activity
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink, ArrowRight } from "lucide-react";

const TRANSPARENCY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/transparency-bg-dRYH2beMpwTLwnFHzDaK7x.png";

// Simulated on-chain data — in production these would be fetched from The Graph / blockchain
const treasuryData = [
  { label: "Total Treasury", value: "$0", note: "Launching Q3 2025" },
  { label: "Elevation Engine Yield (YTD)", value: "$0", note: "Engine deploying to mainnet" },
  { label: "Donations Received", value: "$0", note: "Accepting donations now" },
  { label: "Grants Disbursed", value: "$0", note: "First grants pending governance" },
];

const governanceActivity = [
  { id: "EIP-001", title: "Foundation Charter Ratification & 501(c)(3) Filing", status: "Passed", votes: "Founding Team", date: "2024-Q4" },
  { id: "EIP-002", title: "Transparently DApp Architecture & Smart Contract Spec", status: "Passed", votes: "Founding Team", date: "2025-Q1" },
  { id: "EIP-003", title: "WeSolar IOTA Tangle Integration Approval", status: "Passed", votes: "Founding Team", date: "2025-Q1" },
  { id: "EIP-004", title: "Elevation Engine Mainnet Deployment Authorization", status: "Pending", votes: "—", date: "2025-Q3" },
  { id: "EIP-005", title: "SOT Token Initial Distribution (1B supply)", status: "Pending", votes: "—", date: "2025-Q4" },
  { id: "EIP-006", title: "WeSolar Pilot Community Selection (Phase 1)", status: "Pending", votes: "—", date: "2025-Q4" },
];

const financialCategories = [
  { category: "Technology Development", percentage: 45, color: "bg-gold" },
  { category: "Community Programs", percentage: 25, color: "bg-teal" },
  { category: "Legal & Compliance", percentage: 15, color: "bg-crimson" },
  { category: "Operations", percentage: 10, color: "bg-white/40" },
  { category: "Reserve Fund", percentage: 5, color: "bg-white/20" },
];

export default function Transparency() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Transparency | The Elevation Foundation"
        description="The Elevation Foundation publishes all financial data, governance votes, and operational decisions on-chain. Full transparency is not a feature - it is our foundation. View our on-chain records, governance proposals, and financial allocations."
        canonical="/transparency"
        keywords="nonprofit transparency, transparent economics, transparency tech, trust tech, on-chain governance, blockchain accountability, capitalism 2.0, social capitalism, EIP governance proposals, community treasury, financial transparency, economic transparency, sotilitarian capitalism"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${TRANSPARENCY_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-4">Transparency</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Nothing to Hide.
              <br />
              <span className="gold-shimmer">Everything on Chain.</span>
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              We do not ask you to trust us. We build systems that make trust unnecessary. Every financial transaction, governance vote, and operational decision is permanently recorded on the blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TRANSPARENCY PLEDGE ──────────────────────────────── */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="border border-gold/30 bg-gold/5 p-8 rounded-sm">
              <div className="section-label mb-3">Our Pledge</div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">The Transparency Standard</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "All Finances On-Chain", desc: "Every dollar received and spent is recorded on the Ethereum blockchain. No off-chain accounts, no hidden reserves." },
                  { title: "Real-Time Governance", desc: "All governance proposals, votes, and outcomes are publicly visible and verifiable in real time." },
                  { title: "Open Source Code", desc: "All smart contracts and application code are published on GitHub under open-source licenses." },
                  { title: "Annual Third-Party Audit", desc: "We commission independent smart contract audits and financial reviews, published in full." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-body font-semibold text-white text-sm mb-1">{title}</div>
                      <div className="font-body text-sm text-white/60">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TREASURY DASHBOARD ───────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="section-label mb-2">Treasury Dashboard</div>
              <h2 className="font-display text-3xl font-bold text-white">Financial Overview</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-mono-data text-xs text-gold/70">LAUNCHING Q3 2025</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {treasuryData.map(({ label, value, note }) => (
              <div key={label} className="p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <div className="font-display text-3xl font-bold text-gold mb-1">{value}</div>
                <div className="font-body text-sm text-white/70 mb-2">{label}</div>
                <div className="font-mono-data text-xs text-white/35">{note}</div>
              </div>
            ))}
          </div>

          {/* Budget Allocation */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6">Budget Allocation Policy</h3>
              <div className="space-y-4">
                {financialCategories.map(({ category, percentage, color }) => (
                  <div key={category}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-white/70">{category}</span>
                      <span className="font-mono-data text-sm text-gold">{percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-white/40 mt-4">
                Budget allocation is governed by SOT token holders and subject to change via governance proposal.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6">On-Chain Verification</h3>
              <div className="space-y-3">
                {[
                  { label: "Treasury Contract", value: "Deploying to mainnet Q3 2025", link: "#" },
                  { label: "Governance Contract", value: "Deploying to mainnet Q3 2025", link: "#" },
                  { label: "SOT Token Contract", value: "Deploying to mainnet Q3 2025", link: "#" },
                  { label: "GitHub Organization", value: "ModernDigitalDevelopment", link: "https://github.com/ModernDigitalDevelopment" },
                ].map(({ label, value, link }) => (
                  <div key={label} className="flex items-start justify-between p-3 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                    <div>
                      <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="font-mono-data text-xs text-gold/70">{value}</div>
                    </div>
                    <a
                      href={link}
                      target={link.startsWith("http") ? "_blank" : undefined}
                      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white/30 hover:text-gold transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE ACTIVITY ──────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-2">Governance</div>
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Elevation Improvement Proposals (EIPs)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="font-mono-data text-xs text-white/40 uppercase tracking-wider text-left py-3 pr-6">ID</th>
                  <th className="font-mono-data text-xs text-white/40 uppercase tracking-wider text-left py-3 pr-6">Proposal</th>
                  <th className="font-mono-data text-xs text-white/40 uppercase tracking-wider text-left py-3 pr-6">Status</th>
                  <th className="font-mono-data text-xs text-white/40 uppercase tracking-wider text-left py-3 pr-6">Votes</th>
                  <th className="font-mono-data text-xs text-white/40 uppercase tracking-wider text-left py-3">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {governanceActivity.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 pr-6">
                      <span className="font-mono-data text-xs text-gold/70">{item.id}</span>
                    </td>
                    <td className="py-4 pr-6">
                      <span className="font-body text-sm text-white/80">{item.title}</span>
                    </td>
                    <td className="py-4 pr-6">
                      <span className={`font-mono-data text-xs px-2 py-1 rounded-sm border ${
                        item.status === "Passed"
                          ? "text-teal bg-teal/10 border-teal/30"
                          : "text-white/50 bg-white/5 border-white/15"
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 pr-6">
                      <span className="font-mono-data text-xs text-white/40">{item.votes}</span>
                    </td>
                    <td className="py-4">
                      <span className="font-mono-data text-xs text-white/40">{item.date}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs text-white/35 mt-4">
            All governance proposals will be recorded on-chain when the governance contract deploys. This table reflects planned proposals.
          </p>
        </div>
      </section>

      {/* ─── REPORTING ────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="section-label mb-4">Reporting</div>
          <h2 className="font-display text-3xl font-bold text-white mb-8">
            Annual Reports & Audits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { year: "2025", title: "Founding Year Report", status: "Pending — Q4 2025", desc: "First annual report covering foundation establishment, initial fundraising, and technology development milestones." },
              { year: "Smart Contract Audit", title: "Security Audit", status: "Pending — Pre-Mainnet", desc: "Independent third-party security audit of all Solidity smart contracts before mainnet deployment." },
              { year: "IRS Form 990", title: "Tax Filing", status: "Pending — Annual", desc: "All IRS Form 990 filings will be published in full on this page as required by 501(c)(3) law." },
            ].map(({ year, title, status, desc }) => (
              <div key={year} className="p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <div className="font-mono-data text-xs text-gold/60 uppercase tracking-wider mb-2">{year}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                <div className="font-mono-data text-xs text-white/40 mb-3">{status}</div>
                <p className="font-body text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)] border-t border-white/10">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Hold Us Accountable
          </h2>
          <p className="font-body text-white/65 text-lg max-w-xl mx-auto mb-8">
            Transparency is only meaningful if the community uses it. Review our finances, audit our contracts, and vote on our proposals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              Become a Governance Member
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/ModernDigitalDevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Audit Our Code on GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
