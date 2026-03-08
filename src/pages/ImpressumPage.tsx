import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { staticRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export default function ImpressumPage() {
  const meta = staticRoutes["/impressum"];

  return (
    <Layout showNewsletter={false}>
      <SEOHead title={meta.title} description={meta.description} noIndex />
      <PageHeader title="Impressum" breadcrumbs={[{ label: "Impressum" }]} />
      <div className="container py-12 max-w-2xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="font-display text-lg text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>[Your full name or company name]<br />[Street address]<br />[City, ZIP code]<br />Germany</p>
          <h2 className="font-display text-lg text-foreground">Kontakt</h2>
          <p>Email: {siteConfig.email}</p>
          <h2 className="font-display text-lg text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>[Name and address of responsible person]</p>
          <h2 className="font-display text-lg text-foreground">Haftungsausschluss</h2>
          <p>The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages under general law. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
        </div>
      </div>
    </Layout>
  );
}
