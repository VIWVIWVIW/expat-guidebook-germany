import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function AffiliateDisclosurePage() {
  return (
    <Layout showNewsletter={false}>
      <PageHeader title="Affiliate Disclosure" breadcrumbs={[{ label: "Affiliate Disclosure" }]} />
      <div className="container py-12 max-w-2xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>
            my-basics.de participates in affiliate programs. When you click on a link and sign up for a product or service, we may earn a commission at no extra cost to you.
          </p>
          <p>
            Our recommendations are based on genuine research and our own experience as expats in Germany. We only recommend products and services that we believe will be helpful to you.
          </p>
          <h2 className="font-display text-lg text-foreground">Our Partners</h2>
          <p>[Placeholder: List of affiliate partners such as CHECK24, financeAds, Booking.com, etc.]</p>
          <h2 className="font-display text-lg text-foreground">How It Works</h2>
          <p>
            When you use our comparison tools or click "Compare now" buttons, you may be directed to our partner's website. If you sign up or purchase through that link, we receive a small commission. This helps us keep my-basics.de free and ad-free.
          </p>
          <p>
            Affiliate links do not affect the price you pay. The product or service costs the same whether you use our link or go directly to the provider.
          </p>
        </div>
      </div>
    </Layout>
  );
}
