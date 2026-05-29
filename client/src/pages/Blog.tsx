/*
 * ELEVATION RISING — Blog Page
 * Redesigned to match the raised card article aesthetic:
 * - Dark navy outer background (matches footer)
 * - White raised cards on off-white (#f5f5f2) inner area
 * - Georgia serif typography for titles
 * - Black text on light backgrounds
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import NewsletterBanner from "@/components/NewsletterBanner";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Loader2, PenLine, BookOpen } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

const CATEGORY_COLORS: Record<string, string> = {
  Philosophy: "#b8860b",
  Technology: "#0d9488",
  Governance: "#b8860b",
  Community: "#0d9488",
  DeFi: "#dc2626",
  Research: "#7c3aed",
  Newsletter: "#2563eb",
  General: "#6b7280",
};

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "#6b7280";
}

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const { data: postsData, isLoading } = trpc.blog.list.useQuery({
    category: activeCategory === "All" ? undefined : activeCategory,
    limit: 24,
    offset: 0,
  });

  const { data: featuredPost } = trpc.blog.featured.useQuery();
  const { data: dbCategories } = trpc.blog.categories.useQuery();

  const staticCategories = ["All", "Philosophy", "Technology", "Governance", "Community", "DeFi", "Research"];
  const dynamicCategories = dbCategories && dbCategories.length > 0
    ? ["All", ...dbCategories]
    : staticCategories;

  const posts = postsData?.posts ?? [];
  const regularPosts = activeCategory === "All"
    ? posts.filter(p => !featuredPost || p.id !== featuredPost.id)
    : posts;

  return (
    <div className="min-h-screen bg-navy">
      <SEOHead
        title="Blog and Updates | The Elevation Foundation"
        description="Thought leadership on Sotilitarianism, blockchain governance, DeFi, community solar, and economic empowerment. Articles, white papers, and community updates from the Elevation Foundation."
        canonical="/blog"
        keywords="Sotilitarianism blog, capitalism 2.0 articles, social capitalism essays, utilitarian capitalism, transparent economics blog, trust tech, transparency tech, blockchain governance articles, DeFi community finance, WeSolar news, Transparently updates, nonprofit blockchain news, post-capitalist economics"
      />
      <Navigation />
      <NewsletterBanner />

      {/* ── HERO (dark navy, keeps site chrome consistent) ──────── */}
      <section className="pt-32 pb-12 bg-navy">
        <div className="container">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-2xl">
              <div className="section-label mb-4">Blog &amp; Updates</div>
              <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                Dispatches from
                <br />
                <span className="gold-shimmer">the Movement</span>
              </h1>
              <p className="font-body text-lg text-white/65 leading-relaxed">
                Philosophy, technology, governance, and community updates from the Elevation Foundation. We write in public because we think in public.
              </p>
            </div>
            {isAdmin && (
              <Link
                href="/admin"
                className="flex-shrink-0 mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold font-body text-sm font-medium rounded-sm hover:bg-gold/20 transition-colors"
              >
                <PenLine size={14} />
                Admin Panel
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── DARK NAVY CONTENT AREA ──────────────────────────────── */}
      <div className="bg-navy">

        {/* ── CATEGORY FILTER ───────────────────────────────────── */}
        <div className="sticky top-16 md:top-20 z-30 border-b border-white/10 bg-[oklch(0.12_0.05_265/0.97)] backdrop-blur-md">
          <div className="container py-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {dynamicCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 px-4 py-2 font-body text-sm rounded-full border transition-all duration-200"
                  style={activeCategory === cat
                    ? { background: "oklch(0.72 0.12 75)", color: "oklch(0.12 0.05 265)", borderColor: "oklch(0.72 0.12 75)", fontWeight: 600 }
                    : { background: "transparent", color: "rgba(255,255,255,0.55)", borderColor: "rgba(255,255,255,0.15)" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURED POST ─────────────────────────────────────── */}
        {activeCategory === "All" && featuredPost && !isLoading && (
          <div className="container pt-10 pb-4">
            <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "oklch(0.72 0.12 75)" }}>Featured</p>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div
                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                <div className="grid md:grid-cols-2">
                  {featuredPost.coverImage && (
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <p
                      className="font-body text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: getCategoryColor(featuredPost.category) }}
                    >
                      {featuredPost.category}
                    </p>
                    <h2
                      className="font-bold leading-tight mb-4"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.6rem", color: "#111827" }}
                    >
                      {featuredPost.title}
                    </h2>
                    <p className="font-body leading-relaxed mb-6" style={{ color: "#4b5563", fontSize: "0.95rem" }}>
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      {featuredPost.publishedAt && (
                        <span className="flex items-center gap-1.5 font-body text-xs" style={{ color: "#9ca3af" }}>
                          <Calendar size={12} /> {formatDate(featuredPost.publishedAt)}
                        </span>
                      )}
                      {featuredPost.readTime && (
                        <span className="flex items-center gap-1.5 font-body text-xs" style={{ color: "#9ca3af" }}>
                          <Clock size={12} /> {featuredPost.readTime}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 font-body font-semibold text-sm" style={{ color: "#b8860b" }}>
                      Read Full Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ── POSTS GRID ────────────────────────────────────────── */}
        <div className="container py-10 pb-16">
          {isLoading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 size={32} className="animate-spin" style={{ color: "#b8860b" }} />
            </div>
          ) : regularPosts.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen size={48} className="mx-auto mb-4" style={{ color: "#d1cdc7" }} />
              <p className="font-body text-lg mb-2" style={{ color: "#9ca3af" }}>No posts in this category yet.</p>
              <p className="font-body text-sm" style={{ color: "#c4bfb8" }}>Check back soon or browse another category.</p>
              {isAdmin && (
                <Link
                  href="/admin"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 font-semibold font-body rounded-full transition-all"
                  style={{ background: "#111827", color: "#ffffff" }}
                >
                  <PenLine size={16} />
                  Write the First Post
                </Link>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article
                    className="flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
                    style={{
                      background: "#ffffff",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)")}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.05)")}
                  >
                    {post.coverImage ? (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                    ) : (
                      <div
                        className="aspect-[16/9] flex items-center justify-center"
                        style={{ background: "#f0ece4" }}
                      >
                        <BookOpen size={32} style={{ color: "#d1cdc7" }} />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <p
                        className="font-body text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: getCategoryColor(post.category) }}
                      >
                        {post.category}
                      </p>
                      <h3
                        className="font-bold leading-snug mb-3 flex-1"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "1.1rem", color: "#111827" }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="font-body text-sm leading-relaxed mb-4 line-clamp-2"
                        style={{ color: "#6b7280" }}
                      >
                        {post.excerpt}
                      </p>
                      <div
                        className="flex items-center justify-between pt-4 mt-auto"
                        style={{ borderTop: "1px solid #f0ece4" }}
                      >
                        <div className="flex items-center gap-3">
                          {post.publishedAt && (
                            <span className="flex items-center gap-1 font-body text-xs" style={{ color: "#9ca3af" }}>
                              <Calendar size={11} /> {formatDate(post.publishedAt)}
                            </span>
                          )}
                          {post.readTime && (
                            <span className="flex items-center gap-1 font-body text-xs" style={{ color: "#9ca3af" }}>
                              <Clock size={11} /> {post.readTime}
                            </span>
                          )}
                        </div>
                        <ArrowRight
                          size={15}
                          className="transition-all duration-200 group-hover:translate-x-1"
                          style={{ color: "#d1cdc7" }}
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ── NEWSLETTER CTA ────────────────────────────────────── */}
        <div className="border-t border-white/10">
          <div className="container py-16">
            <div className="max-w-2xl mx-auto text-center">
              <p className="font-body text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#b8860b" }}>Stay Updated</p>
              <h2
                className="font-bold mb-4"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "2rem", color: "#ffffff" }}
              >
                Subscribe to the Movement
              </h2>
              <p className="font-body leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Get the latest updates on our projects, governance proposals, and philosophy directly in your inbox. No spam. Unsubscribe anytime.
              </p>
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold font-body rounded-full transition-all duration-200 hover:opacity-90"
                style={{ background: "#b8860b", color: "#ffffff" }}
              >
                View Newsletter Archive
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>{/* end off-white wrapper */}

      <Footer />
    </div>
  );
}
