/**
 * PART I VISUALS — The New Economic Operating System
 * Uses Chart.js via react-chartjs-2 (same library as sandbox — guaranteed rendering)
 * Beige backgrounds per style guide; click-to-enlarge on all charts
 */
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  PointElement, LineElement,
  RadialLinearScale, Filler, Tooltip, Legend
);

const BEIGE = "#f5f0e8";
const GOLD = "#c9a84c";
const TEAL = "#4db8b8";
const CRIMSON = "#c0392b";
const DARK = "#1a1a2e";

const card: React.CSSProperties = {
  background: BEIGE,
  borderRadius: "6px",
  padding: "24px",
  marginBottom: "32px",
  border: "1px solid rgba(201,168,76,0.25)",
};

const figLabel: React.CSSProperties = {
  fontFamily: "Courier New, monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  color: GOLD,
  textTransform: "uppercase",
  marginBottom: "6px",
};

const figTitle: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "1.1rem",
  fontWeight: "700",
  color: DARK,
  marginBottom: "6px",
};

const figDesc: React.CSSProperties = {
  fontFamily: "Georgia, serif",
  fontSize: "0.82rem",
  color: "#555",
  lineHeight: "1.65",
  marginBottom: "16px",
};

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.85)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "zoom-out",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: BEIGE, borderRadius: "8px", padding: "32px",
        maxWidth: "90vw", maxHeight: "90vh", overflow: "auto", width: "820px",
      }}>
        {children}
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <button onClick={onClose} style={{
            fontFamily: "Courier New, monospace", fontSize: "0.7rem",
            letterSpacing: "0.1em", color: "#666", background: "none",
            border: "1px solid #ccc", padding: "6px 18px", borderRadius: "3px", cursor: "pointer",
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
          <div style={{
            position: "absolute", bottom: "4px", right: "4px",
            fontFamily: "Courier New, monospace", fontSize: "0.58rem", color: "#aaa",
          }}>CLICK TO ENLARGE ⊕</div>
        </div>
      </div>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div style={figLabel}>{label}</div>
          <div style={figTitle}>{title}</div>
          <div style={{ marginTop: "16px" }}>{children}</div>
        </Modal>
      )}
    </>
  );
}

// ─── Fig 1.1 — Dollar Flow ────────────────────────────────────────────────────
function DollarFlow() {
  const [mode, setMode] = useState<"ext" | "sot">("ext");

  const extData = {
    labels: ["Executive Compensation", "Shareholder Dividends", "Offshore / Tax Avoidance", "Worker Wages", "Community / Public Goods"],
    datasets: [{
      label: "¢ per $1",
      data: [28, 34, 18, 14, 6],
      backgroundColor: ["rgba(192,57,43,0.75)", "rgba(192,57,43,0.85)", "rgba(192,57,43,0.60)", "rgba(100,100,120,0.55)", "rgba(77,184,184,0.5)"],
      borderColor: [CRIMSON, CRIMSON, CRIMSON, "#666", TEAL],
      borderWidth: 1, borderRadius: 3,
    }],
  };

  const sotData = {
    labels: ["Contributor Rewards", "Community Treasury", "Governance Reserves", "Protocol Maintenance", "Elevation Engine Yield"],
    datasets: [{
      label: "¢ per $1",
      data: [40, 25, 15, 12, 8],
      backgroundColor: ["rgba(77,184,184,0.75)", "rgba(77,184,184,0.65)", "rgba(201,168,76,0.65)", "rgba(77,184,184,0.45)", "rgba(201,168,76,0.45)"],
      borderColor: [TEAL, TEAL, GOLD, TEAL, GOLD],
      borderWidth: 1, borderRadius: 3,
    }],
  };

  const opts = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (c: any) => ` ${c.raw}¢ of every $1` } },
    },
    scales: {
      x: {
        max: 45,
        ticks: { callback: (v: any) => `${v}¢`, color: "#555", font: { family: "Courier New, monospace", size: 11 } },
        grid: { color: "rgba(0,0,0,0.07)" },
      },
      y: {
        ticks: { color: "#333", font: { family: "Georgia, serif", size: 12 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "14px", justifyContent: "center" }}>
        {(["ext", "sot"] as const).map((m) => (
          <button key={m} onClick={(e) => { e.stopPropagation(); setMode(m); }} style={{
            fontFamily: "Courier New, monospace", fontSize: "0.68rem", letterSpacing: "0.08em",
            padding: "6px 16px", borderRadius: "3px",
            border: `1px solid ${mode === m ? GOLD : "#ccc"}`,
            background: mode === m ? GOLD : "transparent",
            color: mode === m ? DARK : "#555",
            cursor: "pointer", fontWeight: mode === m ? "700" : "400",
          }}>
            {m === "ext" ? "EXTRACTIVE CAPITALISM" : "SOTILITARIANISM"}
          </button>
        ))}
      </div>
      <div style={{ height: "260px" }}>
        <Bar data={mode === "ext" ? extData : sotData} options={opts} />
      </div>
      <div style={{
        marginTop: "12px", padding: "10px 14px",
        background: mode === "ext" ? "rgba(192,57,43,0.06)" : "rgba(77,184,184,0.06)",
        borderLeft: `3px solid ${mode === "ext" ? CRIMSON : TEAL}`,
        fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#555", fontStyle: "italic",
      }}>
        {mode === "ext"
          ? "Of every dollar generated, only 6¢ reaches the community that made it possible. The rest escapes upward, offshore, or into speculation. This is not a bug — it is the feature."
          : "Every dollar circulates. Contributors earn. The community treasury grows. The Elevation Engine generates autonomous yield. No extraction — only circulation."}
      </div>
    </div>
  );
}

