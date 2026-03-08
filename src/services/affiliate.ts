/**
 * Affiliate link service.
 *
 * Centralizes all affiliate URLs and tracking parameters.
 * Replace placeholder URLs with real partner links.
 * Never hardcode affiliate URLs in components.
 */

export interface AffiliateLink {
  url: string;
  provider: string;
  label: string;
}

const affiliateLinks: Record<string, AffiliateLink> = {
  "bank-accounts": {
    url: "#affiliate-bank-accounts", // Replace with CHECK24/financeAds URL
    provider: "check24",
    label: "Compare Bank Accounts",
  },
  "health-insurance": {
    url: "#affiliate-health-insurance",
    provider: "check24",
    label: "Compare Health Insurance",
  },
  "electricity-gas": {
    url: "#affiliate-electricity",
    provider: "check24",
    label: "Compare Electricity",
  },
  internet: {
    url: "#affiliate-internet",
    provider: "check24",
    label: "Compare Internet",
  },
  investment: {
    url: "#affiliate-investment",
    provider: "financeads",
    label: "Compare Investment Platforms",
  },
  hotels: {
    url: "#affiliate-hotels",
    provider: "booking",
    label: "Compare Hotels",
  },
};

export function getAffiliateLink(category: string): AffiliateLink | null {
  return affiliateLinks[category] || null;
}

/**
 * Build a partner embed URL with tracking parameters.
 * Replace with real embed logic when ready.
 */
export function getEmbedUrl(category: string, _partnerId?: string): string {
  // Placeholder — return real embed URL when partner IDs are configured
  return `#embed-${category}`;
}
