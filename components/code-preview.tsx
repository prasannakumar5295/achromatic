"use client"

import { Copy } from 'lucide-react'
import { Button } from "@/components/ui/button"

export  function CodePreview() {
  return (
    <section className="container relative">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
        <div className="order-2 lg:order-1">
          <div className="rounded-xl border">
            <div className="flex h-12 flex-row items-center justify-between rounded-t-xl border-b bg-neutral-50 px-4 dark:bg-background">
              <div className="flex flex-row items-center">
                <div className="flex w-4 shrink-0 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 512 512" className="text-muted-foreground">
                    <rect width="512" height="512" fill="currentColor" rx="50"/>
                    <path fill="currentColor" fillRule="evenodd" d="M316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386S368.637 470 380.949 470c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65S470 415.559 470 403.044c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894a97.514 97.514 0 0113.694 4.928c4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492S415.797 238 404.112 238c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zM232.78 284.082H297V243H118v41.082h63.906V467h50.874z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="ml-2 text-xs text-muted-foreground">app/dashboard/settings/profile/page.tsx</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="copy">
                <Copy className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Button>
            </div>
            <pre className="max-h-[480px] overflow-x-auto py-5 dark:!bg-neutral-900">
              <code className="relative font-mono text-sm">
                {'export default function Profile(): JSX.Element {\n'}
                {'  return (\n'}
                {'    <Page>\n'}
                {'      <PageHeader>\n'}
                {'        <PageTitle>Profile</PageTitle>\n'}
                {'        <PageActions>\n'}
                {'          ...\n'}
                {'        </PageActions>\n'}
                {'      </PageHeader>\n'}
                {'      <PageBody>\n'}
                {'        ...\n'}
                {'      </PageBody>\n'}
                {'    </Page>\n'}
                {'  );\n'}
                {'}\n'}
              </code>
            </pre>
          </div>
        </div>
        <div className="order-1 space-y-8 lg:order-2 lg:mt-12 lg:max-w-lg">
          <h2 className="text-3xl font-bold leading-tight">Less boilerplate build with speed</h2>
          <p className="text-lg font-light text-muted-foreground">
            <strong className="font-semibold text-foreground">Achromatic</strong>
            {' '}ships with many foundational and advanced components that cover a wide range of use-cases. Carefully crafted to reduce boilerplate code without sacrificing flexibility and responsive design.
          </p>
          <a 
            className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-3 text-xs rounded-3xl"
            href="/docs/components"
          >
            Explore
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 shrink-0">
              <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

