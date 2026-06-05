import { useEffect, useState } from "react";
import { captureUtmParams } from "@/lib/tracking";

const STORAGE_KEY = "ma_cookie_consent";
const GTM_ID = "GTM-KJNN4J4B";

type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function pushGtag(...args: any[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
  // Use the same shape GTM expects
  window.dataLayer.push(args);
}

function setupConsentDefaults() {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = window.gtag || gtag;
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

function loadGtm() {
  if (document.getElementById("gtm-script")) return;
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
}

function applyConsent(choice: ConsentChoice) {
  const value =
    choice === "granted"
      ? {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
          functionality_storage: "granted",
          personalization_storage: "granted",
        }
      : {
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
          functionality_storage: "denied",
          personalization_storage: "denied",
        };
  window.gtag?.("consent", "update", value);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    captureUtmParams();
    setupConsentDefaults();
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentChoice | null;
    if (stored) {
      applyConsent(stored);
      loadGtm();
    } else {
      setVisible(true);
    }
  }, []);

  const decide = (choice: ConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    applyConsent(choice);
    loadGtm();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[100] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="rounded-2xl border border-border bg-card/95 backdrop-blur p-5 shadow-2xl">
        <h2 className="text-sm font-semibold text-foreground">We use cookies</h2>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          We use cookies for analytics and to improve your experience. Marketing
          and analytics tags only load after you accept. See our{" "}
          <a href="/trust" className="text-primary hover:underline">
            privacy policy
          </a>
          .
        </p>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground hover:border-primary/50 transition"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:brightness-110 transition red-glow"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}