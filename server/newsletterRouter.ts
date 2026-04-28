import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { listSubscribers, subscribeEmail } from "./db";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";

export const newsletterRouter = router({
  /**
   * Public: subscribe an email address.
   * Returns { success, alreadySubscribed } — never throws on duplicate.
   */
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email("Please enter a valid email address"),
        firstName: z.string().max(128).optional(),
        source: z.string().max(64).optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const result = await subscribeEmail(input.email, input.firstName, input.source ?? "website");
        return { success: true, alreadySubscribed: result.alreadySubscribed };
      } catch (error) {
        console.error("[Newsletter] Subscribe error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to subscribe. Please try again.",
        });
      }
    }),

  /**
   * Admin: list all subscribers (paginated).
   */
  listSubscribers: protectedProcedure
    .input(
      z.object({
        limit: z.number().int().min(1).max(500).optional(),
        offset: z.number().int().min(0).optional(),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
      }
      return listSubscribers({ limit: input?.limit, offset: input?.offset });
    }),
});
