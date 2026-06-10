import { SectionHeading } from "./primitives"

const LAYERS = [
  {
    accent: "border-l-amber-400",
    title: "Shareholders",
    sub: "Slowest / broadest. External performance narrative.",
    forums: [{ name: "Earnings", meta: "Quarterly · Date shown" }],
  },
  {
    accent: "border-l-orange-400",
    title: "Board",
    sub: "Governance narrative, strategy, performance, and risk.",
    forums: [{ name: "Board", meta: "Materials · Reviews · Meetings" }],
  },
  {
    accent: "border-l-red-400",
    title: "CEO / Exec Staff",
    sub: "Company visibility, business health, and executive decisions.",
    forums: [
      { name: "Product WBR", meta: "Weekly" },
      { name: "Product MBR", meta: "Monthly" },
      { name: "CEO Review", meta: "Scheduled forum" },
    ],
  },
  {
    accent: "border-l-emerald-400",
    title: "Product Leadership / GMs",
    sub: "Tradeoffs, escalations, prioritization, and path-to-green decisions.",
    forums: [
      { name: "Product & Design", meta: "Working cadence" },
      { name: "Roadmap Review", meta: "Scheduled forum" },
      { name: "Portfolio Off-sites", meta: "Model TBD" },
    ],
  },
  {
    accent: "border-l-violet-400",
    title: "PM Pods — Team-owned",
    sub: "Fastest / closest to execution. Operating read, scorecard, actions, and team alignment.",
    forums: [
      { name: "Pod Global WBR", meta: "Weekly" },
      { name: "Pod MBR", meta: "Monthly" },
      { name: "Pod All Hands", meta: "Monthly" },
    ],
  },
]

export function ForumMap() {
  return (
    <section className="scroll-mt-20">
      <SectionHeading
        id="forum-map"
        title="Forum map"
        description="Use this map to see which leadership layer owns each forum, from team-owned execution to shareholder-facing governance."
      />

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-col gap-3">
          {LAYERS.map((layer) => (
            <div
              key={layer.title}
              className={`grid gap-4 rounded-xl border border-border border-l-4 bg-secondary/30 p-4 md:grid-cols-[260px_1fr] ${layer.accent}`}
            >
              <div>
                <h3 className="text-base font-semibold text-foreground">{layer.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{layer.sub}</p>
              </div>
              <div className="flex flex-wrap items-start gap-2">
                {layer.forums.map((forum) => (
                  <div key={forum.name} className="rounded-lg border border-border bg-card px-3 py-2">
                    <p className="text-sm font-semibold text-foreground">{forum.name}</p>
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{forum.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-lg bg-secondary/50 px-4 py-3 text-xs text-muted-foreground">
          Highest-altitude forums sit at the top; fastest team-owned rhythms sit closest to execution.
        </p>
      </div>
    </section>
  )
}
