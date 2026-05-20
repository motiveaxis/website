import { useEffect, useRef, useState } from "react";
import getCalApi from "@calcom/embed-snippet";

type Props = {
  calLink: string;
  name?: string;
  email?: string;
  date?: string; // YYYY-MM-DD — opens booker on/after this date
};

export default function CalInline({ calLink, name, email, date }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

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
        layout: "month_view",
      });

      const config: Record<string, string> = {
        theme: "dark",
        timeFormat: "12",
      };
      if (name) config.name = name;
      if (email) config.email = email;
      if (date) {
        config.date = date;
        config.month = date.slice(0, 7);
      }

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
  }, [calLink, name, email, date]);

  const fallbackUrl = `https://cal.com/${calLink}`;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      {status === "loading" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
          <div className="w-full max-w-3xl px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <div className="h-5 w-40 rounded bg-white/[0.06] animate-pulse" />
              <div className="h-5 w-24 rounded bg-white/[0.06] animate-pulse" />
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-white/[0.04] animate-pulse"
                  style={{ animationDelay: `${(i % 7) * 60}ms` }}
                />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40">
              <div className="h-3 w-3 animate-spin rounded-full border border-white/15 border-t-[#ff1a1a]" />
              <span>Loading scheduler & detecting your timezone…</span>
            </div>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black/90 p-6 text-center">
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
  );
}
