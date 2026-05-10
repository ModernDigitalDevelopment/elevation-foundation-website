/*
 * ELEVATION RISING — Individual Blog Post Page
 * Dark navy site background, lifted white article card,
 * large serif title, gold-bordered callouts, professional body typography.
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import {
  ArrowLeft,
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
import { useState, useEffect, useRef } from "react";

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

function wordCount(content: string): string {
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${words.toLocaleString()} words`;
}

// Thin gold reading progress bar at top
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
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-white/10">
      <div
        className="h-full bg-[oklch(0.72_0.12_75)] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
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
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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

interface ShareButtonsProps {
  url: string;
  title: string;
  excerpt: string;
}

function ShareButtons({ url, title, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} — ${excerpt}`);

  const shareLinks = [
    { label: "X / Twitter", icon: <XIcon />, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}&via=ElevationFdn` },
    { label: "LinkedIn", icon: <LinkedInIcon />, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: "Facebook", icon: <FacebookIcon />, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "Reddit", icon: <RedditIcon />, href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(title)}` },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-12 pt-8 border-t border-white/15">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="flex items-center gap-2 font-mono-data text-xs text-white/50 uppercase tracking-wider flex-shrink-0">
          <Share2 size={12} />
          Share this article
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {shareLinks.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-white/20 text-white/60 hover:text-white hover:border-gold/50 hover:bg-gold/10 font-body text-xs rounded-sm transition-all duration-200 cursor-pointer"
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
          <button
            onClick={handleCopy}
            title="Copy link"
            className="inline-flex items-center gap-1.5 px-3 py-2 border border-white/20 text-white/60 hover:text-white hover:border-gold/50 hover:bg-gold/10 font-body text-xs rounded-sm transition-all duration-200"
          >
            {copied ? <Check size={14} className="text-[oklch(0.55_0.15_145)]" /> : <Copy size={14} />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Related articles — styled for light background
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
    <div className="mt-16 pt-12 border-t border-white/15">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-px bg-gold" />
        <span className="font-mono-data text-xs text-gold/70 uppercase tracking-widest">Continue Reading</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block bg-white rounded-sm shadow-[0_4px_20px_oklch(0.05_0.05_265/0.4)] p-6 hover:shadow-[0_6px_30px_oklch(0.05_0.05_265/0.6)] hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="font-mono-data text-[10px] text-[oklch(0.55_0.10_75)] uppercase tracking-wider mb-2">{p.category}</div>
            <h4 className="font-display text-base font-bold text-[oklch(0.12_0.05_265)] leading-snug group-hover:text-[oklch(0.45_0.10_75)] transition-colors line-clamp-3">
              {p.title}
            </h4>
            {p.excerpt && (
              <p className="font-body text-xs text-[oklch(0.40_0.05_265)] mt-2 line-clamp-2 leading-relaxed">{p.excerpt}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

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
          <Loader2 size={40} className="animate-spin text-gold/60" />
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
            <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold text-white mb-3">Article Not Found</h1>
            <p className="font-body text-white/60 mb-8">
              This article may have been moved or is no longer available.
            </p>
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
  const words = wordCount(post.content ?? "");

  return (
    <div className="min-h-screen bg-navy text-white">
      <ReadingProgress />
      <SEOHead
        title={`${post.title} | The Elevation Foundation`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={[
          ...tags,
          "capitalism 2.0",
          "social capitalism",
          "utilitarian capitalism",
          "transparent economics",
          "trust tech",
          "transparency tech",
          "Sotilitarianism",
          "blockchain governance",
          "community finance",
        ].join(", ")}
      />
      <Navigation />

      {/* ── ARTICLE HEADER ─────────────────────────────────────── */}
      <section className="pt-32 pb-0">
        <div className="max-w-3xl mx-auto px-6">

          {/* Breadcrumb + Back */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm transition-colors group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
              Blog
            </Link>            <span className="text-gold/40">/</span>
            <span className="font-mono-data text-xs text-gold uppercase tracking-widest">
              {post.category}
            </span>
          </div>

          {/* Category badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="font-mono-data text-xs text-[oklch(0.72_0.12_75)] uppercase tracking-widest font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
            {post.title}
          </h1>

          {/* Excerpt / deck */}
          {post.excerpt && (
            <p className="font-body text-xl text-white/65 leading-relaxed mb-8 max-w-2xl">
              {post.excerpt}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-white/15">
            <span className="flex items-center gap-2 font-body text-sm text-white/60">
              <User size={13} className="text-gold" />
              {post.author}
            </span>
            {post.publishedAt && (
              <span className="flex items-center gap-2 font-mono-data text-xs text-white/50">
                <Calendar size={12} className="text-gold" />
                {formatDate(post.publishedAt)}
              </span>
            )}
            <span className="flex items-center gap-2 font-mono-data text-xs text-white/50">
              <Clock size={12} className="text-gold" />
              {readTime}
            </span>
            <span className="font-mono-data text-xs text-white/35">
              {words}
            </span>
          </div>

          {/* Tags row */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-5 pb-8">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 font-mono-data text-[10px] text-white/50 border border-white/20 rounded-sm uppercase tracking-wider hover:border-gold/50 hover:text-gold transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────── */}
      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-6" ref={articleRef}>

          {/* Lifted white article card */}
          <div className="bg-white rounded-sm shadow-[0_8px_60px_oklch(0.05_0.05_265/0.7)] px-8 md:px-14 py-12 md:py-16">
            <div
              className="
                prose prose-lg max-w-none

                /* Base text */
                prose-p:text-[oklch(0.28_0.04_265)] prose-p:leading-[1.9] prose-p:font-body prose-p:mb-5 prose-p:text-[1.05rem]

                /* Headings */
                prose-headings:font-display prose-headings:text-[oklch(0.12_0.05_265)] prose-headings:scroll-mt-24
                prose-h1:text-3xl prose-h1:font-black prose-h1:mt-0 prose-h1:mb-6
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-14 prose-h2:mb-5
                prose-h2:border-b prose-h2:border-[oklch(0.72_0.12_75/0.3)] prose-h2:pb-3
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[oklch(0.55_0.12_75)]
                prose-h4:text-base prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-[oklch(0.35_0.05_265)]

                /* Bold */
                prose-strong:text-[oklch(0.18_0.05_265)] prose-strong:font-semibold

                /* Links */
                prose-a:text-[oklch(0.55_0.12_75)] prose-a:no-underline hover:prose-a:underline

                /* Blockquotes — gold left border callout */
                prose-blockquote:not-italic
                prose-blockquote:border-l-4 prose-blockquote:border-[oklch(0.72_0.12_75)]
                prose-blockquote:bg-[oklch(0.97_0.03_75/0.8)]
                prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-sm
                prose-blockquote:text-[oklch(0.30_0.05_265)] prose-blockquote:font-body
                prose-blockquote:my-8

                /* Code */
                prose-code:text-[oklch(0.40_0.15_265)] prose-code:bg-[oklch(0.95_0.02_75)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:not-italic
                prose-pre:bg-[oklch(0.15_0.05_265)] prose-pre:border prose-pre:border-[oklch(0.88_0.04_75/0.5)] prose-pre:rounded-sm

                /* Lists */
                prose-ul:text-[oklch(0.28_0.04_265)] prose-ol:text-[oklch(0.28_0.04_265)]
                prose-li:marker:text-[oklch(0.72_0.12_75)] prose-li:my-1.5

                /* Tables */
                prose-table:w-full prose-table:border-collapse
                prose-thead:bg-[oklch(0.95_0.03_75)]
                prose-th:text-[oklch(0.45_0.05_265)] prose-th:font-mono-data prose-th:text-xs prose-th:uppercase prose-th:tracking-wider prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-[oklch(0.88_0.04_75)]
                prose-td:text-[oklch(0.30_0.05_265)] prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-[oklch(0.88_0.04_75)] prose-td:font-body prose-td:text-sm
                prose-tr:even:bg-[oklch(0.98_0.01_75)]

                /* HR */
                prose-hr:border-[oklch(0.88_0.04_75)] prose-hr:my-12

                /* Images */
                prose-img:rounded-sm prose-img:shadow-md prose-img:mx-auto
              "
            >
              <Streamdown>{post.content}</Streamdown>
            </div>
          </div>

          {/* Share + Tags below the card */}
          <div className="mt-8">
            <ShareButtons
              url={postUrl}
              title={post.title}
              excerpt={post.excerpt ?? ""}
            />

            {/* Related Articles */}
            <RelatedArticles currentSlug={slug} tags={tags} />

            {/* Back link */}
            <div className="mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold/70 font-body font-medium hover:text-gold hover:gap-3 transition-all group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
