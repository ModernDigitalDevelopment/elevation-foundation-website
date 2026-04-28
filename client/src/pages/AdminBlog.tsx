/*
 * ELEVATION RISING — Admin Blog Editor
 * Only accessible to users with role="admin".
 * Lists all posts (drafts + published), create new, edit, delete, publish/unpublish.
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Plus, Pencil, Trash2, Eye, EyeOff, Loader2, ArrowLeft, Save, X, CheckCircle
} from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

type PostForm = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  readTime: string;
  author: string;
  coverImage: string;
  published: boolean;
};

const EMPTY_FORM: PostForm = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  category: "Philosophy",
  tags: "",
  readTime: "",
  author: "The Elevation Foundation",
  coverImage: "",
  published: false,
};

const CATEGORIES = ["Philosophy", "Technology", "Governance", "Community", "DeFi", "General"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 100);
}

export default function AdminBlog() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [view, setView] = useState<"list" | "create" | "edit">("list");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<PostForm>(EMPTY_FORM);

  const utils = trpc.useUtils();

  const { data: postsData, isLoading } = trpc.blog.adminList.useQuery({ limit: 100, offset: 0 });
  const { data: editPost, isLoading: editLoading } = trpc.blog.adminGetById.useQuery(
    { id: editingId! },
    { enabled: editingId !== null && view === "edit" }
  );

  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      toast.success("Post created successfully!");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      setView("list");
      setForm(EMPTY_FORM);
    },
    onError: (err) => toast.error(err.message),
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      toast.success("Post updated successfully!");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      setView("list");
      setEditingId(null);
    },
    onError: (err) => toast.error(err.message),
  });

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      toast.success("Post deleted.");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  // Guard: admin only
  if (!isAuthenticated || user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-navy text-white flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-white mb-4">Access Denied</h1>
            <p className="font-body text-white/60 mb-6">You must be an admin to access this page.</p>
            <Link href="/" className="text-gold font-body hover:underline">Return Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleEdit = (id: number, post: any) => {
    setEditingId(id);
    setForm({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags ?? "",
      readTime: post.readTime ?? "",
      author: post.author,
      coverImage: post.coverImage ?? "",
      published: post.published,
    });
    setView("edit");
  };

  const handleDelete = (id: number, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    deleteMutation.mutate({ id });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...form,
      coverImage: form.coverImage || undefined,
      tags: form.tags || undefined,
      readTime: form.readTime || undefined,
    };
    if (view === "create") {
      createMutation.mutate(data);
    } else if (view === "edit" && editingId !== null) {
      updateMutation.mutate({ id: editingId, data });
    }
  };

  const handleTitleChange = (title: string) => {
    setForm(f => ({
      ...f,
      title,
      slug: f.slug === "" || f.slug === slugify(f.title) ? slugify(title) : f.slug,
    }));
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;

  // ─── FORM VIEW ────────────────────────────────────────────────
  if (view === "create" || view === "edit") {
    return (
      <div className="min-h-screen bg-navy text-white">
        <Navigation />
        <div className="container pt-28 pb-20 max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => { setView("list"); setEditingId(null); setForm(EMPTY_FORM); }}
              className="inline-flex items-center gap-2 text-white/50 hover:text-gold font-body text-sm transition-colors"
            >
              <ArrowLeft size={14} /> Back to Posts
            </button>
            <h1 className="font-display text-2xl font-bold text-white">
              {view === "create" ? "New Post" : "Edit Post"}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2">
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Title *</label>
                <input
                  required
                  value={form.title}
                  onChange={e => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body text-lg focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Post title..."
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Slug *</label>
                <input
                  required
                  value={form.slug}
                  onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body font-mono text-sm focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="url-friendly-slug"
                  pattern="[a-z0-9-]+"
                  title="Lowercase letters, numbers, and hyphens only"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Category *</label>
                <select
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body focus:border-gold/50 focus:outline-none transition-colors"
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Excerpt */}
              <div className="md:col-span-2">
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Excerpt / Summary *</label>
                <textarea
                  required
                  rows={3}
                  value={form.excerpt}
                  onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body resize-y focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="A short summary shown on the blog index..."
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Content (Markdown) *</label>
                <textarea
                  required
                  rows={20}
                  value={form.content}
                  onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body font-mono text-sm resize-y focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Write your article in Markdown format..."
                />
                <p className="font-mono-data text-xs text-white/30 mt-1">Supports full Markdown: **bold**, *italic*, ## headings, {'>'} blockquotes, `code`, etc.</p>
              </div>

              {/* Author */}
              <div>
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Author</label>
                <input
                  value={form.author}
                  onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>

              {/* Read Time */}
              <div>
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Read Time</label>
                <input
                  value={form.readTime}
                  onChange={e => setForm(f => ({ ...f, readTime: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="e.g. 8 min read" 
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Tags (comma-separated)</label>
                <input
                  value={form.tags}
                  onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Sotilitarianism, Governance, DeFi"
                />
              </div>

              {/* Cover Image */}
              <div>
                <label className="block font-mono-data text-xs text-white/50 uppercase tracking-wider mb-2">Cover Image URL</label>
                <input
                  value={form.coverImage}
                  onChange={e => setForm(f => ({ ...f, coverImage: e.target.value }))}
                  className="w-full px-4 py-3 bg-[oklch(0.16_0.05_265)] border border-white/15 rounded-sm text-white font-body text-sm focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="https://..."
                />
              </div>

              {/* Publish toggle */}
              <div className="md:col-span-2 flex items-center gap-4 p-4 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    onClick={() => setForm(f => ({ ...f, published: !f.published }))}
                    className={`relative w-12 h-6 rounded-full transition-colors ${form.published ? "bg-gold" : "bg-white/20"}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${form.published ? "translate-x-7" : "translate-x-1"}`} />
                  </div>
                  <span className="font-body text-sm text-white">
                    {form.published ? <span className="text-gold font-semibold">Published — visible to everyone</span> : <span className="text-white/50">Draft — only visible to admins</span>}
                  </span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm hover:bg-gold-light transition-all disabled:opacity-50"
              >
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                {isSaving ? "Saving..." : view === "create" ? "Create Post" : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => { setView("list"); setEditingId(null); setForm(EMPTY_FORM); }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/60 font-body rounded-sm hover:border-white/40 hover:text-white transition-all"
              >
                <X size={16} /> Cancel
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }

  // ─── LIST VIEW ────────────────────────────────────────────────
  const posts = postsData?.posts ?? [];

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navigation />
      <div className="container pt-28 pb-20 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="section-label mb-2">Admin</div>
            <h1 className="font-display text-3xl font-bold text-white">Blog Manager</h1>
            <p className="font-body text-white/50 text-sm mt-1">{posts.length} total posts</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white/60 font-body text-sm rounded-sm hover:border-white/40 hover:text-white transition-all"
            >
              <Eye size={14} /> View Blog
            </Link>
            <button
              onClick={() => { setForm(EMPTY_FORM); setView("create"); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body text-sm rounded-sm hover:bg-gold-light transition-all"
            >
              <Plus size={16} /> New Post
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={32} className="animate-spin text-gold/50" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 border border-white/10 rounded-sm">
            <p className="font-body text-white/40 mb-6">No posts yet. Create your first article.</p>
            <button
              onClick={() => { setForm(EMPTY_FORM); setView("create"); }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.12_0.05_265)] font-semibold font-body rounded-sm"
            >
              <Plus size={16} /> Write First Post
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center gap-4 p-5 bg-[oklch(0.16_0.05_265)] border border-white/10 rounded-sm hover:border-white/20 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono-data text-xs text-white/40">{post.category}</span>
                    {post.published ? (
                      <span className="inline-flex items-center gap-1 font-mono-data text-xs text-teal">
                        <CheckCircle size={10} /> Published
                      </span>
                    ) : (
                      <span className="font-mono-data text-xs text-white/30">Draft</span>
                    )}
                  </div>
                  <h3 className="font-body font-semibold text-white truncate">{post.title}</h3>
                  <p className="font-mono-data text-xs text-white/30 mt-0.5">/{post.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {post.published && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="p-2 text-white/30 hover:text-gold transition-colors"
                      title="View post"
                    >
                      <Eye size={16} />
                    </Link>
                  )}
                  <button
                    onClick={() => handleEdit(post.id, post)}
                    className="p-2 text-white/30 hover:text-gold transition-colors"
                    title="Edit post"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    className="p-2 text-white/30 hover:text-crimson transition-colors"
                    title="Delete post"
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
