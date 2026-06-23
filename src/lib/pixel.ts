/**
 * Utility functions for tracking events with Meta Pixel.
 *
 * It provides a strongly typed way to track both standard events (like "Lead")
 * and custom events across the application.
 */

type PixelParameters = Record<string, unknown>;

export const fbq =
  typeof window !== "undefined" && window.fbq
    ? window.fbq
    : (..._args: unknown[]) => undefined;

/**
 * Tracks a standard Meta Pixel event.
 */
export const trackStandardEvent = (
  eventName: string,
  parameters?: PixelParameters
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, parameters);
  } else {
    console.warn("Meta Pixel (fbq) is not initialized");
  }
};

/**
 * Tracks a custom Meta Pixel event.
 */
export const trackCustomEvent = (
  customEventName: string,
  parameters?: PixelParameters
) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", customEventName, parameters);
  } else {
    console.warn("Meta Pixel (fbq) is not initialized");
  }
};
