import { SectionHeading } from "@/components/cadence/primitives"
import { NewRequestBoard } from "@/components/cadence/new-request-board"
import { readRequests, AREA_ORDER } from "@/lib/requests-store"

const AREA_TONES: Record<string, "blue" | "green" | "amber" | "violet" | "red" | "teal"> = {
  "Strategy & Operations": "violet",
  Discovery: "blue",
  "Buyer Experience": "green",
  "Seller Experience": "amber",
  "Streaming & Moderation": "teal",
  "Trust & Safety": "red",
}

export async function NewRequestSection() {
  const data = await readRequests()

  const areas = AREA_ORDER.map((name) => ({
    name,
    tone: AREA_TONES[name],
    owner: data.areas[name]?.owner ?? "",
    requests: data.areas[name]?.requests ?? [],
  }))

  return (
    <section>
      <SectionHeading
        id="new-request"
        title="New Request for Team"
        description="Edit each team's owner, add review requests, then publish to save."
      />
      <NewRequestBoard initialAreas={areas} />
    </section>
  )
}
