/**
 * Blog CMS Router
 * Public: list posts, get post by slug, get categories
 * Admin: create, update, delete posts
 */
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createPost,
  deletePost,
  getCategories,
  getPostBySlug,
  getPostById,
  listAllPosts,
  listPublishedPosts,
  updatePost,
} from "./db";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

const postInput = z.object({
  slug: z.string().min(1).max(255).regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  title: z.string().min(1).max(512),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  category: z.string().min(1).max(128).default("General"),
  tags: z.string().optional(),
  readTime: z.string().max(32).optional(),
  author: z.string().max(256).default("The Elevation Foundation"),
  coverImage: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(false),
});

export const blogRouter = router({
  /** Public: list published posts with optional category filter and pagination */
  list: publicProcedure
    .input(z.object({
      category: z.string().optional(),
      limit: z.number().min(1).max(50).default(12),
      offset: z.number().min(0).default(0),
    }))
    .query(async ({ input }) => {
      return listPublishedPosts(input);
    }),

  /** Public: get a single published post by slug */
  bySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const post = await getPostBySlug(input.slug);
      if (!post) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
      }
      return post;
    }),

  /** Public: get all distinct categories from published posts */
  categories: publicProcedure.query(async () => {
    return getCategories();
  }),

  /** Admin: list ALL posts including drafts */
  adminList: adminProcedure
    .input(z.object({
      limit: z.number().min(1).max(100).default(50),
      offset: z.number().min(0).default(0),
    }))
    .query(async ({ input }) => {
      return listAllPosts(input);
    }),

  /** Admin: get any post by ID (for editing) */
  adminGetById: adminProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const post = await getPostById(input.id);
      if (!post) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
      }
      return post;
    }),

  /** Admin: create a new blog post */
  create: adminProcedure
    .input(postInput)
    .mutation(async ({ input }) => {
      const id = await createPost({
        ...input,
        tags: input.tags ?? null,
        readTime: input.readTime ?? null,
        coverImage: input.coverImage || null,
        publishedAt: input.published ? new Date() : null,
      });
      return { id };
    }),

  /** Admin: update an existing blog post */
  update: adminProcedure
    .input(z.object({
      id: z.number(),
      data: postInput.partial(),
    }))
    .mutation(async ({ input }) => {
      const existing = await getPostById(input.id);
      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
      }
      await updatePost(input.id, {
        ...input.data,
        coverImage: input.data.coverImage || null,
      });
      return { success: true };
    }),

  /** Admin: delete a blog post */
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const existing = await getPostById(input.id);
      if (!existing) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
      }
      await deletePost(input.id);
      return { success: true };
    }),
});
