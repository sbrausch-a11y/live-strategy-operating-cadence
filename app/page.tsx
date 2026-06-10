import { SiteHeader } from "@/components/site-header"
import { RequestSection } from "@/components/cadence/request-section"
import { NewRequestSection } from "@/components/cadence/new-request-section"

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:py-14">
        <RequestSection />
        <hr className="border-t border-border" />
        <NewRequestSection />
      </main>
    </div>
  )
}
