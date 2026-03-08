import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Compare",
    links: [
      { label: "Bank Accounts", href: "/compare/bank-accounts" },
      { label: "Health Insurance", href: "/compare/health-insurance" },
      { label: "Electricity & Gas", href: "/compare/electricity-gas" },
      { label: "Internet", href: "/compare/internet" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Open Bank Account", href: "/guides/how-to-open-bank-account" },
      { label: "Register Address", href: "/guides/how-to-register-address" },
      { label: "Get Tax ID", href: "/guides/how-to-get-tax-id" },
      { label: "Health Insurance", href: "/guides/how-to-choose-health-insurance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Checklists", href: "/checklists/first-30-days" },
      { label: "FAQ", href: "/faq/bank-account" },
      { label: "Glossary", href: "/glossary" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "City Guides", href: "/cities/berlin" },
      { label: "Calendar", href: "/calendar" },
      { label: "Vacation", href: "/vacation" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} my-basics.de — Your finance basics in Germany.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Datenschutz</Link>
            <Link to="/affiliate-disclosure" className="hover:text-primary transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
