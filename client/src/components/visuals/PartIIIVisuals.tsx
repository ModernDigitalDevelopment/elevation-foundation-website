/**
 * PART III VISUALS — The Five-Layer Technical Architecture
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
import { Bar, Radar, Doughnut } from "react-chartjs-2";

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

// ─── Fig 3.1 — Trust Kernel Stack ─────────────────────────────────────────────
function TrustKernelStack() {
  const [selected, setSelected] = useState(0);
  const layers = [
    {
      num: "L1", name: "Consensus Layer", tech: "Ethereum / Celo PoS",
      color: TEAL, desc: "The bedrock. Immutable transaction finality, Sybil resistance, and cryptographic truth. Every action taken in the Sotilitarian system is anchored here.",
      whyMatters: "Without L1, there is no trustless foundation. Every layer above depends on the immutability of this one.",
      whatReplaces: "Central banks, clearing houses, and settlement intermediaries that charge rent for being trusted.",
      failureMode: "51% attack, validator collusion, or consensus fork. Mitigated by PoS economic penalties and decentralized validator sets.",
    },
    {
      num: "L2", name: "Identity & Verification", tech: "Klarity Protocol",
      color: GOLD, desc: "Pseudonymous but accountable. Klarity assigns on-chain reputation scores based on verified contributions — not credit scores, not government IDs.",
      whyMatters: "Governance without identity is mob rule. Identity without privacy is surveillance. Klarity threads the needle.",
      whatReplaces: "Credit bureaus, KYC intermediaries, and the social credit systems that gatekeep economic participation.",
      failureMode: "Identity aggregation attacks or Sybil farming. Mitigated by Proof of Unique Humanity and stake-weighted reputation.",
    },
    {
      num: "L3", name: "Governance Layer", tech: "Transparently DAO",
      color: PURPLE, desc: "Continuous Consent in action. Every token holder can propose, vote, delegate, or revoke — in real time, on-chain, with full auditability.",
      whyMatters: "Governance is the operating system of any organization. If it is opaque, it is corruptible. If it is episodic, it is unresponsive.",
      whatReplaces: "Boards of directors, shareholder meetings, and the 4-year electoral cycles that concentrate power between votes.",
      failureMode: "Voter apathy, plutocratic capture, or governance attacks. Mitigated by quorum requirements and time-locked execution.",
    },
    {
      num: "L4", name: "Economic Layer", tech: "Elevation Engine + 3-Token System",
      color: CRIMSON, desc: "The engine room. Autonomous yield generation, contribution rewards, and the three-token economy (SOT, SUG, SST) that powers the entire system.",
      whyMatters: "Governance without economics is philosophy. The L4 layer is what makes Sotilitarianism a self-sustaining system, not a thought experiment.",
      whatReplaces: "Investment banks, yield-extracting intermediaries, and the financial infrastructure that routes value away from communities.",
      failureMode: "Flash loan attacks, oracle manipulation, or liquidity crises. Mitigated by circuit breakers and multi-oracle price feeds.",
    },
    {
      num: "L5", name: "Application Layer", tech: "WeSolar, DApps, APIs",
      color: "#27ae60", desc: "Where the rubber meets the road. Real-world applications — from community solar to DeFi protocols — built on the four layers below.",
      whyMatters: "The stack only matters if it produces real outcomes for real people. L5 is the proof of concept for every claim made in layers 1–4.",
      whatReplaces: "Traditional app stores, platform monopolies, and the rent-extracting intermediaries that sit between creators and users.",
      failureMode: "Smart contract bugs, front-end attacks, or oracle failures. Mitigated by formal verification and multi-sig admin controls.",
    },
  ];

  const sel = layers[selected];

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {layers.map((l, i) => (
          <div key={l.num} onClick={() => setSelected(i)} style={{
            display: "flex", alignItems: "center", gap: "12px",
            padding: "12px 16px", cursor: "pointer",
            background: selected === i ? `${l.color}15` : i % 2 === 0 ? "rgba(0,0,0,0.02)" : "transparent",
            border: `1px solid ${selected === i ? l.color : "rgba(0,0,0,0.08)"}`,
            borderRadius: "4px", marginBottom: "4px",
            transition: "all 0.15s",
          }}>
            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: l.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: "#fff", fontWeight: "700", flexShrink: 0 }}>{l.num}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.72rem", color: l.color, fontWeight: "700", letterSpacing: "0.06em" }}>{l.name}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "#666" }}>{l.tech}</div>
            </div>
            <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", color: selected === i ? l.color : "#aaa" }}>{selected === i ? "▼" : "▶"}</div>
          </div>
        ))}
      </div>
      {/* Detail panel */}
      <div style={{ marginTop: "16px", padding: "20px", background: `${sel.color}08`, border: `1px solid ${sel.color}40`, borderRadius: "6px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: sel.color, fontWeight: "700", letterSpacing: "0.08em", marginBottom: "8px" }}>{sel.num}: {sel.name.toUpperCase()} — {sel.tech}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "#333", lineHeight: "1.65", marginBottom: "12px" }}>{sel.desc}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
          {[
            { label: "WHY IT MATTERS", text: sel.whyMatters, color: TEAL },
            { label: "WHAT IT REPLACES", text: sel.whatReplaces, color: GOLD },
            { label: "FAILURE MODE", text: sel.failureMode, color: CRIMSON },
          ].map((box) => (
            <div key={box.label} style={{ padding: "10px 12px", background: "rgba(255,255,255,0.6)", borderLeft: `3px solid ${box.color}`, borderRadius: "3px" }}>
              <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.6rem", color: box.color, fontWeight: "700", letterSpacing: "0.08em", marginBottom: "5px" }}>{box.label}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "#444", lineHeight: "1.55" }}>{box.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Fig 3.2 — Three-Token Economy ────────────────────────────────────────────
function ThreeTokenEconomy() {
  const [selected, setSelected] = useState<string | null>(null);
  const tokens = [
    {
      symbol: "SOT", name: "Sotility Governance Token", color: GOLD,
      supply: "Fixed 100M", utility: "Governance voting, proposal rights, protocol upgrades",
      flow: "Earned through verified contribution; staked for governance weight",
      analogy: "Shares in a cooperative — but you earn them by contributing, not buying them.",
    },
    {
      symbol: "SUG", name: "Sotility Utility Token", color: TEAL,
      supply: "Dynamic (contribution-minted)", utility: "Platform access, service payments, contribution rewards",
      flow: "Minted when contributions are verified; burned when services are consumed",
      analogy: "A loyalty point that actually means something — backed by real utility, not marketing.",
    },
    {
      symbol: "SST", name: "Sotility Stable Token", color: "#27ae60",
      supply: "Collateral-backed", utility: "Stable store of value, treasury reserves, everyday transactions",
      flow: "Minted against collateral; redeemable 1:1 for underlying assets",
      analogy: "A dollar that doesn't lose value to inflation because it is backed by community assets, not government debt.",
    },
  ];

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "16px" }}>
        {tokens.map((t) => (
          <div key={t.symbol} onClick={() => setSelected(selected === t.symbol ? null : t.symbol)} style={{
            padding: "16px", borderRadius: "6px", cursor: "pointer",
            background: selected === t.symbol ? `${t.color}15` : "rgba(0,0,0,0.03)",
            border: `2px solid ${selected === t.symbol ? t.color : "rgba(0,0,0,0.1)"}`,
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "Courier New, monospace", fontSize: "1.4rem", fontWeight: "900", color: t.color, marginBottom: "4px" }}>{t.symbol}</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "0.72rem", color: "#444", lineHeight: "1.4" }}>{t.name}</div>
            <div style={{ marginTop: "8px", fontFamily: "Courier New, monospace", fontSize: "0.6rem", color: "#888" }}>Supply: {t.supply}</div>
          </div>
        ))}
      </div>
      {selected && (() => {
        const t = tokens.find((x) => x.symbol === selected)!;
        return (
          <div style={{ padding: "16px 20px", background: `${t.color}08`, border: `1px solid ${t.color}40`, borderRadius: "6px" }}>
            <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: t.color, fontWeight: "700", marginBottom: "8px" }}>{t.symbol} — {t.name}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { label: "UTILITY", text: t.utility },
                { label: "FLOW MECHANISM", text: t.flow },
              ].map((b) => (
                <div key={b.label} style={{ padding: "10px 12px", background: "rgba(255,255,255,0.6)", borderLeft: `3px solid ${t.color}`, borderRadius: "3px" }}>
                  <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.6rem", color: t.color, fontWeight: "700", marginBottom: "4px" }}>{b.label}</div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#444", lineHeight: "1.55" }}>{b.text}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "10px", padding: "10px 12px", background: "rgba(255,255,255,0.5)", borderRadius: "3px", fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "#555", fontStyle: "italic" }}>
              <strong>In plain English:</strong> {t.analogy}
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── Fig 3.3 — Smart Contract Step Navigator ──────────────────────────────────
function SmartContractNavigator() {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "Contribution Submitted", desc: "A participant submits a contribution — code, energy, governance participation, or verified labor — to the protocol.", code: "contribute(bytes32 proofHash, uint256 amount)", color: TEAL },
    { title: "Proof of Utility Verification", desc: "The Klarity oracle network verifies the contribution against predefined utility criteria. Consensus required from 2/3 of validators.", code: "verifyUtility(address contributor, bytes32 proofHash)", color: GOLD },
    { title: "Reward Calculation", desc: "The Elevation Engine calculates the SUG reward based on contribution type, scarcity, and current protocol parameters.", code: "calculateReward(address contributor, uint8 utilityType)", color: PURPLE },
    { title: "Token Distribution", desc: "SUG tokens are minted and distributed to the contributor. A portion flows to the community treasury. SOT governance weight is updated.", code: "distributeReward(address contributor, uint256 sugAmount)", color: "#27ae60" },
    { title: "On-Chain Record", desc: "The contribution, verification, and reward are permanently recorded on-chain. Immutable. Publicly auditable. Forever.", code: "emit ContributionVerified(contributor, proofHash, sugAmount)", color: CRIMSON },
  ];

  const s = steps[step];

  return (
    <div>
      <div style={{ display: "flex", gap: "6px", marginBottom: "16px", flexWrap: "wrap" }}>
        {steps.map((st, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setStep(i); }} style={{
            fontFamily: "Courier New, monospace", fontSize: "0.65rem", padding: "5px 12px",
            borderRadius: "3px", border: `1px solid ${step === i ? st.color : "#ccc"}`,
            background: step === i ? st.color : "transparent",
            color: step === i ? "#fff" : "#555", cursor: "pointer",
          }}>
            Step {i + 1}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px", background: `${s.color}08`, border: `1px solid ${s.color}40`, borderRadius: "6px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.7rem", color: s.color, fontWeight: "700", marginBottom: "8px" }}>STEP {step + 1} OF {steps.length}: {s.title.toUpperCase()}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "#333", lineHeight: "1.65", marginBottom: "12px" }}>{s.desc}</div>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.78rem", color: "#333", background: "rgba(0,0,0,0.06)", padding: "12px 16px", borderRadius: "4px", borderLeft: `3px solid ${s.color}` }}>
          <span style={{ color: "#888" }}>// Solidity</span><br />
          <span style={{ color: s.color }}>{s.code}</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button onClick={(e) => { e.stopPropagation(); setStep(Math.max(0, step - 1)); }} disabled={step === 0} style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", padding: "6px 14px", borderRadius: "3px", border: "1px solid #ccc", background: "transparent", color: step === 0 ? "#ccc" : "#555", cursor: step === 0 ? "default" : "pointer" }}>← PREV</button>
        <span style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", color: "#888" }}>{step + 1} / {steps.length}</span>
        <button onClick={(e) => { e.stopPropagation(); setStep(Math.min(steps.length - 1, step + 1)); }} disabled={step === steps.length - 1} style={{ fontFamily: "Courier New, monospace", fontSize: "0.68rem", padding: "6px 14px", borderRadius: "3px", border: "1px solid #ccc", background: "transparent", color: step === steps.length - 1 ? "#ccc" : "#555", cursor: step === steps.length - 1 ? "default" : "pointer" }}>NEXT →</button>
      </div>
    </div>
  );
}

