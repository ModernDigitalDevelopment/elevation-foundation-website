/**
 * PART V VISUALS — The Future of Economics: Beyond the Binary Debate
 * Post-binary economics spectrum, convergence diagram, and outcome projections
 */
import { useState, useEffect } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[oklch(0.18_0.05_265)] border border-gold/30 rounded-sm px-4 py-3 shadow-xl">
      <p className="font-mono-data text-xs text-gold/70 mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="font-body text-sm" style={{ color: entry.color }}>
          {entry.name}: <span className="font-semibold">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

// ─── 1. THE POST-BINARY ECONOMICS SPECTRUM ────────────────────────────────────
export function PostBinarySpectrum() {
  const [activeSystem, setActiveSystem] = useState(2);

  const systems = [
    {
      id: 0,
      name: "Pure Capitalism",
      tagline: "Markets solve everything",
      color: "oklch(0.55 0.18 15)",
      scores: {
        efficiency: 88,
        equity: 12,
        sustainability: 25,
        transparency: 18,
        participation: 8,
        resilience: 35,
      },
      desc: "Maximizes market efficiency and innovation but concentrates wealth, externalizes costs, and systematically excludes the majority from governance.",
      failures: ["Wealth concentration", "Environmental externalities", "Democratic deficit", "Boom-bust cycles"],
    },
    {
      id: 1,
      name: "Democratic Socialism",
      tagline: "State solves everything",
      color: "oklch(0.55 0.12 265)",
      scores: {
        efficiency: 45,
        equity: 72,
        sustainability: 60,
        transparency: 42,
        participation: 55,
        resilience: 58,
      },
      desc: "Improves equity and social outcomes but suffers from bureaucratic inefficiency, centralized control, and vulnerability to political capture.",
      failures: ["Bureaucratic inefficiency", "Political capture", "Innovation stagnation", "Central planning limits"],
    },
    {
      id: 2,
      name: "Sotilitarianism",
      tagline: "Community builds everything",
      color: "oklch(0.72 0.12 75)",
      scores: {
        efficiency: 92,
        equity: 95,
        sustainability: 88,
        transparency: 99,
        participation: 97,
        resilience: 90,
      },
      desc: "Combines market efficiency with community governance, radical transparency, and verified utility — transcending the binary debate entirely.",
      failures: ["Still emerging", "Requires digital literacy", "Regulatory uncertainty", "Network bootstrap challenge"],
    },
  ];

  const radarData = [
    { metric: "Efficiency", ...Object.fromEntries(systems.map(s => [s.name, s.scores.efficiency])) },
    { metric: "Equity", ...Object.fromEntries(systems.map(s => [s.name, s.scores.equity])) },
    { metric: "Sustainability", ...Object.fromEntries(systems.map(s => [s.name, s.scores.sustainability])) },
    { metric: "Transparency", ...Object.fromEntries(systems.map(s => [s.name, s.scores.transparency])) },
    { metric: "Participation", ...Object.fromEntries(systems.map(s => [s.name, s.scores.participation])) },
    { metric: "Resilience", ...Object.fromEntries(systems.map(s => [s.name, s.scores.resilience])) },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-6">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 5.1 — System Performance Analysis</div>
        <h3 className="font-display text-lg font-bold text-white">Beyond the Binary: Three Economic Systems Compared</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          The capitalism vs. socialism debate is a false binary — a 19th-century argument applied to a 21st-century problem. Sotilitarianism renders the debate obsolete by transcending both.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-full md:w-72">
          <div className="space-y-2 mb-4">
            {systems.map((sys) => (
              <button
                key={sys.id}
                onClick={() => setActiveSystem(sys.id)}
                className={`w-full text-left p-3 rounded-sm border transition-all duration-200 ${
                  activeSystem === sys.id ? "border-gold/30 bg-gold/5" : "border-white/8 hover:border-white/15"
                }`}
              >
                <div className="font-body text-sm font-semibold" style={{ color: sys.color }}>
                  {sys.name}
                </div>
                <div className="font-body text-xs text-white/35 italic">{sys.tagline}</div>
              </button>
            ))}
          </div>

          {/* Active system detail */}
          <div className="p-4 rounded-sm border border-gold/20 bg-gold/5">
            <p className="font-body text-xs text-white/60 leading-relaxed mb-3">
              {systems[activeSystem].desc}
            </p>
            <div className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider mb-2">
              {activeSystem === 2 ? "Current Challenges" : "Systemic Failures"}
            </div>
            <ul className="space-y-1">
              {systems[activeSystem].failures.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-body text-xs text-white/45">
                  <span style={{ color: systems[activeSystem].color }}>·</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="oklch(0.25 0.05 265)" />
              <PolarAngleAxis
                dataKey="metric"
                tick={{ fill: "oklch(0.65 0.02 265)", fontSize: 11, fontFamily: "monospace" }}
              />
              {systems.map((sys) => (
                <Radar
                  key={sys.id}
                  name={sys.name}
                  dataKey={sys.name}
                  stroke={sys.color}
                  fill={sys.color}
                  fillOpacity={activeSystem === sys.id ? 0.25 : 0.08}
                  strokeWidth={activeSystem === sys.id ? 2.5 : 1}
                />
              ))}
              <Legend
                wrapperStyle={{ fontFamily: "monospace", fontSize: "10px" }}
                formatter={(v) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{v}</span>}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// ─── 2. THE CONVERGENCE THESIS ─────────────────────────────────────────────────
export function ConvergenceThesis() {
  const [step, setStep] = useState(0);

  const theses = [
    {
      title: "The Efficiency Thesis",
      claim: "Markets are the most efficient allocators of resources",
      sotilResponse: "Correct — but only when information is symmetric and externalities are priced. Sotilitarianism preserves market mechanisms while enforcing radical transparency and verified utility pricing.",
      outcome: "Markets + Transparency = Efficient AND Just",
      color: "oklch(0.72 0.12 75)",
    },
    {
      title: "The Equity Thesis",
      claim: "Collective ownership produces more equitable outcomes",
      sotilResponse: "Correct — but collective ownership without accountability produces bureaucracy and capture. Sotilitarianism achieves collective ownership through DAO governance with cryptographic accountability.",
      outcome: "Collective Ownership + Accountability = Equitable AND Efficient",
      color: "oklch(0.65 0.12 195)",
    },
    {
      title: "The Innovation Thesis",
      claim: "Competition and profit incentives drive innovation",
      sotilResponse: "Partially correct — but the greatest innovations (internet, GPS, vaccines) came from publicly funded, open-source, or community-driven models. Sotilitarianism rewards innovation through Proof of Utility, not just profit.",
      outcome: "Innovation + Community Benefit = Sustainable Progress",
      color: "oklch(0.72 0.12 75)",
    },
    {
      title: "The Stability Thesis",
      claim: "Central planning provides economic stability",
      sotilResponse: "Incorrect — central planning creates brittleness. Sotilitarianism achieves stability through distributed resilience: no single point of failure, no single point of control, no single point of corruption.",
      outcome: "Distributed Resilience = Antifragile Economy",
      color: "oklch(0.65 0.12 195)",
    },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-6">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 5.2 — Philosophical Architecture</div>
        <h3 className="font-display text-lg font-bold text-white">The Convergence Thesis: What Sotilitarianism Takes From Each Side</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Sotilitarianism doesn't reject capitalism or socialism — it synthesizes the best of both while discarding the failures of each. This is not compromise; it is transcendence.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
        {theses.map((t, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`p-3 rounded-sm border text-left transition-all ${
              step === i ? "border-gold/35 bg-gold/8" : "border-white/8 hover:border-white/15"
            }`}
          >
            <div className="font-mono-data text-[9px] text-white/30 mb-1">Thesis {i + 1}</div>
            <div className="font-body text-xs text-white/60 leading-tight">{t.title.replace("The ", "").replace(" Thesis", "")}</div>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div className="p-4 rounded-sm border border-white/10 bg-white/3">
          <div className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider mb-1">The Claim</div>
          <p className="font-body text-sm text-white/65 italic">"{theses[step].claim}"</p>
        </div>
        <div className="p-4 rounded-sm border border-gold/20 bg-gold/5">
          <div className="font-mono-data text-[10px] text-gold/50 uppercase tracking-wider mb-1">The Sotilitarian Response</div>
          <p className="font-body text-sm text-white/65 leading-relaxed">{theses[step].sotilResponse}</p>
        </div>
        <div className="p-4 rounded-sm border border-teal/20 bg-teal/5">
          <div className="font-mono-data text-[10px] text-teal/50 uppercase tracking-wider mb-1">The Synthesis</div>
          <p className="font-body text-sm font-semibold" style={{ color: theses[step].color }}>{theses[step].outcome}</p>
        </div>
      </div>
    </div>
  );
}

// ─── 3. LONG-TERM OUTCOME PROJECTIONS ─────────────────────────────────────────
const outcomeData = [
  { year: "2025", gini: 0.58, wellbeing: 42, transparency: 15, participation: 12 },
  { year: "2027", gini: 0.55, wellbeing: 48, transparency: 28, participation: 22 },
  { year: "2029", gini: 0.50, wellbeing: 55, transparency: 45, participation: 38 },
  { year: "2031", gini: 0.44, wellbeing: 63, transparency: 62, participation: 55 },
  { year: "2033", gini: 0.37, wellbeing: 72, transparency: 78, participation: 70 },
  { year: "2035", gini: 0.29, wellbeing: 82, transparency: 88, participation: 83 },
  { year: "2037", gini: 0.22, wellbeing: 89, transparency: 94, participation: 91 },
  { year: "2040", gini: 0.17, wellbeing: 95, transparency: 98, participation: 96 },
];

export function OutcomeProjectionChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 5.3 — Long-Term Projections</div>
        <h3 className="font-display text-lg font-bold text-white">The Sotilitarian Horizon: Projected Outcomes 2025–2040</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          As Sotilitarian platforms achieve critical mass, the downstream effects compound. Inequality falls. Wellbeing rises. Transparency becomes the default. Participation becomes the norm. These are not utopian fantasies — they are the logical outputs of the system's design.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={outcomeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="wellbeingGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.72 0.12 75)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="oklch(0.72 0.12 75)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="transparencyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.65 0.12 195)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="oklch(0.65 0.12 195)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="participationGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.68 0.10 75)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="oklch(0.68 0.10 75)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.05 265)" />
          <XAxis dataKey="year" tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} />
          <YAxis tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "monospace", fontSize: "11px", paddingTop: "12px" }}
            formatter={(v) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{v}</span>}
          />
          <Area type="monotone" dataKey="wellbeing" name="Community Wellbeing Index" stroke="oklch(0.72 0.12 75)" strokeWidth={2.5} fill="url(#wellbeingGrad)" dot={false} unit="%" />
          <Area type="monotone" dataKey="transparency" name="Governance Transparency Score" stroke="oklch(0.65 0.12 195)" strokeWidth={2} fill="url(#transparencyGrad)" dot={false} unit="%" />
          <Area type="monotone" dataKey="participation" name="Democratic Participation Rate" stroke="oklch(0.68 0.10 75)" strokeWidth={2} fill="url(#participationGrad)" dot={false} unit="%" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="font-mono-data text-[10px] text-white/25 mt-3 text-center">
        * Projections assume Sotilitarian platform adoption following S-curve model (Figure 4.1). Wellbeing index composite of OECD Better Life indicators. Gini coefficient decline based on verified utility distribution modeling.
      </p>
    </div>
  );
}

