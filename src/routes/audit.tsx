import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Nav from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import CalInline from "@/components/site/CalInline";

type Search = {
  source?: "audit" | "book";
  name?: string;
  email?: string;
};

export const Route = createFileRoute("/audit")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    source: s.source === "book" ? "book" : "audit",
    name: typeof s.name === "string" ? s.name : "",
    email: typeof s.email === "string" ? s.email : "",
  }),
  head: () => ({
    meta: [
      { title: "Workflow Audit — Motive Axis" },
      { name: "description", content: "Tell us about your operations. We'll audit your workflow and reply with a report." },
    ],
  }),
  component: AuditPage,
});

const CRM_OPTIONS = ["Salesforce", "GoHighLevel (GHL)", "HubSpot", "Zoho", "Pipedrive", "Other"];

function AuditPage() {
  const search = Route.useSearch();
  const [stage, setStage] = useState<"form" | "success" | "schedule">("form");

  const [name, setName] = useState(search.name ?? "");
  const [email, setEmail] = useState(search.email ?? "");
  const [company, setCompany] = useState("");
  const [hasCrm, setHasCrm] = useState<"yes" | "no" | "">("");
  const [crms, setCrms] = useState<string[]>([]);
  const [discussInCall, setDiscussInCall] = useState(search.source === "book");
  const [task, setTask] = useState("");
  const [calLink, setCalLink] = useState("motiveaxis/audit");

  const minBookingDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().slice(0, 10);
  })();
  const minBookingHuman = new Date(minBookingDate).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (search.source === "book") setDiscussInCall(true);
  }, [search.source]);

  const toggleCrm = (c: string) =>
    setCrms((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (discussInCall) {
      setCalLink("motiveaxis/discovery-call");
      setStage("schedule");
    } else {
      setStage("success");
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <div className="absolute inset-x-0 top-0 h-[600px] -z-10" style={{ background: "var(--gradient-radial-red)" }} />
      <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none -z-10" />

      <section className="relative pt-32 pb-24 md:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          {stage === "form" && (
            <Reveal>
              <div className="text-center mb-10">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                  {search.source === "book" ? "Book a strategy call" : "Workflow audit"}
                </div>
                <h1 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-balance">
                  Tell us about your operations.
                </h1>
                <p className="mt-4 text-muted-foreground">
                  A few quick details so we can tailor the audit or call to your stack.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FieldInput label="Name *" value={name} onChange={setName} required placeholder="Your name" />
                  <FieldInput label="Email *" value={email} onChange={setEmail} required type="email" placeholder="you@company.com" />
                </div>
                <FieldInput label="Company" value={company} onChange={setCompany} placeholder="Company name" />

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Do you have a current CRM?
                  </label>
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => {
                          setHasCrm(v);
                          if (v === "no") setCrms([]);
                        }}
                        className={`px-4 py-2 rounded-md border text-sm capitalize transition ${
                          hasCrm === v
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border bg-surface text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {hasCrm === "yes" && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Select CRM(s)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {CRM_OPTIONS.map((c) => {
                        const active = crms.includes(c);
                        return (
                          <label
                            key={c}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-md border cursor-pointer text-sm transition ${
                              active
                                ? "border-primary bg-primary/10"
                                : "border-border bg-surface hover:border-primary/40"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={active}
                              onChange={() => toggleCrm(c)}
                              className="accent-primary"
                            />
                            <span>{c}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    What do you want to achieve?
                  </label>
                  {!discussInCall && (
                    <textarea
                      rows={4}
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="The most frustrating manual task your team handles…"
                      className="w-full rounded-md bg-surface border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none resize-none"
                    />
                  )}
                  <label className="mt-3 flex items-center gap-3 text-sm text-muted-foreground cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discussInCall}
                      onChange={(e) => setDiscussInCall(e.target.checked)}
                      className="accent-primary"
                    />
                    I'd rather describe it on the call
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition red-glow"
                >
                  {discussInCall ? "Book the call" : "Audit my workflow"}
                  <span>→</span>
                </button>

                <p className="text-[11px] text-muted-foreground text-center">
                  Or email us directly at <span className="text-foreground">hello@motiveaxis.com</span>
                </p>
              </form>

              <div className="mt-8 text-center">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  ← Back to home
                </Link>
              </div>
            </Reveal>
          )}

          {stage === "success" && (
            <Reveal>
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-10 md:p-14 text-center">
                <div className="mx-auto h-14 w-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  ✓
                </div>
                <h2 className="mt-6 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                  Your workflow is being audited.
                </h2>
                <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                  We'll send a tailored report to <span className="text-foreground">{email}</span> within{" "}
                  <span className="text-foreground">2 working days</span>. Want to talk it through sooner?
                </p>
              </div>

              <div className="mt-10">
                <div className="text-center mb-6">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
                    Book your follow-up
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Pick a slot to review the report together.
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Earliest available: <span className="text-foreground">{minBookingHuman}</span> — we need 2 working days to prepare your audit.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card/80 backdrop-blur overflow-hidden p-2 md:p-4">
                  <CalInline calLink="motiveaxis/audit" name={name} email={email} date={minBookingDate} />
                </div>
                <div className="mt-6 text-center">
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                    ← Back to home
                  </Link>
                </div>
              </div>
            </Reveal>
          )}

          {stage === "schedule" && (
            <Reveal>
              <div className="text-center mb-6">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Schedule</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold tracking-tight">
                  Pick a time that works for you.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  30-minute strategy call with our team.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur overflow-hidden p-2 md:p-4">
                <CalInline calLink={calLink} name={name} email={email} />
              </div>
              <div className="mt-6 text-center">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  ← Back to home
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}

function FieldInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md bg-surface border border-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}