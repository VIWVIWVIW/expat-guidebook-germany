import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { IframePlaceholder } from "@/components/IframePlaceholder";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";
import { compareRouteMeta } from "@/config/routes";
import { getAffiliateLink } from "@/services/affiliate";
import { trackEvent } from "@/services/analytics";
import heroCompare from "@/assets/hero-compare.jpg";

const compareData: Record<string, { title: string; description: string; intro: string; columns: { key: string; label: string }[]; rows: Record<string, string>[]; tablePath: string; guidePath: string; faqPath: string }> = {
  "bank-accounts": {
    title: "Compare Bank Accounts",
    description: "Find the best bank account for expats in Germany. Compare fees, English support, and features.",
    intro: "Opening a bank account is one of the first things you'll need to do in Germany. Without one, you can't receive your salary, pay rent, or set up utilities. The good news: several banks now offer fully English apps and don't require a Schufa check — perfect for newcomers. Below we compare the most popular options for expats based on cost, language support, and accessibility.",
    tablePath: "/tables/bank-accounts-table",
    guidePath: "/guides/how-to-open-bank-account",
    faqPath: "/faq/bank-account",
    columns: [
      { key: "bank", label: "Bank" },
      { key: "cost", label: "Monthly Cost" },
      { key: "english", label: "English App" },
      { key: "schufa", label: "No Schufa" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { bank: "N26", cost: "€0", english: "Yes", schufa: "No", rating: "4.5" },
      { bank: "Wise", cost: "€0", english: "Yes", schufa: "Yes", rating: "4.7" },
      { bank: "Commerzbank", cost: "€0", english: "Partial", schufa: "No", rating: "3.8" },
      { bank: "ING", cost: "€0", english: "No", schufa: "No", rating: "4.2" },
      { bank: "Revolut", cost: "€0", english: "Yes", schufa: "Yes", rating: "4.4" },
    ],
  },
  "health-insurance": {
    title: "Compare Health Insurance",
    description: "GKV vs PKV — understand your options and find the right health insurance in Germany.",
    intro: "Health insurance is mandatory in Germany — no exceptions. As an expat, you'll choose between public insurance (GKV) and private insurance (PKV). Your income, employment type, and personal situation determine which option is right for you. Below we compare the most popular providers based on cost, coverage, and English support.",
    tablePath: "/tables/health-insurance-table",
    guidePath: "/guides/how-to-choose-health-insurance",
    faqPath: "/faq/health-insurance",
    columns: [
      { key: "provider", label: "Provider" },
      { key: "type", label: "Type" },
      { key: "cost", label: "Monthly Cost" },
      { key: "english", label: "English Support" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { provider: "TK", type: "GKV", cost: "~14.6%", english: "Yes", rating: "4.6" },
      { provider: "AOK", type: "GKV", cost: "~15.5%", english: "Partial", rating: "4.0" },
      { provider: "Ottonova", type: "PKV", cost: "From €300", english: "Yes", rating: "4.3" },
      { provider: "Barmer", type: "GKV", cost: "~15.7%", english: "No", rating: "4.1" },
    ],
  },
  "electricity-gas": {
    title: "Compare Electricity & Gas",
    description: "Switch your energy provider and save hundreds of euros per year.",
    intro: "When you move into an apartment in Germany, you're automatically assigned the local default provider (Grundversorger) — which is almost always the most expensive option. Switching is easy, takes about 10 minutes online, and your new provider handles everything including cancellation. Most expats can save €200–400 per year by switching.",
    tablePath: "/tables/electricity-table",
    guidePath: "/guides/how-to-switch-electricity",
    faqPath: "/faq/electricity",
    columns: [
      { key: "provider", label: "Provider" },
      { key: "cost", label: "Monthly Cost" },
      { key: "green", label: "Green Energy" },
      { key: "english", label: "English Support" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { provider: "Vattenfall", cost: "~€95", green: "Optional", english: "Yes", rating: "3.9" },
      { provider: "E.ON", cost: "~€90", green: "Yes", english: "Partial", rating: "4.0" },
      { provider: "Naturstrom", cost: "~€100", green: "Yes", english: "No", rating: "4.5" },
    ],
  },
  internet: {
    title: "Compare Internet Providers",
    description: "Find the fastest and cheapest internet for your home in Germany.",
    intro: "Internet in Germany can be surprisingly slow and expensive if you don't compare. Availability varies by address — fiber isn't everywhere yet. Contracts are typically 24 months, but shorter options exist at a premium. Always check what's available at your specific address before committing.",
    tablePath: "/tables/internet-table",
    guidePath: "/guides/how-to-set-up-internet",
    faqPath: "/faq/internet",
    columns: [
      { key: "provider", label: "Provider" },
      { key: "speed", label: "Speed" },
      { key: "cost", label: "Monthly Cost" },
      { key: "english", label: "English Support" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { provider: "Telekom", speed: "Up to 250 Mbit/s", cost: "€39.95", english: "Partial", rating: "4.0" },
      { provider: "Vodafone", speed: "Up to 1000 Mbit/s", cost: "€39.99", english: "Yes", rating: "3.5" },
      { provider: "O2", speed: "Up to 100 Mbit/s", cost: "€29.99", english: "Partial", rating: "3.8" },
    ],
  },
  investment: {
    title: "Compare Investment Platforms",
    description: "Start investing in Germany — compare brokers and robo-advisors.",
    intro: "Germany has excellent low-cost investment platforms. Whether you want to invest in ETFs, stocks, or use a robo-advisor, there are several English-friendly options. Most expats start with a simple ETF savings plan — automated monthly investing into diversified index funds.",
    tablePath: "/tables/investment-table",
    guidePath: "/guides/how-to-open-bank-account",
    faqPath: "/faq/bank-account",
    columns: [
      { key: "platform", label: "Platform" },
      { key: "type", label: "Type" },
      { key: "cost", label: "Fees" },
      { key: "english", label: "English App" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { platform: "Trade Republic", type: "Broker", cost: "€1 per trade", english: "Yes", rating: "4.5" },
      { platform: "Scalable Capital", type: "Broker/Robo", cost: "€0.99/trade", english: "Yes", rating: "4.3" },
      { platform: "ING", type: "Broker", cost: "€4.90+", english: "No", rating: "4.0" },
    ],
  },
};

export default function ComparePage() {
  const { category } = useParams<{ category: string }>();
  const data = compareData[category || "bank-accounts"];
  const meta = compareRouteMeta[category || "bank-accounts"];

  if (!data) {
    return (
      <Layout>
        <SEOHead title="Compare" description="Category not found." noIndex />
        <PageHeader title="Compare" description="Category not found." />
      </Layout>
    );
  }

  const affiliate = getAffiliateLink(category || "bank-accounts");

  const handleAffiliateClick = () => {
    if (affiliate) {
      trackEvent({ name: "affiliate_click", provider: affiliate.provider, category: category || "" });
    }
  };

  return (
    <Layout>
      <SEOHead
        title={meta?.title || data.title}
        description={meta?.description || data.description}
      />
      <PageHeader
        title={data.title}
        description={data.description}
        breadcrumbs={[{ label: "Compare", href: "/compare/bank-accounts" }, { label: data.title }]}
        heroImage={heroCompare}
      />
      <div className="container py-12 space-y-10">
        <div className="prose max-w-none">
          <p className="text-muted-foreground leading-relaxed">{data.intro}</p>
        </div>

        <IframePlaceholder
          title="Comparison tool will be embedded here"
          description="Partner comparison widget — iframe integration point."
        />

        <div>
          <h2 className="font-display text-xl mb-4">Quick Comparison</h2>
          <ComparisonTable columns={data.columns} rows={data.rows} />
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to={data.tablePath}>
              <Button variant="outline">View Full Table →</Button>
            </Link>
            <Link to={data.guidePath}>
              <Button variant="outline">Step-by-Step Guide →</Button>
            </Link>
            <Link to={data.faqPath}>
              <Button variant="outline">FAQ →</Button>
            </Link>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-6 text-center">
          <h3 className="font-display text-lg mb-2">Ready to switch?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our comparison tool above or click below to get started.
          </p>
          {affiliate && (
            <a href={affiliate.url} target="_blank" rel="noopener noreferrer nofollow" onClick={handleAffiliateClick}>
              <Button>{affiliate.label} →</Button>
            </a>
          )}
          <p className="text-xs text-muted-foreground mt-3">
            <Link to="/affiliate-disclosure" className="underline hover:text-primary">Affiliate link</Link> — we may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </Layout>
  );
}
