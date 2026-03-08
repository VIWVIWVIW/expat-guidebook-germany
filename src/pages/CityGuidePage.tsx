import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cities: Record<string, { name: string; intro: string; banking: string; costs: string; notes: string }> = {
  berlin: {
    name: "Berlin",
    intro: "Germany's capital and biggest city — diverse, affordable (by German standards), and very international. English is widely spoken, making it one of the easiest cities for expats.",
    banking: "Most banks have English-speaking branches in central Berlin. N26 is headquartered here. Bürgeramt appointments are notoriously hard to get — book early!",
    costs: "Average rent: €800–1,200 for a 1-bed apartment. Significantly cheaper than Munich. Monthly transit pass (BVG): €49 (Deutschlandticket).",
    notes: "The tech and startup scene is booming. Very international — you can get by without German, but learning it will help with bureaucracy.",
  },
  munich: {
    name: "Munich",
    intro: "Bavaria's capital — known for Oktoberfest, BMW, and a high quality of life. Also one of the most expensive cities in Germany.",
    banking: "Good English support at major banks. The Bürgeramt is generally more efficient than Berlin.",
    costs: "Average rent: €1,200–1,800 for a 1-bed apartment. One of the highest in Germany. Monthly transit pass: €49 (Deutschlandticket).",
    notes: "Beautiful surroundings with the Alps nearby. Great for outdoor enthusiasts. The job market is strong in engineering and finance.",
  },
  hamburg: {
    name: "Hamburg",
    intro: "Germany's second-largest city and biggest port. Known for the Elbphilharmonie, Reeperbahn, and a cosmopolitan atmosphere.",
    banking: "Good banking infrastructure. English support available at major branches.",
    costs: "Average rent: €900–1,400 for a 1-bed apartment. More affordable than Munich.",
    notes: "Rainy weather but charming harbour city. Strong media and logistics industries.",
  },
  frankfurt: {
    name: "Frankfurt",
    intro: "Germany's financial capital — home to the ECB and many international banks. Very international with a large expat community.",
    banking: "The best city for banking — all major banks have flagship branches with English support.",
    costs: "Average rent: €1,000–1,500 for a 1-bed apartment. High but justified by high salaries.",
    notes: "Excellent public transport and central location. The airport makes it easy to travel across Europe.",
  },
  cologne: {
    name: "Cologne",
    intro: "Known for its cathedral, carnival, and a relaxed, friendly atmosphere. More affordable than other major cities.",
    banking: "Decent English support at major banks. Bürgeramt appointments are usually available within 1–2 weeks.",
    costs: "Average rent: €800–1,100 for a 1-bed apartment. Quite affordable for a major city.",
    notes: "Famous for its carnival (Karneval) and the Kölsch beer culture. Great quality of life.",
  },
  stuttgart: {
    name: "Stuttgart",
    intro: "Home to Mercedes-Benz and Porsche. A wealthy city with beautiful surroundings in the Swabian region.",
    banking: "Good banking services. English support at larger branches.",
    costs: "Average rent: €900–1,300 for a 1-bed apartment. Moderate by German standards.",
    notes: "Strong automotive and engineering job market. Surrounded by vineyards and nature.",
  },
  dresden: {
    name: "Dresden",
    intro: "The 'Florence on the Elbe' — stunning baroque architecture and a growing tech scene. Very affordable.",
    banking: "Limited English support at traditional banks. Online banks recommended.",
    costs: "Average rent: €500–750 for a 1-bed apartment. One of the most affordable major cities.",
    notes: "Beautiful old town and excellent cultural scene. Saxon Switzerland nearby for hiking.",
  },
  leipzig: {
    name: "Leipzig",
    intro: "A creative, up-and-coming city in Saxony. Known for its music history and affordable living.",
    banking: "Limited English support. N26 or Wise recommended for expats.",
    costs: "Average rent: €450–700 for a 1-bed apartment. Very affordable.",
    notes: "Growing startup scene and excellent nightlife. Often called 'the new Berlin' for its creative energy.",
  },
  dusseldorf: {
    name: "Düsseldorf",
    intro: "North Rhine-Westphalia's capital — known for fashion, Japanese culture, and a strong economy.",
    banking: "Good English support, especially given the international business community.",
    costs: "Average rent: €800–1,200 for a 1-bed apartment. Moderate.",
    notes: "Large Japanese community with excellent Japanese restaurants. Beautiful Rhine promenade.",
  },
};

const allCities = Object.entries(cities).map(([key, city]) => ({ key, ...city }));

export default function CityGuidePage() {
  const { city: citySlug } = useParams<{ city: string }>();
  const city = cities[citySlug || "berlin"];

  if (!city) {
    return <Layout><PageHeader title="City Not Found" /></Layout>;
  }

  return (
    <Layout>
      <PageHeader
        title={`${city.name} – Expat Guide`}
        description={city.intro}
        breadcrumbs={[{ label: "City Guides" }, { label: city.name }]}
      />
      <div className="container py-12 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-8">
          {allCities.map((c) => (
            <Link key={c.key} to={`/cities/${c.key}`}>
              <button className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${c.key === citySlug ? "bg-primary text-primary-foreground border-primary" : "hover:bg-secondary"}`}>
                {c.name}
              </button>
            </Link>
          ))}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-display text-xl mb-3">Banking & Services</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{city.banking}</p>
          </section>
          <section>
            <h2 className="font-display text-xl mb-3">Cost of Living</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{city.costs}</p>
          </section>
          <section>
            <h2 className="font-display text-xl mb-3">Expat Notes</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{city.notes}</p>
          </section>
        </div>

        <div className="bg-secondary rounded-lg p-6 text-center mt-10">
          <h3 className="font-display text-lg mb-2">Setting up in {city.name}?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/checklists/first-30-days"><Button variant="outline">First 30 Days Checklist</Button></Link>
            <Link to="/compare/bank-accounts"><Button>Compare Banks</Button></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
