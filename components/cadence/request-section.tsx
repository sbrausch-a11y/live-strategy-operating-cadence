import { Chip } from "./primitives"

export function RequestSection() {
  return (
    <section id="request" className="scroll-mt-20">
      <div className="mb-3">
        <Chip tone="blue">Product Leadership</Chip>
      </div>
      <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Live Product Operating Cadence
      </h1>
      <p className="mt-3 max-w-none text-pretty text-base leading-relaxed text-muted-foreground">
        Single view into upcoming product review cadences and requests for team to schedule any additional reviews.
      </p>
    </section>
  )
}
