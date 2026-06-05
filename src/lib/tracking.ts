const KEYS = {
  utm_source: "ma_utm_source",
  utm_medium: "ma_utm_medium",
  utm_campaign: "ma_utm_campaign",
  gclid: "ma_gclid",
  fbclid: "ma_fbclid",
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