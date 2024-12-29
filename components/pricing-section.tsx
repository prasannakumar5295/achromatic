import { ArrowRight, Check } from 'lucide-react'

export function PricingSection() {
  return (
    <section className="container relative mt-24 md:mt-32 lg:mt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:gap-20 xl:grid-cols-2 xl:gap-24">
          <div className="order-1 space-y-8 lg:mt-12 lg:max-w-lg">
            <h2 className="text-3xl font-bold leading-tight lg:max-w-lg">
              Pay once, own it forever
            </h2>
            <p className="text-lg font-light text-muted-foreground">
              Upon purchase, you can use{" "}
              <strong className="font-semibold text-foreground">Achromatic</strong>{" "}
              for personal and commercial projects with no restrictions on the number of developers or projects.
            </p>
          </div>
          <div className="order-2">
            <div className="border text-card-foreground rounded-xl bg-neutral-50 p-3 shadow-none dark:bg-neutral-900">
              <div className="shadow-sm rounded-xl border bg-background p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:divide-x">
                  <div className="space-y-6 lg:pr-6">
                    <div>
                      <div className="flex items-baseline gap-x-2">
                        <span className="text-[40px] font-bold tracking-tight text-foreground">$180</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">USD</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Lifetime updates</div>
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-2 h-10 rounded-full px-6"
                      href="https://buy.stripe.com/9AQ3dz33pfybaic4gg"
                    >
                      <span className="mr-2">Purchase</span>
                      <div className="-mr-4 flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground">
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </div>
                    </a>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full my-6 lg:hidden"
                  />
                  <ul className="space-y-3 lg:pl-6">
                    <li className="flex items-start space-x-3">
                      <span className="justify-centertext-foreground mt-0.5 flex h-4 w-4 shrink-0 items-center">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">Next 15 & React 19</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="justify-centertext-foreground mt-0.5 flex h-4 w-4 shrink-0 items-center">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Auth, billing, emails, members, invites, organization, onboarding, profile, dashboard, API keys, webhooks and more
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="justify-centertext-foreground mt-0.5 flex h-4 w-4 shrink-0 items-center">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">Unlimited developers/projects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="justify-centertext-foreground mt-0.5 flex h-4 w-4 shrink-0 items-center">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">Personal and commercial usage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
