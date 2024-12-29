import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  "Credentials auth",
  "Google & Microsoft login",
  "Email templates",
  "Organizations",
  "Member & invite system",
  "Stripe billing integration",
  "Onboarding wizard",
  "App shell",
  "Dashboard",
  "Master/detail pages",
  "Account settings",
  "API keys & webhooks",
]

export  function PricingSection() {
  return (
    <section className="container relative">
      <div className="bg-background pt-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Powerful Features,<br /> Simple Pricing
            </h2>
            <p className="mt-6 hidden text-lg leading-7 text-muted-foreground sm:block">
              Get all the tools you need to build and scale your SaaS, AI tool or web application with our comprehensive feature set and straightforward pricing.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border md:mx-0 md:flex md:max-w-none">
            <div className="p-6 sm:p-8 lg:flex-auto">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Next 15 Starter Kit
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                Everything you need to to start your SaaS, AI tool or web app - from authentication to billing, all in one powerful package.
              </p>

              <div className="mt-8 lg:hidden">
                <div className="rounded-2xl bg-neutral-50 py-8 text-center ring-1 ring-inset ring-neutral-900/5 dark:bg-neutral-900">
                  <div className="mx-auto max-w-xs px-4">
                    <p className="flex items-baseline justify-center gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-foreground">$180</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">USD</span>
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">Lifetime updates</p>
                    <Button
                      className="mt-6 w-full rounded-full"
                      asChild
                    >
                      <a
                        href="https://buy.stripe.com/9AQ3dz33pfybaic4gg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get access
                      </a>
                    </Button>
                    <p className="mt-6 text-xs leading-5 text-muted-foreground">
                      Invoices and receipts available for easy company reimbursement
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-foreground">
                  What's included
                </h4>
                <div className="h-px flex-auto bg-border" />
              </div>

              <ul role="list" className="mt-6 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-5 w-5 flex-none text-foreground" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden p-4 lg:flex lg:shrink-0">
              <div className="flex flex-col rounded-2xl bg-neutral-50 p-4 text-center ring-1 ring-inset ring-neutral-900/5 dark:bg-neutral-900">
                <div className="mx-auto flex h-full max-w-xs flex-col justify-center px-8">
                  <div>
                    <p className="flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-foreground">$180</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">USD</span>
                    </p>
                    <p className="mt-2 text-base font-semibold text-muted-foreground">
                      Lifetime updates
                    </p>
                  </div>
                  <Button
                    className="mt-8 w-full rounded-full"
                    asChild
                  >
                    <a
                      href="https://buy.stripe.com/9AQ3dz33pfybaic4gg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get access
                    </a>
                  </Button>
                  <p className="mt-6 text-xs leading-5 text-muted-foreground">
                    Invoices and receipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

