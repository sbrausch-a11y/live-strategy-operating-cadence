import { SectionHeading } from "./primitives"

const RULES = [
  {
    title: "Live-only cadences",
    body: "Use the team-only prep rhythm. No submission deadline or enterprise handoff is required for pod-internal reviews.",
  },
  {
    title: "Submission cadences",
    body: "Submission is the deadline for product input into the forum process. Live Refresh is the latest read before the forum.",
  },
  {
    title: "MBR replacement rule",
    body: "On Product MBR weeks, there is no Product WBR. The monthly review replaces the weekly read during month-close week.",
  },
  {
    title: "Product WBR",
    body: "VP Review happens Monday night. Submission is due Tuesday by noon; the meeting is Wednesday.",
  },
  {
    title: "Product MBR",
    body: "Submission and Pre-Read Lock are firm. Live Refresh happens 48 hours before the meeting unless otherwise aligned.",
  },
  {
    title: "Roadmap Review",
    body: "Prep cycle is owned by Product Leadership and remains editable until the operating model is finalized.",
  },
]

const ALTITUDE = [
  { term: "Shareholders", def: "Gold. Earnings and external performance narrative." },
  { term: "Board", def: "Orange. Materials requested, submission, review / lock, and meetings." },
  { term: "CEO / Exec Staff", def: "Red. Executive visibility forums and related submissions." },
  { term: "Product Leadership", def: "Green. Decision, escalation, product, and GM forums." },
  { term: "PM Pods", def: "Violet. Team-owned operating loops and team forums." },
]

const HANDOFFS = [
  { term: "VP Review", def: "Product leaders review the story before it is submitted or discussed." },
  { term: "Submission", def: "Product input is due into the forum or enterprise process." },
  { term: "Pre-Read Lock", def: "The official executive pre-read is locked. Changes after this need an agreed refresh path." },
  { term: "Live Refresh", def: "Product shares the latest read before the forum, especially when signals changed." },
  { term: "Meeting", def: "The forum date." },
]

export function RulesAndKey() {
  return (
    <>
      <section className="scroll-mt-20">
        <SectionHeading
          id="rules"
          title="Rules of engagement"
          description="Use these rules to resolve timing conflicts, protect pre-reads, and keep follow-up ownership clear."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((rule) => (
            <div key={rule.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-foreground">{rule.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rule.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-mt-20">
        <SectionHeading
          id="key"
          title="Operating key"
          description="Use this appendix when terms get blurry. These definitions are the shared language for calendar chips, prep rhythms, and forum handoffs."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground">Altitude colors</h3>
            <dl className="mt-4 divide-y divide-border">
              {ALTITUDE.map((row) => (
                <div key={row.term} className="grid grid-cols-[160px_1fr] gap-4 py-3">
                  <dt className="text-sm font-medium text-foreground">{row.term}</dt>
                  <dd className="text-sm text-muted-foreground">{row.def}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-foreground">Handoff definitions</h3>
            <dl className="mt-4 divide-y divide-border">
              {HANDOFFS.map((row) => (
                <div key={row.term} className="grid grid-cols-[160px_1fr] gap-4 py-3">
                  <dt className="text-sm font-medium text-foreground">{row.term}</dt>
                  <dd className="text-sm text-muted-foreground">{row.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
