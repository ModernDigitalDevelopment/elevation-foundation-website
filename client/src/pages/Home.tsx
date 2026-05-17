/*
 * ELEVATION RISING — Home Page (v2 — Immersive Web3 Redesign)
 * Design: Sacred Geometry × Afrofuturism × Movement Manifesto
 * Aesthetic: Bold · Kinetic · Manifesto-energy · Gen Z / Millennial Web3
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import NewsletterForm from "@/components/NewsletterForm";
import {
  ArrowRight, Shield, Zap, Globe, ChevronDown,
  Sun, Vote, TrendingUp, Github, ExternalLink, FileText,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SSRN_URL = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6678798";
const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663269003011/GZvjNIQjEGBIFXsV.png";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-bg-RdFx47xnXRjkf2fcLDsprJ.png";
const TOKEN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/token-economy-Lg7aNHvZZDFY3tPRPfZhDn.png";

// ─── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "501(c)(3)", label: "Tax-Exempt Nonprofit", accent: "text-gold" },
  { value: "20+", label: "Smart Contracts Written", accent: "text-teal" },
  { value: "3", label: "Token Economy Layers", accent: "text-gold" },
  { value: "∞", label: "Community Governance", accent: "text-crimson" },
];

const projects = [
  {
    id: "transparently",
    label: "Governance DApp",
    icon: Vote,
    title: "Transparently",
    desc: "An on-chain governance platform where every vote, every decision, and every dollar is recorded immutably. Organizations earn transparency scores. Communities earn rewards for participation. No more black boxes.",
    color: "text-gold",
    border: "border-gold/30",
    glow: "glow-gold",
    gradientFrom: "from-gold/10",
    href: "/our-work#transparently",
    github: "https://github.com/ModernDigitalDevelopment/transparently",
    tag: "01",
  },
  {
    id: "wesolar",
    label: "Renewable Energy",
    icon: Sun,
    title: "WeSolar",
    desc: "A decentralized peer-to-peer solar financing platform. Residents co-own solar infrastructure, earn tokenized energy credits, and vote on expansion — all governed by smart contracts on the IOTA Tangle.",
    color: "text-teal",
    border: "border-teal/30",
    glow: "glow-teal",
    gradientFrom: "from-teal/10",
    href: "/our-work#wesolar",
    github: "https://github.com/ModernDigitalDevelopment/wesolar",
    tag: "02",
  },
  {
    id: "elevation-engine",
    label: "DeFi Protocol",
    icon: TrendingUp,
    title: "Elevation Engine",
    desc: "An autonomous DeFi protocol generating yield through AI-managed flash loans and arbitrage strategies. Profits flow directly back to the community treasury via the SotilityTreasuryRouter.",
    color: "text-crimson",
    border: "border-crimson/30",
    glow: "glow-crimson",
    gradientFrom: "from-crimson/10",
    href: "/our-work#elevation-engine",
    github: "https://github.com/ModernDigitalDevelopment/elevation-foundation",
    tag: "03",
  },
];

const tokens = [
  {
    symbol: "SOT",
    name: "SotilityOwnershipToken",
    desc: "Equity stake in the ecosystem. Dividend-eligible from protocol revenue. Vote on proposals, elect stewards, and shape the Foundation's direction. 1 billion total supply.",
    color: "text-gold",
    borderColor: "border-gold/40",
    bg: "bg-gold/8",
    glowClass: "glow-gold",
    dotColor: "bg-gold",
  },
  {
    symbol: "SUG",
    name: "SoGoodUtilityGovernance",
    desc: "Earned through verified contributions on the SoGood social platform. Used for proposal weighting, content curation, and community tipping. Time-locked to reward long-term participation.",
    color: "text-teal",
    borderColor: "border-teal/40",
    bg: "bg-teal/8",
    glowClass: "glow-teal",
    dotColor: "bg-teal",
  },
  {
    symbol: "SST",
    name: "SotilityStableToken",
    desc: "USD-pegged stablecoin minted 1:1 against verified business revenue. Every mint is backed by an IPFS receipt audit trail. Stability without traditional collateral.",
    color: "text-white/80",
    borderColor: "border-white/20",
    bg: "bg-white/4",
    glowClass: "",
    dotColor: "bg-white/50",
  },
];

const principles = [
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "Every financial transaction, governance vote, and operational decision is recorded on-chain and publicly verifiable. Transparency is not a feature — it is the foundation.",
    color: "text-gold",
    iconBg: "bg-gold/10 border-gold/30",
  },
  {
    icon: Globe,
    title: "Community Sovereignty",
    desc: "Token holders govern the Foundation. No single person, board, or entity controls the direction. Power is distributed by design through the SoGoodDAOFactory governance framework.",
    color: "text-teal",
    iconBg: "bg-teal/10 border-teal/30",
  },
  {
    icon: Zap,
    title: "Autonomous Finance",
    desc: "Smart contracts execute without human intermediaries. The Elevation Engine generates yield autonomously 24/7, funding the mission through AI-managed DeFi strategies.",
    color: "text-crimson",
    iconBg: "bg-crimson/10 border-crimson/30",
  },
];

const founderTimeline = [
  { label: "The Question", text: "Why do the communities that need finance most have the least access?" },
  { label: "The Research", text: "Years of study: Bentham, Ostrom, Hurwicz, Du Bois, and the cypherpunk tradition" },
  { label: "The Build", text: "20+ smart contracts written. Three projects. One token economy. Open source, always." },
  { label: "The Foundation", text: "501(c)(3) incorporated. Wyoming DUNA legal framework. Mission formalized." },
  { label: "SSRN Publication", text: "Sotilitarianism published on the Social Science Research Network, May 2026." },
];

const sotPrinciples = [
  { principle: "Merit-Based = Profit-Based", desc: "Economic rewards tied to verified social impact" },
  { principle: "Utility = Currency", desc: "Useful contributions form the basis for value" },
  { principle: "Social Action = Economic Yield", desc: "Positive actions generate financial returns" },
  { principle: "Redirected Incentives", desc: "Self-interest channeled toward collective good" },
];

// ─── Animated Counter Hook ───────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

// ─── Particle canvas background ─────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }
    const colors = [
      "oklch(0.72 0.12 75)",  // gold
      "oklch(0.78 0.14 180)", // teal
      "oklch(0.50 0.14 25)",  // crimson
    ];
    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.5 - 0.15,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", ` / ${p.opacity})`).replace("oklch(", "oklch(");
        // Use rgba fallback for canvas compatibility
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// ─── Intersection observer for scroll-triggered animations ──────────────────
function useFadeIn(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Plain English Interactive Explainer ────────────────────────────────────
const DARK_CHART = "#0d1117";
const GOLD_CHART = "#c9a84c";
const TEAL_CHART = "#4db8b8";
const CRIMSON_CHART = "#c0392b";

function PlainEnglishSection() {
  const [mode, setMode] = useState<"ext" | "sot">("ext");
  const { ref, visible } = useFadeIn();

  const extData = {
    labels: ["Executives", "Shareholders", "Offshore/Tax", "Workers", "Community"],
    datasets: [{
      label: "¢ per $1 generated",
      data: [28, 34, 18, 14, 6],
      backgroundColor: [
        "rgba(192,57,43,0.85)", "rgba(192,57,43,0.75)",
        "rgba(192,57,43,0.55)", "rgba(100,100,120,0.45)", "rgba(77,184,184,0.4)",
      ],
      borderColor: [CRIMSON_CHART, CRIMSON_CHART, CRIMSON_CHART, "#555", TEAL_CHART],
      borderWidth: 1.5, borderRadius: 3,
    }],
  };

  const sotData = {
    labels: ["Contributors", "Community Treasury", "Governance", "Protocol", "Elevation Engine"],
    datasets: [{
      label: "¢ per $1 generated",
      data: [40, 25, 15, 12, 8],
      backgroundColor: [
        "rgba(77,184,184,0.85)", "rgba(77,184,184,0.65)",
        "rgba(201,168,76,0.7)", "rgba(77,184,184,0.45)", "rgba(201,168,76,0.45)",
      ],
      borderColor: [TEAL_CHART, TEAL_CHART, GOLD_CHART, TEAL_CHART, GOLD_CHART],
      borderWidth: 1.5, borderRadius: 3,
    }],
  };

  const opts = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (c: any) => ` ${c.raw}¢ of every $1 generated` },
        backgroundColor: "#0d1117",
        titleColor: GOLD_CHART,
        bodyColor: "#aaa",
        borderColor: "rgba(201,168,76,0.3)",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        max: 48,
        ticks: { callback: (v: any) => `${v}¢`, color: "rgba(255,255,255,0.4)", font: { size: 11 } },
        grid: { color: "rgba(255,255,255,0.05)" },
        border: { color: "rgba(255,255,255,0.08)" },
      },
      y: {
        ticks: { color: "rgba(255,255,255,0.75)", font: { size: 12 } },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <section className="py-28 bg-navy relative overflow-hidden" aria-labelledby="explainer-heading">
      {/* Geometric background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.14 180) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="container">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Text side */}
          <div>
            <div className="section-label mb-4">Plain English</div>
            <h2 id="explainer-heading" className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              What Is Sotilitarianism,
              <br />
              <span className="text-gold italic">Simply?</span>
            </h2>
            <div className="space-y-5 font-body text-white/65 text-base leading-relaxed">
              <p>
                Imagine if every dollar your city spent appeared on a public screen in real time. Every vote was counted instantly and couldn't be changed. Every good deed — volunteering, mentoring, building — earned you real money.
              </p>
              <p>
                That's Sotilitarianism. It's an economic system that uses blockchain technology to make those things happen automatically — without politicians, without banks, and without anyone taking a cut for being trusted.
              </p>
              <div className="relative bg-[oklch(0.15_0.05_265)] border border-gold/25 p-5 rounded-sm overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
                <p className="text-white/85 font-semibold mb-2 pl-3">The old system extracts. The new system circulates.</p>
                <p className="text-white/55 text-sm pl-3">
                  In the current economy, $1 of value generated by a community produces only <strong className="text-crimson">6¢</strong> of benefit for that community. Sotilitarianism routes <strong className="text-teal">40¢</strong> directly to contributors — automatically, on-chain, every time.
                </p>
              </div>
              <p>
                You don't need to understand blockchain to use this system. You just need to participate. Contribute something real — time, skills, solar energy, governance participation — and the system rewards you with real economic yield.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/capitalism-2-0"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-body font-semibold text-sm rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_25px_oklch(0.72_0.12_75/0.4)] group"
              >
                What is Capitalism 2.0?
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/sotilitarianism"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/60 font-body text-sm rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
              >
                Deep Technical Dive
              </Link>
            </div>
          </div>

          {/* Chart side */}
          <div>
            <div className="bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 75) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }} />
              <div className="relative">
                <div className="font-mono-data text-[10px] uppercase tracking-wider text-white/35 mb-3">
                  Fig 1.1 — Where Does $1 Go?
                </div>
                <div className="flex gap-2 mb-5">
                  {(["ext", "sot"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 py-2 px-3 font-mono-data text-xs uppercase tracking-wide rounded-sm border transition-all duration-250 ${
                        mode === m
                          ? m === "ext"
                            ? "bg-crimson/80 border-crimson/60 text-white shadow-[0_0_15px_oklch(0.50_0.14_25/0.3)]"
                            : "bg-teal/80 border-teal/60 text-[oklch(0.10_0.05_265)] shadow-[0_0_15px_oklch(0.78_0.14_180/0.3)]"
                          : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/70"
                      }`}
                    >
                      {m === "ext" ? "Extractive System" : "Sotilitarianism"}
                    </button>
                  ))}
                </div>
                <div style={{ height: "260px" }}>
                  <Bar data={mode === "ext" ? extData : sotData} options={opts} />
                </div>
                <div className={`mt-4 p-3 rounded-sm border-l-2 text-xs font-body leading-relaxed transition-all duration-300 ${
                  mode === "ext"
                    ? "bg-crimson/8 border-crimson/50 text-white/55"
                    : "bg-teal/8 border-teal/50 text-white/60"
                }`}>
                  {mode === "ext"
                    ? "Only 6¢ of every dollar reaches the community that generated it. The rest escapes upward — by design."
                    : "40¢ of every dollar flows directly to contributors. The community treasury grows. The flywheel accelerates."}
                </div>
              </div>
            </div>
            <p className="font-mono-data text-[10px] text-white/25 text-center mt-3 uppercase tracking-wider">
              Interactive — click to toggle systems
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Main Home Component ─────────────────────────────────────────────────────
export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Fade-in refs for each section
  const missionFade = useFadeIn();
  const projectsFade = useFadeIn();
  const tokenFade = useFadeIn();
  const sotFade = useFadeIn();
  const founderFade = useFadeIn();
  const principlesFade = useFadeIn();
  const ctaFade = useFadeIn();

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="The Elevation Foundation | Capitalism 2.0 · Transparent Economics · Blockchain Governance"
        description="The Elevation Foundation is a 501(c)(3) nonprofit pioneering Capitalism 2.0 — transparent economics, social capitalism, and utilitarian capitalism powered by blockchain. Sotilitarianism: where social action generates economic yield. Transparently DApp, WeSolar, and the Elevation Engine."
        canonical="/"
        keywords="Elevation Foundation, Sotilitarianism, capitalism 2.0, social capitalism, utilitarian capitalism, transparent economics, trust tech, transparency tech, blockchain governance, community finance, transparent capitalism, participatory economics, Transparently DApp, WeSolar, Elevation Engine, DAO, DeFi, nonprofit blockchain, SOT token, post-capitalist economics, cooperative economics, solidarity economics"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "NGO",
          "@id": "https://elevation.foundation/#organization",
          "name": "The Elevation Foundation",
          "alternateName": ["Elevation Foundation", "ElevFound"],
          "url": "https://elevation.foundation",
          "logo": "https://elevation.foundation/logo.png",
          "description": "A 501(c)(3) nonprofit building transparent, community-governed financial systems using blockchain technology. Pioneers of Sotilitarianism — Capitalism 2.0.",
          "foundingDate": "2024",
          "nonprofitStatus": "Nonprofit501c3",
          "areaServed": "Worldwide",
          "knowsAbout": ["Blockchain Governance", "Decentralized Finance", "Community Finance", "Sotilitarianism", "Capitalism 2.0", "Transparent Economics"],
          "sameAs": [
            "https://github.com/ModernDigitalDevelopment",
            "https://github.com/ModernDigitalDevelopment/elevation-foundation",
            "https://github.com/ModernDigitalDevelopment/sotilitarianism",
            "https://twitter.com/ElevationFound",
            "https://x.com/ElevationFound",
            "https://www.linkedin.com/company/elevation-foundation"
          ],
          "founder": {
            "@type": "Person",
            "name": "Cornelius Lawrence",
            "url": "https://elevation.foundation/about/founder",
            "sameAs": [
              "https://github.com/corneliuslawrence",
              "https://www.linkedin.com/in/corneliuslawrence"
            ]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Open Source Blockchain Projects",
            "itemListElement": [
              { "@type": "Offer", "name": "Transparently DApp", "url": "https://github.com/ModernDigitalDevelopment/transparently" },
              { "@type": "Offer", "name": "WeSolar", "url": "https://github.com/ModernDigitalDevelopment/wesolar" },
              { "@type": "Offer", "name": "Elevation Engine", "url": "https://github.com/ModernDigitalDevelopment/elevation-foundation" }
            ]
          }
        }}
      />
      <Navigation />

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Full-screen immersive with particles + manifesto typography
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          role="img"
          aria-label="Abstract sacred geometry representing the Elevation Foundation's vision"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.08_0.06_265/0.97)] via-[oklch(0.10_0.05_265/0.80)] to-[oklch(0.12_0.04_265/0.45)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.05_265/0.95)] via-transparent to-transparent" />
        {/* Floating particles */}
        <ParticleField />

        {/* Geometric accent — top right */}
        <div
          className="absolute top-24 right-0 w-[500px] h-[500px] opacity-8 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(circle at 80% 20%, oklch(0.72 0.12 75 / 0.15) 0%, transparent 60%)",
          }}
        />

        {/* Horizontal rule accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

        <div className="container relative z-10 pt-28 pb-24">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-up">
              <div className="h-px w-8 bg-gold/60" />
              <div className="section-label">501(c)(3) Nonprofit · Blockchain Governance · Community Finance</div>
              <div className="h-px w-8 bg-gold/60" />
            </div>

            {/* Main manifesto headline */}
            <h1 className="font-display font-black leading-[1.02] mb-8 animate-fade-up-delay-1">
              <span
                className="block text-[clamp(3rem,9vw,7.5rem)] gold-shimmer"
              >
                Transparency
              </span>
              <span
                className="block text-[clamp(2.5rem,7.5vw,6rem)] text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Is Not Given.
              </span>
              <span
                className="block text-[clamp(2rem,6vw,4.5rem)] text-white/50 italic font-light mt-2"
              >
                It Is Built.
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto animate-fade-up-delay-2">
              The Elevation Foundation builds transparent, community-governed financial systems using blockchain —{" "}
              <em className="text-white/90 not-italic font-medium">putting economic power where it belongs</em>:{" "}
              in the hands of the people.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-[oklch(0.10_0.05_265)] font-semibold font-body text-base rounded-sm transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_45px_oklch(0.72_0.12_75/0.55)] group"
              >
                See Our Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/philosophy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-body font-medium text-base rounded-sm backdrop-blur-sm hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                The Philosophy
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 animate-fade-up-delay-3">
              {["501(c)(3) Certified", "20+ Smart Contracts", "Open Source Forever", "Wyoming DUNA"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold/60" />
                  <span className="font-mono-data text-[11px] uppercase tracking-widest text-white/35">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="font-mono-data text-[9px] uppercase tracking-widest text-white/30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
          <ChevronDown size={16} className="text-gold/50 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          STATS BAR — Bold animated counters
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-[oklch(0.14_0.05_265)] border-y border-white/8 py-10 overflow-hidden"
        aria-label="Foundation stats"
      >
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-4 px-6 group">
                <div className={`font-display text-3xl md:text-4xl font-black mb-1.5 ${stat.accent} transition-all duration-300 group-hover:scale-105`}>
                  {stat.value}
                </div>
                <div className="font-mono-data text-[11px] tracking-widest text-white/40 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSION — Asymmetric 2-col with manifesto energy
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-navy relative overflow-hidden" aria-labelledby="mission-heading">
        {/* Background glow */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-[0.04] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.12 75) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container">
          <div
            ref={missionFade.ref}
            className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-1000 ${missionFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Text */}
            <div>
              <div className="section-label mb-5">Our Mission</div>
              <h2 id="mission-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-8">
                The System Was Not
                <br />Built For Us.
                <br />
                <span className="text-gold italic font-light" style={{ fontSize: "0.85em" }}>So We Are Building Our Own.</span>
              </h2>
              <div className="space-y-5 font-body text-white/65 text-base leading-relaxed mb-8">
                <p>
                  For generations, communities have been excluded from the financial systems that govern their lives. Banks deny loans. Governments lack accountability. Nonprofits operate in opacity. The Elevation Foundation exists to dismantle these barriers — not through protest, <strong className="text-white">but through code.</strong>
                </p>
                <p>
                  We build open-source blockchain infrastructure grounded in{" "}
                  <strong className="text-white">Sotilitarianism</strong> — a new economic philosophy that redirects capitalist incentives toward verified social good. Where merit equals profit. Where utility is currency. Where social action generates economic yield.
                </p>
                <p>
                  Our three flagship projects — Transparently, WeSolar, and the Elevation Engine — are the living proof that transparent, autonomous, community-governed finance is <em className="text-white/80">not a dream.</em> It is deployable code.
                </p>
              </div>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-200 group"
              >
                Read Our Story
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Image panel */}
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <img
                  src={COMMUNITY_IMG}
                  alt="Community members collaborating around a shared governance platform"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                {/* Side accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
              </div>

              {/* Floating philosophy badge */}
              <div className="absolute -bottom-5 -left-5 bg-[oklch(0.13_0.05_265)] border border-gold/35 p-5 rounded-sm glow-gold max-w-[220px]">
                <div className="font-mono-data text-[10px] text-gold/60 uppercase tracking-widest mb-1.5">Core Philosophy</div>
                <div className="font-display text-xl font-bold text-white mb-1">Sotilitarianism</div>
                <div className="font-body text-xs text-white/55 leading-relaxed">Make blockchain invisible. Make impact inevitable.</div>
              </div>

              {/* Stat overlay — top right */}
              <div className="absolute -top-4 -right-4 bg-[oklch(0.14_0.05_265)] border border-teal/30 px-4 py-3 rounded-sm">
                <div className="font-mono-data text-[10px] text-teal/60 uppercase tracking-widest mb-0.5">Live On-Chain</div>
                <div className="font-display text-2xl font-bold text-teal">20+</div>
                <div className="font-mono-data text-[10px] text-white/40">Smart Contracts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECTS — 3 cards with glowing hover and terminal aesthetic
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[oklch(0.13_0.05_265)] relative overflow-hidden" aria-labelledby="projects-heading">
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 75) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container relative z-10">
          <div
            ref={projectsFade.ref}
            className={`transition-all duration-1000 ${projectsFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="section-label mb-4">Our Work</div>
                <h2 id="projects-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Tools for the{" "}
                  <span className="text-gold">Next Economy</span>
                </h2>
              </div>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm transition-all duration-200 group"
              >
                View All Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Project cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <Link
                    key={project.id}
                    href={project.href}
                    className={`
                      relative block bg-[oklch(0.15_0.05_265)] border ${project.border}
                      p-7 rounded-sm group overflow-hidden
                      transition-all duration-400
                      hover:-translate-y-2 hover:shadow-[0_30px_60px_oklch(0_0_0/0.5)]
                    `}
                  >
                    {/* Gradient bleed on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`} />

                    {/* Tag number */}
                    <div className="absolute top-4 right-5 font-mono-data text-[10px] text-white/15 tracking-widest">
                      {project.tag}
                    </div>

                    {/* Card content */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`flex items-center justify-center w-10 h-10 border ${project.border} rounded-sm ${project.gradientFrom.replace("from-", "bg-").replace("/10", "/15")}`}>
                          <Icon size={18} className={project.color} />
                        </div>
                        <div className={`section-label ${project.color}`}>{project.label}</div>
                      </div>

                      <h3 className={`font-display text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:${project.color} transition-colors duration-300`}>
                        {project.title}
                      </h3>

                      <p className="font-body text-white/55 text-sm leading-relaxed mb-7">
                        {project.desc}
                      </p>

                      {/* Separator line */}
                      <div className={`h-px bg-gradient-to-r from-current to-transparent mb-5 ${project.color} opacity-20`} />

                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-2 ${project.color} text-sm font-body font-semibold group-hover:gap-3 transition-all duration-200`}>
                          Learn more
                          <ArrowRight size={13} />
                        </span>
                        {project.github && (
                          <span
                            className="inline-flex items-center gap-1.5 text-white/35 hover:text-white/70 text-xs font-mono-data transition-colors cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(project.github, "_blank", "noopener,noreferrer");
                            }}
                          >
                            <Github size={13} />
                            Source
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TOKEN ECONOMY — Glowing tokens, diagonal layout
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-navy relative overflow-hidden" aria-labelledby="token-heading">
        {/* Ambient glow */}
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.12 75) 0%, transparent 65%)", filter: "blur(40px)" }}
          aria-hidden="true"
        />
        <div className="container">
          <div
            ref={tokenFade.ref}
            className={`grid md:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-1000 ${tokenFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src={TOKEN_IMG}
                  alt="Three-token economy diagram: SOT ownership token, SUG utility token, SST stablecoin"
                  className="w-full rounded-sm"
                />
                {/* Frame overlay */}
                <div className="absolute inset-0 rounded-sm border border-gold/10 pointer-events-none" />
              </div>
              {/* Floating metric */}
              <div className="absolute -bottom-4 -right-4 bg-[oklch(0.14_0.05_265)] border border-gold/30 px-5 py-4 rounded-sm glow-gold">
                <div className="font-mono-data text-[10px] text-gold/60 uppercase tracking-widest mb-1">Revenue Split</div>
                <div className="font-display text-2xl font-bold text-gold">40/40/20</div>
                <div className="font-mono-data text-[10px] text-white/40">SOT · SST · SUG</div>
              </div>
            </div>

            {/* Token details */}
            <div>
              <div className="section-label mb-4">Token Economy</div>
              <h2 id="token-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-7">
                Three Tokens.
                <br />
                <span className="text-gold">One Ecosystem.</span>
              </h2>
              <p className="font-body text-white/65 text-base leading-relaxed mb-3">
                Our three-token economy creates a self-sustaining governance and financial system rooted in Sotilitarian Economics. Protocol revenue is distributed autonomously:{" "}
                <strong className="text-white">40% to SOT dividends</strong>,{" "}
                <strong className="text-white">40% to SST reserves</strong>, and{" "}
                <strong className="text-white">20% to SUG community campaigns</strong>.
              </p>
              <p className="font-body text-white/55 text-sm leading-relaxed mb-8">
                Each token serves a distinct purpose — together they form the backbone of transparent autonomous finance where merit equals profit and social action generates economic yield.
              </p>

              {/* Token cards */}
              <div className="space-y-3 mb-8">
                {tokens.map((token) => (
                  <div
                    key={token.symbol}
                    className={`flex items-start gap-4 p-5 border ${token.borderColor} ${token.bg} rounded-sm group transition-all duration-300 hover:-translate-y-0.5 ${token.glowClass ? `hover:${token.glowClass}` : ""}`}
                  >
                    {/* Symbol badge */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 flex items-center justify-center font-mono-data text-xs font-bold rounded-sm border ${token.borderColor}`}
                        style={{ background: "oklch(0.14 0.05 265)" }}
                      >
                        <span className={token.color}>{token.symbol}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`font-body font-bold text-sm ${token.color} mb-1`}>{token.name}</div>
                      <div className="font-body text-sm text-white/50 leading-relaxed">{token.desc}</div>
                    </div>
                    {/* Live indicator */}
                    <div className="flex-shrink-0 flex items-center gap-1.5 pt-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${token.dotColor} animate-pulse`} />
                      <span className="font-mono-data text-[9px] text-white/25 uppercase tracking-widest">Live</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/philosophy#token-economy"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-200 group"
              >
                Explore the Full Token Economy
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SOTILITARIANISM TEASER — Manifesto-style, 4-principle grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[oklch(0.13_0.05_265)] relative overflow-hidden" aria-labelledby="sotility-heading">
        {/* Corner geometry */}
        <div
          className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-gold/30 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-gold/30 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-gold/20 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-gold/20 to-transparent"
          aria-hidden="true"
        />

        <div className="container">
          <div
            ref={sotFade.ref}
            className={`transition-all duration-1000 ${sotFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="section-label mb-5">The Philosophy</div>
              <h2 id="sotility-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Sotilitarianism:{" "}
                <span className="gold-shimmer">A New Economic<br />Operating System</span>
              </h2>
              <p className="font-body text-white/65 text-lg leading-relaxed max-w-3xl mx-auto">
                Sotilitarianism is a synthesis of social utility, tokenized participation, and programmable fairness. It integrates capitalist opportunism, socialist humanism, and the idealism of collective ownership into a single coherent framework — rendered in code, enforced by smart contracts, and governed by the community.
              </p>
            </div>

            {/* 4 principles — horizontal with dividers on desktop */}
            <div className="grid md:grid-cols-4 gap-0 mb-14">
              {sotPrinciples.map((item, i) => (
                <div
                  key={item.principle}
                  className={`p-6 text-center relative group ${i < sotPrinciples.length - 1 ? "md:border-r border-white/8" : ""}`}
                >
                  {/* Number */}
                  <div className="font-mono-data text-[10px] text-gold/30 uppercase tracking-widest mb-4">
                    0{i + 1}
                  </div>
                  {/* Hover glow line */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gold/0 group-hover:bg-gold/40 transition-all duration-400" />
                  <div className="font-body font-bold text-white text-sm mb-3 leading-tight">
                    {item.principle}
                  </div>
                  <div className="font-body text-white/45 text-xs leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold font-body font-bold text-sm rounded-sm hover:bg-gold/10 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.2)] transition-all duration-300 group"
              >
                Read the Full Philosophy
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/capitalism-2-0"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/12 text-white/50 font-body text-sm rounded-sm hover:border-white/25 hover:text-white/80 transition-all duration-300"
              >
                What is Capitalism 2.0?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PLAIN-ENGLISH EXPLAINER + INTERACTIVE CHART
      ═══════════════════════════════════════════════════════════════════ */}
      <PlainEnglishSection />

      {/* ═══════════════════════════════════════════════════════════════════
          FOUNDER STORY — Personal, urgent, numbered timeline
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[oklch(0.13_0.05_265)] relative overflow-hidden" aria-labelledby="founder-heading">
        <div className="container">
          <div
            ref={founderFade.ref}
            className={`grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto transition-all duration-1000 ${founderFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Text */}
            <div>
              <div className="section-label mb-4">The Founder</div>
              <h2 id="founder-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                Built by Someone
                <br />Who Needed It.
                <br />
                <span className="text-gold italic font-light" style={{ fontSize: "0.88em" }}>Not Just Someone<br />Who Imagined It.</span>
              </h2>
              <p className="font-body text-white/65 text-base leading-relaxed mb-5">
                Cornelius Lawrence didn't study economic exclusion from a university office. He lived it. His journey — from firsthand experience with a system designed to exclude, to building the blockchain infrastructure that makes exclusion structurally impossible — is the emotional core of everything the Elevation Foundation builds.
              </p>
              <blockquote className="border-l-2 border-gold/40 pl-5 mb-8">
                <p className="font-body text-white/55 text-sm leading-relaxed italic">
                  "I didn't read about communities being locked out of finance. I was in those communities. That's not a credential — it's a responsibility."
                </p>
              </blockquote>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-200 group"
              >
                Read the Full Story
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Timeline cards */}
            <div className="space-y-3">
              {founderTimeline.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 bg-[oklch(0.15_0.05_265)] border border-white/8 rounded-sm group hover:border-gold/20 transition-all duration-300"
                >
                  <div className="font-mono-data text-xs text-gold/35 w-6 flex-shrink-0 mt-0.5 group-hover:text-gold/60 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-body font-bold text-gold text-xs uppercase tracking-widest mb-1.5">
                      {item.label}
                    </div>
                    <div className="font-body text-white/50 text-sm leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SSRN CITATION STRIP — Academic credibility bar
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-navy relative" aria-label="Academic citation">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="container">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center bg-gold/8 border border-gold/25 rounded-sm">
                <FileText size={22} className="text-gold" />
              </div>
            </div>
            <div className="flex-1">
              <div className="font-mono-data text-[10px] uppercase tracking-widest text-gold/55 mb-1.5">
                Peer-Reviewed · SSRN · May 2026
              </div>
              <div className="font-display text-base font-bold text-white mb-1 leading-snug">
                Sotilitarianism: A Framework for Blockchain-Native Governance and Incentive-Aligned Political Economy
              </div>
              <div className="font-body text-white/40 text-sm">
                Cornelius DeFalco · Social Science Research Network · 19 pages
              </div>
            </div>
            <a
              href={SSRN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-gold/30 text-gold font-body text-sm font-semibold rounded-sm hover:bg-gold/10 hover:shadow-[0_0_20px_oklch(0.72_0.12_75/0.2)] transition-all duration-300 whitespace-nowrap"
            >
              Read the Paper
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRINCIPLES — 3 cards with icon glow
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-navy relative overflow-hidden" aria-labelledby="principles-heading">
        <div className="container">
          <div
            ref={principlesFade.ref}
            className={`transition-all duration-1000 ${principlesFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <div className="section-label mb-4">Core Principles</div>
              <h2 id="principles-heading" className="font-display text-4xl md:text-5xl font-black text-white">
                How We <span className="text-gold">Operate</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {principles.map(({ icon: Icon, title, desc, color, iconBg }) => (
                <div
                  key={title}
                  className="relative text-center p-10 bg-[oklch(0.14_0.05_265)] border border-white/8 rounded-sm group transition-all duration-400 hover:-translate-y-2 hover:border-white/15 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none ${
                    color === "text-gold" ? "bg-gradient-to-b from-gold/5 to-transparent" :
                    color === "text-teal" ? "bg-gradient-to-b from-teal/5 to-transparent" :
                    "bg-gradient-to-b from-crimson/5 to-transparent"
                  }`} />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-sm border ${iconBg} mb-7 ${color} transition-all duration-300 group-hover:scale-110`}
                    >
                      <Icon size={26} />
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-4">{title}</h3>
                    <p className="font-body text-white/55 text-sm leading-relaxed">{desc}</p>

                    {/* Bottom accent */}
                    <div className={`mt-6 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-400 ${color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — Full-bleed manifesto with dramatic typography
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 bg-[oklch(0.11_0.06_265)] overflow-hidden" aria-labelledby="cta-heading">
        {/* Large dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, oklch(0.72 0.12 75) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Central glow burst */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.72 0.12 75 / 0.07) 0%, transparent 70%)",
          }}
        />
        {/* Corner lines */}
        <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/40 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-gold/40 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-gold/40 to-transparent" />
        </div>

        <div
          ref={ctaFade.ref}
          className={`container relative z-10 text-center transition-all duration-1000 ${ctaFade.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="section-label mb-6">Join the Movement</div>

          {/* Massive manifesto headline */}
          <h2
            id="cta-heading"
            className="font-display font-black text-white leading-[1.0] mb-8"
            style={{ fontSize: "clamp(2.5rem,7.5vw,6.5rem)" }}
          >
            The Future of Finance
            <br />
            <span className="gold-shimmer">Belongs to Everyone.</span>
          </h2>

          <p className="font-body text-white/60 text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
            Whether you contribute code, capital, or community — there is a place for you in the Elevation ecosystem.{" "}
            <em className="text-white/80 not-italic font-medium">The revolution will be tokenized.</em>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold text-[oklch(0.10_0.05_265)] font-black font-body text-base rounded-sm transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_60px_oklch(0.72_0.12_75/0.55)] group"
            >
              Get Involved
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-gold/40 text-gold font-body font-semibold text-base rounded-sm hover:bg-gold/10 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.2)] transition-all duration-300"
            >
              Support the Mission
            </Link>
          </div>

          {/* Bottom social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Open Source", "Non-Custodial", "Community Governed", "Zero Gatekeepers"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span className="font-mono-data text-[10px] uppercase tracking-widest text-white">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          NEWSLETTER + FOOTER
      ═══════════════════════════════════════════════════════════════════ */}
      <NewsletterForm
        source="home"
        heading="Join the Transparency Movement"
        subheading="Get updates on Capitalism 2.0, Sotilitarianism, transparent economics, and the Elevation Foundation's latest work — delivered to your inbox. No spam. Ever."
      />

      <Footer />
    </div>
  );
}
