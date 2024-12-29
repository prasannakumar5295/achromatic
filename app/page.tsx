import { Button } from "@/components/ui/button"
import { PreviewTabs } from "@/components/preview-tabs"
import { TimeSavings } from "@/components/time-savings"
import { FloatingUI } from "@/components/floating-ui"
import {TechStack} from "@/components/tech-stack"
import {CodePreview} from "@/components/code-preview"
import {PricingSection} from "@/components/pricing-section"
import {FAQSection} from "@/components/faq-section"
import {ReadyToStart} from "@/components/readystart"
import {Footer} from "@/components/footer"

export default function Home() {
  return (
    <main>
      <section className="container relative overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <div className="mx-auto flex flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10 mb-8 mt-12 items-center px-0 sm:px-4">
            <div className="inline-flex items-center rounded-3xl border px-2.5 py-0.5 text-[13px] font-semibold border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mx-auto mb-2">
              Advanced Next 15 SaaS Starter Kit
            </div>
            <h1 className="font-bold tracking-tighter text-5xl md:text-6xl lg:text-7xl">
              Building your SaaS
              <br className="hidden sm:inline" /> just got unfairly easy
            </h1>
            <p className="text-balance font-light text-foreground mt-4 max-w-[42rem] text-lg sm:text-xl">
              Why spend valuable time tackling auth, billing, emails, invites and onboarding?
              <span className="hidden sm:inline"> Focus on your business and skip the noise.</span>
            </p>
            <div className="mx-auto mt-8 flex flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="https://demo.achromatic.dev" target="_blank" rel="noreferrer">
                  View Demo
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                asChild
              >
                <a href="/docs">Read Docs</a>
              </Button>
            </div>
          </div>
          <PreviewTabs />
        </div>
      </section>
      <TimeSavings />
      <FloatingUI/>
      <TechStack/>
      <CodePreview/>
      <PricingSection/>
      <FAQSection/>
      <ReadyToStart/>
      <Footer/>
    </main>
  )
}

