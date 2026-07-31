"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "databytes-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function respond(choice: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-mist bg-white p-4 shadow-card">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink/70">
          We use cookies to improve your experience on this site. See our
          privacy practices for details.
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            variant="secondary"
            className="!px-4 !py-2 text-sm"
            onClick={() => respond("declined")}
          >
            Decline
          </Button>
          <Button
            className="!px-4 !py-2 text-sm"
            onClick={() => respond("accepted")}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
