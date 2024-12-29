import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FAQSection } from "@/components/faq-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function ContactForm() {
  return (
    <div className="flex min-h-screen flex-col">
      
    <div className="flex items-center justify-center px-4 pt-16 sm:px-6 sm:pt-20 md:pt-24 lg:px-8">
      <div className="relative w-full max-w-5xl space-y-8">
        <h1 className="mb-12 text-center text-3xl font-bold tracking-tight sm:mb-16 sm:text-4xl md:mb-20 md:text-5xl lg:mb-24 lg:text-6xl">
          We&apos;d love to hear<br /> from you!
        </h1>
        <div className="relative grid grid-cols-12 gap-4">
          <div className="col-span-12 space-y-6 md:col-span-5">
            <div className="mx-auto max-w-[80%] space-y-6 text-center md:mx-0 md:max-w-none md:text-left">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Get in touch</h2>
              <p className="text-base text-muted-foreground">
                If you have any questions, don&apos;t hesitate to contact our team. We&apos;ll get back to you within 48
                hours.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Card className="mx-auto max-w-lg rounded-xl p-8 shadow-lg dark:border dark:shadow-none">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    className="py-3"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex flex-row items-center">
                  <Button type="submit" className="rounded-full">
                    Send message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <FAQSection />
    <CallToAction/>
    <Footer />
    </div>
  )
}

