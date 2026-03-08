import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroCalendar from "@/assets/hero-calendar.jpg";

interface CalendarEntry {
  month: number;
  day: number;
  title: string;
  description: string;
  category: string;
}

const categories = ["All", "Registration & Admin", "Tax", "Insurance", "Utilities", "Public Holidays", "School Holidays"];

const entries: CalendarEntry[] = [
  { month: 1, day: 1, title: "New Year's Day", description: "National public holiday.", category: "Public Holidays" },
  { month: 1, day: 6, title: "Epiphany", description: "Public holiday in BW, BY, ST.", category: "Public Holidays" },
  { month: 1, day: 31, title: "Electricity meter reading", description: "Many providers request your annual meter reading around this time.", category: "Utilities" },
  { month: 2, day: 28, title: "Annual insurance review", description: "Good time to review and compare health, liability, and household insurance.", category: "Insurance" },
  { month: 3, day: 1, title: "Switch electricity provider", description: "End of heating season — compare rates for the new year.", category: "Utilities" },
  { month: 3, day: 31, title: "Schufa check", description: "Request your free annual Schufa report (Datenkopie).", category: "Registration & Admin" },
  { month: 4, day: 18, title: "Good Friday", description: "National public holiday.", category: "Public Holidays" },
  { month: 4, day: 21, title: "Easter Monday", description: "National public holiday.", category: "Public Holidays" },
  { month: 5, day: 1, title: "Labour Day", description: "National public holiday.", category: "Public Holidays" },
  { month: 5, day: 29, title: "Ascension Day", description: "National public holiday. Popular bridge day!", category: "Public Holidays" },
  { month: 6, day: 9, title: "Whit Monday", description: "National public holiday.", category: "Public Holidays" },
  { month: 7, day: 31, title: "Tax return deadline", description: "Deadline for filing your income tax return (without tax advisor). With advisor: Feb 28 next year.", category: "Tax" },
  { month: 8, day: 15, title: "Assumption Day", description: "Public holiday in BY and Saarland.", category: "Public Holidays" },
  { month: 9, day: 30, title: "Tax return deadline (extended)", description: "Extended deadline if you missed July 31.", category: "Tax" },
  { month: 10, day: 3, title: "German Unity Day", description: "National public holiday.", category: "Public Holidays" },
  { month: 10, day: 31, title: "Reformation Day", description: "Public holiday in many northern/eastern states.", category: "Public Holidays" },
  { month: 11, day: 1, title: "All Saints' Day", description: "Public holiday in BW, BY, NW, RP, SL.", category: "Public Holidays" },
  { month: 11, day: 15, title: "Review annual subscriptions", description: "Cancel or switch internet, phone, and streaming services before year-end.", category: "Utilities" },
  { month: 12, day: 25, title: "Christmas Day", description: "National public holiday.", category: "Public Holidays" },
  { month: 12, day: 26, title: "2nd Christmas Day", description: "National public holiday.", category: "Public Holidays" },
  { month: 12, day: 31, title: "Year-end financial review", description: "Review pension contributions, Riester, and investment performance.", category: "Tax" },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CalendarPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? entries : entries.filter((e) => e.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Annual Calendar for Expats"
        description="Key dates, deadlines, and public holidays in Germany — never miss an important date."
        breadcrumbs={[{ label: "Calendar" }]}
        heroImage={heroCalendar}
      />
      <div className="container py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${cat === activeCategory ? "bg-primary text-primary-foreground border-primary" : "hover:bg-secondary"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {months.map((month, mi) => {
            const monthEntries = filtered.filter((e) => e.month === mi + 1);
            if (monthEntries.length === 0) return null;
            return (
              <div key={month}>
                <h2 className="font-display text-xl mb-4">{month}</h2>
                <div className="space-y-3">
                  {monthEntries.map((entry, i) => (
                    <div key={i} className="bg-card border rounded-lg p-4 flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary flex flex-col items-center justify-center">
                        <span className="text-xs text-muted-foreground">{month.slice(0, 3)}</span>
                        <span className="text-sm font-bold">{entry.day}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{entry.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{entry.description}</p>
                        <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {entry.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-secondary rounded-lg p-6">
          <h3 className="font-display text-lg mb-4">Download Calendar Files</h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild><a href="#"><Download className="h-4 w-4 mr-1.5" />Public Holidays ICS</a></Button>
            <Button variant="outline" size="sm" asChild><a href="#"><Download className="h-4 w-4 mr-1.5" />Tax Deadlines ICS</a></Button>
            <Button variant="outline" size="sm" asChild><a href="#"><Download className="h-4 w-4 mr-1.5" />All Dates ICS</a></Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">ICS download links coming soon.</p>
        </div>
      </div>
    </Layout>
  );
}
