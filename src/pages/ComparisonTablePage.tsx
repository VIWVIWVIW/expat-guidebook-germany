import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { ComparisonTable } from "@/components/ComparisonTable";

const tables: Record<string, { title: string; columns: { key: string; label: string }[]; rows: Record<string, string>[] }> = {
  "bank-accounts-table": {
    title: "Bank Accounts Comparison Table",
    columns: [
      { key: "bank", label: "Bank" },
      { key: "cost", label: "Monthly Cost" },
      { key: "english", label: "English App" },
      { key: "schufa", label: "No Schufa" },
      { key: "noAddress", label: "No Address Needed" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { bank: "N26", cost: "€0", english: "Yes", schufa: "No", noAddress: "Yes", rating: "4.5" },
      { bank: "Wise", cost: "€0", english: "Yes", schufa: "Yes", noAddress: "Yes", rating: "4.7" },
      { bank: "Revolut", cost: "€0", english: "Yes", schufa: "Yes", noAddress: "Yes", rating: "4.4" },
      { bank: "Commerzbank", cost: "€0", english: "Partial", schufa: "No", noAddress: "No", rating: "3.8" },
      { bank: "ING", cost: "€0", english: "No", schufa: "No", noAddress: "No", rating: "4.2" },
    ],
  },
  "health-insurance-table": {
    title: "Health Insurance Comparison Table",
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
  "electricity-table": {
    title: "Electricity Comparison Table",
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
  "internet-table": {
    title: "Internet Comparison Table",
    columns: [
      { key: "provider", label: "Provider" },
      { key: "speed", label: "Speed" },
      { key: "cost", label: "Monthly Cost" },
      { key: "contract", label: "Contract" },
      { key: "english", label: "English Support" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { provider: "Telekom", speed: "Up to 250 Mbit/s", cost: "€39.95", contract: "24 months", english: "Partial", rating: "4.0" },
      { provider: "Vodafone", speed: "Up to 1000 Mbit/s", cost: "€39.99", contract: "24 months", english: "Yes", rating: "3.5" },
      { provider: "O2", speed: "Up to 100 Mbit/s", cost: "€29.99", contract: "24 months", english: "Partial", rating: "3.8" },
      { provider: "1&1", speed: "Up to 250 Mbit/s", cost: "€34.99", contract: "24 months", english: "No", rating: "3.6" },
    ],
  },
  "investment-table": {
    title: "Investment Platform Comparison Table",
    columns: [
      { key: "platform", label: "Platform" },
      { key: "type", label: "Type" },
      { key: "cost", label: "Fees" },
      { key: "etf", label: "ETF Savings Plans" },
      { key: "english", label: "English App" },
      { key: "rating", label: "Rating" },
    ],
    rows: [
      { platform: "Trade Republic", type: "Broker", cost: "€1 per trade", etf: "Yes (free)", english: "Yes", rating: "4.5" },
      { platform: "Scalable Capital", type: "Broker/Robo", cost: "€0.99/trade or flat", etf: "Yes (free)", english: "Yes", rating: "4.3" },
      { platform: "ING", type: "Broker", cost: "€4.90+", etf: "Yes", english: "No", rating: "4.0" },
      { platform: "Consorsbank", type: "Broker", cost: "€3.95+", etf: "Yes", english: "Partial", rating: "3.9" },
    ],
  },
};

export default function ComparisonTablePage() {
  const { table } = useParams<{ table: string }>();
  const data = tables[table || ""];

  if (!data) {
    return (
      <Layout>
        <SEOHead title="Table Not Found" description="The requested comparison table was not found." noIndex />
        <PageHeader title="Table Not Found" />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title={data.title}
        description={`Detailed ${data.title.toLowerCase()} for expats in Germany. Sort and compare providers.`}
      />
      <PageHeader
        title={data.title}
        breadcrumbs={[{ label: "Compare" }, { label: data.title }]}
      />
      <div className="container py-12">
        <ComparisonTable columns={data.columns} rows={data.rows} />
        <p className="text-xs text-muted-foreground mt-4">
          * Data is for illustration purposes. Prices and features may vary. Always verify with the provider directly.
        </p>
      </div>
    </Layout>
  );
}
