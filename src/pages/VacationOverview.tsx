import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PageHeader } from "@/components/PageHeader";
import { staticRoutes } from "@/config/routes";
import heroVacation from "@/assets/hero-vacation.jpg";

import heroBavaria from "@/assets/hero-bavaria.jpg";
import heroSaxony from "@/assets/hero-saxony.jpg";
import heroThuringia from "@/assets/hero-thuringia.jpg";
import heroFranconia from "@/assets/hero-franconia.jpg";
import heroRhine from "@/assets/hero-rhine.jpg";
import heroNorth from "@/assets/hero-north.jpg";
import heroSouthwest from "@/assets/hero-southwest.jpg";
import heroEast from "@/assets/hero-east.jpg";

const regions = [
  { slug: "bavaria", name: "Bavaria", desc: "Alpine lakes, fairy-tale castles, and charming villages.", highlights: "Königssee, Neuschwanstein, Garmisch", image: heroBavaria },
  { slug: "saxony", name: "Saxony", desc: "Dramatic sandstone formations and historic cities.", highlights: "Saxon Switzerland, Bastei, Dresden", image: heroSaxony },
  { slug: "thuringia", name: "Thuringia", desc: "Medieval towns and enchanting forests.", highlights: "Erfurt, Wartburg Castle", image: heroThuringia },
  { slug: "franconia", name: "Franconia", desc: "Rolling hills, beer culture, and natural beauty.", highlights: "Fränkische Schweiz, Fichtelgebirge", image: heroFranconia },
  { slug: "rhine", name: "Rhine & Mosel", desc: "Vineyard-covered valleys and castle-studded riverbanks.", highlights: "Mittelrhein, Mosel Valley", image: heroRhine },
  { slug: "north", name: "Northern Coast", desc: "Sandy beaches, chalk cliffs, and heathlands.", highlights: "Rügen, Usedom, Lüneburger Heide", image: heroNorth },
  { slug: "southwest", name: "Southwest", desc: "Black Forest cuckoo clocks and Lake Constance sunsets.", highlights: "Black Forest, Bodensee", image: heroSouthwest },
  { slug: "east", name: "Eastern Germany", desc: "Peaceful waterways and untouched nature.", highlights: "Spreewald, Müritz", image: heroEast },
];

export default function VacationOverview() {
  const meta = staticRoutes["/vacation"];

  return (
    <Layout>
      <SEOHead title={meta.title} description={meta.description} />
      <PageHeader
        title="Vacation in Germany"
        description="Discover Germany beyond the cities — from Alpine lakes to Baltic beaches."
        breadcrumbs={[{ label: "Vacation" }]}
        heroImage={heroVacation}
      />
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((region) => (
            <Link
              key={region.slug}
              to={`/vacation/${region.slug}`}
              className="group bg-card rounded-lg border overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="h-40 overflow-hidden">
                <img src={region.image} alt={region.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">{region.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{region.desc}</p>
                <p className="text-xs text-muted-foreground/70">{region.highlights}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
