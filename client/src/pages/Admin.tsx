/*
 * ELEVATION RISING — Admin Panel
 * Central hub for site management. Accessible only to users with role="admin".
 * Sections: Dashboard overview, Blog posts, Subscribers, Quick actions.
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  LayoutDashboard, FileText, Users, Settings, Plus, Pencil, Trash2,
  Eye, EyeOff, Star, StarOff, ArrowLeft, Loader2, Download, Search,
  TrendingUp, BookOpen, Mail, CheckCircle, AlertCircle, ExternalLink,
  ChevronRight, RefreshCw
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type AdminTab = "dashboard" | "posts" | "subscribers";

function formatDate(d: Date | string | null | undefined) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ── Stat Card ───────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, icon: Icon, color }: {
  label: string; value: number | string; sub?: string;
  icon: React.ElementType; color: string;
}) {
  return (
    <div className="rounded-2xl p-6" style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <div className="flex items-start justify-between mb-4">
        <p className="font-body text-sm font-medium" style={{ color: "#6b7280" }}>{label}</p>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: color + "15" }}>
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <p className="font-bold text-3xl mb-1" style={{ fontFamily: "Georgia, serif", color: "#111827" }}>{value}</p>
      {sub && <p className="font-body text-xs" style={{ color: "#9ca3af" }}>{sub}</p>}
    </div>
  );
}

// ── Dashboard Tab ────────────────────────────────────────────────────────────
function DashboardTab() {
  const { data: stats, isLoading, refetch } = trpc.newsletter.getAdminStats.useQuery();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl" style={{ fontFamily: "Georgia, serif", color: "#111827" }}>Overview</h2>
          <p className="font-body text-sm mt-1" style={{ color: "#6b7280" }}>Site health at a glance</p>
        </div>
        <button
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm transition-colors"
          style={{ background: "#f5f5f2", color: "#6b7280" }}
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={28} className="animate-spin" style={{ color: "#b8860b" }} />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Published Posts" value={stats?.publishedPosts ?? 0} sub="Live on site" icon={BookOpen} color="#b8860b" />
          <StatCard label="Draft Posts" value={stats?.draftPosts ?? 0} sub="Unpublished" icon={FileText} color="#6b7280" />
          <StatCard label="Total Subscribers" value={stats?.totalSubscribers ?? 0} sub="All time" icon={Mail} color="#0d9488" />
          <StatCard label="New Subscribers" value={stats?.recentSubscribers ?? 0} sub="Last 30 days" icon={TrendingUp} color="#7c3aed" />
        </div>
      )}

      {/* Quick Actions */}
      <div>
        <h3 className="font-body font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#9ca3af" }}>Quick Actions</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { label: "Write New Post", desc: "Create a blog post or article", href: "/admin/blog", icon: Plus, color: "#b8860b" },
            { label: "View Live Blog", desc: "See the public blog page", href: "/blog", icon: ExternalLink, color: "#0d9488" },
            { label: "View Live Site", desc: "Open the homepage", href: "/", icon: ExternalLink, color: "#6b7280" },
          ].map(({ label, desc, href, icon: Icon, color }) => (
            <Link key={label} href={href}>
              <div
                className="flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + "15" }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-sm" style={{ color: "#111827" }}>{label}</p>
                  <p className="font-body text-xs" style={{ color: "#9ca3af" }}>{desc}</p>
                </div>
                <ChevronRight size={14} style={{ color: "#d1d5db" }} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Posts Tab ────────────────────────────────────────────────────────────────
function PostsTab() {
  const [search, setSearch] = useState("");
  const utils = trpc.useUtils();

  const { data, isLoading, refetch } = trpc.blog.adminList.useQuery({ limit: 100, offset: 0 });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => { utils.blog.adminList.invalidate(); },
  });

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      utils.blog.adminList.invalidate();
      toast.success("Post deleted.");
    },
    onError: () => toast.error("Failed to delete post."),
  });

  const posts = (data?.posts ?? []).filter(p =>
    !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleTogglePublish = (id: number, currentPublished: boolean) => {
    updateMutation.mutate({ id, data: { published: !currentPublished } });
    toast.success(currentPublished ? "Post unpublished." : "Post published!");
  };

  const handleToggleFeatured = (id: number, currentFeatured: boolean) => {
    updateMutation.mutate({ id, data: { featured: !currentFeatured } });
    toast.success(currentFeatured ? "Removed from featured." : "Set as featured post!");
  };

  const handleDelete = (id: number, title: string) => {
    if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) return;
    deleteMutation.mutate({ id });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-bold text-2xl" style={{ fontFamily: "Georgia, serif", color: "#111827" }}>Blog Posts</h2>
          <p className="font-body text-sm mt-1" style={{ color: "#6b7280" }}>{data?.total ?? 0} total posts</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#9ca3af" }} />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl font-body text-sm border focus:outline-none focus:ring-2"
              style={{ background: "#ffffff", borderColor: "#e5e0d8", color: "#111827", width: "200px" }}
            />
          </div>
          <Link href="/admin/blog">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-semibold transition-colors"
              style={{ background: "#111827", color: "#ffffff" }}
            >
              <Plus size={14} />
              New Post
            </button>
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={28} className="animate-spin" style={{ color: "#b8860b" }} />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 rounded-2xl" style={{ background: "#ffffff" }}>
          <BookOpen size={40} className="mx-auto mb-3" style={{ color: "#d1cdc7" }} />
          <p className="font-body" style={{ color: "#9ca3af" }}>
            {search ? "No posts match your search." : "No posts yet."}
          </p>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #f0ece4" }}>
                <th className="text-left px-6 py-4 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>Title</th>
                <th className="text-left px-4 py-4 font-body text-xs font-semibold uppercase tracking-wider hidden md:table-cell" style={{ color: "#9ca3af" }}>Category</th>
                <th className="text-left px-4 py-4 font-body text-xs font-semibold uppercase tracking-wider hidden lg:table-cell" style={{ color: "#9ca3af" }}>Date</th>
                <th className="text-center px-4 py-4 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>Status</th>
                <th className="text-right px-6 py-4 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr
                  key={post.id}
                  style={{ borderBottom: i < posts.length - 1 ? "1px solid #f9f7f4" : "none" }}
                  className="hover:bg-[#fafaf8] transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-body font-semibold text-sm line-clamp-1" style={{ color: "#111827" }}>{post.title}</p>
                      <p className="font-body text-xs mt-0.5 line-clamp-1" style={{ color: "#9ca3af" }}>/blog/{post.slug}</p>
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className="font-body text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: "#f5f5f2", color: "#6b7280" }}>
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="font-body text-xs" style={{ color: "#9ca3af" }}>{formatDate(post.publishedAt ?? post.createdAt)}</span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span
                      className="inline-flex items-center gap-1.5 font-body text-xs font-medium px-2.5 py-1 rounded-full"
                      style={post.published
                        ? { background: "#d1fae5", color: "#065f46" }
                        : { background: "#f3f4f6", color: "#6b7280" }
                      }
                    >
                      {post.published ? <CheckCircle size={11} /> : <AlertCircle size={11} />}
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1">
                      {/* Featured toggle */}
                      <button
                        onClick={() => handleToggleFeatured(post.id, post.featured)}
                        title={post.featured ? "Remove from featured" : "Set as featured"}
                        className="p-2 rounded-lg transition-colors hover:bg-[#f5f5f2]"
                        style={{ color: post.featured ? "#b8860b" : "#d1d5db" }}
                      >
                        {post.featured ? <Star size={15} fill="currentColor" /> : <StarOff size={15} />}
                      </button>
                      {/* Publish toggle */}
                      <button
                        onClick={() => handleTogglePublish(post.id, post.published)}
                        title={post.published ? "Unpublish" : "Publish"}
                        className="p-2 rounded-lg transition-colors hover:bg-[#f5f5f2]"
                        style={{ color: post.published ? "#0d9488" : "#9ca3af" }}
                      >
                        {post.published ? <Eye size={15} /> : <EyeOff size={15} />}
                      </button>
                      {/* Edit */}
                      <Link href={`/admin/blog?edit=${post.id}`}>
                        <button
                          title="Edit post"
                          className="p-2 rounded-lg transition-colors hover:bg-[#f5f5f2]"
                          style={{ color: "#6b7280" }}
                        >
                          <Pencil size={15} />
                        </button>
                      </Link>
                      {/* View live */}
                      {post.published && (
                        <Link href={`/blog/${post.slug}`}>
                          <button
                            title="View live post"
                            className="p-2 rounded-lg transition-colors hover:bg-[#f5f5f2]"
                            style={{ color: "#6b7280" }}
                          >
                            <ExternalLink size={15} />
                          </button>
                        </Link>
                      )}
                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        title="Delete post"
                        className="p-2 rounded-lg transition-colors hover:bg-red-50"
                        style={{ color: "#dc2626" }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Subscribers Tab ──────────────────────────────────────────────────────────
function SubscribersTab() {
  const [search, setSearch] = useState("");
  const utils = trpc.useUtils();

  const { data, isLoading } = trpc.newsletter.listSubscribers.useQuery({ limit: 500, offset: 0 });

  const deleteMutation = trpc.newsletter.deleteSubscriber.useMutation({
    onSuccess: () => {
      utils.newsletter.listSubscribers.invalidate();
      utils.newsletter.getAdminStats.invalidate();
      toast.success("Subscriber removed.");
    },
    onError: () => toast.error("Failed to remove subscriber."),
  });

  const subscribers = (data?.subscribers ?? []).filter(s =>
    !search ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    (s.firstName ?? "").toLowerCase().includes(search.toLowerCase())
  );

  const handleExportCSV = () => {
    const rows = [
      ["ID", "Email", "First Name", "Source", "Subscribed"],
      ...(data?.subscribers ?? []).map(s => [
        s.id, s.email, s.firstName ?? "", s.source ?? "", formatDate(s.createdAt)
      ])
    ];
    const csv = rows.map(r => r.map(v => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV downloaded.");
  };

  const handleDelete = (id: number, email: string) => {
    if (!window.confirm(`Remove ${email} from subscribers?`)) return;
    deleteMutation.mutate({ id });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-bold text-2xl" style={{ fontFamily: "Georgia, serif", color: "#111827" }}>Subscribers</h2>
          <p className="font-body text-sm mt-1" style={{ color: "#6b7280" }}>{data?.total ?? 0} total subscribers</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#9ca3af" }} />
            <input
              type="text"
              placeholder="Search subscribers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl font-body text-sm border focus:outline-none focus:ring-2"
              style={{ background: "#ffffff", borderColor: "#e5e0d8", color: "#111827", width: "200px" }}
            />
          </div>
          <button
            onClick={handleExportCSV}
            disabled={!data?.subscribers?.length}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-semibold transition-colors disabled:opacity-40"
            style={{ background: "#111827", color: "#ffffff" }}
          >
            <Download size={14} />
            Export CSV
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={28} className="animate-spin" style={{ color: "#b8860b" }} />
        </div>
      ) : subscribers.length === 0 ? (
        <div className="text-center py-16 rounded-2xl" style={{ background: "#ffffff" }}>
          <Mail size={40} className="mx-auto mb-3" style={{ color: "#d1cdc7" }} />
          <p className="font-body" style={{ color: "#9ca3af" }}>
            {search ? "No subscribers match your search." : "No subscribers yet."}
          </p>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid #f0ece4" }}>
                <th className="text-left px-6 py-4 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>Email</th>
                <th className="text-left px-4 py-4 font-body text-xs font-semibold uppercase tracking-wider hidden md:table-cell" style={{ color: "#9ca3af" }}>Name</th>
                <th className="text-left px-4 py-4 font-body text-xs font-semibold uppercase tracking-wider hidden lg:table-cell" style={{ color: "#9ca3af" }}>Source</th>
                <th className="text-left px-4 py-4 font-body text-xs font-semibold uppercase tracking-wider hidden lg:table-cell" style={{ color: "#9ca3af" }}>Subscribed</th>
                <th className="text-right px-6 py-4 font-body text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub, i) => (
                <tr
                  key={sub.id}
                  style={{ borderBottom: i < subscribers.length - 1 ? "1px solid #f9f7f4" : "none" }}
                  className="hover:bg-[#fafaf8] transition-colors"
                >
                  <td className="px-6 py-4">
                    <p className="font-body text-sm" style={{ color: "#111827" }}>{sub.email}</p>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <p className="font-body text-sm" style={{ color: "#6b7280" }}>{sub.firstName ?? "—"}</p>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="font-body text-xs px-2.5 py-1 rounded-full" style={{ background: "#f5f5f2", color: "#6b7280" }}>
                      {sub.source ?? "website"}
                    </span>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="font-body text-xs" style={{ color: "#9ca3af" }}>{formatDate(sub.createdAt)}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(sub.id, sub.email)}
                      title="Remove subscriber"
                      className="p-2 rounded-lg transition-colors hover:bg-red-50"
                      style={{ color: "#dc2626" }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Main Admin Component ─────────────────────────────────────────────────────
export default function Admin() {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();

  // Redirect non-admins
  if (!loading && (!user || user.role !== "admin")) {
    navigate("/");
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <Loader2 size={32} className="animate-spin text-gold" />
      </div>
    );
  }

  const tabs: { id: AdminTab; label: string; icon: React.ElementType }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "posts", label: "Posts", icon: FileText },
    { id: "subscribers", label: "Subscribers", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-navy">
      <Navigation />

      <div style={{ background: "#f5f5f2", paddingTop: "80px", paddingBottom: "64px", minHeight: "100vh" }}>
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}>

          {/* Header */}
          <div className="flex items-center justify-between py-8 mb-2">
            <div>
              <p className="font-body text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#b8860b" }}>Admin Panel</p>
              <h1 className="font-bold text-3xl" style={{ fontFamily: "Georgia, serif", color: "#111827" }}>
                Elevation Foundation
              </h1>
              <p className="font-body text-sm mt-1" style={{ color: "#6b7280" }}>
                Logged in as <strong>{user?.name ?? user?.email ?? "Admin"}</strong>
              </p>
            </div>
            <Link href="/">
              <button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm transition-colors"
                style={{ background: "#ffffff", color: "#6b7280", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
              >
                <ArrowLeft size={14} />
                Back to Site
              </button>
            </Link>
          </div>

          {/* Tab Navigation */}
          <div
            className="flex gap-1 p-1 rounded-2xl mb-8"
            style={{ background: "#e8e4dc", width: "fit-content" }}
          >
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-medium transition-all duration-200"
                style={activeTab === id
                  ? { background: "#ffffff", color: "#111827", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }
                  : { background: "transparent", color: "#6b7280" }
                }
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "posts" && <PostsTab />}
          {activeTab === "subscribers" && <SubscribersTab />}

        </div>
      </div>

      <Footer />
    </div>
  );
}
