"use client"

import { useState, useTransition } from "react"
import { Plus, X, Check, Loader2 } from "lucide-react"
import { Card, Chip } from "@/components/cadence/primitives"
import { publishRequests } from "@/app/actions/requests"
import type { AreaData } from "@/lib/requests-store"

type Tone = "blue" | "green" | "amber" | "violet" | "red"

type Area = {
  name: string
  tone: Tone
  owner: string
  requests: string[]
}

export function NewRequestBoard({ initialAreas }: { initialAreas: Area[] }) {
  const [areas, setAreas] = useState<Area[]>(initialAreas)
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [isPending, startTransition] = useTransition()
  const [savedAt, setSavedAt] = useState<string | null>(null)

  function addRequest(name: string) {
    const text = (drafts[name] ?? "").trim()
    if (!text) return
    setAreas((prev) =>
      prev.map((a) => (a.name === name ? { ...a, requests: [...a.requests, text] } : a)),
    )
    setDrafts((prev) => ({ ...prev, [name]: "" }))
    setSavedAt(null)
  }

  function removeRequest(name: string, index: number) {
    setAreas((prev) =>
      prev.map((a) =>
        a.name === name ? { ...a, requests: a.requests.filter((_, i) => i !== index) } : a,
      ),
    )
    setSavedAt(null)
  }

  function publish() {
    const payload: Record<string, AreaData> = {}
    for (const area of areas) {
      payload[area.name] = { owner: area.owner, requests: area.requests }
    }
    startTransition(async () => {
      const result = await publishRequests(payload)
      if (result.ok) setSavedAt(result.savedAt)
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Card key={area.name} className="flex flex-col gap-3">
            <Chip tone={area.tone}>{area.name}</Chip>

            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Owner:</span> {area.owner}
            </p>

            <ul className="flex flex-col gap-2">
              {area.requests.map((req, i) => (
                <li
                  key={i}
                  className="group flex items-start justify-between gap-2 rounded-md border border-border bg-secondary/60 px-2.5 py-1.5"
                >
                  <span className="text-sm leading-snug text-foreground">{req}</span>
                  <button
                    type="button"
                    onClick={() => removeRequest(area.name, i)}
                    aria-label={`Remove request from ${area.name}`}
                    className="mt-0.5 shrink-0 rounded text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-1.5">
              <input
                value={drafts[area.name] ?? ""}
                onChange={(e) => setDrafts((prev) => ({ ...prev, [area.name]: e.target.value }))}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addRequest(area.name)
                  }
                }}
                placeholder="New request"
                className="w-full rounded-md border border-border bg-background px-2.5 py-1.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
              <button
                type="button"
                onClick={() => addRequest(area.name)}
                aria-label={`Add request to ${area.name}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={publish}
          disabled={isPending}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isPending ? "Publishing…" : "Publish"}
        </button>
        {savedAt ? (
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-700">
            <Check className="h-4 w-4" />
            Saved {new Date(savedAt).toLocaleTimeString()}
          </span>
        ) : null}
      </div>
    </div>
  )
}
