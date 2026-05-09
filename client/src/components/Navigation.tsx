/*
 * ELEVATION RISING — Navigation Component
 * Hamburger menu on all screen sizes — clean, minimal, no crowding
 * Dark navy background, gold accent links, Playfair Display wordmark
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isDark = theme === "dark";

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen
          ? isDark
            ? "bg-[oklch(0.12_0.05_265/0.97)] backdrop-blur-md border-b border-white/10"
            : "bg-[oklch(0.97_0.008_75/0.97)] backdrop-blur-md border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/manus-storage/elevation-foundation-logo_41f0c646.png"
              alt="Elevation Foundation"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Right side: Theme toggle + Donate + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`p-2 rounded-sm transition-all duration-200 focus:outline-none ${
                  isDark
                    ? "text-white/70 hover:text-gold hover:bg-white/5"
                    : "text-[oklch(0.25_0.05_265)] hover:text-[oklch(0.50_0.12_75)] hover:bg-black/5"
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link
              href="/donate"
              className="px-4 py-2 text-sm font-semibold font-body bg-gold text-[oklch(0.12_0.05_265)] rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_20px_oklch(0.72_0.12_75/0.4)]"
            >
              Donate
            </Link>
            <button
              className={`p-2 transition-colors duration-200 focus:outline-none ${
                isDark
                  ? "text-white hover:text-gold"
                  : "text-[oklch(0.15_0.05_265)] hover:text-[oklch(0.50_0.12_75)]"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width dropdown menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`border-t ${isDark ? "bg-[oklch(0.12_0.05_265/0.98)] border-white/10" : "bg-[oklch(0.97_0.008_75/0.98)] border-black/10"}`}>
          <div className="container py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-base py-3 px-4 rounded-sm transition-all duration-200 group flex items-center gap-2 ${
                    location === link.href
                      ? "text-gold bg-gold/10"
                      : isDark
                        ? "text-white/75 hover:text-gold hover:bg-white/5"
                        : "text-[oklch(0.25_0.05_265)] hover:text-[oklch(0.50_0.12_75)] hover:bg-black/5"
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={`mt-4 pt-4 border-t flex items-center justify-between ${isDark ? "border-white/10" : "border-black/10"}`}>
              <span className={`font-mono-data text-xs uppercase tracking-wider ${isDark ? "text-white/30" : "text-[oklch(0.45_0.03_265)]"}`}>
                501(c)(3) · Blockchain Governance · Community Finance
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