// ─── 4. THE DECLARATION: ANIMATED MANIFESTO CARD ─────────────────────────────
export function ManifestoCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const pillars = [
    { verb: "BELIEVE", text: "True wealth is generated through the measurable elevation of the human condition — not through extraction, speculation, or the manufactured scarcity of artificial markets." },
    { verb: "BUILD", text: "A comprehensive framework leveraging trust technology and transparency technology to create a self-regulating, equitable, and highly efficient economic engine that serves the many, not the few." },
    { verb: "DEMAND", text: "An economic model that inherently rewards positive contributions to society, prioritizing human well-being and ecological sustainability over private gain — because the two are not in conflict." },
  ];

  return (
    <div className="my-10 p-8 bg-[oklch(0.12_0.05_265)] border border-gold/25 rounded-sm relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, oklch(0.72 0.12 75) 0, oklch(0.72 0.12 75) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />
      </div>

      <div className="relative z-10">
        <div className="font-mono-data text-xs text-gold/50 uppercase tracking-widest mb-6 text-center">
          The Sotilitarian Declaration
        </div>

        <div className="space-y-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-5 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: `${i * 200}ms`,
              }}
            >
              <div className="flex-shrink-0 w-20 text-right">
                <span className="font-display text-sm font-black text-gold tracking-widest">{p.verb}</span>
              </div>
              <div className="w-px bg-gold/30 self-stretch flex-shrink-0" />
              <p className="font-body text-sm text-white/65 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gold/15 text-center">
          <p className="font-mono-data text-xs text-white/30">
            The revolution will not be centralized. It will be transparent, autonomous, and profoundly equitable.
          </p>
          <p className="font-mono-data text-[10px] text-gold/40 mt-2">
            — Cornelius DeFalco, The Elevation Foundation
          </p>
        </div>
      </div>
    </div>
  );
}

export function PartVVisuals() {
  return (
    <>
      <PostBinarySpectrum />
      <ConvergenceThesis />
      <OutcomeProjectionChart />
      <ManifestoCard />
    </>
  );
}
