"use client"

import { ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const generalQuestions = [
  {
    question: "What do I get exactly with Achromatic?",
    answer: "You get a complete Next.js 15 SaaS starter kit with authentication, billing, email templates, organization management, and more. Everything is built with the latest technologies and best practices."
  },
  {
    question: "How often is Achromatic updated?",
    answer: "Achromatic is regularly updated to keep up with the latest Next.js releases and security patches. We also continuously add new features and improvements based on user feedback."
  },
  {
    question: "Do I need to be an expert to use Achromatic?",
    answer: "No, you don't need to be an expert. While having experience with React and Next.js is helpful, our documentation covers everything you need to know to get started."
  },
  {
    question: "What authentication options are available?",
    answer: "We support credentials (email/password), social logins (Google, GitHub), and magic links. You can also enable two-factor authentication for added security."
  },
  {
    question: "Can I use Achromatic if my tech stack is different?",
    answer: "Achromatic is built specifically for Next.js and React. While you can use it as inspiration for other tech stacks, the code and components are optimized for the Next.js ecosystem."
  }
]

const technicalQuestions = [
  {
    question: "What version of Next.js does Achromatic use?",
    answer: "Achromatic uses the latest stable version of Next.js, which is currently Next.js 15."
  },
  {
    question: "Is Achromatic compatible with TypeScript?",
    answer: "Yes, Achromatic is fully built with TypeScript, providing type safety and improved developer experience."
  }
]

const paymentQuestions = [
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards and PayPal for purchasing Achromatic."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 14-day money-back guarantee if you're not satisfied with your purchase."
  }
]

const licenseQuestions = [
  {
    question: "Can I use Achromatic for commercial projects?",
    answer: "Yes, your purchase of Achromatic includes a license for both personal and commercial use."
  },
  {
    question: "Is there a limit to the number of projects I can create?",
    answer: "No, there's no limit. You can use Achromatic for as many projects as you want, whether personal or commercial."
  }
]

export function FAQSection() {
  return (
    <section className="container relative pt-24 md:pt-32 lg:pt-40">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <Tabs defaultValue="general">
          <TabsList className="items-center text-muted-foreground mb-6 flex h-fit flex-row justify-center">
            <TabsTrigger 
              value="general"
              className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent py-1 text-sm text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              General
            </TabsTrigger>
            <TabsTrigger 
              value="technical"
              className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent py-1 text-sm text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger 
              value="payment"
              className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent py-1 text-sm text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              Payment
            </TabsTrigger>
            <TabsTrigger 
              value="license"
              className="group relative inline-flex items-center justify-center whitespace-nowrap rounded-3xl border bg-transparent py-1 text-sm text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              License
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Accordion type="single" collapsible>
              {generalQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base">
                    {item.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="technical">
            <Accordion type="single" collapsible>
              {technicalQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base">
                    {item.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="payment">
            <Accordion type="single" collapsible>
              {paymentQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base">
                    {item.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="license">
            <Accordion type="single" collapsible>
              {licenseQuestions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base">
                    {item.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
