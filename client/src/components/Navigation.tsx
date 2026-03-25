/*
 * ELEVATION FOUNDATION — Navigation Component
 * Organic Codex aesthetic: warm parchment, forest green, ink linework
 * Lora serif nav links, Playfair Display wordmark
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/our-work", label: "Our Work" },
  { href: "/transparency", label: "Transparency" },
  { href: "/blog", label: "Blog" },
  { href: "/get-involved", label: "Get Involved" },
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
          ? "bg-[oklch(0.95_0.025_80/0.96)] backdrop-blur-md border-b border-[oklch(0.20_0.025_60/12%)] shadow-sm"
          : "bg-[oklch(0.95_0.025_80/0.90)] backdrop-blur-sm border-b border-[oklch(0.20_0.025_60/8%)]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-display text-lg md:text-xl font-bold text-ink tracking-tight group-hover:text-forest transition-colors duration-200">
              Elevation
            </span>
            <span className="font-mono-data text-[9px] tracking-[0.28em] uppercase text-forest-mid opacity-80">
              Foundation
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Donate CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/donate"
              className="btn-primary text-sm py-2 px-5"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-ink p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-parchment border-t border-[oklch(0.20_0.025_60/12%)]">
          <div className="container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-light hover:text-forest font-body text-base py-3 border-b border-[oklch(0.20_0.025_60/8%)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="btn-primary mt-4 text-center justify-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
