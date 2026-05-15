/**
 * PART IV VISUALS — Implementation Strategy: The Trojan Horse Effect
 * S-curve adoption, disruption timeline, and infiltration strategy map
 */
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  ScatterChart,
  Scatter,
  ZAxis,
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

// ─── 1. S-CURVE ADOPTION MODEL ────────────────────────────────────────────────
const adoptionData = [
  { year: "Y1", traditional: 95, sotilitarian: 2, tipping: 0 },
  { year: "Y2", traditional: 93, sotilitarian: 5, tipping: 0 },
  { year: "Y3", traditional: 90, sotilitarian: 11, tipping: 0 },
  { year: "Y4", traditional: 85, sotilitarian: 22, tipping: 0 },
  { year: "Y5", traditional: 78, sotilitarian: 38, tipping: 50 },
  { year: "Y6", traditional: 68, sotilitarian: 55, tipping: 50 },
  { year: "Y7", traditional: 55, sotilitarian: 70, tipping: 0 },
  { year: "Y8", traditional: 42, sotilitarian: 82, tipping: 0 },
  { year: "Y9", traditional: 30, sotilitarian: 90, tipping: 0 },
  { year: "Y10", traditional: 20, sotilitarian: 95, tipping: 0 },
];

export function SCurveAdoptionChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 4.1 — Adoption Dynamics</div>
        <h3 className="font-display text-lg font-bold text-white">The S-Curve: How Sotilitarianism Displaces the Status Quo</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Disruptive systems don't win by fighting the incumbent — they win by being undeniably better. The S-curve is not a prediction; it is a historical pattern. The tipping point arrives when the cost of staying in the old system exceeds the cost of switching.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={adoptionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="tradAdopt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.55 0.18 15)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="oklch(0.55 0.18 15)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sotilAdopt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="oklch(0.72 0.12 75)" stopOpacity={0.35} />
              <stop offset="95%" stopColor="oklch(0.72 0.12 75)" stopOpacity={0} />
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
          <Area type="monotone" dataKey="traditional" name="Extractive Capitalism (Market Share)" stroke="oklch(0.55 0.18 15)" strokeWidth={2} fill="url(#tradAdopt)" dot={false} unit="%" />
          <Area type="monotone" dataKey="sotilitarian" name="Sotilitarian Platforms (Adoption)" stroke="oklch(0.72 0.12 75)" strokeWidth={2.5} fill="url(#sotilAdopt)" dot={false} unit="%" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center gap-3 p-3 bg-gold/5 border border-gold/20 rounded-sm">
        <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
        <p className="font-body text-xs text-white/55">
          <span className="text-gold font-semibold">The Tipping Point (Year 5–6):</span> When Sotilitarian platforms reach ~38–55% adoption, network effects accelerate the transition. Traditional systems face a choice: adapt or become obsolete.
        </p>
      </div>
    </div>
  );
}

