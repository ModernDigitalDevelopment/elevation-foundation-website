/*
 * ELEVATION RISING — Our Story Page
 * Timeline narrative, founder vision, organizational history
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-bg-RdFx47xnXRjkf2fcLDsprJ.png";

const timeline = [
  {
    year: "The Question",
    title: "Why Do the People Who Need Finance Most Have the Least Access?",
    desc: "Lawrence D. Cornelius begins asking a fundamental question after witnessing firsthand how communities — particularly Black and underserved communities — are systematically excluded from the financial systems that govern their lives. Banks deny loans. Governments lack accountability. Nonprofits accept donations but rarely show where the money goes. The answer to this question leads to years of deep research into blockchain, decentralized finance, and community governance models.",
  },
  {
    year: "The Philosophy",
    title: "Sotilitarianism Emerges",
    desc: "After studying Jeremy Bentham's utilitarianism, Elinor Ostrom's commons governance, and Leonid Hurwicz's mechanism design theory, a new synthesis takes shape: Sotilitarianism. A governance philosophy rooted in the belief that transparency is not a feature — it is a foundation. That merit equals profit. That utility is currency. That social action generates economic yield. The first white papers are drafted, outlining a three-token economy and community-first governance model.",
  },
  {
    year: "The Build",
    title: "First Smart Contracts Written",
    desc: "The technical work begins in earnest. Over 20 Solidity smart contracts are written, tested, and refined. The Transparently DApp prototype demonstrates on-chain governance for the first time — organizations earn transparency scores, communities earn rewards for participation. The Elevation Engine begins generating yield on testnets through AI-managed flash loan and arbitrage strategies. The SotilityTreasuryRouter is architected to distribute protocol revenue autonomously.",
  },
  {
    year: "WeSolar",
    title: "Decentralized Solar Energy for the People",
    desc: "The WeSolar project is conceived — a decentralized peer-to-peer solar financing platform built on the IOTA Tangle. Residents co-own solar infrastructure, earn tokenized energy credits (WeSolarCredits), and vote on expansion through smart contracts. The platform enables fractional ownership of solar panels, automated energy trading, and community governance of shared infrastructure. Pilot planning begins in underserved communities with the goal of making clean energy accessible to everyone.",
  },
  {
    year: "Foundation",
    title: "501(c)(3) Incorporation",
    desc: "The Elevation Foundation is formally incorporated as a 501(c)(3) tax-exempt nonprofit organization. The legal framework for a hybrid nonprofit/DAO structure is developed, leveraging Wyoming's DUNA (Decentralized Unincorporated Nonprofit Association) law — the first state in the US to legally recognize DAOs. The Foundation's mission is formalized: to acquire and operate small businesses for revenue, purchase housing for rent-to-equity programs, and redistribute profits through the token economy.",
  },
  {
    year: "Ecosystem",
    title: "GitHub Organization & Ecosystem Expansion",
    desc: "The GitHub organization ModernDigitalDevelopment is established with 8 core repositories covering the full Sotility ecosystem: SotilityToken, SotilityGovernance, SotilityTreasuryRouter, TransparentlyDApp, WeSolarContracts, ElevationEngine, SoGoodPlatform, and PurusProject. The Purus Project — focused on environmental justice and clean water access — joins the ecosystem. Community building accelerates across developer, donor, and community member channels.",
  },
  {
    year: "2025 →",
    title: "Phase 1: The Launch",
    desc: "Phase 1 of the tokenization roadmap begins. The Elevation Foundation goes public, inviting developers, donors, and community members to participate in building the infrastructure for the next economy. The three-token economy launches with SOT governance token, SUG utility token, and SST stablecoin. The SoGood social platform opens for beta participation. The revolution will be tokenized.",
  },
];

export default function OurStory() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Our Story | The Elevation Foundation"
        description="The Elevation Foundation was built from the ground up by Lawrence D. Cornelius after witnessing how communities are systematically excluded from financial systems. From the question to Sotilitarianism, WeSolar, Transparently, and the Elevation Engine."
        canonical="/our-story"
        keywords="Elevation Foundation story, Sotilitarianism history, capitalism 2.0 origin, transparent economics nonprofit, social capitalism founding, utilitarian capitalism, trust tech, transparency tech, blockchain nonprofit founding, community finance origin, post-capitalist economics, cooperative economics"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Our Story</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Built From the
              <br />
              <span className="gold-shimmer">Ground Up</span>
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl">
              The Elevation Foundation did not begin in a boardroom or a venture capital office. It began with a question — and a refusal to accept the answer that the system had always given.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ORIGIN STORY ─────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4">The Beginning</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
              Why We Exist
            </h2>
            <div className="space-y-6 font-body text-white/70 text-lg leading-relaxed">
              <p>
                For too long, the communities that built this country have been systematically excluded from the financial systems that govern it. Redlining, predatory lending, opaque nonprofit governance, and inaccessible capital markets are not accidents — they are features of a system designed to concentrate wealth and power in the hands of the few.
              </p>
              <p>
                Blockchain technology offers something unprecedented: the ability to build financial and governance infrastructure that is transparent by default, accessible to anyone with an internet connection, and governed by the community it serves — not by a board of directors, a bank, or a government agency.
              </p>
              <p>
                The Elevation Foundation was founded on a simple but radical premise: <strong className="text-white">what if the people most affected by a system were the ones who governed it?</strong> What if every financial decision was publicly verifiable? What if community members earned real ownership — not just participation — in the infrastructure they depend on?
              </p>
              <p>
                These questions led to Sotilitarianism. They led to the three-token economy. They led to Transparently, WeSolar, and the Elevation Engine. And they led to this Foundation — a 501(c)(3) nonprofit that practices what it preaches, with every transaction recorded on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-4">Timeline</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-14">
            The Journey So Far
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gold/20 hidden md:block" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-8 items-start">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-18 text-right hidden md:block">
                    <span className="font-mono-data text-sm text-gold/80">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/30 border-2 border-gold mt-1 hidden md:block relative z-10" />
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="md:hidden font-mono-data text-sm text-gold/80 mb-1">{item.year}</div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="font-body text-white/65 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">What We Stand For</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
                Our Core Values
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Transparency First", desc: "We do not ask communities to trust us. We build systems that make trust unnecessary — because everything is verifiable." },
                  { title: "Community Ownership", desc: "The people who benefit from a system should own it. Token governance means real ownership, not just participation." },
                  { title: "Open Source Always", desc: "All our code is public. All our contracts are auditable. We build in the open because we have nothing to hide." },
                  { title: "Equity by Design", desc: "We do not retrofit equity into systems built for exclusion. We build equity into the architecture from day one." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-gold/40 rounded-full mt-1" />
                    <div>
                      <h4 className="font-body font-semibold text-white mb-1">{title}</h4>
                      <p className="font-body text-white/60 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[oklch(0.16_0.05_265)] border border-gold/20 p-8 rounded-sm">
              <div className="section-label mb-4">Legal Structure</div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Hybrid 501(c)(3) / DAO
              </h3>
              <p className="font-body text-white/65 leading-relaxed mb-6">
                The Elevation Foundation operates as a tax-exempt 501(c)(3) nonprofit while simultaneously implementing DAO governance through Wyoming's Decentralized Unincorporated Nonprofit Association (DUNA) framework — the first state in the US to legally recognize DAOs.
              </p>
              <div className="space-y-3">
                {[
                  "Tax-deductible donations accepted",
                  "On-chain governance via SOT token",
                  "Wyoming DUNA legal recognition",
                  "All financials on-chain and auditable",
                  "Community treasury governed by vote",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-body text-sm text-white/70">{item}</span>
                  </div>
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
            This Story Is Still Being Written
          </h2>
          <p className="font-body text-white/65 text-lg max-w-xl mx-auto mb-8">
            The Elevation Foundation is a movement, not a monument. Your contribution — of time, talent, or treasure — becomes part of the story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
            >
              Join the Movement
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              Read the Philosophy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
