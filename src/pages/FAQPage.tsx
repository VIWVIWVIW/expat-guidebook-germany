import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroFaq from "@/assets/hero-faq.jpg";

const faqData: Record<string, { title: string; description: string; questions: { q: string; a: string }[]; relatedGuide?: string; relatedCompare?: string }> = {
  "bank-account": {
    title: "Bank Account FAQ",
    description: "Common questions about opening and using a bank account in Germany.",
    relatedGuide: "/guides/how-to-open-bank-account",
    relatedCompare: "/compare/bank-accounts",
    questions: [
      { q: "Can I open a bank account without speaking German?", a: "Yes! Banks like N26, Wise, and Revolut offer fully English apps and customer support. Some traditional banks like Commerzbank also have English-speaking staff in larger cities." },
      { q: "Do I need a Schufa score to open an account?", a: "Not always. Wise and Revolut don't require a Schufa check. Traditional banks like Deutsche Bank or Commerzbank will check your Schufa, but you can still open a basic account (Basiskonto) regardless." },
      { q: "Can I open a bank account before arriving in Germany?", a: "Yes, online banks like N26 and Wise let you open an account from abroad. You'll need to verify your identity via video call." },
      { q: "What is the difference between Girokonto and Sparkonto?", a: "A Girokonto is a current account for daily transactions. A Sparkonto is a savings account with limited transactions but potentially higher interest." },
      { q: "How long does it take to open a bank account?", a: "Online banks: usually same-day or within 1–2 days. Traditional banks: 3–7 business days including PostIdent verification." },
      { q: "What happens if my Schufa score is bad?", a: "You can still open a basic account (Basiskonto) at any bank — it's your legal right in Germany. Alternatively, use Wise or Revolut which don't check Schufa." },
    ],
  },
  "health-insurance": {
    title: "Health Insurance FAQ",
    description: "Common questions about GKV and PKV for expats.",
    questions: [
      { q: "What's the difference between GKV and PKV?", a: "GKV (Gesetzliche Krankenversicherung) is public insurance — contributions are based on income. PKV (Private Krankenversicherung) is private — premiums are based on age, health, and coverage level." },
      { q: "Can I choose between GKV and PKV?", a: "If you earn above €69,300/year (2024) or are self-employed, you can choose PKV. Otherwise, GKV is mandatory for employees." },
      { q: "Is health insurance mandatory?", a: "Yes. Everyone living in Germany must have health insurance — either GKV or PKV." },
      { q: "How much does GKV cost?", a: "About 14.6% of your gross salary (shared with employer), plus an additional contribution of 0.3–1.7% depending on the provider." },
      { q: "Can I switch from PKV back to GKV?", a: "It's possible but difficult, especially after age 55. You generally need to reduce your income below the threshold or become an employee." },
    ],
  },
  registration: {
    title: "Address Registration FAQ",
    description: "Common questions about the Anmeldung process.",
    questions: [
      { q: "When do I need to register my address?", a: "Within 14 days of moving into your new apartment. Technically you can be fined for late registration, though enforcement varies." },
      { q: "What is a Wohnungsgeberbestätigung?", a: "A form your landlord must sign confirming that you live at the address. It's required for the Anmeldung." },
      { q: "Can I register without an appointment?", a: "Some Bürgerämter accept walk-ins, but most require an appointment. Book early — slots fill up fast in big cities." },
      { q: "What do I receive after registration?", a: "You'll get a Meldebescheinigung (registration certificate). Your Tax ID will be sent separately by post within 2–4 weeks." },
      { q: "Can I register a temporary address?", a: "Yes, but you must register your actual living address. Hotels and Airbnbs for short stays don't count." },
    ],
  },
  "tax-id": {
    title: "Tax ID FAQ",
    description: "Common questions about the Steuer-ID and Steuernummer.",
    questions: [
      { q: "What's the difference between Steuer-ID and Steuernummer?", a: "The Steuer-ID is a lifelong personal tax number. The Steuernummer is assigned by your local tax office and can change if you move." },
      { q: "How long does it take to receive my Steuer-ID?", a: "Usually 2–4 weeks after your address registration (Anmeldung)." },
      { q: "Can I get my Tax ID faster?", a: "You can visit your local Finanzamt (tax office) with your Meldebescheinigung to request it. Some offices can provide it on the spot." },
      { q: "Do I need a Tax ID to start working?", a: "Your employer can start processing payroll without it, but they'll withhold the highest tax class until you provide it." },
      { q: "I lost my Tax ID letter. What should I do?", a: "You can request it again online at the Bundeszentralamt für Steuern website. It will be sent by post within 4 weeks." },
    ],
  },
  electricity: {
    title: "Electricity FAQ",
    description: "Common questions about electricity and gas providers in Germany.",
    questions: [
      { q: "Am I automatically assigned an electricity provider?", a: "Yes. When you move in, you're automatically supplied by the local Grundversorger (default provider). You can switch to a cheaper provider at any time." },
      { q: "How often should I switch providers?", a: "At least once a year. Many providers offer introductory discounts that expire after 12 months." },
      { q: "What is the Grundgebühr?", a: "It's the base monthly fee you pay regardless of how much electricity you use, on top of the per-kWh charge." },
      { q: "Can I choose green energy?", a: "Yes! Many providers offer Ökostrom (green energy) tariffs, sometimes at competitive prices." },
      { q: "How do I read my electricity meter?", a: "The Zählerstand (meter reading) is the number shown on your meter. Your provider may ask for it annually, or send someone to read it." },
    ],
  },
  internet: {
    title: "Internet FAQ",
    description: "Common questions about internet and broadband in Germany.",
    questions: [
      { q: "What internet speed do I need?", a: "For a single person: 50–100 Mbit/s is usually enough. For streaming and working from home: 100–250 Mbit/s. For families or gamers: 250+ Mbit/s." },
      { q: "What's the typical contract length?", a: "Usually 24 months, but many providers now offer 1-month or flexible contracts (often at a slightly higher price)." },
      { q: "Can I use my own router?", a: "Yes! Since 2016, German law (Routerfreiheit) allows you to use any router you want." },
      { q: "Is fiber available everywhere?", a: "Not yet. Availability varies widely. Use provider websites to check what's available at your address." },
      { q: "What if I want to cancel early?", a: "You'll usually need to pay out the remaining contract or negotiate with the provider. Moving to an area without coverage can sometimes allow early cancellation." },
    ],
  },
};

