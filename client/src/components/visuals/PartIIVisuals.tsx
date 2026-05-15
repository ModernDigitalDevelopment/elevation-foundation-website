/**
 * PART II VISUALS — Continuous Consent: The Governance Revolution
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
import { Bar, Radar, Doughnut, Line } from "react-chartjs-2";

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
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.85)",
      display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: BEIGE, borderRadius: "8px", padding: "32px",
        maxWidth: "90vw", maxHeight: "90vh", overflow: "auto", width: "820px",
      }}>
        {children}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <button onClick={onClose} style={{
            fontFamily: "Courier New, monospace", fontSize: "0.7rem",
            color: "#666", background: "none", border: "1px solid #ccc",
            padding: "6px 18px", borderRadius: "3px", cursor: "pointer",
          }}>CLOSE ✕</button>
        </div>
      </div>
    </div>
  );
}

function ChartCard({ label, title, desc, children }: {
  label: string; title: string; desc: string; children: React.ReactNode;
}) {
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

function GovernanceRadar() {
  const data = {
    labels: ["Participation Rate", "Decision Speed", "Accountability", "Representation", "Reversibility", "Transparency"],
    datasets: [
      { label: "Representative Democracy", data: [35, 45, 40, 50, 30, 35], backgroundColor: "rgba(192,57,43,0.1)", borderColor: CRIMSON, borderWidth: 2, pointBackgroundColor: CRIMSON, pointRadius: 3 },
      { label: "Corporate Board", data: [10, 70, 20, 15, 25, 20], backgroundColor: "rgba(155,89,182,0.1)", borderColor: PURPLE, borderWidth: 2, pointBackgroundColor: PURPLE, pointRadius: 3 },
      { label: "Sotilitarian DAO", data: [90, 60, 95, 88, 92, 98], backgroundColor: "rgba(77,184,184,0.12)", borderColor: TEAL, borderWidth: 2, pointBackgroundColor: TEAL, pointRadius: 4 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } } },
    scales: { r: { min: 0, max: 100, ticks: { stepSize: 25, color: "#999", font: { size: 9 }, backdropColor: "transparent" }, grid: { color: "rgba(0,0,0,0.1)" }, angleLines: { color: "rgba(0,0,0,0.1)" }, pointLabels: { color: "#333", font: { family: "Georgia, serif", size: 11 } } } },
  };
  return <div style={{ height: "340px" }}><Radar data={data} options={opts} /></div>;
}

function ConsentDecayCurve() {
  const labels = ["Election Day", "6 Months", "1 Year", "2 Years", "3 Years", "4 Years", "Next Election"];
  const data = {
    labels,
    datasets: [
      { label: "Traditional Democracy (Consent Level %)", data: [72, 61, 54, 48, 42, 38, 35], borderColor: CRIMSON, backgroundColor: "rgba(192,57,43,0.08)", borderWidth: 2, fill: true, pointBackgroundColor: CRIMSON, pointRadius: 4, tension: 0.4 },
      { label: "Sotilitarian DAO (Continuous Consent %)", data: [85, 87, 88, 86, 89, 91, 90], borderColor: TEAL, backgroundColor: "rgba(77,184,184,0.08)", borderWidth: 2.5, fill: true, pointBackgroundColor: TEAL, pointRadius: 4, tension: 0.4 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } }, tooltip: { callbacks: { label: (c: any) => ` ${c.raw}% consent` } } },
    scales: {
      x: { ticks: { color: "#555", font: { family: "Courier New, monospace", size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
      y: { min: 0, max: 100, ticks: { callback: (v: any) => `${v}%`, color: "#555", font: { family: "Courier New, monospace", size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
    },
  };
  return <div style={{ height: "280px" }}><Line data={data} options={opts} /></div>;
}

function LiquidDemocracySpectrum() {
  const modes = [
    { label: "Direct Vote", participation: 100, efficiency: 20, color: TEAL },
    { label: "Delegated Vote", participation: 75, efficiency: 55, color: GOLD },
    { label: "Liquid Hybrid", participation: 88, efficiency: 78, color: "#27ae60" },
    { label: "Representative", participation: 35, efficiency: 65, color: CRIMSON },
    { label: "Corporate Board", participation: 5, efficiency: 85, color: PURPLE },
  ];
  const data = {
    labels: modes.map((m) => m.label),
    datasets: [
      { label: "Participation Score", data: modes.map((m) => m.participation), backgroundColor: modes.map((m) => `${m.color}bb`), borderColor: modes.map((m) => m.color), borderWidth: 1, borderRadius: 3 },
      { label: "Efficiency Score", data: modes.map((m) => m.efficiency), backgroundColor: modes.map((m) => `${m.color}55`), borderColor: modes.map((m) => m.color), borderWidth: 1, borderRadius: 3 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } } },
    scales: {
      x: { ticks: { color: "#333", font: { family: "Courier New, monospace", size: 10 } }, grid: { display: false } },
      y: { min: 0, max: 100, ticks: { callback: (v: any) => `${v}`, color: "#555", font: { size: 10 } }, grid: { color: "rgba(0,0,0,0.06)" } },
    },
  };
  return <div style={{ height: "280px" }}><Bar data={data} options={opts} /></div>;
}

function PowerDistribution() {
  const [mode, setMode] = useState<"trad" | "dao">("trad");
  const tradData = {
    labels: ["C-Suite (0.01%)", "Board / Shareholders (1%)", "Middle Management (9%)", "Workers & Community (90%)"],
    datasets: [{ data: [45, 35, 15, 5], backgroundColor: ["rgba(192,57,43,0.9)", "rgba(192,57,43,0.65)", "rgba(155,89,182,0.55)", "rgba(100,100,120,0.4)"], borderColor: ["#fff", "#fff", "#fff", "#fff"], borderWidth: 2 }],
  };
  const daoData = {
    labels: ["Core Contributors (10%)", "Active Participants (35%)", "Token Holders (40%)", "Community Reserve (15%)"],
    datasets: [{ data: [25, 35, 30, 10], backgroundColor: ["rgba(77,184,184,0.9)", "rgba(77,184,184,0.65)", "rgba(201,168,76,0.65)", "rgba(39,174,96,0.55)"], borderColor: ["#fff", "#fff", "#fff", "#fff"], borderWidth: 2 }],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 10, boxWidth: 12 } }, tooltip: { callbacks: { label: (c: any) => ` ${c.label}: ${c.raw}% of governance power` } } },
    cutout: "55%",
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "14px", justifyContent: "center" }}>
        {(["trad", "dao"] as const).map((m) => (
          <button key={m} onClick={(e) => { e.stopPropagation(); setMode(m); }} style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", letterSpacing: "0.08em", padding: "6px 16px", borderRadius: "3px", border: `1px solid ${mode === m ? GOLD : "#ccc"}`, background: mode === m ? GOLD : "transparent", color: mode === m ? DARK : "#555", cursor: "pointer", fontWeight: mode === m ? "700" : "400" }}>
            {m === "trad" ? "TRADITIONAL CORPORATION" : "SOTILITARIAN DAO"}
          </button>
        ))}
      </div>
      <div style={{ height: "280px" }}><Doughnut data={mode === "trad" ? tradData : daoData} options={opts} /></div>
      <div style={{ marginTop: "12px", padding: "10px 14px", background: mode === "trad" ? "rgba(192,57,43,0.06)" : "rgba(77,184,184,0.06)", borderLeft: `3px solid ${mode === "trad" ? CRIMSON : TEAL}`, fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#555", fontStyle: "italic" }}>
        {mode === "trad" ? "In the traditional corporation, 80% of governance power is concentrated in 1% of stakeholders. The workers who generate the value have 5% of the say." : "In the Sotilitarian DAO, governance power tracks contribution. The community that builds the system governs the system — proportionally and continuously."}
      </div>
    </div>
  );
}

function ProposalLifecycle() {
  const stages = [
    { stage: "Ideation", desc: "Any token holder submits a proposal with a 100 SOT deposit", color: TEAL, icon: "💡" },
    { stage: "Community Discussion", desc: "72-hour open forum. Amendments accepted. Sentiment tracked on-chain.", color: GOLD, icon: "💬" },
    { stage: "Formal Vote", desc: "7-day voting window. Direct or delegated. Quorum required.", color: PURPLE, icon: "🗳️" },
    { stage: "Time-Lock Review", desc: "48-hour delay before execution. Final veto window for critical issues.", color: "#e67e22", icon: "⏱️" },
    { stage: "Smart Contract Execution", desc: "Approved proposals execute automatically. No human intermediary.", color: "#27ae60", icon: "⚡" },
    { stage: "Impact Audit", desc: "30-day post-execution review. Results published on-chain.", color: CRIMSON, icon: "📊" },
  ];
  return (
    <div>
      {stages.map((s, i) => (
        <div key={s.stage} style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", flexShrink: 0 }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", flexShrink: 0, zIndex: 1 }}>{s.icon}</div>
            {i < stages.length - 1 && <div style={{ width: "2px", flex: 1, background: `${s.color}40`, minHeight: "20px" }} />}
          </div>
          <div style={{ paddingLeft: "12px", paddingBottom: i < stages.length - 1 ? "16px" : "0", flex: 1 }}>
            <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.72rem", color: s.color, fontWeight: "700", letterSpacing: "0.06em", marginBottom: "3px" }}>STAGE {i + 1}: {s.stage.toUpperCase()}</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "#444", lineHeight: "1.55" }}>{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PartIIVisuals() {
  return (
    <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: "6px" }}>Part II of V — Visual Companion</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", color: "#f5f0e8", margin: "0 0 8px 0" }}>Data &amp; Diagrams</h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.65", margin: 0 }}>The following figures map the governance revolution of Part II into visual form. Each chart is interactive — click to enlarge.</p>
      </div>
      <ChartCard label="Figure 2.1 — Governance Model Comparison" title="How Three Governance Systems Score Across Six Dimensions" desc="Traditional democracy, corporate boards, and Sotilitarian DAOs evaluated across participation, speed, accountability, representation, reversibility, and transparency."><GovernanceRadar /></ChartCard>
      <ChartCard label="Figure 2.2 — The Consent Decay Problem" title="Mandate Legitimacy Over Time: Traditional vs. Continuous Consent" desc="In representative democracy, consent is granted once every four years and decays immediately. Sotilitarian governance maintains consent continuously through ongoing participation."><ConsentDecayCurve /></ChartCard>
      <ChartCard label="Figure 2.3 — The Governance Spectrum" title="Liquid Democracy: Participation vs. Efficiency Trade-offs" desc="The Liquid Hybrid model — the backbone of Sotilitarian governance — achieves the highest combined score on both participation and efficiency. No other model comes close."><LiquidDemocracySpectrum /></ChartCard>
      <ChartCard label="Figure 2.4 — Power Distribution" title="Who Holds Governance Power? Corporation vs. DAO" desc="In a traditional corporation, governance power is a pyramid. In a Sotilitarian DAO, it is a circle. Toggle between the two systems to see the structural difference."><PowerDistribution /></ChartCard>
      <div style={card}>
        <div style={figLabel}>Figure 2.5 — Governance Process</div>
        <div style={figTitle}>The Sotilitarian Proposal Lifecycle: From Idea to Execution</div>
        <div style={figDesc}>Every governance decision follows a transparent, time-locked, community-verified process. No backroom deals. No unilateral executive action. No opacity.</div>
        <ProposalLifecycle />
      </div>
    </div>
  );
}
