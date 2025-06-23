import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Shield, Zap, Users, Heart, FileText } from "lucide-react"
import Image from "next/image"

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your genetic data with precision",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your genetic information is encrypted and never shared with third parties",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get immediate answers to your genetic questions 24/7",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Understand inheritance patterns and genetic risks for your family",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Heart,
      title: "Health Guidance",
      description: "Personalized recommendations based on your genetic profile",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Comprehensive genetic reports you can share with healthcare providers",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-emerald-100 text-emerald-800">
            Why Choose Cover My Genetics
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive Genetic Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with genetic expertise to provide you with personalized
            insights and guidance for your genetic journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:border-emerald-200 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Trusted by Families Worldwide</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of families who have unlocked their genetic potential with Cover My Genetics. Our
              AI-powered platform makes complex genetic information accessible and actionable.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-600">10K+</div>
                <div className="text-sm text-gray-600">Families Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">50K+</div>
                <div className="text-sm text-gray-600">Questions Answered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/family-genetics.png"
              alt="Family discussing genetic health"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
