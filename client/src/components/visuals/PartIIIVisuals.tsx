/**
 * PART III VISUALS — The Five-Layer Technical Architecture
 * Interactive diagrams for the Trust Kernel Stack, token flows, and smart contract execution
 */
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
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

// ─── 1. TRUST KERNEL STACK — Layered Architecture Diagram ────────────────────
const layers = [
  {
    id: 4,
    name: "Layer 5: Application Layer",
    sublabel: "DApps · Transparently · WeSolar · Elevation Engine",
    color: "oklch(0.72 0.12 75)",
    bg: "oklch(0.72 0.12 75 / 0.12)",
    border: "oklch(0.72 0.12 75 / 0.35)",
    desc: "User-facing applications that leverage the underlying infrastructure. This is where the revolution becomes tangible — governance tools, energy markets, and autonomous finance protocols that communities can actually use.",
    tech: ["Transparently DApp", "WeSolar Protocol", "Elevation Engine", "Community Treasury"],
  },
  {
    id: 3,
    name: "Layer 4: Governance Layer",
    sublabel: "DAO · Continuous Consent · Liquid Democracy · Proof of Utility",
    color: "oklch(0.68 0.10 75)",
    bg: "oklch(0.68 0.10 75 / 0.10)",
    border: "oklch(0.68 0.10 75 / 0.30)",
    desc: "The political brain of the system. Smart contracts encode governance rules; token holders vote on proposals; Proof of Utility weights votes by demonstrated contribution rather than mere capital holdings.",
    tech: ["DAO Framework", "Voting Contracts", "Proposal Engine", "Delegation Registry"],
  },
  {
    id: 2,
    name: "Layer 3: Token Economy Layer",
    sublabel: "SOT · SUG · SST · Three-Token Architecture",
    color: "oklch(0.65 0.12 195)",
    bg: "oklch(0.65 0.12 195 / 0.10)",
    border: "oklch(0.65 0.12 195 / 0.30)",
    desc: "The monetary nervous system. Three tokens serve distinct functions: SOT for governance, SUG for utility and platform access, SST as a USD-pegged stable medium of exchange. Each token is purpose-built; none is speculative by design.",
    tech: ["SOT Contract", "SUG Contract", "SST Mint/Burn", "Treasury Management"],
  },
  {
    id: 1,
    name: "Layer 2: Smart Contract Layer",
    sublabel: "Solidity · Automated Execution · Immutable Logic · Zero Intermediaries",
    color: "oklch(0.60 0.10 195)",
    bg: "oklch(0.60 0.10 195 / 0.08)",
    border: "oklch(0.60 0.10 195 / 0.25)",
    desc: "The enforcement mechanism. Smart contracts execute governance decisions, distribute rewards, manage treasury allocations, and settle disputes — all without human intermediaries. The code is the law, and the law is public.",
    tech: ["Governance Contracts", "Reward Distribution", "Treasury Contracts", "Dispute Resolution"],
  },
  {
    id: 0,
    name: "Layer 1: Blockchain Foundation",
    sublabel: "Immutability · Decentralization · Cryptographic Trust · Consensus",
    color: "oklch(0.55 0.08 265)",
    bg: "oklch(0.55 0.08 265 / 0.08)",
    border: "oklch(0.55 0.08 265 / 0.25)",
    desc: "The bedrock. An immutable, decentralized ledger that records every transaction, vote, and governance decision. No single entity controls it; no single entity can corrupt it. Trust is not assumed — it is mathematically guaranteed.",
    tech: ["Ethereum / L2", "Consensus Mechanism", "State Management", "Cryptographic Proofs"],
  },
];

