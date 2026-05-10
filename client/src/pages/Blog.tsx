/*
 * ELEVATION RISING — Blog Page
 * Vetta-inspired editorial style: warm cream background, lifted white cards,
 * gold category badges, professional serif typography.
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Loader2, PenLine, BookOpen } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

const CATEGORY_ACCENT: Record<string, { dot: string; badge: string }> = {
  Philosophy:  { dot: "bg-[oklch(0.72_0.12_75)]",  badge: "text-[oklch(0.50_0.10_75)]  border-[oklch(0.72_0.12_75/0.4)]  bg-[oklch(0.97_0.03_75)]" },
  Technology:  { dot: "bg-[oklch(0.55_0.15_195)]", badge: "text-[oklch(0.40_0.12_195)] border-[oklch(0.55_0.15_195/0.4)] bg-[oklch(0.96_0.03_195)]" },
  Governance:  { dot: "bg-[oklch(0.72_0.12_75)]",  badge: "text-[oklch(0.50_0.10_75)]  border-[oklch(0.72_0.12_75/0.4)]  bg-[oklch(0.97_0.03_75)]" },
  Community:   { dot: "bg-[oklch(0.55_0.15_195)]", badge: "text-[oklch(0.40_0.12_195)] border-[oklch(0.55_0.15_195/0.4)] bg-[oklch(0.96_0.03_195)]" },
  DeFi:        { dot: "bg-[oklch(0.55_0.20_25)]",  badge: "text-[oklch(0.40_0.18_25)]  border-[oklch(0.55_0.20_25/0.4)]  bg-[oklch(0.97_0.02_25)]" },
  General:     { dot: "bg-[oklch(0.65_0.05_265)]", badge: "text-[oklch(0.45_0.05_265)] border-[oklch(0.65_0.05_265/0.4)] bg-[oklch(0.96_0.01_265)]" },
};

function getCategoryAccent(cat: string) {
  return CATEGORY_ACCENT[cat] ?? CATEGORY_ACCENT.General;
}

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { month: "long", year: "numeric" });
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

  const { data: dbCategories } = trpc.blog.categories.useQuery();

  const staticCategories = ["All", "Philosophy", "Technology", "Governance", "Community", "DeFi"];
  const dynamicCategories =
    dbCategories && dbCategories.length > 0 ? ["All", ...dbCategories] : staticCategories;

  const posts = postsData?.posts ?? [];
  const featuredPost = posts[0];
  const regularPosts = activeCategory === "All" ? posts.slice(1) : posts;

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.02_75)] text-[oklch(0.18_0.05_265)]">
      <SEOHead
        title="Blog and Updates | The Elevation Foundation"
        description="Thought leadership on Sotilitarianism, blockchain governance, DeFi, community solar, and economic empowerment. Articles, white papers, and community updates from the Elevation Foundation."
        canonical="/blog"
        keywords="Sotilitarianism blog, capitalism 2.0 articles, social capitalism essays, utilitarian capitalism, transparent economics blog, trust tech, transparency tech, blockchain governance articles, DeFi community finance, WeSolar news, Transparently updates, nonprofit blockchain news, post-capitalist economics"
      />
      <Navigation />

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 border-b border-[oklch(0.72_0.12_75/0.2)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
                <span className="font-mono-data text-xs text-[oklch(0.72_0.12_75)] uppercase tracking-widest font-semibold">
                  The Elevation Foundation
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-black text-[oklch(0.12_0.05_265)] leading-[1.05] mb-5">
                Dispatches from<br />
                <span className="text-[oklch(0.55_0.12_75)]">the Movement</span>
              </h1>
              <p className="font-body text-lg text-[oklch(0.40_0.05_265)] leading-relaxed max-w-2xl">
                Philosophy, technology, governance, and community updates from the Elevation Foundation.
                We write in public because we think in public.
              </p>
            </div>
            {isAdmin && (
              <Link
                href="/admin/blog"
                className="flex-shrink-0 mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.72_0.12_75/0.1)] border border-[oklch(0.72_0.12_75/0.4)] text-[oklch(0.50_0.10_75)] font-body text-sm font-medium rounded-sm hover:bg-[oklch(0.72_0.12_75/0.2)] transition-colors"
              >
                <PenLine size={14} />
                Manage Posts
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ───────────────────────────────────────── */}
      {activeCategory === "All" && featuredPost && !isLoading && (
        <section className="py-16 border-b border-[oklch(0.72_0.12_75/0.15)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
              <span className="font-mono-data text-xs text-[oklch(0.72_0.12_75)] uppercase tracking-widest">Featured Article</span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-white border border-[oklch(0.88_0.04_75/0.6)] rounded-sm shadow-[0_4px_40px_oklch(0.45_0.05_265/0.08)] hover:shadow-[0_8px_50px_oklch(0.45_0.05_265/0.14)] transition-all duration-300 cursor-pointer overflow-hidden group">
                <div className="grid md:grid-cols-5 gap-0">
                  {featuredPost.coverImage && (
                    <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className={`${featuredPost.coverImage ? "md:col-span-3" : "md:col-span-5"} p-10 flex flex-col justify-center`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono-data text-[10px] uppercase tracking-wider border rounded-sm ${getCategoryAccent(featuredPost.category).badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${getCategoryAccent(featuredPost.category).dot}`} />
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[oklch(0.12_0.05_265)] mb-4 leading-tight group-hover:text-[oklch(0.50_0.10_75)] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="font-body text-[oklch(0.40_0.05_265)] leading-relaxed mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <span className="flex items-center gap-1.5 font-mono-data text-xs text-[oklch(0.55_0.05_265)]">
                          <Calendar size={12} className="text-[oklch(0.72_0.12_75)]" />
                          {formatDate(featuredPost.publishedAt)}
                        </span>
                        {featuredPost.readTime && (
                          <span className="flex items-center gap-1.5 font-mono-data text-xs text-[oklch(0.55_0.05_265)]">
                            <Clock size={12} className="text-[oklch(0.72_0.12_75)]" />
                            {featuredPost.readTime}
                          </span>
                        )}
                      </div>
                      <span className="inline-flex items-center gap-2 text-[oklch(0.55_0.12_75)] font-body font-medium text-sm group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── CATEGORY FILTER ─────────────────────────────────────── */}
      <div className="sticky top-16 md:top-20 z-30 bg-[oklch(0.97_0.02_75)] border-b border-[oklch(0.72_0.12_75/0.15)] shadow-[0_2px_12px_oklch(0.45_0.05_265/0.06)]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 font-body text-sm rounded-sm border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[oklch(0.72_0.12_75)] text-white border-[oklch(0.72_0.12_75)] font-semibold shadow-sm"
                    : "border-[oklch(0.72_0.12_75/0.3)] text-[oklch(0.45_0.05_265)] hover:border-[oklch(0.72_0.12_75/0.6)] hover:text-[oklch(0.50_0.10_75)] bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── POSTS GRID ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 size={32} className="animate-spin text-[oklch(0.72_0.12_75/0.5)]" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen size={48} className="text-[oklch(0.72_0.12_75/0.4)] mx-auto mb-4" />
              <p className="font-body text-[oklch(0.55_0.05_265)] text-lg mb-4">No posts published yet.</p>
              {isAdmin && (
                <Link
                  href="/admin/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.72_0.12_75)] text-white font-semibold font-body rounded-sm hover:bg-[oklch(0.65_0.12_75)] transition-all"
                >
                  <PenLine size={16} />
                  Write the First Post
                </Link>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => {
                const accent = getCategoryAccent(post.category);
                return (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="flex flex-col bg-white border border-[oklch(0.88_0.04_75/0.6)] rounded-sm shadow-[0_2px_16px_oklch(0.45_0.05_265/0.07)] hover:shadow-[0_6px_30px_oklch(0.45_0.05_265/0.12)] hover:border-[oklch(0.72_0.12_75/0.4)] transition-all duration-300 group h-full cursor-pointer overflow-hidden">
                      {post.coverImage && (
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="flex flex-col flex-1 p-6">
                        {/* Category badge */}
                        <div className="mb-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 font-mono-data text-[10px] uppercase tracking-wider border rounded-sm ${accent.badge}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg font-bold text-[oklch(0.12_0.05_265)] mb-3 leading-snug group-hover:text-[oklch(0.50_0.10_75)] transition-colors flex-1 line-clamp-3">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="font-body text-sm text-[oklch(0.45_0.05_265)] leading-relaxed mb-5 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Meta row */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[oklch(0.88_0.04_75/0.5)]">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 font-mono-data text-[10px] text-[oklch(0.55_0.05_265)]">
                              <Calendar size={10} className="text-[oklch(0.72_0.12_75)]" />
                              {formatDate(post.publishedAt)}
                            </span>
                            {post.readTime && (
                              <span className="flex items-center gap-1 font-mono-data text-[10px] text-[oklch(0.55_0.05_265)]">
                                <Clock size={10} className="text-[oklch(0.72_0.12_75)]" />
                                {post.readTime}
                              </span>
                            )}
                          </div>
                          <ArrowRight size={14} className="text-[oklch(0.72_0.12_75/0.4)] group-hover:text-[oklch(0.55_0.12_75)] group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────────── */}
      <section className="py-20 border-t border-[oklch(0.72_0.12_75/0.2)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="font-mono-data text-xs text-[oklch(0.72_0.12_75)] uppercase tracking-widest">Stay Updated</span>
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
          </div>
          <h2 className="font-display text-3xl font-bold text-[oklch(0.12_0.05_265)] mb-4">
            Subscribe to the Movement
          </h2>
          <p className="font-body text-[oklch(0.45_0.05_265)] leading-relaxed mb-8">
            Get the latest updates on our projects, governance proposals, and philosophy directly in your inbox. No spam. Unsubscribe anytime.
          </p>
          <Link
            href="/wesolar"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[oklch(0.72_0.12_75)] text-white font-semibold font-body rounded-sm hover:bg-[oklch(0.65_0.12_75)] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Join the Waitlist
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
