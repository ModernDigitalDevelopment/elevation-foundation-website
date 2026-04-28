/*
 * ELEVATION RISING — Individual Blog Post Page
 * Reads a single post by slug from the database via tRPC.
 * Renders full markdown content.
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Loader2, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";

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

  const tags = post.tags ? post.tags.split(",").map(t => t.trim()).filter(Boolean) : [];

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title={`${post.title} | The Elevation Foundation`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={[...tags, "capitalism 2.0", "social capitalism", "utilitarian capitalism", "transparent economics", "trust tech", "transparency tech", "Sotilitarianism", "blockchain governance", "community finance"].join(", ")}
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
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

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2 font-body text-sm text-white/50">
              <User size={14} /> {post.author}
            </span>
            {post.publishedAt && (
              <span className="flex items-center gap-2 font-mono-data text-xs text-white/40">
                <Calendar size={12} /> {formatDate(post.publishedAt)}
              </span>
            )}
            {post.readTime && (
              <span className="flex items-center gap-2 font-mono-data text-xs text-white/40">
                <Clock size={12} /> {post.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ─── ARTICLE CONTENT ──────────────────────────────────── */}
      <section className="py-16 bg-navy">
        <div className="container max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:text-white
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-white/70 prose-p:leading-relaxed prose-p:font-body
            prose-strong:text-gold prose-strong:font-semibold
            prose-a:text-gold prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-gold prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:text-white/60 prose-blockquote:italic
            prose-code:text-teal prose-code:bg-[oklch(0.16_0.05_265)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-[oklch(0.14_0.05_265)] prose-pre:border prose-pre:border-white/10
            prose-ul:text-white/70 prose-ol:text-white/70
            prose-li:marker:text-gold
            prose-hr:border-white/10">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono-data text-xs text-white/50 border border-white/15 rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

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
