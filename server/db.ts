import { and, desc, eq, like, or, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { BlogPost, InsertBlogPost, InsertUser, blogPosts, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ─── BLOG POST QUERIES ─────────────────────────────────────────────────────

/** List published posts, newest first. Optionally filter by category. */
export async function listPublishedPosts(opts?: { category?: string; limit?: number; offset?: number }) {
  const db = await getDb();
  if (!db) return { posts: [], total: 0 };

  const { category, limit = 20, offset = 0 } = opts ?? {};

  const conditions = [eq(blogPosts.published, true)];
  if (category && category !== "All") {
    conditions.push(eq(blogPosts.category, category));
  }

  const where = and(...conditions);

  const [posts, countResult] = await Promise.all([
    db.select().from(blogPosts).where(where).orderBy(desc(blogPosts.publishedAt)).limit(limit).offset(offset),
    db.select({ count: sql<number>`count(*)` }).from(blogPosts).where(where),
  ]);

  return { posts, total: Number(countResult[0]?.count ?? 0) };
}

/** List ALL posts (published + drafts) for the admin editor. */
export async function listAllPosts(opts?: { limit?: number; offset?: number }) {
  const db = await getDb();
  if (!db) return { posts: [], total: 0 };

  const { limit = 50, offset = 0 } = opts ?? {};

  const [posts, countResult] = await Promise.all([
    db.select().from(blogPosts).orderBy(desc(blogPosts.updatedAt)).limit(limit).offset(offset),
    db.select({ count: sql<number>`count(*)` }).from(blogPosts),
  ]);

  return { posts, total: Number(countResult[0]?.count ?? 0) };
}

/** Get a single published post by slug. */
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(blogPosts)
    .where(and(eq(blogPosts.slug, slug), eq(blogPosts.published, true)))
    .limit(1);

  return result[0];
}

/** Get any post by ID (admin use). */
export async function getPostById(id: number): Promise<BlogPost | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return result[0];
}

/** Create a new blog post. Returns the inserted ID. */
export async function createPost(data: InsertBlogPost): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(blogPosts).values(data);
  return (result as any)[0]?.insertId ?? 0;
}

/** Update an existing blog post by ID. */
export async function updatePost(id: number, data: Partial<InsertBlogPost>): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // If publishing for the first time, set publishedAt
  const updates: Partial<InsertBlogPost> = { ...data };
  if (data.published === true) {
    const existing = await getPostById(id);
    if (existing && !existing.publishedAt) {
      updates.publishedAt = new Date();
    }
  }

  await db.update(blogPosts).set(updates).where(eq(blogPosts.id, id));
}

/** Delete a blog post by ID. */
export async function deletePost(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.delete(blogPosts).where(eq(blogPosts.id, id));
}

/** Get distinct categories from published posts. */
export async function getCategories(): Promise<string[]> {
  const db = await getDb();
  if (!db) return [];

  const result = await db
    .selectDistinct({ category: blogPosts.category })
    .from(blogPosts)
    .where(eq(blogPosts.published, true));

  return result.map(r => r.category).filter(Boolean);
}
