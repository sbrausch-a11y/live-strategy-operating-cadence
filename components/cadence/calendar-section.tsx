import { SectionHeading } from "./primitives"

type Event = { label: string; tone: string }

const LEGEND = [
  { label: "Shareholders", dot: "bg-amber-400" },
  { label: "Board", dot: "bg-orange-400" },
  { label: "CEO / Exec Staff", dot: "bg-red-400" },
  { label: "Product Leadership", dot: "bg-emerald-400" },
  { label: "PM Pods", dot: "bg-violet-400" },
]

const TONE: Record<string, string> = {
  submit: "bg-red-50 text-red-700",
  refresh: "bg-violet-50 text-violet-700",
  meeting: "bg-emerald-50 text-emerald-700",
  review: "bg-blue-50 text-blue-700",
  holiday: "bg-amber-50 text-amber-700",
}

// 4 weeks of June 2026, starting Sunday
const WEEKS: { date: number | null; events: Event[] }[][] = [
  [
    { date: null, events: [] },
    { date: 1, events: [{ label: "VP Review → Pod WBR", tone: "review" }, { label: "Pod Global WBR", tone: "refresh" }] },
    { date: 2, events: [{ label: "Submission → Product WBR", tone: "submit" }] },
    { date: 3, events: [{ label: "Product WBR", tone: "meeting" }, { label: "Product & Design Review", tone: "meeting" }] },
    { date: 4, events: [{ label: "Submission → Board", tone: "submit" }, { label: "Pod All Hands", tone: "review" }] },
    { date: 5, events: [] },
    { date: 6, events: [] },
  ],
  [
    { date: 7, events: [] },
    { date: 8, events: [{ label: "VP Review → Pod WBR", tone: "review" }, { label: "Pod Global WBR", tone: "refresh" }] },
    { date: 9, events: [] },
    { date: 10, events: [{ label: "Submission → Pod MBR", tone: "submit" }] },
    { date: 11, events: [{ label: "Submission → Product MBR", tone: "submit" }] },
    { date: 12, events: [] },
    { date: 13, events: [] },
  ],
  [
    { date: 14, events: [] },
    { date: 15, events: [{ label: "VP Review → Pod WBR", tone: "review" }, { label: "Product & Design Review", tone: "meeting" }] },
    { date: 16, events: [{ label: "Pod Global WBR", tone: "refresh" }, { label: "Pod MBR", tone: "review" }] },
    { date: 17, events: [{ label: "Live Refresh → Product MBR", tone: "refresh" }] },
    { date: 18, events: [{ label: "Board Meeting", tone: "review" }, { label: "Product MBR", tone: "review" }] },
    { date: 19, events: [{ label: "Juneteenth", tone: "holiday" }] },
    { date: 20, events: [] },
  ],
  [
    { date: 21, events: [] },
    { date: 22, events: [{ label: "VP Review → Pod WBR", tone: "review" }, { label: "Pod Global WBR", tone: "refresh" }] },
    { date: 23, events: [{ label: "Submission → Roadmap", tone: "submit" }] },
    { date: 24, events: [{ label: "Roadmap Review", tone: "meeting" }] },
    { date: 25, events: [] },
    { date: 26, events: [{ label: "Live Refresh → CEO Review", tone: "refresh" }] },
    { date: 27, events: [] },
  ],
]

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function CalendarSection() {
  return (
    <section className="scroll-mt-20">
      <SectionHeading
        id="calendar"
        title="June calendar"
        description="A worked example of one month: submissions, live refresh targets, meeting dates, holidays, and open alignment windows across every forum layer."
      />

      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap gap-3">
          {LEGEND.map((l) => (
            <span key={l.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className={`h-2.5 w-2.5 rounded-full ${l.dot}`} aria-hidden="true" />
              {l.label}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[680px]">
            <div className="grid grid-cols-7 gap-2">
              {DAY_NAMES.map((d) => (
                <div key={d} className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {d}
                </div>
              ))}
            </div>
            <div className="mt-1 grid grid-cols-7 gap-2">
              {WEEKS.flat().map((cell, i) => (
                <div
                  key={i}
                  className={`min-h-[96px] rounded-lg border border-border p-2 ${
                    cell.date === null ? "bg-secondary/30" : "bg-card"
                  }`}
                >
                  {cell.date !== null && (
                    <>
                      <p className="text-xs font-semibold text-foreground">{cell.date}</p>
                      <div className="mt-1 flex flex-col gap-1">
                        {cell.events.map((e) => (
                          <span
                            key={e.label}
                            className={`rounded px-1.5 py-1 text-[10px] font-medium leading-tight ${TONE[e.tone]}`}
                          >
                            {e.label}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
