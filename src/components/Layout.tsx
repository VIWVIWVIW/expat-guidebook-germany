import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { NewsletterSection } from "./NewsletterSection";

interface LayoutProps {
  children: React.ReactNode;
  showNewsletter?: boolean;
}

export function Layout({ children, showNewsletter = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {showNewsletter && <NewsletterSection />}
      <Footer />
      <CookieBanner />
    </div>
  );
}
