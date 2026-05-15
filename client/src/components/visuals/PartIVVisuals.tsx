/**
 * PART IV VISUALS — The Trojan Horse Effect: Implementation Strategy
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
import { Bar, Radar, Line } from "react-chartjs-2";

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

function TrojanHorsePhases() {
  const [phase, setPhase] = useState(0);
  const phases = [
    {
      num: "Phase I", name: "The Utility Offer", timeframe: "Months 1-12", color: TEAL,
      desc: "Enter the existing system offering something it cannot refuse: efficiency, cost savings, or capabilities it lacks. WeSolar offers cheaper energy. Transparently offers cheaper governance. The value proposition is undeniable — and entirely non-threatening.",
      tactics: ["Offer 30-50% cost reduction vs. incumbents", "No governance requirements at entry", "Integrate with existing systems (APIs, not replacements)", "Build user habit before introducing token mechanics"],
      resistance: "Low — incumbents see a vendor, not a competitor",
    },
    {
      num: "Phase II", name: "The Network Effect", timeframe: "Months 6-24", color: GOLD,
      desc: "As adoption grows, the network becomes more valuable. Users who joined for utility discover governance. Early adopters become evangelists. The system begins to self-replicate through community.",
      tactics: ["Introduce SOT governance tokens to active users", "Launch community treasury with first distributions", "Open-source all protocols — invite forks and composability", "Document every governance decision publicly"],
      resistance: "Medium — incumbents notice but underestimate the governance layer",
    },
    {
      num: "Phase III", name: "The Governance Flip", timeframe: "Year 2-4", color: "#9b59b6",
      desc: "The community now has enough economic stake and governance power to make decisions that incumbents cannot match. The system is no longer a vendor — it is the infrastructure. The Trojan Horse has opened.",
      tactics: ["Governance proposals to replace incumbent services", "Community treasury funds competing alternatives", "Proof of Utility creates economic moat for contributors", "Legal and regulatory strategy executed from position of strength"],
      resistance: "High — incumbents now recognize the threat but cannot compete on transparency",
    },
    {
      num: "Phase IV", name: "The New Default", timeframe: "Year 4+", color: "#27ae60",
      desc: "Sotilitarian infrastructure becomes the default. Not because it was mandated — but because it was better, cheaper, and more accountable. The revolution was not televised. It was tokenized.",
      tactics: ["Interoperability with legacy systems for smooth transition", "Regulatory engagement from position of community legitimacy", "Expand to adjacent sectors using established playbook", "Document the model for global replication"],
      resistance: "Low — the incumbent system has been replaced from within",
    },
  ];
  const p = phases[phase];
  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" as const }}>
        {phases.map((ph, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setPhase(i); }} style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", padding: "8px 14px", borderRadius: "3px", border: `1px solid ${phase === i ? ph.color : "#ccc"}`, background: phase === i ? ph.color : "transparent", color: phase === i ? "#fff" : "#555", cursor: "pointer" }}>
            {ph.num}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px", background: `${p.color}08`, border: `1px solid ${p.color}40`, borderRadius: "6px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: p.color, fontWeight: "700", letterSpacing: "0.08em", marginBottom: "4px" }}>{p.num}: {p.name.toUpperCase()}</div>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.62rem", color: "#888", marginBottom: "10px" }}>Timeframe: {p.timeframe}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "#333", lineHeight: "1.65", marginBottom: "14px" }}>{p.desc}</div>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.62rem", color: p.color, fontWeight: "700", letterSpacing: "0.08em", marginBottom: "8px" }}>KEY TACTICS:</div>
        {p.tactics.map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "5px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: p.color, flexShrink: 0, marginTop: "6px" }} />
            <div style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#444", lineHeight: "1.5" }}>{t}</div>
          </div>
        ))}
        <div style={{ marginTop: "12px", padding: "8px 12px", background: "rgba(0,0,0,0.04)", borderRadius: "3px", fontFamily: "Courier New, monospace", fontSize: "0.65rem", color: "#666" }}>
          Incumbent Resistance: {p.resistance}
        </div>
      </div>
    </div>
  );
}

function SCurveAdoption() {
  const labels = ["Y0", "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y10"];
  const data = {
    labels,
    datasets: [
      { label: "Sotilitarian Protocol Adoption (%)", data: [0.1, 0.5, 2, 8, 22, 45, 68, 82, 91, 97], borderColor: TEAL, backgroundColor: "rgba(77,184,184,0.1)", borderWidth: 2.5, fill: true, pointBackgroundColor: TEAL, pointRadius: 4, tension: 0.4 },
      { label: "Incumbent Market Share (%)", data: [99.9, 99.5, 98, 92, 78, 55, 32, 18, 9, 3], borderColor: CRIMSON, backgroundColor: "rgba(192,57,43,0.08)", borderWidth: 2, fill: true, pointBackgroundColor: CRIMSON, pointRadius: 3, tension: 0.4 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } }, tooltip: { callbacks: { label: (c: any) => ` ${c.raw}% market share` } } },
    scales: {
      x: { ticks: { color: "#555", font: { family: "Courier New, monospace", size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
      y: { min: 0, max: 100, ticks: { callback: (v: any) => `${v}%`, color: "#555", font: { family: "Courier New, monospace", size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
    },
  };
  return <div style={{ height: "280px" }}><Line data={data} options={opts} /></div>;
}

function SectorReadinessMatrix() {
  const sectors = [
    { name: "Community Energy (WeSolar)", readiness: 88, impact: 92, color: TEAL },
    { name: "Local Governance", readiness: 75, impact: 95, color: GOLD },
    { name: "Community Banking / DeFi", readiness: 82, impact: 88, color: "#9b59b6" },
    { name: "Supply Chain Transparency", readiness: 70, impact: 78, color: "#27ae60" },
    { name: "Healthcare Data Ownership", readiness: 55, impact: 90, color: CRIMSON },
    { name: "Education Credentials", readiness: 65, impact: 72, color: "#e67e22" },
    { name: "Real Estate / Land Registry", readiness: 60, impact: 85, color: "#3498db" },
    { name: "Carbon Credits / ESG", readiness: 78, impact: 80, color: "#1abc9c" },
  ];
  const data = {
    labels: sectors.map((s) => s.name),
    datasets: [
      { label: "Implementation Readiness", data: sectors.map((s) => s.readiness), backgroundColor: sectors.map((s) => s.color + "bb"), borderColor: sectors.map((s) => s.color), borderWidth: 1, borderRadius: 3 },
      { label: "Potential Impact Score", data: sectors.map((s) => s.impact), backgroundColor: sectors.map((s) => s.color + "44"), borderColor: sectors.map((s) => s.color), borderWidth: 1, borderRadius: 3 },
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
  return <div style={{ height: "360px" }}><Bar data={data} options={opts} /></div>;
}

function ImplementationRadar() {
  const data = {
    labels: ["Technical Feasibility", "Community Readiness", "Regulatory Environment", "Economic Incentives", "Network Effects", "Incumbent Resistance"],
    datasets: [
      { label: "WeSolar (Energy)", data: [90, 85, 70, 88, 75, 40], backgroundColor: "rgba(77,184,184,0.12)", borderColor: TEAL, borderWidth: 2, pointBackgroundColor: TEAL, pointRadius: 3 },
      { label: "Transparently (Governance)", data: [85, 78, 55, 82, 80, 60], backgroundColor: "rgba(201,168,76,0.12)", borderColor: GOLD, borderWidth: 2, pointBackgroundColor: GOLD, pointRadius: 3 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } } },
    scales: { r: { min: 0, max: 100, ticks: { stepSize: 25, color: "#999", font: { size: 9 }, backdropColor: "transparent" }, grid: { color: "rgba(0,0,0,0.1)" }, angleLines: { color: "rgba(0,0,0,0.1)" }, pointLabels: { color: "#333", font: { family: "Georgia, serif", size: 11 } } } },
  };
  return <div style={{ height: "320px" }}><Radar data={data} options={opts} /></div>;
}

export function PartIVVisuals() {
  return (
    <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: "6px" }}>Part IV of V — Visual Companion</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", color: "#f5f0e8", margin: "0 0 8px 0" }}>Data &amp; Diagrams</h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.65", margin: 0 }}>The following figures map the implementation strategy of Part IV into visual form. Each chart is interactive — click to enlarge.</p>
      </div>
      <div style={card}>
        <div style={figLabel}>Figure 4.1 — Implementation Strategy</div>
        <div style={figTitle}>The Trojan Horse Effect: Four Phases of Systemic Transformation</div>
        <div style={figDesc}>Sotilitarianism does not storm the gates. It enters as a vendor, becomes infrastructure, and transforms the system from within. Navigate each phase to understand the strategy.</div>
        <TrojanHorsePhases />
      </div>
      <ChartCard label="Figure 4.2 — Adoption Dynamics" title="The S-Curve: Sotilitarian Protocol Adoption vs. Incumbent Market Share" desc="Technology adoption follows an S-curve. The inflection point — where the new system crosses 50% adoption — is the moment the Trojan Horse opens. Based on comparable protocol adoption rates (Ethereum, DeFi, DAOs).">
        <SCurveAdoption />
      </ChartCard>
      <ChartCard label="Figure 4.3 — Sector Analysis" title="Implementation Readiness vs. Potential Impact: Sector Matrix" desc="Not all sectors are equally ready for Sotilitarian transformation. This matrix maps readiness against potential impact to identify the highest-leverage entry points.">
        <SectorReadinessMatrix />
      </ChartCard>
      <ChartCard label="Figure 4.4 — Project Comparison" title="WeSolar vs. Transparently: Implementation Profile Comparison" desc="The two flagship Elevation Foundation projects evaluated across six implementation dimensions. Both score high on technical feasibility and economic incentives — the differentiator is regulatory environment.">
        <ImplementationRadar />
      </ChartCard>
    </div>
  );
}
