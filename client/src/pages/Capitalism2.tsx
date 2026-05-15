/*
 * ELEVATION RISING — Capitalism 2.0 SEO Landing Page
 * Primary SEO targets: "capitalism 2.0", "social capitalism", "utilitarian capitalism"
 * "transparent economics", "post-capitalist economics", "future of capitalism"
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, TrendingUp, Users, Shield, Zap, Globe, BookOpen, FileText, Github } from "lucide-react";

const SSRN_URL = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6678798";
const GITHUB_REPO = "https://github.com/ModernDigitalDevelopment/sotilitarianism";

const failures = [
  { stat: "1%", label: "Wealth concentration", desc: "The top 1% own more wealth than the bottom 50% combined" },
  { stat: "$5T+", label: "Financial exclusion", desc: "Unbanked and underbanked adults globally lack basic financial access" },
  { stat: "0%", label: "Governance transparency", desc: "Most institutions operate with near-zero on-chain auditability" },
  { stat: "∞", label: "Extraction loop", desc: "Value flows upward and rarely returns to the communities that created it" },
];

const upgrades = [
  {
    old: "Shareholder primacy",
    new: "Community sovereignty",
    desc: "Profit flows toward those who contribute, not just those who own.",
    icon: Users,
    color: "text-gold",
  },
  {
    old: "Opacity by default",
    new: "Transparency by architecture",
    desc: "Every transaction, vote, and disbursement is recorded on-chain — permanently.",
    icon: Shield,
    color: "text-teal",
  },
  {
    old: "Gatekept finance",
    new: "Open DeFi protocols",
    desc: "No credit scores. No intermediaries. Smart contracts don't discriminate.",
    icon: Zap,
    color: "text-gold",
  },
  {
    old: "Extractive growth",
    new: "Regenerative yield",
    desc: "The Elevation Engine generates returns that flow directly back to community.",
    icon: TrendingUp,
    color: "text-teal",
  },
  {
    old: "Representation democracy",
    new: "Continuous consent governance",
    desc: "Token holders vote directly. No delegates. No electoral lag. No backroom deals.",
    icon: Globe,
    color: "text-gold",
  },
  {
    old: "Credit-based money",
    new: "Efficiency-backed stablecoin",
    desc: "SST is minted against verified organizational improvements — not debt.",
    icon: Shield,
    color: "text-teal",
  },
];

const pillars = [
  {
    number: "01",
    title: "Incentive Realignment",
    subtitle: "Make self-interest social",
    body: "Capitalism 1.0's fatal flaw is not that people are greedy — it's that the system rewards the wrong kinds of greed. Capitalism 2.0 uses mechanism design to make selfishness productive. When your financial return depends on verified social impact, greed and good become the same thing.",
  },
  {
    number: "02",
    title: "Structural Transparency",
    subtitle: "Accountability without auditors",
    body: "Traditional capitalism requires expensive, fallible humans to audit institutions. Capitalism 2.0 makes opacity structurally impossible. Every financial flow is recorded on an immutable public ledger — not because people are honest, but because the architecture leaves no room for dishonesty.",
  },
  {
    number: "03",
    title: "Autonomous Distribution",
    subtitle: "Smart contracts, not boardrooms",
    body: "Revenue distribution in Capitalism 1.0 is a political act — subject to lobbying, favoritism, and moral luck. Capitalism 2.0 uses smart contracts to distribute value automatically according to predetermined, community-approved rules. 40% to owners. 40% to stability. 20% to community good. Every time. Without exception.",
  },
  {
    number: "04",
    title: "Earned Governance",
    subtitle: "Participation, not just capital",
    body: "In Capitalism 1.0, power follows money. In Capitalism 2.0, power follows contribution. The SUG token is earned — not bought — through verified social good. This is the first economic architecture where governance power can be accumulated by doing good things, not just accumulating wealth.",
  },
];

const thinkers = [
  { name: "Jeremy Bentham", tradition: "Utilitarianism", contribution: "Greatest good for the greatest number — the foundational metric for Sotilitarian value." },
  { name: "Elinor Ostrom", tradition: "Commons Governance", contribution: "Communities can self-govern shared resources better than states or corporations." },
  { name: "Leonid Hurwicz", tradition: "Mechanism Design", contribution: "Systems can be architected so individual self-interest produces collective benefit." },
  { name: "W.E.B. Du Bois", tradition: "Cooperative Economics", contribution: "The cooperative model proved that excluded communities can build parallel economic systems." },
  { name: "Satoshi Nakamoto", tradition: "Cryptographic Trust", contribution: "Trust can be encoded in mathematics — eliminating the need for trusted intermediaries." },
];

export default function Capitalism2() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Capitalism 2.0 — What Comes After Shareholder Primacy | The Elevation Foundation"
        description="Capitalism 2.0 is the next iteration of market economics — where transparency is structural, governance is participatory, and profit flows toward verified social good. The Elevation Foundation is building it through Sotilitarianism: blockchain-native, smart contract-enforced, community-governed."
        canonical="/capitalism-2-0"
        keywords="capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, post-capitalist economics, future of capitalism, blockchain economics, participatory economics, impact investing, solidarity economics, regenerative economics, Sotilitarianism, DeFi governance, community finance, economic reform, trust technology"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Capitalism 2.0: What Comes After Shareholder Primacy",
          "author": {
            "@type": "Person",
            "name": "Cornelius Lawrence",
            "url": "https://elevation.foundation/about/founder"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Elevation Foundation",
            "url": "https://elevation.foundation"
          },
          "url": "https://elevation.foundation/capitalism-2-0",
          "description": "Capitalism 2.0 is the next iteration of market economics — where transparency is structural, governance is participatory, and profit flows toward verified social good.",
          "about": ["Capitalism 2.0", "Sotilitarianism", "Social Capitalism", "Transparent Economics", "Blockchain Governance"]
        }}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-8"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(ellipse at 60% 40%, oklch(0.72 0.12 75 / 0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, oklch(0.78 0.14 180 / 0.08) 0%, transparent 50%)",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="section-label mb-5">The Next Operating System</div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8">
              Capitalism 2.0
              <br />
              <span className="text-gold italic">is Already Being Built.</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/65 leading-relaxed max-w-3xl mb-6">
              The first version of capitalism was a remarkable innovation — it just optimized for the wrong thing. Capitalism 2.0 keeps the engine but changes the destination.
            </p>
            <p className="font-body text-lg text-white/50 leading-relaxed max-w-2xl mb-10">
              Where Capitalism 1.0 extracted value upward, Capitalism 2.0 circulates it outward. Where 1.0 required trust in institutions, 2.0 encodes trust in mathematics. Where 1.0 rewarded ownership, 2.0 rewards contribution. The Elevation Foundation is building the infrastructure for this transition — in public, open source, and deployable today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sotilitarianism"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-body font-bold rounded-sm hover:bg-gold-light transition-all duration-200 group"
              >
                Explore Sotilitarianism <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={SSRN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/70 font-body font-medium rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
              >
                <FileText size={16} /> Read the SSRN Paper <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Failure stats */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)] border-y border-white/10">
        <div className="container">
          <div className="text-center mb-10">
            <div className="section-label mb-2">The Case for an Upgrade</div>
            <h2 className="font-display text-3xl font-bold text-white">Capitalism 1.0 Is Failing at Scale</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {failures.map((f) => (
              <div key={f.label} className="text-center p-6 bg-[oklch(0.16_0.05_265)] border border-crimson/20 rounded-sm">
                <div className="font-display text-4xl font-black text-crimson mb-2">{f.stat}</div>
                <div className="font-body font-semibold text-white text-sm mb-2">{f.label}</div>
                <div className="font-body text-white/45 text-xs leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Upgrade */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3">The Architecture Upgrade</div>
            <h2 className="font-display text-4xl font-bold text-white">
              Six Core <span className="text-gold">System Upgrades</span>
            </h2>
            <p className="font-body text-white/55 mt-4 max-w-2xl mx-auto">
              Capitalism 2.0 doesn't tear down markets — it upgrades the rules they run on. Each upgrade is already implemented in the Elevation Foundation's open-source protocols.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upgrades.map((u) => {
              const IconComp = u.icon;
              return (
                <div key={u.old} className="bg-[oklch(0.16_0.05_265)] border border-white/10 p-6 rounded-sm card-lift group">
                  <div className="flex items-start gap-3 mb-4">
                    <IconComp size={18} className={`mt-0.5 flex-shrink-0 ${u.color}`} />
                    <div>
                      <div className="font-mono-data text-[10px] uppercase tracking-wider text-white/30 line-through mb-1">{u.old}</div>
                      <div className={`font-body font-semibold text-sm ${u.color}`}>{u.new}</div>
                    </div>
                  </div>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{u.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="section-label mb-3">The Framework</div>
            <h2 className="font-display text-4xl font-bold text-white">
              Four Pillars of <span className="text-gold">Capitalism 2.0</span>
            </h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {pillars.map((p) => (
              <div key={p.number} className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-center md:text-left">
                  <div className="font-mono-data text-4xl font-bold text-gold/25">{p.number}</div>
                </div>
                <div className="bg-[oklch(0.16_0.05_265)] border border-white/10 p-8 rounded-sm">
                  <div className="font-mono-data text-xs uppercase tracking-wider text-gold/60 mb-2">{p.subtitle}</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{p.title}</h3>
                  <p className="font-body text-white/65 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual lineage */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-label mb-3">Intellectual Lineage</div>
              <h2 className="font-display text-4xl font-bold text-white">
                Standing on <span className="text-gold">Giants' Shoulders</span>
              </h2>
              <p className="font-body text-white/55 mt-4 max-w-2xl mx-auto">
                Capitalism 2.0 is not invented from thin air. It synthesizes the most rigorous thinking across economics, political philosophy, and distributed systems.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {thinkers.map((t) => (
                <div key={t.name} className="bg-[oklch(0.16_0.05_265)] border border-white/10 p-5 rounded-sm">
                  <div className="font-display text-lg font-bold text-gold mb-0.5">{t.name}</div>
                  <div className="font-mono-data text-[10px] uppercase tracking-wider text-white/35 mb-3">{t.tradition}</div>
                  <p className="font-body text-white/55 text-sm leading-relaxed">{t.contribution}</p>
                </div>
              ))}
              {/* Ubuntu / Du Bois */}
              <div className="bg-[oklch(0.16_0.05_265)] border border-white/10 p-5 rounded-sm">
                <div className="font-display text-lg font-bold text-gold mb-0.5">Ubuntu Philosophy</div>
                <div className="font-mono-data text-[10px] uppercase tracking-wider text-white/35 mb-3">African Communal Governance</div>
                <p className="font-body text-white/55 text-sm leading-relaxed">"I am because we are" — the foundational insight that individual identity and collective thriving are inseparable.</p>
              </div>
              <div className="bg-[oklch(0.16_0.05_265)] border border-gold/15 p-5 rounded-sm col-span-full sm:col-span-2 lg:col-span-1">
                <div className="font-display text-lg font-bold text-white mb-2">Published on SSRN</div>
                <p className="font-body text-white/55 text-sm leading-relaxed mb-4">
                  The full theoretical framework is published in a peer-reviewed academic paper at SSRN — the Social Science Research Network.
                </p>
                <a
                  href={SSRN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:opacity-80 transition-opacity"
                >
                  Read the Paper <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSRN Citation */}
      <section className="py-16 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="border border-gold/25 bg-gold/5 rounded-sm p-8">
              <div className="flex items-start gap-4">
                <FileText size={28} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <div className="font-mono-data text-xs uppercase tracking-wider text-gold/60 mb-2">Academic Citation · SSRN · Posted May 9, 2026</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    Sotilitarianism: A Framework for Blockchain-Native Governance and Incentive-Aligned Political Economy
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-4">
                    <strong className="text-white/80">Cornelius DeFalco</strong> · April 16, 2026 · 19 Pages
                  </p>
                  <p className="font-body text-white/55 text-sm leading-relaxed mb-6 italic">
                    "Traditional governance systems face a legitimacy crisis rooted in opacity, exclusion, and misaligned incentives. Sotilitarianism proposes a new socioeconomic philosophy in which transparency is architecturally enforced, community sovereignty is structurally guaranteed, and individual self-interest is made structurally identical to collective social good — through programmable incentive mechanisms deployed on public blockchains."
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={SSRN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[oklch(0.12_0.05_265)] font-body font-semibold text-sm rounded-sm hover:bg-gold-light transition-all duration-200"
                    >
                      Read on SSRN <ExternalLink size={13} />
                    </a>
                    <a
                      href={GITHUB_REPO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/60 font-body text-sm rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
                    >
                      <Github size={14} /> View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, oklch(0.72 0.12 75) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="section-label mb-4">Ready to Build It?</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Capitalism 2.0 Is Not a Prediction.
            <br />
            <span className="gold-shimmer">It Is Deployable Code.</span>
          </h2>
          <p className="font-body text-white/60 text-xl max-w-2xl mx-auto mb-10">
            Every concept on this page is implemented in auditable, open-source smart contracts. The revolution is not theoretical. It is already compiling.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[oklch(0.12_0.05_265)] font-bold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              Get Involved <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/white-papers"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-body font-medium rounded-sm hover:bg-gold/10 transition-all duration-200"
            >
              Read the Research
            </Link>
            <Link
              href="/sotilitarianism"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/60 font-body font-medium rounded-sm hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Explore Sotilitarianism
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
