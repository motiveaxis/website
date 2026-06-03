import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Data Privacy — Motive Axis" },
      { name: "description", content: "How Motive Axis handles credentials, data privacy, platform compliance, and operational security across every automation we ship." },
      { property: "og:title", content: "Trust & Data Privacy — Motive Axis" },
      { property: "og:description", content: "Every pipeline, built for your data — not against it." },
    ],
  }),
  component: TrustPage,
});

function TrustPage() {
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
              Trust & data privacy
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-balance">
              Every pipeline, built for{" "}
              <span className="text-gradient-red">your data</span> — not against it.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Automation touches your most sensitive systems: customers, revenue, employees,
              communications. We treat every credential, payload, and integration with the same
              care we'd want for our own business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Four pillars</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance">
              How we protect every system we touch.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
            {[
              {
                tag: "Access",
                h: "Least-privilege by default",
                p: "Every API key, OAuth scope, and CRM role we use is scoped to the minimum required surface. We never request blanket admin access when a single permission will do.",
                items: ["Scoped API keys", "Role-based CRM access", "Per-integration credentials", "Documented permission map"],
              },
              {
                tag: "Storage",
                h: "Credential hygiene",
                p: "Secrets live in encrypted secret stores tied to the deployment environment — never in source files, screenshots, chat threads, or shared docs. Rotation is part of every handover.",
                items: ["Encrypted secret stores", "No secrets in code", "Rotation on handover", "Per-environment isolation"],
              },
              {
                tag: "Compliance",
                h: "Platform policy adherence",
                p: "We follow every connected platform's terms — rate limits, fair-use, prohibited categories, and messaging compliance (TCPA, GDPR, CAN-SPAM where applicable).",
                items: ["Rate-limit-aware flows", "TCPA-aware SMS", "GDPR-aware data flows", "Platform ToS reviewed"],
              },
              {
                tag: "Operations",
                h: "Observability and rollback",
                p: "Every workflow we ship has logs, alerts, and a documented rollback path. If something breaks at 2am, your team can see what fired, what failed, and how to recover.",
                items: ["Execution logs", "Failure alerts", "Documented rollback", "Versioned workflows"],
              },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 0.04}>
                <div className="group relative h-full bg-card p-8 md:p-10 hover:bg-surface transition-colors">
                  <div className="absolute inset-x-0 top-0 h-px red-hairline opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{c.tag}</div>
                  <h3 className="mt-4 text-2xl font-display font-semibold">{c.h}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.p}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-2">
                    {c.items.map((it) => (
                      <li key={it} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary/70" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES TAG WALL */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Operating principles</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance">
            Standards we hold across every engagement.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              "Access control",
              "Secure API credential management",
              "CRM permission structures",
              "Responsible automation practices",
              "Compliance-aware workflows",
              "Platform policy adherence",
              "Encrypted secret storage",
              "Rate-limit aware",
              "PII minimization",
              "Audit logging",
              "Documented rollback",
              "No dark patterns",
            ].map((it) => (
              <span key={it} className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors">
                {it}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DATA LIFECYCLE */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Data lifecycle</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight">
              How your data moves through an automation.
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-8 h-px hairline hidden md:block" />
            <div className="grid md:grid-cols-5 gap-8">
              {[
                ["01", "Ingest", "Data enters through a trusted source — webhook, CRM, or scheduled pull."],
                ["02", "Validate", "Payloads are checked for shape, required fields, and sane values before anything fires."],
                ["03", "Transform", "Only the fields needed for the next step are mapped. Nothing extra is carried."],
                ["04", "Route", "Workflows fan out to the right systems with scoped credentials, never global keys."],
                ["05", "Log", "Every execution leaves a trail your team can read, audit, and replay."],
              ].map(([num, title, desc]) => (
                <Reveal key={num}>
                  <div className="relative">
                    <div className="relative z-10 h-16 w-16 rounded-full border border-border bg-card flex items-center justify-center font-display text-primary">
                      {num}
                    </div>
                    <h4 className="mt-5 font-display font-semibold">{title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Common questions</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight">
            What clients usually ask first.
          </h2>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {[
              {
                q: "Where does our data live?",
                a: "Inside your own systems. We connect to your CRM, your n8n instance, your databases. Motive Axis does not centralize or warehouse client data on our side.",
              },
              {
                q: "Who owns the workflows you build?",
                a: "You do. Every n8n graph, Salesforce Flow, GHL automation, and webhook lives in your account and is fully documented so your team or another partner can take over.",
              },
              {
                q: "How are credentials handled?",
                a: "We use scoped, per-integration credentials stored inside the host platform's secret manager. We never store production credentials in our own systems.",
              },
              {
                q: "What happens when we offboard?",
                a: "We rotate every credential we touched, hand over documentation, and provide a 30-day support window so your team can run the systems independently.",
              },
              {
                q: "Do you handle regulated industries?",
                a: "We work with healthcare, finance, and legal clients, but we scope carefully. Where compliance frameworks require a specialist (HIPAA, SOC 2 audits), we partner accordingly.",
              },
            ].map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-medium">{f.q}</span>
                  <span className="text-primary font-mono text-sm shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-red)" }} />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 -z-10" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[1.02] text-balance">
            Have a security or compliance{" "}
            <span className="text-gradient-red">question?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            We're happy to walk through how an automation would handle your specific data flow.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/audit"
              search={{ source: "trust" }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow"
            >
              Book a security review
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
