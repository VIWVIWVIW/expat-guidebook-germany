import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

interface Place {
  name: string;
  description: string;
  bestSeason: string;
  howToGetThere: string;
  accommodation: string;
  tips: string[];
}

const regions: Record<string, { name: string; intro: string; places: Place[]; hiddenGems: string[]; dayTrips: { from: string; destinations: string[] }[] }> = {
  bavaria: {
    name: "Bavaria",
    intro: "From the Alps to fairy-tale castles, Bavaria is Germany's most iconic vacation region.",
    places: [
      { name: "Königssee", description: "A crystal-clear lake surrounded by steep mountains in the Berchtesgaden National Park.", bestSeason: "May – October", howToGetThere: "Train to Berchtesgaden, then bus", accommodation: "Hotels in Berchtesgaden or Schönau", tips: ["Take the electric boat to St. Bartholomä chapel", "Hike to the Obersee for fewer crowds"] },
      { name: "Neuschwanstein Castle", description: "The world's most famous castle, built by King Ludwig II.", bestSeason: "Year-round (spring/fall best)", howToGetThere: "Train to Füssen, then bus", accommodation: "Hotels in Schwangau or Füssen", tips: ["Book tickets online in advance", "Visit nearby Hohenschwangau Castle too"] },
      { name: "Garmisch-Partenkirchen", description: "A charming Alpine town at the foot of Germany's highest peak, the Zugspitze.", bestSeason: "Year-round", howToGetThere: "Direct train from Munich (1.5h)", accommodation: "Wide range from hostels to luxury hotels", tips: ["Take the cogwheel train up the Zugspitze", "Walk through the stunning Partnachklamm gorge"] },
    ],
    hiddenGems: ["Eibsee — a turquoise lake below the Zugspitze", "Wimbachklamm — a hidden gorge near Berchtesgaden"],
    dayTrips: [{ from: "Munich", destinations: ["Tegernsee (1h)", "Chiemsee (1.5h)", "Starnberger See (30min)"] }],
  },
  saxony: {
    name: "Saxony",
    intro: "Dramatic rock formations, historic cities, and nature that feels almost other-worldly.",
    places: [
      { name: "Saxon Switzerland", description: "A stunning national park with unique sandstone rock formations along the Elbe.", bestSeason: "April – October", howToGetThere: "S-Bahn from Dresden to Rathen or Bad Schandau", accommodation: "Hotels and guesthouses in Bad Schandau", tips: ["Hike the Malerweg trail (or just a section)", "Visit early morning to avoid crowds at Bastei Bridge"] },
      { name: "Bastei Bridge", description: "An iconic bridge perched 194m above the Elbe river with breathtaking views.", bestSeason: "Year-round", howToGetThere: "Train to Rathen, then 30-min hike up", accommodation: "Rathen village below", tips: ["Come at sunrise for the best photos", "Combine with a visit to Festung Königstein nearby"] },
    ],
    hiddenGems: ["Kirnitzschtal — a peaceful valley with waterfalls and a historic tram", "Pfaffenstein — a flat-topped mountain with panoramic views"],
    dayTrips: [{ from: "Dresden", destinations: ["Saxon Switzerland (45min)", "Meissen (30min)", "Moritzburg Castle (20min)"] }],
  },
  thuringia: {
    name: "Thuringia",
    intro: "Medieval history, enchanting forests, and some of Germany's most charming small cities.",
    places: [
      { name: "Erfurt", description: "A medieval city with a stunning cathedral and the famous Krämerbrücke (merchants' bridge).", bestSeason: "Year-round", howToGetThere: "ICE train from Berlin, Frankfurt, or Munich", accommodation: "Old town hotels and guesthouses", tips: ["Walk across the Krämerbrücke — the longest inhabited bridge in Europe", "Visit during the Christmas market for a magical experience"] },
      { name: "Wartburg Castle", description: "A UNESCO World Heritage Site where Martin Luther translated the Bible.", bestSeason: "April – October", howToGetThere: "Train to Eisenach, then bus or walk", accommodation: "Hotels in Eisenach", tips: ["Take a guided tour of the interior", "Hike through the surrounding Thuringian Forest"] },
    ],
    hiddenGems: ["Drachenschlucht — a narrow gorge near Eisenach", "Schwarzatal — a beautiful valley in the Thuringian Forest"],
    dayTrips: [{ from: "Erfurt", destinations: ["Weimar (15min)", "Jena (30min)", "Wartburg (1h)"] }],
  },
  franconia: {
    name: "Franconia",
    intro: "Northern Bavaria's best-kept secret — rolling hills, cave systems, and the world's highest density of breweries.",
    places: [
      { name: "Fränkische Schweiz", description: "A region of limestone cliffs, caves, and half-timbered villages.", bestSeason: "May – October", howToGetThere: "Train to Forchheim or Ebermannstadt", accommodation: "Guesthouses in local villages", tips: ["Try the local brewery beer gardens", "Visit the Teufelshöhle cave near Pottenstein"] },
      { name: "Fichtelgebirge", description: "A low mountain range with granite rock formations and dense forests.", bestSeason: "Year-round", howToGetThere: "Train to Wunsiedel or Marktredwitz", accommodation: "Hotels in Bad Berneck or Bischofsgrün", tips: ["Hike to the Ochsenkopf summit", "Visit the Luisenburg rock labyrinth"] },
    ],
    hiddenGems: ["Rothenburg ob der Tauber — a perfectly preserved medieval town", "Bamberg — UNESCO old town with smoked beer (Rauchbier)"],
    dayTrips: [{ from: "Nuremberg", destinations: ["Bamberg (45min)", "Rothenburg (1.5h)", "Fränkische Schweiz (40min)"] }],
  },
  rhine: {
    name: "Rhine & Mosel",
    intro: "Vineyard-covered slopes, castle ruins on every hilltop, and legendary river cruises.",
    places: [
      { name: "Mittelrhein (Middle Rhine)", description: "A UNESCO World Heritage stretch of the Rhine with over 40 castles.", bestSeason: "May – October", howToGetThere: "Train along the Rhine from Koblenz to Mainz", accommodation: "Hotels in Bacharach, St. Goar, or Rüdesheim", tips: ["Take a Rhine river cruise between Koblenz and Mainz", "Visit the Loreley rock for panoramic views"] },
      { name: "Mosel Valley", description: "Winding river, steep vineyards, and picturesque wine villages.", bestSeason: "May – October", howToGetThere: "Train to Cochem or Trier", accommodation: "Wine hotels and guesthouses", tips: ["Do a wine tasting at a local Weingut", "Walk the Moselsteig hiking trail"] },
    ],
    hiddenGems: ["Burg Eltz — a fairy-tale castle hidden in the forest", "Beilstein — the 'sleeping beauty of the Mosel'"],
    dayTrips: [{ from: "Cologne", destinations: ["Bonn (30min)", "Koblenz (1h)", "Cochem (2h)"] }],
  },
  north: {
    name: "Northern Coast",
    intro: "Sandy beaches, dramatic chalk cliffs, and vast heathlands — Germany's maritime side.",
    places: [
      { name: "Rügen", description: "Germany's largest island with iconic white chalk cliffs and seaside resorts.", bestSeason: "June – September", howToGetThere: "Train from Berlin to Binz (4h)", accommodation: "Seaside hotels in Binz or Sellin", tips: ["Visit the Jasmund chalk cliffs (Kreidefelsen)", "Take the historic Rasender Roland steam train"] },
      { name: "Usedom", description: "A sunny Baltic island shared with Poland, known for beautiful beaches.", bestSeason: "June – September", howToGetThere: "Train from Berlin to Heringsdorf (3h)", accommodation: "Hotels in the Kaiserbäder (Ahlbeck, Heringsdorf, Bansin)", tips: ["Walk along the pier in Ahlbeck", "Cross the border to Świnoujście (Poland) for shopping"] },
      { name: "Lüneburger Heide", description: "A vast heathland that turns purple in August/September.", bestSeason: "August – September (heather bloom)", howToGetThere: "Train to Lüneburg, then bus", accommodation: "Hotels in Lüneburg or Wilsede", tips: ["Visit during the heather bloom for stunning purple landscapes", "Explore the medieval town of Lüneburg"] },
    ],
    hiddenGems: ["Hiddensee — a car-free island near Rügen", "Darß peninsula — wild beaches and a lighthouse"],
    dayTrips: [{ from: "Hamburg", destinations: ["Lübeck (45min)", "Lüneburger Heide (1h)", "Sylt (3h by train)"] }],
  },
  southwest: {
    name: "Southwest Germany",
    intro: "The Black Forest, Lake Constance, and some of Germany's sunniest weather.",
    places: [
      { name: "Black Forest", description: "Dense forests, cuckoo clocks, and Black Forest cake — a quintessential German landscape.", bestSeason: "Year-round", howToGetThere: "Train to Freiburg, then regional trains/buses", accommodation: "Traditional Gasthäuser and hotels", tips: ["Drive (or bus) the Schwarzwaldhochstraße scenic route", "Try Schwarzwälder Kirschtorte (Black Forest cake) at a local café"] },
      { name: "Lake Constance (Bodensee)", description: "Central Europe's third-largest lake, shared with Austria and Switzerland.", bestSeason: "May – September", howToGetThere: "Train to Konstanz or Friedrichshafen", accommodation: "Hotels in Konstanz, Meersburg, or Lindau", tips: ["Take a ferry to the flower island Mainau", "Visit the medieval town of Meersburg"] },
    ],
    hiddenGems: ["Triberg waterfalls — Germany's highest waterfalls", "Gengenbach — a fairy-tale Black Forest town"],
    dayTrips: [{ from: "Stuttgart", destinations: ["Black Forest (1.5h)", "Tübingen (30min)", "Lake Constance (2h)"] }],
  },
  east: {
    name: "Eastern Germany",
    intro: "Peaceful waterways, ancient forests, and nature at its most untouched.",
    places: [
      { name: "Spreewald", description: "A UNESCO biosphere with canals winding through a unique wetland landscape.", bestSeason: "May – September", howToGetThere: "Train from Berlin to Lübbenau (1h)", accommodation: "Guesthouses in Lübbenau or Burg", tips: ["Take a traditional Kahn (punt boat) ride", "Try Spreewälder Gurken (pickled cucumbers) — a local specialty"] },
      { name: "Müritz National Park", description: "Germany's largest lake district — a paradise for birdwatching and cycling.", bestSeason: "May – October", howToGetThere: "Train to Waren (Müritz)", accommodation: "Hotels and campsites around Waren", tips: ["Rent a bike and explore the lake paths", "Watch for ospreys and white-tailed eagles"] },
    ],
    hiddenGems: ["Elbsandsteingebirge from the Bohemian side", "Muskauer Park — a UNESCO landscape park on the Polish border"],
    dayTrips: [{ from: "Berlin", destinations: ["Spreewald (1h)", "Potsdam (30min)", "Tropical Islands (1h)"] }],
  },
};

