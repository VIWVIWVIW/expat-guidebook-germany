/**
 * Route-level SEO metadata registry.
 * Each route gets its own title, description, and optional canonical.
 * Dynamic routes use functions that receive params.
 */
import { siteConfig } from "./site";

export interface RouteMeta {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
}

/** Format a page title with site name suffix */
export function formatTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.name}`;
}

/** Static route metadata */
export const staticRoutes: Record<string, RouteMeta> = {
  "/": {
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  "/glossary": {
    title: "German Finance Glossary for Expats",
    description:
      "Key German terms every expat should know — from Anmeldung to Zählernummer. Definitions, translations, and links to guides.",
  },
  "/calendar": {
    title: "Annual Expat Calendar — Tax Deadlines & Holidays",
    description:
      "Key dates, tax deadlines, and public holidays in Germany. Download ICS files for your calendar.",
  },
  "/vacation": {
    title: "Vacation in Germany — Hidden Gems & Travel Inspiration",
    description:
      "Discover Germany beyond the cities — from Alpine lakes to Baltic beaches. Regional guides with insider tips.",
  },
  "/blog": {
    title: "Expat Finance Blog",
    description:
      "Tips, guides, and insights for expats navigating finances and life in Germany.",
  },
  "/newsletter": {
    title: "Newsletter — Weekly Expat Finance Tips",
    description:
      "Get the latest expat finance tips, guides, and deals delivered to your inbox. Free, no spam.",
  },
  "/impressum": {
    title: "Impressum",
    description: "Legal notice and contact information for my-basics.de.",
    noIndex: true,
  },
  "/privacy": {
    title: "Datenschutzerklärung (Privacy Policy)",
    description: "Privacy policy and data protection information for my-basics.de.",
    noIndex: true,
  },
  "/affiliate-disclosure": {
    title: "Affiliate Disclosure",
    description: "How my-basics.de earns revenue through affiliate partnerships.",
    noIndex: true,
  },
};

/** Compare category metadata */
export const compareRouteMeta: Record<string, RouteMeta> = {
  "bank-accounts": {
    title: "Compare Bank Accounts for Expats in Germany",
    description:
      "Find the best German bank account with English support. Compare N26, Wise, Revolut, Commerzbank & more.",
  },
  "health-insurance": {
    title: "Compare Health Insurance — GKV vs PKV",
    description:
      "GKV vs PKV explained. Compare public and private health insurance providers in Germany.",
  },
  "electricity-gas": {
    title: "Compare Electricity & Gas Providers",
    description:
      "Switch your energy provider and save hundreds of euros per year. Green energy options included.",
  },
  internet: {
    title: "Compare Internet Providers in Germany",
    description:
      "Find the fastest and cheapest broadband internet for your home in Germany.",
  },
  investment: {
    title: "Compare Investment Platforms & Brokers",
    description:
      "Start investing in Germany — compare Trade Republic, Scalable Capital, ING and more.",
  },
};

/** Guide metadata */
export const guideRouteMeta: Record<string, RouteMeta> = {
  "how-to-open-bank-account": {
    title: "How to Open a Bank Account in Germany",
    description:
      "Step-by-step guide to opening a German bank account as an expat. Requirements, documents, and best banks.",
  },
  "how-to-register-address": {
    title: "How to Register Your Address (Anmeldung)",
    description:
      "Guide to Anmeldung — registering your address at the Bürgeramt within 14 days of moving to Germany.",
  },
  "how-to-get-tax-id": {
    title: "How to Get Your Tax ID (Steuer-ID)",
    description:
      "Everything about the German tax identification number for expats — how to get it and what you need it for.",
  },
  "how-to-choose-health-insurance": {
    title: "How to Choose Health Insurance in Germany",
    description:
      "GKV vs PKV explained. How to pick the right health insurance as an expat in Germany.",
  },
  "how-to-switch-electricity": {
    title: "How to Switch Your Electricity Provider",
    description:
      "Save money by switching from the default energy provider. Step-by-step for expats in Germany.",
  },
  "how-to-set-up-internet": {
    title: "How to Set Up Internet at Home in Germany",
    description:
      "Guide to getting broadband internet in your German apartment. Compare providers and avoid pitfalls.",
  },
};

/** City metadata */
export function getCityMeta(cityName: string): RouteMeta {
  return {
    title: `${cityName} Expat Guide — Cost of Living, Banking & Tips`,
    description: `Local expat tips for ${cityName}: cost of living, banking, services, and things to know before you move.`,
  };
}

/** FAQ metadata */
export const faqRouteMeta: Record<string, RouteMeta> = {
  "bank-account": {
    title: "Bank Account FAQ for Expats",
    description: "Common questions about opening and using a bank account in Germany as an expat.",
  },
  "health-insurance": {
    title: "Health Insurance FAQ — GKV & PKV",
    description: "Common questions about public and private health insurance in Germany.",
  },
  registration: {
    title: "Address Registration (Anmeldung) FAQ",
    description: "Common questions about the Anmeldung process and registering your address in Germany.",
  },
  "tax-id": {
    title: "Tax ID (Steuer-ID) FAQ",
    description: "Common questions about the German tax identification number and Steuernummer.",
  },
  electricity: {
    title: "Electricity & Gas FAQ",
    description: "Common questions about electricity and gas providers in Germany.",
  },
  internet: {
    title: "Internet & Broadband FAQ",
    description: "Common questions about internet providers, contracts, and speeds in Germany.",
  },
};
