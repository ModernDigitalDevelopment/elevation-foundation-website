/*
 * ELEVATION RISING — Blog Page
 * Database-backed CMS via tRPC. Falls back gracefully when DB is empty.
 * Categories are dynamic from the DB + static fallback list.
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Loader2, PenLine } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-bg-dHdJJ35AQ4VkFJvPmeZBLw.png";

const CATEGORY_COLORS: Record<string, string> = {
  Philosophy: "text-gold",
  Technology: "text-teal",
  Governance: "text-gold",
  Community: "text-teal",
  DeFi: "text-crimson",
  General: "text-white/70",
};

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "text-white/70";
}

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  const { data: postsData, isLoading } = trpc.blog.list.useQuery({
    category: activeCategory === "All" ? undefined : activeCategory,
    limit: 24,
    offset: 0,
  });

  const { data: dbCategories } = trpc.blog.categories.useQuery();

  const staticCategories = ["All", "Philosophy", "Technology", "Governance", "Community", "DeFi"];
  const dynamicCategories = dbCategories && dbCategories.length > 0
    ? ["All", ...dbCategories]
    : staticCategories;

  const posts = postsData?.posts ?? [];
  const featuredPost = posts[0];
  const regularPosts = activeCategory === "All" ? posts.slice(1) : posts;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! You will receive updates from the Elevation Foundation.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Blog and Updates | The Elevation Foundation"
        description="Thought leadership on Sotilitarianism, blockchain governance, DeFi, community solar, and economic empowerment. Articles, white papers, and community updates from the Elevation Foundation."
        canonical="/blog"
        keywords="Sotilitarianism blog, capitalism 2.0 articles, social capitalism essays, utilitarian capitalism, transparent economics blog, trust tech, transparency tech, blockchain governance articles, DeFi community finance, WeSolar news, Transparently updates, nonprofit blockchain news, post-capitalist economics"
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-3xl">
              <div className="section-label mb-4">Blog & Updates</div>
              <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Dispatches from
                <br />
                <span className="gold-shimmer">the Movement</span>
              </h1>
              <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl">
                Philosophy, technology, governance, and community updates from the Elevation Foundation. We write in public because we think in public.
              </p>
            </div>
            {isAdmin && (
              <Link
                href="/admin/blog"
                className="flex-shrink-0 mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold font-body text-sm font-medium rounded-sm hover:bg-gold/20 transition-colors"
              >
                <PenLine size={14} />
                Manage Posts
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST ────────────────────────────────────── */}
      {activeCategory === "All" && featuredPost && !isLoading && (
        <section className="py-16 bg-navy">
          <div className="container">
            <div className="section-label mb-6">Featured</div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="grid md:grid-cols-2 gap-10 p-8 bg-[oklch(0.16_0.05_265)] border border-gold/20 rounded-sm card-lift cursor-pointer">
                <div className="aspect-[16/9] bg-[oklch(0.20_0.05_265)] rounded-sm overflow-hidden">
                  <img
                    src={featuredPost.coverImage ?? HERO_IMG}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className={`section-label ${getCategoryColor(featuredPost.category)} mb-3`}>{featuredPost.category}</div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-white/65 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/40">
                      <Calendar size={12} /> {formatDate(featuredPost.publishedAt)}
                    </span>
                    {featuredPost.readTime && (
                      <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/40">
                        <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 text-gold font-body font-medium group w-fit">
                    Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── CATEGORY FILTER ──────────────────────────────────── */}
      <section className="py-8 bg-[oklch(0.14_0.05_265)] border-y border-white/10 sticky top-16 md:top-20 z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 font-body text-sm rounded-sm border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-[oklch(0.12_0.05_265)] border-gold font-semibold"
                    : "border-white/20 text-white/60 hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POSTS GRID ───────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="container">
          {isLoading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 size={32} className="animate-spin text-gold/50" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-body text-white/40 text-lg mb-4">No posts published yet.</p>
              {isAdmin && (
                <Link
                  href="/admin/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all"
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
                  <article className="flex flex-col p-7 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm card-lift group h-full cursor-pointer">
                    {post.coverImage && (
                      <div className="aspect-[16/9] rounded-sm overflow-hidden mb-5 -mx-1">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                      </div>
                    )}
                    <div className={`section-label ${getCategoryColor(post.category)} mb-3`}>{post.category}</div>
                    <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug group-hover:text-gold transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/35">
                          <Calendar size={11} /> {formatDate(post.publishedAt)}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/35">
                            <Clock size={11} /> {post.readTime}
                          </span>
                        )}
                      </div>
                      <ArrowRight size={16} className="text-white/30 group-hover:text-gold transition-colors" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.14_0.05_265)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-4">Stay Updated</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Subscribe to the Movement
            </h2>
            <p className="font-body text-white/65 leading-relaxed mb-8">
              Get the latest updates on our projects, governance proposals, and philosophy directly in your inbox. No spam. Unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/20 rounded-sm text-white font-body placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
