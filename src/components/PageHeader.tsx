interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-secondary py-10 md:py-14">
      <div className="container">
        {breadcrumbs && (
          <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
