import { SectionHeading } from "./primitives"

const STEPS = [
  {
    kicker: "Signals",
    title: "Product Signals + Inputs",
    body: "Launch metrics, experiment reads, customer inputs, and risks are captured continuously.",
  },
  {
    kicker: "Leadership",
    title: "Product VP Review",
    body: "Product leaders shape the narrative before it is submitted into the executive process.",
  },
  {
    kicker: "Forum Gate",
    title: "Submission",
    body: "Required product input is submitted into the forum process on time.",
  },
  {
    kicker: "Forum Gate",
    title: "Pre-Read Lock",
    body: "The official executive pre-read is locked for review. No further edits without an agreed refresh.",
  },
  {
    kicker: "Refresh Gate",
    title: "Live Refresh",
    body: "Latest product read delivered before the same forum. Target: 48 hours prior unless otherwise agreed.",
  },
  {
    kicker: "Forum",
    title: "Discussion / Decision",
    body: "One meeting moment for the submitted materials, refreshed product view, and decisions.",
  },
  {
    kicker: "Follow-up",
    title: "Actions + Decision Log",
    body: "Post-forum decisions, owners, and follow-ups are captured for execution.",
  },
]

export function OperatingModel() {
  return (
    <section className="scroll-mt-20">
      <SectionHeading
        id="model"
        title="Operating model"
        description="Start here to see the single pre-forum path: Product submits into the process on time, then provides a committed refresh point before the same forum when fresher signals matter."
      />

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex min-w-[180px] flex-1 items-stretch gap-3">
              <div className="flex flex-1 flex-col rounded-xl border border-border bg-secondary/40 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">{step.kicker}</span>
                <h3 className="mt-1 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden items-center text-muted-foreground lg:flex" aria-hidden="true">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl bg-slate-900 px-6 py-4 text-slate-100 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm font-semibold">Product gets predictability. Leadership gets a committed refresh point.</p>
        <p className="mt-2 text-xs text-slate-300 sm:mt-0 sm:max-w-sm sm:text-right">
          Stakeholders know what is submitted, what may refresh, and when Product shows up before exec forums.
        </p>
      </div>
    </section>
  )
}
