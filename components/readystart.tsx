"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export  function ReadyToStart() {
  const text = "Ready to start?"
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5
      }
    }
  }
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <section className="container relative pr-4 sm:pr-10 md:pr-12 lg:pr-18">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-8 md:flex-row mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <motion.h2 
          className="text-center text-3xl font-semibold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
        <div className="flex flex-row items-center gap-2">
          <Button asChild size="sm" className="rounded-3xl">
            <Link href="https://demo.achromatic.dev" target="_blank" rel="noopener noreferrer">
              Demo
              <ExternalLink className="ml-1 h-4 w-4 shrink-0" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-3xl">
            <Link href="/docs">
              Docs
              <ExternalLink className="ml-1 h-4 w-4 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

