import { NewsletterForm } from "./NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="hero-gradient py-16">
      <div className="container max-w-2xl text-center">
        <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-3">
          Stay in the loop
        </h2>
        <p className="text-primary-foreground/80 mb-6">
          Get the latest expat finance tips, guides, and deals delivered to your inbox.
        </p>
        <NewsletterForm variant="hero" />
      </div>
    </section>
  );
}
