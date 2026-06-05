const KEYS = {
  utm_source: "ma_utm_source",
  utm_medium: "ma_utm_medium",
  utm_campaign: "ma_utm_campaign",
  gclid: "ma_gclid",
  fbclid: "ma_fbclid",
} as const;

const CONSENT_KEYS = {
  choice: "ma_cookie_consent",
  timestamp: "ma_cookie_consent_at",
} as const;

export function captureUtmParams() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    (Object.keys(KEYS) as Array<keyof typeof KEYS>).forEach((k) => {
      const v = params.get(k);
      if (v) sessionStorage.setItem(KEYS[k], v);
    });
  } catch {
    /* sessionStorage unavailable */
  }
}

export function getTrackingData() {
  if (typeof window === "undefined") {
    return {
      utm_source: "organic",
      utm_medium: "direct",
      utm_campaign: "none",
      gclid: "",
      fbclid: "",
    };
  }
  return {
    utm_source: sessionStorage.getItem(KEYS.utm_source) || "organic",
    utm_medium: sessionStorage.getItem(KEYS.utm_medium) || "direct",
    utm_campaign: sessionStorage.getItem(KEYS.utm_campaign) || "none",
    gclid: sessionStorage.getItem(KEYS.gclid) || "",
    fbclid: sessionStorage.getItem(KEYS.fbclid) || "",
  };
}

export type ConsentChoice = "granted" | "denied" | "pending";

export function setConsentRecord(choice: "granted" | "denied") {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_KEYS.choice, choice);
    localStorage.setItem(CONSENT_KEYS.timestamp, new Date().toISOString());
  } catch {
    /* localStorage unavailable */
  }
}

export function getConsentRecord(): {
  consent_choice: ConsentChoice;
  consent_timestamp: string;
} {
  if (typeof window === "undefined") {
    return { consent_choice: "pending", consent_timestamp: "" };
  }
  const choice = (localStorage.getItem(CONSENT_KEYS.choice) as ConsentChoice) || "pending";
  const timestamp = localStorage.getItem(CONSENT_KEYS.timestamp) || "";
  return { consent_choice: choice, consent_timestamp: timestamp };
}