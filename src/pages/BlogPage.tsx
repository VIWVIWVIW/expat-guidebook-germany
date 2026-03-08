import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import heroBlog from "@/assets/hero-blog.jpg";

const articles = [
  { slug: "best-bank-accounts-2025", title: "Best Bank Accounts for Expats 2025", excerpt: "A comprehensive comparison of the best bank accounts available for foreigners in Germany, including fees, English support, and Schufa requirements.", date: "2025-03-01" },
  { slug: "save-500-first-year", title: "How to Save €500 in Your First Year", excerpt: "Practical tips on switching providers, tax deductions, and free services that can save expats hundreds of euros.", date: "2025-02-15" },
  { slug: "gkv-vs-pkv", title: "GKV vs PKV: What Expats Need to Know", excerpt: "The ultimate guide to choosing between public and private health insurance in Germany.", date: "2025-02-01" },
  { slug: "tax-return-guide", title: "Filing Your First German Tax Return", excerpt: "Step-by-step guide to using ELSTER and maximizing your tax refund as an expat.", date: "2025-01-20" },
  { slug: "schufa-explained", title: "Schufa Explained: What It Is and Why It Matters", excerpt: "Everything you need to know about Germany's credit scoring system.", date: "2025-01-10" },
];

export default function BlogPage() {
  return (
    <Layout>
      <PageHeader
        title="Blog"
        description="Tips, guides, and insights for expats navigating life in Germany."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <div className="container py-12 max-w-3xl">
        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="block bg-card border rounded-lg p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <p className="text-xs text-muted-foreground mb-2">{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              <h2 className="font-display text-lg mb-2 group-hover:text-primary">{article.title}</h2>
              <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              <span className="text-sm text-primary mt-3 inline-block">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
