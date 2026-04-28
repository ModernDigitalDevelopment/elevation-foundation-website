import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the db module
vi.mock("./db", () => ({
  subscribeEmail: vi.fn(),
  listSubscribers: vi.fn(),
}));

import { subscribeEmail, listSubscribers } from "./db";

describe("Newsletter subscription logic", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("subscribeEmail returns alreadySubscribed=false for new subscriber", async () => {
    (subscribeEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ alreadySubscribed: false });
    const result = await subscribeEmail("test@example.com", "Test", "home");
    expect(result.alreadySubscribed).toBe(false);
    expect(subscribeEmail).toHaveBeenCalledWith("test@example.com", "Test", "home");
  });

  it("subscribeEmail returns alreadySubscribed=true for duplicate", async () => {
    (subscribeEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ alreadySubscribed: true });
    const result = await subscribeEmail("existing@example.com");
    expect(result.alreadySubscribed).toBe(true);
  });

  it("listSubscribers returns subscribers array and total", async () => {
    (listSubscribers as ReturnType<typeof vi.fn>).mockResolvedValue({
      subscribers: [{ id: 1, email: "a@b.com", firstName: "A", source: "home", subscribedAt: new Date(), active: true }],
      total: 1,
    });
    const result = await listSubscribers({ limit: 10, offset: 0 });
    expect(result.total).toBe(1);
    expect(result.subscribers).toHaveLength(1);
    expect(result.subscribers[0].email).toBe("a@b.com");
  });
});
