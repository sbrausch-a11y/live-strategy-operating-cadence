import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) {
  return (
    <div className="mb-6 max-w-3xl scroll-mt-24" id={id}>
      <h2 className="text-pretty text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

const CHIP_TONES = {
  blue: "bg-blue-50 text-blue-700",
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
  violet: "bg-violet-50 text-violet-700",
  teal: "bg-teal-50 text-teal-700",
  neutral: "bg-secondary text-secondary-foreground",
} as const

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode
  tone?: keyof typeof CHIP_TONES
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
        CHIP_TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
