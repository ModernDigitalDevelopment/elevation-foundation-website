/**
 * NewsletterForm — reusable subscription form.
 * Can be embedded inline (variant="inline") or as a full section (variant="section").
 */
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  /** Visual variant — "inline" for compact embed, "section" for full-width hero band */
  variant?: "inline" | "section";
  /** Where the form is placed — passed to the backend for analytics */
  source?: string;
  /** Optional heading override */
  heading?: string;
  /** Optional sub-heading override */
  subheading?: string;
}

export default function NewsletterForm({
  variant = "section",
  source = "website",
  heading = "Stay in the Loop",
  subheading = "Get updates on Sotilitarianism, blockchain governance, community finance, and the Elevation Foundation's latest work — delivered straight to your inbox.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess(data) {
      setAlreadySubscribed(data.alreadySubscribed);
      setSubmitted(true);
      setEmail("");
      setFirstName("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    subscribe.mutate({ email: email.trim(), firstName: firstName.trim() || undefined, source });
  };

  if (submitted) {
    return (
      <div className={variant === "section" ? "py-20 bg-[oklch(0.14_0.05_265)]" : ""}>
        <div className={variant === "section" ? "container text-center" : "text-center py-6"}>
          <CheckCircle size={48} className="text-gold mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            {alreadySubscribed ? "You're already subscribed!" : "You're in!"}
          </h3>
          <p className="font-body text-white/60 max-w-md mx-auto">
            {alreadySubscribed
              ? "That email is already on our list. We'll keep sending you the good stuff."
              : "Welcome to the movement. Watch your inbox for updates on transparent economics, capitalism 2.0, and the Elevation ecosystem."}
          </p>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
        <input
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
        />
        <button
          type="submit"
          disabled={subscribe.isPending}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body text-sm rounded-sm hover:bg-gold-light transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
        >
          {subscribe.isPending ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />}
          Subscribe
        </button>
        {subscribe.isError && (
          <p className="text-crimson text-xs mt-1 w-full">{subscribe.error.message}</p>
        )}
      </form>
    );
  }

  // "section" variant — full-width band
  return (
    <section className="py-20 bg-[oklch(0.14_0.05_265)] border-y border-white/10 relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.72 0.12 75) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 rounded-full mb-6">
            <Mail size={12} className="text-gold" />
            <span className="font-mono-data text-xs text-gold/80 uppercase tracking-widest">Newsletter</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="font-body text-white/60 text-lg leading-relaxed mb-8">
            {subheading}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="First name (optional)"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="w-full sm:w-36 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-gold/60 transition-colors"
            />
            <button
              type="submit"
              disabled={subscribe.isPending}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body text-sm rounded-sm hover:bg-gold-light transition-all duration-200 disabled:opacity-60 whitespace-nowrap hover:shadow-[0_0_24px_oklch(0.72_0.12_75/0.4)]"
            >
              {subscribe.isPending ? <Loader2 size={14} className="animate-spin" /> : <Mail size={14} />}
              Subscribe Free
            </button>
          </form>

          {subscribe.isError && (
            <p className="text-crimson text-sm mt-3">{subscribe.error.message}</p>
          )}

          <p className="font-body text-white/30 text-xs mt-4">
            No spam. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
