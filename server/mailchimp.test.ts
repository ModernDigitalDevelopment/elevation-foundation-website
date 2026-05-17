/**
 * Mailchimp Integration Tests
 * Validates that the Mailchimp API key is valid and the audience list is accessible.
 */
import { describe, it, expect } from "vitest";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY ?? "52300d1b241840f8c42e25c35227f337-us6";
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID ?? "8f41419667";
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX ?? "us6";

const authHeader = `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`;

describe("Mailchimp Integration", () => {
  it("should have a valid API key and reach the Mailchimp account endpoint", async () => {
    const res = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/`,
      { headers: { Authorization: authHeader } }
    );
    expect(res.status).toBe(200);
    const data = await res.json() as { account_name?: string };
    expect(data.account_name).toBeTruthy();
  });

  it("should be able to fetch the Elevation Foundation Community audience list", async () => {
    const res = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}`,
      { headers: { Authorization: authHeader } }
    );
    expect(res.status).toBe(200);
    const data = await res.json() as { id?: string; name?: string };
    expect(data.id).toBe(MAILCHIMP_LIST_ID);
    expect(data.name).toBe("Elevation Foundation Community");
  });

  it("should have correct environment variables set", () => {
    expect(MAILCHIMP_API_KEY).toBeTruthy();
    expect(MAILCHIMP_API_KEY).toContain("-us6");
    expect(MAILCHIMP_LIST_ID).toBeTruthy();
    expect(MAILCHIMP_SERVER_PREFIX).toBe("us6");
  });
});
