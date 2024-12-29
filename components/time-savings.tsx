type TimeEntry = {
  feature: string;
  hours: string;
};

const timeEntries: TimeEntry[] = [
  { feature: "Landing page, blog and docs", hours: "20h" },
  { feature: "Credentials auth with all extras", hours: "38h" },
  { feature: "Social logins & connected accounts", hours: "4h" },
  { feature: "Multi-factor authentication", hours: "14h" },
  { feature: "Email templates", hours: "6h" },
  { feature: "Organizations", hours: "9h" },
  { feature: "Members & invites", hours: "20h" },
  { feature: "Billing integration", hours: "4h" },
  { feature: "Onboarding", hours: "4h" },
  { feature: "App shell", hours: "7h" },
  { feature: "Dashboard", hours: "9h" },
  { feature: "Master/detail pages", hours: "32h" },
  { feature: "Account settings", hours: "37h" },
  { feature: "API keys & webhooks", hours: "16h" },
  { feature: "Figure out Next caching", hours: "∞" },
];

export function TimeSavings() {
  return (
    <section className="container mx-auto py-24 sm:px-4 sm:py-32">
      <h2 className="mb-8 text-3xl font-bold sm:mb-12 sm:text-center md:text-4xl">
        Building a web app takes time
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:gap-8 sm:p-4 md:grid-cols-5 md:gap-4 lg:gap-8">
        <div className="col-span-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {timeEntries.map((item) => (
            <div
              key={item.feature}
              className="flex h-7 items-center justify-between rounded-3xl bg-neutral-50 p-4 dark:bg-neutral-800 sm:h-10"
            >
              <span className="text-sm">{item.feature}</span>
              <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                {item.hours}
              </span>
            </div>
          ))}
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="text-center">
            <p className="text-5xl font-bold sm:text-6xl">220+</p>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
              Hours saved
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              That's at least 27 work days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

