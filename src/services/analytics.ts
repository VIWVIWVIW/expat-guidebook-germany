/**
 * Analytics service abstraction.
 *
 * Centralizes all tracking calls so you can swap providers
 * (Google Analytics, Plausible, PostHog, etc.) in one place.
 */

export type AnalyticsEvent =
  | { name: "page_view"; path: string }
  | { name: "newsletter_subscribe"; email?: string }
  | { name: "affiliate_click"; provider: string; category: string }
  | { name: "checklist_complete"; slug: string; itemsChecked: number }
  | { name: "ics_download"; calendar: string };

/**
 * Track an event. Currently a no-op — replace with your analytics provider.
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (import.meta.env.DEV) {
    console.debug("[analytics]", event.name, event);
  }
  // Replace with real tracking:
  // gtag('event', event.name, event);
  // plausible(event.name, { props: event });
}

/**
 * Check if the user has consented to analytics tracking.
 */
export function hasAnalyticsConsent(): boolean {
  return localStorage.getItem("cookie-consent") === "accepted";
}
