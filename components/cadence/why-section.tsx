import { SectionHeading, Chip } from "./primitives"

const FIXED_ROWS = [
  { label: "Forum dates", value: "Committed", tone: "green" as const },
  { label: "Pre-read lock", value: "48h prior", tone: "blue" as const },
  { label: "Refresh timing", value: "Needs Alignment", tone: "amber" as const },
  { label: "Follow-up owner", value: "TBD", tone: "neutral" as const },
]

const COLUMNS = [
  {
    index: "01",
    title: "What is fixed",
    body: "Forum deadlines, pre-read locks, executive forum dates, and follow-up ownership for each product review.",
    accent: "border-l-primary",
  },
  {
    index: "02",
    title: "What can move",
    body: "Product signals, performance reads, launch risks, and market context that change between submission and forum.",
    accent: "border-l-amber-400",
  },
  {
    index: "03",
    title: "What needs alignment",
    body: "Where a refreshed product read is needed before the forum, and who owns the handoff into the exec process.",
    accent: "border-l-emerald-400",
  },
]

export function WhySection() {
  return (
    <section className="scroll-mt-20">
      <SectionHeading
        id="why"
        title="Why this exists"
        description="Product operates on faster signal cycles than the executive cadence. This artifact makes the handoffs explicit: when Product submits into forums, when refreshed reads are expected, and where alignment is still needed."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-foreground">
            <span className="font-semibold">The tension:</span> Product ships and reads signals weekly, while executive
            forums run on a monthly and quarterly beat. Without a shared cadence, product reads arrive stale, pre-reads
            slip, and the same questions get re-litigated in the room.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This page is the shared contract. It fixes the dates and locks, names what is allowed to move, and flags the
            handoffs that still need an owner or a decision.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Cadence parameters</p>
          <dl className="mt-4 divide-y divide-border">
            {FIXED_ROWS.map((row) => (
              <div key={row.label} className="flex items-center justify-between py-3">
                <dt className="text-sm text-muted-foreground">{row.label}</dt>
                <dd>
                  <Chip tone={row.tone}>{row.value}</Chip>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COLUMNS.map((col) => (
          <div
            key={col.index}
            className={`rounded-xl border border-border border-l-4 bg-card p-5 shadow-sm ${col.accent}`}
          >
            <span className="text-xs font-bold text-muted-foreground">{col.index}</span>
            <h3 className="mt-2 text-base font-semibold text-foreground">{col.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{col.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
