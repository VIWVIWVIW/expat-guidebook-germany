import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function ImpressumPage() {
  return (
    <Layout showNewsletter={false}>
      <PageHeader title="Impressum" breadcrumbs={[{ label: "Impressum" }]} />
      <div className="container py-12 max-w-2xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="font-display text-lg text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>[Placeholder: Your full name or company name]<br />[Placeholder: Street address]<br />[Placeholder: City, ZIP code]<br />Germany</p>
          <h2 className="font-display text-lg text-foreground">Kontakt</h2>
          <p>Email: [placeholder@my-basics.de]<br />Phone: [Placeholder]</p>
          <h2 className="font-display text-lg text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>[Placeholder: Name and address of responsible person]</p>
          <h2 className="font-display text-lg text-foreground">Haftungsausschluss</h2>
          <p>[Placeholder: Standard liability disclaimer text for German websites]</p>
        </div>
      </div>
    </Layout>
  );
}
