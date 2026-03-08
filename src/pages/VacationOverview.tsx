import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { MapPin } from "lucide-react";

const regions = [
  { slug: "bavaria", name: "Bavaria", desc: "Alpine lakes, fairy-tale castles, and charming villages.", highlights: "Königssee, Neuschwanstein, Garmisch" },
  { slug: "saxony", name: "Saxony", desc: "Dramatic sandstone formations and historic cities.", highlights: "Saxon Switzerland, Bastei, Dresden" },
  { slug: "thuringia", name: "Thuringia", desc: "Medieval towns and enchanting forests.", highlights: "Erfurt, Wartburg Castle" },
  { slug: "franconia", name: "Franconia", desc: "Rolling hills, beer culture, and natural beauty.", highlights: "Fränkische Schweiz, Fichtelgebirge" },
  { slug: "rhine", name: "Rhine & Mosel", desc: "Vineyard-covered valleys and castle-studded riverbanks.", highlights: "Mittelrhein, Mosel Valley" },
  { slug: "north", name: "Northern Coast", desc: "Sandy beaches, chalk cliffs, and heathlands.", highlights: "Rügen, Usedom, Lüneburger Heide" },
  { slug: "southwest", name: "Southwest", desc: "Black Forest cuckoo clocks and Lake Constance sunsets.", highlights: "Black Forest, Bodensee" },
  { slug: "east", name: "Eastern Germany", desc: "Peaceful waterways and untouched nature.", highlights: "Spreewald, Müritz" },
];

export default function VacationOverview() {
  return (
    <Layout>
      <PageHeader
        title="Vacation in Germany"
        description="Discover Germany beyond the cities — from Alpine lakes to Baltic beaches."
        breadcrumbs={[{ label: "Vacation" }]}
      />
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((region) => (
            <Link
              key={region.slug}
              to={`/vacation/${region.slug}`}
              className="group bg-card rounded-lg border p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <MapPin className="h-6 w-6 text-primary mb-3" />
              <h2 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">{region.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">{region.desc}</p>
              <p className="text-xs text-muted-foreground/70">{region.highlights}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