const faqCategories = Object.entries(faqData).map(([key, v]) => ({ key, label: v.title.replace(" FAQ", "") }));

export default function FAQPage() {
  const { category } = useParams<{ category: string }>();
  const faq = faqData[category || "bank-account"];

  if (!faq) {
    return <Layout><PageHeader title="FAQ Not Found" /></Layout>;
  }

  // Schema.org FAQ markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <PageHeader
        title={faq.title}
        description={faq.description}
        breadcrumbs={[{ label: "FAQ" }, { label: faq.title }]}
        heroImage={heroFaq}
      />
      <div className="container py-12 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-8">
          {faqCategories.map((cat) => (
            <Link key={cat.key} to={`/faq/${cat.key}`}>
              <button className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${cat.key === category ? "bg-primary text-primary-foreground border-primary" : "hover:bg-secondary"}`}>
                {cat.label}
              </button>
            </Link>
          ))}
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faq.questions.map((q, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border rounded-lg px-4 bg-card">
              <AccordionTrigger className="text-left text-sm font-medium py-4">{q.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">{q.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {(faq.relatedGuide || faq.relatedCompare) && (
          <div className="mt-10 bg-secondary rounded-lg p-6">
            <h3 className="font-display text-lg mb-3">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {faq.relatedGuide && (
                <Link to={faq.relatedGuide}>
                  <Button variant="outline" size="sm">Read the Guide →</Button>
                </Link>
              )}
              {faq.relatedCompare && (
                <Link to={faq.relatedCompare}>
                  <Button variant="outline" size="sm">Compare Now →</Button>
                </Link>
              )}
              <Link to="/glossary">
                <Button variant="outline" size="sm">Glossary →</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
