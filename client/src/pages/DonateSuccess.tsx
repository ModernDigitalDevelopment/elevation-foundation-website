/*
 * ELEVATION FOUNDATION — Donation Success Page
 * Shown after a successful Stripe checkout
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function DonateSuccess() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navigation />

      <section className="min-h-[80vh] flex items-center justify-center py-32">
        <div className="container text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-teal/20 border-2 border-teal flex items-center justify-center">
              <CheckCircle size={40} className="text-teal" />
            </div>
          </div>

          <div className="section-label mb-4">Thank You</div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            Your Donation Was
            <br />
            <span className="gold-shimmer">Received</span>
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed mb-8">
            Thank you for supporting the Elevation Foundation. Your contribution goes directly to building transparent, community-governed financial infrastructure. A tax receipt will be sent to your email.
          </p>

          <div className="p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm mb-8 text-left">
            <h3 className="font-display text-lg font-bold text-white mb-3">What Happens Next</h3>
            <div className="space-y-3">
              {[
                "You will receive a donation receipt via email within a few minutes.",
                "Your contribution is recorded in our transparent on-chain treasury.",
                "Funds are allocated by community governance vote per our published budget.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span className="font-body text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all group"
            >
              Back to Home <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/transparency"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium rounded-sm hover:border-gold/50 hover:text-gold transition-all"
            >
              View Transparency Dashboard
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
