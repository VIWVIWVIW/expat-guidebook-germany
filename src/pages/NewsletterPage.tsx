import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { NewsletterForm } from "@/components/NewsletterForm";
import { staticRoutes } from "@/config/routes";
import heroNewsletter from "@/assets/hero-newsletter.jpg";

export default function NewsletterPage() {
  const meta = staticRoutes["/newsletter"];

  return (
    <Layout showNewsletter={false}>
      <SEOHead title={meta.title} description={meta.description} />
      <PageHeader
        title="Newsletter"
        description="Get the latest expat finance tips, guides, and deals delivered to your inbox."
        breadcrumbs={[{ label: "Newsletter" }]}
        heroImage={heroNewsletter}
      />
      <div className="container py-12 max-w-lg">
        <div className="bg-card border rounded-lg p-8 text-center">
          <h2 className="font-display text-xl mb-2">Subscribe for free</h2>
          <p className="text-sm text-muted-foreground mb-6">
            No spam. One email per week. Unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </Layout>
  );
}
