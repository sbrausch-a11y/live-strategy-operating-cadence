export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 items-center rounded-md bg-primary px-2 text-sm font-bold tracking-tight text-primary-foreground">
            eBay
          </span>
          <span className="hidden text-sm font-semibold text-foreground sm:inline">
            Live Product Operating Cadence
          </span>
        </a>

        <span className="hidden rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground md:inline">
          Last updated: Jun 10, 2026
        </span>
      </div>
    </header>
  )
}
