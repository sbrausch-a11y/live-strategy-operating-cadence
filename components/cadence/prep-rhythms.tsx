"use client"

import { useState } from "react"
import { SectionHeading, Chip } from "./primitives"

type Rhythm = {
  id: string
  name: string
  owner: string
  action: string
  summary: string
  prepNote: string
  days: { day: string; items: { title: string; detail: string }[] }[]
}

const RHYTHMS: Rhythm[] = [
  {
    id: "pod-wbr",
    name: "Pod Global WBR",
    owner: "Team-owned",
    action: "Do",
    summary:
      "Weekly product operating review to align on what happened, what is changing, and what owners refine before the next cycle.",
    prepNote: "One-week operating loop from agenda lock through meeting execution and follow-up.",
    days: [
      { day: "Mon", items: [{ title: "Agenda lock / VP sign-off", detail: "AM." }, { title: "Materials ready", detail: "EOD." }] },
      { day: "Tue", items: [{ title: "Pod Global WBR", detail: "Actions and decision log sent by EOD." }] },
      { day: "Wed", items: [{ title: "Next agenda shaping begins", detail: "Prep deck opens for next cycle." }] },
      { day: "Thu", items: [{ title: "Owners refine inputs", detail: "Owners refine inputs and prep content." }] },
      { day: "Fri", items: [{ title: "Pod agenda sent", detail: "Sent by EOD." }] },
    ],
  },
  {
    id: "pod-mbr",
    name: "Pod MBR",
    owner: "Team-owned",
    action: "Do",
    summary: "Monthly business review rolling up product performance, risks, and path-to-green for the pod.",
    prepNote: "Two-week prep loop closing the prior month and locking the monthly read.",
    days: [
      { day: "Wk 1", items: [{ title: "Month close inputs", detail: "Metrics and scorecards compiled." }] },
      { day: "Wk 2", items: [{ title: "Narrative draft", detail: "VP review of story and asks." }] },
      { day: "Lock", items: [{ title: "Pre-read lock", detail: "48h before the meeting." }] },
      { day: "Forum", items: [{ title: "Pod MBR", detail: "Decisions and owners logged." }] },
    ],
  },
  {
    id: "product-wbr",
    name: "Product WBR",
    owner: "Product cadence",
    action: "Disseminate",
    summary: "Weekly executive product read into CEO / Exec Staff visibility.",
    prepNote: "Inputs roll up from pod rhythms into the executive weekly.",
    days: [
      { day: "Mon", items: [{ title: "Pod reads in", detail: "Pods submit weekly reads." }] },
      { day: "Tue", items: [{ title: "Roll-up + VP review", detail: "Exec narrative assembled." }] },
      { day: "Wed", items: [{ title: "Product WBR", detail: "Latest read shared in forum." }] },
    ],
  },
  {
    id: "product-mbr",
    name: "Product MBR",
    owner: "Product cadence",
    action: "Disseminate",
    summary: "Monthly executive review of product performance and decisions.",
    prepNote: "Submission and pre-read lock are firm; live refresh 48h before the meeting.",
    days: [
      { day: "Wk 1", items: [{ title: "Submission", detail: "Required input due into the process." }] },
      { day: "Wk 2", items: [{ title: "Pre-read lock", detail: "Locked for review." }] },
      { day: "Refresh", items: [{ title: "Live refresh", detail: "48h prior unless otherwise aligned." }] },
      { day: "Forum", items: [{ title: "Product MBR", detail: "Discussion and decision." }] },
    ],
  },
  {
    id: "roadmap",
    name: "Roadmap Review",
    owner: "Product Leadership · Debate",
    action: "Debate",
    summary: "Scheduled cross-pod tradeoff and prioritization forum.",
    prepNote: "Debate forum — options and tradeoffs prepared ahead of the room.",
    days: [
      { day: "T-7", items: [{ title: "Options framed", detail: "Tradeoffs and recommendations drafted." }] },
      { day: "T-2", items: [{ title: "Pre-read lock", detail: "Materials locked." }] },
      { day: "Forum", items: [{ title: "Roadmap Review", detail: "Decisions and owners logged." }] },
    ],
  },
]

export function PrepRhythms() {
  const [activeId, setActiveId] = useState(RHYTHMS[0].id)
  const active = RHYTHMS.find((r) => r.id === activeId) ?? RHYTHMS[0]

  return (
    <section className="scroll-mt-20">
      <SectionHeading
        id="prep"
        title="Prep rhythms"
        description="Select a cadence to see what happens each day, who needs to move, and where submissions, reviews, and refreshes occur."
      />

      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        {/* List */}
        <div className="flex flex-col gap-2" role="tablist" aria-label="Prep rhythms">
          {RHYTHMS.map((r) => {
            const isActive = r.id === activeId
            return (
              <button
                key={r.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(r.id)}
                className={`rounded-xl border p-3 text-left transition-colors ${
                  isActive
                    ? "border-primary bg-accent"
                    : "border-border bg-card hover:border-primary/40 hover:bg-secondary/50"
                }`}
              >
                <p className={`text-sm font-semibold ${isActive ? "text-accent-foreground" : "text-foreground"}`}>
                  {r.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {r.owner} · {r.action}
                </p>
              </button>
            )
          })}
        </div>

        {/* Detail */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm" role="tabpanel">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-foreground">{active.name}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{active.summary}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground">
                <span className="font-semibold">Prep note: </span>
                {active.prepNote}
              </p>
            </div>
            <div className="flex gap-2">
              <Chip tone="blue">{active.action}</Chip>
              <Chip tone="violet">{active.owner}</Chip>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Lock and run
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Prep sequence
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {active.days.map((d) => (
                <div key={d.day} className="rounded-xl border border-border bg-secondary/30 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">{d.day}</p>
                  <div className="mt-2 flex flex-col gap-2">
                    {d.items.map((item) => (
                      <div key={item.title} className="rounded-lg bg-card p-2 shadow-sm">
                        <p className="text-xs font-semibold text-foreground">{item.title}</p>
                        <p className="text-[11px] text-muted-foreground">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
