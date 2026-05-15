/**
 * PART II VISUALS — Continuous Consent & the Political Framework
 * Interactive charts and diagrams for Sotilitarian Capitalism, Part II
 */
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[oklch(0.18_0.05_265)] border border-gold/30 rounded-sm px-4 py-3 shadow-xl">
      <p className="font-mono-data text-xs text-gold/70 mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="font-body text-sm" style={{ color: entry.color }}>
          {entry.name}: <span className="font-semibold">{entry.value}{entry.unit || ""}</span>
        </p>
      ))}
    </div>
  );
};

// ─── 1. TRADITIONAL DEMOCRACY vs CONTINUOUS CONSENT TIMELINE ─────────────────
const governanceCycleData = [
  { month: "Jan", traditional: 0, continuous: 87 },
  { month: "Feb", traditional: 0, continuous: 82 },
  { month: "Mar", traditional: 0, continuous: 91 },
  { month: "Apr", traditional: 100, continuous: 88 },
  { month: "May", traditional: 0, continuous: 79 },
  { month: "Jun", traditional: 0, continuous: 93 },
  { month: "Jul", traditional: 0, continuous: 85 },
  { month: "Aug", traditional: 0, continuous: 90 },
  { month: "Sep", traditional: 0, continuous: 86 },
  { month: "Oct", traditional: 100, continuous: 94 },
  { month: "Nov", traditional: 0, continuous: 88 },
  { month: "Dec", traditional: 0, continuous: 91 },
];

export function GovernanceCycleChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 2.1 — Governance Responsiveness</div>
        <h3 className="font-display text-lg font-bold text-white">Episodic Voting vs. Continuous Consent</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Traditional democracy concentrates citizen voice into rare electoral events. Continuous Consent maintains a live, rolling mandate — governance as a perpetual conversation, not a quadrennial monologue.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={governanceCycleData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.05 265)" />
          <XAxis dataKey="month" tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} />
          <YAxis tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "monospace", fontSize: "11px", paddingTop: "12px" }}
            formatter={(v) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{v}</span>}
          />
          <Bar dataKey="traditional" name="Traditional Democracy (Episodic)" fill="oklch(0.55 0.18 15)" fillOpacity={0.7} radius={[2, 2, 0, 0]} unit="%" />
          <Bar dataKey="continuous" name="Continuous Consent (Sotilitarian)" fill="oklch(0.72 0.12 75)" fillOpacity={0.8} radius={[2, 2, 0, 0]} unit="%" />
        </BarChart>
      </ResponsiveContainer>
      <p className="font-mono-data text-[10px] text-white/25 mt-3 text-center">
        * Citizen participation rate by month. Traditional democracy spikes at elections; Continuous Consent maintains 79–94% monthly engagement.
      </p>
    </div>
  );
}

