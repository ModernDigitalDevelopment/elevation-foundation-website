import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Blog posts table for the CMS.
 * Supports full markdown content, categories, tags, publish/draft toggle.
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  /** URL-safe slug, e.g. "what-is-sotilitarianism" */
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 512 }).notNull(),
  excerpt: text("excerpt").notNull(),
  /** Full markdown content */
  content: text("content").notNull(),
  /** Category label shown on the blog index */
  category: varchar("category", { length: 128 }).notNull().default("General"),
  /** Comma-separated tags, e.g. "Sotilitarianism,Governance,DeFi" */
  tags: text("tags"),
  /** Estimated read time, e.g. "7 min read" */
  readTime: varchar("readTime", { length: 32 }),
  /** Author display name */
  author: varchar("author", { length: 256 }).notNull().default("The Elevation Foundation"),
  /** CDN URL for the featured/hero image */
  coverImage: text("coverImage"),
  /** Whether the post is publicly visible */
  published: boolean("published").notNull().default(false),
  /** Whether this post is pinned as the featured article on the blog index */
  featured: boolean("featured").notNull().default(false),
  /** When the post was first published (set on first publish) */
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * Newsletter subscribers table.
 * Stores email addresses of visitors who opt in to updates.
 */
export const newsletterSubscribers = mysqlTable("newsletter_subscribers", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  /** Optional first name for personalisation */
  firstName: varchar("firstName", { length: 128 }),
  /** Source page where they subscribed, e.g. "home", "footer", "get-involved" */
  source: varchar("source", { length: 64 }).default("website"),
  /** Whether they confirmed via double opt-in (future use) */
  confirmed: boolean("confirmed").notNull().default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertNewsletterSubscriber = typeof newsletterSubscribers.$inferInsert;