// ─── Fig 1.2 — Five Pillars Radar ────────────────────────────────────────────
function PillarsRadar() {
  const data = {
    labels: ["Transparency", "Community Governance", "Economic Equity", "Participation", "Accountability"],
    datasets: [
      {
        label: "Extractive Capitalism",
        data: [18, 15, 12, 20, 22],
        backgroundColor: "rgba(192,57,43,0.12)",
        borderColor: CRIMSON, borderWidth: 2,
        pointBackgroundColor: CRIMSON, pointRadius: 4,
      },
      {
        label: "Sotilitarianism",
        data: [95, 90, 88, 92, 96],
        backgroundColor: "rgba(77,184,184,0.12)",
        borderColor: TEAL, borderWidth: 2,
        pointBackgroundColor: TEAL, pointRadius: 4,
      },
    ],
  };

  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { font: { family: "Courier New, monospace", size: 11 }, color: "#333", padding: 16 },
      },
    },
    scales: {
      r: {
        min: 0, max: 100,
        ticks: { stepSize: 25, color: "#999", font: { size: 9 }, backdropColor: "transparent" },
        grid: { color: "rgba(0,0,0,0.1)" },
        angleLines: { color: "rgba(0,0,0,0.1)" },
        pointLabels: { color: "#333", font: { family: "Georgia, serif", size: 12 } },
      },
    },
  };

  return <div style={{ height: "320px" }}><Radar data={data} options={opts} /></div>;
}

