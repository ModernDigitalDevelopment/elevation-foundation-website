/*
 * ELEVATION RISING — Footer Component
 * Deep navy, gold accents, Courier Prime for data/legal text
 */
import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.10_0.05_265)] border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="font-display text-xl font-bold text-white">Elevation</div>
              <div className="font-mono-data text-[10px] tracking-[0.25em] uppercase text-gold">Foundation</div>
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-4">
              A 501(c)(3) nonprofit building transparent, community-governed systems for economic empowerment.
            </p>
            <div className="font-mono-data text-xs text-gold/60">EIN: 88-XXXXXXX</div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="section-label mb-4">Mission</h4>
            <ul className="space-y-2">
              {[
                { href: "/our-story", label: "Our Story" },
                { href: "/philosophy", label: "Sotilitarianism" },
                { href: "/our-work", label: "Our Work" },
                { href: "/transparency", label: "Transparency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="section-label mb-4">Projects</h4>
            <ul className="space-y-2">
              {[
                { href: "/our-work#transparently", label: "Transparently DApp" },
                { href: "/our-work#wesolar", label: "WeSolar" },
                { href: "/our-work#elevation-engine", label: "Elevation Engine" },
                { href: "/our-work#sogood", label: "SoGood Platform" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="section-label mb-4">Connect</h4>
            <ul className="space-y-2 mb-6">
              {[
                { href: "/get-involved", label: "Get Involved" },
                { href: "/donate", label: "Donate" },
                { href: "/blog", label: "Blog & Updates" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm font-body transition-colors">
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
                  className="w-8 h-8 rounded-sm border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/40 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-data text-xs text-white/30">
            © {new Date().getFullYear()} The Elevation Foundation. All rights reserved. 501(c)(3) Nonprofit.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="font-mono-data text-xs text-white/30 hover:text-gold/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
