/*
 * ELEVATION FOUNDATION — About the Founder
 * A clever, witty, deeply human bio for C.J. Sinclair
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, ExternalLink, Github, Linkedin, BookOpen, Zap, TrendingUp, Globe } from "lucide-react";

const PROFILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/cj-profile_1ea9351e.jpeg";

const credentials = [
  { label: "University of Maryland", sublabel: "Alma Mater" },
  { label: "Portland, Oregon", sublabel: "Base of Operations" },
  { label: "20+ Years", sublabel: "Quantitative Investing" },
  { label: "501(c)(3) Founder", sublabel: "Elevation Foundation" },
];

const roles = [
  {
    icon: TrendingUp,
    title: "Quantitative Systems Engineer",
    org: "Vetta Investments LLC",
    desc: "Built the V-Rank Alpha algorithm from scratch in 2005 — a systematic, emotion-free approach to identifying high-growth equities in the S&P 500/400. The portfolio has roughly doubled the S&P 500's cumulative return across four distinct market cycles. Because apparently removing human bias from investing works.",
    link: "https://vettaintech.com",
    linkLabel: "vettaintech.com",
    color: "text-teal",
    border: "border-teal/30",
    bg: "bg-teal/5",
  },
  {
    icon: Globe,
    title: "Social Impact Technologist",
    org: "Elevation Foundation",
    desc: "Founded a 501(c)(3) nonprofit to build blockchain-powered financial infrastructure for underserved communities. Because the same systems-thinking that removes bias from investing can remove gatekeepers from governance. Two problems, one philosophy.",
    link: "/our-story",
    linkLabel: "Our Story",
    color: "text-gold",
    border: "border-gold/30",
    bg: "bg-gold/5",
  },
  {
    icon: Zap,
    title: "Fintech Systems Architect",
    org: "Business Development",
    desc: "Designing the technical infrastructure for Transparently (on-chain governance), WeSolar (tokenized community solar), and the Elevation Engine (autonomous DeFi yield). The throughline: systems that work without asking permission from the people who benefit from the status quo.",
    link: "/our-work",
    linkLabel: "See the Work",
    color: "text-crimson",
    border: "border-crimson/30",
    bg: "bg-crimson/5",
  },
];

const philosophy = [
  {
    quote: "The algorithm doesn't have an ego. It doesn't panic in 2008. It doesn't get greedy in 2021. It just executes. That's the whole point.",
    context: "On quantitative investing",
  },
  {
    quote: "We didn't build Sotilitarianism as an ideology. We built it as an operating system — one that runs on transparency, not trust.",
    context: "On Sotilitarianism",
  },
  {
    quote: "Every system I've ever built has the same goal: remove the middleman who charges rent for standing between you and what you need.",
    context: "On his life's work",
  },
];

export default function AboutFounder() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="C.J. Sinclair — Founder | Elevation Foundation"
        description="Meet C.J. Sinclair — quantitative systems engineer, fintech architect, and founder of the Elevation Foundation. 20+ years building systems that remove bias, gatekeepers, and middlemen."
        keywords="CJ Sinclair, Elevation Foundation founder, Sotilitarianism, capitalism 2.0, social capitalism, transparent economics, trust tech, blockchain governance, quantitative investing, Vetta Investments, fintech, utilitarian capitalism"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/og-card_0ac91696.webp"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-[oklch(0.12_0.05_265)] overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, oklch(0.72 0.12 75) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-gold/20 via-teal/10 to-crimson/20 blur-xl" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_60px_oklch(0.72_0.12_75/0.15)]">
                  <img
                    src={PROFILE_IMG}
                    alt="C.J. Sinclair — Founder, Elevation Foundation"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-[oklch(0.16_0.05_265)] border border-gold/40 px-4 py-2 rounded-sm shadow-lg">
                  <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider">Est.</div>
                  <div className="font-display text-xl font-bold text-gold">2005</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="section-label mb-4">The Human Behind the Code</div>
              <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                C.J. <span className="gold-shimmer">Sinclair</span>
              </h1>
              <p className="font-body text-gold/80 text-lg font-medium mb-6 italic">
                "I build systems that work without asking permission."
              </p>
              <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
                Quantitative systems engineer by trade. Social impact technologist by conviction. Founder of Vetta Investments and the Elevation Foundation — two organizations that share exactly one philosophy: <strong className="text-white">remove the middleman, trust the system.</strong>
              </p>
              <p className="font-body text-white/60 text-base leading-relaxed mb-8">
                Based in Portland, Oregon. University of Maryland educated. Professionally obsessed with algorithms, blockchain governance, and the question of why financial systems seem designed to work for everyone except the people who need them most.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/cj-sinclair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-body text-sm rounded-sm transition-all duration-200"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href="https://vettaintech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-teal/30 text-teal hover:bg-teal/10 font-body text-sm rounded-sm transition-all duration-200"
                >
                  <ExternalLink size={14} />
                  Vetta Investments
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS BAR ──────────────────────────────────── */}
      <section className="bg-[oklch(0.16_0.05_265)] border-y border-white/10 py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((c) => (
              <div key={c.label} className="text-center">
                <div className="font-display text-xl font-bold text-gold mb-1">{c.label}</div>
                <div className="font-mono-data text-xs tracking-wider text-white/50 uppercase">{c.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE THROUGHLINE ──────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="container max-w-4xl">
          <div className="section-label mb-4 text-center">The Throughline</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-8 leading-tight">
            Two Careers. <span className="text-gold italic">One Obsession.</span>
          </h2>
          <div className="font-body text-white/70 text-lg leading-relaxed space-y-5 text-center max-w-3xl mx-auto">
            <p>
              In 2005, C.J. built an algorithm that would go on to outperform the S&P 500 for two decades — not by being smarter than the market, but by being more disciplined than the humans trading in it. The insight was simple and radical: <em className="text-white">remove the emotion, trust the system.</em>
            </p>
            <p>
              Twenty years later, he applied the same logic to a different problem. Not "how do we beat the market?" but "how do we build financial systems that don't exclude entire communities by design?" The answer, again, was systematic: remove the gatekeepers, encode the rules on-chain, and make transparency the default rather than the exception.
            </p>
            <p>
              That's Sotilitarianism. That's the Elevation Foundation. And that's why a quantitative investor from Portland, Oregon ended up writing a governance philosophy, filing a 501(c)(3), and building blockchain infrastructure for community solar energy.
            </p>
            <p className="text-white/50 text-base italic">
              The algorithm doesn't discriminate. Neither should the financial system.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ROLES ────────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-3 text-center">What He Builds</div>
          <h2 className="font-display text-4xl font-bold text-white text-center mb-14">
            Three Hats. <span className="text-gold">Zero Apologies.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map(({ icon: Icon, title, org, desc, link, linkLabel, color, border, bg }) => (
              <div key={title} className={`${bg} border ${border} p-7 rounded-sm card-lift`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-sm border border-current/30 mb-5 ${color}`}
                  style={{ background: "oklch(0.16 0.05 265)" }}>
                  <Icon size={20} />
                </div>
                <div className={`font-mono-data text-xs uppercase tracking-wider ${color} mb-2`}>{org}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed mb-5">{desc}</p>
                {link.startsWith("http") ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 ${color} text-sm font-body font-medium`}
                  >
                    {linkLabel} <ExternalLink size={12} />
                  </a>
                ) : (
                  <Link href={link} className={`inline-flex items-center gap-1 ${color} text-sm font-body font-medium`}>
                    {linkLabel} <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY QUOTES ────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="container max-w-4xl">
          <div className="section-label mb-4 text-center">In His Own Words</div>
          <h2 className="font-display text-4xl font-bold text-white text-center mb-14">
            The Philosophy, <span className="text-gold italic">Unfiltered</span>
          </h2>
          <div className="space-y-8">
            {philosophy.map(({ quote, context }) => (
              <div key={context} className="border-l-2 border-gold/40 pl-8 py-2">
                <blockquote className="font-display text-xl md:text-2xl text-white/90 italic leading-relaxed mb-3">
                  "{quote}"
                </blockquote>
                <div className="font-mono-data text-xs text-gold/60 uppercase tracking-wider">{context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTELLECTUAL INTERESTS ───────────────────────────── */}
      <section className="py-24 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="section-label mb-4 text-center">Down the Rabbit Hole</div>
          <h2 className="font-display text-4xl font-bold text-white text-center mb-6">
            What He's Reading <span className="text-gold">Right Now</span>
          </h2>
          <p className="font-body text-white/60 text-center max-w-2xl mx-auto mb-14 text-lg">
            C.J. publishes research at the intersection of technology, biology, energy, and markets. These are the themes keeping him up at night — in the best possible way.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { topic: "Mycotherapy", desc: "Lion's Mane & neuro-regeneration", emoji: "🍄" },
              { topic: "Marine Energy", desc: "Tidal & wave power grids", emoji: "🌊" },
              { topic: "Microbial Fuel Cells", desc: "Sewage → electricity", emoji: "⚡" },
              { topic: "Sonic Neuromodulation", desc: "Ultrasound & brain health", emoji: "🧠" },
              { topic: "DeFi Governance", desc: "On-chain democracy", emoji: "🗳️" },
              { topic: "Community Solar", desc: "Tokenized energy ownership", emoji: "☀️" },
            ].map(({ topic, desc, emoji }) => (
              <div key={topic} className="bg-[oklch(0.16_0.05_265)] border border-white/10 p-5 rounded-sm text-center card-lift">
                <div className="text-3xl mb-3">{emoji}</div>
                <div className="font-display text-sm font-bold text-white mb-1">{topic}</div>
                <div className="font-body text-xs text-white/50 leading-snug">{desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://vettaintech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal font-body font-medium hover:gap-3 transition-all duration-200 group"
            >
              <BookOpen size={16} />
              Read his investment research at Vetta
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="container text-center max-w-3xl">
          <div className="section-label mb-4">Work With the Mission</div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            The System Is Being Built.
            <br />
            <span className="gold-shimmer">Are You In?</span>
          </h2>
          <p className="font-body text-white/65 text-xl mb-10 leading-relaxed">
            C.J. is always looking for engineers, economists, community organizers, and fellow obsessives who believe the financial system can be rebuilt from first principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-[oklch(0.12_0.05_265)] font-bold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_40px_oklch(0.72_0.12_75/0.5)] group"
            >
              Get Involved
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-body font-semibold rounded-sm hover:bg-gold/10 transition-all duration-200"
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
