import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBlog from "@/assets/hero-blog.jpg";

const articles: Record<string, { title: string; date: string; content: string; relatedLinks: { label: string; href: string }[] }> = {
  "best-bank-accounts-2025": {
    title: "Best Bank Accounts for Expats 2025",
    date: "2025-03-01",
    content: "[Placeholder: Full article about the best bank accounts for expats in Germany in 2025. This article will compare N26, Wise, Revolut, Commerzbank, ING, and other banks. It will cover fees, English support, Schufa requirements, and features like Apple Pay and Google Pay support.]",
    relatedLinks: [
      { label: "Compare Bank Accounts", href: "/compare/bank-accounts" },
      { label: "How to Open a Bank Account", href: "/guides/how-to-open-bank-account" },
      { label: "Bank Account FAQ", href: "/faq/bank-account" },
    ],
  },
  "save-500-first-year": {
    title: "How to Save €500 in Your First Year",
    date: "2025-02-15",
    content: "[Placeholder: Full article with practical tips on saving money as a new expat in Germany. Topics include switching electricity providers, using comparison tools, tax deductions for moving costs, free language courses, and leveraging the Deutschlandticket.]",
    relatedLinks: [
      { label: "Compare Electricity", href: "/compare/electricity-gas" },
      { label: "First 30 Days Checklist", href: "/checklists/first-30-days" },
      { label: "Annual Finance Checklist", href: "/checklists/annual-finance" },
    ],
  },
  "gkv-vs-pkv": {
    title: "GKV vs PKV: What Expats Need to Know",
    date: "2025-02-01",
    content: "[Placeholder: Comprehensive guide comparing public (GKV) and private (PKV) health insurance. Covers eligibility, costs, coverage differences, switching rules, and recommendations based on income and employment type.]",
    relatedLinks: [
      { label: "Compare Health Insurance", href: "/compare/health-insurance" },
      { label: "Health Insurance Guide", href: "/guides/how-to-choose-health-insurance" },
      { label: "Health Insurance FAQ", href: "/faq/health-insurance" },
    ],
  },
  "tax-return-guide": {
    title: "Filing Your First German Tax Return",
    date: "2025-01-20",
    content: "[Placeholder: Step-by-step guide to using ELSTER for your first German tax return. Covers registration, required documents, common deductions for expats, and tips for maximizing your refund.]",
    relatedLinks: [
      { label: "Tax ID Guide", href: "/guides/how-to-get-tax-id" },
      { label: "Tax ID FAQ", href: "/faq/tax-id" },
      { label: "Annual Calendar", href: "/calendar" },
    ],
  },
  "schufa-explained": {
    title: "Schufa Explained: What It Is and Why It Matters",
    date: "2025-01-10",
    content: "[Placeholder: Detailed explanation of the Schufa credit scoring system. How it works, how to check your score for free, how to improve it, and how it affects renting, banking, and contracts.]",
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
    return <Layout><PageHeader title="Article Not Found" /></Layout>;
  }

  return (
    <Layout>
      <PageHeader
        title={article.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: article.title }]}
        heroImage={heroBlog}
      />
      <article className="container py-12 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-6">
          {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{article.content}</p>
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
