import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-lg">
          <div className="font-mono-data text-[8rem] font-bold text-gold/10 leading-none mb-2">404</div>
          <div className="section-label mb-4">Page Not Found</div>
          <h1 className="font-display text-4xl font-bold text-white mb-4">
            This Path Does Not Exist
          </h1>
          <p className="font-body text-white/60 text-lg leading-relaxed mb-8">
            The page you are looking for has not been built yet — or has been moved. Return to the Foundation and continue the journey.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 group"
          >
            Return Home
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
