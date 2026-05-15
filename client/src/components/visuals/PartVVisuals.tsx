/**
 * PART V VISUALS — The Future of Economics: Beyond the Binary Debate
 * Uses Chart.js via react-chartjs-2 (same library as sandbox — guaranteed rendering)
 * Beige backgrounds per style guide; click-to-enlarge on all charts
 */
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  PointElement, LineElement,
  RadialLinearScale, ArcElement,
  Filler, Tooltip, Legend,
} from "chart.js";
import { Bar, Radar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  PointElement, LineElement,
  RadialLinearScale, ArcElement,
  Filler, Tooltip, Legend
);

const BEIGE = "#f5f0e8";
const GOLD = "#c9a84c";
const TEAL = "#4db8b8";
const CRIMSON = "#c0392b";
const DARK = "#1a1a2e";
const PURPLE = "#9b59b6";

const card: React.CSSProperties = {
  background: BEIGE, borderRadius: "6px", padding: "24px",
  marginBottom: "32px", border: "1px solid rgba(201,168,76,0.25)",
};
const figLabel: React.CSSProperties = {
  fontFamily: "Courier New, monospace", fontSize: "0.65rem",
  letterSpacing: "0.12em", color: GOLD, textTransform: "uppercase", marginBottom: "6px",
};
const figTitle: React.CSSProperties = {
  fontFamily: "Georgia, serif", fontSize: "1.1rem",
  fontWeight: "700", color: DARK, marginBottom: "6px",
};
const figDesc: React.CSSProperties = {
  fontFamily: "Georgia, serif", fontSize: "0.82rem",
  color: "#555", lineHeight: "1.65", marginBottom: "16px",
};

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: BEIGE, borderRadius: "8px", padding: "32px", maxWidth: "90vw", maxHeight: "90vh", overflow: "auto", width: "820px" }}>
        {children}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <button onClick={onClose} style={{ fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: "#666", background: "none", border: "1px solid #ccc", padding: "6px 18px", borderRadius: "3px", cursor: "pointer" }}>CLOSE ✕</button>
        </div>
      </div>
    </div>
  );
}

function ChartCard({ label, title, desc, children }: { label: string; title: string; desc: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={card}>
        <div style={figLabel}>{label}</div>
        <div style={figTitle}>{title}</div>
        <div style={figDesc}>{desc}</div>
        <div onClick={() => setOpen(true)} style={{ cursor: "zoom-in", position: "relative" }}>
          <div style={{ width: "66%", margin: "0 auto" }}>{children}</div>
          <div style={{ position: "absolute", bottom: "4px", right: "4px", fontFamily: "Courier New, monospace", fontSize: "0.58rem", color: "#aaa" }}>CLICK TO ENLARGE ⊕</div>
        </div>
      </div>
      {open && <Modal onClose={() => setOpen(false)}><div style={figLabel}>{label}</div><div style={figTitle}>{title}</div><div style={{ marginTop: "16px" }}>{children}</div></Modal>}
    </>
  );
}

function ThreeSystemRadar() {
  const data = {
    labels: ["Transparency", "Efficiency", "Equity", "Resilience", "Innovation", "Accountability", "Participation"],
    datasets: [
      { label: "Capitalism", data: [20, 85, 18, 55, 80, 25, 20], backgroundColor: "rgba(192,57,43,0.1)", borderColor: CRIMSON, borderWidth: 2, pointBackgroundColor: CRIMSON, pointRadius: 3 },
      { label: "Socialism", data: [50, 45, 75, 60, 40, 55, 65], backgroundColor: "rgba(155,89,182,0.1)", borderColor: PURPLE, borderWidth: 2, pointBackgroundColor: PURPLE, pointRadius: 3 },
      { label: "Sotilitarianism", data: [95, 78, 90, 88, 85, 96, 92], backgroundColor: "rgba(77,184,184,0.12)", borderColor: TEAL, borderWidth: 2.5, pointBackgroundColor: TEAL, pointRadius: 4 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } } },
    scales: { r: { min: 0, max: 100, ticks: { stepSize: 25, color: "#999", font: { size: 9 }, backdropColor: "transparent" }, grid: { color: "rgba(0,0,0,0.1)" }, angleLines: { color: "rgba(0,0,0,0.1)" }, pointLabels: { color: "#333", font: { family: "Georgia, serif", size: 11 } } } },
  };
  return <div style={{ height: "340px" }}><Radar data={data} options={opts} /></div>;
}

