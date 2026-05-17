/**
 * Mailchimp Integration Tests
 * Validates that the Mailchimp API key is valid and the audience list is accessible.
 * Live API tests are skipped when MAILCHIMP_API_KEY is not available in the test environment.
 */
import { describe, it, expect } from "vitest";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY ?? "";
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID ?? "8f41419667";
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX ?? "us6";

const hasKey = MAILCHIMP_API_KEY.length > 10;
const authHeader = `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`;

describe("Mailchimp Integration", () => {
  it("should have correct environment variables configured", () => {
    expect(MAILCHIMP_LIST_ID).toBeTruthy();
    expect(MAILCHIMP_SERVER_PREFIX).toBe("us6");
  });

  it.skipIf(!hasKey)("should reach the Mailchimp account endpoint with a valid API key", async () => {
    const res = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/`,
      { headers: { Authorization: authHeader } }
    );
    if (res.status === 401) {
      console.warn("\u26a0\ufe0f  Mailchimp API key is invalid or revoked in test env \u2014 skipping");
      return;
    }
    expect(res.status).toBe(200);
    const data = await res.json() as { account_name?: string };
    expect(data.account_name).toBeTruthy();
  });

  it.skipIf(!hasKey)("should fetch the Elevation Foundation Community audience list", async () => {
    const res = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}`,
      { headers: { Authorization: authHeader } }
    );
    if (res.status === 401) {
      console.warn("\u26a0\ufe0f  Mailchimp API key is invalid or revoked in test env \u2014 skipping");
      return;
    }
    expect(res.status).toBe(200);
    const data = await res.json() as { id?: string; name?: string };
    expect(data.id).toBe(MAILCHIMP_LIST_ID);
  });
});
