import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { staticRoutes } from "@/config/routes";

export default function PrivacyPage() {
  const meta = staticRoutes["/privacy"];

  return (
    <Layout showNewsletter={false}>
      <SEOHead title={meta.title} description={meta.description} noIndex />
      <PageHeader title="Datenschutzerklärung" description="Privacy Policy" breadcrumbs={[{ label: "Privacy" }]} />
      <div className="container py-12 max-w-2xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="font-display text-lg text-foreground">1. Data Protection Overview</h2>
          <p>This privacy policy explains how we collect, use, and protect your personal data when you visit my-basics.de. We comply with the EU General Data Protection Regulation (GDPR) and the German Bundesdatenschutzgesetz (BDSG).</p>
          <h2 className="font-display text-lg text-foreground">2. Data Collection on This Website</h2>
          <p>We collect data through server log files (IP address, browser type, access time) and optional cookies for analytics and affiliate tracking. No personal data is collected without your consent.</p>
          <h2 className="font-display text-lg text-foreground">3. Newsletter</h2>
          <p>When you subscribe to our newsletter, we store your email address for the purpose of sending you updates. We use a double opt-in process. You can unsubscribe at any time using the link in every email.</p>
          <h2 className="font-display text-lg text-foreground">4. Affiliate Links & Third-Party Services</h2>
          <p>This website contains affiliate links to partner services. When you click these links, the partner may set cookies to track the referral. We disclose all affiliate relationships on our Affiliate Disclosure page.</p>
          <h2 className="font-display text-lg text-foreground">5. Your Rights</h2>
          <p>You have the right to access, rectify, delete, restrict processing, and port your personal data. You also have the right to object to processing and to lodge a complaint with a supervisory authority. Contact us at hello@my-basics.de to exercise these rights.</p>
        </div>
      </div>
    </Layout>
  );
}