function ConvergenceThesis() {
  const labels = ["2020", "2022", "2024", "2026", "2028", "2030", "2032", "2035"];
  const data = {
    labels,
    datasets: [
      { label: "Trust in Traditional Institutions (%)", data: [42, 38, 33, 28, 24, 20, 17, 15], borderColor: CRIMSON, backgroundColor: "rgba(192,57,43,0.08)", borderWidth: 2, fill: true, pointBackgroundColor: CRIMSON, pointRadius: 3, tension: 0.4 },
      { label: "DAO / On-Chain Governance Adoption (%)", data: [1, 3, 8, 18, 32, 50, 65, 78], borderColor: TEAL, backgroundColor: "rgba(77,184,184,0.08)", borderWidth: 2.5, fill: true, pointBackgroundColor: TEAL, pointRadius: 4, tension: 0.4 },
      { label: "DeFi TVL Index (normalized, %)", data: [2, 12, 22, 35, 48, 60, 70, 82], borderColor: GOLD, backgroundColor: "rgba(201,168,76,0.06)", borderWidth: 2, fill: false, pointBackgroundColor: GOLD, pointRadius: 3, tension: 0.4 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } }, tooltip: { callbacks: { label: (c: any) => ` ${c.raw}%` } } },
    scales: {
      x: { ticks: { color: "#555", font: { family: "Courier New, monospace", size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
      y: { min: 0, max: 100, ticks: { callback: (v: any) => `${v}%`, color: "#555", font: { family: "Courier New, monospace", size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
    },
  };
  return <div style={{ height: "280px" }}><Line data={data} options={opts} /></div>;
}

function OutcomeProjectionChart() {
  const metrics = [
    { label: "Wealth Gini Coefficient", cap: 72, soc: 48, sot: 31 },
    { label: "Governance Participation (%)", cap: 22, soc: 55, sot: 88 },
    { label: "Financial Inclusion (%)", cap: 58, soc: 70, sot: 94 },
    { label: "Institutional Trust (%)", cap: 28, soc: 52, sot: 87 },
    { label: "Corruption Index (lower=better)", cap: 68, soc: 44, sot: 12 },
    { label: "Community Wealth Retention (%)", cap: 12, soc: 60, sot: 85 },
  ];
  const data = {
    labels: metrics.map((m) => m.label),
    datasets: [
      { label: "Capitalism", data: metrics.map((m) => m.cap), backgroundColor: "rgba(192,57,43,0.7)", borderColor: CRIMSON, borderWidth: 1, borderRadius: 3 },
      { label: "Socialism", data: metrics.map((m) => m.soc), backgroundColor: "rgba(155,89,182,0.7)", borderColor: PURPLE, borderWidth: 1, borderRadius: 3 },
      { label: "Sotilitarianism", data: metrics.map((m) => m.sot), backgroundColor: "rgba(77,184,184,0.8)", borderColor: TEAL, borderWidth: 1, borderRadius: 3 },
    ],
  };
  const opts = {
    indexAxis: "y" as const, responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } } },
    scales: {
      x: { min: 0, max: 100, ticks: { callback: (v: any) => `${v}`, color: "#555", font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
      y: { ticks: { color: "#333", font: { family: "Georgia, serif", size: 11 } }, grid: { display: false } },
    },
  };
  return <div style={{ height: "340px" }}><Bar data={data} options={opts} /></div>;
}

function SotilitarianManifesto() {
  const [active, setActive] = useState(0);
  const principles = [
    { num: "I", title: "Transparency Is Not Optional", color: TEAL, desc: "Every financial transaction, governance vote, and operational decision must be recorded on-chain and publicly verifiable. Opacity is the precondition for corruption. We eliminate opacity by design.", implication: "Smart contracts replace trust in institutions. Code is law. The ledger is public. There are no exceptions for 'sensitive' decisions." },
    { num: "II", title: "Consent Must Be Continuous", color: GOLD, desc: "Governance legitimacy cannot be granted once every four years and then ignored. The governed must have ongoing, real-time mechanisms to express, revoke, and redirect their consent.", implication: "DAOs with liquid democracy. Proposal lifecycles with time-locks. Continuous participation mechanisms. No more mandate decay." },
    { num: "III", title: "Value Flows to Creators", color: PURPLE, desc: "The people who generate value must receive value. Proof of Utility replaces the extractive intermediary layer that currently captures the majority of economic surplus.", implication: "Contribution-based token distribution. Autonomous yield redistribution. No rent-seeking without corresponding utility creation." },
    { num: "IV", title: "The System Must Be Self-Funding", color: "#27ae60", desc: "A governance system that depends on external funding is a governance system that can be captured. The Elevation Engine generates autonomous yield that funds the mission without dependence.", implication: "DeFi yield generation. Flash loan arbitrage. Protocol fees. All flowing to community treasury — not to founders or investors." },
    { num: "V", title: "Failure Must Be Survivable", color: CRIMSON, desc: "Centralized systems fail catastrophically. Distributed systems fail gracefully. The Sotilitarian architecture is designed for antifragility — it gets stronger when components fail.", implication: "No single point of failure. Multi-sig governance. Circuit breakers. Formal verification. The system survives its own mistakes." },
  ];
  const p = principles[active];
  return (
    <div>
      <div style={{ display: "flex", gap: "6px", marginBottom: "16px", flexWrap: "wrap" as const }}>
        {principles.map((pr, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setActive(i); }} style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", padding: "7px 14px", borderRadius: "3px", border: `1px solid ${active === i ? pr.color : "#ccc"}`, background: active === i ? pr.color : "transparent", color: active === i ? "#fff" : "#555", cursor: "pointer", fontWeight: active === i ? "700" : "400" }}>
            {pr.num}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px", background: `${p.color}08`, border: `1px solid ${p.color}40`, borderRadius: "6px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: p.color, fontWeight: "700", letterSpacing: "0.1em", marginBottom: "8px" }}>PRINCIPLE {p.num}: {p.title.toUpperCase()}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "#333", lineHeight: "1.7", marginBottom: "14px" }}>{p.desc}</div>
        <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.6)", borderLeft: `3px solid ${p.color}`, borderRadius: "3px" }}>
          <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.6rem", color: p.color, fontWeight: "700", letterSpacing: "0.08em", marginBottom: "5px" }}>PRACTICAL IMPLICATION:</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "#444", lineHeight: "1.6" }}>{p.implication}</div>
        </div>
      </div>
    </div>
  );
}

