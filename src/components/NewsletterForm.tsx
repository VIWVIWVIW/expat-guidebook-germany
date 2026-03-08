import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { subscribeToNewsletter } from "@/services/newsletter";
import { trackEvent } from "@/services/analytics";

interface NewsletterFormProps {
  variant?: "default" | "hero";
}

export function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      toast.success(result.message);
      trackEvent({ name: "newsletter_subscribe" });
      setEmail("");
    } else {
      toast.error(result.message);
    }

    setLoading(false);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={isHero ? "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" : ""}
      />
      <Button
        type="submit"
        disabled={loading}
        variant={isHero ? "secondary" : "default"}
        className="shrink-0"
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </Button>
    </form>
  );
}
