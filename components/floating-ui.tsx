"use client"

import Image from "next/image"
import { Search, X, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,

} from "@/components/ui/table"

export function FloatingUI() {
  return (
    <section className="max-h-[300px] w-full bg-gradient-to-b from-white to-[#E9E6EC] dark:from-[#09090b] dark:to-[#28252a]">
      <div className="container relative mx-auto flex max-h-none min-h-[300px] flex-row justify-between gap-6 overflow-x-hidden pb-6">
        {/* Profile and Search Column */}
        <div className="mb-6 flex min-w-[320px] flex-col gap-20">
          <div 
            className="mt-4 flex items-center space-x-3"
            style={{
              animation: "fly 4s cubic-bezier(.75,.02,.31,.87) infinite",
              animationDelay: "0.75s"
            }}
          >
            <div className="relative">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                <Image
                  src="/placeholder.svg"
                  alt="JB"
                  width={40}
                  height={40}
                  className="aspect-square h-full w-full"
                />
              </span>
              <span className="absolute bottom-0 right-0 z-10 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-background" />
            </div>
            <div className="text-sm font-semibold">Justin Blake</div>
          </div>

          <div className="flex flex-row justify-end">
            <div 
              className="rounded-md bg-background"
              style={{
                animation: "fly 4s cubic-bezier(.75,.02,.31,.87) infinite",
                animationDelay: "1.25s"
              }}
            >
              <div className="relative inline-block h-9 w-full">
                <span className="absolute left-3 top-1/2 flex -translate-y-1/2 text-muted-foreground">
                  <Search className="h-4 w-4 shrink-0" />
                </span>
                <Input
                  className="px-10"
                  placeholder="Search"
                />
                <span className="absolute left-auto right-3 top-1/2 flex -translate-y-1/2 text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="-mr-2.5 h-8 w-8 hidden"
                  >
                    <X className="h-4 w-4 shrink-0" />
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div 
          className="mt-4 h-fit min-w-[400px] rounded-lg bg-background shadow"
          style={{
            animation: "fly 4s cubic-bezier(.75,.02,.31,.87) infinite",
            animationDelay: "1.15s"
          }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-4">
                  <Checkbox checked />
                </TableHead>
                <TableHead className="text-xs font-medium">Name</TableHead>
                <TableHead className="text-xs font-medium">Email</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="pl-4">
                  <Checkbox checked />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex flex-row items-center gap-2">
                    <span className="relative flex overflow-hidden h-4 w-4 shrink-0 rounded-md">
                      <Image
                        src="/placeholder.svg"
                        alt="logo"
                        width={16}
                        height={16}
                        className="aspect-square h-full w-full"
                      />
                    </span>
                    Adobe
                  </div>
                </TableCell>
                <TableCell>info@adobe.com</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <MoreHorizontal className="h-4 w-4 shrink-0" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Form */}
        <div 
          className="relative mt-8 h-fit min-w-[360px] rounded-lg bg-background p-6 shadow"
          style={{
            animation: "fly 4s cubic-bezier(.75,.02,.31,.87) infinite",
            animationDelay: "0"
          }}
        >
          <div className="[&>h3]:step ml-4 border-l pl-8 [counter-reset:step]">
            <h3 className="text-sm font-semibold">Personal Information</h3>
            <div className="mt-2 w-60 space-y-2">
              <label
                id="label-name"
                className="block text-sm font-medium text-muted-foreground"
              >
                Name
              </label>
              <Input
                type="text"
                aria-labelledby="label-name"
              />
              <Button className="!mt-4 w-full">
                Next
              </Button>
            </div>
            <h3 className="mt-8 text-sm font-semibold">Account</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

