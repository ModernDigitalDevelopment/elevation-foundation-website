/*
 * ELEVATION RISING — Blog Page
 * Updates, thought leadership, community news
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/philosophy-bg-dHdJJ35AQ4VkFJvPmeZBLw.png";

const posts = [
  {
    id: 1,
    category: "Philosophy",
    categoryColor: "text-gold",
    title: "Sotilitarianism: Why Transparency Is Not a Feature — It Is a Foundation",
    excerpt: "In traditional governance, transparency is a concession — something granted reluctantly when demanded. We argue that any system of governance that cannot withstand full public scrutiny is, by definition, illegitimate.",
    date: "March 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Technology",
    categoryColor: "text-teal",
    title: "How the Elevation Engine Generates Autonomous Yield Through DeFi Flash Loans",
    excerpt: "A technical deep-dive into how our Python-based DeFi protocol identifies arbitrage opportunities, executes flash loans across multiple protocols, and deposits profits directly into the community treasury.",
    date: "February 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Governance",
    categoryColor: "text-gold",
    title: "Wyoming DUNA Law: The Legal Framework for Hybrid 501(c)(3)/DAO Organizations",
    excerpt: "Wyoming became the first US state to legally recognize Decentralized Unincorporated Nonprofit Associations. Here is how the Elevation Foundation is using this framework to build the first hybrid nonprofit DAO.",
    date: "January 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Community",
    categoryColor: "text-teal",
    title: "WeSolar: How Tokenized Community Solar Can End Energy Poverty",
    excerpt: "Energy poverty is not an accident. It is the result of systems designed to extract wealth from communities rather than build it. WeSolar proposes a different model — one where residents co-own the infrastructure they depend on.",
    date: "December 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    category: "DeFi",
    categoryColor: "text-crimson",
    title: "The Three-Token Economy: SOT, SUG, and SST Explained",
    excerpt: "Our three-token architecture creates a self-sustaining governance and financial system. Each token serves a distinct purpose — together they form the backbone of transparent autonomous finance.",
    date: "November 2024",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Philosophy",
    categoryColor: "text-gold",
    title: "Ubuntu, Cypherpunk, and Cooperative Economics: The Intellectual Roots of Sotilitarianism",
    excerpt: "Sotilitarianism draws on three intellectual traditions: the African communal governance model of Ubuntu, the cypherpunk tradition of cryptographic sovereignty, and the cooperative economics movement of W.E.B. Du Bois.",
    date: "October 2024",
    readTime: "11 min read",
    featured: false,
  },
];

const categories = ["All", "Philosophy", "Technology", "Governance", "Community", "DeFi"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== "All");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! You will receive updates from the Elevation Foundation.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="container relative z-10">
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
        </div>
      </section>

      {/* ─── FEATURED POST ────────────────────────────────────── */}
      {activeCategory === "All" && featuredPost && (
        <section className="py-16 bg-navy">
          <div className="container">
            <div className="section-label mb-6">Featured</div>
            <div className="grid md:grid-cols-2 gap-10 p-8 bg-[oklch(0.16_0.05_265)] border border-gold/20 rounded-sm">
              <div className="aspect-[16/9] bg-[oklch(0.20_0.05_265)] rounded-sm overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className={`section-label ${featuredPost.categoryColor} mb-3`}>{featuredPost.category}</div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="font-body text-white/65 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/40">
                    <Calendar size={12} /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/40">
                    <Clock size={12} /> {featuredPost.readTime}
                  </span>
                </div>
                <button
                  onClick={() => toast.info("Full article coming soon — subscribe for updates!")}
                  className="inline-flex items-center gap-2 text-gold font-body font-medium hover:gap-3 transition-all group w-fit"
                >
                  Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── CATEGORY FILTER ──────────────────────────────────── */}
      <section className="py-8 bg-[oklch(0.14_0.05_265)] border-y border-white/10 sticky top-16 md:top-20 z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.id} className="flex flex-col p-7 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm card-lift group">
                <div className={`section-label ${post.categoryColor} mb-3`}>{post.category}</div>
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug group-hover:text-gold transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/35">
                      <Calendar size={11} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/35">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <button
                    onClick={() => toast.info("Full article coming soon — subscribe for updates!")}
                    className="text-white/30 hover:text-gold transition-colors"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
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
            <p className="font-body text-xs text-white/30 mt-3">
              Powered by Beehiiv. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
