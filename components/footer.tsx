"use client"

import { Github, Sun, Moon } from 'lucide-react'
import { useTheme } from "next-themes"

export function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="mt-32 border-t py-16">
      <div className="container">
        <div className="flex-start md:flex-center flex flex-col justify-between gap-8 px-2 md:flex-row md:gap-0">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} Achromatic. All rights reserved.
            </span>
            <span className="text-sm text-muted-foreground">
              🌳 Achromatic is a{" "}
              <a 
                href="https://climate.stripe.com/UMQ6PQ" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline"
              >
                Stripe Climate Member
              </a>
              .
            </span>
          </div>
          <nav className="flex items-center gap-2 flex-start">
            <a
              className="whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 flex w-fit items-center justify-between p-2 font-normal"
              href="https://achromatic.betteruptime.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small className="text-sm">Status:</small>
              <div className="mx-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
              <small className="text-sm">All systems normal</small>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/achromaticlabs/pro"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/achromaticlabs"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
            >
              <svg 
                className="h-3 w-3 fill-current" 
                height="23" 
                viewBox="0 0 1200 1227" 
                width="23" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}

