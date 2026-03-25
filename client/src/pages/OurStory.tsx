/*
 * ELEVATION FOUNDATION — Our Story Page
 * Organic Codex: parchment tones, botanical linework, Lora body, Playfair headings
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/hero-organic-eXmKi5wTJNqTyjkvgXDbgY.webp";

const timeline = [
  {
    year: "2018",
    title: "The Question",
    desc: "Lawrence Cornelius begins asking a fundamental question: why do the communities that need financial infrastructure the most have the least access to it? The answer leads to years of research into blockchain, DeFi, and community governance.",
  },
  {
    year: "2020",
    title: "The Philosophy Emerges",
    desc: "Sotilitarianism takes shape — a governance philosophy rooted in the belief that transparency is not a feature, it is a foundation. The first white papers are drafted, outlining a three-token economy and community-first governance model.",
  },
  {
    year: "2021",
    title: "First Smart Contracts",
    desc: "The technical work begins in earnest. Over 20 Solidity smart contracts are written, tested, and refined. The Transparently DApp prototype demonstrates on-chain governance for the first time.",
  },
  {
    year: "2022",
    title: "WeSolar Vision",
    desc: "The WeSolar project is conceived — a tokenized community solar energy cooperative where residents co-own infrastructure, earn credits, and govern expansion through smart contracts.",
  },
  {
    year: "2023",
    title: "Foundation Formalized",
    desc: "The Elevation Foundation is formally incorporated as a 501(c)(3) nonprofit. The legal framework for a hybrid nonprofit/DAO structure is developed, leveraging Wyoming's DUNA law.",
  },
  {
    year: "2024",
    title: "Ecosystem Expansion",
    desc: "The GitHub organization ModernDigitalDevelopment is established with 8 core repositories. The Purus Project — focused on environmental justice — joins the ecosystem.",
  },
  {
    year: "2025 →",
    title: "The Launch",
    desc: "Phase 1 of the tokenization roadmap begins. The Foundation goes public, inviting developers, donors, and community members to build the infrastructure for the next economy.",
  },
];

export default function OurStory() {
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
            <div className="section-label mb-4">Our Story</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-ink leading-tight mb-6">
              Built From the
              <br />
              <em className="font-script text-ochre">Ground Up</em>
            </h1>
            <p className="font-body text-lg text-ink-light leading-relaxed max-w-2xl">
              The Elevation Foundation did not begin in a boardroom or a venture capital office. It began with a question — and a refusal to accept the answer that the system had always given.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ORIGIN ───────────────────────────────────────────── */}
      <section className="py-20 bg-parchment-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4">The Beginning</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8">
              Why We Exist
            </h2>
            <div className="space-y-5 font-body text-ink-light leading-relaxed">
              <p>
                For too long, the communities that built this country have been systematically excluded from the financial systems that govern it. Redlining, predatory lending, opaque nonprofit governance, and inaccessible capital markets are not accidents — they are features of a system designed to concentrate wealth and power in the hands of the few.
              </p>
              <p>
                Blockchain technology offers something unprecedented: the ability to build financial and governance infrastructure that is transparent by default, accessible to anyone with an internet connection, and governed by the community it serves — not by a board of directors, a bank, or a government agency.
              </p>
              <p>
                The Elevation Foundation was founded on a simple but radical premise: <strong className="text-ink font-semibold">what if the people most affected by a system were the ones who governed it?</strong> What if every financial decision was publicly verifiable? What if community members earned real ownership — not just participation — in the infrastructure they depend on?
              </p>
              <p>
                These questions led to Sotilitarianism. They led to the three-token economy. They led to Transparently, WeSolar, and the Elevation Engine. And they led to this Foundation — a 501(c)(3) nonprofit that practices what it preaches, with every transaction recorded on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-24 bg-parchment">
        <div className="container">
          <div className="section-label mb-4 text-center">Timeline</div>
          <h2 className="font-display text-4xl font-bold text-ink text-center mb-16">
            The <em className="font-script text-ochre">Chronicle</em>
          </h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-20 top-0 bottom-0 w-px bg-[oklch(0.20_0.025_60/15%)]" />
            <div className="space-y-10">
              {timeline.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-8">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="font-mono-data text-xs text-ochre/80 tracking-widest">{year}</span>
                  </div>
                  <div className="relative flex-1 pb-2">
                    <div className="absolute -left-[1.35rem] top-1 w-3 h-3 border-2 border-forest bg-parchment rounded-full" />
                    <h3 className="font-display text-xl font-bold text-ink mb-2">{title}</h3>
                    <p className="font-body text-sm text-ink-faint leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="py-20 bg-parchment-dark">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">What We Stand For</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-8">
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
                    <div className="flex-shrink-0 w-0.5 bg-forest/30 rounded-full mt-1" />
                    <div>
                      <h4 className="font-body font-semibold text-ink mb-1">{title}</h4>
                      <p className="font-body text-ink-faint text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="codex-card p-8">
              <div className="section-label mb-4">Legal Structure</div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">
                Hybrid 501(c)(3) / DAO
              </h3>
              <p className="font-body text-ink-faint leading-relaxed mb-6 text-sm">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                    <span className="font-body text-sm text-ink-faint">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-parchment">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment mb-4">
            This Story Is Still Being Written
          </h2>
          <p className="font-body text-parchment/70 text-lg max-w-xl mx-auto mb-8">
            The Elevation Foundation is a movement, not a monument. Your contribution — of time, talent, or treasure — becomes part of the story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="inline-flex items-center gap-2 px-7 py-3.5 bg-parchment text-forest font-semibold font-body rounded-sm hover:bg-parchment-dark transition-all group">
              Join the Movement <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/philosophy" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-parchment/40 text-parchment font-body font-medium rounded-sm hover:border-parchment/70 transition-all">
              Read the Philosophy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