// ─── Fig 3.4 — Architecture Capabilities Radar ────────────────────────────────
function ArchitectureRadar() {
  const data = {
    labels: ["Security", "Scalability", "Decentralization", "Composability", "Auditability", "User Sovereignty"],
    datasets: [
      { label: "Traditional Web2 Stack", data: [55, 85, 10, 30, 25, 15], backgroundColor: "rgba(192,57,43,0.1)", borderColor: CRIMSON, borderWidth: 2, pointBackgroundColor: CRIMSON, pointRadius: 3 },
      { label: "Sotilitarian 5-Layer Stack", data: [90, 75, 95, 88, 98, 92], backgroundColor: "rgba(77,184,184,0.12)", borderColor: TEAL, borderWidth: 2, pointBackgroundColor: TEAL, pointRadius: 4 },
    ],
  };
  const opts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" as const, labels: { font: { family: "Courier New, monospace", size: 10 }, color: "#333", padding: 14 } } },
    scales: { r: { min: 0, max: 100, ticks: { stepSize: 25, color: "#999", font: { size: 9 }, backdropColor: "transparent" }, grid: { color: "rgba(0,0,0,0.1)" }, angleLines: { color: "rgba(0,0,0,0.1)" }, pointLabels: { color: "#333", font: { family: "Georgia, serif", size: 11 } } } },
  };
  return <div style={{ height: "320px" }}><Radar data={data} options={opts} /></div>;
}

