/**
 * Central site configuration.
 * All branding, URLs, and metadata in one place for easy migration.
 */
export const siteConfig = {
  name: "my-basics.de",
  tagline: "Your finance basics in Germany — simplified",
  description:
    "Banking, insurance, electricity, taxes — everything expats need to know about life in Germany, in one place.",
  url: "https://my-basics.de",
  locale: "en",
  author: "my-basics.de",
  social: {
    // Add social handles when ready
  },
  ogImage: "/og-image.jpg", // Replace with real OG image
  themeColor: "#1a9e8f",
  /** Contact email for legal pages */
  email: "hello@my-basics.de",
} as const;

/**
 * Navigation structure — single source of truth for Navbar, Footer, and sitemap.
 */
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  children: NavItem[];
}

export const primaryNav: (NavGroup | NavItem)[] = [
  {
    label: "Compare",
    children: [
      { label: "Bank Accounts", href: "/compare/bank-accounts", description: "Find the best bank with English support" },
      { label: "Health Insurance", href: "/compare/health-insurance", description: "GKV vs PKV — compare your options" },
      { label: "Electricity & Gas", href: "/compare/electricity-gas", description: "Switch & save on energy" },
      { label: "Internet", href: "/compare/internet", description: "Compare broadband providers" },
      { label: "Investment", href: "/compare/investment", description: "Compare brokers & robo-advisors" },
    ],
  },
  {
    label: "Guides",
    children: [
      { label: "Open a Bank Account", href: "/guides/how-to-open-bank-account" },
      { label: "Register Your Address", href: "/guides/how-to-register-address" },
      { label: "Get Your Tax ID", href: "/guides/how-to-get-tax-id" },
      { label: "Choose Health Insurance", href: "/guides/how-to-choose-health-insurance" },
      { label: "Switch Electricity", href: "/guides/how-to-switch-electricity" },
      { label: "Set Up Internet", href: "/guides/how-to-set-up-internet" },
    ],
  },
  { label: "Checklists", href: "/checklists/first-30-days" },
  {
    label: "More",
    children: [
      { label: "FAQ", href: "/faq/bank-account" },
      { label: "Glossary", href: "/glossary" },
      { label: "City Guides", href: "/cities/berlin" },
      { label: "Calendar", href: "/calendar" },
      { label: "Vacation", href: "/vacation" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export const footerNav = [
  {
    title: "Compare",
    links: [
      { label: "Bank Accounts", href: "/compare/bank-accounts" },
      { label: "Health Insurance", href: "/compare/health-insurance" },
      { label: "Electricity & Gas", href: "/compare/electricity-gas" },
      { label: "Internet", href: "/compare/internet" },
      { label: "Investment", href: "/compare/investment" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Open Bank Account", href: "/guides/how-to-open-bank-account" },
      { label: "Register Address", href: "/guides/how-to-register-address" },
      { label: "Get Tax ID", href: "/guides/how-to-get-tax-id" },
      { label: "Health Insurance", href: "/guides/how-to-choose-health-insurance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Checklists", href: "/checklists/first-30-days" },
      { label: "FAQ", href: "/faq/bank-account" },
      { label: "Glossary", href: "/glossary" },
      { label: "Blog", href: "/blog" },
      { label: "Calendar", href: "/calendar" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "City Guides", href: "/cities/berlin" },
      { label: "Vacation", href: "/vacation" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

export const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/privacy" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];