export function TrustKernelStack() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-6">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 3.1 — System Architecture</div>
        <h3 className="font-display text-lg font-bold text-white">The Trust Kernel Stack</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Five interdependent layers, each building on the one below. Click any layer to explore its function, technology, and role in the Sotilitarian ecosystem.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Stack visualization */}
        <div className="flex-shrink-0 w-full md:w-80 space-y-1.5">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
              className="w-full text-left p-3 rounded-sm border transition-all duration-200"
              style={{
                borderColor: activeLayer === layer.id ? layer.border : "oklch(0.22 0.05 265)",
                backgroundColor: activeLayer === layer.id ? layer.bg : "transparent",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono-data text-xs font-bold" style={{ color: layer.color }}>
                    {layer.name}
                  </div>
                  <div className="font-body text-[10px] text-white/35 mt-0.5 leading-tight">{layer.sublabel}</div>
                </div>
                <div className="font-mono-data text-xs text-white/20 ml-2">
                  {activeLayer === layer.id ? "▲" : "▼"}
                </div>
              </div>
            </button>
          ))}

          {/* Stack arrow */}
          <div className="flex items-center gap-2 pt-2 pl-3">
            <div className="font-mono-data text-[9px] text-white/25 uppercase tracking-wider">Foundation</div>
            <div className="flex-1 h-px bg-white/10" />
            <div className="font-mono-data text-[9px] text-white/25 uppercase tracking-wider">Application</div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1 min-h-[200px]">
          {activeLayer !== null ? (
            <div
              className="p-5 rounded-sm border h-full transition-all duration-300"
              style={{
                borderColor: layers[5 - activeLayer - 1]?.border || layers[0].border,
                backgroundColor: layers[5 - activeLayer - 1]?.bg || layers[0].bg,
              }}
            >
              {(() => {
                const layer = layers.find(l => l.id === activeLayer)!;
                return (
                  <>
                    <div className="font-display text-base font-bold mb-3" style={{ color: layer.color }}>
                      {layer.name}
                    </div>
                    <p className="font-body text-sm text-white/65 leading-relaxed mb-4">{layer.desc}</p>
                    <div>
                      <div className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider mb-2">Key Components</div>
                      <div className="flex flex-wrap gap-2">
                        {layer.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono-data text-[10px] px-2 py-1 rounded-sm border"
                            style={{ borderColor: layer.border, color: layer.color }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full border border-dashed border-white/10 rounded-sm">
              <p className="font-body text-sm text-white/25 text-center">
                Select a layer to explore its architecture
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── 2. THREE-TOKEN FLOW DIAGRAM ──────────────────────────────────────────────
export function ThreeTokenFlowDiagram() {
  const [activeToken, setActiveToken] = useState<"SOT" | "SUG" | "SST" | null>(null);

  const tokens = {
    SOT: {
      name: "Sotility Governance Token",
      symbol: "SOT",
      color: "oklch(0.72 0.12 75)",
      border: "oklch(0.72 0.12 75 / 0.40)",
      bg: "oklch(0.72 0.12 75 / 0.10)",
      purpose: "Governance & Voting Rights",
      flows: [
        { from: "Contributors", to: "SOT Holders", action: "Earn via Proof of Utility" },
        { from: "SOT Holders", to: "DAO", action: "Vote on proposals" },
        { from: "DAO", to: "Treasury", action: "Allocate resources" },
        { from: "Treasury", to: "Contributors", action: "Fund initiatives" },
      ],
      desc: "The governance backbone. SOT is earned through verified contributions — not purchased. Holders vote on protocol changes, treasury allocations, and community initiatives. One contribution unit, one vote.",
    },
    SUG: {
      name: "Sotility Utility Token",
      symbol: "SUG",
      color: "oklch(0.65 0.12 195)",
      border: "oklch(0.65 0.12 195 / 0.40)",
      bg: "oklch(0.65 0.12 195 / 0.10)",
      purpose: "Platform Access & Services",
      flows: [
        { from: "Users", to: "Platform", action: "Pay for services in SUG" },
        { from: "Platform", to: "Contributors", action: "Distribute service revenue" },
        { from: "Contributors", to: "SUG Pool", action: "Stake for yield" },
        { from: "SUG Pool", to: "Users", action: "Rebates & rewards" },
      ],
      desc: "The utility engine. SUG powers platform interactions — paying for services, accessing features, and earning through participation. It creates a circular economy where usage generates value for all participants.",
    },
    SST: {
      name: "Sotility Stable Token",
      symbol: "SST",
      color: "oklch(0.75 0.05 265)",
      border: "oklch(0.75 0.05 265 / 0.40)",
      bg: "oklch(0.75 0.05 265 / 0.08)",
      purpose: "Stable Medium of Exchange",
      flows: [
        { from: "Treasury", to: "SST Reserve", action: "Back with real assets" },
        { from: "Users", to: "Merchants", action: "Everyday transactions" },
        { from: "Elevation Engine", to: "SST Pool", action: "Yield injection" },
        { from: "SST Pool", to: "Community", action: "Universal basic dividend" },
      ],
      desc: "The stability layer. SST is pegged to USD and backed by treasury reserves. It enables everyday commerce without volatility risk, and serves as the distribution mechanism for the Elevation Engine's autonomous yield.",
    },
  };

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-6">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 3.2 — Monetary Architecture</div>
        <h3 className="font-display text-lg font-bold text-white">The Three-Token Economy: SOT · SUG · SST</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Three tokens, three purposes, one ecosystem. Each is purpose-built; none is speculative by design. Select a token to trace its flow through the system.
        </p>
      </div>

      {/* Token selector */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {(["SOT", "SUG", "SST"] as const).map((sym) => {
          const t = tokens[sym];
          return (
            <button
              key={sym}
              onClick={() => setActiveToken(activeToken === sym ? null : sym)}
              className="flex items-center gap-3 px-4 py-3 rounded-sm border transition-all duration-200"
              style={{
                borderColor: activeToken === sym ? t.border : "oklch(0.22 0.05 265)",
                backgroundColor: activeToken === sym ? t.bg : "transparent",
              }}
            >
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center font-mono-data text-xs font-bold"
                style={{ color: t.color, border: `1px solid ${t.border}` }}
              >
                {sym}
              </div>
              <div className="text-left">
                <div className="font-mono-data text-xs font-bold" style={{ color: activeToken === sym ? t.color : "oklch(0.6 0.02 265)" }}>
                  {sym}
                </div>
                <div className="font-body text-[10px] text-white/35">{t.purpose}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Token detail */}
      {activeToken && (() => {
        const t = tokens[activeToken];
        return (
          <div className="p-5 rounded-sm border transition-all duration-300" style={{ borderColor: t.border, backgroundColor: t.bg }}>
            <div className="font-display text-base font-bold mb-2" style={{ color: t.color }}>
              {t.name} ({t.symbol})
            </div>
            <p className="font-body text-sm text-white/65 leading-relaxed mb-5">{t.desc}</p>
            <div>
              <div className="font-mono-data text-[10px] text-white/30 uppercase tracking-wider mb-3">Token Flow</div>
              <div className="space-y-2">
                {t.flows.map((flow, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-body">
                    <span className="text-white/50 w-28 text-right flex-shrink-0">{flow.from}</span>
                    <span className="text-white/20">→</span>
                    <span className="font-mono-data text-[10px] px-2 py-0.5 rounded-sm flex-shrink-0" style={{ color: t.color, border: `1px solid ${t.border}` }}>
                      {flow.action}
                    </span>
                    <span className="text-white/20">→</span>
                    <span className="text-white/50">{flow.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      {!activeToken && (
        <div className="flex items-center justify-center py-8 border border-dashed border-white/10 rounded-sm">
          <p className="font-body text-sm text-white/25">Select a token to trace its flow</p>
        </div>
      )}
    </div>
  );
}

// ─── 3. SMART CONTRACT EXECUTION FLOW ─────────────────────────────────────────
export function SmartContractFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Proposal Submitted",
      actor: "Community Member",
      action: "Submits governance proposal on-chain with required SOT stake",
      outcome: "Proposal enters review queue; stake held in escrow",
      color: "oklch(0.65 0.12 195)",
    },
    {
      id: 1,
      title: "Deliberation Period",
      actor: "Token Holders",
      action: "Community debates proposal; delegates may update their positions",
      outcome: "Liquid democracy allows real-time position changes",
      color: "oklch(0.65 0.12 195)",
    },
    {
      id: 2,
      title: "Voting Window Opens",
      actor: "Smart Contract",
      action: "Automatically opens voting at pre-set time; weights votes by Proof of Utility score",
      outcome: "Votes recorded immutably on-chain; no intermediary required",
      color: "oklch(0.72 0.12 75)",
    },
    {
      id: 3,
      title: "Quorum Check",
      actor: "Smart Contract",
      action: "Verifies minimum participation threshold has been met",
      outcome: "If quorum not met, proposal returns to deliberation; stake refunded",
      color: "oklch(0.72 0.12 75)",
    },
    {
      id: 4,
      title: "Automatic Execution",
      actor: "Smart Contract",
      action: "If passed: executes treasury allocation, parameter change, or protocol update",
      outcome: "No human can block or delay execution; the code is the law",
      color: "oklch(0.72 0.12 75)",
    },
    {
      id: 5,
      title: "On-Chain Record",
      actor: "Blockchain",
      action: "Full audit trail recorded permanently: who voted, how, when, and what was executed",
      outcome: "Radical transparency — every decision is publicly verifiable forever",
      color: "oklch(0.72 0.12 75)",
    },
  ];

  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-6">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 3.3 — Execution Architecture</div>
        <h3 className="font-display text-lg font-bold text-white">Smart Contract Governance: From Proposal to Execution</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Every governance decision follows this deterministic path. No backroom deals. No discretionary delays. No human veto. Click through each step.
        </p>
      </div>

      {/* Step progress */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex items-center gap-1 flex-shrink-0"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono-data text-xs font-bold border transition-all ${
              activeStep === i
                ? "border-gold bg-gold text-[oklch(0.12_0.05_265)]"
                : i < activeStep
                ? "border-gold/40 bg-gold/10 text-gold/60"
                : "border-white/20 text-white/30"
            }`}>
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-6 h-px transition-all ${i < activeStep ? "bg-gold/40" : "bg-white/10"}`} />
            )}
          </button>
        ))}
      </div>

      {/* Active step detail */}
      <div className="p-5 rounded-sm border border-gold/20 bg-gold/5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center font-mono-data text-sm font-bold text-gold flex-shrink-0">
            {activeStep + 1}
          </div>
          <div className="flex-1">
            <div className="font-display text-base font-bold text-gold mb-1">{steps[activeStep].title}</div>
            <div className="font-mono-data text-[10px] text-white/35 uppercase tracking-wider mb-3">
              Actor: {steps[activeStep].actor}
            </div>
            <p className="font-body text-sm text-white/65 mb-3">{steps[activeStep].action}</p>
            <div className="flex items-start gap-2">
              <span className="font-mono-data text-[10px] text-gold/50 uppercase tracking-wider flex-shrink-0 mt-0.5">Outcome:</span>
              <p className="font-body text-xs text-white/50">{steps[activeStep].outcome}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="font-mono-data text-xs text-white/30 hover:text-gold disabled:opacity-20 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className="font-mono-data text-xs text-white/30 hover:text-gold disabled:opacity-20 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── 4. EFFICIENCY COMPARISON BAR CHART ───────────────────────────────────────
const efficiencyData = [
  { metric: "Transaction Cost", traditional: 85, sotilitarian: 8, unit: "basis pts" },
  { metric: "Settlement Time", traditional: 72, sotilitarian: 3, unit: "hours" },
  { metric: "Intermediary Count", traditional: 7, sotilitarian: 0, unit: "parties" },
  { metric: "Audit Cost", traditional: 95, sotilitarian: 2, unit: "% of budget" },
  { metric: "Governance Latency", traditional: 1460, sotilitarian: 24, unit: "days avg" },
];

export function EfficiencyComparisonChart() {
  return (
    <div className="my-10 p-6 bg-[oklch(0.14_0.05_265)] border border-white/10 rounded-sm">
      <div className="mb-5">
        <div className="font-mono-data text-xs text-gold/70 uppercase tracking-wider mb-1">Figure 3.4 — Operational Efficiency</div>
        <h3 className="font-display text-lg font-bold text-white">The Friction Audit: Traditional Finance vs. Autonomous Protocol</h3>
        <p className="font-body text-sm text-white/50 mt-1">
          Every intermediary is a toll booth. Every manual process is a delay. Autonomous finance eliminates both — not by cutting corners, but by encoding trust in code.
        </p>
      </div>

      <div className="space-y-5">
        {efficiencyData.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-mono-data text-xs text-white/60">{item.metric}</span>
              <span className="font-mono-data text-[10px] text-white/30">{item.unit}</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-[10px] text-crimson/60 w-24 text-right flex-shrink-0">Traditional</span>
                <div className="flex-1 h-4 bg-white/5 rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-crimson/50 rounded-sm flex items-center pl-2 transition-all duration-700"
                    style={{ width: `${Math.min(100, (item.traditional / Math.max(item.traditional, item.sotilitarian)) * 100)}%` }}
                  >
                    <span className="font-mono-data text-[9px] text-white/60">{item.traditional}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono-data text-[10px] text-gold/60 w-24 text-right flex-shrink-0">Sotilitarian</span>
                <div className="flex-1 h-4 bg-white/5 rounded-sm overflow-hidden">
                  <div
                    className="h-full bg-gold/60 rounded-sm flex items-center pl-2 transition-all duration-700"
                    style={{ width: `${Math.max(3, (item.sotilitarian / Math.max(item.traditional, item.sotilitarian)) * 100)}%` }}
                  >
                    <span className="font-mono-data text-[9px] text-black/70">{item.sotilitarian}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PartIIIVisuals() {
  return (
    <>
      <TrustKernelStack />
      <ThreeTokenFlowDiagram />
      <SmartContractFlow />
      <EfficiencyComparisonChart />
    </>
  );
}
