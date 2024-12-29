"use client"

import Link from "next/link"
import { Search, Sun, Moon } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="none"
              viewBox="0 0 64 64"
              className="h-6 w-6"
            >
              <path
                fill="currentColor"
                d="M0 20C0 8.954 8.954 0 20 0h24c11.046 0 20 8.954 20 20v24c0 11.046-8.954 20-20 20H20C8.954 64 0 55.046 0 44V20z"
              />
              <path
                fill="currentColor"
                className="text-white dark:text-black"
                d="M31.976 11.96L47.016 42h-6.08l-8.96-18.88L23.056 42h-6.08l15-30.04z"
              />
            </svg>
            <span className="hidden font-bold xl:inline-block">Achromatic</span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium text-muted-foreground transition-colors hover:text-foreground mr-2">
                  Getting Started
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs/components" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium text-muted-foreground transition-colors hover:text-foreground mr-2">
                  Components
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://demo.achromatic.dev" legacyBehavior passHref>
                <NavigationMenuLink className="relative flex items-center font-medium text-muted-foreground transition-colors hover:text-foreground mr-4">
                  Demo
                  <svg width="7" height="7" viewBox="0 0 6 6" className="absolute right-[-10px] top-[2px] opacity-80">
                    <path fill="currentColor" d="M1.252 5.547l-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396-3.159 3.162z"/>
                  </svg>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium text-muted-foreground transition-colors hover:text-foreground mr-2">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://achromatic.canny.io" legacyBehavior passHref>
                <NavigationMenuLink className="relative flex items-center font-medium text-muted-foreground transition-colors hover:text-foreground mr-4">
                  Roadmap
                  <svg width="7" height="7" viewBox="0 0 6 6" className="absolute right-[-10px] top-[2px] opacity-80">
                    <path fill="currentColor" d="M1.252 5.547l-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396-3.159 3.162z"/>
                  </svg>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden lg:flex">
            <Button variant="ghost" className="w-9 px-0 lg:w-auto lg:px-4">
              <Search className="h-4 w-4 lg:mr-2" />
              <span className="hidden lg:inline-block">Search documentaion...</span>
              <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Link href="/contact" passHref>
              <Button variant="ghost" className="hidden lg:flex">
                Contact
              </Button>
            </Link>
            <Link href="https://buy.stripe.com/9AQ3dz33pfybaic4gg" passHref>
              <Button>Buy Pro</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

