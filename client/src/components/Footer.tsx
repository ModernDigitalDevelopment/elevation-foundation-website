/*
 * ELEVATION RISING — Footer Component
 * Deep navy, gold accents, Courier Prime for data/legal text
 */
import { Link } from "wouter";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

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
            <div className="font-mono-data text-xs text-gold/60">EIN: 92-1042348</div>
          </div>

          {/* Mission */}
          <div>
            <h4 className="section-label mb-4">Mission</h4>
            <ul className="space-y-2">
              {[
                { href: "/our-story", label: "Our Story" },
                { href: "/philosophy", label: "Philosophy" },
                { href: "/sotilitarianism", label: "Sotilitarianism" },
                { href: "/our-work", label: "Our Work" },
                { href: "/white-papers", label: "White Papers" },
                { href: "/about/founder", label: "Founder" },
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
            <h4 className="section-label mt-6 mb-3">Open Source</h4>
            <ul className="space-y-2">
              {[
                { href: "https://github.com/ModernDigitalDevelopment/sotilitarianism", label: "Sotilitarianism" },
                { href: "https://github.com/ModernDigitalDevelopment/transparently", label: "Transparently" },
                { href: "https://github.com/ModernDigitalDevelopment/wesolar", label: "WeSolar" },
                { href: "https://github.com/ModernDigitalDevelopment/elevation-foundation", label: "Elevation Foundation" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white/60 hover:text-gold text-sm font-body transition-colors"
                  >
                    <Github size={11} className="opacity-60" />
                    {link.label}
                  </a>
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
                { href: "/press", label: "Press & Media" },
                { href: "/newsletter", label: "Newsletter Archive" },
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

        {/* Newsletter inline strip */}
        <div className="border-t border-white/10 pt-10 pb-8 mb-2">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="font-display text-lg font-bold text-white mb-1">Stay Updated</div>
              <p className="font-body text-white/50 text-sm max-w-xs">
                Capitalism 2.0 insights, governance updates, and ecosystem news.
              </p>
            </div>
            <div className="flex-1">
              <NewsletterForm variant="inline" source="footer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-data text-xs text-white/30">
            © {new Date().getFullYear()} The Elevation Foundation. All rights reserved. 501(c)(3) Nonprofit · EIN: 92-1042348
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
