/**
 * NEWSLETTER BANNER
 * A subtle, sleek above-the-fold newsletter CTA.
 * Designed to be placed just below the hero section on key pages.
 * Dismissible — stores dismissal in sessionStorage so it doesn't reappear on the same visit.
 */
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { X, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const DISMISS_KEY = "ef_newsletter_banner_dismissed";

export default function NewsletterBanner() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Only show if not dismissed this session
    const dismissed = sessionStorage.getItem(DISMISS_KEY);
    if (!dismissed) {
      // Slight delay so it doesn't pop in immediately
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem(DISMISS_KEY, "1");
      }, 3000);
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) return;
    subscribe.mutate({ email: email.trim() });
  };

  if (!visible) return null;

  return (
    <div
      className={`
        w-full bg-[oklch(0.16_0.05_265)] border-b border-gold/15
        transition-all duration-500
        ${visible ? "opacity-100 max-h-24" : "opacity-0 max-h-0 overflow-hidden"}
      `}
      role="complementary"
      aria-label="Newsletter signup"
    >
      <div className="container py-3">
        {submitted ? (
          <div className="flex items-center justify-center gap-2 py-1">
            <CheckCircle2 size={14} className="text-gold" />
            <span className="font-body text-sm text-gold">You're in — welcome to the community.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            {/* Label */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Mail size={13} className="text-gold/70" />
              <span className="font-mono-data text-xs text-white/50 uppercase tracking-wider hidden sm:block">
                Join the Community
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-4 bg-white/15" />

            {/* Tagline */}
            <span className="font-body text-xs text-white/55 hidden md:block flex-shrink-0">
              Blockchain governance · Token economics · Transparent finance
            </span>

            {/* Input + button */}
            <div className="flex items-center gap-2 flex-1 w-full sm:w-auto sm:max-w-xs">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  flex-1 px-3 py-1.5 bg-[oklch(0.12_0.05_265)] border border-white/15
                  text-white placeholder-white/30 font-body text-xs rounded-sm
                  focus:outline-none focus:border-gold/40 transition-colors
                "
              />
              <button
                type="submit"
                disabled={subscribe.isPending}
                className="
                  inline-flex items-center gap-1.5 px-3 py-1.5
                  bg-gold text-[oklch(0.12_0.05_265)]
                  font-body font-semibold text-xs rounded-sm
                  hover:bg-gold/90 transition-all duration-200
                  disabled:opacity-60 group flex-shrink-0
                "
              >
                {subscribe.isPending ? "..." : (
                  <>
                    Subscribe
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <span className="font-body text-xs text-red-400">{error}</span>
            )}

            {/* Dismiss */}
            <button
              type="button"
              onClick={handleDismiss}
              className="ml-auto flex-shrink-0 text-white/30 hover:text-white/60 transition-colors"
              aria-label="Dismiss newsletter banner"
            >
              <X size={14} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
