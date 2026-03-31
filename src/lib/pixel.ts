/**
 * Utility functions for tracking events with Meta Pixel.
 *
 * It provides a strongly typed way to track both standard events (like 'Lead')
 * and custom events across the application.
 */

export const fbq = window.fbq || function () { };

/**
 * Tracks a standard Meta Pixel event.
 * Standard events are predefined by Facebook (e.g., 'Lead', 'Purchase', 'CompleteRegistration').
 *
 * @param eventName The standard event name.
 * @param parameters Optional extra data (e.g., value, currency).
 */
export const trackStandardEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, parameters);
    } else {
        console.warn('Meta Pixel (fbq) is not initialized');
    }
};

/**
 * Tracks a custom event you define yourself.
 *
 * @param customEventName The custom event name.
 * @param parameters Optional extra data related to the event.
 */
export const trackCustomEvent = (customEventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', customEventName, parameters);
    } else {
        console.warn('Meta Pixel (fbq) is not initialized');
    }
};
