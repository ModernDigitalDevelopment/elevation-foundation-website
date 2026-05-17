/*
 * ELEVATION FOUNDATION — Newsletter Archive Page
 * Lists all blog posts in the "Newsletter" category, newest first.
 * Also serves as a standalone subscribe page with a full-featured signup form.
 */
import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import {
  ArrowRight, Calendar, Clock, Mail, Loader2, Rss,
  BookOpen, Users, Zap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663269003011/bsTCA4Lcv6kDbDVEJYib7X/community-bg-RdFx47xnXRjkf2fcLDsprJ.png";

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function IssueNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 border border-gold/25 font-mono-data text-xs text-gold/80 flex-shrink-0">
      #{n}
    </span>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubscribed(true);
      toast.success("You're subscribed! Check your inbox for a confirmation.");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe.mutate({ email, firstName: firstName || undefined });
  };

  // Fetch all Newsletter-category posts
  const { data: postsData, isLoading } = trpc.blog.list.useQuery({
    category: "Newsletter",
    limit: 50,
    offset: 0,
  });

  // Also fetch all posts for a "latest articles" sidebar
  const { data: latestData } = trpc.blog.list.useQuery({
    limit: 5,
    offset: 0,
  });

  const issues = postsData?.posts ?? [];
  const latestPosts = latestData?.posts ?? [];

  return (
    <div className="min-h-screen bg-navy text-white">
      <SEOHead
        title="Newsletter Archive | The Elevation Foundation"
        description="Read every issue of the Elevation Foundation newsletter. Capitalism 2.0, Sotilitarianism, transparent economics, blockchain governance, and community finance — delivered to your inbox."
        canonical="/newsletter"
        keywords="Elevation Foundation newsletter, capitalism 2.0 newsletter, Sotilitarianism updates, transparent economics newsletter, blockchain governance newsletter, community finance newsletter"
        ogImage={HERO_IMG}
      />
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/65 to-navy" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 section-label mb-5">
            <Mail size={12} />
            Newsletter Archive
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            The Transparency
            <br />
            <span className="gold-shimmer">Movement, Delivered</span>
          </h1>
          <p className="font-body text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Every issue of our newsletter — covering Capitalism 2.0, Sotilitarianism, blockchain governance, and community finance. Read the archive or subscribe to get future issues in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#subscribe"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all duration-200 hover:shadow-[0_0_30px_oklch(0.72_0.12_75/0.4)] group"
            >
              Subscribe Free
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#archive"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-body font-medium rounded-sm hover:border-gold/40 hover:text-gold transition-all duration-200"
            >
              <Rss size={15} />
              Browse Archive
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─────────────────────────────────────── */}
      <section className="py-14 bg-[oklch(0.14_0.05_265)] border-y border-white/10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                color: "text-gold",
                title: "Deep Dives",
                desc: "Long-form essays on Sotilitarianism, transparent economics, and the philosophy of Capitalism 2.0.",
              },
              {
                icon: Zap,
                color: "text-teal",
                title: "Project Updates",
                desc: "Progress reports on Transparently, WeSolar, and the Elevation Engine — straight from the builders.",
              },
              {
                icon: Users,
                color: "text-crimson",
                title: "Community Governance",
                desc: "Governance proposals, token economy news, and on-chain transparency reports from the Foundation.",
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-sm border border-current/25 flex items-center justify-center ${color}`}
                  style={{ background: "oklch(0.16 0.05 265)" }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">{title}</h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT: Archive + Subscribe ────────────────── */}
      <section id="archive" className="py-20 bg-navy">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Archive list ──────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl font-bold text-white">
                  Past Issues
                </h2>
                {issues.length > 0 && (
                  <span className="font-mono-data text-xs text-white/40 uppercase tracking-wider">
                    {issues.length} issue{issues.length !== 1 ? "s" : ""}
                  </span>
                )}
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-24">
                  <Loader2 size={32} className="animate-spin text-gold/50" />
                </div>
              ) : issues.length === 0 ? (
                <div className="text-center py-24 border border-white/10 rounded-sm bg-[oklch(0.14_0.05_265)]">
                  <Mail size={40} className="text-gold/30 mx-auto mb-4" />
                  <p className="font-display text-xl font-bold text-white mb-2">
                    First issue coming soon
                  </p>
                  <p className="font-body text-white/50 text-sm mb-6 max-w-sm mx-auto">
                    Subscribe below to be the first to receive our newsletter when it launches.
                  </p>
                  <a
                    href="#subscribe"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all"
                  >
                    Subscribe Free
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {issues.map((issue, idx) => (
                    <Link key={issue.id} href={`/blog/${issue.slug}`}>
                      <article className="flex gap-5 p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm cursor-pointer group transition-all duration-300 hover:border-gold/30 hover:shadow-[0_4px_24px_oklch(0.05_0.05_265/0.5)] hover:-translate-y-0.5">
                        {/* Issue number */}
                        <div className="flex-shrink-0 pt-0.5">
                          <IssueNumber n={issues.length - idx} />
                        </div>

                        {/* Cover image (if present) */}
                        {issue.coverImage && (
                          <div className="flex-shrink-0 w-24 h-16 rounded-sm overflow-hidden hidden sm:block">
                            <img
                              src={issue.coverImage}
                              alt={issue.title}
                              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-gold transition-colors duration-200 line-clamp-2">
                            {issue.title}
                          </h3>
                          <p className="font-body text-sm text-white/55 leading-relaxed mb-3 line-clamp-2">
                            {issue.excerpt}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/35">
                              <Calendar size={11} /> {formatDate(issue.publishedAt)}
                            </span>
                            {issue.readTime && (
                              <span className="flex items-center gap-1.5 font-mono-data text-xs text-white/35">
                                <Clock size={11} /> {issue.readTime}
                              </span>
                            )}
                          </div>
                        </div>

                        <ArrowRight
                          size={16}
                          className="flex-shrink-0 self-center text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200"
                        />
                      </article>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ── Sidebar ───────────────────────────────────── */}
            <div className="space-y-8">

              {/* Subscribe card */}
              <div id="subscribe" className="p-6 bg-[oklch(0.16_0.05_265)] border border-gold/25 rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Mail size={16} className="text-gold" />
                  <span className="font-mono-data text-xs text-gold/70 uppercase tracking-wider">Subscribe Free</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Join the Movement
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-5">
                  Get Capitalism 2.0 insights, governance updates, and ecosystem news delivered to your inbox. No spam. Unsubscribe anytime.
                </p>

                {subscribed ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center mx-auto mb-3">
                      <Mail size={20} className="text-teal" />
                    </div>
                    <p className="font-display text-lg font-bold text-white mb-1">You're in!</p>
                    <p className="font-body text-sm text-white/55">Check your inbox for a confirmation email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="text"
                      placeholder="First name (optional)"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[oklch(0.13_0.05_265)] border border-white/15 rounded-sm text-white font-body text-sm placeholder:text-white/30 focus:border-gold/40 focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[oklch(0.13_0.05_265)] border border-white/15 rounded-sm text-white font-body text-sm placeholder:text-white/30 focus:border-gold/40 focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={subscribe.isPending}
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body text-sm rounded-sm hover:bg-gold-light transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {subscribe.isPending ? (
                        <Loader2 size={15} className="animate-spin" />
                      ) : (
                        <>Subscribe Free <ArrowRight size={14} /></>
                      )}
                    </button>
                    <p className="font-mono-data text-[10px] text-white/30 text-center leading-relaxed">
                      Free forever. Unsubscribe anytime. No spam.
                    </p>
                  </form>
                )}
              </div>

              {/* Latest from the blog */}
              {latestPosts.length > 0 && (
                <div className="p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                  <h3 className="font-display text-lg font-bold text-white mb-4">Latest Articles</h3>
                  <div className="space-y-4">
                    {latestPosts.slice(0, 4).map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <div className="group cursor-pointer">
                          <p className="font-body text-sm text-white/75 group-hover:text-gold transition-colors duration-200 leading-snug mb-1 line-clamp-2">
                            {post.title}
                          </p>
                          <span className="font-mono-data text-xs text-white/30">
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 mt-4 text-gold/70 hover:text-gold font-body text-sm transition-colors"
                  >
                    View all articles <ArrowRight size={13} />
                  </Link>
                </div>
              )}

              {/* Topics */}
              <div className="p-6 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <h3 className="font-display text-lg font-bold text-white mb-4">Topics We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Capitalism 2.0", "Sotilitarianism", "Blockchain Governance",
                    "Community Finance", "DeFi", "WeSolar", "Transparently",
                    "Token Economy", "Transparent Economics", "Open Source",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[oklch(0.13_0.05_265)] border border-white/10 rounded-full font-body text-xs text-white/55 hover:border-gold/30 hover:text-gold/80 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