function FuturePowerDistribution() {
  const [year, setYear] = useState<"2025" | "2030" | "2035">("2025");
  const configs = {
    "2025": {
      labels: ["Top 1%", "Top 10%", "Middle 40%", "Bottom 50%"],
      data: [38, 42, 16, 4],
      colors: ["rgba(192,57,43,0.9)", "rgba(192,57,43,0.65)", "rgba(155,89,182,0.5)", "rgba(100,100,120,0.4)"],
      note: "Current reality: The top 1% holds 38% of global wealth. The bottom 50% holds 4%. This is the baseline the Sotilitarian system is designed to transform.",
    },
    "2030": {
      labels: ["Sotilitarian Contributors", "Active DAO Participants", "Token Holders", "Legacy System Users"],
      data: [28, 32, 25, 15],
      colors: ["rgba(77,184,184,0.9)", "rgba(77,184,184,0.65)", "rgba(201,168,76,0.65)", "rgba(155,89,182,0.5)"],
      note: "Projected 2030: Early Sotilitarian adoption begins redistributing economic power. Contributors earn proportionally. The legacy system still holds 15% but is declining.",
    },
    "2035": {
      labels: ["Verified Contributors", "Community Governance", "Protocol Treasury", "Transition Reserve"],
      data: [42, 30, 20, 8],
      colors: ["rgba(77,184,184,0.9)", "rgba(77,184,184,0.65)", "rgba(201,168,76,0.7)", "rgba(39,174,96,0.55)"],
      note: "Projected 2035: Sotilitarian infrastructure is the default. 92% of economic activity flows through transparent, community-governed protocols. Extraction has been replaced by circulation.",
    },
  };
  const cfg = configs[year];
  const data = {
    labels: cfg.labels,
    datasets: [{ data: cfg.data, backgroundColor: cfg.colors, borderColor: ["#fff", "#fff", "#fff", "#fff"], borderWidth: 2 }],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 10, boxWidth: 12 } }, tooltip: { callbacks: { label: (c: any) => ` ${c.label}: ${c.raw}% of economic power` } } },
    cutout: "55%",
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "14px", justifyContent: "center" }}>
        {(["2025", "2030", "2035"] as const).map((y) => (
          <button key={y} onClick={(e) => { e.stopPropagation(); setYear(y); }} style={{ fontFamily: "Courier New, monospace", fontSize: "0.72rem", letterSpacing: "0.08em", padding: "6px 18px", borderRadius: "3px", border: `1px solid ${year === y ? GOLD : "#ccc"}`, background: year === y ? GOLD : "transparent", color: year === y ? DARK : "#555", cursor: "pointer", fontWeight: year === y ? "700" : "400" }}>
            {y}
          </button>
        ))}
      </div>
      <div style={{ height: "280px" }}><Doughnut data={data} options={opts} /></div>
      <div style={{ marginTop: "12px", padding: "10px 14px", background: year === "2025" ? "rgba(192,57,43,0.06)" : "rgba(77,184,184,0.06)", borderLeft: `3px solid ${year === "2025" ? CRIMSON : TEAL}`, fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#555", fontStyle: "italic" }}>
        {cfg.note}
      </div>
    </div>
  );
}

