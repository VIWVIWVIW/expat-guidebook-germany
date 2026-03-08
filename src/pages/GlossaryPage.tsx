import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const glossaryTerms = [
  { term: "Anmeldung", definition: "Address registration — mandatory within 14 days of moving.", guide: "/guides/how-to-register-address" },
  { term: "Aufenthaltstitel", definition: "Residence permit allowing foreigners to live and work in Germany.", guide: null },
  { term: "Bürgeramt", definition: "Citizens' office where you register your address and handle official matters.", guide: "/guides/how-to-register-address" },
  { term: "ELSTER", definition: "Online portal for filing German tax returns.", guide: null },
  { term: "Finanzamt", definition: "Local tax office that handles your income tax and issues your Steuernummer.", guide: "/guides/how-to-get-tax-id" },
  { term: "GEZ / Rundfunkbeitrag", definition: "TV and radio license fee — €18.36/month per household.", guide: null },
  { term: "GKV", definition: "Gesetzliche Krankenversicherung — public (statutory) health insurance.", guide: "/guides/how-to-choose-health-insurance" },
  { term: "Grundgebühr", definition: "Base monthly fee for utilities (electricity, gas, internet) regardless of usage.", guide: "/guides/how-to-switch-electricity" },
  { term: "Haftpflichtversicherung", definition: "Personal liability insurance — highly recommended in Germany.", guide: null },
  { term: "Krankenversicherung", definition: "Health insurance — mandatory for everyone in Germany.", guide: "/guides/how-to-choose-health-insurance" },
  { term: "Lastschrift", definition: "Direct debit payment — the standard way to pay bills in Germany.", guide: null },
  { term: "Meldebescheinigung", definition: "Registration certificate received after Anmeldung.", guide: "/guides/how-to-register-address" },
  { term: "Nebenkosten", definition: "Additional costs on top of rent — heating, water, garbage, building maintenance.", guide: null },
  { term: "PKV", definition: "Private Krankenversicherung — private health insurance for high earners and freelancers.", guide: "/guides/how-to-choose-health-insurance" },
  { term: "Schufa", definition: "Credit scoring agency in Germany. Your Schufa score affects loans, contracts, and even renting apartments.", guide: "/faq/bank-account" },
  { term: "Steuer-ID", definition: "Tax identification number — a lifelong 11-digit number assigned after Anmeldung.", guide: "/guides/how-to-get-tax-id" },
  { term: "Steuernummer", definition: "Tax number assigned by your local Finanzamt — can change if you move.", guide: "/guides/how-to-get-tax-id" },
  { term: "Wohnungsgeberbestätigung", definition: "Landlord confirmation form needed for Anmeldung.", guide: "/guides/how-to-register-address" },
  { term: "Zählernummer", definition: "Meter number for electricity/gas — needed when switching providers.", guide: "/guides/how-to-switch-electricity" },
];

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  const letters = [...new Set(filtered.map((t) => t.term[0].toUpperCase()))].sort();

  return (
    <Layout>
      <PageHeader
        title="Glossary"
        description="Key German terms every expat should know — from Anmeldung to Zählernummer."
        breadcrumbs={[{ label: "Glossary" }]}
      />
      <div className="container py-12 max-w-3xl">
        <input
          type="text"
          placeholder="Search terms…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border bg-card text-sm mb-8 focus:outline-none focus:ring-2 focus:ring-ring"
        />

        {letters.map((letter) => (
          <div key={letter} className="mb-8">
            <h2 className="font-display text-xl text-primary mb-3">{letter}</h2>
            <div className="space-y-3">
              {filtered
                .filter((t) => t.term[0].toUpperCase() === letter)
                .map((t) => (
                  <div key={t.term} className="bg-card border rounded-lg p-4">
                    <h3 className="font-display text-base mb-1">{t.term}</h3>
                    <p className="text-sm text-muted-foreground">{t.definition}</p>
                    {t.guide && (
                      <Link to={t.guide} className="text-sm text-primary hover:underline mt-2 inline-block">
                        Related guide →
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
