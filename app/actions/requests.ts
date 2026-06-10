"use server"

import { revalidatePath } from "next/cache"
import { readRequests, writeRequests, type AreaData } from "@/lib/requests-store"

export async function publishRequests(
  payload: Record<string, AreaData>,
): Promise<{ ok: boolean; savedAt: string }> {
  const current = await readRequests()

  const next = { areas: { ...current.areas } }
  for (const [area, data] of Object.entries(payload)) {
    next.areas[area] = {
      owner: (data.owner ?? "").trim(),
      requests: (data.requests ?? [])
        .map((r) => r.trim())
        .filter((r) => r.length > 0),
    }
  }

  await writeRequests(next)
  revalidatePath("/")

  return { ok: true, savedAt: new Date().toISOString() }
}
