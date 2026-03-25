/*
 * ELEVATION FOUNDATION — Footer Component
 * Organic Codex: deep parchment, forest green, ink linework, botanical ornaments
 */
import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-parchment-deep border-t-2 border-[oklch(0.20_0.025_60/18%)] pt-16 pb-8">
      <div className="container">
        {/* Ornamental top divider */}
        <div className="ornament-divider mb-12 text-sm">✦ ✦ ✦</div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="font-display text-xl font-bold text-ink">Elevation</div>
              <div className="font-mono-data text-[9px] tracking-[0.28em] uppercase text-forest-mid">Foundation</div>
            </div>
            <p className="text-ink-faint text-sm font-body leading-relaxed mb-4">
              A 501(c)(3) nonprofit building transparent, community-governed systems for economic empowerment.
            </p>
            <div className="font-mono-data text-xs text-ochre/80">EIN: 88-XXXXXXX</div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="section-label mb-4">Mission</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/our-story", label: "Our Story" },
                { href: "/philosophy", label: "Sotilitarianism" },
                { href: "/our-work", label: "Our Work" },
                { href: "/transparency", label: "Transparency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-faint hover:text-forest text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="section-label mb-4">Projects</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/our-work#transparently", label: "Transparently DApp" },
                { href: "/our-work#wesolar", label: "WeSolar" },
                { href: "/our-work#elevation-engine", label: "Elevation Engine" },
                { href: "/our-work#purus", label: "Purus Project" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-faint hover:text-forest text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="section-label mb-4">Connect</h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { href: "/get-involved", label: "Get Involved" },
                { href: "/donate", label: "Donate" },
                { href: "/blog", label: "Blog & Updates" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ink-faint hover:text-forest text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/ModernDigitalDevelopment", label: "GitHub" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:info@elevationfoundation.org", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 border border-[oklch(0.20_0.025_60/20%)] flex items-center justify-center text-ink-faint hover:text-forest hover:border-forest/40 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="ornament-divider mb-6 text-xs">✦</div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-data text-xs text-ink-faint/60">
            © {new Date().getFullYear()} The Elevation Foundation. All rights reserved. 501(c)(3) Nonprofit.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="font-mono-data text-xs text-ink-faint/50 hover:text-forest/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
