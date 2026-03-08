import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { IframePlaceholder } from "@/components/IframePlaceholder";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";

const compareData: Record<string, { title: string; description: string; columns: { key: string; label: string }[]; rows: Record<string, string>[]; tablePath: string }> = {
  "bank-accounts": {
    title: "Compare Bank Accounts",
    description: "Find the best bank account for expats in Germany. Compare fees, English support, and features.",
    tablePath: "/tables/bank-accounts-table",
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
    tablePath: "/tables/health-insurance-table",
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
    tablePath: "/tables/electricity-table",
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
    tablePath: "/tables/internet-table",
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
    tablePath: "/tables/investment-table",
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

  if (!data) {
    return (
      <Layout>
        <PageHeader title="Compare" description="Category not found." />
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={data.title}
        description={data.description}
        breadcrumbs={[{ label: "Compare", href: "/compare/bank-accounts" }, { label: data.title }]}
      />
      <div className="container py-12 space-y-10">
        <div className="prose max-w-none">
          <p className="text-muted-foreground">
            [Placeholder: Detailed introduction about {data.title.toLowerCase()} for expats in Germany. This section will cover key considerations, what to look for, and common pitfalls.]
          </p>
        </div>

        <IframePlaceholder
          title="Comparison tool will be embedded here"
          description="CHECK24 / financeAds widget — iframe integration point. Add partner ID parameters to the embed URL."
        />

        <div>
          <h2 className="font-display text-xl mb-4">Quick Comparison</h2>
          <ComparisonTable columns={data.columns} rows={data.rows} />
          <div className="mt-4">
            <Link to={data.tablePath}>
              <Button variant="outline">View Full Comparison Table →</Button>
            </Link>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-6 text-center">
          <h3 className="font-display text-lg mb-2">Ready to switch?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our comparison tool above or click below to get started.
          </p>
          <Button>Compare Now →</Button>
          <p className="text-xs text-muted-foreground mt-3">
            Affiliate link — we may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </Layout>
  );
}