export default function VacationRegionPage() {
  const { region: regionSlug } = useParams<{ region: string }>();
  const region = regions[regionSlug || "bavaria"];

  if (!region) {
    return <Layout><PageHeader title="Region Not Found" /></Layout>;
  }

  return (
    <Layout>
      <PageHeader
        title={`Vacation: ${region.name}`}
        description={region.intro}
        breadcrumbs={[{ label: "Vacation", href: "/vacation" }, { label: region.name }]}
      />
      <div className="container py-12 max-w-3xl">
        {region.places.map((place, i) => (
          <div key={i} className="mb-10 bg-card border rounded-lg p-6">
            <h2 className="font-display text-xl mb-2">{place.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{place.description}</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div><span className="font-medium">Best season:</span> <span className="text-muted-foreground">{place.bestSeason}</span></div>
              <div><span className="font-medium">Getting there:</span> <span className="text-muted-foreground">{place.howToGetThere}</span></div>
              <div><span className="font-medium">Accommodation:</span> <span className="text-muted-foreground">{place.accommodation}</span></div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium mb-1">Insider Tips:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {place.tips.map((tip, j) => (
                  <li key={j} className="flex gap-2"><span>💡</span>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="mb-10">
          <h2 className="font-display text-xl mb-3">Hidden Gems</h2>
          <ul className="space-y-2">
            {region.hiddenGems.map((gem, i) => (
              <li key={i} className="text-sm flex gap-2 items-start">
                <span className="text-primary">✦</span>
                <span className="text-muted-foreground">{gem}</span>
              </li>
            ))}
          </ul>
        </div>

        {region.dayTrips.map((dt, i) => (
          <div key={i} className="mb-8">
            <h2 className="font-display text-xl mb-3">Day Trips from {dt.from}</h2>
            <div className="flex flex-wrap gap-2">
              {dt.destinations.map((dest, j) => (
                <span key={j} className="px-3 py-1.5 rounded-full bg-secondary text-sm">
                  {dest}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-secondary rounded-lg p-6 text-center">
          <h3 className="font-display text-lg mb-2">Compare Hotels</h3>
          <p className="text-sm text-muted-foreground mb-4">Find the best deals on accommodation in {region.name}.</p>
          <Button>Compare Hotels →</Button>
          <p className="text-xs text-muted-foreground mt-2">Affiliate link placeholder</p>
        </div>
      </div>
    </Layout>
  );
}