// ─── Fig 1.3 — Feature Audit Table ───────────────────────────────────────────
function FeatureAudit() {
  const rows = [
    ["Value Metric", "Financial profit (shareholder returns)", "Verified social utility (Proof of Utility)"],
    ["Governance", "Board of directors, shareholder votes", "DAO — token holder continuous consent"],
    ["Transparency", "Selective disclosure, auditor trust", "On-chain immutable public record"],
    ["Finance Access", "Credit score gatekeeping", "Open DeFi protocols, no intermediaries"],
    ["Wealth Distribution", "Trickle-down (rarely trickles)", "Automated yield distribution to contributors"],
    ["Accountability", "Legal liability, often avoided", "Smart contract enforcement, immutable"],
    ["Innovation Incentive", "Patent monopolies, VC gatekeeping", "Open-source + contribution rewards"],
    ["Crisis Resilience", "Centralized fragility, bailouts", "Distributed antifragility, no TBTF"],
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Georgia, serif", fontSize: "0.82rem" }}>
        <thead>
          <tr style={{ background: DARK }}>
            {["DIMENSION", "EXTRACTIVE CAPITALISM", "SOTILITARIANISM"].map((h, i) => (
              <th key={h} style={{
                padding: "10px 14px", textAlign: "left",
                color: [GOLD, "#e88", TEAL][i],
                fontFamily: "Courier New, monospace", fontSize: "0.65rem",
                letterSpacing: "0.1em", fontWeight: "700",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row[0]} style={{ background: i % 2 === 0 ? "rgba(0,0,0,0.03)" : "transparent", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
              <td style={{ padding: "10px 14px", fontFamily: "Courier New, monospace", fontSize: "0.72rem", color: "#333", fontWeight: "600" }}>{row[0]}</td>
              <td style={{ padding: "10px 14px", color: "#666" }}>{row[1]}</td>
              <td style={{ padding: "10px 14px", color: "#2a5a5a", fontWeight: "500" }}>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Fig 1.4 — UMFL ──────────────────────────────────────────────────────────
function UMFL() {
  const [active, setActive] = useState<string | null>(null);
  const nodes = [
    { id: "contribution", label: "CONTRIBUTION", sub: "Labor, ideas, participation", color: TEAL },
    { id: "utility", label: "UTILITY PROOF", sub: "On-chain verification", color: GOLD },
    { id: "governance", label: "GOVERNANCE POWER", sub: "SOT token allocation", color: "#9b59b6" },
    { id: "treasury", label: "COMMUNITY TREASURY", sub: "Autonomous yield routing", color: CRIMSON },
    { id: "reward", label: "CONTRIBUTION REWARD", sub: "SUG + SST distributions", color: "#27ae60" },
  ];

  return (
    <div>
      <svg viewBox="0 0 100 100" style={{ width: "100%", height: "260px", display: "block" }}>
        <defs>
          <marker id="umfl-arrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L0,4 L4,2 z" fill={GOLD} opacity="0.6" />
          </marker>
        </defs>
        {[
          [50, 18, 82, 42], [88, 52, 78, 78], [62, 86, 38, 86],
          [18, 78, 18, 52], [22, 42, 44, 18],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.5"
            markerEnd="url(#umfl-arrow)" />
        ))}
        {nodes.map((n, i) => {
          const angle = (i * 2 * Math.PI) / nodes.length - Math.PI / 2;
          const x = 50 + 36 * Math.cos(angle);
          const y = 50 + 36 * Math.sin(angle);
          const isA = active === n.id;
          return (
            <g key={n.id} onClick={() => setActive(active === n.id ? null : n.id)} style={{ cursor: "pointer" }}>
              <circle cx={x} cy={y} r="7"
                fill={isA ? n.color : "rgba(245,240,232,0.9)"}
                stroke={n.color} strokeWidth="1.5" />
              <text x={x} y={y + 0.5} textAnchor="middle" dominantBaseline="middle"
                fontSize="3.5" fontFamily="Courier New, monospace" fontWeight="700"
                fill={isA ? "#fff" : n.color}>
                {n.id[0].toUpperCase()}
              </text>
            </g>
          );
        })}
        <circle cx="50" cy="50" r="8" fill="rgba(245,240,232,0.9)" stroke={GOLD} strokeWidth="1" />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle"
          fontSize="3" fontFamily="Courier New, monospace" fill={GOLD} fontWeight="700">UMFL</text>
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "8px" }}>
        {nodes.map((n) => (
          <div key={n.id} onClick={() => setActive(active === n.id ? null : n.id)} style={{
            display: "flex", alignItems: "flex-start", gap: "8px",
            padding: "8px 10px",
            background: active === n.id ? `${n.color}15` : "rgba(0,0,0,0.03)",
            border: `1px solid ${active === n.id ? n.color : "rgba(0,0,0,0.08)"}`,
            borderRadius: "4px", cursor: "pointer",
          }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: n.color, flexShrink: 0, marginTop: "2px" }} />
            <div>
              <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", color: n.color, fontWeight: "700", letterSpacing: "0.06em" }}>{n.label}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "#555", marginTop: "2px" }}>{n.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Fig 1.5 — Dual-Lever Model ──────────────────────────────────────────────
function DualLever() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "14px", alignItems: "stretch" }}>
        <div style={{ background: "rgba(77,184,184,0.08)", border: `1px solid ${TEAL}`, borderRadius: "6px", padding: "16px" }}>
          <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", color: TEAL, letterSpacing: "0.1em", fontWeight: "700", marginBottom: "6px" }}>SUPPLY-SIDE LEVER</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", fontWeight: "700", color: DARK, marginBottom: "8px" }}>Transparency Efficiency</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#444", lineHeight: "1.6", marginBottom: "10px" }}>
            Smart contracts eliminate every intermediary that charges rent for being trusted. On-chain audit trails make opacity structurally impossible.
          </div>
          {["Smart contract automation", "On-chain audit trail", "AI verification layer", "Open-source protocols", "Zero-intermediary settlement"].map((m) => (
            <div key={m} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: TEAL, flexShrink: 0 }} />
              <span style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", color: "#444" }}>{m}</span>
            </div>
          ))}
          <div style={{ marginTop: "10px", padding: "8px", background: "rgba(192,57,43,0.06)", borderRadius: "3px", fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#666", fontStyle: "italic" }}>
            <strong>Traditional equivalent:</strong> Reaganomics — removes friction but concentrates gains at the top
          </div>
        </div>

        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          background: `${GOLD}15`, border: `2px solid ${GOLD}`,
          borderRadius: "6px", padding: "16px 12px", minWidth: "110px", textAlign: "center",
        }}>
          <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.6rem", color: GOLD, letterSpacing: "0.1em", marginBottom: "8px" }}>SOTILITARIAN</div>
          <div style={{ fontSize: "1.5rem", marginBottom: "6px" }}>⊕</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", fontWeight: "700", color: DARK, marginBottom: "8px" }}>EQUILIBRIUM</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#555", lineHeight: "1.5" }}>
            Both levers<br />simultaneously<br /><br />Self-reinforcing<br />equilibrium neither<br />system can reach alone
          </div>
          <div style={{ marginTop: "10px", padding: "6px 10px", background: GOLD, borderRadius: "3px", fontFamily: "Courier New, monospace", fontSize: "0.6rem", color: DARK, fontWeight: "700" }}>
            Efficiency gains distributed to contributors
          </div>
        </div>

        <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}`, borderRadius: "6px", padding: "16px" }}>
          <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", color: GOLD, letterSpacing: "0.1em", fontWeight: "700", marginBottom: "6px" }}>DEMAND-SIDE LEVER</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", fontWeight: "700", color: DARK, marginBottom: "8px" }}>Participatory Income</div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#444", lineHeight: "1.6", marginBottom: "10px" }}>
            Contribution rewards route economic value back to the people who created it. Every participant is simultaneously a user, a contributor, and an owner.
          </div>
          {["Proof of Utility rewards", "Community treasury distributions", "Tokenized ownership stakes", "Circular economic loops", "Autonomous yield (Elevation Engine)"].map((m) => (
            <div key={m} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
              <span style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", color: "#444" }}>{m}</span>
            </div>
          ))}
          <div style={{ marginTop: "10px", padding: "8px", background: "rgba(192,57,43,0.06)", borderRadius: "3px", fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#666", fontStyle: "italic" }}>
            <strong>Traditional equivalent:</strong> Keynesian stimulus — boosts demand but routes value through government intermediaries
          </div>
        </div>
      </div>

      <div style={{
        marginTop: "16px", padding: "14px 18px", background: DARK,
        borderRadius: "4px", fontFamily: "Georgia, serif", fontSize: "0.82rem",
        color: "rgba(255,255,255,0.75)", lineHeight: "1.7",
      }}>
        <strong style={{ color: GOLD }}>The Synthesis:</strong> Supply-side efficiency without demand-side participation produces Reaganomics: efficiency gains captured by capital. Demand-side participation without supply-side efficiency produces Keynesianism: stimulus dissipated through bureaucratic friction. Sotilitarianism is the first framework to activate both levers simultaneously — routing the efficiency gains directly to the contributors who generated them.
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function PartIVisuals() {
  return (
    <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: "6px" }}>
          Part I of V — Visual Companion
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", color: "#f5f0e8", margin: "0 0 8px 0" }}>
          Data &amp; Diagrams
        </h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.65", margin: 0 }}>
          The following figures translate the conceptual framework of Part I into visual form. Each chart is interactive — click to enlarge.
        </p>
      </div>

      <ChartCard
        label="Figure 1.1 — Capital Routing Architecture"
        title="Where Does a Dollar Go? Extractive Capitalism vs. Sotilitarianism"
        desc="The fundamental difference between the two systems is not philosophical — it is hydraulic. Follow $1 of economic output through each system and watch where it ends up."
      >
        <DollarFlow />
      </ChartCard>

      <ChartCard
        label="Figure 1.2 — System Capabilities"
        title="The Five Pillars: Traditional Capitalism vs. Sotilitarianism"
        desc="Each axis represents one of the five pillars of Sotilitarianism. Traditional capitalism excels at efficiency but fails catastrophically on equity, transparency, and participation."
      >
        <PillarsRadar />
      </ChartCard>

      <div style={card}>
        <div style={figLabel}>Figure 1.3 — System Comparison</div>
        <div style={figTitle}>Extractive Capitalism vs. Sotilitarianism: A Feature Audit</div>
        <div style={figDesc}>The difference between the two systems is not philosophical — it is architectural. This table maps the structural differences across eight critical dimensions.</div>
        <FeatureAudit />
      </div>

      <ChartCard
        label="Figure 1.4 — Economic Architecture"
        title="The Utility Maximization Feedback Loop"
        desc="Unlike extractive capitalism's extractive loop, Sotilitarianism creates a virtuous cycle. Click each node to explore the mechanism."
      >
        <UMFL />
      </ChartCard>

      <div style={card}>
        <div style={figLabel}>Figure 1.5 — Economic Architecture</div>
        <div style={figTitle}>The Dual-Lever Model: Supply-Side Efficiency + Demand-Side Participation</div>
        <div style={figDesc}>Traditional economics pulls one lever at a time. Sotilitarianism pulls both simultaneously, creating a self-reinforcing equilibrium that neither system can achieve alone.</div>
        <DualLever />
      </div>
    </div>
  );
}