// ─── 2. POWER DISTRIBUTION: SHAREHOLDER vs DAO ───────────────────────────────
export function PowerDistributionDiagram() {
  const [view, setView] = useState<"shareholder" | "dao">("shareholder");

  const shareholderData = [
    { label: "Top 1% Shareholders", pct: 54, color: "oklch(0.55 0.18 15)" },
    { label: "Institutional Investors", pct: 28, color: "oklch(0.50 0.15 15)" },
    { label: "Retail Investors", pct: 12, color: "oklch(0.45 0.12 15)" },
    { label: "Employees / Workers", pct: 4, color: "oklch(0.40 0.08 15)" },
    { label: "Community / Public", pct: 2, color: "oklch(0.35 0.05 15)" },
  ];

  const daoData = [
    { label: "Active Contributors", pct: 38, color: "oklch(0.72 0.12 75)" },
    { label: "Long-term Token Holders", pct: 25, color: "oklch(0.68 0.10 75)" },
    { label: "Community Members", pct: 22, color: "oklch(0.65 0.12 195)" },
    { label: "Protocol Developers", pct: 10, color: "oklch(0.60 0.10 195)" },
    { label: "Foundation Reserve", pct: 5, color: "oklch(0.55 0.08 195)" },
  ];

  const data = view === "shareholder" ? shareholderData : daoData;

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 2.2 — Power Architecture</div>
        <h3 className="font-display text-lg font-bold text-white">Who Holds the Power?</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Toggle between the two models. The difference is not cosmetic — it is constitutional.
        </p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView("shareholder")}
          className={`px-4 py-2 font-mono-data text-xs rounded-sm border transition-all ${
            view === "shareholder"
              ? "border-crimson/50 bg-crimson/10 text-crimson"
              : "border-white/15 text-white/40 hover:border-white/30"
          }`}
        >
          Shareholder Model
        </button>
        <button
          onClick={() => setView("dao")}
          className={`px-4 py-2 font-mono-data text-xs rounded-sm border transition-all ${
            view === "dao"
              ? "border-gold/50 bg-gold/10 text-gold"
              : "border-white/15 text-white/40 hover:border-white/30"
          }`}
        >
          DAO Model (Sotilitarian)
        </button>
      </div>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-40 font-body text-xs text-white/60 text-right flex-shrink-0">{item.label}</div>
            <div className="flex-1 h-6 bg-white/5 rounded-sm overflow-hidden">
              <div
                className="h-full rounded-sm flex items-center pl-2 transition-all duration-700"
                style={{ width: `${item.pct}%`, backgroundColor: item.color }}
              >
                <span className="font-mono-data text-[10px] text-black/70 font-bold">{item.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-6 p-4 rounded-sm border ${
        view === "shareholder" ? "border-crimson/20 bg-crimson/5" : "border-gold/20 bg-gold/5"
      }`}>
        {view === "shareholder" ? (
          <p className="font-body text-sm text-white/60">
            <span className="text-crimson font-semibold">The problem:</span> 54% of governance power rests with 1% of participants. The system is not broken — it is working exactly as designed, for exactly the people who designed it.
          </p>
        ) : (
          <p className="font-body text-sm text-white/60">
            <span className="text-gold font-semibold">The solution:</span> Power is distributed across contributors, holders, and community members. No single bloc commands a majority. Governance requires coalition — and coalition requires consensus.
          </p>
        )}
      </div>
    </div>
  );
}

// ─── 3. LIQUID DEMOCRACY SPECTRUM ─────────────────────────────────────────────
export function LiquidDemocracySpectrum() {
  const [activePoint, setActivePoint] = useState(2);

  const points = [
    {
      id: 0,
      label: "Direct Democracy",
      desc: "Every citizen votes on every issue. Pure but impractical at scale — voter fatigue, information overload, susceptibility to manipulation.",
      pos: 5,
      color: "oklch(0.65 0.12 195)",
    },
    {
      id: 1,
      label: "Representative Democracy",
      desc: "Citizens elect proxies who vote on their behalf. Scalable but creates principal-agent problems — representatives serve their own interests, not constituents'.",
      pos: 28,
      color: "oklch(0.60 0.10 195)",
    },
    {
      id: 2,
      label: "Liquid Democracy",
      desc: "Citizens can vote directly OR delegate their vote to a trusted expert — and revoke that delegation at any time. The best of both worlds.",
      pos: 52,
      color: "oklch(0.72 0.12 75)",
    },
    {
      id: 3,
      label: "Continuous Consent",
      desc: "Liquid democracy + real-time on-chain execution + Proof of Utility weighting. Governance is not an event — it is a living, breathing protocol.",
      pos: 78,
      color: "oklch(0.72 0.12 75)",
    },
    {
      id: 4,
      label: "Autonomous Governance",
      desc: "Smart contracts execute governance decisions automatically based on pre-agreed rules. Human intervention only for constitutional amendments.",
      pos: 95,
      color: "oklch(0.72 0.12 75)",
    },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 2.3 — Governance Evolution</div>
        <h3 className="font-display text-lg font-bold text-white">The Liquid Democracy Spectrum</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Governance has been evolving for millennia. Sotilitarianism represents the next two steps on the spectrum — click each point to explore.
        </p>
      </div>

      {/* Spectrum bar */}
      <div className="relative mb-8 mt-10">
        <div className="h-1 bg-white/10 rounded-full" />
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-teal/40 to-gold/80 rounded-full" style={{ width: "100%" }} />

        {points.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePoint(p.id)}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-200"
            style={{ left: `${p.pos}%` }}
          >
            <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              activePoint === p.id
                ? "scale-150 border-gold bg-gold"
                : "border-white/40 bg-[oklch(0.16_0.05_265)] hover:border-gold/60"
            }`} />
            <div className={`absolute top-5 left-1/2 -translate-x-1/2 font-mono-data text-[9px] whitespace-nowrap transition-all ${
              activePoint === p.id ? "text-gold" : "text-white/35"
            }`}>
              {p.label.split(" ").slice(0, 1).join(" ")}
            </div>
          </button>
        ))}
      </div>

      {/* Active point detail */}
      <div className="mt-6 p-5 rounded-sm border border-gold/25 bg-gold/5 min-h-[100px] transition-all duration-300">
        <div className="font-display text-base font-bold text-gold mb-2">
          {points[activePoint].label}
          {activePoint >= 2 && (
            <span className="ml-2 font-mono-data text-[10px] text-gold/50 border border-gold/30 px-2 py-0.5 rounded-sm">
              {activePoint === 2 ? "Foundation" : activePoint === 3 ? "Sotilitarian" : "Future State"}
            </span>
          )}
        </div>
        <p className="font-body text-sm text-white/65 leading-relaxed">{points[activePoint].desc}</p>
      </div>
    </div>
  );
}

