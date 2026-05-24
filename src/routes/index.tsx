import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Nav from "@/components/site/Nav";
import WorkflowGraphic from "@/components/site/WorkflowGraphic";
import { Reveal } from "@/components/site/Reveal";
import logo from "@/assets/motive-axis-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <ValueProp />
      <Services />
      <Process />
      <Ecosystem />
      <Stack />
      <CaseStudies />
      <Pricing />
      <Trust />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------------------------- HERO ---------------------------------- */
function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[600px] -z-10" style={{ background: "var(--gradient-radial-red)" }} />
      <img src={logo} alt="" aria-hidden className="absolute right-[-120px] top-[-40px] w-[520px] opacity-[0.04] animate-float-slow pointer-events-none select-none" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-red" />
              Operational automation, engineered for scale
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-5xl sm:text-6xl font-semibold leading-[0.95] tracking-tight text-balance lg:text-6xl">
              One Axis
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We build automation systems that eliminate repetitive work, connect your operations,
              and scale your business faster. If you do it manually, we automate it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow">
                Book Strategy Call
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-5 py-3 text-sm font-medium text-foreground hover:border-primary/60 hover:text-primary transition">
                View Automation Systems
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 grid grid-cols-3 max-w-md gap-6 text-sm">
              {[
                ["70%", "Faster onboarding"],
                ["9", "Specialists on staff"],
                ["24/7", "Pipelines running"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="text-2xl font-display font-semibold text-foreground">{k}</div>
                  <div className="text-muted-foreground text-xs mt-1">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <WorkflowGraphic />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- VALUE PROP ------------------------------- */
const valueLines = [
  "Your team shouldn't waste time copy-pasting data.",
  "Every repetitive task is lost revenue.",
  "We replace chaos with systems.",
  "From lead to fulfillment. Automated.",
  "Manual work doesn't scale.",
];

function ValueProp() {
  return (
    <section className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-12 md:space-y-20">
          {valueLines.map((line, i) => (
            <Reveal key={i}>
              <div className="flex items-start gap-6">
                <div className="font-display text-sm text-primary mt-3 tabular-nums">
                  0{i + 1}
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-balance">
                  {line}
                </h2>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- SERVICES -------------------------------- */
const services = [
  {
    title: "CRM Automation",
    desc: "Native flows across Salesforce, HubSpot, GoHighLevel, Zoho, and custom CRMs.",
    items: ["Salesforce Flows", "GoHighLevel", "HubSpot", "Zoho", "Custom workflows"],
  },
  {
    title: "Marketing Automation",
    desc: "Lead nurturing, audience syncing, AI follow-ups, and reporting on autopilot.",
    items: ["Lead nurturing", "Ad audience sync", "AI follow-ups", "Email workflows"],
  },
  {
    title: "Operations Automation",
    desc: "Client onboarding, task generation, and internal routing wired end-to-end.",
    items: ["Client onboarding", "Task creation", "Slack automation", "Team routing"],
  },
  {
    title: "AI Workflow Systems",
    desc: "AI as an operator — summaries, qualification, research, and reporting.",
    items: ["AI summaries", "AI qualification", "AI research", "Operational assistants"],
  },
  {
    title: "HR & Employee Ops",
    desc: "Hiring, onboarding, approvals, and payroll syncing without the spreadsheets.",
    items: ["Hiring workflows", "Onboarding", "Approvals", "Payroll sync"],
  },
  {
    title: "Reporting & Analytics",
    desc: "Automated dashboards and client reports aggregated from every source.",
    items: ["Dashboards", "Client reporting", "KPI aggregation", "Data syncing"],
  },
];

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we automate"
          title="Automation systems that you'll inherently adapt."
          sub="From CRM plumbing to AI-driven reporting, every layer of your operation, connected."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group relative h-full bg-card p-8 transition-colors hover:bg-surface">
                <div className="absolute inset-x-0 top-0 h-px red-hairline opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-xs text-primary font-mono">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-display font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.items.map((it) => (
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
  );
}

/* --------------------------------- PROCESS -------------------------------- */
const steps = [
  ["01", "Audit", "We identify repetitive bottlenecks and broken workflows."],
  ["02", "Architect", "We design scalable automation systems around your operations."],
  ["03", "Integrate", "We connect CRMs, databases, marketing systems, and internal tools."],
  ["04", "Automate", "We eliminate manual work through workflows and AI systems."],
  ["05", "Optimize", "We monitor, maintain, and continuously improve your infrastructure."],
];

function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="How we work" title="A disciplined five-stage system." />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 h-px hairline hidden md:block" />
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map(([num, title, desc], i) => (
              <Reveal key={num} delay={i * 0.06}>
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
  );
}

/* -------------------------------- ECOSYSTEM ------------------------------- */
function Ecosystem() {
  const cards = [
    {
      h: "The engine",
      p: "Our default deployment standard is n8n. We build, host, and scale dedicated n8n instances for maximum control and zero arbitrary execution limits.",
    },
    {
      h: "Flexible integration",
      p: "Already on Make.com or Zapier? We natively map, refactor, and integrate new automation layers directly into your existing workspace.",
    },
    {
      h: "Enterprise CRM core",
      p: "Deep specialists in Salesforce Flows, GoHighLevel marketing engines, and unified multi-app Zoho workspaces.",
    },
    {
      h: "No over-engineering",
      p: "We specialize in low-code middleware. Brittle hyper-custom scripts are a last resort, not a default — your infra stays maintainable.",
    },
    {
      h: "Security & compliance first",
      p: "Every pipeline adheres to strict data privacy, platform policy, and secure credential management. Your data stays yours.",
    },
    {
      h: "Honest scope",
      p: "For deep engineering-heavy backend product work outside automation, we partner or consult separately. No bait-and-switch.",
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our ecosystem"
          title="An integration philosophy built for the long run."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.h} delay={i * 0.04}>
              <div className="group h-full rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition-colors">
                <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-mono">
                  ⌘
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{c.h}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- STACK --------------------------------- */
const stackItems = [
  "n8n", "Salesforce", "Make.com", "Zapier", "GoHighLevel",
  "Zoho", "Slack", "ClickUp", "Airtable", "HubSpot", "APIs", "Webhooks",
];

function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Technology"
            title="Scalable no-code and low-code, by design."
            align="left"
          />
          <div className="mt-8 space-y-5 text-muted-foreground text-base leading-relaxed max-w-xl">
            <p>
              We build primarily on scalable low-code infrastructure. If you already use Zapier or Make,
              we integrate directly into your existing ecosystem.
            </p>
            <p>
              If you don't have automation infrastructure yet, we help you deploy a dedicated{" "}
              <span className="text-foreground">n8n environment</span> you fully own.
            </p>
            <p className="text-sm text-muted-foreground/80 border-l-2 border-primary/60 pl-4">
              For highly specialized engineering-heavy backend software outside automation infrastructure,
              we partner or consult separately depending on scope.
            </p>
          </div>
        </div>
        <Reveal>
          <div className="grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {stackItems.map((t, i) => (
              <div
                key={t}
                className="bg-card aspect-[4/3] flex items-center justify-center text-sm text-muted-foreground hover:text-primary hover:bg-surface transition-colors group relative"
              >
                <span className="font-mono text-xs absolute top-2 left-3 text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-medium">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ CASE STUDIES ------------------------------ */
const caseStudies = [
  {
    tag: "Operational infrastructure",
    client: "F Forward",
    title: "Full operational automation across sales, onboarding, ops & reporting.",
    problem:
      "Disconnected systems, manual onboarding, fragmented reporting, and inefficiencies across sales, project management, and HR.",
    architecture: "Salesforce Flows • n8n • ClickUp • Slack • Internal DB",
    flow: [
      "Lead validation → lookalike audience sync",
      "Salesforce → internal DB on conversion",
      "Auto-generated ClickUp onboarding tasks",
      "Dedicated Slack channels + dynamic team dispatch",
      "Live CRM API ingestion for monthly reporting",
      "Zoho employee sync for payroll & ops",
    ],
    results: [
      ["6+", "Systems unified"],
      ["—", "Manual handoffs removed"],
      ["1x", "Source of truth"],
    ],
  },
  {
    tag: "Lead acquisition pipeline",
    client: "GrowthLoop Media",
    title: "Automated lead & client fulfillment system for a scaling agency.",
    problem:
      "Manual lead follow-ups, slow onboarding, inconsistent reporting, and ad-hoc task assignment.",
    architecture: "GoHighLevel • n8n • AI calling • Calendar APIs",
    flow: [
      "60s SMS validation via GHL on inbound lead",
      "AI qualification triage with sentiment parsing",
      "Auto-booked into AE calendars with pipeline sync",
      "Automated proposals & onboarding forms",
      "Monthly reporting generated end-to-end",
    ],
    results: [
      ["70%", "Faster onboarding"],
      ["<1m", "Lead response"],
      ["3x", "Throughput per AE"],
    ],
  },
  {
    tag: "CRM & appointments",
    client: "Nexus Dental Group",
    title: "CRM and appointment automation for a multi-location practice.",
    problem:
      "Missed leads, delayed follow-ups, and disconnected patient communication across locations.",
    architecture: "GoHighLevel • Webhooks • Scheduling APIs",
    flow: [
      "Missed-call text-back automation",
      "AI lead tagging + appointment reminders",
      "Internal scheduling workflows per location",
      "Live reporting dashboards for leadership",
    ],
    results: [
      ["↑", "Patient retention"],
      ["↓", "No-show rate"],
      ["100%", "Lead visibility"],
    ],
  },
];

function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Case studies"
          title="Real systems running in real businesses."
        />
        <div className="mt-16 space-y-12">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.client}>
              <article className="relative rounded-2xl border border-border bg-card overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-1/3 red-hairline" />
                <div className="grid lg:grid-cols-12 gap-10 p-8 md:p-12">
                  <div className="lg:col-span-5">
                    <div className="text-xs font-mono text-primary uppercase tracking-wider">
                      0{i + 1} · {cs.tag}
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">{cs.client}</div>
                    <h3 className="mt-2 text-3xl md:text-4xl font-display font-semibold tracking-tight text-balance">
                      {cs.title}
                    </h3>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{cs.problem}</p>
                    <div className="mt-5 inline-flex flex-wrap gap-2">
                      {cs.architecture.split(" • ").map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-md border border-border bg-surface/60 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-6">
                      {cs.results.map(([k, v]) => (
                        <div key={v}>
                          <div className="text-2xl font-display font-semibold text-primary">{k}</div>
                          <div className="text-xs text-muted-foreground mt-1">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <FlowDiagram steps={cs.flow} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="relative rounded-xl border border-border bg-surface/40 p-6 md:p-8 h-full">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 rounded-xl pointer-events-none" />
      <div className="relative space-y-3">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card/80 backdrop-blur px-4 py-3 hover:border-primary/50 transition-colors"
          >
            <div className="font-mono text-xs text-primary w-6">{String(i + 1).padStart(2, "0")}</div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            <div className="text-sm text-foreground/90 flex-[3]">{s}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- PRICING -------------------------------- */
const tiers = [
  {
    name: "Starter Automation",
    price: "$2,000+",
    desc: "Foundational workflow architecture and your first integrations.",
    features: ["Workflow architecture", "CRM integrations", "Basic automation setup", "Internal process automation"],
    cta: "Start a project",
    highlight: false,
  },
  {
    name: "Growth Systems",
    price: "Custom",
    desc: "Multi-platform workflows, AI assistance, and reporting infrastructure.",
    features: ["Multi-platform workflows", "AI-assisted automations", "Reporting systems", "Operational integrations"],
    cta: "Scope a system",
    highlight: true,
  },
  {
    name: "Premium Retainer",
    price: "$5,000/mo",
    desc: "Ongoing optimization, monitoring, and automation scaling.",
    features: ["Continuous optimization", "Monitoring & maintenance", "Priority implementation", "Workflow scaling"],
    cta: "Talk retainer",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Pricing" title="Transparent, scoped, no fluff." />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className={`relative h-full rounded-2xl border p-8 ${
                t.highlight
                  ? "border-primary/60 bg-gradient-to-b from-primary/[0.08] to-card red-glow"
                  : "border-border bg-card"
              }`}>
                {t.highlight && (
                  <div className="absolute -top-3 left-8 text-[10px] font-mono uppercase tracking-wider bg-primary text-primary-foreground px-2 py-1 rounded">
                    Most chosen
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                <div className="mt-3 text-4xl font-display font-semibold">{t.price}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-foreground/90">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-primary/60 hover:text-primary"
                }`}>
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          External platform subscriptions, API usage, and third-party infrastructure costs are billed directly to the client based on actual usage.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------- TRUST --------------------------------- */
function Trust() {
  const items = [
    "Access control",
    "Secure API credential management",
    "CRM permission structures",
    "Responsible automation practices",
    "Compliance-aware workflows",
    "Platform policy adherence",
  ];
  return (
    <section className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader eyebrow="Trust & data privacy" title="Every pipeline, built for your data — not against it." />
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Every automation we ship follows platform policies, operational security standards, and modern data-privacy practices.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {items.map((it) => (
            <span key={it} className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground">
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- ABOUT --------------------------------- */
function About() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow="About" title="Automation-focused operations agency." align="left" />
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-xl text-foreground/90">
            Motive Axis helps businesses eliminate repetitive work, connect disconnected systems,
            and build scalable operational infrastructure that compounds.
          </p>
          <p>
            We specialize in Salesforce automation, n8n architecture, CRM workflows, operational systems,
            and AI-assisted process automation.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            {[
              ["2", "Solution Architects"],
              ["5", "Automation Specialists"],
              ["2", "Senior Specialists"],
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
  );
}

/* ------------------------------- FINAL CTA -------------------------------- */
function FinalCTA() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-red)" }} />
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 -z-10" />
      <img src={logo} alt="" aria-hidden className="absolute -left-20 bottom-0 w-[460px] opacity-[0.04] animate-float-slow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-[1.02] text-balance">
              Your business needs <span className="text-gradient-red">systems</span>.<br />
              Not more manual work.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              We design automation infrastructure that helps companies move faster with fewer
              operational bottlenecks. Tell us where it hurts.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <form
            className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({
                to: "/audit",
                search: { source: "audit", name, email },
              });
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-md bg-surface border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Business email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-md bg-surface border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow"
            >
              Audit my workflow
              <span>→</span>
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              Or email us directly at <span className="text-foreground">hello@motiveaxis.com</span>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md bg-surface border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

/* --------------------------------- FOOTER --------------------------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Motive Axis" className="h-8 w-8" />
            <span className="font-display font-semibold">Motive<span className="text-primary">Axis</span></span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Building scalable operational systems through intelligent automation.
          </p>
        </div>
        <FooterCol title="Company" links={[["About", "#"], ["Case studies", "#work"], ["Pricing", "#pricing"]]} />
        <FooterCol title="Capabilities" links={[["Services", "#services"], ["Ecosystem", "#ecosystem"], ["Stack", "#stack"]]} />
        <FooterCol title="Contact" links={[["hello@motiveaxis.com", "mailto:hello@motiveaxis.com"], ["Book a call", "#contact"], ["LinkedIn", "#"]]} />
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Motive Axis. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-wider text-foreground/80 mb-3">{title}</div>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------ Section Header ---------------------------- */
function SectionHeader({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: string; sub?: string; align?: "left" | "center" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-display font-semibold tracking-tight text-balance">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
