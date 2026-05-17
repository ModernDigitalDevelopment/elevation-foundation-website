/*
 * ELEVATION RISING — Navigation Component
 * Desktop: persistent horizontal nav with all links visible
 * Mobile: hamburger menu with full dropdown grid
 * Dark navy background, gold accent links, Playfair Display wordmark
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

const primaryLinks = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/sotilitarianism", label: "Sotilitarianism" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
];

const moreLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/wesolar", label: "WeSolar" },
  { href: "/token-economy", label: "Token Economy" },
  { href: "/transparency", label: "Transparency" },
  { href: "/white-papers", label: "Research" },
  { href: "/for-funders", label: "For Funders" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/about/founder", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/media-kit", label: "Media Kit" },
  { href: "/newsletter", label: "Newsletter" },
];

const allMobileLinks = [...primaryLinks, ...moreLinks];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [location] = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Close more dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    if (moreOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const isActive = (href: string) => location === href;
  const isMoreActive = moreLinks.some(l => location === l.href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileOpen
          ? "bg-[oklch(0.12_0.05_265/0.97)] backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none group flex-shrink-0">
            <span className="font-display text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200">
              Elevation
            </span>
            <span className="font-mono-data text-[10px] tracking-[0.25em] uppercase text-gold opacity-80">
              Foundation
            </span>
          </Link>

          {/* ── DESKTOP NAV ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm px-3.5 py-2 rounded-sm transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-gold bg-gold/10"
                    : "text-white/70 hover:text-gold hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* "More" dropdown */}
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1 font-body text-sm px-3.5 py-2 rounded-sm transition-all duration-200 ${
                  isMoreActive
                    ? "text-gold bg-gold/10"
                    : "text-white/70 hover:text-gold hover:bg-white/5"
                }`}
                aria-expanded={moreOpen}
                aria-label="More navigation links"
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* More dropdown panel */}
              <div
                className={`absolute top-full right-0 mt-2 w-52 bg-[oklch(0.14_0.05_265/0.98)] backdrop-blur-md border border-white/10 rounded-sm shadow-2xl overflow-hidden transition-all duration-200 ${
                  moreOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block font-body text-sm px-4 py-2.5 transition-all duration-150 border-b border-white/5 last:border-0 ${
                      isActive(link.href)
                        ? "text-gold bg-gold/10"
                        : "text-white/70 hover:text-gold hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Donate + mobile hamburger */}
          <div className="flex items-center gap-3">
            {isAdmin && (
              <Link
                href="/admin"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold font-body text-white/60 hover:text-gold border border-white/20 hover:border-gold/40 rounded-sm transition-all duration-200"
              >
                <Settings size={12} />
                Admin
              </Link>
            )}
            <Link
              href="/donate"
              className="px-4 py-2 text-sm font-semibold font-body bg-gold text-[oklch(0.12_0.05_265)] rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_20px_oklch(0.72_0.12_75/0.4)]"
            >
              Donate
            </Link>
            {/* Mobile-only hamburger */}
            <button
              className="lg:hidden text-white p-2 hover:text-gold transition-colors duration-200 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ──────────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[oklch(0.12_0.05_265/0.98)] border-t border-white/10">
          <div className="container py-6">
            <div className="grid grid-cols-2 gap-1">
              {allMobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-base py-3 px-4 rounded-sm transition-all duration-200 group flex items-center gap-2 ${
                    location === link.href
                      ? "text-gold bg-gold/10"
                      : "text-white/75 hover:text-gold hover:bg-white/5"
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono-data text-xs text-white/30 uppercase tracking-wider">
                501(c)(3) · Blockchain Governance
              </span>
              <Link
                href="/donate"
                className="text-gold font-body text-sm font-medium hover:text-gold-light transition-colors"
              >
                Support the Mission →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
