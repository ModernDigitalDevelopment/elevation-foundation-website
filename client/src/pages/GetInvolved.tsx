/*
 * ELEVATION RISING — Get Involved Page
 * Developer contributions, community roles, token rewards
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { ArrowRight, Github, Code, Users, Megaphone, BookOpen } from "lucide-react";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-bg-RdFx47xnXRjkf2fcLDsprJ.png";

const roles = [
  {
    icon: Code,
    title: "Developer",
    desc: "Build the smart contracts, frontend applications, and backend systems that power the Elevation ecosystem. Every merged PR earns SOT governance tokens.",
    rewards: ["SOT tokens per contribution", "GitHub Copilot Pro+ access", "Public attribution", "Governance voting rights"],
    color: "text-gold",
    borderColor: "border-gold/30",
    bgColor: "bg-gold/5",
    cta: "View Open Issues",
    ctaHref: "https://github.com/ModernDigitalDevelopment",
  },
  {
    icon: Users,
    title: "Community Organizer",
    desc: "Bring the Elevation Foundation's tools to your community. Organize workshops, onboard new members, and help people understand and use blockchain governance.",
    rewards: ["SUG utility tokens", "Community steward title", "Direct line to leadership", "Grant eligibility"],
    color: "text-teal",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/5",
    cta: "Apply as Organizer",
    ctaHref: "#apply",
  },
  {
    icon: Megaphone,
    title: "Ambassador",
    desc: "Spread the Sotilitarianism philosophy. Write articles, create content, speak at events, and grow the movement through education and advocacy.",
    rewards: ["SOT token rewards", "Speaking opportunities", "Co-authorship credits", "Network access"],
    color: "text-crimson",
    borderColor: "border-crimson/30",
    bgColor: "bg-crimson/5",
    cta: "Become an Ambassador",
    ctaHref: "#apply",
  },
  {
    icon: BookOpen,
    title: "Researcher",
    desc: "Contribute to the philosophical and technical foundations of Sotilitarianism. Write white papers, conduct community research, and help shape policy.",
    rewards: ["Research grants", "Publication credits", "SOT governance tokens", "Academic partnerships"],
    color: "text-white/70",
    borderColor: "border-white/20",
    bgColor: "bg-white/5",
    cta: "Submit Research Proposal",
    ctaHref: "#apply",
  },
];

const openIssues = [
  { repo: "transparently", title: "Build SoGoodDAOFactory governance deployment UI", difficulty: "Intermediate", tokens: "500 SOT", label: "Frontend" },
  { repo: "elevation-foundation", title: "Implement SotilityTreasuryRouter 40/40/20 distribution logic", difficulty: "Advanced", tokens: "2,000 SOT", label: "DeFi" },
  { repo: "wesolar", title: "WeSolarCrowdfund: fractional NFT ownership contract", difficulty: "Advanced", tokens: "1,500 SOT", label: "Solidity" },
  { repo: "wesolar", title: "IOTA Tangle integration for feeless energy microtransactions", difficulty: "Intermediate", tokens: "800 SOT", label: "Architecture" },
  { repo: "sotilitarianism", title: "Expanded Sotilitarianism white paper — academic citations", difficulty: "Beginner", tokens: "300 SOT", label: "Writing" },
  { repo: "transparently", title: "Transparency Score algorithm design and smart contract audit", difficulty: "Advanced", tokens: "1,800 SOT", label: "Security" },
  { repo: "transparently", title: "Community attestation system for contribution verification", difficulty: "Intermediate", tokens: "600 SOT", label: "Architecture" },
  { repo: "elevation-foundation", title: "AI arbitrage strategy optimizer for Elevation Engine", difficulty: "Advanced", tokens: "2,500 SOT", label: "AI/ML" },
];

export default function GetInvolved() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application received! We will be in touch within 48 hours.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Get Involved | The Elevation Foundation"
        description="Join the Elevation Foundation as a developer, community organizer, ambassador, or researcher. Contribute code, community, or content and earn SOT governance tokens. The revolution will be tokenized."
        canonical="/get-involved"
        keywords="get involved blockchain nonprofit, SOT token rewards, open source blockchain, community organizer, developer contributions, Sotilitarianism ambassador, capitalism 2.0 movement, social capitalism community, transparent economics, trust tech, transparency tech, participatory economics"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Get Involved</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              The Revolution
              <br />
              <span className="gold-shimmer">Will Be Tokenized</span>
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl">
              Every contribution to the Elevation Foundation — code, community, content, or capital — earns you a stake in the ecosystem you are helping to build. This is not volunteering. This is ownership.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ROLES ────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="section-label mb-4">How to Contribute</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
            Find Your Role
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map(({ icon: Icon, title, desc, rewards, color, borderColor, bgColor, cta, ctaHref }) => (
              <div key={title} className={`p-8 border ${borderColor} ${bgColor} rounded-sm card-lift`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-sm border border-current/30 mb-5 ${color}`}
                  style={{ background: "oklch(0.16 0.05 265)" }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="font-body text-white/65 text-sm leading-relaxed mb-5">{desc}</p>
                <div className="mb-6">
                  <div className="font-mono-data text-xs text-white/40 uppercase tracking-wider mb-2">Rewards</div>
                  <div className="space-y-1.5">
                    {rewards.map((reward) => (
                      <div key={reward} className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0 ${color}`} style={{ background: "currentColor" }} />
                        <span className="font-body text-sm text-white/60">{reward}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={ctaHref}
                  target={ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 ${color} font-body text-sm font-medium hover:gap-3 transition-all`}
                >
                  {cta} <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN ISSUES ──────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="section-label mb-2">Open Bounties</div>
              <h2 className="font-display text-3xl font-bold text-white">
                Earn SOT by Contributing
              </h2>
            </div>
            <a
              href="https://github.com/ModernDigitalDevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:gap-3 transition-all group"
            >
              <Github size={16} />
              View All on GitHub
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="space-y-3">
            {openIssues.map((issue) => (
              <div key={issue.title} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm hover:border-gold/20 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="font-mono-data text-xs text-white/30 bg-white/5 px-2 py-1 rounded-sm">{issue.label}</span>
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-white group-hover:text-gold transition-colors mb-1">{issue.title}</div>
                    <div className="font-mono-data text-xs text-white/40">{issue.repo}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 flex-shrink-0">
                  <span className={`font-mono-data text-xs px-2 py-1 rounded-sm border ${
                    issue.difficulty === "Advanced" ? "text-crimson border-crimson/30 bg-crimson/10" :
                    issue.difficulty === "Intermediate" ? "text-gold border-gold/30 bg-gold/10" :
                    "text-teal border-teal/30 bg-teal/10"
                  }`}>
                    {issue.difficulty}
                  </span>
                  <span className="font-mono-data text-sm text-gold font-bold">{issue.tokens}</span>
                  <a
                    href={`https://github.com/ModernDigitalDevelopment/${issue.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/30 hover:text-gold transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ─────────────────────────────────── */}
      <section id="apply" className="py-20 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="section-label mb-4">Apply</div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Join the Ecosystem
              </h2>
              <p className="font-body text-white/65 leading-relaxed mb-8">
                Whether you are a developer, organizer, researcher, or just someone who believes in the mission — there is a place for you here. Fill out the form and we will reach out within 48 hours.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Onboarding Call", desc: "30-minute intro call to understand your skills and interests" },
                  { title: "Role Assignment", desc: "We match you with the right projects and bounties" },
                  { title: "SOT Wallet Setup", desc: "We help you set up your governance token wallet" },
                  { title: "First Contribution", desc: "Make your first contribution and earn your first SOT" },
                ].map(({ title, desc }, i) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <span className="font-mono-data text-xs text-gold">{i + 1}</span>
                    </div>
                    <div>
                      <div className="font-body font-semibold text-white text-sm mb-0.5">{title}</div>
                      <div className="font-body text-sm text-white/55">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="p-10 bg-[oklch(0.16_0.05_265)] border border-gold/30 rounded-sm text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Application Received</h3>
                  <p className="font-body text-white/65">We will be in touch within 48 hours. Welcome to the movement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-sm text-white/60 mb-1.5 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-white/60 mb-1.5 block">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-white/60 mb-1.5 block">How do you want to contribute? *</label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body focus:border-gold/50 focus:outline-none transition-colors"
                    >
                      <option value="" disabled>Select a role</option>
                      <option value="developer">Developer / Engineer</option>
                      <option value="organizer">Community Organizer</option>
                      <option value="ambassador">Ambassador / Content Creator</option>
                      <option value="researcher">Researcher / Writer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-white/60 mb-1.5 block">Tell us about yourself</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your background, skills, and why you want to join the Elevation Foundation..."
                      className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold text-[oklch(0.12_0.05_265)] font-bold font-body text-base rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.4)]"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
