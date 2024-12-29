"use client"

import * as React from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const previewTabs = [
  {
    id: "master",
    label: "Master page",
  },
  {
    id: "detail",
    label: "Detail page",
  },
  {
    id: "settings",
    label: "Settings",
  },
  {
    id: "dashboard",
    label: "Dashboard",
  },
  {
    id: "login",
    label: "Login",
  },
]

export function PreviewTabs() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <div className="scrollbar-none overflow-auto">
        <TabsList className="inline-flex h-fit w-full justify-start gap-2 rounded-none border-b bg-transparent p-0 sm:justify-center">
          {previewTabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-3 py-1 pb-3 pt-2 text-sm font-medium text-muted-foreground shadow-none transition-none hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <div className="relative mt-1 w-full rounded-xl bg-neutral-50 p-1 dark:border-none dark:bg-background">
        {previewTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-0">
            <Image
              src={`/image1.webp?height=652&width=1340`}
              alt={`${tab.label} screenshot`}
              width={1340}
              height={652}
              className="block rounded-xl border shadow dark:hidden"
            />
            <Image
              src={`/image2.webp?height=652&width=1340`}
              alt={`${tab.label} screenshot`}
              width={1340}
              height={652}
              className="hidden rounded-xl border shadow dark:block"
            />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

