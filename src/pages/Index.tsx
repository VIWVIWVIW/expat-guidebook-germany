import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Landmark, Shield, Zap, Wifi, BookOpen, Calendar, MapPin, CheckSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import heroHomepage from "@/assets/hero-homepage.jpg";

const features = [
  { icon: Landmark, label: "Bank Accounts", href: "/compare/bank-accounts", desc: "Find the best bank with English support" },
  { icon: Shield, label: "Health Insurance", href: "/compare/health-insurance", desc: "GKV vs PKV – compare your options" },
  { icon: Zap, label: "Electricity & Gas", href: "/compare/electricity-gas", desc: "Switch & save on energy costs" },
  { icon: Wifi, label: "Internet", href: "/compare/internet", desc: "Compare broadband providers" },
];

const quickLinks = [
  { icon: BookOpen, label: "Step-by-Step Guides", href: "/guides/how-to-open-bank-account", desc: "Registration, tax ID, banking & more" },
  { icon: CheckSquare, label: "First 30 Days Checklist", href: "/checklists/first-30-days", desc: "Everything you need to do when you arrive" },
  { icon: Calendar, label: "Annual Calendar", href: "/calendar", desc: "Tax deadlines, holidays & key dates" },
  { icon: MapPin, label: "Vacation in Germany", href: "/vacation", desc: "Hidden gems and travel inspiration" },
];

const cities = ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Dresden", "Leipzig", "Düsseldorf"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/glossary?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title={siteConfig.tagline}
        description={siteConfig.description}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={heroHomepage} alt="Germany cityscape" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in">
            Your finance basics in Germany — simplified
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Banking, insurance, electricity, taxes — everything expats need to know, in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Link to="/compare/bank-accounts">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Compare Now
              </Button>
            </Link>
            <Link to="/checklists/first-30-days">
              <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10">
                First 30 Days Checklist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-3">Compare & Save</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Side-by-side comparisons of banking, insurance, and utilities — tailored for expats.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Link
                key={f.label}
                to={f.href}
                className="group bg-card rounded-lg border p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <f.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">{f.label}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl text-center mb-10">Everything You Need</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickLinks.map((q) => (
              <Link
                key={q.label}
                to={q.href}
                className="group bg-card rounded-lg border p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <q.icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-display text-lg mb-1 group-hover:text-primary transition-colors">{q.label}</h3>
                <p className="text-sm text-muted-foreground">{q.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Social Proof */}
      <section className="py-12 border-b">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by expats across Germany</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <p className="font-display text-2xl text-foreground">50+</p>
              <p>Providers compared</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl text-foreground">6</p>
              <p>Step-by-step guides</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl text-foreground">9</p>
              <p>City guides</p>
            </div>
            <div className="text-center">
              <p className="font-display text-2xl text-foreground">100%</p>
              <p>Free to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* City Guides */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-3">City Guides</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Local tips for expats in Germany's biggest cities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/cities/${city.toLowerCase().replace("ü", "u")}`}
                className="px-5 py-2.5 rounded-full border bg-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
