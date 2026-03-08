import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import heroBlog from "@/assets/hero-blog.jpg";

const articles: Record<string, { title: string; date: string; content: string; relatedLinks: { label: string; href: string }[] }> = {
  "best-bank-accounts-2025": {
    title: "Best Bank Accounts for Expats 2025",
    date: "2025-03-01",
    content: "Opening a bank account is one of the first things you'll do in Germany — and choosing the right one matters. In this guide, we compare the top banks for expats based on monthly cost, English support, Schufa requirements, and mobile app quality.\n\nN26 remains the go-to choice for most expats: zero monthly fees, a polished English app, and fast online setup. However, they do require a Schufa check, which can be a blocker for newcomers.\n\nWise (formerly TransferWise) is ideal if you're still receiving money from abroad. Their multi-currency account lets you hold and convert money at the real exchange rate. No Schufa needed.\n\nRevolut offers similar features to Wise with a strong app and no Schufa requirement, though their German IBAN rollout is still in progress for some features.\n\nFor those who prefer a traditional bank, Commerzbank offers a free current account with partial English support and branch access across Germany.\n\nING rounds out our top picks with a solid online banking experience, though their app is German-only.\n\nBottom line: Start with N26 or Wise for convenience, then consider opening a second account at a traditional bank once you're settled.",
    relatedLinks: [
      { label: "Compare Bank Accounts", href: "/compare/bank-accounts" },
      { label: "How to Open a Bank Account", href: "/guides/how-to-open-bank-account" },
      { label: "Bank Account FAQ", href: "/faq/bank-account" },
    ],
  },
  "save-500-first-year": {
    title: "How to Save €500 in Your First Year",
    date: "2025-02-15",
    content: "Moving to Germany is expensive — but there are easy wins that can save you hundreds of euros in your first year.\n\n1. Switch your electricity provider immediately. The default Grundversorger is always the most expensive option. Switching takes 10 minutes online and can save €200–300/year.\n\n2. Get the Deutschlandticket (€49/month). It covers all local and regional public transport across Germany. Compare this to individual city passes that often cost more.\n\n3. File a tax return. Even if you're not required to, expats often get €900+ back in their first year due to moving costs, double rent deductions, and other allowances.\n\n4. Request your free Schufa report. You're entitled to one free Datenkopie per year. Don't pay for the premium version unless you need it.\n\n5. Use comparison tools for insurance. Don't just accept the first health insurance provider your employer suggests. GKV additional contributions vary by 0.3–1.7% — that's real money over a year.\n\n6. Get a library card. For €10–30/year, you get free WiFi, language courses, streaming services, and more.",
    relatedLinks: [
      { label: "Compare Electricity", href: "/compare/electricity-gas" },
      { label: "First 30 Days Checklist", href: "/checklists/first-30-days" },
      { label: "Annual Finance Checklist", href: "/checklists/annual-finance" },
    ],
  },
  "gkv-vs-pkv": {
    title: "GKV vs PKV: What Expats Need to Know",
    date: "2025-02-01",
    content: "Health insurance in Germany isn't optional — and the choice between public (GKV) and private (PKV) insurance is one of the most important financial decisions you'll make.\n\nGKV (Public Insurance): Contributions are ~14.6% of your gross salary (shared with employer). Coverage is standardized and comprehensive. Family members can be covered for free (Familienversicherung). The downside: longer wait times for specialists.\n\nPKV (Private Insurance): Available to employees earning above €69,300/year and all self-employed workers. Premiums are based on age and health at entry, not income. Better coverage and faster appointments, but premiums increase with age and there's no free family coverage.\n\nOur recommendation for most expats: Start with GKV unless you're clearly in the high-income/self-employed category and plan to stay long-term. Switching from PKV back to GKV is very difficult after age 55.\n\nTop GKV providers: TK (Techniker Krankenkasse) has the best English support and one of the lowest additional contributions. Barmer and AOK are also solid choices.",
    relatedLinks: [
      { label: "Compare Health Insurance", href: "/compare/health-insurance" },
      { label: "Health Insurance Guide", href: "/guides/how-to-choose-health-insurance" },
      { label: "Health Insurance FAQ", href: "/faq/health-insurance" },
    ],
  },
  "tax-return-guide": {
    title: "Filing Your First German Tax Return",
    date: "2025-01-20",
    content: "Filing a German tax return (Steuererklärung) might seem daunting, but for most expats it's straightforward — and the average refund is over €1,000.\n\nDo you need to file? If you're a standard employee with one job, filing is voluntary but highly recommended. It becomes mandatory if you have freelance income, rental income, or received unemployment benefits.\n\nHow to file: ELSTER is the official online portal. Registration takes 2–3 weeks (they send an activation code by post), so start early. Alternatively, tax software like WISO Steuer or Taxfix can simplify the process and are available in English.\n\nCommon deductions for expats: Moving expenses (if you moved for work), double rent during the transition period, commuting costs (Pendlerpauschale: €0.30/km), work equipment (laptop, desk, office supplies), and professional development costs.\n\nDeadline: July 31 for the previous tax year. With a tax advisor: February 28/29 of the following year.\n\nOur tip: Even if you arrived mid-year, file for the full year. The German tax system is progressive, so your partial-year income will be taxed at a lower effective rate.",
    relatedLinks: [
      { label: "Tax ID Guide", href: "/guides/how-to-get-tax-id" },
      { label: "Tax ID FAQ", href: "/faq/tax-id" },
      { label: "Annual Calendar", href: "/calendar" },
    ],
  },
  "schufa-explained": {
    title: "Schufa Explained: What It Is and Why It Matters",
    date: "2025-01-10",
    content: "Schufa is Germany's dominant credit scoring agency — and your Schufa score affects everything from renting an apartment to getting a phone contract.\n\nWhat is Schufa? The Schufa Holding AG collects data on your financial behavior: bank accounts, loans, credit cards, phone contracts, and payment history. From this, they calculate a score from 0–100%, where higher is better.\n\nWhat's a good score? 97%+ is excellent, 90–95% is good, below 90% may cause problems with landlords and banks.\n\nAs a newcomer: You start with no Schufa data, which is different from having bad data. Some landlords and banks may be cautious, but you have the legal right to a basic bank account (Basiskonto) regardless.\n\nHow to check your score: You're entitled to one free Datenkopie per year. Request it at meineschufa.de. Don't pay for the premium version unless you specifically need a Schufa-Bonitätsauskunft for a landlord.\n\nHow to build your score: Open a bank account, get a phone contract, and pay all bills on time. Avoid unnecessary credit inquiries. Having multiple bank accounts is normal and doesn't hurt your score.",
    relatedLinks: [
      { label: "Bank Account FAQ", href: "/faq/bank-account" },
      { label: "Glossary", href: "/glossary" },
      { label: "Compare Bank Accounts", href: "/compare/bank-accounts" },
    ],
  },
};

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles[slug || ""];

  if (!article) {
    return (
      <Layout>
        <SEOHead title="Article Not Found" description="The requested article was not found." noIndex />
        <PageHeader title="Article Not Found" />
      </Layout>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: article.date,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description: article.content.slice(0, 160),
    url: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <Layout>
      <SEOHead
        title={article.title}
        description={article.content.slice(0, 155) + "…"}
        type="article"
        jsonLd={jsonLd}
      />
      <PageHeader
        title={article.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
        heroImage={heroBlog}
      />
      <article className="container py-12 max-w-3xl">
        <time className="text-sm text-muted-foreground mb-6 block" dateTime={article.date}>
          {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
        <div className="prose prose-sm max-w-none">
          {article.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
          ))}
        </div>

        {article.relatedLinks.length > 0 && (
          <div className="mt-10 bg-secondary rounded-lg p-6">
            <h3 className="font-display text-lg mb-3">Related Resources</h3>
            <div className="flex flex-wrap gap-2">
              {article.relatedLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <Button variant="outline" size="sm">{link.label} →</Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link to="/blog"><Button variant="outline">← Back to Blog</Button></Link>
        </div>
      </article>
    </Layout>
  );
}
