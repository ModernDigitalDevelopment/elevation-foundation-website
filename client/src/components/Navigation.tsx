/*
 * ELEVATION RISING — Navigation Component
 * Dark navy background, gold accent links, Playfair Display wordmark
 * Sticky top nav with blur backdrop
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/sotilitarianism", label: "Sotilitarianism" },
  { href: "/our-work", label: "Our Work" },
  { href: "/transparency", label: "Transparency" },
  { href: "/blog", label: "Blog" },
  { href: "/white-papers", label: "Research" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/about/founder", label: "About" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[oklch(0.12_0.05_265/0.95)] backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200">
              Elevation
            </span>
            <span className="font-mono-data text-[10px] tracking-[0.25em] uppercase text-gold opacity-80">
              Foundation
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/donate"
              className="px-5 py-2 text-sm font-semibold font-body bg-gold text-[oklch(0.12_0.05_265)] rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_20px_oklch(0.72_0.12_75/0.4)]"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[oklch(0.14_0.05_265)] border-t border-white/10">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold font-body text-base py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-2 px-5 py-3 text-sm font-semibold font-body bg-gold text-[oklch(0.12_0.05_265)] rounded-sm text-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
