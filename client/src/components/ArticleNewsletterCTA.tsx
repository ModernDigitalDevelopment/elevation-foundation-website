/**
 * ARTICLE NEWSLETTER CTA
 * Branded newsletter signup section placed at the bottom of each
 * Sotilitarian Capitalism series article, before the series navigator.
 * Uses the existing trpc.newsletter.subscribe mutation.
 */
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

interface ArticleNewsletterCTAProps {
  /** Optional custom headline for the article's topic */
  headline?: string;
  /** Optional custom subtext */
  subtext?: string;
}

export default function ArticleNewsletterCTA({
  headline = "Stay Ahead of the Economic Revolution",
  subtext = "Join the Elevation Foundation community. Get new research, governance updates, and blockchain economics insights delivered to your inbox.",
}: ArticleNewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setEmail("");
      setFirstName("");
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    subscribe.mutate({ email: email.trim(), firstName: firstName.trim() || undefined });
  };

  if (submitted) {
    return (
      <div className="mt-16 mb-8 p-8 bg-[oklch(0.16_0.05_265)] border border-gold/20 rounded-sm">
        <div className="flex flex-col items-center text-center gap-4">
          <CheckCircle2 size={40} className="text-gold" />
          <h3 className="font-display text-2xl font-bold text-white">You're In.</h3>
          <p className="font-body text-white/65 max-w-md">
            Welcome to the Elevation Foundation community. Watch your inbox — the next dispatch is coming soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 mb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.08_265)] to-[oklch(0.14_0.05_265)] rounded-sm" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="relative p-8 md:p-10 border border-gold/15 rounded-sm">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <Mail size={14} className="text-gold" />
          <span className="font-mono-data text-xs text-gold/70 uppercase tracking-widest">
            Elevation Foundation Newsletter
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: copy */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
              {headline}
            </h3>
            <p className="font-body text-white/60 text-base leading-relaxed">
              {subtext}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Blockchain Governance", "Token Economics", "Transparency Tech"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 font-mono-data text-xs text-gold/60 border border-gold/20 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="First name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="
                w-full px-4 py-3 bg-[oklch(0.12_0.05_265)] border border-white/15
                text-white placeholder-white/30 font-body text-sm rounded-sm
                focus:outline-none focus:border-gold/40 transition-colors
              "
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full px-4 py-3 bg-[oklch(0.12_0.05_265)] border border-white/15
                text-white placeholder-white/30 font-body text-sm rounded-sm
                focus:outline-none focus:border-gold/40 transition-colors
              "
            />
            {error && (
              <p className="font-body text-xs text-red-400">{error}</p>
            )}
            <button
              type="submit"
              disabled={subscribe.isPending}
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)]
                font-body font-semibold text-sm rounded-sm
                hover:bg-gold/90 transition-all duration-200
                hover:shadow-[0_0_20px_oklch(0.72_0.12_75/0.3)]
                disabled:opacity-60 disabled:cursor-not-allowed
                group
              "
            >
              {subscribe.isPending ? (
                "Subscribing..."
              ) : (
                <>
                  Join the Community
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
            <p className="font-body text-xs text-white/30 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
