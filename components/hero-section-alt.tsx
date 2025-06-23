import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Shield, Zap } from "lucide-react"
import BackgroundPattern from "./background-pattern"

export default function HeroSectionAlt() {
  return (
    <section className="relative w-full py-12 md:py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern />

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-emerald-100 text-emerald-800 border-emerald-200">
                <Sparkles className="h-3 w-3 mr-1" />
                {"World's First AI Genetic Counselor"}
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Unlock Your Code: Meet Genie
              </h1>

              <h2 className="text-xl text-gray-600 sm:text-2xl">Your Personal AI Genetic Counselor</h2>

              <p className="text-gray-600 md:text-lg leading-relaxed">
                At Cover My Genetics, we believe that understanding your genetic makeup is the key to unlocking valuable
                insights about your health, well-being, and even your ancestry. Genie makes complex genetic information
                accessible and personalized just for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ask-genie">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Ask Genie Now
                </Button>
              </Link>
              <Link href="/api-setup">
                <Button size="lg" variant="outline" className="border-emerald-200 hover:bg-emerald-50">
                  <Zap className="h-4 w-4 mr-2" />
                  Unlimited Access
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-600" />
                <span>Instant Responses</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur-2xl opacity-20 scale-110"></div>
              <Image
                src="/hero-dna.png"
                alt="DNA Helix and Genetic Analysis"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
