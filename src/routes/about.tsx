import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import logo from "@/assets/motive-axis-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Motive Axis" },
      { name: "description", content: "Motive Axis is an automation-focused operations agency building scalable infrastructure for businesses." },
      { property: "og:title", content: "About — Motive Axis" },
      { property: "og:description", content: "Operators, architects, and engineers building automation infrastructure that compounds." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[600px] -z-10" style={{ background: "var(--gradient-radial-red)" }} />
        <img src={logo} alt="" aria-hidden className="absolute right-[-120px] top-[-40px] w-[520px] opacity-[0.04] animate-float-slow pointer-events-none select-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-red" />
              About Motive Axis
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-balance">
              We replace manual work with{" "}
              <span className="text-gradient-red">infrastructure that compounds.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Motive Axis is an automation-focused operations agency. We help companies eliminate
              repetitive work, connect disconnected systems, and ship operational infrastructure
              that scales without scaling headcount.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Manifesto</div>
          <div className="mt-10 space-y-10 md:space-y-14">
            {[
              "Manual work is a tax on every growing business.",
              "Software shouldn't be glued together. It should be wired.",
              "Automation is leverage — not a feature.",
              "Operators ship. Architects scale. We do both.",
            ].map((line, i) => (
              <Reveal key={i}>
                <div className="flex items-start gap-6">
                  <div className="font-mono text-sm text-primary mt-3 tabular-nums">0{i + 1}</div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
                    {line}
                  </h2>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY + STATS */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Our story</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight">
              Born inside the operations stack.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground/90">
              Motive Axis was founded by operators who got tired of watching companies hire
              their way out of broken systems.
            </p>
            <p>
              We've spent years inside Salesforce orgs, GoHighLevel workspaces, n8n graphs,
              and Zoho deployments — wiring sales, marketing, HR, and reporting together so
              the business runs itself between meetings.
            </p>
            <p>
              Today we work as a focused unit of solution architects and automation specialists.
              No bloat, no agency overhead, no over-engineering. Just systems that work.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                ["2", "Solution architects"],
                ["5", "Automation specialists"],
                ["2", "Senior specialists"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="text-3xl font-display font-semibold text-foreground">{k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">What we believe</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance">
              Six principles that shape every system we ship.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { h: "Systems over headcount", p: "Every automation should reduce dependency on hiring just to keep up with growth." },
              { h: "Boring tech, sharp execution", p: "We pick the most reliable tool for the job — even when it's not the trendiest." },
              { h: "Own your infrastructure", p: "We build automation you can audit, extend, and outgrow us with. No lock-in." },
              { h: "Document or it didn't ship", p: "Every workflow is mapped, named, and handed off so your team owns the rails." },
              { h: "Honest scope", p: "We say no to work outside our craft. Engineering-heavy product work goes to partners." },
              { h: "Compounding leverage", p: "We design for the second year of usage, not the demo. The longer it runs, the more it pays." },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 0.04}>
                <div className="group h-full rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition-colors relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px red-hairline opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="font-mono text-xs text-primary">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{c.h}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM ROLES */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">How we're organized</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight">
              A small team. Three disciplines.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {[
              {
                role: "Solution architects",
                desc: "Map your operation, design the automation graph, and decide what gets built first.",
                stack: ["Process mapping", "System design", "Integration strategy"],
              },
              {
                role: "Automation specialists",
                desc: "Ship the workflows — n8n, Salesforce Flows, GoHighLevel, Zapier, Make — wired and monitored.",
                stack: ["n8n", "CRM flows", "Middleware", "Webhooks"],
              },
              {
                role: "Senior specialists",
                desc: "Own AI-assisted layers, complex orchestration, and the long-term health of your stack.",
                stack: ["AI workflows", "Custom logic", "Reliability"],
              },
            ].map((t) => (
              <div key={t.role} className="bg-card p-8 hover:bg-surface transition-colors">
                <h3 className="font-display text-xl font-semibold">{t.role}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {t.stack.map((s) => (
                    <li key={s} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary/70" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
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
            Want to see how we'd <span className="text-gradient-red">wire your ops?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            We start every engagement with a workflow audit. No commitment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/audit"
              search={{ source: "about" }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow"
            >
              Audit my workflow
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
