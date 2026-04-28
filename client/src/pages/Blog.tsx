/*
 * ELEVATION RISING — Blog Page
 * Updates, thought leadership, community news
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
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
    title: "Sotilitarianism: A New Economic Operating System for the 21st Century",
    excerpt: "Sotilitarianism is not a protest movement. It is a construction project. It integrates capitalist opportunism, socialist humanism, and collective ownership into a single coherent framework rendered in code, enforced by smart contracts, and governed by the community. Make blockchain invisible. Make impact inevitable.",
    date: "April 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Technology",
    categoryColor: "text-teal",
    title: "Inside the Elevation Engine: AI-Managed DeFi Yield for Community Treasuries",
    excerpt: "A technical deep-dive into how our Python-based AI agents scan for arbitrage opportunities across Aave, Uniswap, and Compound, execute flash loans, and route profits through the SotilityTreasuryRouter — distributing 40% to SOT holders, 40% to SST reserves, and 20% to SUG community campaigns.",
    date: "March 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 3,
    category: "Governance",
    categoryColor: "text-gold",
    title: "Wyoming DUNA Law: The Legal Framework for the World's First Hybrid 501(c)(3)/DAO",
    excerpt: "Wyoming became the first US state to legally recognize Decentralized Unincorporated Nonprofit Associations. Here is how the Elevation Foundation is using this framework to build a nonprofit that is simultaneously tax-exempt and community-governed on-chain — with no board of directors required.",
    date: "February 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Community",
    categoryColor: "text-teal",
    title: "WeSolar: Putting the \"We\" in Web3 Energy — IOTA Tangle and Fractional Solar Ownership",
    excerpt: "Energy poverty is not an accident. WeSolar uses the IOTA Tangle's feeless microtransactions and the WeSolarCrowdfund contract to enable fractional NFT ownership of solar panels. Residents earn WeSolarCredits for energy generated and vote on expansion through WeSolarGovernance — no utility company intermediary.",
    date: "January 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    category: "DeFi",
    categoryColor: "text-crimson",
    title: "SOT, SUG, SST: The Three-Token Architecture of Sotilitarian Economics",
    excerpt: "SOT is ownership and dividends. SUG is earned social utility — not purchased. SST is a revenue-backed stablecoin, not an algorithmic gamble. Together they form a self-reinforcing economic flywheel where social good generates financial yield, and financial yield funds more social good.",
    date: "December 2024",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Philosophy",
    categoryColor: "text-gold",
    title: "Bentham, Ostrom, Hurwicz, Ubuntu: The Intellectual DNA of Sotilitarianism",
    excerpt: "Sotilitarianism synthesizes Jeremy Bentham's utilitarianism, Elinor Ostrom's commons governance theory, Leonid Hurwicz's mechanism design, and the African philosophy of Ubuntu into a blockchain-native governance framework. Here is how each tradition shapes the Elevation ecosystem.",
    date: "November 2024",
    readTime: "11 min read",
    featured: false,
  },
  {
    id: 7,
    category: "Governance",
    categoryColor: "text-gold",
    title: "Transparently: How the SoGoodDAOFactory Deploys On-Chain Governance for Any Organization",
    excerpt: "The Transparently DApp is not just for the Elevation Foundation. The SoGoodDAOFactory allows any nonprofit, cooperative, or community organization to deploy its own governance structure on-chain in minutes. Organizations earn Transparency Scores based on verified disclosures — creating a new standard of accountability.",
    date: "October 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 8,
    category: "Community",
    categoryColor: "text-teal",
    title: "The American Transparency Revolution: Why Blockchain Governance Is a Civil Rights Issue",
    excerpt: "For generations, communities have been excluded from the financial systems that govern their lives. Banks deny loans. Governments lack accountability. Nonprofits operate in opacity. The Elevation Foundation's American Transparency Revolution Manifesto argues that radical financial transparency is not just good policy — it is a moral imperative.",
    date: "September 2024",
    readTime: "13 min read",
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
      <SEOHead
        title="Blog and Updates | The Elevation Foundation"
        description="Thought leadership on Sotilitarianism, blockchain governance, DeFi, community solar, and economic empowerment. Articles, white papers, and community updates from the Elevation Foundation."
        canonical="/blog"
        keywords="Sotilitarianism blog, blockchain governance articles, DeFi community finance, WeSolar news, Transparently updates, nonprofit blockchain news"
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
