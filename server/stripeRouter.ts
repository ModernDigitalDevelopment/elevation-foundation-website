/**
 * Stripe Donation Router
 * Handles creating Checkout Sessions for one-time and recurring donations.
 */
import Stripe from "stripe";
import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

// Donation amount presets (in cents)
const DONATION_AMOUNTS: Record<number, number> = {
  25: 2500,
  50: 5000,
  100: 10000,
  250: 25000,
  500: 50000,
  1000: 100000,
};

export const stripeRouter = router({
  /**
   * Create a Stripe Checkout Session for a donation.
   * mode: "payment" = one-time, "subscription" = monthly recurring
   */
  createDonationSession: publicProcedure
    .input(
      z.object({
        amountDollars: z.number().min(1).max(10000),
        mode: z.enum(["payment", "subscription"]),
        donorName: z.string().optional(),
        donorEmail: z.string().email().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { amountDollars, mode, donorName, donorEmail } = input;
      const amountCents = Math.round(amountDollars * 100);

      const origin = ctx.req.headers.origin || "https://elevfound-bstca4lc.manus.space";

      try {
        if (mode === "payment") {
          // One-time donation via Checkout
          const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card"],
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  unit_amount: amountCents,
                  product_data: {
                    name: "One-Time Donation — Elevation Foundation",
                    description:
                      "Your tax-deductible donation supports community-governed financial infrastructure.",
                    images: [],
                  },
                },
                quantity: 1,
              },
            ],
            customer_email: donorEmail,
            allow_promotion_codes: true,
            client_reference_id: ctx.user?.id?.toString(),
            metadata: {
              user_id: ctx.user?.id?.toString() ?? "guest",
              customer_email: donorEmail ?? "",
              customer_name: donorName ?? "",
              donation_type: "one_time",
              amount_dollars: amountDollars.toString(),
            },
            success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/donate`,
          });

          return { url: session.url };
        } else {
          // Monthly recurring donation — create a price on the fly
          const price = await stripe.prices.create({
            currency: "usd",
            unit_amount: amountCents,
            recurring: { interval: "month" },
            product_data: {
              name: "Monthly Donation — Elevation Foundation",
            },
          });

          const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [{ price: price.id, quantity: 1 }],
            customer_email: donorEmail,
            allow_promotion_codes: true,
            client_reference_id: ctx.user?.id?.toString(),
            metadata: {
              user_id: ctx.user?.id?.toString() ?? "guest",
              customer_email: donorEmail ?? "",
              customer_name: donorName ?? "",
              donation_type: "monthly",
              amount_dollars: amountDollars.toString(),
            },
            success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/donate`,
          });

          return { url: session.url };
        }
      } catch (err: any) {
        console.error("[Stripe] createDonationSession error:", err.message);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create checkout session. Please try again.",
        });
      }
    }),
});
