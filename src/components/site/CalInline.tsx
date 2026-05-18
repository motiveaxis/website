import { useEffect, useRef, useState } from "react";
import getCalApi from "@calcom/embed-snippet";

type Props = {
  calLink: string;
  name?: string;
  email?: string;
};

export default function CalInline({ calLink, name, email }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [timezone, setTimezone] = useState<string>("");

  useEffect(() => {
    try {
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "");
    } catch {
      setTimezone("");
    }
  }, []);

  useEffect(() => {
    if (status === "ready" && wrapperRef.current) {
      wrapperRef.current.focus({ preventScroll: true });
    }
  }, [status]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    setStatus("loading");

    let cancelled = false;
    let readyTimer: ReturnType<typeof setTimeout> | undefined;
    let failTimer: ReturnType<typeof setTimeout> | undefined;

    try {
      const cal = getCalApi();
      const darkVars = {
        "cal-brand": "#ff1a1a",
        "cal-bg": "#000000",
        "cal-bg-muted": "#0a0a0a",
        "cal-bg-emphasis": "#141414",
        "cal-border": "rgba(255,255,255,0.08)",
        "cal-border-subtle": "rgba(255,255,255,0.06)",
        "cal-text": "#fafafa",
        "cal-text-emphasis": "#ffffff",
      };
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: true,
        cssVarsPerTheme: { dark: darkVars, light: darkVars },
        layout: "column_view",
      });

      const config: Record<string, string> = { theme: "dark", layout: "column_view" };
      if (name) config.name = name;
      if (email) config.email = email;
      // Force 12-hour time format; timezone is auto-detected by Cal from the browser.
      config.timeFormat = "12";

      cal("inline", {
        elementOrSelector: el,
        calLink,
        config,
      });

      // Poll for iframe presence to flip to "ready"
      const start = Date.now();
      const check = () => {
        if (cancelled) return;
        if (el.querySelector("iframe")) {
          setStatus("ready");
          return;
        }
        if (Date.now() - start > 12000) {
          setStatus("error");
          return;
        }
        readyTimer = setTimeout(check, 250);
      };
      check();

      failTimer = setTimeout(() => {
        if (!cancelled && !el.querySelector("iframe")) setStatus("error");
      }, 12000);
    } catch {
      setStatus("error");
    }

    return () => {
      cancelled = true;
      if (readyTimer) clearTimeout(readyTimer);
      if (failTimer) clearTimeout(failTimer);
      if (el) el.innerHTML = "";
    };
  }, [calLink, name, email]);

  const fallbackUrl = `https://cal.com/${calLink}`;
  const tzLabel = timezone ? timezone.replace(/_/g, " ") : "";

  return (
    <div className="w-full">
      {tzLabel && (
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff1a1a]"
              aria-hidden="true"
            />
            Detected timezone:{" "}
            <span className="font-medium text-white/85">{tzLabel}</span>
          </span>
        </div>
      )}
      <div
        ref={wrapperRef}
        tabIndex={-1}
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black outline-none focus-visible:ring-2 focus-visible:ring-[#ff1a1a]/50"
        role="region"
        aria-label={
          tzLabel
            ? `Scheduling calendar, times shown in ${tzLabel}`
            : "Scheduling calendar"
        }
        aria-busy={status === "loading"}
      >
      {status === "loading" && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/80 backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <div
            className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-[#ff1a1a]"
            aria-hidden="true"
          />
          <p className="text-sm text-white/60">Loading scheduler…</p>
          <span className="sr-only">Loading scheduling calendar, please wait</span>
        </div>
      )}
      {status === "error" && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/90 p-6 text-center"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-sm text-white/70">
            The scheduler couldn’t load. You can open it in a new tab.
          </p>
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#ff1a1a] px-4 py-2 text-sm font-medium text-white hover:bg-[#ff3333]"
          >
            Open scheduler
          </a>
        </div>
      )}
        <div ref={ref} className="min-h-[720px] w-full" style={{ colorScheme: "dark" }} />
      </div>
    </div>
  );
}
