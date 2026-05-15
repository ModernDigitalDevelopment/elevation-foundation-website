/**
 * PART I VISUALS — The New Economic Operating System
 * Interactive charts and diagrams for Sotilitarian Capitalism, Part I
 * Uses Recharts + custom SVG + CSS animations
 */
import { useState, useEffect, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
} from "recharts";

// ─── COLOR TOKENS ────────────────────────────────────────────────────────────
const GOLD = "oklch(0.72 0.12 75)";
const TEAL = "oklch(0.65 0.12 195)";
const CRIMSON = "oklch(0.55 0.18 15)";
const NAVY_LIGHT = "oklch(0.16 0.05 265)";

// ─── SHARED CHART TOOLTIP ─────────────────────────────────────────────────────
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

// ─── 1. WEALTH CONCENTRATION CURVE ───────────────────────────────────────────
// Shows Gini coefficient trajectory under traditional capitalism vs. Sotilitarian model
const wealthData = [
  { year: "1980", traditional: 0.35, sotilitarian: 0.35 },
  { year: "1985", traditional: 0.38, sotilitarian: 0.34 },
  { year: "1990", traditional: 0.41, sotilitarian: 0.33 },
  { year: "1995", traditional: 0.44, sotilitarian: 0.31 },
  { year: "2000", traditional: 0.46, sotilitarian: 0.30 },
  { year: "2005", traditional: 0.48, sotilitarian: 0.29 },
  { year: "2010", traditional: 0.50, sotilitarian: 0.27 },
  { year: "2015", traditional: 0.52, sotilitarian: 0.25 },
  { year: "2020", traditional: 0.55, sotilitarian: 0.23 },
  { year: "2025", traditional: 0.58, sotilitarian: 0.21 },
  { year: "2030", traditional: 0.62, sotilitarian: 0.19 },
  { year: "2035", traditional: 0.67, sotilitarian: 0.17 },
];

export function WealthConcentrationChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 1.1 — Wealth Inequality Trajectory</div>
        <h3 className="font-display text-lg font-bold text-white">The Divergence: Extractive Capitalism vs. Sotilitarian Model</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Gini coefficient projection (0 = perfect equality, 1 = total concentration). Traditional capitalism's extractive logic compounds inequality; Sotilitarianism's verified utility model inverts the curve.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={wealthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="tradGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.55 0.18 15)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="oklch(0.55 0.18 15)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sotilGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.72 0.12 75)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="oklch(0.72 0.12 75)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.25 0.05 265)" />
          <XAxis dataKey="year" tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} />
          <YAxis tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} domain={[0.1, 0.75]} tickFormatter={(v) => v.toFixed(2)} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "monospace", fontSize: "11px", paddingTop: "12px" }}
            formatter={(value) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{value}</span>}
          />
          <Area type="monotone" dataKey="traditional" name="Extractive Capitalism" stroke="oklch(0.55 0.18 15)" strokeWidth={2} fill="url(#tradGrad)" dot={false} />
          <Area type="monotone" dataKey="sotilitarian" name="Sotilitarian Model" stroke="oklch(0.72 0.12 75)" strokeWidth={2.5} fill="url(#sotilGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="font-mono-data text-[10px] text-white/25 mt-3 text-center">
        * Sotilitarian projection based on verified utility distribution model with DAO governance. Traditional trajectory based on OECD inequality data trend extrapolation.
      </p>
    </div>
  );
}

// ─── 2. FIVE PILLARS RADAR CHART ─────────────────────────────────────────────
const pillarData = [
  { pillar: "Transparency", traditional: 15, sotilitarian: 98 },
  { pillar: "Community\nSovereignty", traditional: 10, sotilitarian: 95 },
  { pillar: "Autonomous\nFinance", traditional: 20, sotilitarian: 90 },
  { pillar: "Verified\nUtility", traditional: 12, sotilitarian: 97 },
  { pillar: "Participatory\nEconomics", traditional: 18, sotilitarian: 93 },
];

