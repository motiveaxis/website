import { useEffect, useRef } from "react";
import getCalApi from "@calcom/embed-snippet";

type Props = {
  calLink: string; // e.g. "motiveaxis/audit"
  name?: string;
  email?: string;
};

export default function CalInline({ calLink, name, email }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";

    const cal = getCalApi();
    cal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      cssVarsPerTheme: {
        dark: {
          "cal-brand": "#ff1a1a",
          "cal-bg": "#000000",
          "cal-bg-muted": "#0a0a0a",
          "cal-bg-emphasis": "#141414",
          "cal-border": "rgba(255,255,255,0.08)",
          "cal-border-subtle": "rgba(255,255,255,0.06)",
          "cal-text": "#fafafa",
          "cal-text-emphasis": "#ffffff",
        },
      },
      layout: "month_view",
    });

    const config: Record<string, string> = { theme: "dark" };
    if (name) config.name = name;
    if (email) config.email = email;

    cal("inline", {
      elementOrSelector: el,
      calLink,
      config,
    });

    return () => {
      if (el) el.innerHTML = "";
    };
  }, [calLink, name, email]);

  return <div ref={ref} className="min-h-[720px] w-full" style={{ colorScheme: "dark" }} />;
}