// ─── 2. TROJAN HORSE INFILTRATION MAP ─────────────────────────────────────────
export function TrojanHorseMap() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Phase 1: The Gift",
      subtitle: "Years 1–2 · Appear Non-Threatening",
      color: "oklch(0.65 0.12 195)",
      desc: "Sotilitarian platforms enter the market as superior consumer products — not as ideological challengers. WeSolar offers cheaper energy. Transparently offers better governance tools. The Elevation Engine offers higher yields. Users adopt them for purely rational, self-interested reasons.",
      tactics: [
        "Launch as utility products, not political manifestos",
        "Offer measurably better economics than incumbents",
        "Build user base through word-of-mouth and demonstrated results",
        "Avoid confrontational positioning with established institutions",
      ],
    },
    {
      id: 1,
      title: "Phase 2: The Spread",
      subtitle: "Years 3–5 · Network Effects Compound",
      color: "oklch(0.68 0.10 75)",
      desc: "As user bases grow, network effects kick in. More participants mean more liquidity, better governance decisions, and higher yields. The gap between Sotilitarian platforms and traditional alternatives widens. Early adopters become evangelists — not because they were recruited, but because the system works.",
      tactics: [
        "Leverage network effects to widen performance gap",
        "Enable user-to-user onboarding through incentive structures",
        "Expand into adjacent markets using treasury-funded grants",
        "Build interoperability with existing financial infrastructure",
      ],
    },
    {
      id: 2,
      title: "Phase 3: The Reveal",
      subtitle: "Years 5–7 · Critical Mass Achieved",
      color: "oklch(0.72 0.12 75)",
      desc: "At critical mass, the Trojan Horse opens. Users who adopted the platform for economic reasons discover they are now participants in a radically different governance system. They have been governing themselves all along — they just didn't call it that. The ideology follows the utility; it does not precede it.",
      tactics: [
        "Activate governance features as user sophistication grows",
        "Launch educational campaigns on the philosophical underpinnings",
        "Propose integration standards that legacy systems must adopt to compete",
        "Begin direct engagement with regulatory frameworks from a position of strength",
      ],
    },
    {
      id: 3,
      title: "Phase 4: The Transformation",
      subtitle: "Years 8–10 · System-Level Change",
      color: "oklch(0.72 0.12 75)",
      desc: "Traditional institutions face a stark choice: integrate Sotilitarian principles or lose users to platforms that have. The economic logic is irresistible. Banks begin offering DAO-governed products. Corporations adopt on-chain transparency. Governments experiment with continuous consent mechanisms. The revolution was not televised — it was tokenized.",
      tactics: [
        "Partner with forward-thinking institutions seeking competitive advantage",
        "Provide open-source tooling for traditional institutions to adopt Sotilitarian principles",
        "Advocate for regulatory frameworks that recognize decentralized governance",
        "Document and publish case studies demonstrating superior outcomes",
      ],
    },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-6">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 4.2 — Strategic Architecture</div>
        <h3 className="font-display text-lg font-bold text-white">The Trojan Horse Effect: A Four-Phase Disruption Strategy</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          The most effective revolutions don't announce themselves. They arrive as improvements. Click through each phase of the Sotilitarian infiltration strategy.
        </p>
      </div>

      {/* Phase selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={`p-3 rounded-sm border text-left transition-all duration-200 ${
              activePhase === phase.id
                ? "border-gold/40 bg-gold/8"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="font-mono-data text-[10px] font-bold mb-1" style={{ color: activePhase === phase.id ? phase.color : "oklch(0.5 0.02 265)" }}>
              Phase {phase.id + 1}
            </div>
            <div className="font-body text-xs text-white/50 leading-tight">{phase.title.replace(`Phase ${phase.id + 1}: `, "")}</div>
          </button>
        ))}
      </div>

      {/* Active phase detail */}
      <div className="p-5 rounded-sm border border-gold/20 bg-gold/5">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-10 h-10 rounded-sm border flex items-center justify-center font-mono-data text-sm font-bold flex-shrink-0"
            style={{ borderColor: phases[activePhase].color, color: phases[activePhase].color }}
          >
            {activePhase + 1}
          </div>
          <div>
            <div className="font-display text-base font-bold text-gold">{phases[activePhase].title}</div>
            <div className="font-mono-data text-[10px] text-white/35 uppercase tracking-wider">{phases[activePhase].subtitle}</div>
          </div>
        </div>
        <p className="font-body text-sm text-white/65 leading-relaxed mb-4">{phases[activePhase].desc}</p>
        <div>
          <div className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider mb-2">Key Tactics</div>
          <ul className="space-y-1.5">
            {phases[activePhase].tactics.map((t, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-xs text-white/50">
                <span className="text-gold/50 flex-shrink-0 mt-0.5">→</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── 3. ECONOMIC DISRUPTION TIMELINE ─────────────────────────────────────────
const disruptionData = [
  { year: "2024", incumbentPower: 98, sotilPower: 2, incumbentCost: 100, sotilCost: 85 },
  { year: "2025", incumbentPower: 96, sotilPower: 5, incumbentCost: 102, sotilCost: 72 },
  { year: "2026", incumbentPower: 92, sotilPower: 12, incumbentCost: 105, sotilCost: 58 },
  { year: "2027", incumbentPower: 85, sotilPower: 24, incumbentCost: 108, sotilCost: 44 },
  { year: "2028", incumbentPower: 74, sotilPower: 42, incumbentCost: 112, sotilCost: 32 },
  { year: "2029", incumbentPower: 60, sotilPower: 60, incumbentCost: 118, sotilCost: 22 },
  { year: "2030", incumbentPower: 45, sotilPower: 75, incumbentCost: 125, sotilCost: 15 },
  { year: "2031", incumbentPower: 32, sotilPower: 85, incumbentCost: 134, sotilCost: 10 },
  { year: "2032", incumbentPower: 22, sotilPower: 92, incumbentCost: 145, sotilCost: 7 },
];

export function DisruptionTimelineChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 4.3 — Disruption Dynamics</div>
        <h3 className="font-display text-lg font-bold text-white">Power vs. Cost: The Incumbent's Dilemma</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          As Sotilitarian platforms gain market power, incumbent costs rise (regulatory burden, competitive pressure, trust deficits) while Sotilitarian costs fall (network effects, automation, community governance). The crossover is not a question of if — only when.
        </p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={disruptionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.05 265)" />
          <XAxis dataKey="year" tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} />
          <YAxis tick={{ fill: "oklch(0.6 0.02 265)", fontSize: 11, fontFamily: "monospace" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "monospace", fontSize: "11px", paddingTop: "12px" }}
            formatter={(v) => <span style={{ color: "oklch(0.7 0.02 265)" }}>{v}</span>}
          />
          <Line type="monotone" dataKey="incumbentPower" name="Incumbent Market Power" stroke="oklch(0.55 0.18 15)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="sotilPower" name="Sotilitarian Platform Power" stroke="oklch(0.72 0.12 75)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="incumbentCost" name="Incumbent Operating Cost Index" stroke="oklch(0.55 0.18 15)" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
          <Line type="monotone" dataKey="sotilCost" name="Sotilitarian Cost Index" stroke="oklch(0.72 0.12 75)" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── 4. IMPLEMENTATION READINESS MATRIX ───────────────────────────────────────
export function ImplementationReadinessMatrix() {
  const sectors = [
    { name: "Community Energy", readiness: 88, impact: 92, size: 45, color: "oklch(0.72 0.12 75)" },
    { name: "Local Governance", readiness: 72, impact: 95, size: 60, color: "oklch(0.72 0.12 75)" },
    { name: "Community Banking", readiness: 65, impact: 88, size: 55, color: "oklch(0.65 0.12 195)" },
    { name: "Supply Chain", readiness: 78, impact: 75, size: 40, color: "oklch(0.65 0.12 195)" },
    { name: "Healthcare Access", readiness: 55, impact: 98, size: 70, color: "oklch(0.65 0.12 195)" },
    { name: "Education Finance", readiness: 70, impact: 85, size: 50, color: "oklch(0.65 0.12 195)" },
    { name: "Real Estate", readiness: 60, impact: 80, size: 65, color: "oklch(0.55 0.08 265)" },
    { name: "Insurance", readiness: 45, impact: 82, size: 55, color: "oklch(0.55 0.08 265)" },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 4.4 — Strategic Prioritization</div>
        <h3 className="font-display text-lg font-bold text-white">Sector Readiness vs. Impact: Where to Strike First</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Not all sectors are equally ready for Sotilitarian disruption. The Elevation Foundation prioritizes high-readiness, high-impact sectors first — building proof of concept before expanding to more resistant markets.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {sectors.map((sector, i) => (
          <div key={i} className="p-3 bg-white/3 border border-white/8 rounded-sm hover:border-gold/20 transition-colors">
            <div className="font-body text-xs font-semibold text-white/70 mb-3">{sector.name}</div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono-data text-[9px] text-white/30">Readiness</span>
                  <span className="font-mono-data text-[9px]" style={{ color: sector.color }}>{sector.readiness}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${sector.readiness}%`, backgroundColor: sector.color }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-mono-data text-[9px] text-white/30">Impact</span>
                  <span className="font-mono-data text-[9px]" style={{ color: sector.color }}>{sector.impact}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${sector.impact}%`, backgroundColor: sector.color, opacity: 0.7 }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gold/5 border border-gold/20 rounded-sm">
        <p className="font-body text-xs text-white/55">
          <span className="text-gold font-semibold">Priority targets:</span> Community Energy (WeSolar), Local Governance (Transparently), and Community Banking (Elevation Engine) represent the highest readiness-to-impact ratio — and are already in active development.
        </p>
      </div>
    </div>
  );
}

export function PartIVVisuals() {
  return (
    <>
      <SCurveAdoptionChart />
      <TrojanHorseMap />
      <DisruptionTimelineChart />
      <ImplementationReadinessMatrix />
    </>
  );
}
