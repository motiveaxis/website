import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Technology & Stack — Motive Axis" },
      { name: "description", content: "The automation platforms, CRMs, and middleware Motive Axis uses to build operational infrastructure that scales." },
      { property: "og:title", content: "Technology & Stack — Motive Axis" },
      { property: "og:description", content: "Scalable no-code and low-code automation infrastructure, by design." },
    ],
  }),
  component: StackPage,
});

const categories: { tag: string; h: string; p: string; items: { name: string; note: string }[] }[] = [
  {
    tag: "Engine",
    h: "Automation runtimes",
    p: "The orchestration layer we deploy and own end-to-end. Dedicated, scalable, and free of arbitrary execution caps.",
    items: [
      { name: "n8n", note: "Default deployment standard — self-hosted, scalable." },
      { name: "Make.com", note: "Integrated when clients already operate inside it." },
      { name: "Zapier", note: "Connected and refactored, not replaced." },
    ],
  },
  {
    tag: "CRM",
    h: "Customer & sales infrastructure",
    p: "The systems where revenue actually lives. We architect flows, objects, and permissions natively inside each platform.",
    items: [
      { name: "Salesforce", note: "Flows, custom objects, Apex bridges where needed." },
      { name: "HubSpot", note: "Workflows, lifecycle stages, lead routing." },
      { name: "GoHighLevel", note: "Agency and SMB marketing engines." },
      { name: "Zoho", note: "Unified multi-app workspaces." },
    ],
  },
  {
    tag: "Ops",
    h: "Team & project layer",
    p: "Where work happens day-to-day. Automations turn intent into routed, owned tasks across the right teams.",
    items: [
      { name: "Slack", note: "Dynamic channels, alerts, AI-assisted triage." },
      { name: "ClickUp", note: "Auto-generated tasks, templates, status syncs." },
      { name: "Airtable", note: "Lightweight ops databases and views." },
      { name: "Notion", note: "Documentation and handover surfaces." },
    ],
  },
  {
    tag: "Glue",
    h: "APIs, webhooks, middleware",
    p: "The connective tissue that lets every system speak to every other system without brittle custom scripts.",
    items: [
      { name: "APIs", note: "REST and GraphQL integrations across the stack." },
      { name: "Webhooks", note: "Real-time triggers for instant downstream action." },
      { name: "Databases", note: "Postgres, Supabase, and managed stores for state." },
      { name: "AI APIs", note: "LLM-powered enrichment, summarization, qualification." },
    ],
  },
];

function StackPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[600px] -z-10" style={{ background: "var(--gradient-radial-red)" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-red" />
              Technology & stack
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-balance">
              Scalable no-code and low-code, {" "}
              <span className="text-gradient-red">by design.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We build on low-code infrastructure that's fast to ship, easy to extend, and
              fully owned by you. If you already run Zapier or Make, we integrate directly.
              If you don't, we deploy a dedicated n8n environment under your control.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { k: "Low-code first", v: "We pick maintainable middleware over brittle custom scripts." },
            { k: "You own it", v: "Every workflow lives in your account, in your environment." },
            { k: "No over-engineering", v: "We refuse to build what a one-line trigger can already do." },
          ].map((c) => (
            <Reveal key={c.k}>
              <div className="rounded-xl border border-border bg-card p-6 h-full">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{c.k}</div>
                <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">The stack</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance">
              Four layers. One coherent operating system.
            </h2>
          </div>

          <div className="mt-14 space-y-10">
            {categories.map((cat, idx) => (
              <Reveal key={cat.tag}>
                <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="absolute top-0 left-0 h-px w-1/3 red-hairline" />
                  <div className="grid lg:grid-cols-12 gap-8 p-8 md:p-10">
                    <div className="lg:col-span-4">
                      <div className="text-xs font-mono text-primary uppercase tracking-wider">
                        0{idx + 1} · {cat.tag}
                      </div>
                      <h3 className="mt-3 text-2xl md:text-3xl font-display font-semibold tracking-tight text-balance">
                        {cat.h}
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{cat.p}</p>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
                        {cat.items.map((it, i) => (
                          <div
                            key={it.name}
                            className="bg-card p-5 hover:bg-surface transition-colors relative"
                          >
                            <span className="font-mono text-[10px] absolute top-3 right-4 text-muted-foreground/40">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="font-display font-semibold text-foreground">{it.name}</div>
                            <div className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{it.note}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE BOUNDARY */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px red-hairline" />
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Honest scope</div>
            <h3 className="mt-3 text-2xl md:text-3xl font-display font-semibold tracking-tight">
              Where we stop, and where we partner.
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are an automation infrastructure team. For deep engineering-heavy backend product
              work — building bespoke SaaS, complex distributed systems, native mobile apps, or
              custom ML training pipelines — we partner with specialist firms or consult separately
              depending on scope. No bait-and-switch, no scope creep into work we don't ship at
              the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-red)" }} />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[1.02] text-balance">
            Already on a stack? <span className="text-gradient-red">We'll wire into it.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Share your current tools — we'll show you what's automatable and how the layers connect.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/audit"
              search={{ source: "stack" }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow"
            >
              Audit my stack
              <span>→</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-5 py-3 text-sm font-medium text-foreground hover:border-primary/60 hover:text-primary transition"
            >
              Back to overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
