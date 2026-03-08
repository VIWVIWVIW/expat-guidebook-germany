import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { trackEvent } from "@/services/analytics";
import heroChecklist from "@/assets/hero-checklist.jpg";

const checklists: Record<string, { title: string; description: string; items: string[] }> = {
  "first-30-days": {
    title: "First 30 Days in Germany",
    description: "Everything you need to do in your first month as an expat.",
    items: [
      "Register your address (Anmeldung) at the Bürgeramt",
      "Open a bank account",
      "Get health insurance",
      "Receive your Tax ID (Steuer-ID)",
      "Set up a phone/SIM card",
      "Register for electricity/gas or switch provider",
      "Set up internet at home",
      "Get liability insurance (Haftpflichtversicherung)",
      "Understand your payslip and tax class",
      "Learn about the GEZ (TV/radio fee)",
      "Explore your neighbourhood and local transport",
      "Get a library card (free WiFi + German courses!)",
    ],
  },
  "complete-finance": {
    title: "Complete Finance Checklist",
    description: "All the financial tasks you should handle as an expat in Germany.",
    items: [
      "Open a current account (Girokonto)",
      "Set up a savings account or investment",
      "Get public or private health insurance",
      "Get personal liability insurance",
      "Consider household contents insurance",
      "Understand your tax class and deductions",
      "Set up a pension plan or Riester/Rürup",
      "File your first tax return with ELSTER",
      "Understand Schufa and how to check your score",
      "Set up automatic payments (Lastschrift) for rent and bills",
    ],
  },
  "moving-before-you-arrive": {
    title: "Before You Arrive Checklist",
    description: "Prepare for your move to Germany before you even arrive.",
    items: [
      "Apply for your visa (if needed)",
      "Get an apostille for important documents",
      "Research health insurance options",
      "Find temporary accommodation",
      "Set up an international bank account (Wise/N26)",
      "Download offline maps for your city",
      "Join expat communities on Facebook/Reddit",
      "Learn basic German phrases",
      "Pack important documents in your carry-on",
      "Notify your home country bank about relocation",
    ],
  },
  "annual-finance": {
    title: "Annual Finance Checklist",
    description: "Yearly financial tasks every expat should complete.",
    items: [
      "File your tax return (deadline: July 31 or Sep 30 with advisor)",
      "Review and switch electricity/gas provider",
      "Review and switch internet provider",
      "Check your health insurance plan",
      "Review your pension contributions",
      "Check your Schufa report (free once per year)",
      "Review all insurance policies",
      "Update your address if you moved",
      "Check for any government benefits you qualify for",
    ],
  },
};

export default function ChecklistPage() {
  const { slug } = useParams<{ slug: string }>();
  const checklist = checklists[slug || "first-30-days"];
  const [checked, setChecked] = useState<Set<number>>(new Set());

  if (!checklist) {
    return (
      <Layout>
        <SEOHead title="Checklist Not Found" description="The requested checklist was not found." noIndex />
        <PageHeader title="Checklist Not Found" />
      </Layout>
    );
  }

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      if (next.size === checklist.items.length) {
        trackEvent({ name: "checklist_complete", slug: slug || "", itemsChecked: next.size });
      }
      return next;
    });
  };

  return (
    <Layout>
      <SEOHead
        title={`${checklist.title} Checklist for Expats`}
        description={checklist.description}
      />
      <PageHeader
        title={checklist.title}
        description={checklist.description}
        breadcrumbs={[{ label: "Checklists" }, { label: checklist.title }]}
        heroImage={heroChecklist}
      />
      <div className="container py-12 max-w-2xl">
        <nav className="flex flex-wrap gap-3 mb-8" aria-label="Checklist selection">
          {Object.entries(checklists).map(([key, cl]) => (
            <Link key={key} to={`/checklists/${key}`}>
              <Button variant={key === slug ? "default" : "outline"} size="sm">
                {cl.title.replace(" Checklist", "")}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="space-y-3 mb-8">
          {checklist.items.map((item, i) => (
            <label
              key={i}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                checked.has(i) ? "bg-primary/5 border-primary/20" : "bg-card hover:bg-secondary"
              }`}
            >
              <input
                type="checkbox"
                checked={checked.has(i)}
                onChange={() => toggle(i)}
                className="mt-0.5 h-4 w-4 rounded border-input text-primary accent-primary"
              />
              <span className={`text-sm ${checked.has(i) ? "line-through text-muted-foreground" : ""}`}>
                {item}
              </span>
            </label>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {checked.size} of {checklist.items.length} completed
        </p>

        <Button variant="outline" disabled>
          <Download className="h-4 w-4 mr-2" />
          Download PDF (Coming Soon)
        </Button>
      </div>
    </Layout>
  );
}