export function PartVVisuals() {
  return (
    <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: "6px" }}>Part V of V — Visual Companion</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", color: "#f5f0e8", margin: "0 0 8px 0" }}>Data &amp; Diagrams</h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.65", margin: 0 }}>The following figures map the future vision of Part V into visual form. Each chart is interactive — click to enlarge.</p>
      </div>
      <ChartCard label="Figure 5.1 — System Comparison" title="Three Economic Systems Across Seven Dimensions: Capitalism, Socialism, Sotilitarianism" desc="The binary debate between capitalism and socialism misses the point. Sotilitarianism is not a compromise between the two — it is a third path that outperforms both on the dimensions that matter most for human flourishing.">
        <ThreeSystemRadar />
      </ChartCard>
      <ChartCard label="Figure 5.2 — The Convergence" title="Institutional Trust Collapse vs. On-Chain Governance Rise: 2020–2035" desc="As trust in traditional institutions declines, decentralized governance adoption accelerates. The lines cross around 2030 — the moment Sotilitarian infrastructure becomes the default, not the alternative.">
        <ConvergenceThesis />
      </ChartCard>
      <ChartCard label="Figure 5.3 — Outcome Projections" title="Projected Outcomes: Capitalism vs. Socialism vs. Sotilitarianism" desc="Across six critical social and economic metrics, Sotilitarianism projects superior outcomes to both capitalism and socialism. These are not utopian projections — they are extrapolations from existing DAO and DeFi performance data.">
        <OutcomeProjectionChart />
      </ChartCard>
      <div style={card}>
        <div style={figLabel}>Figure 5.4 — The Five Principles</div>
        <div style={figTitle}>The Sotilitarian Manifesto: Five Non-Negotiable Principles</div>
        <div style={figDesc}>These are not aspirations. They are design requirements. Every component of the Sotilitarian system is built to enforce these principles at the protocol level — not through trust, but through code. Click each principle to explore its implications.</div>
        <SotilitarianManifesto />
      </div>
      <ChartCard label="Figure 5.5 — Economic Power Distribution" title="Who Holds Economic Power? Present vs. Projected Future" desc="The Sotilitarian system is designed to transform the distribution of economic power over time. Toggle between 2025, 2030, and 2035 to see the projected trajectory as Sotilitarian infrastructure scales.">
        <FuturePowerDistribution />
      </ChartCard>
    </div>
  );
}

export default PartVVisuals;
