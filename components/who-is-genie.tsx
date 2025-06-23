import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Heart, Shield, Sparkles } from "lucide-react"

export default function WhoIsGenie() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Powered by cutting-edge machine learning algorithms",
    },
    {
      icon: Heart,
      title: "Empathetic Care",
      description: "Designed to provide compassionate genetic guidance",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your genetic data remains completely confidential",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-110"></div>
            <Image
              src="/genetic-counselor.png"
              alt="Genetic counselor consulting with patient"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-xl"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800 border-blue-200">
                <Sparkles className="h-3 w-3 mr-1" />
                Meet Your AI Counselor
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Who is Genie?
              </h2>

              <p className="text-gray-600 md:text-lg leading-relaxed">
                Genie is a state-of-the-art artificial intelligence system designed to provide personalized guidance and{" "}
                <Link href="/services" className="text-emerald-600 hover:underline font-medium">
                  genetic counseling services
                </Link>{" "}
                as you navigate through your genetic journey. Built on the foundations of advanced machine learning
                algorithms, Genie taps into a comprehensive database of genetic research.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {features.map((feature, index) => (
                <Card key={index} className="border-gray-100 hover:border-emerald-200 transition-colors">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <feature.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/ask-genie">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Start Conversation</Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="border-emerald-200 hover:bg-emerald-50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
