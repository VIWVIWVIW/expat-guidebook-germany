import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import heroGuides from "@/assets/hero-guides.jpg";

const guides: Record<string, { title: string; meta: string; time: string; docs: string[]; steps: string[]; compareLink: string; compareLabel: string; relatedFaq?: string; relatedTable?: string }> = {
  "how-to-open-bank-account": {
    title: "How to Open a Bank Account in Germany",
    meta: "Step-by-step guide to opening a German bank account as an expat. Requirements, documents, and best banks.",
    time: "1–5 business days",
    docs: ["Passport or ID card", "Proof of address (Meldebescheinigung)", "Visa / residence permit", "Tax ID (Steuer-ID) — sometimes optional"],
    steps: [
      "Choose a bank — compare options for English support, no Schufa requirements, and fees.",
      "Prepare your documents — passport, proof of address, and residence permit.",
      "Apply online or in branch — many banks like N26 and Wise allow 100% online opening.",
      "Complete identity verification — via video call (VideoIdent) or in-person at Deutsche Post (PostIdent).",
      "Receive your card and activate — your debit card arrives within 3–7 days.",
      "Set up online banking — download the app and configure your account.",
    ],
    compareLink: "/compare/bank-accounts",
    compareLabel: "Compare Bank Accounts",
    relatedFaq: "/faq/bank-account",
    relatedTable: "/tables/bank-accounts-table",
  },
  "how-to-register-address": {
    title: "How to Register Your Address in Germany",
    meta: "Guide to Anmeldung — registering your address at the Bürgeramt within 14 days of moving.",
    time: "Same day (appointment needed)",
    docs: ["Passport or ID card", "Rental contract (Mietvertrag)", "Wohnungsgeberbestätigung (landlord confirmation)", "Anmeldung form (available at Bürgeramt)"],
    steps: [
      "Book an appointment at your local Bürgeramt — do this ASAP, slots fill up quickly.",
      "Get the Wohnungsgeberbestätigung from your landlord — they must confirm you live there.",
      "Fill out the Anmeldung form — available online or at the office.",
      "Attend your appointment — bring all documents. The process takes about 15 minutes.",
      "Receive your Meldebescheinigung — this is your proof of registration. Keep it safe!",
      "Your Tax ID (Steuer-ID) will be sent to you by post within 2–4 weeks.",
    ],
    compareLink: "/guides/how-to-get-tax-id",
    compareLabel: "Next: Get Your Tax ID",
    relatedFaq: "/faq/registration",
  },
  "how-to-get-tax-id": {
    title: "How to Get Your Tax ID (Steuer-ID)",
    meta: "Everything about the German tax identification number for expats.",
    time: "2–4 weeks after registration",
    docs: ["Meldebescheinigung (proof of registration)", "Passport"],
    steps: [
      "Register your address — the Steuer-ID is automatically generated after Anmeldung.",
      "Wait for the letter — the Bundeszentralamt für Steuern sends it within 2–4 weeks.",
      "If you need it urgently — contact your local Finanzamt with your Meldebescheinigung.",
      "Share it with your employer — they need it to process your payroll.",
      "Keep it safe — your Steuer-ID stays the same for life in Germany.",
    ],
    compareLink: "/guides/how-to-register-address",
    compareLabel: "First: Register Your Address",
    relatedFaq: "/faq/tax-id",
  },
  "how-to-choose-health-insurance": {
    title: "How to Choose Health Insurance",
    meta: "GKV vs PKV explained. How to pick the right health insurance as an expat in Germany.",
    time: "Varies",
    docs: ["Employment contract or proof of income", "Passport", "Residence permit"],
    steps: [
      "Understand the two systems — GKV (public) is mandatory for most employees; PKV (private) is for freelancers and high earners.",
      "Check if you qualify for PKV — you need to earn above €69,300/year (2024) or be self-employed.",
      "Compare GKV providers — the base rate is the same, but additional contributions vary.",
      "Consider your needs — PKV offers faster appointments and more services, but premiums increase with age.",
      "Sign up through your employer (GKV) or directly with the insurer (PKV).",
      "Get your insurance confirmation — your employer needs this before your first paycheck.",
    ],
    compareLink: "/compare/health-insurance",
    compareLabel: "Compare Health Insurance",
  },
  "how-to-switch-electricity": {
    title: "How to Switch Your Electricity Provider",
    meta: "Save money by switching from the default energy provider. Step-by-step for expats.",
    time: "2–4 weeks",
    docs: ["Current electricity bill or meter number (Zählernummer)", "Bank details for direct debit"],
    steps: [
      "Find your current provider — when you move in, you're automatically assigned the local Grundversorger.",
      "Compare providers online — use comparison tools to find cheaper or green energy options.",
      "Choose a plan — look at the price per kWh, monthly base fee, and contract length.",
      "Sign up with the new provider — they handle the cancellation of your old contract.",
      "Provide your meter number — found on your electricity meter or previous bill.",
      "Confirm the switch — you'll receive confirmation within 1–2 weeks.",
    ],
    compareLink: "/compare/electricity-gas",
    compareLabel: "Compare Electricity Providers",
  },
  "how-to-set-up-internet": {
    title: "How to Set Up Internet at Home",
    meta: "Guide to getting broadband internet in your German apartment.",
    time: "1–4 weeks",
    docs: ["Proof of address", "Bank details", "Previous provider info (if switching)"],
    steps: [
      "Check availability — not all providers cover all areas. Enter your address on provider websites.",
      "Compare offers — look at speed, price, contract duration, and router costs.",
      "Order online or by phone — most providers offer English support or at least English websites.",
      "Schedule the technician visit — needed if a new line has to be set up.",
      "Set up your router — follow the instructions or call the provider hotline.",
      "Test your speed — use speedtest.net to verify you're getting what you're paying for.",
    ],
    compareLink: "/compare/internet",
    compareLabel: "Compare Internet Providers",
  },
};

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides[slug || ""];

  if (!guide) {
    return (
      <Layout>
        <PageHeader title="Guide Not Found" />
      </Layout>
    );
  }

  const allGuides = Object.entries(guides).map(([key, g]) => ({ key, title: g.title.replace("How to ", "") }));

  return (
    <Layout>
      <PageHeader
        title={guide.title}
        description={guide.meta}
        breadcrumbs={[{ label: "Guides" }, { label: guide.title }]}
        heroImage={heroGuides}
      />
      <div className="container py-12 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <h3 className="font-display text-sm mb-3 text-muted-foreground uppercase tracking-wider">All Guides</h3>
            <nav className="space-y-1">
              {allGuides.map((g) => (
                <Link
                  key={g.key}
                  to={`/guides/${g.key}`}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${g.key === slug ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                >
                  {g.title}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-secondary rounded-lg px-4 py-2">
                <span className="text-xs text-muted-foreground">Usually takes</span>
                <p className="font-medium text-sm">{guide.time}</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-display text-xl mb-4">What You Need</h2>
              <ul className="space-y-2">
                {guide.docs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="font-display text-xl mb-6">Step by Step</h2>
              <div className="space-y-6">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-sm leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related links */}
            <div className="bg-secondary rounded-lg p-6 mb-8">
              <h3 className="font-display text-lg mb-3">Related Resources</h3>
              <div className="flex flex-wrap gap-2">
                {guide.relatedFaq && (
                  <Link to={guide.relatedFaq}>
                    <Button variant="outline" size="sm">FAQ →</Button>
                  </Link>
                )}
                {guide.relatedTable && (
                  <Link to={guide.relatedTable}>
                    <Button variant="outline" size="sm">Comparison Table →</Button>
                  </Link>
                )}
                <Link to="/checklists/first-30-days">
                  <Button variant="outline" size="sm">First 30 Days Checklist →</Button>
                </Link>
                <Link to="/glossary">
                  <Button variant="outline" size="sm">Glossary →</Button>
                </Link>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <h3 className="font-display text-lg mb-2">Ready to get started?</h3>
              <Link to={guide.compareLink}>
                <Button>{guide.compareLabel} →</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
