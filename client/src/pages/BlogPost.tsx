/*
 * ELEVATION RISING — Individual Blog Post Page
 * Reads a single post by slug from the database via tRPC.
 * Renders full markdown content with social share buttons, reading progress bar,
 * and related articles.
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
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-white/10">
      <div
        className="h-full bg-gold transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// SVG icons for social platforms
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(`${title} — ${excerpt}`);

  const shareLinks = [
    {
      label: "X / Twitter",
      icon: <XIcon />,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}&via=ElevationFdn`,
      color: "hover:text-white hover:border-white/40",
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50",
    },
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-[#1877F2] hover:border-[#1877F2]/50",
    },
    {
      label: "Reddit",
      icon: <RedditIcon />,
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:text-[#FF4500] hover:border-[#FF4500]/50",
    },
    {
      label: "Instagram",
      icon: <InstagramIcon />,
      href: `https://www.instagram.com/`,
      color: "hover:text-[#E1306C] hover:border-[#E1306C]/50",
      tooltip: "Copy link — paste in your Instagram story or bio",
      onClick: () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      },
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="font-mono-data text-xs text-white/40 uppercase tracking-wider flex-shrink-0">
          Share this article
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {shareLinks.map(({ label, icon, href, color, onClick }) => (
            <a
              key={label}
              href={onClick ? undefined : href}
              target={onClick ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={onClick}
              title={label}
              className={`inline-flex items-center gap-1.5 px-3 py-2 border border-white/15 text-white/50 font-body text-xs rounded-sm transition-all duration-200 cursor-pointer ${color}`}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}

          {/* Copy link button */}
          <button
            onClick={handleCopy}
            title="Copy link"
            className="inline-flex items-center gap-1.5 px-3 py-2 border border-white/15 text-white/50 hover:text-gold hover:border-gold/40 font-body text-xs rounded-sm transition-all duration-200"
          >
            {copied ? <Check size={14} className="text-gold" /> : <Copy size={14} />}
            <span className="hidden sm:inline">{copied ? "Copied!" : "Copy link"}</span>
          </button>
        </div>
      </div>
      {copied && (
        <p className="mt-2 font-body text-xs text-gold/70">
          Link copied — paste it anywhere, including your Instagram story or bio.
        </p>
      )}
    </div>
  );
}

// Related articles component
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
    <div className="mt-12 pt-10 border-t border-white/10">
      <div className="section-label text-gold mb-5">Continue Reading</div>
      <div className="grid md:grid-cols-3 gap-4">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block bg-[oklch(0.16_0.05_265)] border border-white/10 p-5 rounded-sm transition-all duration-300 group hover:border-gold/35 hover:shadow-[0_6px_28px_oklch(0.05_0.05_265/0.5)] hover:-translate-y-0.5"
          >
            <div className="section-label text-gold/70 text-[10px] mb-2">{p.category}</div>
            <h4 className="font-display text-base font-bold text-white leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-3">
              {p.title}
            </h4>
            {p.excerpt && (
              <p className="font-body text-xs text-white/50 mt-2 line-clamp-2 leading-relaxed">{p.excerpt}</p>
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

      {/* --- HERO ----------------------------------------------- */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        {post.coverImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
          </>
        )}
        <div className="container relative z-10 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm mb-8 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="section-label text-gold mb-4">{post.category}</div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-body text-xl text-white/65 leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-5 pb-6 border-b border-white/10">
            <span className="flex items-center gap-2 font-body text-sm text-white/50">
              <User size={14} /> {post.author}
            </span>
            {post.publishedAt && (
              <span className="flex items-center gap-2 font-mono-data text-xs text-white/40">
                <Calendar size={12} /> {formatDate(post.publishedAt)}
              </span>
            )}
            <span className="flex items-center gap-2 font-mono-data text-xs text-white/40">
              <Clock size={12} /> {readTime}
            </span>
          </div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT ------------------------------------ */}
      <section className="py-12 bg-navy">
        <div className="container max-w-4xl" ref={articleRef}>
          <div
            className="
              prose prose-invert prose-lg max-w-none

              /* Headings */
              prose-headings:font-display prose-headings:text-white prose-headings:scroll-mt-24
              prose-h1:text-3xl prose-h1:font-black prose-h1:mt-0 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-14 prose-h2:mb-5
              prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-gold/90
              prose-h4:text-base prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-white/80

              /* Body text */
              prose-p:text-white/75 prose-p:leading-[1.85] prose-p:font-body prose-p:mb-5

              /* Bold — gold highlight */
              prose-strong:text-gold prose-strong:font-semibold

              /* Links */
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline

              /* Blockquotes — styled as callout boxes */
              prose-blockquote:not-italic
              prose-blockquote:border-l-4 prose-blockquote:border-gold
              prose-blockquote:bg-[oklch(0.16_0.05_265)]
              prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-sm
              prose-blockquote:text-white/80 prose-blockquote:font-body
              prose-blockquote:my-8

              /* Code */
              prose-code:text-teal prose-code:bg-[oklch(0.16_0.05_265)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:not-italic
              prose-pre:bg-[oklch(0.14_0.05_265)] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-sm

              /* Lists */
              prose-ul:text-white/75 prose-ol:text-white/75
              prose-li:marker:text-gold prose-li:my-1.5

              /* Tables — styled with gold headers */
              prose-table:w-full prose-table:border-collapse
              prose-thead:bg-[oklch(0.18_0.05_265)]
              prose-th:text-gold prose-th:font-mono-data prose-th:text-xs prose-th:uppercase prose-th:tracking-wider prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-white/10
              prose-td:text-white/70 prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-white/10 prose-td:font-body prose-td:text-sm
              prose-tr:even:bg-[oklch(0.15_0.05_265)]

              /* HR */
              prose-hr:border-white/10 prose-hr:my-12
            "
          >
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Social Share Buttons */}
          <ShareButtons
            url={postUrl}
            title={post.title}
            excerpt={post.excerpt ?? ""}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono-data text-xs text-white/50 border border-white/15 rounded-sm hover:border-gold/30 hover:text-gold/70 transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          <RelatedArticles currentSlug={slug} tags={tags} />

          {/* Back link */}
          <div className="mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold font-body font-medium hover:gap-3 transition-all group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