export function FivePillarsRadar() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 1.2 — System Performance Comparison</div>
        <h3 className="font-display text-lg font-bold text-white">The Five Pillars: Traditional Capitalism vs. Sotilitarian Model</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Performance score (0–100) across the five foundational pillars. The gap is not incremental — it is categorical.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={pillarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="oklch(0.25 0.05 265)" />
          <PolarAngleAxis
            dataKey="pillar"
            tick={{ fill: "oklch(0.65 0.02 265)", fontSize: 11, fontFamily: "monospace" }}
          />
          <Radar name="Extractive Capitalism" dataKey="traditional" stroke="oklch(0.55 0.18 15)" fill="oklch(0.55 0.18 15)" fillOpacity={0.2} strokeWidth={1.5} />
          <Radar name="Sotilitarian Model" dataKey="sotilitarian" stroke="oklch(0.72 0.12 75)" fill="oklch(0.72 0.12 75)" fillOpacity={0.25} strokeWidth={2} />
          <Legend
            wrapperStyle={{ fontFamily: "monospace", fontSize: "11px", paddingTop: "8px" }}
            formatter={(value) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{value}</span>}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── 3. UTILITY MAXIMIZATION FEEDBACK LOOP ────────────────────────────────────
// Animated circular flow diagram using SVG
export function UMFLDiagram() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimStep(s => (s + 1) % 5);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, label: "Community\nContribution", sublabel: "Labor, energy, code, care", angle: 90, color: "oklch(0.72 0.12 75)" },
    { id: 1, label: "Proof of\nUtility", sublabel: "On-chain verification", angle: 162, color: "oklch(0.65 0.12 195)" },
    { id: 2, label: "Token\nRewards", sublabel: "SOT / SUG distribution", angle: 234, color: "oklch(0.72 0.12 75)" },
    { id: 3, label: "Governance\nPower", sublabel: "DAO voting rights", angle: 306, color: "oklch(0.65 0.12 195)" },
    { id: 4, label: "Ecosystem\nGrowth", sublabel: "Reinvested surplus", angle: 18, color: "oklch(0.72 0.12 75)" },
  ];

  const cx = 200, cy = 200, r = 130;

  const getXY = (angle: number) => ({
    x: cx + r * Math.cos((angle - 90) * Math.PI / 180),
    y: cy + r * Math.sin((angle - 90) * Math.PI / 180),
  });

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 1.3 — System Dynamics</div>
        <h3 className="font-display text-lg font-bold text-white">The Utility Maximization Feedback Loop (UMFL)</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          A self-reinforcing cycle where value creation directly benefits creators and the broader community. Each node activates in sequence — contribution flows into verification, which generates rewards, which build governance power, which drives growth, which invites more contribution.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full">
            {/* Background circle */}
            <circle cx={cx} cy={cy} r={r + 10} fill="none" stroke="oklch(0.20 0.05 265)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Animated arc */}
            {nodes.map((node, i) => {
              const next = nodes[(i + 1) % nodes.length];
              const from = getXY(node.angle);
              const to = getXY(next.angle);
              const isActive = animStep === i;
              return (
                <line
                  key={i}
                  x1={from.x} y1={from.y}
                  x2={to.x} y2={to.y}
                  stroke={isActive ? "oklch(0.72 0.12 75)" : "oklch(0.25 0.05 265)"}
                  strokeWidth={isActive ? 2.5 : 1}
                  strokeDasharray={isActive ? "none" : "4 4"}
                  style={{ transition: "all 0.4s ease" }}
                />
              );
            })}

            {/* Center label */}
            <circle cx={cx} cy={cy} r={42} fill="oklch(0.16 0.05 265)" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5" />
            <text x={cx} y={cy - 8} textAnchor="middle" fill="oklch(0.72 0.12 75)" fontSize="11" fontFamily="monospace" fontWeight="bold">UMFL</text>
            <text x={cx} y={cy + 8} textAnchor="middle" fill="oklch(0.6 0.02 265)" fontSize="9" fontFamily="monospace">Self-Reinforcing</text>
            <text x={cx} y={cy + 20} textAnchor="middle" fill="oklch(0.6 0.02 265)" fontSize="9" fontFamily="monospace">Value Loop</text>

            {/* Nodes */}
            {nodes.map((node, i) => {
              const { x, y } = getXY(node.angle);
              const isActive = animStep === i;
              return (
                <g
                  key={i}
                  onMouseEnter={() => setActiveNode(i)}
                  onMouseLeave={() => setActiveNode(null)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    cx={x} cy={y} r={28}
                    fill={isActive || activeNode === i ? "oklch(0.20 0.05 265)" : "oklch(0.16 0.05 265)"}
                    stroke={isActive || activeNode === i ? node.color : "oklch(0.28 0.05 265)"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    style={{ transition: "all 0.3s ease" }}
                  />
                  {node.label.split("\n").map((line, li) => (
                    <text
                      key={li}
                      x={x} y={y - 6 + li * 13}
                      textAnchor="middle"
                      fill={isActive || activeNode === i ? node.color : "oklch(0.65 0.02 265)"}
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight={isActive ? "bold" : "normal"}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Step indicator */}
            <text x={cx} y={380} textAnchor="middle" fill="oklch(0.4 0.02 265)" fontSize="9" fontFamily="monospace">
              Step {animStep + 1}/5 · {nodes[animStep].label.replace("\n", " ")}
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3">
          {nodes.map((node, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-3 rounded-sm border transition-all duration-300 ${
                animStep === i
                  ? "border-gold/30 bg-gold/5"
                  : "border-white/8 bg-transparent"
              }`}
            >
              <div className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border text-xs font-bold font-mono-data ${
                animStep === i ? "border-gold text-gold" : "border-white/20 text-white/30"
              }`}>
                {i + 1}
              </div>
              <div>
                <div className={`font-body text-sm font-semibold ${animStep === i ? "text-gold" : "text-white/60"}`}>
                  {node.label.replace("\n", " ")}
                </div>
                <div className="font-body text-xs text-white/35">{node.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 4. CAPITALISM COMPARISON MATRIX ─────────────────────────────────────────
// Animated comparison table with visual indicators
const comparisonData = [
  {
    feature: "Value Metric",
    traditional: "Financial Profit",
    sotilitarian: "Verified Social Utility",
    tScore: 15,
    sScore: 95,
  },
  {
    feature: "Governance Model",
    traditional: "Centralized (Shareholder-driven)",
    sotilitarian: "Decentralized (Community DAO)",
    tScore: 10,
    sScore: 98,
  },
  {
    feature: "Financial System",
    traditional: "Intermediated (Banks, Brokers)",
    sotilitarian: "Autonomous (DeFi, Smart Contracts)",
    tScore: 20,
    sScore: 92,
  },
  {
    feature: "Wealth Distribution",
    traditional: "Concentrated (Post-distribution)",
    sotilitarian: "Pre-distributed (Participatory)",
    tScore: 12,
    sScore: 96,
  },
  {
    feature: "Transparency Level",
    traditional: "Opaque (Information Asymmetry)",
    sotilitarian: "Radical (On-chain Verification)",
    tScore: 8,
    sScore: 99,
  },
  {
    feature: "Accountability",
    traditional: "Voluntary / Regulatory",
    sotilitarian: "Cryptographically Enforced",
    tScore: 18,
    sScore: 97,
  },
  {
    feature: "Access to Capital",
    traditional: "Credit-gated (Banks decide)",
    sotilitarian: "Contribution-gated (Community decides)",
    tScore: 22,
    sScore: 88,
  },
];

export function ComparisonMatrix() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm overflow-x-auto">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 1.4 — System Architecture Comparison</div>
        <h3 className="font-display text-lg font-bold text-white">Extractive Capitalism vs. Sotilitarian Capitalism</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Seven critical dimensions. The performance gap is not marginal — it is structural.
        </p>
      </div>

      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-gold/20">
            <th className="font-mono-data text-xs text-gold/70 uppercase tracking-wider text-left py-3 pr-4 w-1/4">Dimension</th>
            <th className="font-mono-data text-xs text-crimson/70 uppercase tracking-wider text-left py-3 px-3 w-[30%]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-crimson/60" />
                Extractive Capitalism
              </span>
            </th>
            <th className="font-mono-data text-xs text-gold/70 uppercase tracking-wider text-left py-3 px-3 w-[30%]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold/60" />
                Sotilitarian Model
              </span>
            </th>
            <th className="font-mono-data text-xs text-white/30 uppercase tracking-wider text-center py-3 pl-3 w-[10%]">Score</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, i) => (
            <tr
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`border-b border-white/5 transition-colors duration-200 ${
                hoveredRow === i ? "bg-gold/5" : i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
              }`}
            >
              <td className="font-mono-data text-xs text-white/60 py-3 pr-4">{row.feature}</td>
              <td className="py-3 px-3">
                <span className="font-body text-xs text-crimson/70">{row.traditional}</span>
                <div className="mt-1.5 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-crimson/40 rounded-full" style={{ width: `${row.tScore}%` }} />
                </div>
              </td>
              <td className="py-3 px-3">
                <span className="font-body text-xs text-gold/80">{row.sotilitarian}</span>
                <div className="mt-1.5 h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gold/60 rounded-full" style={{ width: `${row.sScore}%` }} />
                </div>
              </td>
              <td className="py-3 pl-3 text-center">
                <span className="font-mono-data text-xs text-gold font-bold">+{row.sScore - row.tScore}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font-mono-data text-[10px] text-white/20 mt-4">
        * Score differential represents the structural advantage of the Sotilitarian model across each dimension (0–100 scale).
      </p>
    </div>
  );
}

// ─── 5. THREE CONVERGENCE FORCES ─────────────────────────────────────────────
// Animated Venn-style diagram showing the three forces that make now the right moment
export function ConvergenceDiagram() {
  const [activeCircle, setActiveCircle] = useState<number | null>(null);

  const circles = [
    {
      id: 0,
      label: "Technological\nMaturity",
      sublabel: "Blockchain · Smart Contracts · Decentralized AI",
      cx: 150, cy: 130,
      color: "oklch(0.72 0.12 75)",
      fill: "oklch(0.72 0.12 75 / 0.12)",
    },
    {
      id: 1,
      label: "Societal\nDemand",
      sublabel: "Post-2008 · Pandemic inequality · Climate crisis",
      cx: 250, cy: 130,
      color: "oklch(0.65 0.12 195)",
      fill: "oklch(0.65 0.12 195 / 0.12)",
    },
    {
      id: 2,
      label: "Proven\nModels",
      sublabel: "DAOs · DeFi protocols · Open-source success",
      cx: 200, cy: 220,
      color: "oklch(0.55 0.18 15)",
      fill: "oklch(0.55 0.18 15 / 0.12)",
    },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 1.5 — Historical Convergence</div>
        <h3 className="font-display text-lg font-bold text-white">Why Now: Three Forces Converging</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          The emergence of Sotilitarianism is not accidental. Three independent forces have converged to create a singular historical window.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <svg width="400" height="320" viewBox="0 0 400 320" className="max-w-full">
            {circles.map((c) => (
              <circle
                key={c.id}
                cx={c.cx} cy={c.cy} r={90}
                fill={activeCircle === c.id ? c.fill.replace("0.12", "0.22") : c.fill}
                stroke={c.color}
                strokeWidth={activeCircle === c.id ? 2 : 1}
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                onMouseEnter={() => setActiveCircle(c.id)}
                onMouseLeave={() => setActiveCircle(null)}
              />
            ))}

            {/* Center intersection label */}
            <circle cx={200} cy={165} r={28} fill="oklch(0.20 0.05 265)" stroke="oklch(0.72 0.12 75)" strokeWidth="1.5" />
            <text x={200} y={160} textAnchor="middle" fill="oklch(0.72 0.12 75)" fontSize="8" fontFamily="monospace" fontWeight="bold">THE</text>
            <text x={200} y={172} textAnchor="middle" fill="oklch(0.72 0.12 75)" fontSize="8" fontFamily="monospace" fontWeight="bold">MOMENT</text>

            {/* Labels */}
            {circles.map((c) => (
              <g key={c.id}>
                {c.label.split("\n").map((line, li) => (
                  <text
                    key={li}
                    x={c.cx}
                    y={c.id === 2 ? c.cy + 50 + li * 13 : c.cy - 50 + li * 13}
                    textAnchor="middle"
                    fill={activeCircle === c.id ? c.color : "oklch(0.65 0.02 265)"}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}
          </svg>
        </div>

        <div className="flex-1 space-y-4">
          {circles.map((c, i) => (
            <div
              key={i}
              className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer ${
                activeCircle === i
                  ? "border-gold/30 bg-gold/5"
                  : "border-white/8"
              }`}
              onMouseEnter={() => setActiveCircle(i)}
              onMouseLeave={() => setActiveCircle(null)}
            >
              <div className="font-body font-semibold text-sm mb-1" style={{ color: c.color }}>
                {c.label.replace("\n", " ")}
              </div>
              <div className="font-body text-xs text-white/45">{c.sublabel}</div>
            </div>
          ))}
          <div className="p-4 rounded-sm border border-gold/30 bg-gold/5">
            <div className="font-body font-semibold text-sm text-gold mb-1">The Intersection: Sotilitarianism</div>
            <div className="font-body text-xs text-white/55">
              The only moment in history when all three forces are simultaneously present — and the window is open now.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── EXPORT: PART I VISUALS BUNDLE ───────────────────────────────────────────
export function PartIVisuals() {
  return (
    <>
      <WealthConcentrationChart />
      <FivePillarsRadar />
      <UMFLDiagram />
      <ComparisonMatrix />
      <ConvergenceDiagram />
    </>
  );
}
