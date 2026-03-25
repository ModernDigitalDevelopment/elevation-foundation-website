/*
 * ELEVATION FOUNDATION — Transparency Page
 * Organic Codex: parchment tones, botanical linework, Lora body, Playfair headings
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink, ArrowRight } from "lucide-react";

const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-organic-b6rVFEqfcmn9sbKJw5wwC5.webp";

const treasuryData = [
  { label: "Total Treasury", value: "$0", note: "Launching Q3 2025" },
  { label: "Elevation Engine Yield (YTD)", value: "$0", note: "Engine deploying to mainnet" },
  { label: "Donations Received", value: "$0", note: "Accepting donations now" },
  { label: "Grants Disbursed", value: "$0", note: "First grants pending governance" },
];

const governanceActivity = [
  { id: "EIP-001", title: "Foundation Charter Ratification", status: "Passed", votes: "Pending", date: "2025-Q3" },
  { id: "EIP-002", title: "Elevation Engine Mainnet Deployment", status: "Pending", votes: "—", date: "2025-Q3" },
  { id: "EIP-003", title: "WeSolar Pilot Community Selection", status: "Pending", votes: "—", date: "2025-Q4" },
  { id: "EIP-004", title: "SOT Token Initial Distribution", status: "Pending", votes: "—", date: "2025-Q4" },
];

const financialCategories = [
  { category: "Technology Development", percentage: 45, colorClass: "bg-forest" },
  { category: "Community Programs", percentage: 25, colorClass: "bg-teal" },
  { category: "Legal & Compliance", percentage: 15, colorClass: "bg-terra" },
  { category: "Operations", percentage: 10, colorClass: "bg-ochre" },
  { category: "Reserve Fund", percentage: 5, colorClass: "bg-ink-faint" },
];

const statusColor = (status: string) => {
  if (status === "Passed") return "text-forest bg-forest/10 border-forest/30";
  if (status === "Active") return "text-teal bg-teal/10 border-teal/30";
  return "text-ink-faint bg-parchment-deep border-[oklch(0.20_0.025_60/20%)]";
};

export default function Transparency() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={PHILOSOPHY_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Transparency</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-ink leading-tight mb-6">
              Nothing to Hide.
              <br />
              <em className="font-script text-ochre">Everything on Chain.</em>
            </h1>
            <p className="font-body text-lg text-ink-light leading-relaxed max-w-2xl">
              We do not ask you to trust us. We build systems that make trust unnecessary. Every financial transaction, governance vote, and operational decision is permanently recorded on the blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TREASURY ─────────────────────────────────────────── */}
      <section className="py-20 bg-parchment-dark">
        <div className="container">
          <div className="section-label mb-4">Treasury Dashboard</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-10">
            Live Financial <em className="font-script text-ochre">Snapshot</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {treasuryData.map(({ label, value, note }) => (
              <div key={label} className="codex-card p-6">
                <div className="font-display text-3xl font-bold text-forest mb-1">{value}</div>
                <div className="font-body text-sm font-semibold text-ink mb-1">{label}</div>
                <div className="font-mono-data text-xs text-ink-faint/60">{note}</div>
              </div>
            ))}
          </div>

          {/* Budget Allocation */}
          <div className="codex-card p-8">
            <h3 className="font-display text-xl font-bold text-ink mb-6">Budget Allocation</h3>
            <div className="space-y-4">
              {financialCategories.map(({ category, percentage, colorClass }) => (
                <div key={category}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-body text-sm text-ink-light">{category}</span>
                    <span className="font-mono-data text-sm text-ink-faint">{percentage}%</span>
                  </div>
                  <div className="h-2 bg-parchment-deep rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colorClass} rounded-full transition-all duration-700`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-ink-faint/60 mt-6">
              * Allocations are governed by community vote and subject to change via EIP proposals.
            </p>
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE ───────────────────────────────────────── */}
      <section className="py-20 bg-parchment">
        <div className="container">
          <div className="section-label mb-4">Governance Activity</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-10">
            Elevation Improvement <em className="font-script text-ochre">Proposals</em>
          </h2>
          <div className="space-y-3">
            {governanceActivity.map(({ id, title, status, votes, date }) => (
              <div key={id} className="codex-card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="font-mono-data text-xs text-ochre/70 w-20 flex-shrink-0">{id}</div>
                <div className="flex-1">
                  <div className="font-body font-semibold text-ink text-sm">{title}</div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className={`font-mono-data text-xs px-3 py-1 border ${statusColor(status)}`}>{status}</span>
                  <span className="font-mono-data text-xs text-ink-faint hidden sm:block">{date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ON-CHAIN COMMITMENT ──────────────────────────────── */}
      <section className="py-20 bg-parchment-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4 text-center">Our Commitment</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center mb-10">
              The Transparency Standard
            </h2>
            <div className="space-y-6">
              {[
                { title: "All Transactions On-Chain", desc: "Every dollar received, every dollar spent — recorded permanently on the Ethereum blockchain and publicly verifiable by anyone, anywhere, at any time." },
                { title: "Open Source Contracts", desc: "All smart contracts are published on GitHub and verified on Etherscan. The code that governs our treasury is readable by anyone." },
                { title: "Community-Controlled Treasury", desc: "No single person can move treasury funds. Multi-signature wallets require community approval for all disbursements above threshold amounts." },
                { title: "Annual Third-Party Audit", desc: "In addition to on-chain transparency, we commission annual smart contract audits and financial reviews from independent third parties." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex-shrink-0 w-0.5 bg-forest/30 mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-ink mb-2">{title}</h4>
                    <p className="font-body text-sm text-ink-faint leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-parchment">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-parchment mb-4">
            Verify It Yourself
          </h2>
          <p className="font-body text-parchment/70 max-w-lg mx-auto mb-8">
            Don't take our word for it. Every claim we make is verifiable on-chain. Our GitHub is public. Our contracts are open source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/ModernDigitalDevelopment" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-parchment text-forest font-semibold font-body rounded-sm hover:bg-parchment-dark transition-all">
              <ExternalLink size={15} /> View on GitHub
            </a>
            <Link href="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-parchment/40 text-parchment font-body font-medium rounded-sm hover:border-parchment/70 transition-all">
              Support the Mission <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
