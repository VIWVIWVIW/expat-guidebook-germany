import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t card-shadow">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          We use cookies for analytics and affiliate tracking.{" "}
          <a href="/privacy" className="underline hover:text-primary">Learn more</a>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={() => handleConsent(false)}>
            Decline
          </Button>
          <Button size="sm" onClick={() => handleConsent(true)}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
