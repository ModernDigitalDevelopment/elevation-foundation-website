/*
 * ELEVATION RISING — Donate Page
 * Tax-deductible donations, crypto donations, recurring giving
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Copy, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-bg-RdFx47xnXRjkf2fcLDsprJ.png";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactItems = [
  { amount: "$25", impact: "Funds one hour of smart contract development" },
  { amount: "$50", impact: "Covers gas fees for 10 governance transactions" },
  { amount: "$100", impact: "Sponsors one community governance workshop" },
  { amount: "$250", impact: "Funds one week of WeSolar pilot research" },
  { amount: "$500", impact: "Covers one month of server infrastructure" },
  { amount: "$1,000", impact: "Sponsors a full smart contract security audit" },
];

const cryptoAddresses = [
  { chain: "Ethereum (ETH)", symbol: "ETH", address: "0x742d35Cc6634C0532925a3b8D4C9C2D4E8b1234F", note: "ERC-20 tokens also accepted" },
  { chain: "Polygon (MATIC)", symbol: "MATIC", address: "0x742d35Cc6634C0532925a3b8D4C9C2D4E8b1234F", note: "Lower gas fees" },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    toast.success("Address copied to clipboard");
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleStripeCheckout = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    toast.info("Stripe integration coming soon — thank you for your support!");
  };

  return (
    <div className="min-h-screen bg-navy text-white">
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
            <div className="section-label mb-4">Support the Mission</div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Fund the
              <br />
              <span className="gold-shimmer">Infrastructure</span>
              <br />
              of Liberation
            </h1>
            <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl">
              The Elevation Foundation is a 501(c)(3) nonprofit. Your donation is tax-deductible and goes directly to building the transparent, community-governed financial systems that underserved communities deserve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DONATION FORM ────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="section-label mb-4">Make a Donation</div>
              <h2 className="font-display text-3xl font-bold text-white mb-8">
                Choose Your Impact
              </h2>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="font-body text-sm text-white/60 mb-3 block">Select Amount (USD)</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                      className={`py-3 font-body font-semibold text-sm rounded-sm border transition-all duration-200 ${
                        selectedAmount === amount && !customAmount
                          ? "bg-gold text-[oklch(0.12_0.05_265)] border-gold"
                          : "border-white/20 text-white/70 hover:border-gold/50 hover:text-gold"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-body">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    className="w-full pl-8 pr-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Donor Info */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-white/60 mb-1.5 block">First Name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-white/60 mb-1.5 block">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm text-white/60 mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Recurring Option */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <input type="checkbox" id="recurring" className="w-4 h-4 accent-gold" />
                <label htmlFor="recurring" className="font-body text-sm text-white/70 cursor-pointer">
                  Make this a monthly recurring donation
                </label>
              </div>

              {/* Submit */}
              <button
                onClick={handleStripeCheckout}
                className="w-full py-4 bg-gold text-[oklch(0.12_0.05_265)] font-bold font-body text-lg rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.4)]"
              >
                Donate {customAmount ? `$${customAmount}` : selectedAmount ? `$${selectedAmount}` : ""} Now
              </button>

              <p className="font-body text-xs text-white/35 mt-3 text-center">
                Secure payment via Stripe. Tax receipt provided by email. EIN: 88-XXXXXXX
              </p>
            </div>

            {/* Impact Info */}
            <div>
              <div className="section-label mb-4">Your Impact</div>
              <h2 className="font-display text-3xl font-bold text-white mb-8">
                Where Your Money Goes
              </h2>
              <div className="space-y-4 mb-10">
                {impactItems.map(({ amount, impact }) => (
                  <div key={amount} className="flex items-center gap-4 p-4 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                    <div className="font-display text-xl font-bold text-gold flex-shrink-0 w-16">{amount}</div>
                    <div className="font-body text-sm text-white/70">{impact}</div>
                  </div>
                ))}
              </div>

              {/* Tax Info */}
              <div className="p-6 border border-gold/20 bg-gold/5 rounded-sm">
                <h3 className="font-display text-lg font-bold text-white mb-3">Tax Deductibility</h3>
                <p className="font-body text-sm text-white/65 leading-relaxed mb-3">
                  The Elevation Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent permitted by law. You will receive an official donation receipt via email.
                </p>
                <div className="font-mono-data text-xs text-gold/60">EIN: 88-XXXXXXX (pending)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CRYPTO DONATIONS ─────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="section-label mb-4">Crypto Donations</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Donate with Cryptocurrency
            </h2>
            <p className="font-body text-white/65 leading-relaxed mb-8">
              We accept ETH, MATIC, and ERC-20 tokens. Crypto donations are processed on-chain and recorded transparently in our treasury. Send to the addresses below.
            </p>
            <div className="space-y-4">
              {cryptoAddresses.map(({ chain, symbol, address, note }) => (
                <div key={chain} className="p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-body font-semibold text-white text-sm">{chain}</span>
                      <span className="font-mono-data text-xs text-white/40 ml-3">{note}</span>
                    </div>
                    <span className="font-mono-data text-xs text-gold/70 px-2 py-1 bg-gold/10 border border-gold/20 rounded-sm">{symbol}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="font-mono-data text-xs text-white/60 flex-1 break-all">{address}</code>
                    <button
                      onClick={() => handleCopy(address)}
                      className="flex-shrink-0 text-white/40 hover:text-gold transition-colors"
                    >
                      {copiedAddress === address ? <CheckCircle size={16} className="text-teal" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-white/35 mt-4">
              Note: Crypto donation tax receipts require additional documentation. Contact us at donations@elevationfoundation.org for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OTHER WAYS TO GIVE ───────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          <div className="section-label mb-4">Other Ways to Give</div>
          <h2 className="font-display text-3xl font-bold text-white mb-10">
            More Than Money
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Contribute Code", desc: "Every merged pull request earns SOT governance tokens. Developers are the backbone of this movement.", cta: "View Open Issues", href: "https://github.com/ModernDigitalDevelopment" },
              { title: "Spread the Word", desc: "Share our mission with your network. Every new community member strengthens the ecosystem.", cta: "Share on Twitter", href: "#" },
              { title: "Corporate Matching", desc: "Many employers match charitable donations. Check if your company has a matching program.", cta: "Learn More", href: "/get-involved" },
            ].map(({ title, desc, cta, href }) => (
              <div key={title} className="p-7 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm card-lift">
                <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-5">{desc}</p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-gold font-body text-sm font-medium hover:gap-2 transition-all"
                >
                  {cta} <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
