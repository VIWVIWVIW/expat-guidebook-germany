import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { staticRoutes } from "@/config/routes";

export default function AffiliateDisclosurePage() {
  const meta = staticRoutes["/affiliate-disclosure"];

  return (
    <Layout showNewsletter={false}>
      <SEOHead title={meta.title} description={meta.description} noIndex />
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
          <p>We work with comparison and affiliate platforms to connect you with the best deals. Partner integrations are clearly marked throughout the site.</p>
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
