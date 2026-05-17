/*
 * ELEVATION RISING — Individual Blog Post Page
 * Layout inspired by the Electric Brew editorial format:
 *   - Warm off-white page background (#f5f5f2)
 *   - White raised card with rounded corners and soft shadow
 *   - Georgia serif typography, dark text (#111827 headings, #222 body)
 *   - Cover image full-width inside card with rounded corners
 * Navigation and footer remain dark (site chrome unchanged).
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import StickyShareBar from "@/components/StickyShareBar";
import ArticleNewsletterCTA from "@/components/ArticleNewsletterCTA";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Loader2,
  AlertCircle,
  Copy,
  Check,
  Share2,
} from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";
import { useState, useEffect, useRef, lazy, Suspense } from "react";

// ─── LAZY-LOADED VISUAL COMPONENTS ──────────────────────────────────────────
const PartIVisuals = lazy(() =>
  import("@/components/visuals/PartIVisuals").then((m) => ({ default: m.PartIVisuals }))
);
const PartIIVisuals = lazy(() =>
  import("@/components/visuals/PartIIVisuals").then((m) => ({ default: m.PartIIVisuals }))
);
const PartIIIVisuals = lazy(() =>
  import("@/components/visuals/PartIIIVisuals").then((m) => ({ default: m.PartIIIVisuals }))
);
const PartIVVisuals = lazy(() =>
  import("@/components/visuals/PartIVVisuals").then((m) => ({ default: m.PartIVVisuals }))
);
const PartVVisuals = lazy(() =>
  import("@/components/visuals/PartVVisuals").then((m) => ({ default: m.PartVVisuals }))
);

const SLUG_TO_VISUALS: Record<string, React.ComponentType> = {
  "sotilitarian-capitalism-part-i-the-new-economic-operating-system": PartIVisuals,
  "sotilitarian-capitalism-continuous-consent-political-framework": PartIIVisuals,
  "sotilitarian-capitalism-part-iii-the-five-layer-technical-architecture": PartIIIVisuals,
  "sotilitarian-capitalism-part-4-implementation-strategy-trojan-horse-effect": PartIVVisuals,
  "sotilitarian-capitalism-part-v-future-of-economics-beyond-binary-debate": PartVVisuals,
};

function VisualsLoadingFallback() {
  return (
    <div className="my-10 p-8 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center gap-3">
      <Loader2 size={18} className="animate-spin text-gray-400" />
      <span className="font-mono text-xs text-gray-400">Loading interactive visualizations...</span>
    </div>
  );
}

function PostVisuals({ slug }: { slug: string }) {
  const VisualsComponent = SLUG_TO_VISUALS[slug];
  if (!VisualsComponent) return null;
  return (
    <div className="mt-12 pt-10 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px bg-gray-300" />
        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
          Interactive Data Visualizations
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <p className="text-sm text-gray-500 mb-8 italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        The following charts and diagrams are interactive. Click, hover, and explore.
      </p>
      <Suspense fallback={<VisualsLoadingFallback />}>
        <VisualsComponent />
      </Suspense>
    </div>
  );
}

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// ─── SERIES DEFINITION ──────────────────────────────────────────────────────
const SOTILITARIAN_CAPITALISM_SERIES = [
  { part: 1, title: "The New Economic Operating System", slug: "sotilitarian-capitalism-part-i-the-new-economic-operating-system" },
  { part: 2, title: "Continuous Consent and the Political Framework", slug: "sotilitarian-capitalism-continuous-consent-political-framework" },
  { part: 3, title: "The Five-Layer Technical Architecture", slug: "sotilitarian-capitalism-part-iii-the-five-layer-technical-architecture" },
  { part: 4, title: "Implementation Strategy — The Trojan Horse Effect", slug: "sotilitarian-capitalism-part-4-implementation-strategy-trojan-horse-effect" },
  { part: 5, title: "The Future of Economics — Beyond the Binary Debate", slug: "sotilitarian-capitalism-part-v-future-of-economics-beyond-binary-debate" },
];

function SeriesNavigator({ currentSlug }: { currentSlug: string }) {
  const currentIndex = SOTILITARIAN_CAPITALISM_SERIES.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const current = SOTILITARIAN_CAPITALISM_SERIES[currentIndex];
  const prev = currentIndex > 0 ? SOTILITARIAN_CAPITALISM_SERIES[currentIndex - 1] : null;
  const next = currentIndex < SOTILITARIAN_CAPITALISM_SERIES.length - 1
    ? SOTILITARIAN_CAPITALISM_SERIES[currentIndex + 1]
    : null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-6 h-px bg-gray-300" />
        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
          Sotilitarian Capitalism · Part {current.part} of {SOTILITARIAN_CAPITALISM_SERIES.length}
        </span>
        <div className="flex-1 h-px bg-gray-200" />
        <Link
          href="/blog/series/sotilitarian-capitalism"
          className="font-mono text-[10px] text-gray-400 hover:text-gray-700 transition-colors uppercase tracking-wider whitespace-nowrap"
        >
          Series Hub →
        </Link>
      </div>

      <div className="grid gap-1.5 mb-6">
        {SOTILITARIAN_CAPITALISM_SERIES.map((part) => (
          <div
            key={part.slug}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              part.slug === currentSlug
                ? "bg-amber-50 border border-amber-200"
                : "border border-transparent hover:bg-gray-50 hover:border-gray-200"
            }`}
          >
            <span className={`font-mono text-xs w-5 flex-shrink-0 ${
              part.slug === currentSlug ? "text-amber-600" : "text-gray-400"
            }`}>
              {part.part}
            </span>
            {part.slug === currentSlug ? (
              <span className="text-amber-700 font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{part.title}</span>
            ) : (
              <Link
                href={`/blog/${part.slug}`}
                className="text-gray-500 hover:text-gray-900 transition-colors"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {part.title}
              </Link>
            )}
            {part.slug === currentSlug && (
              <span className="ml-auto font-mono text-[10px] text-amber-500 uppercase">You are here</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="flex-1 flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-200 group"
          >
            <ArrowLeft size={16} className="text-gray-400 group-hover:text-gray-700 group-hover:-translate-x-0.5 transition-all flex-shrink-0" />
            <div className="min-w-0">
              <div className="font-mono text-[10px] text-gray-400 uppercase mb-0.5">Previous · Part {prev.part}</div>
              <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors truncate" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{prev.title}</div>
            </div>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="flex-1 flex items-center justify-end gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-200 group text-right"
          >
            <div className="min-w-0">
              <div className="font-mono text-[10px] text-gray-400 uppercase mb-0.5">Next · Part {next.part}</div>
              <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors truncate" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{next.title}</div>
            </div>
            <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </Link>
        ) : <div className="flex-1" />}
      </div>
    </div>
  );
}

// Reading progress bar
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-200">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{ width: `${progress}%`, background: "oklch(0.72 0.12 75)" }}
      />
    </div>
  );
}

// SVG icons
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const RedditIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

function ShareButtons({ url, title, excerpt }: { url: string; title: string; excerpt: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    { label: "X", icon: <XIcon />, href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, hoverClass: "hover:border-gray-400 hover:text-gray-900" },
    { label: "LinkedIn", icon: <LinkedInIcon />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, hoverClass: "hover:border-[#0A66C2]/60 hover:text-[#0A66C2]" },
    { label: "Facebook", icon: <FacebookIcon />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, hoverClass: "hover:border-[#1877F2]/60 hover:text-[#1877F2]" },
    { label: "Reddit", icon: <RedditIcon />, href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`, hoverClass: "hover:border-[#FF4500]/60 hover:text-[#FF4500]" },
    { label: "Instagram", icon: <InstagramIcon />, href: `https://www.instagram.com/`, hoverClass: "hover:border-pink-400/60 hover:text-pink-500" },
  ];

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <Share2 size={14} className="text-gray-400" />
        <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Share this article</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Share on ${link.label}`}
            className={`inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-gray-50 text-gray-500 text-sm rounded-lg transition-all duration-200 ${link.hoverClass}`}
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
        <button
          onClick={handleCopy}
          title="Copy link"
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-gray-50 text-gray-500 hover:text-gray-900 hover:border-gray-400 text-sm rounded-lg transition-all duration-200"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
          <span>{copied ? "Copied!" : "Copy Link"}</span>
        </button>
      </div>
      {copied && (
        <p className="mt-3 text-xs text-green-600" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Link copied — paste it anywhere.
        </p>
      )}
    </div>
  );
}

// Related articles — light card style
function RelatedArticles({ currentSlug, tags }: { currentSlug: string; tags: string[] }) {
  const { data } = trpc.blog.list.useQuery({ limit: 20, offset: 0 });

  const related = (data?.posts ?? [])
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => {
      if (!tags.length) return true;
      const postTags = (p.tags ?? "").split(",").map((t: string) => t.trim().toLowerCase());
      return tags.some((t) => postTags.includes(t.toLowerCase()));
    })
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <div className="mt-12 pt-10 border-t border-gray-200">
      <div className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-5">Continue Reading</div>
      <div className="grid md:grid-cols-3 gap-4">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block bg-gray-50 border border-gray-200 p-5 rounded-xl transition-all duration-300 group hover:border-gray-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider mb-2">{p.category}</div>
            <h4 className="text-base font-bold text-gray-800 leading-snug group-hover:text-gray-900 transition-colors line-clamp-3" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {p.title}
            </h4>
            {p.excerpt && (
              <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{p.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Newsletter CTA — light version
function LightNewsletterCTA({ headline, subtext }: { headline: string; subtext: string }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: (data) => {
      if (data.alreadySubscribed) {
        setStatus("success");
      } else {
        setStatus("success");
      }
    },
    onError: () => setStatus("error"),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    subscribeMutation.mutate({ email, firstName: firstName || undefined, source: "article-cta" });
  };

  return (
    <div className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-2xl">
      <div className="font-mono text-xs text-amber-600 uppercase tracking-wider mb-3">Newsletter</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{headline}</h3>
      <p className="text-sm text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{subtext}</p>
      {status === "success" ? (
        <div className="flex items-center gap-2 text-green-700">
          <Check size={16} />
          <span className="text-sm font-medium" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>You're subscribed. Welcome to the community.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="First name (optional)"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-white border border-amber-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          />
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2.5 bg-white border border-amber-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-3 text-xs text-red-600" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Something went wrong. Please try again.</p>
      )}
    </div>
  );
}

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────
export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const articleRef = useRef<HTMLDivElement>(null);

  const { data: post, isLoading, error } = trpc.blog.bySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-navy text-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 size={40} className="animate-spin text-gold/50" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-navy text-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <AlertCircle size={48} className="text-crimson mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-white mb-3">Article Not Found</h1>
            <p className="font-body text-white/60 mb-8">This article may have been moved or is no longer available.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const tags = post.tags ? post.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [];
  const postUrl = `https://elevation.foundation/blog/${post.slug}`;
  const readTime = post.readTime || estimateReadTime(post.content ?? "");
  const isSotilitarianSeries = Object.keys(SLUG_TO_VISUALS).includes(slug ?? "");

  return (
    <div className="min-h-screen bg-navy">
      <ReadingProgress />
      <StickyShareBar url={postUrl} title={post.title} excerpt={post.excerpt ?? ""} />
      <SEOHead
        title={`${post.title} | The Elevation Foundation`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.coverImage || undefined}
        ogType="article"
        keywords={[
          ...tags,
          "capitalism 2.0", "social capitalism", "utilitarian capitalism",
          "transparent economics", "trust tech", "transparency tech",
          "Sotilitarianism", "blockchain governance", "community finance",
        ].join(", ")}
      />

      {/* Dark navigation stays on top */}
      <Navigation />

      {/* ── OFF-WHITE WRAPPER ──────────────────────────────────────── */}
      <div className="bg-navy" style={{ paddingTop: "80px", paddingBottom: "64px" }}>
        <div style={{ width: "100%", maxWidth: "720px", margin: "0 auto", padding: "0 16px" }}>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-6 transition-colors group font-body"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* ── RAISED WHITE CARD ──────────────────────────────────── */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 40px -8px rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.04)",
              overflow: "hidden",
            }}
          >
            {/* Cover image — full width, inside card */}
            {post.coverImage && (
              <div style={{ padding: "24px 24px 0 24px" }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    marginBottom: "0",
                  }}
                />
              </div>
            )}

            {/* Card inner content */}
            <div style={{ padding: "34px 40px 40px 40px" }} className="article-card-inner">

              {/* Category label */}
              <div
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: "oklch(0.72 0.12 75)", letterSpacing: "0.1em" }}
              >
                {post.category}
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(26px, 4vw, 34px)",
                  lineHeight: "1.18",
                  color: "#111827",
                  margin: "0 0 12px 0",
                  fontWeight: 700,
                }}
              >
                {post.title}
              </h1>

              {/* Subtitle / excerpt */}
              {post.excerpt && (
                <p
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "17px",
                    lineHeight: "1.55",
                    color: "#374151",
                    margin: "0 0 20px 0",
                  }}
                >
                  {post.excerpt}
                </p>
              )}

              {/* Meta row */}
              <div
                className="flex flex-wrap items-center gap-4 pb-6 mb-6"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <span className="flex items-center gap-1.5 text-sm text-gray-500" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  <User size={13} /> {post.author}
                </span>
                {post.publishedAt && (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                    <Calendar size={12} /> {formatDate(post.publishedAt)}
                  </span>
                )}
                <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                  <Clock size={12} /> {readTime}
                </span>
              </div>

              {/* ── ARTICLE BODY ─────────────────────────────────── */}
              <div
                ref={articleRef}
                className="article-body-prose"
              >
                <style>{`
                  .article-body-prose { font-family: Georgia, 'Times New Roman', serif; }
                  .article-body-prose p { font-size: 16px; line-height: 1.75; color: #222222; margin: 0 0 18px 0; }
                  .article-body-prose h1 { font-size: 28px; line-height: 1.2; color: #111827; margin: 36px 0 14px 0; font-weight: 700; }
                  .article-body-prose h2 { font-size: 23px; line-height: 1.28; color: #111827; margin: 36px 0 14px 0; font-weight: 700; padding-bottom: 10px; border-bottom: 1px solid #e5e7eb; }
                  .article-body-prose h3 { font-size: 19px; line-height: 1.32; color: #1f2937; margin: 28px 0 10px 0; font-weight: 700; }
                  .article-body-prose h4 { font-size: 16px; line-height: 1.4; color: #374151; margin: 20px 0 8px 0; font-weight: 700; }
                  .article-body-prose strong { color: #111827; font-weight: 700; }
                  .article-body-prose em { color: #374151; font-style: italic; }
                  .article-body-prose a { color: oklch(0.55 0.12 75); text-decoration: underline; text-underline-offset: 2px; }
                  .article-body-prose a:hover { color: oklch(0.45 0.12 75); }
                  .article-body-prose ul, .article-body-prose ol { margin: 0 0 18px 24px; padding: 0; }
                  .article-body-prose li { font-size: 16px; line-height: 1.75; color: #222222; margin: 0 0 8px 0; }
                  .article-body-prose blockquote { border-left: 4px solid oklch(0.72 0.12 75); background: #fffbf0; padding: 16px 20px; margin: 24px 0; border-radius: 0 8px 8px 0; }
                  .article-body-prose blockquote p { color: #374151; margin: 0; font-style: italic; }
                  .article-body-prose code { font-family: 'Courier New', monospace; font-size: 14px; background: #f3f4f6; color: #1f2937; padding: 2px 6px; border-radius: 4px; }
                  .article-body-prose pre { background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; overflow-x: auto; margin: 0 0 18px 0; }
                  .article-body-prose pre code { background: none; padding: 0; }
                  .article-body-prose table { width: 100%; border-collapse: collapse; margin: 0 0 18px 0; font-size: 15px; }
                  .article-body-prose th { background: #f9fafb; color: #111827; font-weight: 700; text-align: left; padding: 10px 14px; border: 1px solid #e5e7eb; }
                  .article-body-prose td { color: #374151; padding: 10px 14px; border: 1px solid #e5e7eb; }
                  .article-body-prose tr:nth-child(even) td { background: #f9fafb; }
                  .article-body-prose hr { border: none; border-top: 1px solid #e5e7eb; margin: 32px 0; }
                  .article-body-prose img { max-width: 100%; height: auto; border-radius: 10px; margin: 24px auto; display: block; }
                `}</style>
                <Streamdown>{post.content}</Streamdown>
              </div>

              {/* Interactive visuals (series posts) */}
              <PostVisuals slug={slug} />

              {/* Share buttons */}
              <ShareButtons url={postUrl} title={post.title} excerpt={post.excerpt ?? ""} />

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-8 pt-8 flex flex-wrap gap-2" style={{ borderTop: "1px solid #e5e7eb" }}>
                  {tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-mono text-xs text-gray-500 border border-gray-200 rounded-full hover:border-gray-400 hover:text-gray-700 transition-colors cursor-default bg-gray-50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Newsletter CTA */}
              {isSotilitarianSeries && (
                <LightNewsletterCTA
                  headline="Stay Ahead of the Economic Revolution"
                  subtext="Join thousands of readers exploring blockchain governance, token economics, and the future of transparent finance. New research delivered to your inbox."
                />
              )}

              {/* Series navigator */}
              <SeriesNavigator currentSlug={slug} />

              {/* Related articles */}
              <RelatedArticles currentSlug={slug} tags={tags} />

              {/* Back link */}
              <div className="mt-14 pt-6" style={{ borderTop: "1px solid #e5e7eb" }}>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "15px" }}
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Back to all articles
                </Link>
              </div>

            </div>{/* end card inner */}
          </div>{/* end white card */}

        </div>
      </div>

      <Footer />
    </div>
  );
}
