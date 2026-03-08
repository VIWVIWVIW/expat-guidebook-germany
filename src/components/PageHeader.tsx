interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  heroImage?: string;
}

import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function PageHeader({ title, description, breadcrumbs, heroImage }: PageHeaderProps) {
  return (
    <div className="relative bg-secondary py-10 md:py-14 overflow-hidden">
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </>
      )}
      <div className="container relative z-10">
        {breadcrumbs && (
          <nav className="flex items-center gap-1 text-sm mb-4" style={{ color: heroImage ? 'rgba(255,255,255,0.8)' : undefined }}>
            <Link to="/" className={heroImage ? "hover:text-white transition-colors" : "text-muted-foreground hover:text-primary transition-colors"}>Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {crumb.href ? (
                  <Link to={crumb.href} className={heroImage ? "hover:text-white transition-colors" : "hover:text-primary transition-colors"}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={heroImage ? "text-white" : "text-foreground"}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className={`font-display text-3xl md:text-4xl lg:text-5xl ${heroImage ? "text-white" : ""}`}>{title}</h1>
        {description && (
          <p className={`mt-3 text-lg max-w-2xl ${heroImage ? "text-white/80" : "text-muted-foreground"}`}>{description}</p>
        )}
      </div>
    </div>
  );
}
