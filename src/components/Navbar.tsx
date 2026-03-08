import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/config/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl text-primary">
          my-basics.de
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {primaryNav.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                    <div className="bg-card rounded-lg border card-shadow p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link to="/newsletter">
            <Button size="sm" className="ml-2">Subscribe</Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card">
          <nav className="container py-4 space-y-2" aria-label="Mobile navigation">
            {primaryNav.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-3 py-2 text-sm hover:bg-secondary rounded-md"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/newsletter" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2">Subscribe</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
