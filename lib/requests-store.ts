import { promises as fs } from "fs"
import path from "path"

export type AreaName =
  | "Strategy & Operations"
  | "Discovery"
  | "Buyer Experience"
  | "Seller Experience"
  | "Streaming & Moderation"
  | "Trust & Safety"

export type AreaData = {
  owner: string
  requests: string[]
}

export type RequestsData = {
  areas: Record<string, AreaData>
}

export const AREA_ORDER: AreaName[] = [
  "Discovery",
  "Buyer Experience",
  "Seller Experience",
  "Strategy & Operations",
  "Streaming & Moderation",
  "Trust & Safety",
]

const DATA_PATH = path.join(process.cwd(), "data", "requests.json")

const DEFAULT_DATA: RequestsData = {
  areas: {
    "Strategy & Operations": { owner: "Kanna", requests: [] },
    Discovery: { owner: "Ridhima", requests: [] },
    "Buyer Experience": { owner: "Kate", requests: [] },
    "Seller Experience": { owner: "Keshav", requests: [] },
    "Streaming & Moderation": { owner: "Tim", requests: [] },
    "Trust & Safety": { owner: "Laura", requests: [] },
  },
}

export async function readRequests(): Promise<RequestsData> {
  try {
    const file = await fs.readFile(DATA_PATH, "utf8")
    const parsed = JSON.parse(file) as RequestsData
    // Ensure every known area exists
    for (const area of AREA_ORDER) {
      if (!parsed.areas[area]) {
        parsed.areas[area] = { owner: "", requests: [] }
      }
    }
    return parsed
  } catch {
    return DEFAULT_DATA
  }
}

export async function writeRequests(data: RequestsData): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true })
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf8")
}
