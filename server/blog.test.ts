/**
 * Blog Router Tests
 * Tests the blog tRPC procedures using in-memory mocks.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// ─── Mock the database helpers ────────────────────────────────
vi.mock("./db", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./db")>();
  return {
    ...actual,
    listPublishedPosts: vi.fn().mockResolvedValue({
      posts: [
        {
          id: 1,
          slug: "test-post",
          title: "Test Post",
          excerpt: "A test excerpt",
          content: "# Test\n\nContent here.",
          category: "Philosophy",
          tags: "Sotilitarianism,Governance",
          readTime: "5 min read",
          author: "The Elevation Foundation",
          coverImage: null,
          published: true,
          publishedAt: new Date("2025-01-01"),
          createdAt: new Date("2025-01-01"),
          updatedAt: new Date("2025-01-01"),
        },
      ],
      total: 1,
    }),
    getPostBySlug: vi.fn().mockImplementation((slug: string) => {
      if (slug === "test-post") {
        return Promise.resolve({
          id: 1,
          slug: "test-post",
          title: "Test Post",
          excerpt: "A test excerpt",
          content: "# Test\n\nContent here.",
          category: "Philosophy",
          tags: "Sotilitarianism,Governance",
          readTime: "5 min read",
          author: "The Elevation Foundation",
          coverImage: null,
          published: true,
          publishedAt: new Date("2025-01-01"),
          createdAt: new Date("2025-01-01"),
          updatedAt: new Date("2025-01-01"),
        });
      }
      return Promise.resolve(undefined);
    }),
    getCategories: vi.fn().mockResolvedValue(["Philosophy", "Technology", "Governance"]),
    listAllPosts: vi.fn().mockResolvedValue({ posts: [], total: 0 }),
    getPostById: vi.fn().mockResolvedValue(undefined),
    createPost: vi.fn().mockResolvedValue(42),
    updatePost: vi.fn().mockResolvedValue(undefined),
    deletePost: vi.fn().mockResolvedValue(undefined),
  };
});

// ─── Context helpers ──────────────────────────────────────────
function createPublicCtx(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createAdminCtx(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-open-id",
      email: "admin@elevation.foundation",
      name: "Admin User",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createUserCtx(): TrpcContext {
  return {
    user: {
      id: 2,
      openId: "user-open-id",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

// ─── Tests ────────────────────────────────────────────────────
describe("blog.list (public)", () => {
  it("returns published posts for unauthenticated users", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const result = await caller.blog.list({ limit: 12, offset: 0 });
    expect(result.posts).toHaveLength(1);
    expect(result.posts[0].slug).toBe("test-post");
    expect(result.total).toBe(1);
  });

  it("accepts optional category filter", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const result = await caller.blog.list({ category: "Philosophy", limit: 12, offset: 0 });
    expect(result).toBeDefined();
  });
});

describe("blog.bySlug (public)", () => {
  it("returns a post by slug", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const post = await caller.blog.bySlug({ slug: "test-post" });
    expect(post.title).toBe("Test Post");
    expect(post.content).toContain("# Test");
  });

  it("throws NOT_FOUND for unknown slug", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    await expect(caller.blog.bySlug({ slug: "does-not-exist" })).rejects.toThrow("Post not found");
  });
});

describe("blog.categories (public)", () => {
  it("returns list of categories", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    const cats = await caller.blog.categories();
    expect(cats).toContain("Philosophy");
    expect(cats).toContain("Technology");
  });
});

describe("blog.adminList (admin only)", () => {
  it("allows admin to list all posts", async () => {
    const caller = appRouter.createCaller(createAdminCtx());
    const result = await caller.blog.adminList({ limit: 50, offset: 0 });
    expect(result).toBeDefined();
  });

  it("rejects non-admin users with FORBIDDEN", async () => {
    const caller = appRouter.createCaller(createUserCtx());
    await expect(caller.blog.adminList({ limit: 50, offset: 0 })).rejects.toThrow();
  });

  it("rejects unauthenticated users", async () => {
    const caller = appRouter.createCaller(createPublicCtx());
    await expect(caller.blog.adminList({ limit: 50, offset: 0 })).rejects.toThrow();
  });
});

describe("blog.create (admin only)", () => {
  it("allows admin to create a post", async () => {
    const caller = appRouter.createCaller(createAdminCtx());
    const result = await caller.blog.create({
      slug: "new-post",
      title: "New Post",
      excerpt: "An excerpt",
      content: "# New Post\n\nContent.",
      category: "Philosophy",
      published: false,
    });
    expect(result.id).toBe(42);
  });

  it("rejects invalid slug (uppercase)", async () => {
    const caller = appRouter.createCaller(createAdminCtx());
    await expect(
      caller.blog.create({
        slug: "Invalid-Slug",
        title: "Test",
        excerpt: "Excerpt",
        content: "Content",
        category: "General",
        published: false,
      })
    ).rejects.toThrow();
  });

  it("rejects non-admin users", async () => {
    const caller = appRouter.createCaller(createUserCtx());
    await expect(
      caller.blog.create({
        slug: "new-post",
        title: "New Post",
        excerpt: "Excerpt",
        content: "Content",
        category: "General",
        published: false,
      })
    ).rejects.toThrow();
  });
});

describe("blog.delete (admin only)", () => {
  it("rejects deletion of non-existent post", async () => {
    const caller = appRouter.createCaller(createAdminCtx());
    await expect(caller.blog.delete({ id: 999 })).rejects.toThrow("Post not found");
  });

  it("rejects non-admin users", async () => {
    const caller = appRouter.createCaller(createUserCtx());
    await expect(caller.blog.delete({ id: 1 })).rejects.toThrow();
  });
});
