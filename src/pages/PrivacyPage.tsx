import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function PrivacyPage() {
  return (
    <Layout showNewsletter={false}>
      <PageHeader title="Datenschutzerklärung" description="Privacy Policy" breadcrumbs={[{ label: "Privacy" }]} />
      <div className="container py-12 max-w-2xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="font-display text-lg text-foreground">1. Data Protection Overview</h2>
          <p>[Placeholder: General information about data processing on this website, GDPR compliance statement, and data controller details.]</p>
          <h2 className="font-display text-lg text-foreground">2. Data Collection on This Website</h2>
          <p>[Placeholder: Information about cookies, server log files, and contact forms.]</p>
          <h2 className="font-display text-lg text-foreground">3. Newsletter</h2>
          <p>[Placeholder: Details about newsletter subscription, double opt-in process, data storage, and right to unsubscribe.]</p>
          <h2 className="font-display text-lg text-foreground">4. Affiliate Links & Third-Party Services</h2>
          <p>[Placeholder: Disclosure about affiliate tracking, CHECK24 and financeAds integration, and third-party cookies.]</p>
          <h2 className="font-display text-lg text-foreground">5. Your Rights</h2>
          <p>[Placeholder: Right to access, rectification, deletion, data portability, and how to exercise these rights.]</p>
        </div>
      </div>
    </Layout>
  );
}
