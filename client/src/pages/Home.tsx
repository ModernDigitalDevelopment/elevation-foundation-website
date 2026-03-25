/*
 * ELEVATION FOUNDATION — Home Page
 * Organic Codex: warm parchment, botanical illustration, ink linework
 * New images: hero-organic (tree of life), community-organic (solar mandala)
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Globe, ChevronDown } from "lucide-react";

const HERO_IMG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/hero-organic-eXmKi5wTJNqTyjkvgXDbgY.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-organic-g5WMb5bLePcW2C24P3yXDi.webp";
const PHILOSOPHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-organic-b6rVFEqfcmn9sbKJw5wwC5.webp";

const stats = [
  { value: "501(c)(3)", label: "Tax-Exempt Nonprofit" },
  { value: "20+", label: "Smart Contracts Written" },
  { value: "3", label: "Token Economy Layers" },
  { value: "∞", label: "Community Governance" },
];

const projects = [
  {
    tag: "Governance",
    tagColor: "text-forest",
    title: "Transparently DApp",
    desc: "An on-chain governance platform where every vote, every decision, and every dollar is recorded immutably on the blockchain. No more black boxes.",
    href: "/our-work#transparently",
  },
  {
    tag: "Energy",
    tagColor: "text-terra",
    title: "WeSolar",
    desc: "Tokenized community solar energy. Residents co-own solar infrastructure, earn energy credits, and vote on expansion — all governed by smart contracts.",
    href: "/our-work#wesolar",
  },
  {
    tag: "DeFi",
    tagColor: "text-teal",
    title: "Elevation Engine",
    desc: "An autonomous DeFi protocol generating yield through flash loans and arbitrage. Profits flow directly back to community treasury — no middlemen.",
    href: "/our-work#elevation-engine",
  },
];

const tokens = [
  { symbol: "SOT", name: "Sotility Governance Token", desc: "Vote on proposals, elect stewards, shape the Foundation's direction", color: "bg-forest text-parchment" },
  { symbol: "SUG", name: "Sotility Utility Token", desc: "Access platform features, pay for services, earn through participation", color: "bg-terra text-parchment" },
  { symbol: "SST", name: "Sotility Stable Token", desc: "USD-pegged stability for everyday transactions and treasury reserves", color: "bg-teal text-parchment" },
];

const principles = [
  { icon: Shield, title: "Radical Transparency", desc: "Every financial transaction, governance vote, and operational decision is recorded on-chain and publicly verifiable. No exceptions." },
  { icon: Globe, title: "Community Sovereignty", desc: "Token holders govern the Foundation. No single person, board, or entity controls the direction. Power is distributed by design." },
  { icon: Zap, title: "Autonomous Finance", desc: "Smart contracts execute without human intermediaries. The Elevation Engine generates yield autonomously, funding the mission 24/7." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background illustration — subtle, like other pages */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Tree of Life — Elevation Foundation"
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-parchment/60" />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            {/* Ticker */}
            <div className="flex items-center gap-3 mb-6 text-xs font-mono-data text-ink-faint/70 tracking-widest uppercase">
              <span>501(C)(3) Nonprofit</span>
              <span className="w-1 h-1 rounded-full bg-ochre/60" />
              <span>Blockchain Governance</span>
              <span className="w-1 h-1 rounded-full bg-ochre/60" />
              <span>Community Finance</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black text-ink leading-[1.05] mb-6 animate-fade-up">
              Elevation
              <br />
              <span className="text-forest">Is Not Given.</span>
              <br />
              <em className="font-script text-ochre">It Is Built.</em>
            </h1>

            <p className="font-body text-lg text-ink-light leading-relaxed max-w-xl mb-10 animate-fade-up-delay-1">
              The Elevation Foundation builds transparent, community-governed financial systems using blockchain technology — putting economic power where it belongs: in the hands of the people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
              <Link href="/our-work" className="btn-primary">
                See Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/philosophy" className="btn-secondary">
                The Philosophy
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-faint/40 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────── */}
      <section className="py-10 bg-parchment-dark border-y border-[oklch(0.20_0.025_60/12%)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-forest mb-1">{value}</div>
                <div className="font-mono-data text-xs text-ink-faint uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────── */}
      <section className="py-24 bg-parchment">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Our Mission</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                The System Was Not Built For Us.
                <br />
                <em className="font-script text-ochre">So We Are Building Our Own.</em>
              </h2>
              <p className="font-body text-ink-light leading-relaxed mb-4">
                For generations, communities have been excluded from the financial systems that govern their lives. Banks deny loans. Governments lack accountability. Nonprofits operate in opacity. The Elevation Foundation exists to dismantle these barriers — not through protest, but through code.
              </p>
              <p className="font-body text-ink-light leading-relaxed mb-8">
                We build open-source blockchain infrastructure that makes financial transparency the default, community governance the standard, and economic empowerment the outcome.
              </p>
              <Link href="/our-story" className="btn-secondary">
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="ink-border-strong p-2 bg-parchment-dark">
                <img
                  src={PHILOSOPHY_IMG}
                  alt="Philosophy — scales of justice and transparency"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 bg-parchment-dark ink-border">
                <div className="section-label mb-1">Philosophy</div>
                <div className="font-display text-lg font-bold text-ink">Sotilitarianism</div>
                <div className="font-body text-xs text-ink-faint">Governance through transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────── */}
      <section className="py-24 bg-parchment-dark">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label mb-3">Our Work</div>
              <h2 className="font-display text-4xl font-bold text-ink">
                Tools for the <em className="font-script text-ochre">Next Economy</em>
              </h2>
            </div>
            <Link href="/our-work" className="hidden md:inline-flex items-center gap-2 text-forest font-body text-sm font-medium hover:gap-3 transition-all">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map(({ tag, tagColor, title, desc, href }) => (
              <Link key={title} href={href} className="codex-card p-7 block group">
                <div className={`section-label ${tagColor} mb-3`}>{tag}</div>
                <h3 className="font-display text-xl font-bold text-ink mb-3 group-hover:text-forest transition-colors">{title}</h3>
                <p className="font-body text-sm text-ink-faint leading-relaxed mb-5">{desc}</p>
                <span className="inline-flex items-center gap-1 text-forest font-body text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOKEN ECONOMY ────────────────────────────────────── */}
      <section className="py-24 bg-parchment overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Token Economy</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Three Tokens.
                <br />
                <em className="font-script text-ochre">One Ecosystem.</em>
              </h2>
              <p className="font-body text-ink-light leading-relaxed mb-8">
                Our three-token economy creates a self-sustaining governance and financial system. Each token serves a distinct purpose — together they form the backbone of transparent autonomous finance.
              </p>
              <div className="space-y-4 mb-8">
                {tokens.map(({ symbol, name, desc, color }) => (
                  <div key={symbol} className="flex gap-4 items-start">
                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center font-display font-bold text-sm ${color}`}>
                      {symbol}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-ink text-sm mb-0.5">{name}</div>
                      <div className="font-body text-xs text-ink-faint">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/our-work#tokens" className="btn-secondary">
                Explore the Token Economy <ArrowRight size={15} />
              </Link>
            </div>
            <div className="ink-border-strong p-2 bg-parchment-dark">
              <img
                src={COMMUNITY_IMG}
                alt="Community solar mandala — token economy"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE PRINCIPLES ──────────────────────────────────── */}
      <section className="py-24 bg-parchment-dark">
        <div className="container">
          <div className="section-label mb-4 text-center">Core Principles</div>
          <h2 className="font-display text-4xl font-bold text-ink text-center mb-14">
            How We Operate
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-forest/10 border border-forest/25 mb-5">
                  <Icon size={22} className="text-forest" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">{title}</h3>
                <p className="font-body text-sm text-ink-faint leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-forest text-parchment relative overflow-hidden">
        {/* Subtle botanical texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <img src={COMMUNITY_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="section-label mb-4" style={{ color: "oklch(0.78 0.10 75)" }}>Join the Movement</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-parchment mb-4 leading-tight">
            The Future of Finance
            <br />
            <em className="font-script text-ochre-light">Belongs to Everyone.</em>
          </h2>
          <p className="font-body text-parchment/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you contribute code, capital, or community — there is a place for you in the Elevation ecosystem. The revolution will be tokenized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-parchment text-forest font-semibold font-body rounded-sm hover:bg-parchment-dark transition-all duration-200 group"
            >
              Get Involved <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-parchment/40 text-parchment font-body font-medium rounded-sm hover:border-parchment/70 transition-all duration-200"
            >
              Support the Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