export function PartIIIVisuals() {
  return (
    <div style={{ marginTop: "48px", paddingTop: "40px", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontFamily: "Courier New, monospace", fontSize: "0.65rem", letterSpacing: "0.15em", color: GOLD, textTransform: "uppercase", marginBottom: "6px" }}>Part III of V — Visual Companion</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: "700", color: "#f5f0e8", margin: "0 0 8px 0" }}>Data &amp; Diagrams</h2>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: "1.65", margin: 0 }}>The following figures map the five-layer technical architecture of Part III into visual form. Each chart is interactive — click to enlarge.</p>
      </div>
      <div style={card}>
        <div style={figLabel}>Figure 3.1 — System Architecture</div>
        <div style={figTitle}>The Trust Kernel Stack: Five Layers of Trustless Infrastructure</div>
        <div style={figDesc}>The Sotilitarian system is built on five interdependent layers. Each layer is independently auditable, composable with the others, and replaceable without disrupting the stack. Click any layer to explore its role, what it replaces, and how it fails.</div>
        <TrustKernelStack />
      </div>
      <div style={card}>
        <div style={figLabel}>Figure 3.2 — Token Architecture</div>
        <div style={figTitle}>The Three-Token Economy: SOT, SUG, SST</div>
        <div style={figDesc}>Three tokens. One ecosystem. Each serves a distinct purpose — together they form the economic backbone of the Sotilitarian system. Click any token to explore its mechanics.</div>
        <ThreeTokenEconomy />
      </div>
      <div style={card}>
        <div style={figLabel}>Figure 3.3 — Protocol Mechanics</div>
        <div style={figTitle}>The Contribution Verification Loop: Smart Contract Step-by-Step</div>
        <div style={figDesc}>Every contribution to the Sotilitarian ecosystem passes through a five-step verification and reward process. No human intermediary. No discretionary gatekeeping. Navigate each step to see the code.</div>
        <SmartContractNavigator />
      </div>
      <ChartCard label="Figure 3.4 — Architecture Comparison" title="Web2 Stack vs. Sotilitarian 5-Layer Stack: Capability Profile" desc="Across six critical dimensions, the Sotilitarian stack outperforms traditional Web2 infrastructure on every metric that matters for community-governed systems.">
        <ArchitectureRadar />
      </ChartCard>
    </div>
  );
}
