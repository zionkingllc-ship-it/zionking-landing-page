import { afterEach, describe, expect, it, vi } from "vitest";

import { getContactApiEndpoint, submitContactForm } from "@/lib/contact";

describe("contact helpers", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("falls back to the production API endpoint", () => {
    vi.stubEnv("VITE_GRAPHQL_ENDPOINT", "");
    expect(getContactApiEndpoint()).toBe("https://api.ziona.app/graphql/");
  });

  it("submits the shared contact mutation to the configured endpoint", async () => {
    vi.stubEnv("VITE_GRAPHQL_ENDPOINT", "https://api.example.com/graphql/");
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          submitContact: {
            success: true,
            ticketId: "ticket-123",
            error: null,
          },
        },
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitContactForm({
      brand: "ZIONKING",
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Tell me more about your work.",
    });

    expect(result.ticketId).toBe("ticket-123");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/graphql/",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  it("throws the backend message when submission fails", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        data: {
          submitContact: {
            success: false,
            ticketId: null,
            error: {
              code: "RATE_LIMIT_EXCEEDED",
              message: "Too many requests.",
            },
          },
        },
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      submitContactForm({
        brand: "ZIONKING",
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Tell me more about your work.",
      })
    ).rejects.toThrow("Too many requests.");
  });
});