// ─── 4. CONSENT VELOCITY CHART ────────────────────────────────────────────────
const consentVelocityData = [
  { event: "Policy\nProposed", traditional: 0, continuous: 100 },
  { event: "Public\nAwareness", traditional: 5, continuous: 95 },
  { event: "Debate\nPeriod", traditional: 15, continuous: 88 },
  { event: "Vote\nScheduled", traditional: 8, continuous: 92 },
  { event: "Election\nDay", traditional: 100, continuous: 91 },
  { event: "Policy\nImplemented", traditional: 65, continuous: 89 },
  { event: "Feedback\nLoop", traditional: 2, continuous: 94 },
  { event: "Adjustment\nMade", traditional: 0, continuous: 87 },
];

export function ConsentVelocityChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 2.4 — Governance Velocity</div>
        <h3 className="font-display text-lg font-bold text-white">Citizen Engagement Across the Policy Lifecycle</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Traditional democracy collapses citizen engagement into a single event. Continuous Consent maintains high engagement at every stage — including the feedback loop that traditional systems almost never close.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={consentVelocityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.05 265)" />
          <XAxis dataKey="event" tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 9, fontFamily: "monospace" }} />
          <YAxis tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "monospace", fontSize: "11px", paddingTop: "12px" }}
            formatter={(v) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{v}</span>}
          />
          <Line type="monotone" dataKey="traditional" name="Traditional Democracy" stroke="oklch(0.55 0.18 15)" strokeWidth={2} dot={{ fill: "oklch(0.55 0.18 15)", r: 4 }} unit="%" />
          <Line type="monotone" dataKey="continuous" name="Continuous Consent" stroke="oklch(0.72 0.12 75)" strokeWidth={2.5} dot={{ fill: "oklch(0.72 0.12 75)", r: 4 }} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PartIIVisuals() {
  return (
    <>
      <GovernanceCycleChart />
      <PowerDistributionDiagram />
      <LiquidDemocracySpectrum />
      <ConsentVelocityChart />
    </>
  );
}
